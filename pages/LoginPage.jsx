import React, { useState } from "react";
import Navbar from "../components/Navbar";
import SignIn from "../components/SignIn";

const LoginPage = () => {
  const [signIn, setSignIn] = useState(false);

  
  return (
    <>
      <div
        className={
          "flex justify-between items-center fixed w-full h-20 z-10 transition-all duration-1000"
        }
      >
        <img
          className="h-20 w-52 pl-10"
          src="src\assets\Netflix_Logo_RGB.png"
        />
        <button
          onClick={() => setSignIn(true)}
          className="h-[3vh] w-[4vw] bg-red-600 text-white text-xl mr-[4rem] rounded-sm hover:bg-gray-900 duration-300"
        >
          Sign In
        </button>
      </div>
      
        <header
          style={{
            backgroundSize: "cover",
            backgroundPosition: "center center",
            backgroundImage: `url("https://wallpapers.com/images/hd/netflix-background-gs7hjuwvv2g0e9fj.jpg")`,
          }}
          className="h-screen w-full bg-no-repeat"
        >
        
          <div className="h-[35%] bg-gradient-to-b from-black/95 via-black/85 to-transparent transition-all duration-700"></div>
          {signIn ? <SignIn/> : 
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-white text-7xl font-bold pb-[2rem]">
              Unlimited films, TV programmes and more.
            </h1>
            <h1 className="text-white text-5xl pb-[4rem]">
              Watch anywhere. Cancel at any time.
            </h1>
            <h1 className="text-white text-3xl pb-[2rem]">
              Ready to watch? Enter your email to create or restart your
              membership.
            </h1>
            <div className="flex items-center justify-center">
              <input
                className="h-[3.5vh] w-[20vw] rounded-sm bg-white"
                placeholder="Email Address"
              ></input>
              <button
                onClick={() => setSignIn(true)}
                className="h-[3.5vh] w-[6vw] ml-[1rem] rounded-sm text-white text-2xl bg-red-600"
              >
                Get Started
              </button>
            </div>
          </div>}
          <div className="h-[45%] bg-gradient-to-t from-black/95 via-black/85 to-transparent transition-all duration-700"></div>
        </header>
      
    </>
  );
};

export default LoginPage;
