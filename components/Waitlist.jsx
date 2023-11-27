import Button from "@/reuseables/Button";
import React from "react";

const Waitlist = () => {
  return (
    <div className="block sm:flex justify-between items-center mb-10 p-4 px-4 sm:px-28">
      <div className="border-t-2 border-t-orange-600 w-1/2 sm:w-1/4 border-b-2 border-b-orange-600 sm:mb-72">
        <p className="text-left sm:text-center ">Join the waitlist</p>
      </div>
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-3">
          <h1 className="font-bold text-3xl mt-4 sm:m-18">
            Experience your world with
          </h1>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-orange-300 via-orange-700 inline-block text-transparent bg-clip-text ">
            Gleephoria
          </h1>
        </div>
        <p className="w-[500px] font-normal font-gruppo">
          That's why we've created a dating platform that is designed to help
          you connect with individuals who share your interests, values, and
          lifestyle.
        </p>
        <div className="pb-2 sm:flex">
          <Button />
        </div>
      </div>
    </div>
  );
};

export default Waitlist;
