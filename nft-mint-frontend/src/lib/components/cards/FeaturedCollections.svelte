<script lang="ts">
  import * as Card from '$lib/components/ui/card'
  import { onMount } from 'svelte'
  import Separator from '../ui/separator/separator.svelte'
  import type { ERC721Factory } from '$lib/types'
  import { fetchDeployedTokens } from '$lib/ethereum'

  let deployedTokens: ERC721Factory.TokenMetadataStruct[] = []

  const getDeployedTokens = async () => {
    deployedTokens = await fetchDeployedTokens()
  }

  onMount(() => {
    getDeployedTokens()
    deployedTokens.slice(0, 4)
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
        <a
          target="_blank"
          class="bg-secondary rounded-sm p-2"
          href="{`https://sepolia.etherscan.io/address/${token.tokenAddress}`}"
          >View contract on Etherscan</a
        >
      </Card.Content>
    </Card.Root>
  {/each}
</div>
