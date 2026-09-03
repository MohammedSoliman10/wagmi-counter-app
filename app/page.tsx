"use client";
import React, { useEffect, useRef, useState } from "react";
import { type BaseError, useWriteContract, useReadContract, useAccount } from "wagmi";
import { wagmiContractConfig } from "./contractsUtils";
import { writeToContract } from "./utils";
import Header from "@/components/Header";

const shorten = (value: string) => `${value.slice(0, 6)}…${value.slice(-4)}`;

export default function Home() {
  const { isConnected, address } = useAccount();

  useEffect(() => {}, [isConnected]);

  const { writeContract, isPending: isWritePending, isSuccess: isWriteSuccess, error: writeError } =
    useWriteContract();

  const {
    data: counter,
    isPending: isReadPending,
    refetch,
    error: readError,
  } = useReadContract({
    ...wagmiContractConfig.dapp,
    functionName: "Counter",
  });

  const [isRolling, setIsRolling] = useState(false);
  const previousValue = useRef<string | undefined>(undefined);

  useEffect(() => {
    const next = counter?.toString();
    if (next !== undefined && previousValue.current !== undefined && next !== previousValue.current) {
      setIsRolling(true);
      const timeout = setTimeout(() => setIsRolling(false), 180);
      previousValue.current = next;
      return () => clearTimeout(timeout);
    }
    previousValue.current = next;
  }, [counter]);

  useEffect(() => {
    if (isWriteSuccess) {
      refetch();
    }
  }, [isWriteSuccess, refetch]);

  const handleGetCounter = async () => {
    await refetch();
  };

  const handleIncrement = () => {
    writeToContract(writeContract, "dapp", "increment");
  };

  return (
    <div className="page">
      <div className="shell">
        <Header active="home" />

        <main className="main">
          <p className="eyebrow-copy">
            A minimal on-chain counter. Connect a wallet on Sepolia, read the current
            value straight from the contract, and write an increment as a real transaction.
          </p>

          <section className="ledger-panel" aria-label="Counter">
            <div className="odometer">
              <span
                className={`odometer-value${isReadPending ? " is-loading" : ""}${isRolling ? " is-rolling" : ""}`}
              >
                {isReadPending ? "reading chain…" : counter !== undefined ? counter.toString() : "—"}
              </span>
            </div>
            <span className="odometer-label">current value of Counter()</span>

            <div className="ledger-actions">
              <button className="btn" onClick={handleGetCounter} disabled={isReadPending}>
                Get counter
              </button>
              <button
                className="btn btn-primary"
                onClick={handleIncrement}
                disabled={!isConnected || isWritePending}
              >
                {isWritePending ? "Confirm in wallet…" : "Increment"}
              </button>
            </div>

            <div className="status-line">
              <span className={`status-dot${isConnected ? " is-connected" : ""}`} />
              {isConnected && address ? (
                <span className="status-address">{shorten(address)}</span>
              ) : (
                <span>Not connected — connect a wallet to write to the contract</span>
              )}
            </div>

            {writeError ? (
              <div className="status-message">{(writeError as unknown as BaseError).shortMessage}</div>
            ) : null}
            {readError ? (
              <div className="status-message">{(readError as unknown as BaseError).shortMessage}</div>
            ) : null}
          </section>
        </main>

        <footer className="site-footer">
          <span>
            contract{" "}
            <a
              href={`https://sepolia.etherscan.io/address/${wagmiContractConfig.dapp.address}`}
              target="_blank"
              rel="noreferrer"
            >
              {shorten(wagmiContractConfig.dapp.address)}
            </a>
          </span>
          <span>sepolia</span>
        </footer>
      </div>
    </div>
  );
}
