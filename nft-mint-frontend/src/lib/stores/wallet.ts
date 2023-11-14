import type { AddressLike, BrowserProvider, Provider } from 'ethers'
import { writable } from 'svelte/store'

export const walletAddress = writable<AddressLike| null>(null)
export const ethProvider = writable<Provider | null>(null)
