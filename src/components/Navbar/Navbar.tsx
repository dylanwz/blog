import Link from "next/link";

export default function Navbar() {
  
  return (
    <div className="flex flex-row w-full items-center justify-between">
      
      {/* Logo */}
      <Link href="/" className="flex flex-row items-center">
        {/* <Image 
          src={temp}
          alt="landing graphic"
        /> */}
        <div className="text-3xl font-bold font-header">
          <span className="inline-block italic">Swirls</span> in a <span className="inline-block italic">Stream</span>
        </div>
      </Link>

      {/* Links */}
      <div className="flex flex-row items-center font-button text-md gap-6">
        <Link href="/" className="relative after:absolute after:top-full after:left-0 after:w-full after:h-px after:bg-black after:scale-x-0 after:origin-right after:transition hover:after:scale-x-100 hover:after:origin-left">
          Posts
        </Link>
        <Link href="/" className="relative after:absolute after:top-full after:left-0 after:w-full after:h-px after:bg-black after:scale-x-0 after:origin-right after:transition hover:after:scale-x-100 hover:after:origin-left">
          Collections
        </Link>
        <Link href="/" className="relative after:absolute after:top-full after:left-0 after:w-full after:h-px after:bg-black after:scale-x-0 after:origin-right after:transition hover:after:scale-x-100 hover:after:origin-left">
          Film
        </Link>
        <Link href="/" className="relative after:absolute after:top-full after:left-0 after:w-full after:h-px after:bg-black after:scale-x-0 after:origin-right after:transition hover:after:scale-x-100 hover:after:origin-left">
          About
        </Link>
      </div>

    </div>
  );
}