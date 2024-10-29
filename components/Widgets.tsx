import {
  EllipsisHorizontalIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import React from "react";

const Widgets = () => {
  return (
    <div className="p-3 hidden lg:flex flex-col space-y-4 w-[400px]">
      <div className="flex bg-[#EFF3F4] text-[#89959D] h-[44px] space-x-3 rounded-full items-center pl-5">
        <MagnifyingGlassIcon className="w-[20px] h-[20px]" />
        <input
          type="text"
          className="bg-transparent outline-none"
          placeholder="Search Ripple"
        />
      </div>
      <div className="bg-[#EFF3F4] rounded-xl p-3">
        <h1 className="text-xl font-bold mb-2">What's Happening?</h1>
        <div className="flex flex-col py-3 space-y-0.5">
          <div className="flex justify-between text-[#536471] text-[13px]">
            <span>Trending in United States</span>
            <EllipsisHorizontalIcon className="w-[20px]" />
          </div>
          <span className="font-bold text-sm">Software Engineering</span>
          <span className="text-[#536471] text-xs">390K Ripples</span>
        </div>
        <div className="flex flex-col py-3 space-y-0.5">
          <div className="flex justify-between text-[#536471] text-[13px]">
            <span>Trending in United States</span>
            <EllipsisHorizontalIcon className="w-[20px]" />
          </div>
          <span className="font-bold text-sm">Donald Trump</span>
          <span className="text-[#536471] text-xs">1.2M Ripples</span>
        </div>
        <div className="flex flex-col py-3 space-y-0.5">
          <div className="flex justify-between text-[#536471] text-[13px]">
            <span>Trending in United States</span>
            <EllipsisHorizontalIcon className="w-[20px]" />
          </div>
          <span className="font-bold text-sm">Tech Market</span>
          <span className="text-[#536471] text-xs">700K Ripples</span>
        </div>
        <div className="flex flex-col py-3 space-y-0.5">
          <div className="flex justify-between text-[#536471] text-[13px]">
            <span>Trending in United States</span>
            <EllipsisHorizontalIcon className="w-[20px]" />
          </div>
          <span className="font-bold text-sm">Climate Change</span>
          <span className="text-[#536471] text-xs">240K Ripples</span>
        </div>
      </div>
      <div className="bg-[#EFF3F4] rounded-xl p-3">
        <h1 className="text-xl font-bold mb-2">Who to Follow?</h1>
        <div className="flex justify-between items-center py-3">
          <div className="flex space-x-3 items-center">
            <Image
              src={"/assets/anthony.jpg"}
              width={56}
              height={56}
              alt="Profile Picture of Anthony Hoang"
              className="w-14 h-14 rounded-full"
            />
            <div className="flex flex-col text-sm">
              <span className="font-bold">Anthony Hoang</span>
              <span>@anth0nycodes</span>
            </div>
          </div>
          <button className="bg-[#0F1419] text-white w-[72px] h-[40px] text-sm rounded-full">Follow</button>
        </div>
        <div className="flex justify-between items-center py-3">
          <div className="flex space-x-3 items-center">
            <Image
              src={"/assets/rock.png"}
              width={56}
              height={56}
              alt="Profile Picture of Dwayne Johnson"
              className="w-14 h-14 rounded-full"
            />
            <div className="flex flex-col text-sm">
              <span className="font-bold">Dwayne Johnson</span>
              <span>@therock</span>
            </div>
          </div>
          <button className="bg-[#0F1419] text-white w-[72px] h-[40px] text-sm rounded-full">Follow</button>
        </div>
        <div className="flex justify-between items-center py-3">
          <div className="flex space-x-3 items-center">
            <Image
              src={"/assets/elon.jpg"}
              width={56}
              height={56}
              alt="Profile Picture of Elon Musk"
              className="w-14 h-14 rounded-full"
            />
            <div className="flex flex-col text-sm">
              <span className="font-bold">Elon Musk</span>
              <span>@elonmusk</span>
            </div>
          </div>
          <button className="bg-[#0F1419] text-white w-[72px] h-[40px] text-sm rounded-full">Follow</button>
        </div>
      </div>
    </div>
  );
};

export default Widgets;
