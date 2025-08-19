"use client";
import { Search, User, X } from "lucide-react";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import SignUpPage from "./SignUpPage";

export default function Navbar() { const [showPomonate, setShowPomonate] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  const toggleMenu = (menu: string) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };
  const handleLogout = () => {
    // Example: Clear token/localStorage
    localStorage.removeItem("token");

    // Redirect to login page
    window.location.href = "/";
  };
  const handleEditProfile = () => {
    // Example: Clear token/localStorage
    localStorage.removeItem("token");

    // Redirect to login page
    window.location.href = "/UserProfile";
  };
  const handleMyProfile = () => {
    // Example: Clear token/localStorage
    localStorage.removeItem("token");

    // Redirect to login page
    window.location.href = "/UserProfile";
  };
  const handleMyLogin=()=>{
     localStorage.removeItem("token");
       window.location.href = "/SignUpPage";

  }
  return (
    <nav className="bg-black text-white px-6 py-4 flex justify-between items-center">
      {/* Logo */}
      <h1 className="text-xl font-bold text-white-600">Tara Gen 1</h1>

      {/* Menu */}
      <div className="hidden md:flex gap-6 text-sm font-medium">
        <a href="#" className="hover:text-gray-300">
          Robotes
        </a>
        <div className="relative">
          <button
            onClick={() => toggleMenu("shop")}
            className="flex items-center gap-1 hover:text-gray-300"
          >
            Shop
            {openMenu === "shop" ? (
              <ChevronUp size={16} />
            ) : (
              <ChevronDown size={16} />
            )}
          </button>
          {openMenu === "shop" && (
            <div className="absolute left-0 mt-2 w-40 bg-black shadow-lg py-2 z-50">
              <a href="#" className="block px-4 py-2 hover:bg-gray-800">
                Accessories
              </a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-800">
                Apparel
              </a>
            </div>
          )}
        </div>
        <div className="relative">
          <button
            onClick={() => toggleMenu("Service")}
            className="flex items-center gap-1 hover:text-gray-300"
          >
            Service
            {openMenu === "Service" ? (
              <ChevronUp size={16} />
            ) : (
              <ChevronDown size={16} />
            )}
          </button>
          {openMenu === "Service" && (
            <div className="absolute left-0 mt-2 w-40 bg-black shadow-lg py-2 z-50">
              <a href="#" className="block px-4 py-2 hover:bg-gray-800">
                Overview
              </a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-800">
                Service Cost calculator
              </a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-800">
                Book a service
              </a>
            </div>
          )}
        </div>

        <a href="#" className="hover:text-gray-300">
          Demo
        </a>
        <a href="#" className="hover:text-gray-300">
          Our World
        </a>
        <a href="#" className="hover:text-gray-300">
          Support
        </a>
        <a href="#" className="hover:text-gray-300">
          Locate Us
        </a>
      </div>

      {/* Icons */}
      <div className="flex gap-4">
        <div className="relative">
          <button
            className="flex items-center gap-1 hover:text-gray-300 "
            onClick={() => toggleMenu("search")}
          >
            {openMenu === "search" ? (
              <X size={16} />
            ) : (
              <Search className="cursor-pointer" />
            )}
          </button>
          {openMenu === "search" && (
            <input
              type="text"
              placeholder="Search..."
              className="ml-2 px-2 py-1 w-40 rounded bg-gray-900 text-white 
                 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-red-500
                 transition-all duration-300"
            />
          )}
        </div>
         <div className="relative">
          <button
            className="flex items-center gap-1 hover:text-gray-300"
              onClick={() => setShowPomonate(true)}
          >   
            {showPomonate  && (
              <div><SignUpPage     isOpen={showPomonate}
    onClose={() => setShowPomonate(false)}/>
           </div>)}
          Login
        
          </button>
          </div>
        <div className="relative">
          <button
            className="flex items-center gap-1 hover:text-gray-300"
            onClick={() => toggleMenu("User")}
          >
            <User className="cursor-pointer" />{" "}
            {openMenu === "User" ? (
              <ChevronUp size={16} />
            ) : (
              <ChevronDown size={16} />
            )}
          </button>
          {openMenu === "User" && (
            <div className="absolute right-0 mt-2 w-40 bg-black shadow-lg py-2 z-50">
              <a
                href="#"
                className="block px-4 py-2 hover:bg-gray-800"
                onClick={handleMyProfile}
              >
                My Profile
              </a>
              <button
                className="block px-4 py-2 hover:bg-gray-800"
                onClick={handleEditProfile}
              >
                Edit Profile
              </button>
              <button
                className="block px-4 py-2 hover:bg-gray-800"
                onClick={handleLogout}
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
