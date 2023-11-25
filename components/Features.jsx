import React from "react";

const Features = () => {
  //   const [isActive, setIsActive] = useState(false);

  return (
    <div>
      <div className="flex flex-col justify-center items-center mt-16">
        <p className="text-center text-sm text-slate-600">Our Features</p>
        <h1 className="font-bold text-2xl text-center w-[300px] mt-4">
          We are more than just a <mark className="bg-gradient-to-r from-orange-400 via-orange-700 text-transparent bg-clip-text">dating site</mark>
        </h1>
      </div>
      <div className="mt-4">
        <button className="w-full border-1 py-4 hover:bg-gradient-to-r from-orange-400 via-orange-600 relative">
          <h2 className="text-left px-4 font-semibold text-lg">Glee Stories</h2>
          <p className="text-left px-4 w-[400px] sm:w-full font-quicksand">
            That's why we've created a dating platform that is designed to help
            you connect with individuals
          </p>
        </button>
        <button className="w-full border-1 py-4 hover:bg-gradient-to-r from-orange-400 via-orange-600 relative">
          <h2 className="text-left px-4 font-semibold text-lg">Global reach</h2>
          <p className="text-left px-4 w-[400px] sm:w-full font-quicksand">
          That's why we've created a dating platform that is designed to help you connect with individuals
          </p>
        </button>
        <button className="w-full border-1 py-4 hover:bg-gradient-to-r from-orange-400 via-orange-600 relative">
          <h2 className="text-left px-4 font-semibold text-lg">Easy compatibility</h2>
          <p className="text-left px-4 w-[400px] sm:w-full font-quicksand">
          That's why we've created a dating platform that is designed to help you connect with individuals
          </p>
        </button>
      </div>
    </div>
  );
};

export default Features;
