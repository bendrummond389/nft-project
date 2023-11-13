import { ethers } from 'ethers'
import type { Contract } from 'ethers'
import type { MetaMaskInpageProvider } from '@metamask/providers'
import { abi as ContractFactoryABI } from '$lib/contracts/ERC721Factory.json'

declare global {
  interface Window {
    ethereum?: MetaMaskInpageProvider
  }
}

const getFactoryContract = async (
  contractAddress: string
): Promise<Contract> => {
  let signer = null
  let provider
  if (!window.ethereum) {
    throw new Error('Ethereum object not found, install MetaMask.')
  }

  provider = new ethers.BrowserProvider(window.ethereum)
  signer = await provider.getSigner()

  const contract = new ethers.Contract(
    contractAddress,
    ContractFactoryABI,
    signer
  )

  return contract
}
