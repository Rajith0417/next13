import Link from "next/link"

export default function Navbar() {
    return (
      <nav className="bg-slate-800 text-white p-4">
        <Link className="mr-2" href="/">Home</Link>
        <Link className="mr-2" href="/about">About</Link>
        <Link className="mr-2" href="/crud">CRUD</Link>
        <Link className="mr-2" href="/users">Users</Link>
      </nav>
    )
  }
