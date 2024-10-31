"use client";

import Image from "next/image";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "@/firebase";
import { signOut } from "firebase/auth";
import { signOutUser } from "@/redux/slices/userSlice";
import { AppDispatch, RootState } from "@/redux/store";
import { closeLogInModal, closeSignUpModal } from "@/redux/slices/modalSlice";

const SidebarUserInfo = () => {
  const dispatch: AppDispatch = useDispatch();
  const user = useSelector((state: RootState) => state.user);
  const handleSignOut = async () => {
    await signOut(auth);
    dispatch(signOutUser());
    dispatch(closeSignUpModal());
    dispatch(closeLogInModal());
  };
  return (
    <div
      className="absolute bottom-3 flex items-center justify-start space-x-2 hover:bg-gray-500 hover:bg-opacity-10 transition xl:p-3 xl:pr-6 rounded-full cursor-pointer w-fit xl:w-[240px]"
      onClick={() => handleSignOut()}
    >
      <Image
        src={"/assets/profile-pic.png"}
        width={36}
        height={36}
        alt="Profile Picture"
        className="w-9 h-9"
      />
      <div className="hidden xl:flex flex-col text-sm max-w-40">
        <span className="font-bold whitespace-nowrap text-ellipsis overflow-hidden">
          {user.name}
        </span>
        <span className="text-gray-500 whitespace-nowrap text-ellipsis overflow-hidden">
          @{user.username}
        </span>
      </div>
    </div>
  );
};

export default SidebarUserInfo;
