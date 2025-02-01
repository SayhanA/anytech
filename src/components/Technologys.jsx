"use client";

import { technologyData } from "@/app/data/Techonologys";
import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import TechnologyBottomSVG from "../../public/SVGs/TechnologyBottomSVG";

const Technologys = () => {
  const data = [
    "Customer focused",
    "Agile and adaptable",
    "Compliance ready",
    "Secure and safe",
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);

  const handleButtonClick = (index) => {
    setActiveIndex(index);
    if (swiperRef.current) {
      swiperRef.current.slideTo(index);
    }
  };

  return (
    <>
      <section className="container">
        <header className="md:space-y-sm space-y-xs text-center">
          <h6 className="lg:text-head-6 text-res-head-6 uppercase text-blue-main font-Montserrat">
            TECHNOLOGY BUILT FOR YOU
          </h6>
          <h2 className="whitespace-pre-line font-Montserrat text-res-head-2 text-blue-text lg:text-head-2">
            The future of finance
          </h2>
        </header>

        <section>
          {/* Buttons */}
          <div className="flex-wrap space-x-4 justify-center items-center lg:flex hidden py-[32px]">
            {data.map((item, index) => (
              <button
                key={index}
                className={`lg:text-body-p0 text-res-body-p0 !font-semibold xl:px-[48px] md:px-[38px] px-[28px] py-[6px] xl:py-[8px] rounded-[200px] transition-colors duration-300 ${
                  activeIndex === index
                    ? "bg-blue-highlight text-blue-main"
                    : "hover:bg-[#F5FAFF] text-blue-main"
                }`}
                onClick={() => handleButtonClick(index)}
              >
                {item}
              </button>
            ))}
          </div>

          <div id="home-technology__carousel__container" className="relative" style={{filter: "drop-shadow(0px 16px 21px rgba(207, 233, 247, 0.47)"}}>
            <Swiper
              pagination={{ clickable: true }}
              modules={[Autoplay]}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              className="mySwiper"
              onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
              onSwiper={(swiper) => (swiperRef.current = swiper)}
            >
              {technologyData.map((data, index) => (
                <SwiperSlide key={data?.id} className="swiper-slide">
                  <article className="grid lg:grid-cols-2 grid-cols-1 md:gap-[32px] lg:p-[64px] rounded-[20px] mb-5 p-[24px] lg:h-[550px] bg-white">
                    <section className="lg:space-y-md space-y-sm">
                      <header className="lg:space-y-md space-y-xs">
                        <h6 className="lg:text-head-6 text-res-head-6 uppercase text-blue-main font-Montserrat">
                          {data?.title}
                        </h6>
                        <h3 className="text-blue-text text-res-head-3 lg:text-head-3 font-Montserrat">
                          {data?.heading}
                        </h3>
                      </header>
                      <figure className="md:hidden h-[150px]">
                        <img
                          srcSet={data?.image1?.srcSet.join(", ")}
                          src={data?.image1?.src}
                          width="3672"
                          height="2712"
                          alt={data?.title}
                          className="h-full w-full object-cover rounded-[8px]"
                          sizes="max-width(768px) 90vw, 0px"
                          loading="lazy"
                        />
                      </figure>
                      <div>
                        <p>
                          <strong>
                            Elevate customer experience and achieve agile
                            financial product innovation with the world’s first,
                            consumer-centric, real-time transaction account
                            processing and credit limit system.
                          </strong>
                        </p>
                        <p>
                          Experience the advantages of integrated retail
                          financial services technology, real-time analysis of
                          transactional behaviour and product marketing
                          opportunities.
                        </p>
                      </div>
                    </section>

                    <figure className="hidden md:block h-[425px]">
                      <img
                        srcSet={data?.image2?.srcSet.join(", ")}
                        src={data?.image2?.src}
                        width="3672"
                        height="2712"
                        alt={data?.title}
                        className="h-full w-full object-cover rounded-[16px]"
                        sizes="35vw"
                        loading="lazy"
                      />
                    </figure>
                  </article>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </section>
      </section>
      <TechnologyBottomSVG />
    </>
  );
};

export default Technologys;
