"use client";
import { Plus } from "lucide-react";

export default function CartPage({
  isOpen,
  onClose
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  if (!isOpen) return null;
  return (
    <div className="min-h-screen bg-black text-white flex">
      {/* LEFT COLUMN */}
      <div className="flex-1 p-6">
        {/* Bike Info */}
        <h1 className="text-2xl font-bold">Classic 350 <span className="text-gray-400">(Redditch Red)</span></h1>
        <p className="text-xl mt-1">₹ 2,32,863 <span className="text-sm text-gray-400">EMI from ₹ 4,473/month</span></p>

        {/* Empty Accessories Info */}
        <div className="bg-[#1f1f1f] p-6 mt-4 rounded-lg text-center border border-gray-700">
          <p className="text-gray-400">You haven't added any accessories.</p>
        </div>

        {/* Recommended Accessories */}
        <h2 className="text-lg font-bold mt-6">Recommended Accessories</h2>

        {[
          { name: "Silver Airfly Engine Guard", price: "₹ 4,550", emi: "₹ 87" },
          { name: "Silver Sumpguard", price: "₹ 3,150", emi: "₹ 61" },
          { name: "Black Passenger Backrest Pad", price: "₹ 1,100", emi: "₹ 21" }
        ].map((item, i) => (
          <div key={i} className="flex justify-between items-center bg-[#1f1f1f] p-4 mt-3 rounded-lg border border-gray-700">
            <div>
              <p className="font-semibold">{item.name}</p>
              <p className="text-gray-400">{item.price} <span className="text-xs">(EMI {item.emi}/mo)</span></p>
            </div>
            <button className="p-2 border border-gray-600 rounded hover:bg-gray-700">
              <Plus size={18} />
            </button>
          </div>
        ))}
      </div>

      {/* RIGHT COLUMN */}
      <div className="w-[350px] bg-[#1a1a1a] p-6 border-l border-gray-700 flex flex-col justify-between">
        {/* Cart Details */}
        <div>
          <h2 className="text-lg font-bold mb-4">Cart Details</h2>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between"><span>Ex-Showroom Price</span><span>₹ 1,97,253</span></div>
            <div className="flex justify-between"><span>Road Tax</span><span>₹ 24,695</span></div>
            <div className="flex justify-between"><span>Insurance</span><span>₹ 10,915</span></div>
            <div className="flex justify-between font-bold"><span>On Road price - Tamil Nadu</span><span>₹ 2,32,863</span></div>
          </div>

          {/* Booking Amount */}
          <div className="flex justify-between mt-4">
            <span>Booking Amount</span>
            <span className="text-green-400">₹ 5,000</span>
          </div>

          {/* Sub Total */}
          <div className="flex justify-between font-bold mt-4 border-t border-gray-700 pt-3">
            <span>Sub Total</span>
            <span>₹ 2,32,863</span>
          </div>
          <p className="text-xs text-gray-400 mt-1">(EMI from ₹ 4,473/mo)</p>
        </div>

        {/* Bottom Buttons */}
        <div className="flex gap-3 mt-6">
          <button className="flex-1 bg-gray-800 px-4 py-2 rounded hover:bg-gray-700">SAVE</button>
          <button className="flex-1 bg-yellow-500 text-black px-4 py-2 rounded font-bold hover:bg-yellow-400">CONTINUE</button>
        </div>
      </div>
    </div>
  );
}
