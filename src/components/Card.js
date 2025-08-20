import { ShoppingBasketIcon } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import { useBasket } from "../context/BasketContext";

export const Card = ({
  id,
  image,
  title,
  price,
  description,
  orderText,
  Icon,
  className = "",
  imageHeight = "h-48",
  onAddToBasket, // optional callback
}) => {
  const { addToBasket } = useBasket();

  const handleAddToBasket = () => {
    const item = { id, title, price, image, description };
    if (onAddToBasket) {
      onAddToBasket(item);
    } else {
      addToBasket(item, 1);
    }
  };

  return (
    <div
      className={`relative bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-xl hover:-translate-y-1 ${className}`}
    >
      {image && (
        <img
          src={image}
          alt={title}
          className={`w-full ${imageHeight} object-cover`}
        />
      )}
      <div className="p-4">
        <div className="flex justify-between items-center mb-2">
          {title && <h3 className="font-bold text-lg">{title}</h3>}
          {price && <span className="text-primary font-medium">${price}</span>}
        </div>
        {description && <p className="text-gray-600 mb-4">{description}</p>}
        <div className="flex justify-between items-center">
          {orderText && Icon && (
            <button className="flex items-center gap-2 font-semibold text-secondary hover:text-primary transition-colors">
              <Link to="/order-online">{orderText}</Link>
              <Icon className="w-5 h-5" />
            </button>
          )}

          {/* Basket button */}
          <button
            onClick={handleAddToBasket}
            className="bg-primary text-white p-2 rounded-full hover:bg-secondary transition flex items-center justify-center"
            aria-label="Add to basket"
          >
            <ShoppingBasketIcon className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};
