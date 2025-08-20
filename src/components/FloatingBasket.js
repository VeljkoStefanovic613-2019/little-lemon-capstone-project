import React, { useState } from "react";
import { useBasket } from "../context/BasketContext";
import { ShoppingCart } from "lucide-react";
import BasketModal from "./BasketModal"; 

const FloatingBasket = () => {
  const { basket } = useBasket();
  const [open, setOpen] = useState(false);

  const totalItems = basket.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 bg-primary text-white p-4 rounded-full shadow-lg hover:bg-secondary transition-colors"
      >
        <ShoppingCart className="w-6 h-6" />
        {totalItems > 0 && (
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
            {totalItems}
          </span>
        )}
      </button>

      <BasketModal isOpen={open} onClose={() => setOpen(false)} />
    </>
  );
};

export default FloatingBasket;
