import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Terminal, Play, Code2 } from "lucide-react";

type HomeProps = {
  onNavigate: (index: number) => void;
};

const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  const [terminalText, setTerminalText] = useState("");
  const [currentCommand, setCurrentCommand] = useState(0);
  
  const commands = [
    "$ whoami",
    "josh-ivan-developer",
    "$ cat experience.txt",
    "2.4 years • 3 live apps • Full-stack expertise",
    "$ echo $SKILLS",
    "Kotlin | Android | React | Node.js | TypeScript"
  ];

  useEffect(() => {
    if (currentCommand < commands.length) {
      const timer = setTimeout(() => {
        setTerminalText(prev => prev + commands[currentCommand] + "\n");
        setCurrentCommand(prev => prev + 1);
      }, 1000 + currentCommand * 800);
      return () => clearTimeout(timer);
    }
  }, [currentCommand]);

  return (
    <div className="relative w-screen h-screen flex items-center justify-center bg-neutral-950 text-gray-200 overflow-hidden">
      {/* Enhanced background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(59,130,246,0.1),transparent_50%)] -z-10" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(139,92,246,0.08),transparent_50%)] -z-10" />
      
      {/* Floating particles */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-blue-400 rounded-full opacity-20"
          animate={{
            y: [-20, -100, -20],
            x: [0, Math.random() * 100 - 50, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 3,
          }}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        />
      ))}
      
      <div className="max-w-7xl w-full px-10 flex items-center justify-between">
        <div className="flex flex-col space-y-8">
          {/* Terminal prompt with typing effect */}
          <motion.div
            className="font-mono text-sm text-green-400 mb-4 flex items-center gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <Terminal size={16} />
            <span>~/josh-ivan-portfolio $</span>
            <motion.span
              className="w-2 h-4 bg-green-400 ml-1"
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            />
          </motion.div>
          
          {/* Enhanced code block with syntax highlighting */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-xl blur-xl" />
            <div className="relative bg-neutral-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6">
              <motion.h1
                className="text-5xl md:text-6xl font-black text-white mb-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <span className="text-blue-400">const</span> developer = {"{"}
              </motion.h1>
              
              <motion.div
                className="pl-6 space-y-3 font-mono text-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                <div className="flex items-center gap-2">
                  <span className="text-purple-400">name:</span> 
                  <span className="text-green-400">'Josh Ivan'</span>
                  <span className="text-gray-500">,</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-purple-400">role:</span> 
                  <span className="text-green-400">'Full Stack Android Developer'</span>
                  <span className="text-gray-500">,</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-purple-400">experience:</span> 
                  <span className="text-yellow-400">'2.4 years'</span>
                  <span className="text-gray-500">,</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-purple-400">skills:</span> 
                  <span className="text-yellow-400">
                    ['Kotlin', 'JavaScript', 'TypeScript', 'React', 'Vue', 'Node.js']
                  </span>
                  <span className="text-gray-500">,</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-purple-400">status:</span> 
                  <span className="text-cyan-400">'Available for opportunities'</span>
                </div>
              </motion.div>
              
              <motion.h1
                className="text-5xl md:text-6xl font-black text-white mt-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                {"}"}
              </motion.h1>
            </div>
          </motion.div>

          {/* Enhanced buttons with better styling */}
          <motion.div
            className="flex flex-wrap gap-4 mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            <motion.button 
              onClick={() => onNavigate(4)}
              className="group relative px-8 py-3 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg font-medium text-white overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity" />
              <span className="relative flex items-center gap-2">
                <Code2 size={18} />
                View Projects
              </span>
            </motion.button>
            
            <motion.button 
              onClick={() => onNavigate(5)}
              className="group px-8 py-3 border border-gray-600 rounded-lg font-medium hover:border-gray-400 hover:bg-gray-800/30 transition-all relative overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative flex items-center gap-2">
                <Mail size={18} />
                Contact Me
              </span>
            </motion.button>
          </motion.div>

          {/* Enhanced social links */}
          <motion.div
            className="flex space-x-6 mt-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            {[
              { Icon: Github, href: "https://github.com/Joshlanuevo", color: "hover:text-purple-400" },
              { Icon: Linkedin, href: "https://www.linkedin.com/in/josh-i-3802ab287/", color: "hover:text-blue-400" },
              { Icon: Mail, href: "mailto:joshlanuevo11@gmail.com", color: "hover:text-green-400" }
            ].map(({ Icon, href, color }, index) => (
              <motion.a
                key={index}
                href={href}
                target="_blank"
                rel="noreferrer"
                className={`p-3 rounded-full bg-gray-800/50 border border-gray-700 text-gray-400 ${color} transition-all duration-300 backdrop-blur-sm`}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon className="w-5 h-5" />
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* Enhanced terminal window */}
        <div className="relative hidden m-5 lg:block">
          <motion.div
            className="w-[450px] h-80 bg-black/90 backdrop-blur-sm rounded-xl border border-gray-700 shadow-2xl overflow-hidden"
            initial={{ opacity: 0, y: 50, rotateY: -15 }}
            animate={{ opacity: 1, y: 0, rotateY: 0 }}
            transition={{ delay: 0.8, duration: 1 }}
          >
            {/* Terminal header with enhanced styling */}
            <div className="flex items-center justify-between p-4 border-b border-gray-700 bg-gray-900/50">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-red-500 rounded-full" />
                <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                <div className="w-3 h-3 bg-green-500 rounded-full" />
              </div>
              <span className="text-xs text-gray-400 font-mono">terminal</span>
              <div className="w-4 h-4" />
            </div>
            
            {/* Terminal content with typing animation */}
            <div className="p-4 font-mono text-sm h-full overflow-hidden">
              <pre className="text-gray-300 whitespace-pre-wrap leading-relaxed">
                {terminalText}
              </pre>
              <motion.div
                className="inline-block w-2 h-4 bg-green-400 ml-1"
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              />
            </div>
          </motion.div>
          
          {/* Terminal glow effect */}
          <div className="absolute inset-0 bg-green-500/5 rounded-xl blur-xl -z-10" />
        </div>
      </div>
    </div>
  );
};

export default Home;