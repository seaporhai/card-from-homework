// CardComponent.tsx
import React from "react";

interface CardProps {
  name: string;
  img: string | null;
}

const Card: React.FC<CardProps> = ({ name, img }) => {
  return (
    <div className=" ">
      <div className="flex flex-row gap-10  ">
        {img && (
          <img
            src={img}
            alt={name}
            style={{ width: "200px", height: "auto" }}
          />
        )}
        <div className="">
          <span className="text-2xl font-extrabold text-[pink] flex mt-[30px]">
            {name}
          </span>

          <button className="w-[100px] h-[40px] border-2 pl-[2px] bg-[pink] hover:bg-inherit mt-[40px] ">
            {" "}
            Preview
          </button>
        </div>
      </div>
    </div>
  );
};

export { Card };
