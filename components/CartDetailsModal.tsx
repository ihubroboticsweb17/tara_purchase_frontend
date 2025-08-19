"use client";
import { X } from "lucide-react";

export default function CartDetailsModal({
  isOpen,
  onClose
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  if (!isOpen) return null;
 
  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
      <div className="bg-[#1f1f1f] text-white w-[500px] rounded-lg p-6 relative shadow-lg">
        
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-gray-400 hover:text-white"
          onClick={onClose}
        >
          <X size={20} />
        </button>

        {/* Title */}
        <h2 className="text-lg font-bold mb-4">Jiny</h2>

        {/* Cart Details */}
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span>Ex-Showroom Price</span>
            <span>₹2,34,972</span>
          </div>
          <div className="flex justify-between">
            <span>Road Tax</span>
            <span>₹29,222</span>
          </div>
          <div className="flex justify-between">
            <span>Insurance</span>
            <span>₹11,256</span>
          </div>
          <div className="flex justify-between font-bold">
            <span>Motorcycle (On Road Price - Tamil Nadu)</span>
            <span>₹2,75,450</span>
          </div>
        </div>

        {/* Total */}
        <div className="flex justify-between font-bold mt-4 border-t border-gray-700 pt-3">
          <span>Total Amount</span>
          <span>₹2,75,450</span>
        </div>
        <p className="text-gray-400 text-xs mt-1">EMI from ₹5,291/mo</p>

        {/* Edit Button */}
        <button className="w-full bg-gray-800 text-yellow-500 border border-yellow-500 px-4 py-2 rounded mt-4 hover:bg-yellow-500 hover:text-black font-bold"
          onClick={onClose}
          >
          EDIT CONFIGURATION 
        </button>
      </div>
    </div>
  );
}
