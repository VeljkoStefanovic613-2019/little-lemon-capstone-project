import React from 'react';
import { MarioAdrian1, MarioAdrian2 } from "../assets";

export const About = () => {
  return (
    <section
      className="py-8 md:py-12 px-4 max-w-6xl mx-auto overflow-x-hidden"
      id="about"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-12">
          {/* Text content */}
          <div className="lg:w-1/2">
            <div className="max-w-2xl">
              <div className="inline-block mb-2">
                <div className="bg-primary h-1 w-16 mb-2"></div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-secondary font-serif tracking-tight">
                  Little Lemon
                </h1>
                <h2 className="text-2xl sm:text-3xl font-semibold text-secondary mt-1">
                  Chicago
                </h2>
              </div>

              <div className="mt-6 md:mt-8 space-y-4 md:space-y-6">
                <p className="text-base md:text-lg lg:text-xl text-secondary leading-relaxed">
                  <span className="text-2xl md:text-3xl text-yellow-600 font-serif">E</span>mbrace
                  the captivating allure of Little Lemon Restaurant, a family-owned haven
                  meticulously curated by brothers Mario and Adrian, nestled in the
                  Mediterranean-inspired enclave East of Chicago.
                </p>

                <p className="text-base md:text-lg lg:text-xl text-secondary leading-relaxed">
                  Our culinary odyssey invites you to savor an array of exquisite flavors,
                  marrying tradition with innovation. For over two decades, we've been
                  crafting dishes that tell stories of sun-drenched coastlines and family
                  traditions passed down through generations.
                </p>

                <p className="text-base md:text-lg lg:text-xl text-secondary leading-relaxed">
                  Immerse yourself in the warmth of genuine hospitality, where every visit
                  becomes an unforgettable journey for you and your cherished companions.
                  Our commitment to excellence extends beyond the plate - we cultivate an
                  atmosphere where memories are made and celebrations come to life.
                </p>

                <p className="text-base md:text-lg lg:text-xl text-secondary italic mt-4 md:mt-6 border-l-4 border-primary pl-4 py-2">
                  "We believe food is more than sustenance - it's an expression of love,
                  culture, and the joy of shared experiences."
                </p>
              </div>
            </div>
          </div>

          {/* Images container - Responsive version */}
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
            <div className="hidden lg:block relative w-full h-80 lg:h-[420px] overflow-x-hidden">
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
      </div>
    </section>
  );
};
