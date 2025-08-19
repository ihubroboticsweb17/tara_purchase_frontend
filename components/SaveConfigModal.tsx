// "use client";
// import { useState } from "react";
// import { X } from "lucide-react";

// export default function SaveConfigModal({
//   isOpen,
//   onClose,
//   onSave
// }: {
//   isOpen: boolean;
//   onClose: () => void;
//   onSave: (name: string) => void;
// }) {
//   const [configName, setConfigName] = useState("");

//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
//       <div className="bg-[#1f1f1f] text-white w-[400px] rounded-lg p-6 relative shadow-lg">
        
//         {/* Close Button */}
//         <button
//           className="absolute top-4 right-4 text-gray-400 hover:text-white"
//           onClick={onClose}
//         >
//           <X size={20} />
//         </button>

//         {/* Title */}
//         <h2 className="text-lg font-bold mb-4">Save Configuration</h2>

//         {/* Input */}
//         <label className="block text-sm text-gray-400 mb-2">
//           Name this configuration to save it
//         </label>
//         <input
//           type="text"
//           value={configName}
//           onChange={(e) => setConfigName(e.target.value)}
//           className="w-full bg-black border border-gray-600 rounded px-3 py-2 text-white outline-none"
//           placeholder="Enter name"
//           maxLength={30}
//         />
//         <p className="text-xs text-gray-500 mt-1">
//           * Maximum Characters: {configName.length}/30
//         </p>

//         {/* Buttons */}
//         <div className="flex justify-between mt-6">
//           <button
//             onClick={onClose}
//             className="border border-gray-500 px-4 py-2 rounded hover:bg-gray-700"
//           >
//             SKIP & CONTINUE
//           </button>
//           <button
//             onClick={() => {
//               if (configName.trim()) {
//                 onSave(configName);
//               }
//             }}
//             disabled={!configName.trim()}
//             className="bg-yellow-500 px-4 py-2 rounded font-bold text-black hover:bg-yellow-400 disabled:opacity-50"
//           >
//             SAVE
//           </button>
//         </div>
//       </div>
//     </div>
    
//   );
// }
"use client";
import { useState } from "react";
import { X, Check } from "lucide-react";
import SavedConfigurationsModal from "./SavedConfigurationsModal";

export default function SaveConfigModal({
  isOpen,
  onClose
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [configName, setConfigName] = useState("");
  const [step, setStep] = useState<"form" | "success">("form");
const [isModalOpen, setIsModalOpen] = useState(false);
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
      <div className="bg-[#1f1f1f] text-white w-[400px] rounded-lg p-6 relative shadow-lg">
        
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-gray-400 hover:text-white"
          onClick={() => {
            setStep("form");
            setConfigName("");
            onClose();
          }}
        >
          <X size={20} />
        </button>

        {step === "form" && (
          <>
            {/* Title */}
            <h2 className="text-lg font-bold mb-4">Save Configuration</h2>

            {/* Input */}
            <label className="block text-sm text-gray-400 mb-2">
              Name this configuration to save it
            </label>
            <input
              type="text"
              value={configName}
              onChange={(e) => setConfigName(e.target.value)}
              className="w-full bg-black border border-gray-600 rounded px-3 py-2 text-white outline-none"
              placeholder="Enter name"
              maxLength={30}
            />
            <p className="text-xs text-gray-500 mt-1">
              * Maximum Characters: {configName.length}/30
            </p>

            {/* Buttons */}
            <div className="flex justify-between mt-6">
              <button
                onClick={onClose}
                className="border border-gray-500 px-4 py-2 rounded hover:bg-gray-700"
              >
                SKIP & CONTINUE
              </button>
              <button
                onClick={() => {
                  if (configName.trim()) {
                    // Simulate save
                    setStep("success");
                  }
                }}
                disabled={!configName.trim()}
                className="bg-yellow-500 px-4 py-2 rounded font-bold text-black hover:bg-yellow-400 disabled:opacity-50"
              >
                SAVE
              </button>
            </div>
          </>
        )}

        {step === "success" && (
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <div className="bg-green-600 rounded-full p-2">
                <Check size={30} />
              </div>
            </div>
            <h2 className="text-lg font-bold mb-2">Configuration saved successfully</h2>
            <p className="text-gray-400 text-sm mb-6">
              '{configName}' configuration is saved.
            </p>
            <button
              className="w-full bg-black border border-yellow-500 text-yellow-500 px-4 py-2 rounded mb-3 hover:bg-yellow-500 hover:text-black font-bold"
              onClick={onClose}
            >
              BACK TO CONFIGURATOR
            </button>
            <button
              className="w-full text-red-500 hover:underline text-sm"
            //   onClick={() => alert("Redirect to saved configurations")}
              onClick={() => setIsModalOpen(true)}
            >
              VIEW ALL SAVED CONFIGURATIONS
            </button>
             <SavedConfigurationsModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
          </div>
        )}
      </div>
    </div>
  );
}
