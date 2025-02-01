import Image from "next/image";
import React from "react";

const Philosophy = () => {
  return (
    <section className="container md:mb-[128px]">
      <header className="undefined md:space-y-sm space-y-xs text-center mb-8">
        <h6 className="undefined lg:text-head-6 text-res-head-6 uppercase text-blue-main font-Montserrat">
          OUR PHILOSOPHY
        </h6>
        <h2 className="undefined whitespace-pre-line font-Montserrat text-res-head-2 text-blue-text lg:text-head-2">
          Human-centred innovation
        </h2>
      </header>
      <Image
        src="https://cdn.sanity.io/images/6jywt20u/production/2d90adc3456764f98e38ce40b5ea7d7f52fd4ce1-2206x727.png"
        width={2206}
        height={727}
        alt="Proper alt text"
        sizes="(max-width: 768px) 100vw, 1920px"
      />{" "}
      <div className="swiper">
        <div className="swiper-wrapper flex gap-[2%] mt-20 lg:flex-nowrap flex-wrap">
          <div className="swiper-slide !h-auto w-[45%] flex-grow">
            <li className="list-none undefined z-20 h-full md:space-y-sm space-y-[8px] bg-[#F8FCFF] rounded-[20px] md:p-md p-sm ">
              <figure className="w-fit rounded-full">
                <img
                  srcSet="images/28029da89383a59e47420ee46b7e4c364051b45f-50x50_1.svg 50w"
                  src="images/28029da89383a59e47420ee46b7e4c364051b45f-50x50.svg"
                  width="50"
                  height="50"
                  sizes="50px"
                  alt="Full suite solutions"
                  className="lg:h-[50px] lg:w-[50px] h-[32px] w-[32px]"
                  loading="lazy"
                />
              </figure>
              <h4 className="undefined font-Montserrat text-blue-text text-res-head-4 lg:text-head-4">
                Full-suite solutions
              </h4>
              <p className="text-body-1">
                Experience the ease of integration across various banking and
                payment functions with our comprehensive suite of solutions.
              </p>
            </li>
          </div>

          <div className="swiper-slide !h-auto w-[45%] flex-grow">
            <li className="list-none undefined z-20 h-full md:space-y-sm space-y-[8px] bg-[#F8FCFF] rounded-[20px] md:p-md p-sm ">
              <figure className="w-fit rounded-full">
                <img
                  srcSet="images/36c4da4283252fda5dce13c46ea3e06a5312218c-50x51_1.png 50w"
                  src="images/36c4da4283252fda5dce13c46ea3e06a5312218c-50x51.png"
                  width="50"
                  height="51"
                  sizes="50px"
                  alt="Simplify the complex"
                  className="lg:h-[50px] lg:w-[50px] h-[32px] w-[32px]"
                  loading="lazy"
                />
              </figure>

              <h4 className="undefined font-Montserrat text-blue-text text-res-head-4 lg:text-head-4">
                Simplify the complex
              </h4>
              <p className="text-body-1">
                Simplify complex processes and optimise your financial
                operations by leveraging the power of AI, Blockchain, Cloud
                Computing, and Big Data.
              </p>
            </li>
          </div>

          <div className="swiper-slide !h-auto w-[45%]  flex-grow">
            <li className="list-none undefined z-20 h-full md:space-y-sm space-y-[8px] bg-[#F8FCFF] rounded-[20px] md:p-md p-sm ">
              <figure className="w-fit rounded-full">
                <img
                  srcSet="images/1966d94a29ffe1673fd510327ba0eb409f82b680-50x50_1.svg 50w"
                  src="images/1966d94a29ffe1673fd510327ba0eb409f82b680-50x50.svg"
                  width="50"
                  height="50"
                  sizes="50px"
                  alt="Cutting-edge tech"
                  className="lg:h-[50px] lg:w-[50px] h-[32px] w-[32px]"
                  loading="lazy"
                />
              </figure>
              <h4 className="undefined font-Montserrat text-blue-text text-res-head-4 lg:text-head-4">
                Cutting-edge tech
              </h4>
              <p className="text-body-1">
                We seamlessly combine cutting-edge technologies, resulting in an
                unparalleled fintech experience for financial institutions.
              </p>
            </li>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
