import * as dotenv from 'dotenv';
dotenv.config();

import { HardhatUserConfig, extendEnvironment } from 'hardhat/config';
import { createProvider } from 'hardhat/internal/core/providers/construction';
import '@nomicfoundation/hardhat-toolbox';
import '@typechain/hardhat';
import '@nomiclabs/hardhat-ethers';
import '@nomiclabs/hardhat-etherscan';
import 'solidity-coverage';

const PRIVATE_KEY = process.env.PRIVATE_KEY || '';
const ETHEREUM_SEPOLIA_RPC_URL = process.env.ETHEREUM_SEPOLIA_RPC_URL || '';
const OPTIMISM_SEPOLIA_RPC_URL = process.env.OPTIMISM_SEPOLIA_RPC_URL || '';
const ARBITRUM_SEPOLIA_RPC_URL = process.env.ARBITRUM_SEPOLIA_RPC_URL || '';
const AVALANCHE_FUJI_RPC_URL = process.env.AVALANCHE_FUJI_RPC_URL || '';
const POLYGON_AMOY_RPC_URL = process.env.POLYGON_AMOY_RPC_URL || '';
const BNB_CHAIN_TESTNET_RPC_URL = process.env.BNB_CHAIN_TESTNET_RPC_URL || '';
const BASE_SEPOLIA_RPC_URL = process.env.BASE_SEPOLIA_RPC_URL || '';
const KROMA_SEPOLIA_RPC_URL = process.env.KROMA_SEPOLIA_RPC_URL || '';
const WEMIX_TESTNET_RPC_URL = process.env.WEMIX_TESTNET_RPC_URL || '';
const GNOSIS_CHIADO_RPC_URL = process.env.GNOSIS_CHIADO_RPC_URL || '';
const CELO_ALFAJORES_RPC_URL = process.env.CELO_ALFAJORES_RPC_URL || '';
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY || '';

declare module 'hardhat/types/runtime' {
  export interface HardhatRuntimeEnvironment {
    changeNetwork: (newNetwork: string) => Promise<void>;
  }
}

extendEnvironment(async (hre) => {
  hre.changeNetwork = async function changeNetwork(newNetwork: string) {
    hre.network.name = newNetwork;
    hre.network.config = hre.config.networks[newNetwork];
    hre.ethers.provider = new hre.ethers.providers.JsonRpcProvider(
      hre.network.config.url
    );
    hre.network.provider = await createProvider(hre.config, newNetwork);
  };
});

const config: HardhatUserConfig = {
  solidity: {
    version: '0.8.19',
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  defaultNetwork: 'hardhat',
  networks: {
    hardhat: {
      chainId: 31337,
    },
    ethereumSepolia: {
      url: ETHEREUM_SEPOLIA_RPC_URL,
      accounts: [PRIVATE_KEY],
      chainId: 11155111,
    },
    arbitrumSepolia: {
      url: ARBITRUM_SEPOLIA_RPC_URL,
      accounts: [PRIVATE_KEY],
      chainId: 421614,
    },
    // Add other networks similarly
  },
  etherscan: {
    apiKey: ETHERSCAN_API_KEY,
  },
  typechain: {
    outDir: 'typechain-types',
    target: 'ethers-v5',
  },
  paths: {
    sources: './contracts',
    tests: './test',
    cache: './cache',
    artifacts: './artifacts',
  },
};

export default config;
