import React from "react";
import { IconType } from "react-icons";

interface Props {
  title: string;
  description: string;
  icon: IconType;
}

const Icon = (props: Props) => {
  return (
    <div className="w-full h-full">
      <div className="flex flex-col justify-center items-center text-center ">
        <div className="rounded-full border-2 border-[#34746b] lg:text-4xl md:text-3xl text-2xl  text-[#34746b] p-1">
          {React.createElement(props.icon)}
        </div>
        <h1 className="text-gray-700 font-medium pt-3 pb-1 lg:text-xl md:text-lg text-base ">
          {props.title}
        </h1>
        <p className="text-gray-500 lg:text-lg md:text-base text-sm">{props.description}</p>
      </div>
    </div>
  );
};

export default Icon;
