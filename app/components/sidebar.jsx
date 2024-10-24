import React from "react";
import { iconData } from "./icondata";

export default function SideBar() {
  return (
    <>
      <div className="h-[50.875rem] min-w-[14.4375rem] py-16 bg-white ml-8 mt-[6.25rem] rounded-3xl">
        <div className="flex flex-col gap-4 pt-[3.75rem]">
        {iconData.map((div, index) => (
          <div key={index} className="flex gap-3 px-6 h-11 hover:translate-x-2 transition-transform duration-200 ease-in-out cursor-grab">
                {div.icon}
                <p className="font-medium">{div.name}</p>
          </div>
        ))}          
        </div>
      </div>
    </>
  );
}
