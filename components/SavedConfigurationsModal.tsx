"use client";
import { X, MoreVertical } from "lucide-react";
import { useState } from "react";
import CartDetailsModal from "./CartDetailsModal";

export default function SavedConfigurationsModal({
  isOpen,
  onClose
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  if (!isOpen) return null;
const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
      <div className="bg-[#1f1f1f] text-white w-[600px] rounded-lg p-6 relative shadow-lg max-h-[90vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-gray-400 hover:text-white"
          onClick={onClose}
        >
          <X size={20} />
        </button>

        {/* Title */}
        <h2 className="text-lg font-bold mb-4">Your Saved Configurations</h2>

        {/* Filter Dropdown */}
        <select className="w-full bg-[#2a2a2a] border border-gray-600 rounded px-3 py-2 text-sm text-white mb-4">
          <option>All (1)</option>
        </select>

        {/* Saved Item Card */}
        <div className="bg-black rounded-lg border border-gray-700 p-4 relative">
          {/* Options Icon */}
          <button className="absolute top-4 right-4 text-gray-400 hover:text-white">
            <MoreVertical size={18} />
          </button>

          {/* Title & Variant */}
          <h3 className="font-bold">Jiny</h3>
          <p className="text-gray-400 text-sm">Classic 350 - Classic Chrome</p>

          {/* Image */}
          <img
            src="/images/transparen2t.png" // replace with your image
            alt="Bike"
            className="w-full h-40 object-contain my-3"
          />

          {/* Price */}
          <p className="text-white font-bold">
            ₹ 2,75,430 <span className="text-gray-400 text-sm">(Tamil Nadu)</span>
          </p>

          {/* Buttons */}
          <button className="w-full bg-black border border-blue-500 text-blue-500 px-4 py-2 rounded mt-4 hover:bg-blue-500 hover:text-black font-bold"
           onClick={() => setIsCartOpen(true)}>
            VIEW ADD-ONS
          </button>
          <button        onClick={onClose} 
      
          className="w-full bg-gray-800 text-yellow-500 border border-yellow-500 px-4 py-2 rounded mt-3 hover:bg-yellow-500 hover:text-black font-bold">
            EDIT CONFIGURATION
          </button>

          {/* Footer */}
          <p className="text-xs text-gray-500 mt-3">
            Last edited: 14 August 2025
          </p>
        </div>
             {/* Second Modal */}
      <CartDetailsModal
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
      />
      </div>
    </div>
  );
}
