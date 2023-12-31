// TODO: Organize this

import type { BrowserProvider, Eip1193Provider } from 'ethers'
import { contract as factoryContract } from '$lib/stores/contract'
import { get } from 'svelte/store'
import type { ERC721Factory } from './types/ERC721Factory'

declare global {
  interface Window {
    ethereum: Eip1193Provider & BrowserProvider
  }
}

export const FactoryAddress = '0xCeaE7A3A107415c18eAa4c1fdF30044C074D88eE'

export const fetchDeployedTokens = async (): Promise<
  ERC721Factory.TokenMetadataStruct[]
> => {
  let deployedTokens: ERC721Factory.TokenMetadataStruct[] = []
  const factory = get(factoryContract)

  if (factory) {
    try {
      let tokens = await factory.getDeployedTokens()
      // Create a copy of the array and then sort
      deployedTokens = [...tokens].sort((a, b) =>
        b.tokenAddress.localeCompare(a.tokenAddress)
      )
    } catch (error) {
      console.error('Error fetching deployed tokens:', error)
    }
  }

  return deployedTokens
}
