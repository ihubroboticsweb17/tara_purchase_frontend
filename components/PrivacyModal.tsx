"use client";
import { useState } from "react";

export default function PrivacyModal() {
  const [isOpen, setIsOpen] = useState(true);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center px-4">
      <div className="bg-[#2e2e2e] text-white max-w-2xl w-full max-h-[85vh] p-6 rounded-lg shadow-lg relative overflow-y-auto">
        {/* Close button */}
        <button
          className="absolute top-4 right-4 text-2xl text-white"
          onClick={() => setIsOpen(false)}
          aria-label="Close"
        >
          &times;
        </button>

        <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>

        <h2 className="text-lg font-semibold underline mb-2">1. Introduction</h2>
        <p className="text-sm leading-6 text-gray-300">
          Royal Enfield, a unit of Eicher Motors Limited (hereafter referred to
          as Royal Enfield) is committed to protecting your personal information
          when you are using Royal Enfield Platform(s) including but not limited to
          Royal Enfield website{" "}
          <a href="https://www.royalenfield.com" className="underline text-white" target="_blank">
            www.royalenfield.com
          </a>, Royal Enfield Apps etc. We want our services to be safe and secure for our users.
        </p>
        <br />
        <p className="text-sm leading-6 text-gray-300">
          Uniform practices for collecting, using, disclosing, storing, retaining,
          disposing, accessing, transferring or otherwise processing such information
          assists Royal Enfield to process Personal Information fairly and appropriately,
          disclosing it and/or transferring it only under appropriate circumstances.
        </p>
        <br />
        <p className="text-sm leading-6 text-gray-300">
          This privacy policy tells you how we use your personal information collected
          through Royal Enfield Platform(s). Please read this privacy policy before using
          Royal Enfield Platform(s) or submitting any personal information.
        </p>
      </div>
    </div>
  );
}
