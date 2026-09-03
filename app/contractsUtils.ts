export const wagmiContractConfig = {
    dapp: {
        address: "0x598f587471370a1335FdEB950FF25a6B2ED6d001" as `0x${string}`,
        abi: [
        {
            "inputs": [],
            "name": "Counter",
            "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "increment",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        }
    ]
    },
  } as const
