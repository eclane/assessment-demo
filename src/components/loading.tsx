import React from "react";
import Lottie from "react-lottie";
import * as animationData from "../../public/loading.json";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const LoadingComponent = () => {
  return (
    <div
      className="fixed top-0 left-0 z-50 w-screen h-screen flex items-center justify-center"
      style={{ background: "#fff" }}
    >
      <Lottie options={defaultOptions} height={60} width={60} />
    </div>
  );
};

export default LoadingComponent;
