<script lang="ts">
  import { onMount } from 'svelte'
  import * as Card from '$lib/components/ui/card'
  import type { ERC721Factory } from '$lib/types'
  import { fetchDeployedTokens } from '$lib/ethereum'
  import { walletAddress } from '$lib/stores/wallet'
  import { Separator } from '../ui/separator'

  let deployedTokens: ERC721Factory.TokenMetadataStruct[] = []
  let userTokens: ERC721Factory.TokenMetadataStruct[] = []

  const getDeployedTokens = async () => {
    deployedTokens = await fetchDeployedTokens()
  }

  const checkMetaMaskConnection = async () => {
    if (window.ethereum) {
      const accounts = await window.ethereum.request({ method: 'eth_accounts' })
      if (accounts.length === 0) {
        walletAddress.set(null)
      }
    } else {
      alert('A wallet must be connected to view its associated collections')
    }
  }

  onMount(async () => {
    await getDeployedTokens()
    checkMetaMaskConnection()
  })

  $: if ($walletAddress && deployedTokens.length > 0) {
    userTokens = deployedTokens.filter(
      (token) =>
        token.owner.toString().toLowerCase() ===
        $walletAddress?.toString().toLowerCase()
    )
  } else {
    userTokens = []
  }
</script>

<div class="flex flex-row w-full">
  <Card.Root class="w-1/4 m-2">
    <Card.Header>
      <Card.Title>Your Collections</Card.Title>
      <Card.Description>
        here you can see a list of your collections
      </Card.Description>
      <Separator />
    </Card.Header>
    <Card.Content>
      {#each userTokens as token}
        <div>{token.name}</div>
      {/each}
    </Card.Content>
  </Card.Root>
</div>
