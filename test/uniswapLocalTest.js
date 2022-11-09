const { expect } = require("chai");
const { ethers, waffle} = require("hardhat");
const { ContractFunctionVisibility } = require("hardhat/internal/hardhat-network/stack-traces/model");
const { ecsign } = require("ethereumjs-util");
const abi = new ethers.utils.AbiCoder;
// const { default: Wallet } = require("ethereumjs-wallet");

describe("Token contract", function () {
    let signer;
    let uniswapV2Router;
    let uniswapV2Factory;
    let uniswapV2Pair;
    let tokenA;
    let tokenB;
    let taxableToken;
    let getInit;
    let initHash;
    let weth;
    let executer;
    let provider = waffle.provider;


    const TOKEN_A_AMOUNT = ethers.utils.parseEther("1000");
    const AMOUNT_IN_MAX = ethers.utils.parseEther("1000000");
    const amountIn = ethers.utils.parseEther("10");
    const amountOut = ethers.utils.parseEther("1");
    const amountInq = ethers.utils.parseEther("1000");
    const TOKEN_B_AMOUNT = ethers.utils.parseEther("1000");
    const ETH_AMOUNT = ethers.utils.parseEther("10");
    const EXCEED_AMOUNT_ETH = ethers.utils.parseEther("1005");
    const EXCEED_AMOUNT_TOKEN = ethers.utils.parseEther("1000005");

    const TOKEN_A_AMOUNTU = 10000;
    const TOKEN_B_AMOUNTU = 10000;

    const TOKEN_A_AMOUNTA = 100;
    const TOKEN_B_AMOUNTA = 100;


    async function _addLiquidity(){
        await tokenA.connect(signer[0]).approve(uniswapV2Router.address,TOKEN_A_AMOUNT);
        await tokenB.connect(signer[0]).approve(uniswapV2Router.address,TOKEN_B_AMOUNT);
        await uniswapV2Router.connect(signer[0]).addLiquidity(tokenA.address,tokenB.address,TOKEN_A_AMOUNT,TOKEN_B_AMOUNT,1,1,signer[0].address, 1764541741);
    };
    async function _addLiquiditytxble(){
        await tokenA.connect(signer[0]).approve(uniswapV2Router.address,TOKEN_A_AMOUNT);
        await taxableToken.connect(signer[0]).approve(uniswapV2Router.address,TOKEN_B_AMOUNT);
        await uniswapV2Router.connect(signer[0]).addLiquidity(tokenA.address,taxableToken.address,TOKEN_A_AMOUNT,TOKEN_B_AMOUNT,1,1,signer[6].address, 1764541741);

    };
    async function _addLiquidityETH(){
        await tokenA.connect(signer[0]).approve(uniswapV2Router.address,TOKEN_A_AMOUNT);
        await uniswapV2Router.connect(signer[0]).addLiquidityETH(tokenA.address,TOKEN_A_AMOUNT,1,ETH_AMOUNT,signer[0].address,1764541741,{value:ETH_AMOUNT});
        // await uniswapV2Router.connect(signer[0]).addLiquidityETH(tokenA.address,TOKEN_A_AMOUNT,1,ETH_AMOUNT,signer[0].address,1764541741,{value:ETH_AMOUNT});
    };
    async function _addLiquidityETHtxble(){
        await taxableToken.connect(signer[0]).approve(uniswapV2Router.address,TOKEN_B_AMOUNT);
        await uniswapV2Router.connect(signer[0]).addLiquidityETH(taxableToken.address,TOKEN_A_AMOUNT,1,ETH_AMOUNT,signer[0].address,1764541741,{value:ETH_AMOUNT});
    };
    describe("UniswapV2",async()=>{
            beforeEach(async()=>{
              signer = await ethers.getSigners();


              const GetInit = await ethers.getContractFactory("CalHash");
              getInit = await GetInit.deploy();
              initHash = await getInit.connect(signer[0]).getInitHash();


              const WETH = await ethers.getContractFactory("WETH9");
              weth = await WETH.deploy();
      
              const UniswapV2Factory = await ethers.getContractFactory("UniswapV2Factory");
              uniswapV2Factory = await UniswapV2Factory.connect(signer[0]).deploy(signer[0].address);

      
              const UniswapV2Router = await ethers.getContractFactory("UniswapV2Router02");
              uniswapV2Router = await UniswapV2Router.connect(signer[0]).deploy(uniswapV2Factory.address,weth.address);
      
              const TokenA = await ethers.getContractFactory("TokenA");
              tokenA = await TokenA.connect(signer[0]).deploy();
      
              const TokenB = await ethers.getContractFactory("TokenB");
              tokenB = await TokenB.connect(signer[0]).deploy();

              const Executer = await ethers.getContractFactory("decodeData");
              decode = await Executer.connect(signer[0]).deploy();
            });

            function encodeData(amount,amountsOutMin,pathOne,pathTwo,toAddress,deadline,sendValue,tokenvalue,fromTkn,routerAddress){
                let ABI = ["function swapExactTokensForTokens(uint256 amountIn,uint256 amountOutMin,address[] calldata path,address to,uint256 deadline)"];
                let iface = new ethers.utils.Interface(ABI);
                let swapData = iface.encodeFunctionData("swapExactTokensForTokens", [amount,amountsOutMin,[pathOne,pathTwo],toAddress,deadline]);
                const targetAddress = abi.encode(["address"],[routerAddress]);
                const value = abi.encode(["uint256"],[sendValue]);
                const tknValue = abi.encode(["uint256"],[tokenvalue]);
                const fromToken = abi.encode(["address"],[fromTkn])
                const opData = abi.encode(["bytes","bytes","bytes","bytes","bytes"],[targetAddress,value,tknValue,fromToken,swapData]);
                return(opData);
            }

            describe("Functions",async()=>{
                it("addliquidity function", async function () {
                  // console.log(initHash);
                  await tokenA.connect(signer[0]).approve(uniswapV2Router.address,TOKEN_A_AMOUNT);
                  await tokenB.connect(signer[0]).approve(uniswapV2Router.address,TOKEN_B_AMOUNT);
                  await uniswapV2Router.connect(signer[0]).addLiquidity(tokenA.address,tokenB.address,TOKEN_A_AMOUNT,TOKEN_B_AMOUNT,1,1,signer[0].address, 1764541741);
                //   console.log(decode);


                let data = encodeData(100,1,tokenA.address,tokenB.address,signer[0].address,1764541741,100,100,tokenA.address,uniswapV2Router.address);
                // console.log(data);
                let iniBal = (await tokenB.balanceOf(signer[0].address));
                await tokenA.connect(signer[0]).approve(decode.address,TOKEN_A_AMOUNT);
                await tokenA.connect(signer[0]).transfer(decode.address,TOKEN_A_AMOUNT);
                await decode.connect(signer[0]).decodeInputData(data);
                let finalBal = (await tokenB.balanceOf(signer[0].address));
                console.log("swap amount",finalBal);
                console.log("swap amount",iniBal);


                });  
        });
    });
});
