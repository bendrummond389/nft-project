<script lang="ts">
  import { ethers } from 'ethers'
  import Button from '../button/button.svelte'
  import { walletAddress } from '$lib/stores/wallet'
  import { onMount } from 'svelte'

  let loading: boolean = true

  onMount(async () => {
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({
          method: 'eth_accounts',
        })
        if (Array.isArray(accounts) && accounts.length > 0) {
          walletAddress.set(accounts[0])
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
</script>

{#if loading}
  <span></span>
{:else if $walletAddress}
  <p class="text-orange-400">Connected to MetaMask</p>
{:else}
  <Button on:click="{connectWallet}">Connect to MetaMask</Button>
{/if}
