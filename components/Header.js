import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-zinc-400 h-15 p-2 rounded-md  ">
  
      <nav className="text-black flex justify-around justify-content: center;  items-center"> 
        <Link href="/home" className="text-zinc-black hover:text-white hover:bg-zinc-900 px-3 py-2 rounded-md transition-all ease-in-out duration-300 hover:scale-90 inline-block">Home</Link> |{" "}
        <Link href="/about" className="text-zinc-black hover:text-white hover:bg-zinc-900 px-3 py-2 rounded-md transition-all ease-in-out duration-300 hover:scale-90 inline-block">About</Link> |{" "}
        <Link href="/services" className="text-zinc-black hover:text-white hover:bg-zinc-900 px-3 py-2 rounded-md transition-all ease-in-out duration-300 hover:scale-90 inline-block">Services</Link>  |{" "}
        <Link href="/contact" className="text-zinc-black hover:text-white hover:bg-zinc-900 px-3 py-2 rounded-md transition-all ease-in-out duration-300 hover:scale-90 inline-block">Contact</Link>|{" "}
        <div className=""></div>
      </nav>
    </header>
  );
}