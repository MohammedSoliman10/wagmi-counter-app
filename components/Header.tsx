import Link from "next/link";

const Header = ({ active }: { active: "home" | "about" }) => {
  return (
    <header className="site-header">
      <div className="wordmark">
        OW3<span className="dim">·</span>Counter
      </div>
      <nav className="site-nav" aria-label="Primary">
        <Link href="/" aria-current={active === "home" ? "page" : undefined}>
          Home
        </Link>
        <Link href="/about" aria-current={active === "about" ? "page" : undefined}>
          About
        </Link>
      </nav>
      <div className="header-controls">
        <w3m-network-button />
        <w3m-button size="md" />
      </div>
    </header>
  );
};

export default Header;
