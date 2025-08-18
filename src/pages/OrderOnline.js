import React from 'react'
import { Card } from '../components/Card'
import {
  highlights,
  salad,
  dessert,
  mainCourses,
  beverages,
  appetizers,
  soups
} from '../data/data'


export const OrderOnline = () => {
    const categories = [
      { title: "Highlights", items: highlights },
      { title: "Appetizers", items: appetizers },
      { title: "Soups", items: soups },
      { title: "Salads", items: salad },
      { title: "Main Courses", items: mainCourses },
      { title: "Desserts", items: dessert },
      { title: "Beverages", items: beverages }
    ];
  return (
    <section className="py-12 px-4 max-w-6xl mx-auto">
          <h2 className="flex text-3xl font-bold mb-8 justify-center">Order Online</h2>
          
 {categories.map((category) => (
        <section key={category.title} className="mb-12">
          <h2 className="flex text-2xl font-semibold mb-6 justify-center">{category.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {category.items.map((item) => (
              <Card
                key={item.id}
                image={item.image}
                title={item.title}
                price={item.price}
                description={item.description}
                orderText={item.order}
                Icon={item.icon}
                imageHeight="h-60"
              />
            ))}
          </div>
        </section>
      ))}
        </section>
  )
}
