// // RegisterPage.tsx
// import React, { useState } from 'react';

// const RegisterPage = () => {
//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     email: '',
//     acceptedTerms: false,
//   });

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value, type, checked } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: type === 'checkbox' ? checked : value,
//     }));
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     if (!formData.acceptedTerms) {
//       alert('Please accept the terms and conditions');
//       return;
//     }
//     console.log('Register Data:', formData);
//     // Call your API or navigate
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100">
//       <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
//         <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>
//         <form onSubmit={handleSubmit}>
//           <div className="mb-4">
//             <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
//               First Name
//             </label>
//             <input
//               type="text"
//               name="firstName"
//               value={formData.firstName}
//               onChange={handleChange}
//               className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
//               required
//             />
//           </div>

//           <div className="mb-4">
//             <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
//               Last Name
//             </label>
//             <input
//               type="text"
//               name="lastName"
//               value={formData.lastName}
//               onChange={handleChange}
//               className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
//               required
//             />
//           </div>

//           <div className="mb-4">
//             <label htmlFor="email" className="block text-sm font-medium text-gray-700">
//               Email ID
//             </label>
//             <input
//               type="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
//               required
//             />
//           </div>

//           <div className="mb-4 flex items-center">
//             <input
//               type="checkbox"
//               name="acceptedTerms"
//               checked={formData.acceptedTerms}
//               onChange={handleChange}
//               className="mr-2"
//               required
//             />
//             <label htmlFor="acceptedTerms" className="text-sm text-gray-700">
//               I accept all terms and conditions
//             </label>
//           </div>

//           <button
//             type="submit"
//             className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
//           >
//             Sign Up
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default RegisterPage;
"use client";

import React, { useState } from "react";
import { X } from "lucide-react";
import { useRouter } from "next/navigation";
// const router = useRouter();
const RegisterPage = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    acceptTerms: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const isValid =
    formData.firstName.trim() &&
    formData.lastName.trim() &&
    formData.email.includes("@") &&
    formData.acceptTerms;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isValid) return;
    alert("Registered successfully!");
    onClose();
    //  router.push("/customize"); 
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur">
      <div className="bg-[#1a1a1a] text-white p-8 rounded-md shadow-lg w-full max-w-md relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white hover:text-gray-300"
        >
          <X size={20} />
        </button>
        <h2 className="text-2xl font-bold mb-6 text-center">Personal Detail</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="text-sm">First name</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="mt-1 w-full p-2 bg-black text-white border border-gray-700 rounded outline-none"
              placeholder="Enter"
              required
            />
          </div>
          <div>
            <label className="text-sm">Last name</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="mt-1 w-full p-2 bg-black text-white border border-gray-700 rounded outline-none"
              placeholder="Enter"
              required
            />
          </div>
          <div>
            <label className="text-sm">Email Id</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 w-full p-2 bg-black text-white border border-gray-700 rounded outline-none"
              placeholder="Enter Email"
              required
            />
          </div>
          <div className="flex items-start gap-2 text-sm">
            <input
              type="checkbox"
              name="acceptTerms"
              checked={formData.acceptTerms}
              onChange={handleChange}
              className="mt-1"
            />
            <label>
              I accept the{" "}
              <span className="text-red-500 underline">terms and conditions</span>
              <p className="text-xs mt-1 text-gray-400">
                By checking this box, you agree to let us use your information to
                communicate with you through E-mails, texts and calls for
                providing our product or service related information for
                promotional purposes. The information will be secured as per our
                privacy policy.
              </p>
            </label>
          </div>
          <button
            type="submit"
            disabled={!isValid} 
            className={`w-full py-2 mt-4 rounded ${
              isValid
                ? "bg-white text-black hover:bg-gray-300"
                : "bg-gray-600 text-gray-400 cursor-not-allowed"
            } font-semibold tracking-wide`}
          >
            CONFIRM AND SIGNUP
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;

