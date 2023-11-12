// SPDX-License-Identifier: MIT
pragma solidity 0.8.20;

import '@openzeppelin/contracts/token/ERC721/ERC721.sol';

contract MyERC721Token is ERC721 {
  uint256 private _tokenIdCounter;

  constructor(string memory name, string memory symbol) ERC721(name, symbol) {
    _tokenIdCounter = 0;
  }

  function mint(address to) public returns (uint256) {
    _tokenIdCounter += 1;
    uint256 newItemId = _tokenIdCounter;
    _mint(to, newItemId);
    return newItemId;
  }
}
