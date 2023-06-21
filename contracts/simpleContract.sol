// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

// Uncomment this line to use console.log
// import "hardhat/console.sol";

contract simpleContract{
    uint256 favouriteNumber;

    struct People{
        uint256 favouriteNumber;
        string name;
    }

    People[] public people;

    mapping(string => uint256) public nameToFavouriteNumber;

    function Store(uint256 _favouriteNumber) public {
        favouriteNumber = _favouriteNumber;
    }

    function Retrieve() public view returns (uint256){
        return favouriteNumber;
    }

    function addPerson(string memory _name, uint256 _favouriteNumber) public {
        people.push(People(_favouriteNumber, _name));
        nameToFavouriteNumber[_name] = _favouriteNumber;
    }
}