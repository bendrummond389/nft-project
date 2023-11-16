<script lang="ts">
  import { onMount } from 'svelte'
  import { ethSigner, walletAddress } from '$lib/stores/wallet'
  import { FactoryAddress } from '$lib/ethereum'
  import { ethers } from 'ethers'
  import { abi as factoryABI } from '$lib/contracts/ERC721Factory.json'
  import type { ERC721Factory } from '$lib/types'
  import * as Popover from '$lib/components/ui/popover'
  import { Label } from '$lib/components/ui/label'
  import { Input } from '$lib/components/ui/input'
  import { Button } from '$lib/components/ui/button'
  import { fetchDeployedTokens } from '$lib/ethereum'
  import CollectionCard from '$lib/components/cards/CollectionCard.svelte'

  let factoryContract: ERC721Factory | null = null
  let deployedTokens: ERC721Factory.TokenMetadataStruct[] = []
  let personalTokens: ERC721Factory.TokenMetadataStruct[] = []

  let collectionName: string = ''
  let collectionSymbol: string = ''
  let collectionDescription: string = ''

  $: if ($ethSigner) {
    factoryContract = new ethers.Contract(
      FactoryAddress,
      factoryABI,
      $ethSigner
    ) as unknown as ERC721Factory
  }

  const handleNameChange = (event: Event) => {
    collectionName = (event.target as HTMLInputElement).value
  }
  const handleSymbolChange = (event: Event) => {
    collectionSymbol = (event.target as HTMLInputElement).value
  }
  const handleDescriptionChange = (event: Event) => {
    collectionDescription = (event.target as HTMLInputElement).value
  }

  const createCollection = async () => {
    if (!factoryContract) {
      alert('Factory contract not found')
      return
    }
    try {
      factoryContract.createToken(
        collectionName,
        collectionSymbol,
        collectionDescription
      )
    } catch (error: any) {
      console.error(error)
    }
  }

  const getDeployedTokens = async () => {
    deployedTokens = await fetchDeployedTokens()
  }

  onMount(() => {
    getDeployedTokens()
  })

  $: if (deployedTokens.length && $walletAddress != null) {
    personalTokens = deployedTokens.filter((token) => {
      console.log($walletAddress)
      console.log(token.tokenAddress)
      return (
        $walletAddress?.toString().toLowerCase() ==
        token.owner.toString().toLowerCase()
      )
    })
  }
</script>

<div class="p-5">
  <h2 class="text-xl font-semibold mb-4">Featured Collections</h2>

  <div class="overflow-scroll">
    <div class="flex flex-row w-fit">
      {#each deployedTokens.reverse().slice(0, 5) as token}
        <CollectionCard token="{token}" />
      {/each}
    </div>
  </div>
  <h2 class="text-xl font-semibold mt-2 mb-4">Your Collections</h2>

  <div class="overflow-scroll">
    <div class="flex flex-row w-fit">
      {#each personalTokens.reverse().slice(0, 5) as token}
        <CollectionCard token="{token}" />
      {/each}
    </div>
  </div>

  <Popover.Root>
    <Popover.Trigger class="m-5">
      <div class="p-5 rounded-lg bg-primary text-secondary">Add Collection</div>
    </Popover.Trigger>
    <Popover.Content class="rounded-2xl mt-4">
      <form>
        <div class="flex flex-col space-y-1.5">
          <Label for="collection_name" class="mb-2">NFT Name</Label>
          <Input
            id="collection_name"
            placeholder="Collection name"
            on:input="{handleNameChange}"
          />
          <Label for="collection_symbol" class="mb-2">NFT Symbol</Label>
          <Input
            id="collection_symbol"
            placeholder="Collection symbol"
            on:input="{handleSymbolChange}"
          />
          <Label for="collection_description" class="mb-2"
            >NFT Description
          </Label>
          <Input
            id="collection_description"
            placeholder="Collection description"
            on:input="{handleDescriptionChange}"
          />
          <Button class="mt-3" on:click="{createCollection}">Create</Button>
        </div>
      </form>
    </Popover.Content>
  </Popover.Root>
</div>
