import { motion } from "framer-motion";
import { Code, Users, Zap } from "lucide-react";

const About = () => {
  return (
    <div className="relative w-screen h-screen overflow-y-auto flex flex-col items-center justify-start bg-neutral-950 text-gray-200 px-6 py-12 space-y-12">
      {/* Subtle background circle */}
      <div className="absolute w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-3xl top-20 right-20 -z-10" />

      <div className="max-w-4xl w-full px-10 flex flex-col items-center text-center space-y-8">
        {/* Title */}
        <motion.h1
          className="text-5xl font-extrabold tracking-tight text-white"
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          About Me
        </motion.h1>

        {/* Main Description */}
        <motion.p
          className="text-xl text-gray-400 max-w-3xl leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Android Developer with expertise in building and maintaining native Android apps using 
          Kotlin, Jetpack Compose, and MVVM. Skilled in Clean Architecture, REST API integration, 
          and performance optimization, with contributions to <span className="text-white">3 live production apps </span> 
          including Play Store deployments.
        </motion.p>

        {/* Experience Breakdown */}
        <motion.div
          className="bg-neutral-900/50 border border-gray-800 p-8 rounded-lg backdrop-blur-sm max-w-4xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <h3 className="text-2xl font-bold text-white mb-6">Experience Timeline</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex justify-between items-center gap-x-6">
                <span className="text-gray-300">Frontend Intern</span>
                <span className="text-blue-400 text-sm">1 month</span>
              </div>
              <div className="flex justify-between items-center gap-x-6">
                <span className="text-gray-300">Live700 Software</span>
                <span className="text-blue-400 text-sm">1 year 1 month</span>
              </div>
              <div className="flex justify-between items-center gap-x-6">
                <span className="text-gray-300">Squadzip</span>
                <span className="text-blue-400 text-sm">9 months</span>
              </div>
              <div className="flex justify-between items-center gap-x-6">
                <span className="text-gray-300">Pinoy Travel (Contract)</span>
                <span className="text-blue-400 text-sm">6 months</span>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center space-y-4">
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-400">2.4</div>
                <div className="text-gray-400">Total Years</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400">3</div>
                <div className="text-gray-400">Live Apps</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Additional Info */}
        <motion.p
          className="text-lg text-gray-500 max-w-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
        >
          Additionally experienced in full-stack web development with Node.js, Express, and Vue.js, 
          enabling flexibility in delivering modern, end-to-end software solutions.
        </motion.p>

        {/* Key Highlights */}
        <motion.div
          className="flex flex-wrap gap-8 mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
        >
          <div className="flex items-center gap-3">
            <Code className="w-6 h-6 text-blue-400" />
            <span className="text-gray-300">3 Production Apps</span>
          </div>
          <div className="flex items-center gap-3">
            <Users className="w-6 h-6 text-blue-400" />
            <span className="text-gray-300">Cross-functional Teams</span>
          </div>
          <div className="flex items-center gap-3">
            <Zap className="w-6 h-6 text-blue-400" />
            <span className="text-gray-300">Full-Stack Versatility</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
