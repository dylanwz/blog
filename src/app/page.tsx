import Navbar from "@/components/Navbar/Navbar";

export default function Home() {
  return (
    <div className="p-16">
      
      <Navbar />

      <div className="flex flex-col mt-24 justify-center items-center">
        <h3 className="font-header text-5xl font-medium text-center">
          <span className="inline-block italic">Swirls</span> of the <span className="ionline-block italic">Stream</span>
        </h3>
      </div>

      <hr className="mt-24"/>
      
      <div className="grid grid-rows-3 grid-cols-3">

      </div>

    </div>
  );
}
