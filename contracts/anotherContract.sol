// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;


contract anotherContract {
    uint256 public one;
    address public two;
    function setVars(uint256 _one,address _two)public{
        one = _one;
        two = _two;
    }
}