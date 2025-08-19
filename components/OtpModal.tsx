"use client";
import { useState, useRef, useEffect } from "react";
import { X } from "lucide-react";
import RegisterPage from "./RegisterPage";

const OTP_LENGTH = 6;
const RESEND_INTERVAL = 30; // seconds

// export default function OtpModal({
//   isOpen,
//   onClose,
// }: {
//   isOpen: boolean;
//   onClose: () => void;
// }) {
export default function OtpModal({
  isOpen,
  onClose,
  onOtpSuccess,
}: {
  isOpen: boolean;
  onClose: () => void;
  onOtpSuccess: () => void; // ✅ NEW
}) {
   const [showPomonate, setShowPomonate] = useState(false);
  const [otp, setOtp] = useState(Array(OTP_LENGTH).fill(""));
  const [timer, setTimer] = useState(RESEND_INTERVAL);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  // Start countdown timer
  useEffect(() => {
    if (timer <= 0) return;
    const countdown = setInterval(() => setTimer((prev) => prev - 1), 1000);
    return () => clearInterval(countdown);
  }, [timer]);

  // Handle OTP input
  const handleChange = (value: string, index: number) => {
    if (!/^\d*$/.test(value)) return; // only digits
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Auto move to next input
    if (value && index < OTP_LENGTH - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  // Handle backspace
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  // Handle paste full OTP
  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    const paste = e.clipboardData.getData("text").slice(0, OTP_LENGTH);
    if (/^\d+$/.test(paste)) {
      const newOtp = paste.split("").slice(0, OTP_LENGTH);
      setOtp(newOtp);
      newOtp.forEach((digit, i) => {
        if (inputRefs.current[i]) inputRefs.current[i]!.value = digit;
      });
      inputRefs.current[OTP_LENGTH - 1]?.focus();
    }
  };

  // Reset timer and OTP
  const resendOtp = () => {
    setOtp(Array(OTP_LENGTH).fill(""));
    setTimer(RESEND_INTERVAL);
    inputRefs.current[0]?.focus();
  };

  // Check if OTP is complete
  const isOtpComplete = otp.every((digit) => digit !== "");

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-md">
      <div className="bg-[#1f1f1f] text-white p-6 rounded-lg shadow-xl w-full max-w-sm relative">
        <button onClick={onClose} className="absolute top-4 right-4 text-white">
          <X size={20} />
        </button>

        <h2 className="text-xl font-bold mb-4 text-center">OTP Verification</h2>
        <p className="text-sm text-center mb-4 text-gray-400">Enter OTP</p>

        <div className="flex justify-between gap-2 mb-4">
          {otp.map((digit, index) => (
            <input
              key={index}
              ref={(el) => (inputRefs.current[index] = el)}
              type="text"
              inputMode="numeric"
              maxLength={1}
              value={digit}
              onChange={(e) => handleChange(e.target.value, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              onPaste={handlePaste}
              className="w-10 h-12 text-center border rounded bg-black text-white border-gray-600 focus:outline-none"
            />
          ))}
        </div>

        <div className="flex justify-between items-center mb-4 text-sm">
          <button
            onClick={resendOtp}
            disabled={timer > 0}
            className={`text-red-400 ${timer > 0 ? "opacity-50 cursor-not-allowed" : "hover:text-red-500"}`}
          >
            Resend OTP {timer > 0 && `in ${timer}s`}
          </button>
        </div>
{/* 
        <button
          disabled={!isOtpComplete}
          onClick={() => alert(`Verifying OTP: ${otp.join("")}`)}
          className={`w-full py-2 rounded bg-gray-700 hover:bg-gray-600 transition-all ${
            !isOtpComplete ? "opacity-40 cursor-not-allowed" : ""
          }`}
        >
          VERIFY
        </button> */}
        {/* <button
  disabled={!isOtpComplete}
  onClick={() => {
    // You can replace this with real OTP API logic
    const enteredOtp = otp.join("");
    if (enteredOtp === "123456") {
      onOtpSuccess(); 
      setShowPomonate(true);
      
  // ✅ Trigger register page
    } else {
      alert("Invalid OTP. Try again.");
    }
  }}
  className={`w-full py-2 rounded bg-gray-700 hover:bg-gray-600 transition-all ${
    !isOtpComplete ? "opacity-40 cursor-not-allowed" : ""
  }`}
>
  VERIFY
</button> */}

        <button
    
                onClick={() => setShowPomonate(true)}
  
        >
          VERIFY
        </button>

      </div>
{showPomonate && (
  <RegisterPage
    isOpen={showPomonate}
    onClose={() => setShowPomonate(false)}
  />
)}
    </div>
  );
}
