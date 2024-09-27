"use client";

import Description from "@components/Inputs/Description";
import Name from "@components/Inputs/Name";
import Phone from "@components/Inputs/Phone";
import React, { useState } from "react";
import Topbar from "@components/Topbar";
import axios from "axios";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { CheckCircleIcon } from "@heroicons/react/20/solid";
import Link from "next/link";

function Report() {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    let { fullName, phone, age, description, homeAddress } = e.target;

    setLoading(true);

    setTimeout(() => {
      setSubmitted(phone.value);
    }, 3000);

    // try {
    //   axios.post("/api/report", {
    //     fullName: fullName.value,
    //     phone: phone.value,
    //     age: age.value,
    //     description: description.value,
    //     homeAddress: homeAddress.value,
    //   });
    // } catch (error) {}
  };

  return (
    <>
      <Topbar />

      <div className=" md:px-20 px-5">
        <form
          onSubmit={handleSubmit}
          className="mx-auto sm:pt-48 pt-28 sm:px-5 px-0 relative max-w-[650px] w-full"
          action=""
        >
          <h1 className="text-3xl mb-4 text-center font-[Suse]">
            Please fill in required the details
          </h1>
          <div className="flex-col flex gap-4">
            <Name />
            <Phone />
            <Description title={"Home Address"} home />
            <Description title={"Abuse Description(optional)"} />
          </div>
          <button
            className={`mt-4 py-6 font-[Suse] w-full bg-gray-900 hover:bg-opacity-70 bg-opacity-100 duration-150 text-white fx mb-12 ${
              loading ? "opacity-70" : ""
            }`}
            disabled={loading}
          >
            {loading ? <span className="loader mr-2"></span> : "Submit"}
          </button>
        </form>
        <div className="h-screen fixed w-screen inset-0 -z-10">
          <div className="absolute inset-0 bg-white/70 z-30"></div>
          <AliceCarousel
            autoPlay
            infinite
            autoPlayInterval="4000"
            animationType="fadeout"
          >
            <div className="bg-[url('../assets/img1.jpg')] h-screen w-screen bg-cover bg-center"></div>
            <div className="bg-[url('../assets/img2.jpg')] h-screen w-screen bg-cover bg-center"></div>
            <div className="bg-[url('../assets/img3.jpg')] h-screen w-screen bg-cover bg-center"></div>
          </AliceCarousel>
        </div>
        {submitted && (
          <div className="bg-white flex-col  gap-4 inset-0 fixed fx">
            <CheckCircleIcon className="w-40 h-40 fill-green-600" />
            <span className="text-4xl text-center w-1/2 font-[Suse]">
              Your details have been submitted and you should receive a text on
              <span className="text-blue-600">+234 {submitted}</span> in the
              next 24 hours
            </span>
            <Link href={"/"} className="hover:underline">
              Back to home
            </Link>
          </div>
        )}
      </div>
    </>
  );
}

export default Report;
