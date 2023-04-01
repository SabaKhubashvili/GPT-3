import { BlogType } from "@/types";
import Image from "next/image";
import React from "react";

export const BlogComponent = ({ title, date, image, isMain }: BlogType) => {
  const Main = isMain
    ? "md:col-span-2 md:row-span-2 col-start-1 "
    : "col-span-1 row-span-1 ";
  return (
    <div className={`${Main} bg-[#042C54] h-full`}>
      <Image
        src={`/assets/Images/Blog/${image}.webp`}
        alt="Blog Image"
        className="w-full "
        width={300}
        height={100}
        priority
      />


        <div className="flex flex-col justify-between gap-12 h-fit px-10 py-6 text-white">
          <div className="">
            <p>{date}</p>
            <h4 className="font-extrabold md:text-[20px] text-[16px]">{title}</h4>
          </div>

          <p className="cursor-pointer">Read Full Article</p>
       
      </div>
    </div>
  );
};
