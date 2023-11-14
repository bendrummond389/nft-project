// SPDX-License-Identifier: MIT
pragma solidity 0.8.20;

import './ERC721Token.sol';

contract ERC721Factory {
  struct TokenMetadata {
    address tokenAddress;
    string name;
    string symbol;
    string description;
  }

  TokenMetadata[] public deployedTokens;

  function createToken(
    string memory _name,
    string memory _symbol,
    string memory _description
  ) public {
    ERC721Token newToken = new ERC721Token(
      _name,
      _symbol,
      msg.sender,
      address(this)
    );

    deployedTokens.push(
      TokenMetadata(address(newToken), _name, _symbol, _description)
    );
  }

  function mintToken(uint256 index, address to, string memory uri) public {
    TokenMetadata storage metadata = deployedTokens[index];
    ERC721Token token = ERC721Token(metadata.tokenAddress);

    require(
      msg.sender == token.owner(),
      'Only the token owner can mint tokens'
    );

    token.mint(to, uri);
  }

  function getDeployedTokens() public view returns (TokenMetadata[] memory) {
    return deployedTokens;
  }
}
