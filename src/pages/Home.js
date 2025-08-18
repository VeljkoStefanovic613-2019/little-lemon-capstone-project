import React from 'react';
import Testimonials from "../components/Testimonials";
import Highlights from "../components/Highlights";
import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/AboutSection";

export const Home = () => {
  return (
    <>
        <HeroSection />
        <Highlights />
        <Testimonials />
        <AboutSection />
    </>
  )
};
