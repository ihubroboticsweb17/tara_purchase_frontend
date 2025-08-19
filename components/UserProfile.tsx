"use client";
import { User } from "lucide-react";

export default function UserProfile() {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Header */}
      <div className="bg-black text-white px-6 py-3 flex items-center justify-between">
        <h2 className="font-semibold text-lg">User Profile</h2>
        <span className="text-sm">Home / User Profile</span>
      </div>

      {/* Banner Section */}
      <div className="relative bg-gray-300 h-40">
        {/* Profile Picture */}
        <div className="absolute -bottom-10 left-6 w-20 h-20 rounded-full bg-gray-500 flex items-center justify-center border-4 border-white shadow-lg">
          <User size={40} className="text-white" />
        </div>
      </div>

      {/* Main Content */}
      <div className="flex gap-6 mt-16 px-6">
        {/* Left Sidebar */}
        <div className="w-1/4 bg-white shadow-md p-4 rounded-lg">
          <h3 className="font-semibold text-gray-800 mb-2">Motorcyclist I am</h3>
          <p className="text-sm text-gray-600">Tell something about yourself</p>

          <h3 className="font-semibold text-gray-800 mt-4 mb-2">My Tags</h3>
          <div className="flex flex-wrap gap-2">
            <span className="bg-gray-200 text-sm px-2 py-1 rounded">#Adventure</span>
            <span className="bg-gray-200 text-sm px-2 py-1 rounded">#Rider</span>
          </div>

          <button className="mt-6 w-full bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition">
            Book a Test Ride
          </button>
        </div>

        {/* Right Content (Main Banner) */}
        <div className="w-3/4">
          <img
            src="/motoverse-banner.jpg" 
            alt="Motoverse Event"
            className="rounded-lg shadow-lg w-full"
          />
        </div>
      </div>
    </div>
  );
}
