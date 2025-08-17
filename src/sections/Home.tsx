import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

type HomeProps = {
  onNavigate: (index: number) => void;
};

const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  return (
    <div className="relative w-screen h-screen flex items-center justify-center bg-neutral-950 text-gray-200 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.05),transparent_50%)] -z-10" />
      
      <div className="max-w-6xl w-full px-10 flex items-center justify-between">
        <div className="flex flex-col space-y-6">
          <motion.div
            className="font-mono text-sm text-green-400 mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            ~/josh-ivan-portfolio $
          </motion.div>
          
          <motion.h1
            className="text-6xl font-black text-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <span className="text-blue-400">const</span> developer = {"{"}
          </motion.h1>
          
          <motion.div
            className="pl-8 space-y-2 font-mono text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <div><span className="text-purple-400">name:</span> <span className="text-green-400">'Josh Ivan'</span>,</div>
            <div><span className="text-purple-400">role:</span> <span className="text-green-400">'Full Stack Android Developer'</span>,</div>
            <div><span className="text-purple-400">experience:</span> <span className="text-yellow-400">'2.4 years'</span>,</div>
            <div><span className="text-purple-400">skills:</span> <span className="text-yellow-400">['Kotlin', 'JavaScript', 'TypeScript', 'React', 'Vue', 'Node.js']</span>,</div>
          </motion.div>
          
          <motion.h1
            className="text-6xl font-black text-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            {"}"}
          </motion.h1>

          {/* Buttons */}
          <motion.div
            className="flex space-x-4 mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <button 
              onClick={() => onNavigate(4)}
              className="px-6 py-2 bg-blue-600 rounded-md font-medium hover:bg-blue-500 transition"
            >
              View Projects
            </button>
            <button 
              onClick={() => onNavigate(5)}
              className="px-6 py-2 border border-gray-600 rounded-md font-medium hover:border-gray-400 transition"
            >
              Contact Me
            </button>
          </motion.div>

          {/* Socials */}
          <motion.div
            className="flex space-x-6 mt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            <a href="https://github.com/Joshlanuevo" target="_blank" rel="noreferrer">
              <Github className="w-6 h-6 text-gray-400 hover:text-white transition" />
            </a>
            <a href="https://www.linkedin.com/in/josh-i-3802ab287/" target="_blank" rel="noreferrer">
              <Linkedin className="w-6 h-6 text-gray-400 hover:text-white transition" />
            </a>
            <a href="mailto:joshlanuevo11@gmail.com">
              <Mail className="w-6 h-6 text-gray-400 hover:text-white transition" />
            </a>
          </motion.div>
        </div>

        {/* Terminal window */}
          <div className="relative hidden md:block">
            <motion.div
              className="w-96 h-64 bg-black rounded-lg border border-gray-700 shadow-2xl"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              {/* Terminal header */}
              <div className="flex items-center space-x-2 p-3 border-b border-gray-700">
                <div className="w-3 h-3 bg-red-500 rounded-full" />
                <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                <div className="w-3 h-3 bg-green-500 rounded-full" />
                <span className="ml-4 text-xs text-gray-400">terminal</span>
              </div>
              
              {/* Terminal content */}
              <div className="p-4 font-mono text-sm">
                <div className="text-green-400">$ whoami</div>
                <div className="text-white">josh-ivan-developer</div>
                <div className="text-green-400 mt-2">$ cat skills.txt</div>
                <motion.div
                  className="text-gray-300"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.2 }}
                >
                  Android Development ✓<br/>
                  Full Stack Web ✓<br/>
                  Clean Architecture ✓
                </motion.div>
                <div className="text-green-400 mt-2 animate-pulse">█</div>
              </div>
            </motion.div>
          </div>
      </div>
    </div>
  );
};

export default Home;