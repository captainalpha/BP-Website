import React from "react";
import clsx from "clsx";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

type SplashScreenProps = {
  shouldExit: boolean;
};

const SplashScreen = ({ shouldExit }: SplashScreenProps) => {
  return (
    <div
      className={clsx(
        "fixed inset-0 flex items-center justify-center bg-gradient-to-br from-[#000] via-[#000] to-[#000] z-[9999] transition-transform duration-1000 ease-in-out",
        {
          "translate-x-0": !shouldExit,
          "-translate-x-full": shouldExit,
        }
      )}
    >
      <div className="flex flex-col h-full w-full md:p-50 items-center justify-center space-y-4">
        <DotLottieReact
          src="https://lottie.host/b0c1fd1d-9c4d-4d4c-8108-d36aece92f27/vdTg6NMvYw.lottie"
          loop
          autoplay
        />
        {/* <Image
          src="/images/MainScene.gif"
          alt="MainScene"
          height={100000}
          width={500000}
          className="h-full w-full"
        /> */}
      </div>
    </div>
  );
};

export default SplashScreen;
