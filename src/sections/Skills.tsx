import { motion } from "framer-motion";
import { Smartphone, Globe, Database, Code, GitBranch, Wrench, Star, Zap } from "lucide-react";

const skillCategories = [
  {
    icon: <Code className="w-6 h-6" />,
    title: "Programming Languages",
    skills: [
      { name: "Kotlin", level: 5, color: "text-orange-400" },
      { name: "JavaScript", level: 4, color: "text-yellow-400" },
      { name: "TypeScript", level: 4, color: "text-blue-400" },
      { name: "Java", level: 2, color: "text-red-400" }
    ],
    accentColor: "text-purple-400",
    borderColor: "border-purple-500/30",
    bgHover: "bg-purple-500/5"
  },
  {
    icon: <Smartphone className="w-6 h-6" />,
    title: "Android Development",
    skills: [
      { name: "Jetpack Compose", level: 4, color: "text-green-400" },
      { name: "Native XML", level: 5, color: "text-blue-400" },
      { name: "Material Design", level: 4, color: "text-purple-400" },
      { name: "ROOM", level: 4, color: "text-cyan-400" },
      { name: "Retrofit", level: 4, color: "text-orange-400" },
      { name: "Dagger-Hilt", level: 3, color: "text-red-400" },
      { name: "MVVM", level: 4, color: "text-indigo-400" },
      { name: "Clean Architecture", level: 4, color: "text-pink-400" }
    ],
    accentColor: "text-green-400",
    borderColor: "border-green-500/30",
    bgHover: "bg-green-500/5"
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: "Web Development",
    skills: [
      { name: "React", level: 4, color: "text-cyan-400" },
      { name: "NextJS", level: 3, color: "text-gray-400" },
      { name: "Vue.js", level: 4, color: "text-green-400" },
      { name: "HTML/CSS", level: 5, color: "text-orange-400" },
      { name: "Bootstrap", level: 4, color: "text-purple-400" },
      { name: "TailwindCSS", level: 5, color: "text-blue-400" },
      { name: "Node.js", level: 4, color: "text-green-400" },
      { name: "Express.js", level: 4, color: "text-yellow-400" }
    ],
    accentColor: "text-blue-400",
    borderColor: "border-blue-500/30",
    bgHover: "bg-blue-500/5"
  },
  {
    icon: <Database className="w-6 h-6" />,
    title: "Database & Backend",
    skills: [
      { name: "MongoDB", level: 4, color: "text-green-400" },
      { name: "Firebase", level: 4, color: "text-orange-400" },
      { name: "SQLite", level: 4, color: "text-blue-400" },
      { name: "REST APIs", level: 5, color: "text-purple-400" },
      { name: "GraphQL", level: 2, color: "text-pink-400" }
    ],
    accentColor: "text-cyan-400",
    borderColor: "border-cyan-500/30",
    bgHover: "bg-cyan-500/5"
  },
  {
    icon: <GitBranch className="w-6 h-6" />,
    title: "Tools & Workflow",
    skills: [
      { name: "Git", level: 5, color: "text-orange-400" },
      { name: "Android Studio", level: 5, color: "text-green-400" },
      { name: "VS Code", level: 5, color: "text-blue-400" },
      { name: "Figma", level: 3, color: "text-purple-400" },
      { name: "Postman", level: 4, color: "text-orange-400" }
    ],
    accentColor: "text-orange-400",
    borderColor: "border-orange-500/30",
    bgHover: "bg-orange-500/5"
  },
  {
    icon: <Wrench className="w-6 h-6" />,
    title: "Other Technologies",
    skills: [
      { name: "JWT", level: 4, color: "text-green-400" },
      { name: "WebSocket", level: 3, color: "text-blue-400" },
      { name: "PWA", level: 3, color: "text-purple-400" },
      { name: "Responsive Design", level: 5, color: "text-cyan-400" }
    ],
    accentColor: "text-pink-400",
    borderColor: "border-pink-500/30",
    bgHover: "bg-pink-500/5"
  }
];

const Skills = () => {
  return (
    <div className="relative w-screen h-screen flex items-center justify-center bg-neutral-950 text-gray-200 overflow-hidden">
      {/* Simple background */}
      <div className="absolute w-96 h-96 bg-blue-500/5 rounded-full blur-3xl top-20 left-20 -z-10" />
      <div className="absolute w-80 h-80 bg-purple-500/5 rounded-full blur-3xl bottom-20 right-20 -z-10" />

      {/* Floating elements */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-blue-400/20 rounded-full"
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: 4 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 3,
          }}
          style={{
            left: `${10 + Math.random() * 80}%`,
            top: `${20 + Math.random() * 60}%`,
          }}
        />
      ))}

      <div className="w-full h-full overflow-y-auto">
        <div className="max-w-7xl mx-auto px-10 py-16">
          {/* Title */}
          <motion.div
            className="text-center mb-20"
            initial={{ y: -40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl font-black tracking-tight text-white mb-4">
              My Skills
            </h1>
            <motion.div
              className="h-1 w-24 bg-blue-400 rounded-full mx-auto mb-6"
              initial={{ width: 0 }}
              animate={{ width: 96 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            />
            <motion.div
              className="flex items-center justify-center gap-2 text-gray-400"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              <Zap size={16} />
              <span className="text-sm">Hover over cards to explore skills</span>
              <Zap size={16} />
            </motion.div>
          </motion.div>

          {/* Skills Grid */}
          <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pb-20">
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                className={`group relative bg-neutral-900 border ${category.borderColor} p-8 rounded-2xl transition-all duration-300 hover:scale-105 hover:${category.bgHover} hover:border-opacity-50`}
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -8 }}
              >
                {/* Header */}
                <div className="flex items-center gap-4 mb-8">
                  <div className={`p-3 bg-neutral-800 border border-gray-700 rounded-xl ${category.accentColor} group-hover:bg-neutral-750 transition-colors`}>
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-gray-100 transition-colors">
                    {category.title}
                  </h3>
                </div>

                {/* Skills with star ratings */}
                <div className="space-y-4">
                  {category.skills.map((skill, i) => (
                    <motion.div
                      key={i}
                      className="flex items-center justify-between group-hover:bg-neutral-800/30 p-2 -mx-2 rounded-lg transition-colors"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 + i * 0.05 }}
                    >
                      <span className="text-gray-300 font-medium group-hover:text-gray-200 transition-colors">
                        {skill.name}
                      </span>
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, starIndex) => (
                          <motion.div
                            key={starIndex}
                            whileHover={{ scale: 1.2 }}
                            transition={{ type: "spring", stiffness: 400 }}
                          >
                            <Star
                              size={14}
                              className={`${starIndex < skill.level ? skill.color : "text-gray-600"} transition-all duration-200 hover:brightness-110`}
                              fill={starIndex < skill.level ? "currentColor" : "none"}
                            />
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Skill count indicator */}
                <div className="mt-6 pt-4 border-t border-gray-800 group-hover:border-gray-700 transition-colors">
                  <div className="flex items-center justify-between text-sm text-gray-400">
                    <span>{category.skills.length} skills</span>
                    <span className={`${category.accentColor} font-medium`}>
                      {Math.round(category.skills.reduce((acc, skill) => acc + skill.level, 0) / category.skills.length * 20)}% avg
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;