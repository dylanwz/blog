import Navbar from "@/components/Navbar/Navbar";
import Image from "next/image";

import temp from "@/assets/temp.jpg";

export default function Home() {
  return (
    <div className="flex justify-center">
      <div className="py-16">
        
        {/* Top Section */}
        <Navbar />

        {/* Hero Section */}
        <div className="flex flex-row justify-between mt-16">
          
          {/* Text */}
          <div className="flex flex-col justify-center w-1/2">
            <h3 className="font-header text-5xl font-bold">
              Soft <span className="inline-block italic">Swirls</span> in <br/> a Steady <span className="inline-block italic">Stream</span>
            </h3>
            <p className="leading-7 py-8">
              Welcome to my personal blog. My most recent interests/pursuits consist of
              <ul className="pl-8 list-disc">
                <li>finishing this blog; and</li>
                <li>finishing this blog.</li>
              </ul>
            </p>
          </div>

          {/* Image */}
          <div className="flex justify-end w-1/2">
            <Image 
              src={temp}
              width={250}
              height={300}
              alt="landing graphic"
            />
          </div>

        </div>

        {/* Latest Posts */}
        <div className="mt-24">
          <h1 className="text-4xl font-header font-bold">Latest Posts</h1>
          <div className="grid grid-rows-3 grid-cols-3">

          </div>
        </div>

      </div>
    </div>
  );
}
