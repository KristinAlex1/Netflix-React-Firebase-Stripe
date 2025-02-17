import React, { useState } from "react";
import Navbar from "../components/Navbar";
import SignIn from "../components/SignIn";

const LoginPage = () => {
  const [signIn, setSignIn] = useState(false);

  return (
    <>
      {/* Navbar */}
      <div className="flex justify-between items-center fixed w-full h-20 z-10 transition-all duration-1000">
        <img className="h-20 w-32 pl-10 mix-blend-screen" src="/logo.png" />
        <button
          onClick={() => setSignIn(true)}
          className="h-[3rem] w-[6rem] bg-red-600 text-white text-lg mr-[4rem] rounded-sm hover:bg-gray-900 duration-300 cursor-pointer"
        >
          Sign In
        </button>
      </div>

      {/* Header Section with Background Image & Gradient Overlay */}
      <header
        className="relative flex flex-col justify-center items-center min-h-screen w-full bg-no-repeat"
        style={{
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundImage: `url("https://wallpapers.com/images/hd/netflix-background-gs7hjuwvv2g0e9fj.jpg")`,
        }}
      >
        {/* Gradient Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/50 via-black/40 to-transparent"></div>

        {/* Content */}
        <div className="relative z-10 flex flex-col justify-center items-center text-center px-6">
          {signIn ? (
            <SignIn />
          ) : (
            <>
              <h1 className="text-white text-7xl font-bold pb-6">
                Unlimited films, TV programmes and more.
              </h1>
              <h2 className="text-white text-4xl pb-6">
                Watch anywhere. Cancel at any time.
              </h2>
              <h3 className="text-white text-2xl pb-6">
                Ready to watch? Enter your email to create or restart your membership.
              </h3>

              {/* Email Input & Button */}
              <div className="flex items-center justify-center">
                <input
                  className="h-[4rem] w-[30vw] rounded-sm bg-white p-3 text-black text-lg"
                  placeholder="Email Address"
                />
                <button
                  onClick={() => setSignIn(true)}
                  className="h-[4rem] w-[12vw] ml-4 rounded-sm text-white text-xl bg-red-600 cursor-pointer hover:bg-red-700"
                >
                  Get Started
                </button>
              </div>
            </>
          )}
        </div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black via-black/60 to-transparent"></div>

      </header>
    </>
  );
};

export default LoginPage;
