<script lang="ts">
  import { Contract, ethers } from 'ethers'
  import { onMount } from 'svelte'
  import { abi as ContractFactoryABI } from '$lib/contracts/ERC721Factory.json'
  import { contract } from '$lib/stores/contract'
  import { FactoryAddress } from '$lib/ethereum'

  onMount(async () => {
    let signer = null
    let provider
    if (!window.ethereum) {
      alert('Web3 not enabled, please install metamask')
    }

    provider = new ethers.BrowserProvider(window.ethereum)
    const contractInstance = new ethers.Contract(
      FactoryAddress,
      ContractFactoryABI,
      provider
    )

    contract.set(contractInstance)
    console.log('contract successfully set: ', contractInstance)
  })
</script>
