import React, { useMemo } from "react";
import { motion } from "framer-motion";
import { Home, User, Cpu, Briefcase, Folder, Mail } from "lucide-react";

type BottomNavProps = {
  activeIndex: number;
  onNavigate: (index: number) => void;
};

const NAV_ITEMS = [
  { icon: Home, label: "Home", color: "from-blue-400 to-blue-600" },
  { icon: User, label: "About", color: "from-purple-400 to-purple-600" },
  { icon: Cpu, label: "Skills", color: "from-green-400 to-green-600" },
  { icon: Briefcase, label: "Experience", color: "from-orange-400 to-orange-600" },
  { icon: Folder, label: "Projects", color: "from-pink-400 to-pink-600" },
  { icon: Mail, label: "Contact", color: "from-cyan-400 to-cyan-600" },
];

const BUTTON_SIZE = 56; // consistent width for spacing

const BottomNav: React.FC<BottomNavProps> = ({ activeIndex, onNavigate }) => {
  // Generate floating particles once
  const particles = useMemo(
    () =>
      Array.from({ length: 6 }).map(() => ({
        left: 50 + Math.random() * 20 - 10,
        delay: Math.random() * 2,
        duration: 3 + Math.random() * 2,
        x: [
          Math.random() * 400 - 200,
          Math.random() * 400 - 200,
          Math.random() * 400 - 200,
        ],
      })),
    []
  );

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 flex justify-center pb-6">
      {/* Background Glow */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="absolute inset-0 flex justify-center pb-6"
      >
        <div className="w-fit h-fit bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-full blur-xl p-12" />
      </motion.div>

      {/* Nav */}
      <motion.nav
        role="navigation"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        className="relative bg-black/90 backdrop-blur-xl border border-white/10 
          rounded-2xl px-4 py-3 flex items-center space-x-2
          shadow-2xl shadow-black/50"
      >
        {/* Animated Indicator */}
        <motion.div
          className={`absolute top-2 bottom-2 w-12 rounded-xl`}
          style={{
            backgroundImage: `linear-gradient(to right, var(--tw-gradient-stops))`,
          }}
          animate={{
            x: activeIndex * BUTTON_SIZE + 8,
          }}
          transition={{ type: "spring", stiffness: 400, damping: 25 }}
        >
          <div
            className={`absolute inset-0 bg-gradient-to-r ${NAV_ITEMS[activeIndex].color} rounded-xl opacity-20 blur-sm`}
          />
          <div
            className={`absolute inset-0 bg-gradient-to-r ${NAV_ITEMS[activeIndex].color} rounded-xl`}
          />
        </motion.div>

        {/* Items */}
        {NAV_ITEMS.map((item, index) => (
          <NavItem
            key={item.label}
            item={item}
            index={index}
            active={activeIndex === index}
            onClick={() => onNavigate(index)}
          />
        ))}

        {/* Decorative pulses */}
        <div className="absolute -top-1 -left-1 w-3 h-3 bg-blue-400 rounded-full opacity-60 animate-pulse" />
        <div
          className="absolute -bottom-1 -right-1 w-2 h-2 bg-purple-400 rounded-full opacity-60 animate-pulse"
          style={{ animationDelay: "1s" }}
        />
      </motion.nav>

      {/* Floating Particles */}
      {particles.map((p, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-white rounded-full opacity-20"
          animate={{
            y: [-20, -60, -20],
            x: p.x,
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
          }}
          style={{
            left: `${p.left}%`,
            bottom: "100px",
          }}
        />
      ))}
    </div>
  );
};

type NavItemProps = {
  item: { icon: React.FC<{ size?: number }>; label: string; color: string };
  index: number;
  active: boolean;
  onClick: () => void;
};

const NavItem: React.FC<NavItemProps> = ({ item, active, onClick }) => {
  const Icon = item.icon;

  return (
    <motion.button
      aria-label={item.label}
      onClick={onClick}
      className={`relative z-10 p-3 rounded-xl transition-all duration-300 group ${
        active ? "text-white scale-110" : "text-gray-400 hover:text-white hover:scale-105"
      }`}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.95 }}
    >
      {/* Icon */}
      <motion.div
        animate={{
          scale: active ? 1.1 : 1,
          rotate: active ? [0, -5, 5, 0] : 0,
        }}
        transition={{ duration: 0.3 }}
      >
        <Icon size={22} />
      </motion.div>

      {/* Floating Label */}
      <motion.div
        initial={{ opacity: 0, y: 10, scale: 0.8 }}
        whileHover={{ opacity: 1, y: -8, scale: 1 }}
        className={`absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 
          bg-gradient-to-r ${item.color} text-white text-xs font-medium rounded-md
          whitespace-nowrap pointer-events-none shadow-lg`}
      >
        {item.label}
        <div
          className={`absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 
            border-l-4 border-r-4 border-t-4 border-transparent border-t-current`}
        />
      </motion.div>

      {/* Pulse for active */}
      {active && (
        <motion.div
          className={`absolute inset-0 bg-gradient-to-r ${item.color} rounded-xl opacity-30`}
          animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0, 0.3] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      )}
    </motion.button>
  );
};

export default BottomNav;