import React from 'react'
import Image from "next/image";
import PrivacyImage from "../public/images/PrivacyImage.jpg"
import { SiLetsencrypt } from "react-icons/si";
import { BsIncognito, BsBriefcaseFill } from "react-icons/bs";
const Privacy = () => {
  return (
    <div className='block sm:flex justify-around items-center bg-pink-100 border rounded sm:rounded-3xl mt-16 sm:m-28 px-1 sm:px-4 py-8'>
        <div className="p-4">
            <h1 className='font-bold text-3xl w-[250px] sm:w-full'>Prioritizing your privacy</h1>
            <p className='w-[300px] sm:w-[470px] mt-3'>Gleephoria has amazing features that enhances your privacy and tailors the best experience for you.</p>
            <div className="mt-4 flex flex-col gap-3">
                <div className="flex items-center gap-1">
                    <SiLetsencrypt size={25} /> 
                    <p>End to end-encryption</p>
                </div>

                <div className="flex items-center gap-1">
                    <BsIncognito size={25} /> 
                    <p>Icognito mode</p>
                </div>

                <div className="flex items-center gap-1">
                    <BsBriefcaseFill size={25} /> 
                    <p>Travel Mode</p>
                </div>
            </div>
        </div>
        <div className="w-full sm:w-[25%] h-[20%] bg-inherit p-4">
            <Image src={PrivacyImage} alt='privacy' />
        </div>
    </div>
  )
}

export default Privacy