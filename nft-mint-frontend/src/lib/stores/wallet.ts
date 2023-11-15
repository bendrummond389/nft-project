import type { AddressLike, Provider, Signer} from 'ethers'
import { writable } from 'svelte/store'

export const walletAddress = writable<AddressLike| null>(null)
export const ethProvider = writable<Provider | null>(null)
export const ethSigner = writable<Signer | null>(null)
