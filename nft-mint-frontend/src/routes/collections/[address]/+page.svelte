<script lang="ts">
  import { page } from '$app/stores'
  import { abi as TokenABI } from '$lib/contracts/ERC721Token.json'
  import { ethers } from 'ethers'
  const collectionAddress = $page.params.address
  import { ethProvider } from '$lib/stores/wallet'
  import type { ERC721Token } from '$lib/types'
  import MintNft from '$lib/components/cards/MintNFT.svelte'
  import { contract } from '$lib/stores/contract'

  const tokenContract = new ethers.Contract(
    collectionAddress,
    TokenABI,
    $ethProvider
  ) as unknown as ERC721Token

  let uriArray

  const fetchUris = async () => {
    uriArray = tokenContract.getAllURIs()
  }

  console.log(uriArray)
</script>

<h1>{collectionAddress}</h1>

<MintNft contract="{tokenContract}" />
