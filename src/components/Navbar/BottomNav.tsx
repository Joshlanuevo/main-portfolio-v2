import React from "react";
import { motion } from "framer-motion";
import { Home, User, Cpu, Briefcase, Folder, Mail } from "lucide-react";

type BottomNavProps = {
  activeIndex: number;
  onNavigate: (index: number) => void;
};

const BottomNav: React.FC<BottomNavProps> = ({ activeIndex, onNavigate }) => {
  const items = [
    { icon: <Home size={22} />, label: "Home" },
    { icon: <User size={22} />, label: "About" },
    { icon: <Cpu size={22} />, label: "Skills" },
    { icon: <Briefcase size={22} />, label: "Experience" },
    { icon: <Folder size={22} />, label: "Projects" },
    { icon: <Mail size={22} />, label: "Contact" },
  ];

  return (
    <motion.nav
      initial={{ scale: 0, borderRadius: "9999px" }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed bottom-6 left-1/2 -translate-x-1/2 
        bg-neutral-900/70 backdrop-blur-md shadow-lg 
        rounded-full px-6 py-3 flex space-x-6 z-50"
    >
      {items.map((item, index) => (
        <button
          key={item.label}
          onClick={() => onNavigate(index)}
          className={`p-2 rounded-full transition-colors ${
            activeIndex === index
              ? "bg-white text-black"
              : "text-gray-300 hover:text-white"
          }`}
          title={item.label}
        >
          {item.icon}
        </button>
      ))}
    </motion.nav>
  );
};

export default BottomNav;