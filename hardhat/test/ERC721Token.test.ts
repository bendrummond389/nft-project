import { expect } from 'chai'
import { ethers } from 'hardhat'
import { MyERC721Token } from '../typechain-types'

describe('ERC721Token', function () {
  let token: MyERC721Token
  let owner: any
  let addr1: any

  this.beforeEach(async function () {
    ;[owner, addr1] = await ethers.getSigners()

    const Token = await ethers.getContractFactory('MyERC721Token')
    token = (await Token.deploy('TestToken', 'TTK')) as MyERC721Token
    token.waitForDeployment()
  })

  describe('Minting', function () {
    it('should mint a new token', async function () {
      await token.mint(owner.address)
      expect(await token.ownerOf(1)).to.equal(owner.address)
    })
  })
})
