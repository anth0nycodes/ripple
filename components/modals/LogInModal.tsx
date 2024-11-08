"use client";

import React, { useState } from "react";
import { Modal } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/redux/store";
import { closeLogInModal, openLogInModal } from "@/redux/slices/modalSlice";
import { EyeIcon, EyeSlashIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/firebase";

const LogInModal = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const isOpen = useSelector((state: RootState) => state.modals.logInModalOpen);

  const dispatch: AppDispatch = useDispatch();

  const handleLogIn = async () => {
    await signInWithEmailAndPassword(auth, email, password);
  };

  const handleGuestLogIn = async () => {
    await signInWithEmailAndPassword(auth, "guest123456@gmail.com", "123456");
  };

  return (
    <>
      <button
        className="w-full h-[48px] text-md md:text-sm border-2 border-gray-100 rounded-full text-white font-bold md:w-[88px] md:h-[40px] hover:bg-white hover:bg-opacity-25 transition"
        onClick={() => dispatch(openLogInModal())}
      >
        Log In
      </button>

      <Modal open={isOpen} className="flex justify-center items-center">
        <div
          className="w-full h-full sm:w-[600px] sm:h-fit bg-white
        sm:rounded-xl outline-none
        "
        >
          <XMarkIcon
            className="w-7 mt-5 ml-5 cursor-pointer"
            onClick={() => dispatch(closeLogInModal())}
          />
          <div className="pt-10 pb-20 px-4 sm:px-20">
            <h1 className="text-3xl font-bold mb-10">Log in to Ripple</h1>
            <div className="w-full space-y-5 mb-10">
              <input
                type="email"
                className="w-full h-[54px] border border-gray-200 outline-none pl-3 rounded-[4px] focus:border-[#93A4E7] transition"
                placeholder="Email"
                onChange={(event) => setEmail(event.target.value)}
                value={email}
              />
              <div className="w-full h-[54px] border border-gray-200 outline-none rounded-[4px] focus-within:border-[#93A4E7] transition flex items-center overflow-hidden pr-3">
                <input
                  type={showPassword ? "text" : "password"}
                  className="w-full h-full pl-3 outline-none "
                  placeholder="Password"
                  onChange={(event) => setPassword(event.target.value)}
                  value={password}
                />
                <div
                  className="w-7 h-7 text-gray-400 cursor-pointer"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeSlashIcon /> : <EyeIcon />}
                </div>
              </div>
            </div>
            <button
              className="bg-[#93A4E7] text-white h-[48px] rounded-full shadow-md mb-4 w-full"
              onClick={() => handleLogIn()}
            >
              Log In
            </button>
            <div className="flex items-center mb-2">
              <div className="flex-grow border-t border-black"></div>
              <span className="mx-2 text-sm text-center block">or</span>
              <div className="flex-grow border-t border-black"></div>
            </div>
            <button
              className="bg-[#93A4E7] text-white h-[48px] rounded-full shadow-md mt-4 w-full"
              onClick={() => handleGuestLogIn()}
            >
              Log In as Guest
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default LogInModal;
