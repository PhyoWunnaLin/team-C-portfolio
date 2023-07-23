import React,{useState} from 'react'
import {FaHome} from "react-icons/fa"
import {BsPerson} from "react-icons/bs"
import {AiOutlineFileText} from "react-icons/ai"
import {MdOutlineWorkOutline} from "react-icons/md"
import {FiPhoneOutgoing} from "react-icons/fi"
import { Burger } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

const Sidebar = () => {
  // sidebar active class 
  const [active,setActive] = useState("home");

  // mantine burger 
  const [opened, { toggle }] = useDisclosure(false);
  const label = opened ? 'Close navigation' : 'Open navigation';

  return (
    <div>
      {/* sidebar  */}
        <div className={`z-50 h-screen fixed flex flex-col dark:bg-[#0c0c14] 
            max-md:absolute ${opened ? "max-md:left-0" : "max-md:left-[-300px]"}
            transition-all ease-in duration-500`}>
            <div className=' primary-bg text-white text-4xl max-[400px]:text-3xl font-bold flex justify-center pt-5
            max-[400px]:pt-4 h-[90px] max-[400px]:h-[80px]'>
                <h1>K</h1>
            </div>

            <div className=' border-r h-screen text-gray-600 dark:white text-3xl max-[400px]:text-2xl flex flex-col justify-center item-center'>
                <div 
                  onClick={() => setActive("home")} 
                  className={`${active == "home" ? "primary-text" : ""} transition-all duration-300 border-b p-6 cursor-pointer`}>
                  <FaHome/>
                </div>

                <div 
                  onClick={() => setActive("about")} 
                  className={`${active == "about" ? "primary-text" : ""} transition-all duration-100 border-b p-6 cursor-pointer`}>
                  <BsPerson/>
                </div>

                <div 
                  onClick={() => setActive("resume")} 
                  className={`${active == "resume" ? "primary-text" : ""} transition-all duration-100 border-b p-6 cursor-pointer`}>
                  <AiOutlineFileText/>
                </div>

                <div 
                  onClick={() => setActive("project")} 
                  className={`${active == "project" ? "primary-text" : ""} transition-all duration-100 border-b p-6 cursor-pointer`}>
                  <MdOutlineWorkOutline/>
                </div>

                <div 
                  onClick={() => setActive("contact")} 
                  className={`${active == "contact" ? "primary-text" : ""} transition-all duration-100 p-6 cursor-pointer`}>
                  <FiPhoneOutgoing/>
                </div>
            </div>
        </div>

      {/* menu burger */}
      <div className=' absolute right-5 bottom-5 hidden max-md:block'>
        <div className=' cursor-pointer primary-bg w-[60px] h-[60px] text-center pt-3 rounded-full'>
        <Burger opened={opened} onClick={toggle} aria-label={label} color="#fff" />
        </div>
      </div>

    </div>
  )
}

export default Sidebar