'use client';

import Link from "next/link";

export default function Navbar() {
  
  
  return (
    <div className="flex flex-row justify-center items-center gap-8">
      <Link
        href="/"
        className="relative font-body text-md after:absolute after:top-full after:left-0 after:w-full after:h-px after:bg-white after:scale-x-0 after:origin-right after:transition hover:after:scale-x-100 hover:after:origin-left"
      >
        HOME
      </Link>
      <Link
        href="/"
        className="relative font-body text-md after:absolute after:top-full after:left-0 after:w-full after:h-px after:bg-white after:scale-x-0 after:origin-right after:transition hover:after:scale-x-100 hover:after:origin-left"
      >
        ABOUT
      </Link>
      <Link
        href="/"
        className="relative font-body text-md after:absolute after:top-full after:left-0 after:w-full after:h-px after:bg-white after:scale-x-0 after:origin-right after:transition hover:after:scale-x-100 hover:after:origin-left"
      >
        WALL
      </Link>
    </div>
  );
}