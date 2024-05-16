'use client';

import Link from "next/link";
import { Email, GitHub, LinkedIn } from "@mui/icons-material";

export default function Navbar() {
  
  
  return (
    <div className="flex flex-row w-full items-center justify-between gap-36">
      
      {/* Logo */}
      <Link href="/" className="text-3xl font-bold font-header">
        王梓
      </Link>

      {/* Links */}
      <div className="flex flex-row items-center font-button text-lg gap-8">
        <Link href="/" className="relative after:absolute after:top-full after:left-0 after:w-full after:h-px after:bg-white after:scale-x-0 after:origin-right after:transition hover:after:scale-x-100 hover:after:origin-left">
          About
        </Link>
        <Link href="/" className="relative after:absolute after:top-full after:left-0 after:w-full after:h-px after:bg-white after:scale-x-0 after:origin-right after:transition hover:after:scale-x-100 hover:after:origin-left">
          Post Wall
        </Link>
        <Link href="/" className="relative after:absolute after:top-full after:left-0 after:w-full after:h-px after:bg-white after:scale-x-0 after:origin-right after:transition hover:after:scale-x-100 hover:after:origin-left">
          Film Album
        </Link>
      </div>

      {/* Socials */}
      <div className="flex flex-row gap-2">
        <Link href="mailto:dylanwprof@gmail.com" className="relative after:absolute after:top-2 after:left-0 after:w-full after:h-2/3 after:bg-gradient-to-r from-white/75 to-slate-200/50 after:bg-opacity-10 after:scale-x-0 after:origin-right after:transition hover:after:scale-x-100 hover:after:origin-left">
          <Email className="p-1 w-8 h-8" />
        </Link>
        <Link href="https://github.com/dylanwz" className="relative after:absolute after:top-0 after:left-0 after:w-full after:h-2/3 after:bg-gradient-to-r from-white/75 to-slate-200/50 after:bg-opacity-10 after:scale-x-0 after:origin-right after:transition hover:after:scale-x-100 hover:after:origin-left">
          <GitHub className="p-1 w-8 h-8" />
        </Link>
        <Link href="https://au.linkedin.com/in/ziheng-lao-166312228" className="relative after:absolute after:top-4 after:left-0 after:w-full after:h-2/3 after:bg-gradient-to-r from-white/75 to-slate-200/50 after:bg-opacity-10 after:scale-x-0 after:origin-right after:transition hover:after:scale-x-100 hover:after:origin-left">
          <LinkedIn className="p-1 w-8 h-8" />
        </Link>
      </div>

    </div>
  );
}