import { expect } from 'chai'
import { ethers } from 'hardhat'
import { ERC721Token } from '../typechain-types'

describe('ERC721Token', function () {
  let token: ERC721Token
  let owner: any
  let addr1: any

  this.beforeEach(async function () {
    ;[owner, addr1] = await ethers.getSigners()

    const Token = await ethers.getContractFactory('ERC721Token')
    token = (await Token.deploy('TestToken', 'TTK')) as ERC721Token
    token.waitForDeployment()
  })

  describe('Minting', function () {
    it('should mint a new token and set token URI', async function () {
      const tokenURI = 'ipfs://example.com/token/1'
      await token.mint(owner.address, tokenURI)
      expect(await token.ownerOf(1)).to.equal(owner.address)
      expect(await token.tokenURI(1)).to.equal(tokenURI)
    })
  })
})
