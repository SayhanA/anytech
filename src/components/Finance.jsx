import Image from "next/image";
import React from "react";
import FinenceBottomSVG from "../../public/SVGs/FinenceBottomSVG";

const Finance = () => {
  const mainImageUrl =
    "/images/5ca8af1a922b106b962c34781483bc8e6e066688-1124x1364.png";
  const backgroundBase64 =
    "data:image/png;base64,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";

  return (
    <>
      <section className="container mt-[62px]">
        <div className="undefined grid md:grid-cols-2 grid-cols-1 md:gap-[15px] relative">
          <div className="md:space-y-sm space-y-xs">
            <h6 className="lg:text-head-6 text-res-head-6 uppercase text-blue-main font-Montserrat">
              POWERING THE FUTURE OF FINANCE
            </h6>
            <h2 className="whitespace-pre-line font-Montserrat text-res-head-2 text-blue-text lg:text-head-2">
              Uncovering new ways to delight customers
            </h2>

            <div className="!my-[60px] md:hidden block relative h-fit lg:text-clip">
              <figure
                className="w-[76%] mx-auto"
                style={{ boxShadow: "0px 23px 30px 0px #16437763" }}
              >
                <Image
                  src="/images/5ca8af1a922b106b962c34781483bc8e6e066688-1124x1364.png"
                  alt="POWERING THE FUTURE OF FINANCE"
                  width={1124}
                  height={1364}
                  className="object-cover w-full h-full"
                  priority
                />
              </figure>
              <div>
                <figure className="absolute top-[10%] right-[12%] translate-x-1/2 w-[min(115px,_30%)] rounded-full drop-shadow-2xl">
                  <Image
                    src="/images/0f6c8e3f8d16b88978823d82126b03593266eb79-116x115.svg"
                    alt="anybass"
                    width={116}
                    height={115}
                    className="object-contain w-full h-full"
                  />
                </figure>

                <figure className="absolute top-[40%] left-[20%] w-[min(87px,_20%)] rounded-full drop-shadow-2xl">
                  <Image
                    src="/images/f034c835798f95c1ce84f9c34ba48682b6383d06-89x88.svg"
                    alt="anypass"
                    width={89}
                    height={88}
                    className="object-contain w-full h-full"
                  />
                </figure>

                <figure className="absolute top-[20%] left-[12%] -translate-x-1/2 w-[min(73px,_18%)] rounded-full drop-shadow-2xl">
                  <Image
                    src="/images/c544c6e75349fb440fc0938052f9288519c87bec-74x75.svg"
                    alt="anycaas"
                    width={74}
                    height={75}
                    className="object-contain w-full h-full"
                  />
                </figure>
              </div>

              <figure className="absolute inset-0 w-full h-full -z-10">
                <Image
                  src="/images/background.svg"
                  alt="background frame"
                  layout="fill"
                  className="object-cover w-full h-full overflow-visible"
                />
              </figure>

              <figure className="absolute h-[50%] w-[50%] z-10 -bottom-[18%] right-[20%]">
                <Image
                  src="/images/foreground.png"
                  alt="foreground frame"
                  layout="fill"
                  className="object-cover w-full h-full overflow-visible"
                />
              </figure>
            </div>

            <div className="lg:pt-2">
              <div>
                <p>
                  <strong>
                    AnyTech is revolutionizing financial technology by
                    introducing innovative and real-time transaction account
                    processing capabilities, specifically designed for retail
                    financial services.
                  </strong>
                </p>
                <p>
                  Our modern approach surpasses traditional banking and card
                  processing systems, empowering you with the most advanced
                  technology for lasting success.
                </p>
              </div>
            </div>
          </div>

          <div className="hidden md:block relative h-fit lg:text-clip">
            <figure
              className="w-[76%] mx-auto"
              style={{ boxShadow: "0px 23px 30px 0px #16437763" }}
            >
              <div
                style={{
                  background: `url(${backgroundBase64}) no-repeat`,
                  backgroundSize: "cover",
                }}
              >
                <Image
                  src={mainImageUrl}
                  alt="POWERING THE FUTURE OF FINANCE"
                  width={1124}
                  height={1364}
                  className="object-cover w-full h-full"
                  sizes="(min-width: 1024px) 45vw, 95vw"
                />
              </div>
            </figure>

            <div>
              <figure className="absolute top-[10%] right-[12%] translate-x-1/2 w-[min(115px,_30%)] rounded-full drop-shadow-2xl">
                <div className="relative w-full h-full">
                  <Image
                    src="/images/0f6c8e3f8d16b88978823d82126b03593266eb79-116x115.svg"
                    alt="anybass"
                    width={116}
                    height={115}
                    className="object-contain w-full h-full"
                    sizes="115px"
                  />
                </div>
              </figure>

              <figure className="absolute top-[40%] left-[20%] w-[min(87px,_20%)] rounded-full drop-shadow-2xl">
                <div className="relative w-full h-full">
                  <Image
                    src="/images/f034c835798f95c1ce84f9c34ba48682b6383d06-89x88.svg"
                    alt="anypass"
                    width={89}
                    height={88}
                    className="object-contain w-full h-full"
                    sizes="87px"
                  />
                </div>
              </figure>

              <figure className="absolute top-[20%] left-[12%] -translate-x-1/2 w-[min(73px,_18%)] rounded-full drop-shadow-2xl">
                <div className="relative w-full h-full">
                  <Image
                    src="/images/c544c6e75349fb440fc0938052f9288519c87bec-74x75.svg"
                    alt="anycaas"
                    width={74}
                    height={75}
                    className="object-contain w-full h-full"
                    sizes="73px"
                  />
                </div>
              </figure>
            </div>

            <figure className="absolute inset-0 w-full h-full -z-10">
              <div className="relative w-full h-full">
                <Image
                  src="/images/background.svg"
                  alt="background frame"
                  fill
                  className="object-cover overflow-visible"
                />
              </div>
            </figure>

            <figure className="absolute h-[50%] w-[50%] z-10 -bottom-[18%] right-[20%]">
              <div className="relative w-full h-full">
                <Image
                  src="/images/foreground.png"
                  alt="foreground frame"
                  fill
                  className="object-cover overflow-visible"
                />
              </div>
            </figure>
          </div>
          
        </div>
      </section>
      <FinenceBottomSVG />
    </>
  );
};

export default Finance;
