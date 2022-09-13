require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.9",
  networks: {
    Avalanche: {
      url: `https://api.avax-test.network/ext/bc/C/rpc`,
      chainId: 43113,
    },
  },
};
