import { expect } from 'chai'
import { ethers } from 'hardhat'
import { ERC721Factory, ERC721Token } from '../typechain-types'

describe('ERC721Factory', function () {
  let factory: ERC721Factory
  let owner: any

  beforeEach(async function () {
    ;[owner] = await ethers.getSigners()

    const Factory = await ethers.getContractFactory('ERC721Factory')
    factory = (await Factory.deploy()) as ERC721Factory
    await factory.waitForDeployment()
  })

  describe('Token Creation', function () {
    it('should create a new ERC721 token', async function () {
      await factory.createToken('NewToken', 'NTK')
      const deployedTokens = await factory.getDeployedTokens()
      expect(deployedTokens.length).to.equal(1)

      const tokenAddress = deployedTokens[0]
      const token = (await ethers.getContractAt(
        'ERC721Token',
        tokenAddress
      )) as ERC721Token

      const tokenURI = 'https://example.com/token/1'
      await factory.mintToken(0, owner.address, tokenURI)
      expect(await token.ownerOf(1)).to.equal(owner.address)
      expect(await token.tokenURI(1)).to.equal(tokenURI)
    })
  })
})
