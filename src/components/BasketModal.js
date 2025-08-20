import React, { useState } from "react";
import { useBasket } from "../context/BasketContext";
import { X, CircleCheck, Plus, Minus } from "lucide-react";

const BasketModal = ({ isOpen, onClose }) => {
  const { basket, clearBasket, removeFromBasket, addToBasket } = useBasket();
  const [confirmed, setConfirmed] = useState(false);
  const [customerName, setCustomerName] = useState("");
  const [customerEmail, setCustomerEmail] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");
  const [customerAddress, setCustomerAddress] = useState("");

  // Function to update item quantity
  const updateQuantity = (item, change) => {
    if (item.quantity + change <= 0) {
      removeFromBasket(item.basketId || item.id);
    } else {
      addToBasket(item, change);
    }
  };

  const handleConfirm = () => {
    if (basket.length === 0) return;

    setConfirmed(true);

    setTimeout(() => {
      clearBasket();
      setConfirmed(false);
      onClose();
    }, 3000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-2 sm:p-4">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-lg sm:max-w-2xl max-h-[90vh] overflow-hidden flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-4 sm:p-6 border-b">
          <h2 className="text-lg sm:text-xl font-bold">Your Basket</h2>
          <button
            onClick={onClose}
            className="p-1 rounded-full hover:bg-gray-100"
          >
            <X className="w-5 sm:w-6 h-5 sm:h-6 text-gray-600 hover:text-black" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="overflow-y-auto flex-grow p-4 sm:p-6">
          {confirmed ? (
            <div className="text-center py-10">
              <CircleCheck className="mx-auto text-green-500 w-10 sm:w-12 h-10 sm:h-12 mb-4" />
              <h3 className="text-lg sm:text-xl font-medium">
                Order Confirmed!
              </h3>
              <p className="text-gray-600 mt-2">
                Thank you {customerName || "Customer"}! Your order will arrive
                in ~45 minutes.
              </p>
            </div>
          ) : basket.length === 0 ? (
            <p className="text-gray-600 text-center py-10">Your basket is empty.</p>
          ) : (
            <>
              <ul className="divide-y">
                {basket.map((item) => (
                  <li key={item.basketId || item.id} className="py-3 sm:py-4">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-2">
                      <div className="flex items-center gap-3 flex-1 w-full">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-16 h-16 rounded object-cover flex-shrink-0"
                        />
                        <div className="min-w-0 flex-1">
                          <p className="font-medium truncate">{item.title}</p>
                          <p className="text-sm text-gray-500">${item.price}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 sm:gap-3 w-full sm:w-auto justify-between">
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => updateQuantity(item, -1)}
                            className="p-1 rounded-full bg-gray-100 hover:bg-gray-200"
                          >
                            <Minus className="w-4 h-4" />
                          </button>
                          <span className="font-medium w-6 text-center">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item, 1)}
                            className="p-1 rounded-full bg-gray-100 hover:bg-gray-200"
                          >
                            <Plus className="w-4 h-4" />
                          </button>
                        </div>
                        <p className="font-medium w-20 text-right">
                          ${(parseFloat(item.price) * item.quantity).toFixed(2)}
                        </p>
                        <button
                          onClick={() => removeFromBasket(item.basketId || item.id)}
                          className="text-red-500 ml-2"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>

              {/* Customer Inputs */}
              <div className="mt-6 space-y-3 sm:space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1 sm:mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    className="w-full p-2 sm:p-3 border rounded-md"
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1 sm:mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={customerEmail}
                    onChange={(e) => setCustomerEmail(e.target.value)}
                    className="w-full p-2 sm:p-3 border rounded-md"
                    placeholder="you@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-1 sm:mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    value={customerPhone}
                    onChange={(e) => setCustomerPhone(e.target.value)}
                    className="w-full p-2 sm:p-3 border rounded-md"
                    placeholder="+381 60 123 4567"
                  />
                </div>
                <div>
                  <label htmlFor="address" className="block text-sm font-medium mb-1 sm:mb-2">
                    Address
                  </label>
                  <input
                    type="text"
                    id="address"
                    value={customerAddress}
                    onChange={(e) => setCustomerAddress(e.target.value)}
                    className="w-full p-2 sm:p-3 border rounded-md"
                    placeholder="123 Main St, City"
                  />
                </div>
              </div>

              <div className="flex justify-between items-center mt-6 border-t pt-4">
                <span className="font-bold">Total:</span>
                <span className="text-lg font-semibold">
                  ${basket
                    .reduce((sum, i) => sum + parseFloat(i.price) * i.quantity, 0)
                    .toFixed(2)}
                </span>
              </div>
            </>
          )}
        </div>

        {/* Footer */}
        {basket.length > 0 && !confirmed && (
          <div className="p-4 sm:p-6 border-t bg-gray-50">
            <button
              onClick={handleConfirm}
              disabled={!customerName || !customerAddress || !customerPhone}
              className="w-full px-4 sm:px-6 py-2 sm:py-3 bg-primary text-black rounded-full font-semibold hover:bg-yellow-400 transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Confirm Order
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default BasketModal;
