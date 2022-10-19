// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require("hardhat");

async function main() {
  let signer;
    let uniswapV2Router;
    let uniswapV2Factory;
    let uniswapV2Pair;
    let getInit;
    let initHash;
    let weth;
    let lpToken;
    let tokenA;
    let tokenB;
    let feeToSetterAddress = '0x16a4CbBdD4872418b69A4946c05228B035a401FD';
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile
  // manually to make sure everything is compiled
  // await hre.run('compile');

  // We get the contract to deploy
    // const GetInit = await ethers.getContractFactory("CalHash");
    // getInit = await GetInit.deploy();
    // initHash = await getInit.getInitHash();
    // console.log("initHash",initHash);
    // console.log(GetInit);

    // const LpToken = await ethers.getContractFactory("UniswapV2ERC20");
    // lpToken = await LpToken.deploy();

    // const MULTICALL = await ethers.getContractFactory("Multicall");
    // multiCall = await MULTICALL.deploy();
    // console.log(multiCall.address,"weth.address");
    // await weth.wait();

    // const WETH = await ethers.getContractFactory("WETH9");
    // weth = await WETH.deploy();
    // console.log(weth.address,"weth.address");
      
    // const UniswapV2Factory = await ethers.getContractFactory("UniswapV2Factory");
    // uniswapV2Factory = await UniswapV2Factory.deploy(feeToSetterAddress);
    // console.log(uniswapV2Factory.address,"uniswapV2Factory.address");
    // // await uniswapV2Factory.wait();

    // const UniswapV2Pair = await ethers.getContractFactory("UniswapV2Pair");
    // uniswapV2Pair = await UniswapV2Pair.deploy();
    // console.log(uniswapV2Pair.address,"uniswapV2Pair.address");
    // // await uniswapV2Pair.wait();
    // let factoryAddress = '0x40ABD6387F5CBE98462cDBdAEBD35cA90a1a57A9';
    // let wethAddress = '0xeD501779003be65b7f273F374CA68A1b83186ca4';
    
    // const UniswapV2Router = await ethers.getContractFactory("UniswapV2Router02");
    // uniswapV2Router = await UniswapV2Router.deploy(factoryAddress,wethAddress); //pair0x0813a5E1f703F4488cE7C0c5bF8B26B9e2496be0
    // console.log(uniswapV2Router.address,"uniswapV2Router.address");
    // await uniswapV2Router.wait();
    // const UniswapV2Router = await ethers.getContractFactory("TokenA");
    // tokenA = await UniswapV2Router.deploy(); //pair0x0813a5E1f703F4488cE7C0c5bF8B26B9e2496be0
    // console.log(tokenA.address,"uniswapV2Router.address");

    const UniswapV2Router2 = await ethers.getContractFactory("TokenB");
    tokenA = await UniswapV2Router2.deploy(); //pair0x0813a5E1f703F4488cE7C0c5bF8B26B9e2496be0
    console.log(tokenA.address,"uniswapV2Router.address");
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });



  //tokrnA = 0x482B2C3f154e54ba04f0Fb19dCe1c764764312fD
  // tokenB = 0xFD6AAB9cDC37bdFF600309730f85b11A00B63c82