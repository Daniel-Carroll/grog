//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.4;

import 'hardhat/console.sol';
import '@openzeppelin/contracts/token/ERC20/ERC20.sol';

contract GrogToken is ERC20 {
    constructor(uint256 initialSupply) ERC20('Grog', 'GROG') {
        _mint(msg.sender, initialSupply);
    }
}
