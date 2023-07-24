import React, { useEffect } from "react";
import img from "../../../assets/team-1.jpg";
import img1 from "../../../assets/team-2.jpg";
import img2 from "../../../assets/team-4.jpg";
import { Carousel } from "@mantine/carousel";
import { Group, Pagination, rem } from "@mantine/core";
import "./Testimonial.css";
// import { usePagination } from "@mantine/hooks";
// import { Splide, SplideSlide } from "@splidejs/react-splide";
// import "@splidejs/react-splide/css";

const Testimonial = () => {
  const data = [
    {
      id: 1,
      image: img,
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, corporis nesciunt quidem veritatis tempore quae.",
      name: "Khine Zin Thin",
      work: "React Developer ",
    },
    {
      id: 2,
      image: img1,
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, corporis nesciunt quidem veritatis tempore quae.",
      name: "Khine Wutyi win",
      work: "C# programmer",
    },
    {
      id: 3,
      image: img2,
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, corporis nesciunt quidem veritatis tempore quae.",
      name: "Phyo Wunna Lin",
      work: "Website Developer",
    },
  ];

  return (
    <div className=" w-[90%] mx-auto flex flex-col items-center justify-center gap-16 h-[500px] ">
      <div className=" flex flex-col items-center justify-center gap-16">
        <div className="  w-full relative">
          <h1 className={`lg:text-4xl md:text-3xl text-xl `}>Testimonials.</h1>
          {/* just circle */}
          <div className=" h-12 w-12 bg-[#9c6eb924] rounded-[50%] absolute circleMove top-0 left-[-14px]"></div>
        </div>
        <Carousel
          withIndicators
          className="mx-auto "
          slideSize="33.333333%"
          slideGap="md"
          loop
          align="start"
          slidesToScroll={1}
          // mx="auto"
          styles={{
            indicator: {
              width: rem(12),
              height: rem(4),
              transition: "width 250ms ease",
              display: "none",
              "&[data-active]": {
                width: rem(40),
              },
            },
          }}
          breakpoints={[
            { maxWidth: "lg", slideSize: "80%" },
            { maxWidth: "md", slideSize: "50%" },
            { maxWidth: "sm", slideSize: "100%", slideGap: 0 },
          ]}>
          {data.map((each) => {
            return (
              <Carousel.Slide key={each.id} className=" w-full h-64" size="50%">
                <div className="  flex justify-between h-56 bg-white dark:bg-black text-dark dark:text-white shadow-lg rounded-lg gap-10 p-6 ">
                  <div className=" w-[30%]">
                    <div className=" h-24 w-24 overflow-hidden rounded-[50%] bg-orange-400 ">
                      <img
                        src={each.image}
                        alt=""
                        className=" h-full w-full rounded-[50%] object-cover"
                      />
                    </div>
                  </div>
                  <div className=" flex flex-col gap-8 my-auto">
                    <div className=" tracking-wide">{each.description}</div>
                    <div className=" flex flex-col gap-4">
                      <h1>{each.name}</h1>
                      <div>{each.work}</div>
                    </div>
                  </div>
                </div>
              </Carousel.Slide>
            );
          })}
        </Carousel>
      </div>
    </div>
  );
};

export default Testimonial;
