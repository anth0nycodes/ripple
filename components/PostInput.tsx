"use client";

import { db } from "@/firebase";
import { RootState } from "@/redux/store";
import {
  CalendarIcon,
  ChartBarIcon,
  FaceSmileIcon,
  MapPinIcon,
  PhotoIcon,
} from "@heroicons/react/24/outline";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import Image from "next/image";
import React, { useState } from "react";
import { useSelector } from "react-redux";

const PostInput = () => {
  const [text, setText] = useState("");
  const user = useSelector((state: RootState) => state.user);

  const sendPost = async () => {
    await addDoc(collection(db, "posts"), {
      text: text,
      name: user.name,
      username: user.username,
      timestamp: serverTimestamp(),
      likes: [],
      comments: [],
    });
    setText("");
  };

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
          onChange={(event) => setText(event.target.value)}
          value={text}
        />

        <div className="flex justify-between pt-5 border-t border-gray-100">
          <div className="flex space-x-1.5">
            <PhotoIcon className="w-[22px] h-[22px] text-[#93A4E7]" />
            <ChartBarIcon className="w-[22px] h-[22px] text-[#93A4E7]" />
            <FaceSmileIcon className="w-[22px] h-[22px] text-[#93A4E7]" />
            <CalendarIcon className="w-[22px] h-[22px] text-[#93A4E7]" />
            <MapPinIcon className="w-[22px] h-[22px] text-[#93A4E7]" />
          </div>
          <button
            className="bg-[#93A4E7] text-white w-[80px] h-[38px] rounded-full text-sm cursor-pointer disabled:bg-opacity-60"
            disabled={!text}
            onClick={() => sendPost()}
          >
            Ripple
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostInput;
