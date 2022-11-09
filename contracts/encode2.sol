// // SPDX-License-Identifier: MIT
// pragma solidity ^0.8.0;


// contract decodeData{
//     function decodeInputData(bytes memory _data)public payable{
//         (bytes memory data1,bytes memory data2,bytes memory callData) = abi.decode(_data,(bytes,bytes,bytes));
//         address target = abi.decode(data1,(address));
//         uint256 Value = abi.decode(data2,(uint256));
//         (bool success,) = target.call{value:Value}(callData);
//         require(success,"Failed");
//     }

// }