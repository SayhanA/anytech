"use client";

import React, { useEffect, useState, useRef } from "react";

const CountUp = () => {
  const [counts, setCounts] = useState([0, 0, 0]); 
  const sectionRef = useRef(null); 

  const targetNumbers = [10, 50, 5]; 
  const duration = 2000; 

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          startCounting();
          observer.disconnect(); 
        }
      },
      { threshold: 0.5 } 
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const startCounting = () => {
    targetNumbers.forEach((target, index) => {
      let start = 0;
      const increment = Math.ceil(target / (duration / 50)); 

      const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
          clearInterval(timer);
          start = target;
        }
        setCounts((prevCounts) => {
          const newCounts = [...prevCounts];
          newCounts[index] = start;
          return newCounts;
        });
      }, 50);
    });
  };

  return (
    <div
      ref={sectionRef}
      className="items-center justify-between max-lg:space-y-6 lg:flex xl:mx-28"
    >
      {/* First Counter */}
      <div className="flex items-center border-dashed max-lg:justify-between lg:flex-col max-lg:border-b border-blue-highlight max-lg:pb-xs">
        <h2 className="text-[64px] lg:text-[96px] font-Montserrat font-semibold leading-none bg-gradient-to-b from-blue-main to-[#0057BB] text-transparent bg-clip-text">
          {">"} <span>{counts[0]}</span>
        </h2>
        <p className="text-right lg:text-center lg:text-lg lg:mt-[19px]">
          Years of Experience
        </p>
      </div>

      {/* Second Counter */}
      <div className="flex items-center border-dashed max-lg:justify-between lg:flex-col max-lg:border-b border-blue-highlight max-lg:pb-xs">
        <h2 className="text-[64px] lg:text-[96px] font-Montserrat font-semibold leading-none bg-gradient-to-b from-blue-main to-[#0057BB] text-transparent bg-clip-text">
          <span>{counts[1]}</span>+
        </h2>
        <p className="text-right lg:text-center lg:text-lg lg:mt-[19px]">
          Financial Institutions
        </p>
      </div>

      {/* Third Counter */}
      <div className="flex items-center border-dashed max-lg:justify-between lg:flex-col max-lg:border-b border-blue-highlight max-lg:pb-xs">
        <h2 className="text-[64px] lg:text-[96px] font-Montserrat font-semibold leading-none bg-gradient-to-b from-blue-main to-[#0057BB] text-transparent bg-clip-text">
          {">"} <span>{counts[2]}</span>m
        </h2>
        <p className="text-right lg:text-center lg:text-lg lg:mt-[19px]">
          Customers Each
        </p>
      </div>
    </div>
  );
};

export default CountUp;
