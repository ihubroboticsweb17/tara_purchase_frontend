'use client'
import React from "react";
export default function SignUpPage() {
   
  return (
    <div className="min-h-screen bg-cover bg-center flex items-center justify-center"
         style={{ backgroundImage: "url('/bg.jpg')" }}> 
      {/* replace /bg.jpg with your background image */}
      
      <div className="bg-white w-full max-w-2xl rounded-lg shadow-lg p-8">
        <h2 className="text-2xl font-bold text-center mb-6">
          Sign up for Royal Enfield
        </h2>

        {/* Form */}
        <form className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <input type="text" placeholder="First Name" className="border p-2 rounded w-full" />
            <input type="text" placeholder="Last Name" className="border p-2 rounded w-full" />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm mb-1">Select your Gender</label>
              <div className="flex gap-4">
                <label className="flex items-center gap-2">
                  <input type="radio" name="gender" value="male" /> Male
                </label>
                <label className="flex items-center gap-2">
                  <input type="radio" name="gender" value="female" /> Female
                </label>
              </div>
            </div>
            <input type="date" className="border p-2 rounded w-full" />
          </div>

          <input type="email" placeholder="Email" className="border p-2 rounded w-full" />
          <input type="password" placeholder="Password" className="border p-2 rounded w-full" />

          <input type="tel" placeholder="Mobile Number" className="border p-2 rounded w-full" />

          <div>
            <label className="block text-sm mb-1">
              Do you own a Royal Enfield Motorcycle?
            </label>
            <div className="flex gap-6">
              <label className="flex items-center gap-2">
                <input type="radio" name="owns" value="yes" /> Yes
              </label>
              <label className="flex items-center gap-2">
                <input type="radio" name="owns" value="no" /> No
              </label>
            </div>
          </div>

          <label className="flex items-center gap-2 text-sm">
            <input type="checkbox" /> I accept the terms and conditions
          </label>

          <button
            type="submit"
            className="w-full bg-black text-white py-2 rounded hover:bg-gray-800"
          >
            Create Account
          </button>
        </form>

        {/* Social Signup */}
        <div className="text-center mt-6">
          <p className="text-sm">Or Sign up via</p>
          <div className="flex justify-center gap-4 mt-3">
            <button className="bg-blue-600 text-white px-4 py-2 rounded">Sign up with Facebook</button>
            <button className="bg-red-500 text-white px-4 py-2 rounded">Sign up with Google</button>
          </div>
        </div>

        {/* Login Link */}
        <p className="text-center text-sm mt-6">
          Already have a Royal Enfield account?{" "}
          <a href="/login" className="text-blue-600 hover:underline">
            Login
          </a>
        </p>
      </div>
    </div>
  );
}
