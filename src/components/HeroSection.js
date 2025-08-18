import React from "react";
import heroImage from "../assets/restaurant-food1.png";

export const HeroSection = () => {
  return (
    <section className="bg-secondary w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          
          {/* Left text section */}
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-primary text-4xl sm:text-5xl font-bold">Little Lemon</h1>
            <h2 className="text-white text-2xl sm:text-3xl font-semibold mt-2">Chicago</h2>
            <p className="text-white mt-4 text-base sm:text-lg leading-relaxed">
              Little Lemon is a charming neighborhood bistro that serves simple
              food and classic cocktails in a lively but casual environment. The
              restaurant features a locally-sourced menu with daily specials.
            </p>
            <button className="mt-6 px-6 py-3 bg-primary text-black rounded-full font-semibold hover:bg-yellow-400 transition duration-300">
              Reserve a table
            </button>
          </div>

          {/* Right image section */}
          <div className="md:w-1/2 flex justify-center">
            <img
              src={heroImage}
              alt="Delicious food"
              className="rounded-lg shadow-lg w-full max-w-md object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};