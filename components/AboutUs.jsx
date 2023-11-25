import React from "react";
import Connect from "/public/images/Connect.svg"
const AboutUs = () => {
  return (
    <section className="block sm:flex justify-center gap-28 items-center bg-gray-100 pt-10 mt-10 ">
      <div className="p-6">
        <p className="text-[12px]">About us</p>
        <h1 className="text-3xl font-bold mt-4">
          Connect with Your
        </h1>
          <p className="text-3xl font-bold bg-orange-600 text-transparent bg-clip-text">
            Soul-mate
          </p>
        <p className="w-[300px] mt-4 font-charmona">
          At Gleephoria, we believe that finding your soulmate is a journey
          worth taking. That's why we've created a dating platform that is
          designed to help you connect with individuals who share your
          interests, values and livestyle.
        </p>
      </div>
      <div >
        <Connect className="w-0 sm:w-full h-[50%] sm:h-full items-start pb-6" />
      </div>
    </section>
  );
};

export default AboutUs;
