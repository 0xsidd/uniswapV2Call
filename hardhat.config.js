

require("@nomiclabs/hardhat-waffle");
// require("hardhat-gas-reporter");

 module.exports = {
  solidity: "0.8.4",
  settings: {
    optimizer: {
      enabled: true,
      runs: 500
    },
    gas: 2100000,
    gasPrice: 8000000000,
  },
  networks: {
    goerli: {
      url: `https://eth-goerli.g.alchemy.com/v2/bKAcOsXTqHEINi8v0vhhgUIgRO3MyNPO`,
      accounts: ['1aa00af2249c90ddef8565fb073e682e361699fd802b46b2efc867198ffbc71c']
    },
    hardhat: {
      allowUnlimitedContractSize: true,
    },
  },
};
