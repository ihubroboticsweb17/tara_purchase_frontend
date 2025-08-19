// AuthFlow.tsx
"use client";
import { useState } from "react";
import LoginModal from "./LoginModal";
import OtpModal from "./OtpModal";
import RegisterPage from "./RegisterPage";

export default function AuthFlow() {
  const [step, setStep] = useState<"login" | "otp" | "register">("login");

  return (
    <>
      {step === "login" && (
        <LoginModal isOpen={true} onClose={() => setStep("otp")} />
      )}

      {step === "otp" && (
        <OtpModal
          isOpen={true}
          onClose={() => setStep("login")}
          onOtpSuccess={() => setStep("register")}
        />
      )}

      {step === "register" && <RegisterPage />}
    </>
  );
}

