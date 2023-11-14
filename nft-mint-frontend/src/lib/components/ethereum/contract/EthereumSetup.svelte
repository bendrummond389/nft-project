<script lang="ts">
  import { Contract, ethers, type Provider } from 'ethers'
  import { onMount } from 'svelte'
  import { abi as ContractFactoryABI } from '$lib/contracts/ERC721Factory.json'
  import { contract } from '$lib/stores/contract'
  import { FactoryAddress } from '$lib/ethereum'
  import type { ERC721Factory } from '$lib/types/ERC721Factory'
  import { walletAddress, ethProvider } from '$lib/stores/wallet'

  onMount(async () => {
    if (!window.ethereum) {
      alert('Please install MetaMask Before continuing: https://metamask.io/')
    } else {
      let provider = new ethers.BrowserProvider(window.ethereum)
      setupEthereumListeners()
      setProvider(provider)
      setContract(provider)
    }
  })

  const setProvider = (provider: Provider) => {
    ethProvider.set(provider)
  }

  const setContract = (provider: Provider) => {
    const contractInstance = new ethers.Contract(
      FactoryAddress,
      ContractFactoryABI,
      provider
    ) as unknown as ERC721Factory
    contract.set(contractInstance)
  }

  const setupEthereumListeners = () => {
    window.ethereum.on('accountsChanged', (accounts) => {
      walletAddress.set(accounts[0] || null)
    })
  }
</script>
