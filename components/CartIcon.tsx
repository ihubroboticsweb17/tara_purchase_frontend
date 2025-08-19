// 'use client';
// import { ShoppingCart } from 'lucide-react';
// import { useState } from 'react';
// import CartModal from './CartModal';

// export default function CartIcon() {
//   const [showModal, setShowModal] = useState(false);
//   const cartCount = 4;

//   return (
//     <>
//       <div
//         onClick={() => setShowModal(true)}
//         className="fixed top-5 right-5 z-50 bg-white w-14 h-14 rounded-full shadow-xl flex items-center justify-center cursor-pointer transition-transform hover:scale-105"
//       >
//         <ShoppingCart size={28} className="text-black" />
//         {cartCount > 0 && (
//           <span className="absolute top-0 right-0 -mt-1 -mr-1 w-6 h-6 bg-green-500 text-white text-sm font-bold rounded-full flex items-center justify-center">
//             {cartCount}
//           </span>
//         )}
//       </div>

//       {showModal && <CartModal onClose={() => setShowModal(false)} />}
//     </>
//   );
// }
// 'use client'
// import { ShoppingCart } from "lucide-react";
// import { useState } from "react";
// import CartModal from "./CartModal";

// export default function CartIcon() {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <>
//       <div className="relative cursor-pointer" onClick={() => setIsOpen(true)}>
//         <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
//           <ShoppingCart className="text-black" />
//         </div>
//         {/* Badge */}
//         <div className="absolute -top-1 -right-1 bg-green-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
//           4
//         </div>
//       </div>

//       {/* Modal */}
//       <CartModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
//     </>
//   );
// }
'use client';
import { ShoppingCart } from 'lucide-react';
import { useState } from 'react';
import CartModal from './CartModal';

// export default function CartIcon() {
//   const [showModal, setShowModal] = useState(false);
//   const cartCount = 4;

//   return (
//     <>
//       <div
//         onClick={() => setShowModal(true)}
//         className="fixed top-5 right-5 z-50 bg-white w-14 h-14 rounded-full shadow-xl flex items-center justify-center cursor-pointer transition-transform hover:scale-105"
//       >
//         <ShoppingCart size={28} className="text-black" />
//         {cartCount > 0 && (
//           <span className="absolute top-0 right-0 -mt-1 -mr-1 w-6 h-6 bg-green-500 text-white text-sm font-bold rounded-full flex items-center justify-center">
//             {cartCount}
//           </span>
//         )}
//       </div>

//       {showModal && <CartModal onClose={() => setShowModal(false)} />}
//     </>
//   );
// }
export default function CartIcon() {
  const [showModal, setShowModal] = useState(false);
  const cartCount = 4;

  return (
    <>
      <div
        onClick={() => setShowModal(true)}
        className="relative bg-white w-14 h-14 rounded-full shadow-xl flex items-center justify-center cursor-pointer transition-transform hover:scale-105"
      >
        <ShoppingCart size={28} className="text-black" />
        {cartCount > 0 && (
          <span className="absolute top-0 right-0 -mt-1 -mr-1 w-6 h-6 bg-green-500 text-white text-sm font-bold rounded-full flex items-center justify-center">
            {cartCount}
          </span>
        )}
      </div>

      {showModal && <CartModal onClose={() => setShowModal(false)} />}
    </>
  );
}


