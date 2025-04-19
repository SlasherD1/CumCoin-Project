import React from "react";
import { useState } from "react";
import "./App.css"; // gunakan untuk CSS tambahan jika perlu
import "./assets/fonts/Fontspring.otf";
import Gambar1 from "./assets/images/Gambar-1.png";
import bgAlter1 from "./assets/images/Gambar-2.png";
import decorative1 from "./assets/images/decorative-1.png";
import decorative2 from "./assets/images/decorative-2.png";
import Background1 from "./assets/images/Background-1.png";
import Logo_1 from "./assets/images/logo_1.png";
import bg2 from "./assets/images/bg_2.png";
import bg3 from "./assets/images/Background-2.png";
import Navbar from "./Navbar";
import Footer from "./Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <section
        id="hero"
        className="rajdhani relative bg-cover bg-center bg-no-repeat h-[1000px] w-full text-white flex flex-col items-center justify-center px-6 md:px-16 lg:px-32 py-20 gap-6 text-center overflow-hidden"
      >
        <img
          src={Background1}
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover object-center -z-10"
        />

        <img
          src={Logo_1}
          alt="Logo"
          className="w-[500px] md:w-[600px] lg:w-[700px] h-auto z-10"
        />

        {/* <h1 className="text-sm md:text-lg lg:text-2xl bg-yellow-500 rounded-xl font-bold text-black py-2 px-4 z-10">
          CA : CjAreLw1YXcCv5g4iRT7VMouuMfa8Rvtt7mynsdr8qDJ
        </h1> */}
      </section>

      <br></br>

      {/* <div className="relative z-10 -mt-[80px] mb-[-40px] w-full text-center">
        <h2 className="font-boldoa3 text-white text-5xl md:text-6xl xl:text-8xl font-extrabold drop-shadow-xl inline-block px-6 py-3 rounded-xl">
          WELCOME DOOMERS
        </h2>
      </div> */}

      <section className="rajdhani text-white px-6 md:px-16 lg:px-32 py-20">
        <div className="flex flex-col lg:flex-row items-center xl:gap-40 gap-10 justify-center mb-10 text-center lg:text-left">
          <div className="w-full lg:w-1/2">
            <div className="w-full h-full">
              <img
                src={Gambar1}
                alt="Logo"
                width={700}
                height={500}
                className="drop-shadow-2xl rounded-sm w-full h-auto"
              />
            </div>
          </div>

          <div className="flex flex-col gap-4 max-w-xl">
            <h1 className="font-semibold text-[36px] md:text-[50px] leading-tight font-boldoa">
              WHAT IS CUM COIN DADDY?
            </h1>
            <h1 className="text-base md:text-lg container font-semibold">
              Forget Wall Street. Forget Bitcoin. Cum Coin is the only currency
              that's truly liquid. Fueled by bad decisions, late-night thirst,
              and questionable life choices, Cum Coin is your one-way ticket to
              blasting through the boring and embracing the sticky side of life.
              No pumps. No dumps. Just endless... eruptions.
            </h1>
          </div>
        </div>
      </section>

      <section
        className="rajdhani text-white px-6 md:px-16 lg:px-32 py-20"
        style={{
          backgroundImage: `url(${Background1})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="flex flex-col lg:flex-row items-center xl:gap-40 gap-40 justify-center text-center lg:text-left">
          <div className="flex flex-col gap-4 max-w-xl">
            <h1 className="font-semibold text-[36px] md:text-[50px] leading-tight font-boldoa">
              JOIN THE CUM COIN SPERM BANK
            </h1>
            <div className="bg-stone-500 rounded-xl py-2 px-4 font-boldoa">
              <p className="text-base md:text-lg font-semibold ">
                Tired of dry investments? Ready to shoot your shot into
                something truly explosive? Join the Cum Coin Sperm Bank — where
                your loyalty is measured in stamina, not spreadsheets. Connect
                with other highly "motivated" individuals who know how to keep
                things flowing. Warning: Frequent exposure may cause blurred
                vision, weak knees, and unsolicited text messages.
              </p>
              <br></br>
              <p className="text-base md:text-lg font-semibold">
                Cum Coin. For those who finish what they start.
              </p>
              <div className="absolute bg-stone-800 ml-[180px] text-white px-6 py-6 rounded-full shadow-lg text-lg font-semibold">
                JOIN NOW
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <div className="w-full h-full flex items-center justify-center">
              <img
                src={bgAlter1}
                alt="Logo"
                className="object-contain max-w-full max-h-full drop-shadow-2xl rounded-sm"
              />
            </div>
          </div>
        </div>

        {/* <img
          src={decorative2}
          alt="Decorative Left"
          className="absolute xl:bottom-90 xl:left-80 md:bottom-90 md:left-20 left-20 md:mt-[10px] mt-[40px] w-[80px] md:w-[150px]"
        />

        <img
          src={decorative1}
          alt="Decorative Right"
          className="absolute xl:bottom-90 xl:right-80 md:bottom-90 md:right-20 right-20 md:mt-[10px] mt-[40px] w-[80px] md:w-[150px]"
        /> */}
      </section>
      <br></br>
      <Footer />
    </>
  );
};

export default App;
