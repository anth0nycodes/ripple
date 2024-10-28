import {
  ArrowUpTrayIcon,
  ChartBarIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  HeartIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import React from "react";

const Post = () => {
  return (
    <div>
      <PostHeader />
      <div className="ml-16 p-3 flex space-x-14">
        <div className="relative">
          <ChatBubbleOvalLeftEllipsisIcon className="w-[22px] h-[22px] cursor-pointer hover:text-[#93A4E7] transition" />
          <span className="absolute text-xs top-1 -right-3">2</span>
        </div>
        <div className="relative">
          <HeartIcon className="w-[22px] h-[22px] cursor-pointer hover:text-[#FF008A] transition" />
          <span className="absolute text-xs top-1 -right-3">2</span>
        </div>
        <div className="relative">
          <ChartBarIcon className="w-[22px] h-[22px] cursor-not-allowed" />
        </div>
        <div className="relative">
          <ArrowUpTrayIcon className="w-[22px] h-[22px] cursor-not-allowed" />
        </div>
      </div>
    </div>
  );
};

export default Post;

const PostHeader = () => {
  return (
    <div className="flex p-3 space-x-5">
      <Image
        src={"/assets/profile-pic.png"}
        width={44}
        height={44}
        alt="Profile Picture"
        className="w-11 h-11"
      />

      <div className="text-[15px] flex flex-col space-y-1.5">
        <div className="flex space-x-1.5  text-[#707E89]">
          <span className="font-bold text-[#0F1419] inline-block max-w-[60px] min-[400px]:max-w-[100px] min-[500px]:max-w-[140px] whitespace-nowrap overflow-hidden text-ellipsis">
            Guest
          </span>
          <span className="max-w-[60px] min-[400px]:max-w-[100px] min-[500px]:max-w-[140px] whitespace-nowrap overflow-hidden text-ellipsis">
            @guest0000439
          </span>
          <span>·</span>
          <span>a day ago</span>
        </div>
        <span>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
      </div>
    </div>
  );
};
