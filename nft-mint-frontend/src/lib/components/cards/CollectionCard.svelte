<script lang="ts">
  import * as Card from '$lib/components/ui/card'
  import { onMount } from 'svelte'
  import Separator from '../ui/separator/separator.svelte'
  import type { ERC721Factory, ERC721Token } from '$lib/types'
  import { fetchDeployedTokens } from '$lib/ethereum'

  export let token: ERC721Factory.TokenMetadataStruct
</script>

<div class="flex flex-row w-full">
  <Card.Root class="w-[200px] md:w-[400px] m-2">
    <Card.Header>
      <Card.Title>
        <a
          class="text-2xl hover:text-primary/70"
          href="{`/collections/${token.tokenAddress}`}"
        >
          {token.name}
        </a>
      </Card.Title>
      <Card.Description>
        Symbol: {token.symbol}
        <br />
        <span class="line-clamp-2">Description: {token.description}</span>
      </Card.Description>
      <Separator />
    </Card.Header>
    <Card.Content>
      <div class="bg-secondary rounded-sm p-2">
        <a
          target="_blank"
          href="{`https://sepolia.etherscan.io/address/${token.tokenAddress}`}"
          >View contract on Etherscan</a
        >
      </div>
    </Card.Content>
  </Card.Root>
</div>
