"use client";
import { philosophyData } from "@/app/data/PhilosophyCardData";
import { useEffect, useRef, useState } from "react";

const PhilosopyCard = () => {
  const sectionRef = useRef(null);
  const [visibleItems, setVisibleItems] = useState([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setVisibleItems((prev) => [...new Set([...prev, index])]);
          }
        });
      },
      { threshold: 0.2 }
    );

    const children = sectionRef.current?.children;
    if (children) {
      Array.from(children).forEach((child, index) => observer.observe(child));
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={sectionRef}
      className="flex gap-[2%] mt-20 lg:flex-nowrap flex-wrap"
    >
      {philosophyData.map((item, index) => (
        <div
          key={item.id}
          className={`w-[45%] flex-grow transition-all duration-700 transform ${
            visibleItems.includes(index)
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <li className="list-none z-20 h-full md:space-y-sm space-y-[8px] bg-[#F8FCFF] hover:bg-[#eff8fe] rounded-[20px] md:p-md p-sm hover:drop-shadow-xl cursor-pointer transition-all">
            <figure className="w-fit rounded-full">
              <img
                src={item.imgSrc}
                width="50"
                height="50"
                alt={item.imgAlt}
                className="lg:h-[50px] lg:w-[50px] h-[32px] w-[32px]"
                loading="lazy"
              />
            </figure>
            <h4 className="font-Montserrat text-blue-text text-res-head-4 lg:text-head-4">
              {item.title}
            </h4>
            <p className="text-body-1">{item.description}</p>
          </li>
        </div>
      ))}
    </div>
  );
};

export default PhilosopyCard;
