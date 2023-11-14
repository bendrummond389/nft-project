import type { ERC721Factory } from '$lib/types'
import type { Contract } from 'ethers'
import { writable } from 'svelte/store'

export const contract = writable<ERC721Factory | null>(null)
