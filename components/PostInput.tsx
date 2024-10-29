import { CalendarIcon, ChartBarIcon, FaceSmileIcon, MapPinIcon, PhotoIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import React from "react";

const PostInput = () => {
  return (
    <div className="flex space-x-5 p-3 border-b border-gray-100">
      <Image
        src={"/assets/ripple-logo.png"}
        width={44}
        height={44}
        alt="Logo"
        className="w-11 h-10"
      />
      <div className="w-full">
        <textarea
          className="resize-none outline-none w-full min-h-[50px] text-lg"
          placeholder="What's happening!?"
        />

        <div className="flex justify-between pt-5 border-t border-gray-100">
          <div className="flex space-x-1.5">
            <PhotoIcon className="w-[22px] h-[22px] text-[#93A4E7]"/>
            <ChartBarIcon className="w-[22px] h-[22px] text-[#93A4E7]"/>
            <FaceSmileIcon className="w-[22px] h-[22px] text-[#93A4E7]"/>
            <CalendarIcon className="w-[22px] h-[22px] text-[#93A4E7]"/>
            <MapPinIcon className="w-[22px] h-[22px] text-[#93A4E7]"/>
          </div>
          <button className="bg-[#93A4E7] text-white w-[80px] h-[38px] rounded-full text-sm cursor-pointer">
            Ripple
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostInput;
