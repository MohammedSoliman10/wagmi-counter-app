# Sepolia Counter DApp

A minimal on-chain counter DApp. Connect a wallet, read the counter value from a
Sepolia smart contract, and increment it with a real transaction.

## Tech Stack

- Next.js
- Wagmi + viem
- Reown AppKit (wallet connection)
- TypeScript

## Contract

- Address: `0x598f587471370a1335FdEB950FF25a6B2ED6d001`
- Network: Sepolia
- Functions: `Counter()` (read), `increment()` (write)

## Getting Started

```bash
git clone https://github.com/MohammedSoliman10/wagmi-counter-app.git
cd wagmi-counter-app
npm install
```

Create a `.env` file:

```
NEXT_PUBLIC_PROJECT_ID=your_reown_project_id
```

Get a project ID from [Reown Cloud](https://cloud.reown.com).

```bash
npm run dev
```

Open http://localhost:3000.

## Let's Connect

- GitHub: [MohammedSoliman10](https://github.com/MohammedSoliman10)
- LinkedIn: [mohammed-soliman05](https://linkedin.com/in/mohammed-soliman05)
- X: [@MohammedSolly05](https://x.com/MohammedSolly05)
