import React from 'react'
import { Link } from 'react-router-dom';
import { MarioAdrian1, MarioAdrian2 } from "../assets";

export const AboutSection = () => {
  return (
    <section className="py-12 px-4 max-w-6xl mx-auto overflow-hidden" id="about">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-12">
          {/* Text content */}
          <div className="lg:w-1/2">
            <div className="max-w-lg">
              <h1 className="text-5xl font-bold text-primary font-markazi">Little Lemon</h1>
              <h2 className="text-3xl font-semibold text-secondary mt-1">Chicago</h2>
              <p className="text-secondary mt-6 text-lg leading-relaxed">
                Embrace the captivating allure of Little Lemon Restaurant, a
                family-owned haven meticulously curated by brothers Mario and
                Adrian, nestled in the Mediterranean-inspired enclave East of
                Chicago. Our culinary odyssey invites you to savor an array of
                exquisite flavors, marrying tradition with innovation. Immerse
                yourself in the warmth of genuine hospitality, where every visit
                becomes an unforgettable journey for you and your cherished
                companions.
              </p>
            </div>
          </div>

          {/* Images container */}
          <div className="lg:w-1/2">
            {/* Mobile/Tablet - Stacked images */}
            <div className="lg:hidden flex flex-col items-center gap-6 sm:gap-8">
              <div className="w-full sm:w-4/5 h-64 sm:h-80 rounded-2xl overflow-hidden shadow-lg">
                <img
                  src={MarioAdrian1}
                  alt="Mario and Adrian in the restaurant"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-full sm:w-4/5 h-64 sm:h-80 rounded-2xl overflow-hidden shadow-lg">
                <img
                  src={MarioAdrian2}
                  alt="Mario and Adrian preparing food"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
    
            {/* Desktop - Overlapping images */}
            <div className="hidden lg:block relative w-full h-80 lg:h-[420px]">
              <div className="absolute md:top-0 md:left-4 md:w-2/3 lg:top-0 lg:left-44 lg:w-3/4 h-4/5 rounded-2xl overflow-hidden shadow-xl">
                <img
                  src={MarioAdrian1}
                  alt="Mario and Adrian in the restaurant"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute lg:bottom-0 lg:right-44 md:right-4 md:w-2/3 w-3/4 h-4/5 rounded-2xl overflow-hidden shadow-xl">
                <img
                  src={MarioAdrian2}
                  alt="Mario and Adrian preparing food"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <Link 
            to="/about" 
            className="px-6 py-3 bg-primary text-black rounded-full font-semibold hover:bg-yellow-400 transition duration-300"
          >
            Read More
          </Link>
        </div>
      </div>
    </section>
  )
}