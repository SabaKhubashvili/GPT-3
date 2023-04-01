import React from "react";

interface Props {
  sentance: string[]
  size:string
  Styles?:string
}

export const BigTitle = ({ sentance,size,Styles }: Props) => {
  return (
    <h1 className={`${size == 'small' ? 'md:text-[40px] text-[30px]' : 'lg:text-[70px] sm:text-[60px] text-[40px]'}  ${Styles}  font-extrabold flex flex-col z-10`}>
      {sentance.map((line, index) => (
        <span
          className="w-fit lg:whitespace-nowrap whitespace-normal"
          style={{
            background: "-webkit-linear-gradient(0deg,#AE67FA, #F49867)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
          key={index}
        >
          {line}
        </span>
      ))}
    </h1>
  );
};
