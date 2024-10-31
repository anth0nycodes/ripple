"use client";

import React, { useEffect, useState } from "react";
import { Modal } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/redux/store";
import { closeSignUpModal, openSignUpModal } from "@/redux/slices/modalSlice";
import { EyeIcon, EyeSlashIcon, XMarkIcon } from "@heroicons/react/24/outline";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile,
} from "firebase/auth";
import { auth } from "@/firebase";
import { signInUser } from "@/redux/slices/userSlice";

const SignUpModal = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const isOpen = useSelector(
    (state: RootState) => state.modals.signUpModalOpen
  );

  const dispatch: AppDispatch = useDispatch();

  const handleSignUp = async () => {
    const userCredentials = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    console.log(userCredentials);
    await updateProfile(userCredentials.user, {
      displayName: name,
    });

    dispatch(
      signInUser({
        name: userCredentials.user.displayName,
        username: userCredentials.user.email!.split("@")[0],
        email: userCredentials.user.email,
        uid: userCredentials.user.uid,
      })
    );
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (!currentUser) return;
      dispatch(
        signInUser({
          name: currentUser.displayName,
          username: currentUser.email!.split("@")[0],
          email: currentUser.email,
          uid: currentUser.uid,
        })
      );
    });
    return unsubscribe;
  }, []);
  return (
    <>
      <button
        className="w-full h-[48px] text-md md:text-sm font-bold bg-white rounded-full text-black md:w-[88px] md:h-[40px] hover:bg-gray-100 hover:text-gray-900 transition"
        onClick={() => dispatch(openSignUpModal())}
      >
        Sign Up
      </button>

      <Modal open={isOpen} className="flex justify-center items-center">
        <div
          className="w-full h-full sm:w-[600px] sm:h-fit bg-white
        sm:rounded-xl
        "
        >
          <XMarkIcon
            className="w-7 mt-5 ml-5 cursor-pointer"
            onClick={() => dispatch(closeSignUpModal())}
          />
          <div className="pt-10 pb-20 px-4 sm:px-20">
            <h1 className="text-3xl font-bold mb-10">Create your account</h1>
            <div className="w-full space-y-5 mb-10">
              <input
                type="text"
                className="w-full h-[54px] border border-gray-200 outline-none pl-3 rounded-[4px] focus:border-[#93A4E7] transition"
                placeholder="Name"
                onChange={(event) => setName(event.target.value)}
                value={name}
              />
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
              onClick={() => handleSignUp()}
            >
              Sign Up
            </button>
            <div className="flex items-center mb-2">
              <div className="flex-grow border-t border-black"></div>
              <span className="mx-2 text-sm text-center block">or</span>
              <div className="flex-grow border-t border-black"></div>
            </div>
            <button className="bg-[#93A4E7] text-white h-[48px] rounded-full shadow-md mt-4 w-full">
              Log In as Guest
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default SignUpModal;
