import Counter from "@/components/Counter";
import Header from "@/components/Header";

export default function About() {
  return (
    <div className="page">
      <div className="shell">
        <Header active="about" />

        <main className="main">
          <p className="eyebrow-copy">
            The counter on the home page lives in a Sepolia smart contract — every increment
            is a transaction. The one below is the same idea running entirely in this browser
            tab, with no wallet and no chain, for comparison.
          </p>

          <Counter />
        </main>

        <footer className="site-footer">
          <span>ow3 · fullstack dapp development</span>
        </footer>
      </div>
    </div>
  );
}
