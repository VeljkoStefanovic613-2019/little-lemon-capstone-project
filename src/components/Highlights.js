// components/Highlights.js
import React from "react";
import { highlights } from "../data/data";
import {Card} from "./Card";

const Highlights = () => {
  return (
    <section className="py-12 max-w-7xl mx-auto px-4">
      <div className="flex flex-col items-center sm:flex-row sm:justify-between sm:items-center mb-8 gap-4">
        <h2 className="text-3xl md:text-4xl font-bold font-serif">This Week's Specials</h2>
        <button className="mt-6 px-6 py-3 bg-primary text-black rounded-full font-semibold hover:bg-yellow-400 transition duration-300">
          Online Menu
        </button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {highlights.map((item) => (
          <Card
            key={item.id}
            image={item.image}
            title={item.title}
            price={item.price}
            description={item.description}
            orderText={item.order}
            Icon={item.icon}
          />
        ))}
      </div>
    </section>
  );
};

export default Highlights;