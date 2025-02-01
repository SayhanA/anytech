import Image from "next/image";
import React from "react";
import HeroTopLayerSVG from "../../public/SVGs/HeroTopLayerSVG";
import HeroSecondSVG from "../../public/SVGs/HeroSecondSVG";

const Hero = () => {
  return (
    <>
      <section
        id="home-hero__content__container"
        className="lg:h-[max(620px,_calc(92vh-49px))] h-auto relative w-full text-white lg:bg-clip-hero-container overflow-hidden pt-[30%] md:pt-[20%] lg:pt-0 max-lg:pb-[15%] svelte-n9olsd"
      >
        <div className="container relative z-10 w-full h-full md:flex md:items-center md:justify-center">
          <div className="h-fit lg:flex-[65] xl:flex-[75]">
            <header className="max-w-2xl lg:space-y-sm space-y-[16px] mb-[32px]">
              <h1 className="lg:max-w-max lg:whitespace-pre-line lg:text-head-1 font-Montserrat text-res-head-1 text-white">
                Embrace the future of finance
              </h1>
              <h5 className="!text-white max-w-[37rem] lg:mr-5 text-res-head-5 text-blue-main lg:text-head-5 font-Montserrat">
                Reimagine financial services with AnyTech’s open platform,
                distributed banking solution that powers transformation
              </h5>
            </header>
            <div className="flex lg:flex-row flex-col lg:space-x-[16px] space-y-4 lg:space-y-0 w-full lg:mb-0 mb-md max-w-xl">
              <a
                className="md:py-[15.5px] py-[14px] px-[42px] rounded-xs shadow-button-primary text-link text-white flex items-center justify-center space-x-[8px] bg-orange-main false"
                href="/en/contact-us"
              >
                <span>Reach Out to Us</span>
                <svg
                  width="6"
                  height="9"
                  viewBox="0 0 6 9"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.25 4.89844L2.0625 8.08594C1.82812 8.32031 1.47656 8.32031 1.26562 8.08594L0.726562 7.57031C0.515625 7.33594 0.515625 6.98438 0.726562 6.77344L3 4.52344L0.726562 2.25C0.515625 2.03906 0.515625 1.6875 0.726562 1.45312L1.26562 0.914062C1.47656 0.703125 1.82812 0.703125 2.0625 0.914062L5.25 4.10156C5.46094 4.33594 5.46094 4.6875 5.25 4.89844Z"
                    fill="white"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
          <div className="lg:flex-[35] xl:flex-[25] lg:block hidden"></div>
        </div>

        <div className="hidden lg:block absolute top-0 xl:left-[35%] xl:w-[65%] left-1/2 lg:w-[56%] h-full bg-clip-hero-image pointer-events-none">
          <figure className="h-[115%] w-[115%] object-cover relative">
            <img
              srcSet="images/4c4adc11b7ca6ea25c7e7cba555d8f0b06488f3f-7952x5304_1.jpg 320w, images/4c4adc11b7ca6ea25c7e7cba555d8f0b06488f3f-7952x5304_2.jpg 640w, images/4c4adc11b7ca6ea25c7e7cba555d8f0b06488f3f-7952x5304_7.jpg 960w, images/4c4adc11b7ca6ea25c7e7cba555d8f0b06488f3f-7952x5304_5.jpg 1280w, images/4c4adc11b7ca6ea25c7e7cba555d8f0b06488f3f-7952x5304_9.jpg 1600w, images/4c4adc11b7ca6ea25c7e7cba555d8f0b06488f3f-7952x5304_4.jpg 1920w, images/4c4adc11b7ca6ea25c7e7cba555d8f0b06488f3f-7952x5304_3.jpg 2240w, images/4c4adc11b7ca6ea25c7e7cba555d8f0b06488f3f-7952x5304_10.jpg 2560w, images/4c4adc11b7ca6ea25c7e7cba555d8f0b06488f3f-7952x5304_6.jpg 2880w, images/4c4adc11b7ca6ea25c7e7cba555d8f0b06488f3f-7952x5304_11.jpg 3200w, images/4c4adc11b7ca6ea25c7e7cba555d8f0b06488f3f-7952x5304_8.jpg 3520w, images/4c4adc11b7ca6ea25c7e7cba555d8f0b06488f3f-7952x5304_12.jpg 3840w, images/4c4adc11b7ca6ea25c7e7cba555d8f0b06488f3f-7952x5304_13.jpg 4160w, images/4c4adc11b7ca6ea25c7e7cba555d8f0b06488f3f-7952x5304_14.jpg 4480w, images/4c4adc11b7ca6ea25c7e7cba555d8f0b06488f3f-7952x5304_15.jpg 4800w, images/4c4adc11b7ca6ea25c7e7cba555d8f0b06488f3f-7952x5304_25.jpg 5120w, images/4c4adc11b7ca6ea25c7e7cba555d8f0b06488f3f-7952x5304_18.jpg 5440w, images/4c4adc11b7ca6ea25c7e7cba555d8f0b06488f3f-7952x5304_20.jpg 5760w, images/4c4adc11b7ca6ea25c7e7cba555d8f0b06488f3f-7952x5304_16.jpg 6080w, images/4c4adc11b7ca6ea25c7e7cba555d8f0b06488f3f-7952x5304_17.jpg 6400w, images/4c4adc11b7ca6ea25c7e7cba555d8f0b06488f3f-7952x5304_22.jpg 6720w, images/4c4adc11b7ca6ea25c7e7cba555d8f0b06488f3f-7952x5304_24.jpg 7040w, images/4c4adc11b7ca6ea25c7e7cba555d8f0b06488f3f-7952x5304_21.jpg 7360w, images/4c4adc11b7ca6ea25c7e7cba555d8f0b06488f3f-7952x5304_19.jpg 7680w, images/4c4adc11b7ca6ea25c7e7cba555d8f0b06488f3f-7952x5304_23.jpg 7952w"
              src="images/4c4adc11b7ca6ea25c7e7cba555d8f0b06488f3f-7952x5304.jpg"
              width="7952"
              height="5304"
              style={{
                background:
                  "url('data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAANABQDASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAAYIB//EACIQAAEDBAICAwAAAAAAAAAAAAECAwQABQYREiEHURUiYf/EABYBAQEBAAAAAAAAAAAAAAAAAAABAv/EABkRAAMBAQEAAAAAAAAAAAAAAAABEQIhMf/aAAwDAQACEQMRAD8AfPDd6iybe04t9KVbU4tKj2BTLl9/huuw0Rll0LJHJA2En9qRsXyW5Wnk3Ce4B0aV71WhC+zl463MLy/qSVN76Vr3TOG+GLPSi4U+KmK2HH20q12CaKm9PlqeEgfGRDoa2SSaKVlP/9k=') no-repeat center center",
                backgroundSize: "cover",
                width: "100vw",
                height: "100vh",
              }}
              className="h-full w-full object-cover scale-150"
              sizes="100vw"
              alt="background image"
            />
          </figure>
          <div className="gradient-overlay svelte-1lc7tvy"></div>
        </div>

        <HeroTopLayerSVG />
        <HeroSecondSVG />
      </section>
      <div className="block lg:hidden translate-y-[-20%] -mb-[10%]">
        <figure
          style={{ clipPath: "polygon(0 15%, 100% 0, 100% 85%, 0% 100%)" }}
          className="object-cover overflow-hidden"
        >
          <img
            srcSet="images/4c4adc11b7ca6ea25c7e7cba555d8f0b06488f3f-7952x5304_1.jpg 320w, images/4c4adc11b7ca6ea25c7e7cba555d8f0b06488f3f-7952x5304_2.jpg 640w, images/4c4adc11b7ca6ea25c7e7cba555d8f0b06488f3f-7952x5304_7.jpg 960w, images/4c4adc11b7ca6ea25c7e7cba555d8f0b06488f3f-7952x5304_5.jpg 1280w, images/4c4adc11b7ca6ea25c7e7cba555d8f0b06488f3f-7952x5304_9.jpg 1600w, images/4c4adc11b7ca6ea25c7e7cba555d8f0b06488f3f-7952x5304_4.jpg 1920w, images/4c4adc11b7ca6ea25c7e7cba555d8f0b06488f3f-7952x5304_3.jpg 2240w, images/4c4adc11b7ca6ea25c7e7cba555d8f0b06488f3f-7952x5304_10.jpg 2560w, images/4c4adc11b7ca6ea25c7e7cba555d8f0b06488f3f-7952x5304_6.jpg 2880w, images/4c4adc11b7ca6ea25c7e7cba555d8f0b06488f3f-7952x5304_11.jpg 3200w, images/4c4adc11b7ca6ea25c7e7cba555d8f0b06488f3f-7952x5304_8.jpg 3520w, images/4c4adc11b7ca6ea25c7e7cba555d8f0b06488f3f-7952x5304_12.jpg 3840w, images/4c4adc11b7ca6ea25c7e7cba555d8f0b06488f3f-7952x5304_13.jpg 4160w, images/4c4adc11b7ca6ea25c7e7cba555d8f0b06488f3f-7952x5304_14.jpg 4480w, images/4c4adc11b7ca6ea25c7e7cba555d8f0b06488f3f-7952x5304_15.jpg 4800w, images/4c4adc11b7ca6ea25c7e7cba555d8f0b06488f3f-7952x5304_25.jpg 5120w, images/4c4adc11b7ca6ea25c7e7cba555d8f0b06488f3f-7952x5304_18.jpg 5440w, images/4c4adc11b7ca6ea25c7e7cba555d8f0b06488f3f-7952x5304_20.jpg 5760w, images/4c4adc11b7ca6ea25c7e7cba555d8f0b06488f3f-7952x5304_16.jpg 6080w, images/4c4adc11b7ca6ea25c7e7cba555d8f0b06488f3f-7952x5304_17.jpg 6400w, images/4c4adc11b7ca6ea25c7e7cba555d8f0b06488f3f-7952x5304_22.jpg 6720w, images/4c4adc11b7ca6ea25c7e7cba555d8f0b06488f3f-7952x5304_24.jpg 7040w, images/4c4adc11b7ca6ea25c7e7cba555d8f0b06488f3f-7952x5304_21.jpg 7360w, images/4c4adc11b7ca6ea25c7e7cba555d8f0b06488f3f-7952x5304_19.jpg 7680w, images/4c4adc11b7ca6ea25c7e7cba555d8f0b06488f3f-7952x5304_23.jpg 7952w"
            src="images/4c4adc11b7ca6ea25c7e7cba555d8f0b06488f3f-7952x5304.jpg"
            width="7952"
            height="5304"
            // style="background: url(data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAANABQDASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAAYIB//EACIQAAEDBAICAwAAAAAAAAAAAAECAwQABQYREiEHURUiYf/EABYBAQEBAAAAAAAAAAAAAAAAAAABAv/EABkRAAMBAQEAAAAAAAAAAAAAAAABEQIhMf/aAAwDAQACEQMRAD8AfPDd6iybe04t9KVbU4tKj2BTLl9/huuw0Rll0LJHJA2En9qRsXyW5Wnk3Ce4B0aV71WhC+zl463MLy/qSVN76Vr3TOG+GLPSi4U+KmK2HH20q12CaKm9PlqeEgfGRDoa2SSaKVlP/9k=) no-repeat; background-size: cover; "
            className="h-full w-full object-cover scale-150"
            sizes="100vw"
            alt="background image"
          />
        </figure>
        <div className="gradient-overlay"></div>
      </div>
    </>
  );
};

export default Hero;
