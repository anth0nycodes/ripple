"use client";

import { db } from "@/firebase";
import {
  openCommentModal,
  openLogInModal,
  setCommentDetails,
} from "@/redux/slices/modalSlice";
import { RootState } from "@/redux/store";
import {
  ArrowUpTrayIcon,
  ChartBarIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  HeartIcon,
} from "@heroicons/react/24/outline";
import { HeartIcon as HeartSolidIcon } from "@heroicons/react/24/solid";
import {
  arrayRemove,
  arrayUnion,
  doc,
  DocumentData,
  Timestamp,
  updateDoc,
} from "firebase/firestore";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Moment from "react-moment";
import { useDispatch, useSelector } from "react-redux";

interface PostProps {
  data: DocumentData;
  id: string;
}

const Post = ({ data, id }: PostProps) => {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.user);

  const likePost = async () => {
    if (!user.username) {
      dispatch(openLogInModal());
      return;
    }

    const postRef = doc(db, "posts", id);

    if (data.likes.includes(user.uid)) {
      await updateDoc(postRef, {
        likes: arrayRemove(user.uid),
      });
    } else {
      await updateDoc(postRef, {
        likes: arrayUnion(user.uid),
      });
    }
  };

  return (
    <div className="border-b border-gray-100">
      <Link href={"/" + id}>
        <PostHeader
          username={data.username}
          name={data.name}
          timestamp={data.timestamp}
          text={data.text}
        />
      </Link>
      <div className="ml-16 p-3 flex space-x-14">
        <div className="relative">
          <ChatBubbleOvalLeftEllipsisIcon
            className="w-[22px] h-[22px] cursor-pointer hover:text-[#93A4E7] transition"
            onClick={() => {
              if (!user.username) {
                dispatch(openLogInModal());
                return;
              }
              dispatch(
                setCommentDetails({
                  name: data.name,
                  username: data.username,
                  id: id,
                  text: data.text,
                })
              );
              dispatch(openCommentModal());
            }}
          />
          {data.comments.length > 0 && (
            <span className="absolute text-xs top-1 -right-3">
              {data.comments.length}
            </span>
          )}
        </div>
        <div className="relative">
          {data.likes.includes(user.uid) ? (
            <HeartSolidIcon
              className="w-[22px] h-[22px] cursor-pointer text-pink-500 hover:text-pink-500 transition"
              onClick={() => likePost()}
            />
          ) : (
            <HeartIcon
              className="w-[22px] h-[22px] cursor-pointer hover:text-pink-500 transition"
              onClick={() => likePost()}
            />
          )}
          {data.likes.length > 0 && (
            <span className="absolute text-xs top-1 -right-3">
              {data.likes.length}
            </span>
          )}
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

interface PostHeaderProps {
  username: string;
  name: string;
  timestamp?: Timestamp;
  text: string;
  replyTo?: string;
}
const PostHeader = ({
  username,
  name,
  timestamp,
  text,
  replyTo,
}: PostHeaderProps) => {
  return (
    <div className="flex p-3 space-x-5">
      <Image
        src={"/assets/profile-pic.png"}
        width={44}
        height={44}
        alt="Profile Picture"
        className="w-11 h-11 z-10 bg-white"
      />

      <div className="text-[15px] flex flex-col space-y-1.5">
        <div className="flex space-x-1.5  text-[#707E89]">
          <span className="font-bold text-[#0F1419] inline-block max-w-[60px] min-[400px]:max-w-[100px] min-[500px]:max-w-[140px] whitespace-nowrap overflow-hidden text-ellipsis">
            {name}
          </span>
          <span className="max-w-[60px] min-[400px]:max-w-[100px] min-[500px]:max-w-[140px] whitespace-nowrap overflow-hidden text-ellipsis">
            @{username}
          </span>
          {timestamp && (
            <>
              <span>·</span>
              <Moment fromNow>{timestamp.toDate()}</Moment>
            </>
          )}
        </div>
        <span>{text}</span>
        {replyTo && (
          <span className="text-[15px] text-[#707E89]">
            Replying to <span className="text-[#93A4E7]">@{replyTo}</span>
          </span>
        )}
      </div>
    </div>
  );
};

export { PostHeader };
