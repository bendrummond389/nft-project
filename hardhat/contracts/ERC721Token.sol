// SPDX-License-Identifier: MIT
pragma solidity 0.8.20;

import '@openzeppelin/contracts/token/ERC721/ERC721.sol';
import '@openzeppelin/contracts/utils/Strings.sol';

contract ERC721Token is ERC721 {
  using Strings for uint256;

  uint256 private _tokenIdCounter;
  mapping(uint256 => string) private _tokenURIs;

  constructor(string memory name, string memory symbol) ERC721(name, symbol) {
    _tokenIdCounter = 0;
  }

  function mint(address to, string memory uri) public returns (uint256) {
    _tokenIdCounter += 1;
    uint256 newItemId = _tokenIdCounter;
    _mint(to, newItemId);
    _setTokenURI(newItemId, uri);
    return newItemId;
  }

  function _setTokenURI(uint256 tokenId, string memory _tokenURI) internal {
    require(_exists(tokenId), 'ERC721Metadata: URI set of nonexistent token');
    _tokenURIs[tokenId] = _tokenURI;
  }

  function tokenURI(
    uint256 tokenId
  ) public view override returns (string memory) {
    require(
      _exists(tokenId),
      'ERC721Metadata: URI query for nonexistent token'
    );
    string memory _tokenURI = _tokenURIs[tokenId];
    return _tokenURI;
  }

  function _exists(uint256 tokenId) internal view returns (bool) {
    return ownerOf(tokenId) != address(0);
  }
}
