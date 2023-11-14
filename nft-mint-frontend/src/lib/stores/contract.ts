import type { Contract } from 'ethers'
import { writable } from 'svelte/store'

export const contract = writable<Contract | null>(null)
