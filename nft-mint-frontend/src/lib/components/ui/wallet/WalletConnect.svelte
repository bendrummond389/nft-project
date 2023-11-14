<script lang="ts">
  import { ethers } from 'ethers'
  import Button from '../button/button.svelte'

  let currentAccount: string | null = null

  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({
          method: 'eth_requestAccounts',
        })
        if (Array.isArray(accounts) && accounts.length > 0) {
          currentAccount = accounts[0]
        } else {
          console.error('No accounts returned by MetaMask')
        }
      } catch (error) {
        console.error('Error connecting to metamask: ', error)
      }
    } else {
      alert('MetaMask not installed')
    }
  }
</script>

{#if currentAccount}
  <p class="text-orange-400">Connected to MetaMask</p>
{:else}
  <Button on:click="{connectWallet}" 
    >Connect to MetaMask</Button
  >
{/if}
