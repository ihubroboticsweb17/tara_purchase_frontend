import { useState } from "react";
import LoginModal from "./LoginModal";
import SaveConfigModal from "./SaveConfigModal";

export default function FooterBar() {
  const [showLogin, setShowLogin] = useState(false);
   const [showSave, setShowSave] = useState(false);
  return (
    <div className="h-[70px] bg-black/10  backdrop:blur-xl flex justify-center items-center space-x-4 px-6 ">
    {showLogin && <LoginModal isOpen={showLogin} onClose={() => setShowLogin(false)} />}
     {showSave && <SaveConfigModal isOpen={showSave} onClose={() => setShowSave(false)} />}
      <button className="bg-white text-black px-6 py-2 rounded font-poppins font-bold"
       onClick={() => setShowSave(true)}>SAVE</button>
      <button className="bg-yellow-400 text-black px-6 py-2 rounded font-bold font-poppins"
        onClick={() => setShowLogin(true)}>
        PROCEED
      </button>
    </div>
  )
}
