"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export default function Navbar() {
  const pathName = usePathname();
  const router = useRouter();

  return (
    <nav className="flex bg-gray-800 py-4 px-5 items-center">
      <h1 className="text-white">Navbar</h1>
      <ul className="flex ms-auto me-2">
        <Link href="/">
          <li
            className={`mr-3 ${
              pathName === "/"
                ? "text-blue-300"
                : "text-white hover:text-blue-100"
            } cursor-pointer`}
          >
            Home
          </li>
        </Link>
        <Link href="/about">
          <li
            className={`mr-3 ${
              pathName === "/about"
                ? "text-blue-300"
                : "text-white hover:text-blue-100"
            } cursor-pointer `}
          >
            About
          </li>
        </Link>
        <Link href="/about/profile">
          <li
            className={`mr-3 ${
              pathName === "/about/profile"
                ? "text-blue-300"
                : "text-white hover:text-blue-100"
            } cursor-pointer`}
          >
            Profile
          </li>
        </Link>
      </ul>
      <button
        onClick={() => router.push("/login")}
        className="bg-white rounded-sm px-5 py-1"
      >
        Login
      </button>
    </nav>
  );
}
