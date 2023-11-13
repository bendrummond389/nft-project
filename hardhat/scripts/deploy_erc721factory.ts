import { ethers } from 'hardhat'

async function main() {
  const ERC721Factory = await ethers.getContractFactory('ERC721Factory')
  const erc721Factory = await ERC721Factory.deploy()
  await erc721Factory.waitForDeployment()

  console.log('ERC721Factory deployed to:', erc721Factory.target)
}

main().catch((error) => {
  console.error(error)
  process.exitCode = 1
})
