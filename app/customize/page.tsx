// "use client";
// import Sidebar from "@/components/SideBar";
// import SubSidebar from "@/components/SubSideBar";
// import ProductPreview from "@/components/ProductPreview";
// import FooterBar from "@/components/FooterBar";
// import { useState } from "react";
// import CartIcon from "@/components/CartIcon";
// import Tharaimage from "@/components/Tharaimage";
// import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";



// export default function Home() {
//     const [mainCategory, setMainCategory] = useState("STYLE");
//   const [subCategory, setSubCategory] = useState("");
//  const [cartItems, setCartItems] = useState([]);
//   const [showCart, setShowCart] = useState(false);
  
//     const handleAddToCart = (item) => {
//     setCartItems((prev) => [...prev, item]);
//     setShowCart(true); // open cart automatically after adding
//   };
//   return (
//     <main className="w-screen h-screen flex flex-col overflow-hidden">
//      {/* 🛒 Center-Top Cart Icon */}
//        <motion.img
//         src="/images/transparen2t.png"
//         alt="TARA Gen 1"
//         className="absolute bottom-10 w-[80vw] max-w-[1000px] z-10"
//         initial={{ opacity: 0, y: 100 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1, delay: 0.4 }}
//       />
//       <div className="absolute top-6 right-1/3 transform-translate-x-1/2 z-50">
//         <CartIcon />
//       </div> 
//       <div className="flex flex-1 relative bg-gray-800">
//         {/* Product Preview takes up the remaining space on the left */}
//         <ProductPreview onAddToCart={handleAddToCart}/>

//         {/* Container for the two sidebars, positioned on the right */}
//         <div className="flex z-10">
//         {mainCategory === 'STYLE' && <SubSidebar/> }  
//           <Sidebar active={mainCategory} setActive={setMainCategory} />
//         </div>
//       </div>
//       <div className="fixed bottom-0 right-96 mb-4 ">
//         <FooterBar />
//       </div>
//     </main>
//   );
// }
"use client";

import SideBar from "@/components/SideBar";
import SubSidebar from "@/components/SubSideBar";
import ProductPreview from "@/components/ProductPreview";
import FooterBar from "@/components/FooterBar";
import { useState } from "react";
import CartIcon from "@/components/CartIcon";
import Tharaimage from "@/components/Tharaimage";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { Header } from "@radix-ui/react-accordion";
import Image from "@/components/image";

export default function Home() {
  const [mainCategory, setMainCategory] = useState("STYLE");
  const [subCategory, setSubCategory] = useState("");
  const [cartItems, setCartItems] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [isConfigOpen, setIsConfigOpen] = useState(false);
    const [activeMain, setActiveMain] = useState('front');
    const [activeSub, setActiveSub] = useState('');
       const [activeSubSub, setActiveSubSub] = useState('');
         const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const handleAddToCart = (item) => {
    setCartItems((prev) => [...prev, item]);
    setShowCart(true); // open cart automatically after adding
  };

  return (
    <main className="w-screen h-screen flex flex-col overflow-hidden">
      {/* 🛒 Center-Top Cart Icon */}
    
      <div className="absolute top-6 right-1/3 transform-translate-x-1/2 z-50">
        <CartIcon />
      </div>

      <div className="flex flex-1 relative bg-gray-800">
        {/* Product Preview takes up the remaining space on the left */}
          {/* <Image/> */}
        <ProductPreview onAddToCart={handleAddToCart}   activeSub={activeSub} />
         {/* <ProductPreview activeSub={activeSub} /> */}

        {/* Container for the two sidebars, positioned on the right */}
        <div className="flex z-10">
          {/* {mainCategory === 'STYLE' && <SubSidebar />} */}
          <SubSidebar    activeMain={activeMain}
        activeSub={activeSub}
        setActiveSub={setActiveSub} />
          {/* <Sidebar active={mainCategory} setActive={setMainCategory} /> */}
            <SideBar activeMain={activeMain} setActiveMain={setActiveMain} />
        </div>
      </div>
      
      <div className="fixed bottom-0 right-96 mb-4">
        <FooterBar />
      </div>
    </main>
  );
}
// 'use client'
// import { useState } from 'react';
// import SideBar from "@/components/SideBar";
//  import SubSidebar from "@/components/SubSideBar";

// export default function MenuLayout() {
//   const [activeMain, setActiveMain] = useState('front');

//   return (
//     <div className="flex">
//       {/* Main Sidebar */}
//       <SideBar activeMain={activeMain} setActiveMain={setActiveMain} />

//       {/* Sub Sidebar */}
//       <SubSidebar activeMain={activeMain} />
//     </div>
//   );
// }
