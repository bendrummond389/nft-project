// SPDX-License-Identifier: MIT
pragma solidity 0.8.20;

import './MyERC721Token.sol';

contract MyERC721Factory {
  MyERC721Token[] public deployedTokens;

  function createToken(string memory name, string memory symbol) public {
    MyERC721Token newToken = new MyERC721Token(name, symbol);
    deployedTokens.push(newToken);
  }

  function getDeployedTokens() public view returns (MyERC721Token[] memory) {
    return deployedTokens;
  }
}
