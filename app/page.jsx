import Topbar from "@components/Topbar";
import Link from "next/link";

function App() {
  return (
    <div className="app h-screen min-h-[770px] md:min-h-[710px] bg-center bg-cover bg-no-repeat bg-[url('../assets/abuse.jpg')] ">
      <div className={`light bg-gradient h-full`}>
        <div className="container mx-auto relative flex justify-center items-start h-full flex-col md:px-20 px-5">
          <Topbar home />
          <div className="fx mt-5 flex-col">
            <div className="text-center md:text-left">
              <h1 className="md:text-8xl text-6xl text-gray-200 font-bold py-3">
                end abuse
              </h1>
              <h1 className="md:text-[11rem] text-[8.5rem] md:-mt-28 -mt-24 ">
                <span className="text-gray-500 font-[Suse]">now</span>
                <span className="text-gray-500/20">.</span>
              </h1>
            </div>
          </div>
          <Link
            href={"/report"}
            className="bg-gray-900 font-[Suse] text-white text-xl py-4 px-9 bg-opacity-50 mt-2 rounded-[3rem] duration-300 hover:bg-opacity-100"
          >
            Report an abuse
          </Link>
        </div>
      </div>
    </div>
  );
}

export default App;
