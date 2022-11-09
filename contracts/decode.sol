// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";


contract decodeData{
    // uint256 public tokenValue;

    function decodeInputData(bytes memory _data)public returns(address){
        (bytes memory data1,bytes memory data2,bytes memory data3,bytes memory data4, bytes memory callData) = abi.decode(_data,(bytes,bytes,bytes,bytes,bytes));
        address target = abi.decode(data1,(address));
        address fromTokenAddress = abi.decode(data4,(address));
        uint256 Value = abi.decode(data2,(uint256));
        uint256 tokenValue = abi.decode(data3,(uint256));
        IERC20(address(fromTokenAddress)).approve(target,tokenValue);
        (bool success,) = target.call(callData);
        require(success,"Failed");
        // return(fromTokenAddress);
        
    }

}