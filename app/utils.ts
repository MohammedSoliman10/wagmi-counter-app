import { useWriteContract } from "wagmi";
import { wagmiContractConfig } from "./contractsUtils";

type WriteContractFn = ReturnType<typeof useWriteContract>["writeContract"];

export const writeToContract = (
  writeContract: WriteContractFn,
  contractName: keyof typeof wagmiContractConfig,
  functionName: string
) => {
  writeContract({
    ...wagmiContractConfig[contractName],
    functionName,
  } as Parameters<WriteContractFn>[0]);
};