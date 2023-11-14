import type { BrowserProvider, Eip1193Provider } from 'ethers'

declare global {
  interface Window {
    ethereum: Eip1193Provider & BrowserProvider
  }
}

export const FactoryAddress = '0x9F08551dDb44fad00A061D6dF952BB6C8c75A2B7'
