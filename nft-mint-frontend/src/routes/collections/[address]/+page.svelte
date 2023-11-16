<script lang="ts">
  import { page } from '$app/stores'
  import { abi as TokenABI } from '$lib/contracts/ERC721Token.json'
  import { ethers } from 'ethers'
  import * as Card from '$lib/components/ui/card'
  import { ethSigner, walletAddress } from '$lib/stores/wallet'
  import type { ERC721Token } from '$lib/types'
  import MintNft from '$lib/components/cards/MintNFT.svelte'
  import { onMount } from 'svelte'
  import Separator from '$lib/components/ui/separator/separator.svelte'

  const collectionAddress = $page.params.address

  let tokenContract: ERC721Token
  let uriArray: string[] = []
  let collectionOwner = ''

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
      collectionOwner = await tokenContract.owner()
    }
  }
</script>

<div class="flex flex-row w-full p-5">
  {#if uriArray.length > 0}
    <div class="rounded-xl border h-min-[700px] w-fill text-center">
      <h1 class="font-semibold text-4xl mt-3">NFT's in this collection</h1>
      <Separator class="my-2" />
      <div class="grid grid-cols-3">
        {#each uriArray as uri}
          {#if uri}
            <div class="m-3 border rounded">
              <img
                src="{`https://ipfs.io/ipfs/${uri}`}"
                alt="NFT "
                class="w-auto aspect-square rounded"
              />
            </div>
          {/if}
        {/each}
      </div>
    </div>
  {/if}
  <div class="mx-auto text-center">
    {#if tokenContract}
      <MintNft
        contract="{tokenContract}"
        disabled="{$walletAddress?.toString().toLowerCase() !=
          collectionOwner.toLowerCase()}"
      />
      <a target="_blank" href="{`https://sepolia.etherscan.io/address/${collectionAddress}`}">
        <h3 class="mt-2">View on Etherscan</h3>
      </a>
    {/if}
  </div>
</div>
