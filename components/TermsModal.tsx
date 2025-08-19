// components/TermsModal.tsx
"use client";
import { useState } from "react";

export default function TermsModal() {
  const [isOpen, setIsOpen] = useState(true); // show by default

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 backdrop-blur-sm z-50 flex items-center justify-center">
      <div className="bg-zinc-900 text-white w-full max-w-2xl max-h-[80vh] p-6 rounded-md relative overflow-y-auto">
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-white text-2xl"
          onClick={() => setIsOpen(false)}
        >
          &times;
        </button>

        {/* Title */}
        <h2 className="text-2xl font-bold mb-4">Terms and Conditions</h2>

        {/* Content */}
        <div className="space-y-3 text-sm leading-6">
          <p>
            PLEASE READ THIS ROYAL ENFIELD MOBILE APPLICATION END-USER LICENSE
            AGREEMENT (HEREINAFTER REFERRED TO AS “<strong>EULA</strong>”)
            CAREFULLY BEFORE REGISTERING OR USING{" "}
            <strong>“ROYAL ENFIELD”</strong> MOBILE APPLICATION SERVICES.
          </p>
          <p>
            This EULA forms a binding legal agreement between you (“You” or
            “Your”) and Eicher Motors Limited, known by its brand name{" "}
            <strong>Royal Enfield</strong>. Each separately a “<strong>Party</strong>”
            and collectively the “<strong>Parties</strong>”.
          </p>
          <p>
            This EULA applies to your use of the Royal Enfield mobile
            application and services (“<strong>Mobile App</strong>”).
          </p>
          <p>
            If you do not agree with any terms, please do not install or use the
            app or services.
          </p>
          {/* Add more content as needed */}
        </div>
      </div>
    </div>
  );
}
