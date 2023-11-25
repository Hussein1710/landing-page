import React from "react";
import Lady from "/public/images/Lady.svg";

const Whyus = () => {
  return (
    <section className="block sm:flex justify-center gap-28 items-center pt-10 mt-16 pb-16">
      <div className="p-6">
        <p className="text-[12px]">Why us</p>
        <h1 className="text-3xl font-bold mt-4">What makes us</h1>
        <p className="text-3xl font-bold bg-orange-600 text-transparent bg-clip-text">
          Different
        </p>
        <p className="w-[300px] mt-4">
          At Gleephoria, we believe that finding your soulmate is a journey
          worth taking at Gleephoria, we believe that finding your soulmate is a
          journey worth taking
        </p>
      </div>
      <div>
        <Lady className="w-0 sm:w-full items-start" />
      </div>
    </section>
  );
};

export default Whyus;
