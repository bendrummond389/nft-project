// SPDX-License-Identifier: MIT
pragma solidity 0.8.20;

import './ERC721Token.sol';

contract ERC721Factory {
  ERC721Token[] public deployedTokens;

  function createToken(string memory name, string memory symbol) public {
    ERC721Token newToken = new ERC721Token(name, symbol);
    deployedTokens.push(newToken);
  }

  function mintToken(uint256 index, address to, string memory uri) public {
    ERC721Token token = deployedTokens[index];
    token.mint(to, uri);
  }

  function getDeployedTokens() public view returns (ERC721Token[] memory) {
    return deployedTokens;
  }
}
