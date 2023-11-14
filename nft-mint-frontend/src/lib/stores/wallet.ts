import type { BrowserProvider, Provider } from 'ethers'
import { writable } from 'svelte/store'

export const walletAddress = writable(null)
export const ethProvider = writable<Provider | null>(null)
