
'use client';

import { useState } from 'react';
import { X, Trash2 } from 'lucide-react';
import { cartItems as initialItems } from './CartData';
import { useCart } from "../app/contexts/CartContext";
import CartPage from './CartPage';
export default function CartModal({ onClose }: { onClose: () => void }) {
  const { cart,removeFromCart } = useCart();
  const [items, setItems] = useState(initialItems);

const [isCartpageOpen,setIsCartpageOpen] = useState(false);

  const Price = 275450;
  const bookingAmount = 5000;
  const accessoriesTotal = items.reduce((sum, item) => sum + item.price * item, 0);
  const subTotal = Price + accessoriesTotal;

  const handleDelete = (id:string | number) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div className="fixed inset-0 z-auto bg-black bg-opacity-60 flex items-center justify-center">
      <div className="bg-[#111] text-white w-[800px] max-h-[70vh] rounded-lg overflow-y-auto shadow-lg relative">
        {/* Close Button */}
        <button className="absolute top-4 right-4 text-white" onClick={onClose}>
          <X size={24} />
        </button>

        {/* Header */}
        <div className="p-6 flex items-start justify-between border-b border-gray-700">
          <div>
            <h2 className="text-xl font-bold text-white">
              Thara  <span className="text-gray-400">(Stealth Black)</span>
            </h2>
            <p className="text-lg font-medium text-white mt-2">₹ {Price.toLocaleString()}</p>
          </div>
          <img src="images/transparent.png" alt="bike" className="w-32 h-10 object-contain" />
        </div>

        {/* Accessories */}
        <div className="p-6">
          <h3 className="text-md font-semibold mb-2">Add-ons</h3>
          {/* <p className="text-sm text-gray-300 mb-4"> Accessories</p> */}

          <div className="h-[200px] ">
               {cart.length === 0 ? (
        <p className="text-gray-500">Your cart is empty.</p>
      ) : (
            <div className="grid grid-cols-3 gap-4 overflow-y-auto">
              {cart.map((item) => (
                <div key={item.id} className="bg-gray-900 p-3 rounded relative">
                  <img src="images/transparent.png" alt={item.name} className="w-full h-28 object-contain mb-2" />
                  <h4 className="text-sm font-medium text-white">{item.name}</h4>
                  <p className="text-sm text-gray-400">
                    ₹ {item.price.toLocaleString()} <span className="text-xs">(EMI ₹ {item.emi})</span>
                  </p>
                   <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
              <p>{(Number(item.price) * item.quantity).toLocaleString()}</p>
                  <button
                    className="absolute top-2 right-2 text-red-500 hover:text-red-700"
                    onClick={() => removeFromCart(item.id)}
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              ))}
            </div>)}
          </div>
        </div>
 {/* <div>
      <h2>Your Cart</h2>
      {cart.map(item => (
        <div key={item.id}>
          {item.name} × {item.quantity}
        </div>
      ))}
    </div> */}
      

        {/* Cart Details */}
        <div className="p-6 border-t border-gray-700">
          <h3 className="text-lg font-semibold mb-4">Cart Details</h3>
          <div className="text-sm space-y-2">
            <div className="flex justify-between">
              <span>On Road Price - Tamil Nadu</span>
              <span>₹ {Price.toLocaleString()}</span>
            </div>
            <div className="flex justify-between">
              <span>Accessories Total</span>
              <span>₹ {accessoriesTotal.toLocaleString()}</span>
            </div>
            <hr className="border-gray-600 my-2" />
            <div className="flex justify-between font-semibold text-white">
              <span>Sub Total</span>
              <span>₹ {subTotal.toLocaleString()}</span>
            </div>
            <p className="text-xs text-gray-400 mt-2">
              Booking amount to be paid ₹ {bookingAmount.toLocaleString()}
            </p>
          </div>
        </div>

        {/* Footer Button */}
        <div className="p-4 border-t border-gray-700">
          <button 
           onClick={() => setIsCartpageOpen(true)}
          className="w-full bg-yellow-400 text-black font-bold py-2 rounded hover:bg-yellow-500 transition">
            PROCEED
          </button>
        </div>
      </div>
      {isCartpageOpen  && <CartPage
              isOpen={isCartpageOpen}
              onClose={() => setIsCartpageOpen(false)}
            />}
    </div>
  );
}

