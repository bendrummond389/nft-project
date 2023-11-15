<script lang="ts">
  import { page } from '$app/stores'
  import { abi as TokenABI } from '$lib/contracts/ERC721Token.json'
  import { ethers } from 'ethers'
  import { ethSigner } from '$lib/stores/wallet'
  import type { ERC721Token } from '$lib/types'
  import MintNft from '$lib/components/cards/MintNFT.svelte'
  import { onMount } from 'svelte'

  const collectionAddress = $page.params.address

  let tokenContract: ERC721Token
  let uriArray: string[]

  $: if ($ethSigner) {
    tokenContract = new ethers.Contract(
      collectionAddress,
      TokenABI,
      $ethSigner
    ) as unknown as ERC721Token
    fetchUris()
  }

  const fetchUris = async () => {
    if (tokenContract) {
      uriArray = await tokenContract.getAllURIs()
    }
    console.log(uriArray)
  }
</script>

<h1>{collectionAddress}</h1>

{#if tokenContract}
  <MintNft contract="{tokenContract}" />
{/if}
