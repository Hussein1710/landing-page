import React from "react";
import Image from "next/image";
import DownloadOnAppstore from "../public/images/DownloadOnAppstore.png";
import DownloadOnPlaystore from "../public/images/DownloadOnPlaystore.png";
import Matched from "../public/images/Matched.jpg";

const HeaderText = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <h2 className="text-3xl text-center font-bold w-[390px] sm:w-[420px] leading-1 py-3">
        Unlock the Magic of Love at{" "}
        <mark className="bg-gradient-to-r from-orange-300 via-orange-600 text-transparent bg-clip-text">
          Gleephoria
        </mark>{" "}
        : Where Connections Spark and Hearts Soar!
      </h2>
      <p className="text-[12px]">Coming soon</p>
      <div className="flex justify-center items-center gap-2 mt-4">
        <Image
          src={DownloadOnAppstore}
          width={100}
          height={100}
          alt="Download on App Store"
        />
        <Image
          src={DownloadOnPlaystore}
          width={100}
          height={200}
          alt="Download on Play Store"
        />
      </div>
      <button className="flex sm:hidden justify-center items-center mt-16 px-14 py-4 rounded-3xl bg-gradient-to-r from-orange-300 via-orange-600">
        Join the waitlist
      </button>

      <div className="w-full sm:w-full flex justify-center items-center bg-inherit mt-20">
        <Image src={Matched} alt="Matched couple" />
      </div>

      <div className="flex mt-4 border-t-2 border-t-orange-700">
        <p className="w-[350px] sm:w-[450px] text-center sm:text-right font-font mt-2 pb-4">
          At Gleephoria, we believe that finding your soulmate is a journey
          worth taking. That's why we've created a dating platform that is
          designed to help you connect with individuals who share your
          interests, values, and lifestyle.
        </p>
      </div>
    </div>
  );
};

export default HeaderText;
