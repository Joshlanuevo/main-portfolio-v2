import React from "react";
import { motion } from "framer-motion";
import { Smartphone, Globe, Database, Code, GitBranch, Wrench } from "lucide-react";

const skillCategories = [
  {
    icon: <Code className="w-6 h-6" />,
    title: "Programming Languages",
    skills: ["Kotlin", "JavaScript", "TypeScript", "Java"]
  },
  {
    icon: <Smartphone className="w-6 h-6" />,
    title: "Android Development",
    skills: ["Jetpack Compose", "Native XML", "Material Design", "ROOM", "Retrofit", "Dagger-Hilt", "MVVM", "Clean Architecture"]
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: "Web Development",
    skills: ["React", "NextJS", "Vue.js", "HTML/CSS", "Bootstrap", "TailwindCSS", "Node.js", "Express.js"]
  },
  {
    icon: <Database className="w-6 h-6" />,
    title: "Backend & Cloud",
    skills: ["REST APIs", "AWS Lambda", "AWS API Gateway", "AWS SES", "AWS EC2", "AWS S3", "Firebase", "MongoDB", "ObjectBox"]
  },
  {
    icon: <GitBranch className="w-6 h-6" />,
    title: "Development Tools",
    skills: ["Git", "GitHub", "Android Studio", "VS Code", "Postman", "NPM"]
  },
  {
    icon: <Wrench className="w-6 h-6" />,
    title: "Core Competencies",
    skills: ["Problem-solving", "Technical Debugging", "Cross-functional Collaboration", "Performance Optimization"]
  }
];

const Skills = () => {
  return (
    <div className="relative w-screen h-screen flex items-center justify-center bg-neutral-950 text-gray-200 overflow-hidden">
      {/* Background glow */}
      <div className="absolute w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-3xl -top-20 -left-20 -z-10" />

      <div className="w-full h-full overflow-y-auto">
        <div className="max-w-6xl mx-auto px-10 py-16">
          {/* Title */}
          <motion.h1
            className="text-5xl font-extrabold tracking-tight text-white text-center mb-16"
            initial={{ y: -40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            My Skills
          </motion.h1>

          {/* Skills Grid */}
          <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                className="bg-neutral-900/50 border border-gray-800 p-8 rounded-lg backdrop-blur-sm hover:border-blue-500 transition"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                {/* Card Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="text-blue-400">{category.icon}</div>
                  <h3 className="text-xl font-bold text-white">{category.title}</h3>
                </div>

                {/* Card Content */}
                <ul className="grid gap-2 text-left">
                  {category.skills.map((skill, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="text-blue-400 text-sm">▹</span>
                      <span className="text-gray-300">{skill}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;