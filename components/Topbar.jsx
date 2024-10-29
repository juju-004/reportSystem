import React from "react";
import { BiLogoTwitter, BiLogoWhatsapp } from "react-icons/bi";

export default function Topbar({ home }) {
  return (
    <div
      className="mt-4 flex flex-col sm:flex-row sm:gap-9 gap-3 items-end sm:justify-end sm:items-center pr-2 md:pr-20
     w-full font-[Suse]"
    >
      <div className=" bg-black/10 px-5 rounded-3xl flex flex-col py-1.5 ">
        <span className={`opacity-40 ${home ? "text-white/75" : ""}`}>
          For emergency
        </span>
        <span className={`${home ? "text-white/75" : ""}`}>
          <span>Call:</span> 08109230943
        </span>
      </div>
      <span className="opacity-60 sm:pr-0 pr-10">Or</span>
      <div className="mb-3">
        <span className={`${home ? "text-white/75" : ""}`}>
          Reach out for help via
        </span>
        <div className="flex gap-3">
          <button className="flex gap-2 pl-2 hover:opacity-70 opacity-100 duration-150 pr-4 bg-black text-white rounded-2xl items-center">
            <BiLogoTwitter /> twitter
          </button>
          <button className="flex gap-2 pl-2 hover:opacity-70 opacity-100 duration-150 pr-4 bg-green-500 py-1 text-white rounded-2xl items-center">
            <BiLogoWhatsapp /> whatsapp
          </button>
        </div>
      </div>
    </div>
  );
}
