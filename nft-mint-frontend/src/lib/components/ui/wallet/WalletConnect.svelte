<script lang="ts">
  import { ethers } from 'ethers'
  import Button from '../button/button.svelte'
  import { walletAddress, ethSigner, ethProvider } from '$lib/stores/wallet'
  import { onMount } from 'svelte'
  import MetaMaskLogo from '../metamask/MetaMaskLogo.svelte'

  let loading: boolean = true

  onMount(async () => {
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({
          method: 'eth_accounts',
        })
        if (Array.isArray(accounts) && accounts.length > 0) {
          walletAddress.set(accounts[0])
          createSigner()
        }
      } catch (error) {
        console.error('Error fetching accounts: ', error)
      }
    }
    loading = false
  })

  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({
          method: 'eth_requestAccounts',
        })
        if (Array.isArray(accounts) && accounts.length > 0) {
          walletAddress.set(accounts[0])
          createSigner()
        } else {
          console.error('No accounts returned by MetaMask')
        }
      } catch (error) {
        console.error('Error connecting to MetaMask: ', error)
      }
    } else {
      alert('MetaMask not installed')
    }
  }

  const createSigner = async () => {
    const provider = new ethers.BrowserProvider(window.ethereum)
    const signer = await provider.getSigner()
    ethSigner.set(signer)
  }
</script>

  {#if loading}
    <span></span>
  {:else if $walletAddress}
    <p class="text-primary/70"> <MetaMaskLogo /> </p>
  {:else}
    <Button variant="outline" class="" on:click="{connectWallet}"> <MetaMaskLogo /> </Button>
  {/if}
