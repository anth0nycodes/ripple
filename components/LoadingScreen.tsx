"use client";

import { RootState } from "@/redux/store";
import { LinearProgress } from "@mui/material";
import Image from "next/image";
import React from "react";
import { useSelector } from "react-redux";

const LoadingScreen = () => {
  const loadingScreenOpen = useSelector(
    (state: RootState) => state.loading.loadingScreenOpen
  );

  return (
    <div
      className={`fixed top-0 left-0 bottom-0 right-0 bg-white flex items-center justify-center transition ${
        loadingScreenOpen ? "opaciy-100 z-50" : "opacity-0 -z-50"
      }`}
    >
      <div className="flex flex-col items-center">
        <Image
          src={"/assets/ripple-logo.png"}
          width={120}
          height={120}
          alt="Ripple Logo"
          className="mb-5"
        />
        <h1 className="text-6xl font-bold mb-10">Ripple</h1>
        <LinearProgress
          sx={{
            width: 265,
            height: 10,
            backgroundColor: "#93A4E7",
            "& .MuiLinearProgress-bar": {
              backgroundColor: "#000000",
            },
          }}
        />
      </div>
    </div>
  );
};

export default LoadingScreen;
