const { expect } = require("chai");
const { ethers, waffle} = require("hardhat");
const { ContractFunctionVisibility } = require("hardhat/internal/hardhat-network/stack-traces/model");
const { ecsign } = require("ethereumjs-util");
const abi = new ethers.utils.AbiCoder;



/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let ABI = ["function swapExactTokensForTokens(uint256 amountIn,uint256 amountOutMin,address[] calldata path,address to,uint256 deadline)"];
let iface = new ethers.utils.Interface(ABI);
let swapData = iface.encodeFunctionData("swapExactTokensForTokens", [10,1,["0xD7ACd2a9FD159E69Bb102A1ca21C9a3e3A5F771B","0x7EF2e0048f5bAeDe046f6BF797943daF4ED8CB47"],"0x5B38Da6a701c568545dCfcB03FcB875f56beddC4",1764541741]);


let tokenvalue = abi.encode(["uint256"],[10]);
let targetAddress = abi.encode(["address"],["0xAb8483F64d9C6d1EcF9b849Ae677dD3315835cb2"]);
let value = abi.encode(["uint256"],[100000]);

let opData = abi.encode(["bytes","uint256","uint256","bytes"],[targetAddress,value,tokenvalue,swapData]);

function getRes(){
    console.log(opData);

}
getRes();











// const targetAddress = abi.encode(["address"],["0xAb8483F64d9C6d1EcF9b849Ae677dD3315835cb2"]);
// const value = abi.encode(["uint256"],[100000]);

// const dataFunName = abi.encode(["string"], ["swapExactTokensForTokens(uint256,uint256,address[],address,uint256)"]);
// const dataFunParams = abi.encode(["uint256","uint256","tuple(address,address)","address","uint256"], [10,1,["0xD7ACd2a9FD159E69Bb102A1ca21C9a3e3A5F771B","0x03C6FcED478cBbC9a4FAB34eF9f40767739D1Ff7"],"0x5B38Da6a701c568545dCfcB03FcB875f56beddC4",1764541741]);
// const dataSwapData = abi.encode(["bytes","bytes"],[dataFunName,dataFunParams]);


// const routerOneData = abi.encode(["bytes","bytes","bytes"],[targetAddress,value,dataSwapData]);




// const data1 = abi.decode(["bytes","bytes","bytes"],routerOneData);

// const recTargetData = abi.decode(["address"],data1[0]);
// const recValueData = abi.decode(["uint256"],data1[1]);
// const recSwapData = abi.decode(["bytes","bytes"],data1[2]);
// const recFunData = abi.decode(["string"],recSwapData[0]);
// const recFunParam = abi.decode(["uint256","uint256","tuple(address,address)","address","uint256"],recSwapData[1]);







