import React, { createContext, useContext, useState, useEffect } from "react";

const BasketContext = createContext();

const getSavedBasket = () => {
  const saved = localStorage.getItem("restaurantBasket");
  if (saved) {
    try {
      return JSON.parse(saved);
    } catch (error) {
      console.error("Error parsing saved basket:", error);
    }
  }
  return [];
};

export const BasketProvider = ({ children }) => {
  const [basket, setBasket] = useState(getSavedBasket);

  
  useEffect(() => {
    localStorage.setItem("restaurantBasket", JSON.stringify(basket));
  }, [basket]);

  const addToBasket = (item, quantity = 1) => {
    setBasket((prev) => {
      const existing = prev.find((i) => i.id === item.id);
      if (existing) {
        
        return prev.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + quantity } : i
        );
      }
      
      return [...prev, { ...item, quantity, basketId: Date.now() }];
    });
  };

  const removeFromBasket = (basketId) =>
    setBasket((prev) => prev.filter((i) => i.basketId !== basketId));

  const clearBasket = () => setBasket([]);

  const getTotalItems = () =>
    basket.reduce((sum, item) => sum + item.quantity, 0);

  const getTotalPrice = () =>
    basket.reduce((sum, item) => sum + parseFloat(item.price) * item.quantity, 0);

  return (
    <BasketContext.Provider
      value={{
        basket,
        addToBasket,
        removeFromBasket,
        clearBasket,
        getTotalItems,
        getTotalPrice,
      }}
    >
      {children}
    </BasketContext.Provider>
  );
};

export const useBasket = () => {
  const context = useContext(BasketContext);
  if (!context)
    throw new Error("useBasket must be used within a BasketProvider");
  return context;
};
