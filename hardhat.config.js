require("@nomicfoundation/hardhat-toolbox");
require("@nomicfoundation/hardhat-verify");
require("hardhat-gas-reporter");
require("solidity-coverage")
require("./tasks/accounts")
require("./tasks/block-number");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */

module.exports = {
  defaultNetwork: "hardhat", ////// It is present by default in harhat,,So you can remove it...
  networks : {
    ganache : {
      url : process.env.GANACHE_RPC_URL,
      accounts: [process.env.GANACHE_PRIVATE_KEY],
      chainId: 1337,
    },
    sepolia : {
      url : process.env.SEPOLIA_RPC_URL,
      accounts: [process.env.SEPOLIA_PRIVATE_KEY],
      chainId: 11155111,
    },
    localhost:{
      url: "http://127.0.0.1:8545/",
      chainId: 31337,
    }
  },
  etherscan:{
    apiKey: process.env.ETHERSCAN_API_KEY,
  },
  gasReporter:{
    enabled: true,
    //outputFile: gas_reporter.txt,
    // noColors: true,
    // currency: "USD",
    // coinmarketcap: process.env.COINMARKETCAP_API_KEY,
    // token: "MATIC"

  },
  solidity: "0.8.18",
};
