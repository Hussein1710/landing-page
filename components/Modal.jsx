"use client";
import React, { useState } from "react";
import { GiSelfLove } from "react-icons/gi";
import { RxPaperPlane } from "react-icons/rx";

const Modal = ({ isVisible, onClose }) => {
  const [email, setEmail] = useState("");

  const handleClose = (e) => {
    if (e.target.id === "wrapper") onClose();
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email submitted:", email);
  };

  if (!isVisible) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center"
      id="wrapper"
      onClick={handleClose}
    >
      <div className="w-[450px] sm:w-[600px]">
        <div className="bg-white p-2 rounded">
          <div className="p-6 flex flex-col items-center">
            <GiSelfLove size={50} />
            <h1 className="mt-4 text-slate-500">Join The Waitlist</h1>
            <p className="text-[14px] font-gruppo mt-4 w-[350px] sm:w-[450px] whitespace-pre-line mb-4">
              Join the waitlist for exclusive benefits, early access, and
              exciting updates. Don't miss out—be among the first to know and
              secure your spot before others. Sign up now!
            </p>
            <form
              onSubmit={handleSubmit}
              className="flex justify-between gap-10 items-center border-2 border-orange-400 rounded-3xl p-1 px-6"
            >
              <input
                type="email"
                value={email}
                onChange={handleEmailChange}
                placeholder="Enter your email address"
                required
                className="rounded px-3 py-2 focus:border-transparent focus:outline-none"
              />
              <button
                type="submit"
                className="bg-orange-500 rounded-full p-2 items-end"
              >
                <RxPaperPlane
                  size={30}
                  className="bg-orange-500 rounded-full"
                />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
