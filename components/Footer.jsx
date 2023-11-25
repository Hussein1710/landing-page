import React from 'react'
import { FaTwitter } from "react-icons/fa";
import { RiWhatsappFill } from "react-icons/ri";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className='bg-gray-100'>
        <div className="flex justify-center items-center gap-7 pt-8">
            <FaTwitter size={40} />
            <RiWhatsappFill size={40} />
            <FaInstagramSquare size={40} />
            <FaLinkedin size={40} />
        </div>
        <div className="flex justify-center items-center gap-1 mt-8">
            <p className='border-r-[3px] border-r-black pr-1'>Home</p>
            <p className='border-r-[3px] border-r-black pr-1'>FAQs</p>
            <p className='border-r-[3px] border-r-black pr-1'>About</p>
            <p>Contact</p>
        </div>
        <p className='flex justify-center items-center mt-8 pb-2'>@2023 Gleephoria. All rights reserved</p>
    </footer>
  )
}

export default Footer