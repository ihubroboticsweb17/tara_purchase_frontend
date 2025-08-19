// components/LoginModal.tsx
"use client";
import { useState } from "react";
import { X } from "lucide-react";
import TermsModal from "./TermsModal";
import PrivacyModal from "./PrivacyModal";
import OtpModal from "./OtpModal";

export default function LoginModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [phone, setPhone] = useState("");
    const [showLogin, setShowLogin] = useState(false);
    const [ShowTerms, setShowTerms] = useState(false);
    const [showPrivacy, setShowPrivacy] = useState(false);
    const [showOtp, setShowOtp ]= useState(false);
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-md bg-black/60">
      <div className="bg-[#1f1f1f] text-white p-6 rounded-lg shadow-xl w-full max-w-md relative">
        {/* Close Icon */}
        <button onClick={onClose} className="absolute top-4 right-4 text-white">
          <X size={20} />
        </button>

        <h2 className="text-2xl font-bold mb-4">Login or Signup</h2>

        <label className="block mb-2 text-sm">Please enter your phone number</label>
        <div className="flex items-center border border-gray-700 bg-black px-3 py-2 rounded mb-4">
          <span className="text-gray-400 pr-2">+91</span>
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="bg-transparent outline-none text-white flex-1"
            placeholder="Enter No."
          />
        </div>

        <button
          className="bg-gray-700 hover:bg-gray-600 transition-all w-full py-2 rounded disabled:opacity-40"
          disabled={!phone}
           onClick={() => setShowOtp(true)}
        >
          SEND OTP
        </button>

        <p className="text-xs mt-4 text-gray-400">
          By continuing, you agree to our{" "}
          <button     onClick={() => setShowTerms(true)}>
             <span className="text-red-500 underline cursor-pointer">Terms and Conditions</span> and{" "}
          </button>
         <button  onClick={() => setShowPrivacy(true)}>
            <span className="text-blue-400 underline cursor-pointer">Privacy Policy</span>.
         </button>
          
        </p>
      </div>
      {showOtp && <OtpModal isOpen={showOtp} onClose={() => setShowOtp(false)} />}
        {ShowTerms && <TermsModal isOpen={ShowTerms} onClose={() => setShowTerms(false)} />}
                    {showPrivacy && <PrivacyModal isOpen={showPrivacy} onClose={() => setShowPrivacy(false)} />}
    </div>
    
  );
}
