import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const SplashScreen = ({ onFinish }: { onFinish: () => void }) => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
      setTimeout(() => onFinish(), 800); // sync with exit animation
    }, 2200); // visible for ~2.2s
    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center bg-neutral-950 z-50"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Glowing circle animation */}
          <motion.div
            className="relative w-40 h-40 flex items-center justify-center"
            initial={{ scale: 0 }}
            animate={{ scale: 1.1 }}
            exit={{ scale: 12, opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
          >
            {/* Glow layer */}
            <div className="absolute inset-0 bg-blue-600/40 blur-3xl rounded-full" />
            
            {/* Core circle */}
            <div className="relative w-40 h-40 bg-neutral-900 border border-blue-600/40 rounded-full flex items-center justify-center shadow-[0_0_40px_-5px_rgba(37,99,235,0.6)]">
              <motion.h1
                className="text-white text-4xl font-extrabold tracking-widest"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                JI
              </motion.h1>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SplashScreen;