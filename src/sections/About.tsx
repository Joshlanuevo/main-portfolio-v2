import { motion } from "framer-motion";
import { Code, Users, Zap, Calendar, MapPin, Award, Briefcase } from "lucide-react";

const About = () => {
  const experiences = [
    { role: "Frontend Intern", duration: "1 month", company: "Early Career" },
    { role: "Live700 Software", duration: "1 year 1 month", company: "Android Developer" },
    { role: "Squadzip", duration: "9 months", company: "Full Stack Developer" },
    { role: "Pinoy Travel", duration: "6 months", company: "Contract Developer" }
  ];

  const stats = [
    { value: "2.4", label: "Years Experience", icon: Calendar, color: "text-blue-400" },
    { value: "3", label: "Live Apps", icon: Code, color: "text-green-400" },
    { value: "4", label: "Companies", icon: Briefcase, color: "text-purple-400" },
    { value: "100%", label: "Dedication", icon: Award, color: "text-orange-400" }
  ];

  return (
    <div className="relative w-screen h-screen overflow-y-auto flex flex-col items-center justify-start bg-neutral-950 text-gray-200 px-6 py-12">
      {/* Simple background elements */}
      <div className="absolute w-96 h-96 bg-blue-500/5 rounded-full blur-3xl top-20 right-20 -z-10" />
      <div className="absolute w-80 h-80 bg-purple-500/5 rounded-full blur-3xl bottom-20 left-20 -z-10" />

      {/* Floating dots */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-blue-400/30 rounded-full"
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
          style={{
            left: `${15 + Math.random() * 70}%`,
            top: `${25 + Math.random() * 50}%`,
          }}
        />
      ))}

      <div className="max-w-5xl w-full px-10 flex flex-col items-center space-y-12">
        {/* Clean title */}
        <motion.div
          className="text-center"
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-6xl font-black tracking-tight text-white">
            About Me
          </h1>
          <motion.div
            className="mt-3 h-1 w-24 bg-blue-400 rounded-full mx-auto"
            initial={{ width: 0 }}
            animate={{ width: 96 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          />
        </motion.div>

        {/* Main description */}
        <motion.div
          className="max-w-4xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <p className="text-xl text-gray-300 leading-relaxed text-center bg-neutral-900/50 border border-gray-800 rounded-xl p-8">
            Android Developer with expertise in building and maintaining native Android apps using 
            <span className="text-blue-400 font-semibold"> Kotlin</span>, 
            <span className="text-green-400 font-semibold"> Jetpack Compose</span>, and 
            <span className="text-purple-400 font-semibold"> MVVM</span>. Skilled in Clean Architecture, REST API integration, 
            and performance optimization, with contributions to <span className="text-white font-bold">3 live production apps</span> 
            including Play Store deployments.
          </p>
        </motion.div>

        {/* Stats grid */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-4xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="bg-neutral-900 border border-gray-800 p-6 rounded-xl text-center hover:border-gray-700 transition-all"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <stat.icon className={`w-8 h-8 ${stat.color} mx-auto mb-3`} />
              <div className={`text-3xl font-bold ${stat.color} mb-2`}>{stat.value}</div>
              <div className="text-gray-400 text-sm font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Experience timeline */}
        <motion.div
          className="w-full max-w-4xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
        >
          <div className="bg-neutral-900 border border-gray-800 p-8 rounded-2xl">
            <div className="flex items-center gap-3 mb-8">
              <Briefcase className="w-6 h-6 text-blue-400" />
              <h3 className="text-2xl font-bold text-white">Experience Journey</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                {experiences.map((exp, index) => (
                  <motion.div
                    key={index}
                    className="relative group"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.9 + index * 0.1 }}
                    whileHover={{ x: 5 }}
                  >
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="pl-6 py-3 rounded-lg group-hover:bg-gray-800/30 transition-colors">
                      <div className="flex justify-between items-start gap-4 mb-1">
                        <span className="text-gray-200 font-medium">{exp.role}</span>
                        <span className="text-blue-400 text-sm font-mono bg-blue-400/10 px-2 py-1 rounded">
                          {exp.duration}
                        </span>
                      </div>
                      <span className="text-gray-400 text-sm">{exp.company}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              {/* Summary cards */}
              <div className="flex flex-col justify-center space-y-6">
                <motion.div
                  className="text-center p-6 bg-blue-500/10 rounded-xl border border-blue-500/30"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="text-4xl font-black text-blue-400 mb-2">
                    2.4
                  </div>
                  <div className="text-gray-300 font-medium">Years of Growth</div>
                </motion.div>
                
                <motion.div
                  className="text-center p-6 bg-green-500/10 rounded-xl border border-green-500/30"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="text-3xl font-black text-green-400 mb-2">
                    3
                  </div>
                  <div className="text-gray-300 font-medium">Production Apps</div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Additional info */}
        <motion.div
          className="max-w-3xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
        >
          <p className="text-lg text-gray-400 text-center bg-neutral-900/50 border border-gray-800/50 rounded-xl p-6">
            Additionally experienced in full-stack web development with 
            <span className="text-green-400 font-semibold"> Node.js</span>, 
            <span className="text-blue-400 font-semibold"> Express</span>, and 
            <span className="text-purple-400 font-semibold"> Vue.js</span>, 
            enabling flexibility in delivering modern, end-to-end software solutions.
          </p>
        </motion.div>

        {/* Key highlights */}
        <motion.div
          className="flex flex-wrap justify-center gap-6 mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.8 }}
        >
          {[
            { icon: Code, text: "3 Production Apps", color: "text-blue-400", bg: "bg-blue-400/10" },
            { icon: Users, text: "Cross-functional Teams", color: "text-purple-400", bg: "bg-purple-400/10" },
            { icon: Zap, text: "Full-Stack Versatility", color: "text-green-400", bg: "bg-green-400/10" }
          ].map((item, index) => (
            <motion.div
              key={index}
              className="group flex items-center gap-3 px-6 py-3 bg-neutral-900 border border-gray-800 rounded-full hover:border-gray-700 transition-all"
              whileHover={{ scale: 1.05, y: -2 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className={`p-2 rounded-full ${item.bg} group-hover:bg-opacity-30 transition-all`}>
                <item.icon className={`w-4 h-4 ${item.color}`} />
              </div>
              <span className="text-gray-300 font-medium group-hover:text-white transition-colors">
                {item.text}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default About;