import Link from "next/link";

export default function Header() {
  return (
    <header style={{ padding: "20px", background: "#f5f5f5" }}>
      <nav>
        <Link href="/home">Home</Link> |{" "}
        <Link href="/about">About</Link> |{" "}
        <Link href="/services">Services</Link> |{" "}
        <Link href="/contact">Contact</Link>
      </nav>
    </header>
  );
}