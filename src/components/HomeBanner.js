import React from "react";
import Typewriter from "typewriter-effect";

const HomeBanner = () => {
  return (
    <div className="flex h-[100vh] w-[100%] items-center justify-center bg-black text-white overflow-hidden">
      <video
        className="absolute top-0 left-0 h-full w-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/assets/Bannevid.mp4" type="video/mp4" />
        Your browser does not support the video tag.f
      </video>
      <div className="absolute text-8xl">
        <Typewriter
          options={{
            strings: ["Hello", "World"],
            autoStart: true,
            loop: true,
          }}
        />
      </div>
      <img
        className="absolute right-2 bottom-2 w-20"
        src="/assets/scroll-animation.gif"
        alt="banner"
      />
    </div>
  );
};

export default HomeBanner;
