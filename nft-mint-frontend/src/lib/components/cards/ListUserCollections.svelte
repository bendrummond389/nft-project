<script lang="ts">
  import * as Card from '$lib/components/ui/card'
  import { onMount } from 'svelte'
  import Separator from '../ui/separator/separator.svelte'
  import type { ERC721Factory } from '$lib/types'
  import { fetchDeployedTokens } from '$lib/ethereum'
  import { ethers } from 'ethers'

  let deployedTokens: ERC721Factory.TokenMetadataStruct[] = []

  const getDeployedTokens = async () => {
    deployedTokens = await fetchDeployedTokens()
  }

  onMount(() => {
    getDeployedTokens()
  })

  if (!window.ethereum) {
    alert("A wallet must be connected to view it's associated collections")
  } else {
    

  }
</script>


