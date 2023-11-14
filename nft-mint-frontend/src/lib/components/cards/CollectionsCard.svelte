<script lang="ts">
  import * as Card from '$lib/components/ui/card'
  import { onMount } from 'svelte'
  import { contract as factoryContract } from '$lib/stores/contract'
  import { get } from 'svelte/store'
  import Separator from '../ui/separator/separator.svelte'
  import type { ERC721Factory, ERC721Token } from '$lib/types'

  let deployedTokens: ERC721Factory.TokenMetadataStruct[] = []

  const fetchDeployedTokens = async () => {
    const factory = get(factoryContract)

    if (factory) {
      try {
        let tokens = await factory.getDeployedTokens()
        // Create a copy of the array and then sort
        deployedTokens = [...tokens]
          .sort((a, b) => b.tokenAddress.localeCompare(a.tokenAddress))
          .slice(0, 4)
      } catch (error) {
        console.error('Error fetching deployed tokens:', error)
      }
    }
  }

  onMount(() => {
    fetchDeployedTokens()
  })
</script>

<div class="flex flex-row w-full">
  {#each deployedTokens as token}
    <Card.Root class="w-1/4 m-2">
      <Card.Header>
        <Card.Title>{token.name}</Card.Title>
        <Card.Description>
          Symbol: {token.symbol}
          <br />
          Description: {token.description}
        </Card.Description>
        <Separator />
      </Card.Header>
      <Card.Content>
        <a href="{`https://sepolia.etherscan.io/address/${token.tokenAddress}`}"
          >See contract on Etherscan</a
        >
      </Card.Content>
    </Card.Root>
  {/each}
</div>
