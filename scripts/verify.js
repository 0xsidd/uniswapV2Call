require("@nomiclabs/hardhat-etherscan");
const Hre = require("hardhat");
async function main() {

      // await Hre.run("verify:verify", {
      //   //Deployed contract NFT address
      //   address: "0xFbd6eAED730b43e6b76F2cb52795FdED79938390",
      //   //Path of your main contract.
      //   contract: "contracts/PrimaryMarketplace.sol:Fanverse",
      // });

      await Hre.run("verify:verify", {
        //Deployed contract NFT address
        address: "0xdd712aaA181e57642e0AE9f011794854b8f66a88",
        //Path of your main contract.
        contract: "contracts/multiCall.sol:MultiCall",
      });
      // await Hre.run("verify:verify", {
      //   //Deployed contract Fanverse address
      //   address: "0x9A0f5AaC056a75f9942996E029979E52e2a2e13B",
      //   constructorArguments:["0x37682acFB4346A686e11805a5fCdCE814b254bC5","0x1a3b4ec55e83A3496DdABD2d548fc42316790BA4"],

      //   //Path of your main contract.
      //   contract: "contracts/fanverse.sol:Fanverse",
      // });

      // await Hre.run("verify:verify", {
      //   //Deployed contract whitelist address
      //   address: "0xD61A2911F765039E871BD16F420fc5A12997B1FF",
      //   //Path of your main contract.
      //   contract: "contracts/whitelist.sol:WhiteList",
      // });
      
};

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });