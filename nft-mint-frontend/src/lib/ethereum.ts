import type { BrowserProvider, Eip1193Provider } from 'ethers'

declare global {
  interface Window {
    ethereum: Eip1193Provider & BrowserProvider
  }
}

export const FactoryAddress = '0xc9CCc8Cd69579596f376F339c31ED17A9dFd42f3'
