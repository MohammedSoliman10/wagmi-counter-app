import { cookieStorage, createStorage, http } from '@wagmi/core'
import { WagmiAdapter } from '@reown/appkit-adapter-wagmi'
import { mainnet, sepolia } from '@reown/appkit/networks'

// Get projectId from https://dashboard.reown.com
export const projectId = process.env.NEXT_PUBLIC_PROJECT_ID

// Fail Early
if (!projectId) {
  throw new Error('Project ID is not defined')
}

// NOTE: defaultNetwork below is set to Sepolia (testnet), assuming your Counter
// contract was deployed there for practice, not on mainnet. If your contract is
// actually on mainnet, change `defaultNetwork: sepolia` to `defaultNetwork: mainnet`
// in context/index.tsx as well.
export const networks = [mainnet, sepolia]

//Set up the Wagmi Adapter (Config)
export const wagmiAdapter = new WagmiAdapter({
  storage: createStorage({
    storage: cookieStorage
  }),
  ssr: true,
  projectId,
  networks
})

export const config = wagmiAdapter.wagmiConfig