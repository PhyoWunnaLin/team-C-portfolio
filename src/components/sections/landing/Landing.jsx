import React, { useEffect, useRef, useState } from "react";
import "./landing.css";
import landingImg from "../../../assets/landingImg.jpg";

// console.log(animateTextList);

const Landing = () => {
  const animateRef = useRef();
  const [time, setTime] = useState(new Date());
  const [time2, setTime2] = useState(new Date());
  let index = 0;
  const textOut = (animateTextList) => {
    for (let i = 0; i < animateTextList.length; i++) {
      animateTextList[i].classList.remove("text-out");
    }

    animateTextList[index].classList.add("text-out");

    console.log();
    if (index == animateTextList.length - 1) {
      index = 0;
    } else {
      index++;
    }
  };
  const textIn = (animateTextList) => {
    for (let i = 0; i < animateTextList.length; i++) {
      animateTextList[i].classList.remove("text-in", "text-out");
    }

    animateTextList[index].classList.add("text-in");

    console.log();
    if (index == animateTextList.length - 1) {
      index = 0;
    } else {
      index++;
    }
  };

  useEffect(() => {
    const animateTextList = [...animateRef?.current?.children];
    animateTextList[1].classList.add("text-in");
    const interval = setInterval(() => {
      setTime(new Date());
      textIn(animateTextList);
    }, 3000);
    const interval2 = setInterval(() => {
      textOut(animateTextList);
      console.log("out");
    }, 3000);

    return () => {
      clearInterval(interval);
      clearInterval(interval2);
    };
  }, []);

  return (
    <div className={`h-screen w-full flex justify-center items-center`}>
      <div className={`w-[70%] flex  mx-auto justify-between items-center`}>
        <div className={`w-full lg:w-[40%]  md:w-[50%] h-[400px] `}>
          {/* left side body */}
          <div className="flex flex-col gap-y-5">
            <div className={`text-[#0B0B13]  dark:text-white`}>
              Hello ~ My name is
            </div>
            <div
              className={` tracking-wider lg:text-6xl md:text-4xl text-3xl dark:text-white text-[#0B0B13]`}>
              SAKURA JUNG
            </div>
            {/* left text design body */}
            <div className=" ">
              <div
                className={` flex-col flex   w-full relative primary-text overflow-hidden bg-white`}>
                <div
                  ref={animateRef}
                  className=" flex flex-col justify-center ">
                  <span className={`text-3xl py-2 span`}>
                    Junior Website Developer
                  </span>
                  <span className={`text-3xl  py-2 span`}>
                    FrontEnd Web Developer
                  </span>
                  <span className={`text-3xl  py-2 span`}>
                    Junior React Developer
                  </span>
                </div>
              </div>
            </div>
            <div className={`text-[#0B0B13] dark:text-white`}>
              I develop the front-end projects, using react framework ,
              <br /> CSS library like bootstrap,tailwindCSS, mantine, Chakra UI,{" "}
              specialize in front-end language HTML, CSS,JS, SASS.
            </div>
            {/* btn */}
            <div>
              <button
                className={`px-6 py-3 rounded hover:-translate-y-2
            
              border-[1.5px] border-black hover:bg-white
              dark:border-white dark:hover:border-black
               dark:hover:bg-[#0B0B13] hover:text-[#0B0B13]
                dark:hover:text-white bg-[#0B0B13]
               text-white dark:bg-white dark:text-[##0B0B13] transition-C`}>
                DOWNLOAD CV
              </button>
            </div>
          </div>
        </div>
        <div
          className={` w-[40%]   items-center justify-center lg:flex md:block hidden`}>
          <div className="leftImg mx-auto w-[50%] h-[400px] flex justify-center items-center">
            <img
              src={landingImg}
              className=" object-cover  w-full h-full z-20 block"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
