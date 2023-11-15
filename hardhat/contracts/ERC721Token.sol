// SPDX-License-Identifier: MIT
pragma solidity 0.8.20;

import '@openzeppelin/contracts/token/ERC721/ERC721.sol';
import '@openzeppelin/contracts/access/Ownable.sol';
import '@openzeppelin/contracts/utils/Strings.sol';

contract ERC721Token is ERC721, Ownable {
  using Strings for uint256;

  uint256 private _tokenIdCounter;
  address private factoryAddress;

  mapping(uint256 => string) private _tokenURIs;

  constructor(
    string memory _name,
    string memory _symbol,
    address initialOwner,
    address _factoryAddress
  ) ERC721(_name, _symbol) Ownable(initialOwner) {
    _tokenIdCounter = 0;
    factoryAddress = _factoryAddress;
  }

  modifier mintingAuthorized() {
    require(
      msg.sender == owner() || msg.sender == factoryAddress,
      'Not authorized to mint'
    );
    _;
  }

  function mint(
    address to,
    string memory uri
  ) public mintingAuthorized returns (uint256) {
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

  function getAllURIs() public view returns (string[] memory) {
    string[] memory uris = new string[](_tokenIdCounter);
    for (uint i = 1; i <= _tokenIdCounter; i++) {
      uris[i - 1] = _tokenURIs[i];
    }
    return uris;
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
