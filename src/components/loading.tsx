import React from "react";
import Lottie from "react-lottie";
import * as animationData from "../../public/loading.json";
import { defaultOptions } from "@/utils/helpers";

const LoadingComponent = () => {
  return (
    <div
      className="fixed top-0 left-0 z-50 w-screen h-screen flex items-center justify-center"
      style={{ background: "#fff" }}
    >
      <Lottie options={defaultOptions(animationData)} height={60} width={60} />
    </div>
  );
};

export default LoadingComponent;
