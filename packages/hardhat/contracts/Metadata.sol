//SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.9.0;

import "@openzeppelin/contracts/access/Ownable.sol";

contract Metadata is Ownable {
    string private name;
    uint8 private colorR;
    uint8 private colorG;
    uint8 private colorB;

    constructor(
        address initialOwner,
        string memory _name,
        uint8 _r,
        uint8 _g,
        uint8 _b
    ) Ownable(initialOwner) {
        name = _name;
        colorR = _r;
        colorG = _g;
        colorB = _b;
    }

    function getName() external view returns (string memory) {
        return name;
    }

    function getColor() external view returns (uint8, uint8, uint8) {
        return (colorR, colorG, colorB);
    }

    
    function updateName(string memory _newName) external onlyOwner {
        name = _newName;
    }

    function updateColor(uint8 _r, uint8 _g, uint8 _b) external onlyOwner {
        colorR = _r;
        colorG = _g;
        colorB = _b;
    }
} 