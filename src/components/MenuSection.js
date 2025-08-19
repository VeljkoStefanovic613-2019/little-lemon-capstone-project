import React from "react";
import { Link } from "react-router-dom";
import { salad, dessert } from "../data/data";
import { Card } from "./Card"; 

const MenuSection = () => {
  return (
    <section className="py-12 px-4 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-8">Order Online</h2>

      <div className="mb-12">
        <h3 className="text-2xl font-semibold mb-6">Salads</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {salad.map((item) => (
            <Card
              key={item.id}
              image={item.image}
              title={item.title}
              price={item.price}
              description={item.description}
              orderText={item.order}
              Icon={item.icon}
              imageHeight="h-48"
            />
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-2xl font-semibold mb-6">Desserts</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {dessert.map((item) => (
            <Card
              key={item.id}
              image={item.image}
              title={item.title}
              price={item.price}
              description={item.description}
              orderText={item.order}
              Icon={item.icon}
              imageHeight="h-48"
            />
          ))}
        </div>
      </div>

      <div className="flex justify-center mt-12">
        <Link
          to="/menu"
          className="inline-block bg-primary text-black font-semibold px-6 py-3 rounded-md shadow-md hover:bg-primary-dark transition-colors"
        >
          Online Menu
        </Link>
      </div>
    </section>
  );
};

export default MenuSection;
