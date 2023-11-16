<script lang="ts">
  import { Contract, ethers, type AddressLike, type Provider } from 'ethers'
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

      try {
        const accounts = await window.ethereum.request({
          method: 'eth_accounts',
        })

        if (accounts.length > 0) {
          setWalletAddress(accounts[0])
        }
      } catch (error: any) {
        console.error(error)
      }
      
    }
  })

  const setProvider = (provider: Provider) => {
    ethProvider.set(provider)
  }

  const setWalletAddress = (address: AddressLike) => {
    walletAddress.set(address)
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
      setWalletAddress(accounts[0] || null)
    })
  }
</script>
