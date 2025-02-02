import Link from "next/link";
import React from "react";
import Logo from "../../public/SVGs/Logo";

const Footer = () => {
  return (
    <footer>
      <div className="bg-[#022045]">
        <div className="container py-12 flex  gap-5 justify-between md:flex-nowrap flex-wrap">
          <Link
            aria-label="Go to home page"
            href="/en"
            rel="home"
            className=" py-3"
          >
            <Logo />
          </Link>
          <div className="flex sm:gap-8 gap-3 text-[#68ebea] group min-h-[100%] items-center transition-all  md:flex-nowrap flex-wrap">
            <p className="border-0 border-r-2 border-[#164377] sm:px-8 pr-3 h-full flex justify-center items-center hover:text-[#1f80f0] transition-all cursor-pointer font-semibold">
              Our Solutions
            </p>
            <Link
              href="https://anytxn.com/en/solutions/anycaas"
              className="hover:text-[#1f80f0] transition-all cursor-pointer"
            >
              AnyCass
            </Link>
            <Link
              href="https://anytxn.com/en/solutions/anybaas"
              className="hover:text-[#1f80f0] transition-all cursor-pointer"
            >
              AnyBass
            </Link>
            <Link
              href="https://anytxn.com/en/solutions/anypaas"
              className="hover:text-[#1f80f0] transition-all cursor-pointer"
            >
              AnyPass
            </Link>
          </div>
        </div>
      </div>

      <div className="bg-[#02152d] text-[#1e7eed] text-[12px] font-bold border-0 border-t-[1px] border-[#0f3f75]">
        <div className="container py-6 flex justify-between sm:flex-nowrap flex-wrap gap-5">
          <p>©2023 All rights reserved. Any Technology Pte Ltd.</p>
          <Link href="https://anytxn.com/en/privacy-policy">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
