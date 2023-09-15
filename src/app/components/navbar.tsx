import Link from "next/link";
import { FaYoutube, FaTwitter, FaGithub, FaFacebook } from "react-icons/fa";

export default function Navbar() {
    return (
      <nav className="bg-slate-800 text-white p-4 flex justify-around items-center">
        <div>
          <Link className="mr-2" href="/">Home</Link>
          <Link className="mr-2" href="/about">About</Link>
          <Link className="mr-2" href="/crud">CRUD</Link>
          <Link className="mr-2" href="/users">Users</Link>
          <Link className="mr-2" href="/blog">Blog</Link>
        </div>
        <div className="flex gap-2">
          <Link href={"https://youtube.com"}><FaYoutube /></Link>
          <Link href={"https://twitter.com"}><FaTwitter /></Link>
          <Link href={"https://github.com"}><FaGithub /></Link>
          <Link href={"https://facebook.com"}><FaFacebook /></Link>
        </div>
      </nav>
    )
  }
