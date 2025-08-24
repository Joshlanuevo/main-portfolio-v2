import { motion } from "framer-motion";
import { Code, ExternalLink, Calendar, Smartphone, Globe, Briefcase, Star, Zap } from "lucide-react";

const projects = [
  {
    title: "LakbayHub",
    type: "Work Project",
    category: "Full Stack",
    description: "Migrated a legacy PHP booking system to a modern full-stack architecture and developed key features of the travel platform.",
    longDescription: "Led the complete architectural transformation of a travel booking platform, modernizing the entire tech stack while maintaining business continuity.",
    tech: ["Node.js", "Express.js", "Vue.js", "JavaScript", "PHP", "CodeIgniter", "AWS Lambda"],
    link: "https://www.lakbayhub.com/",
    status: "Live Production",
    icon: <Globe className="w-5 h-5" />,
    color: "bg-blue-500",
    borderColor: "border-blue-500",
    textColor: "text-blue-400",
    bgAccent: "bg-blue-500/10",
    highlights: ["Legacy Migration", "AWS Serverless", "Full Stack Development"],
    impact: "Modernized entire platform architecture"
  },
  {
    title: "Squadzip Android App",
    type: "Work Project", 
    category: "Android",
    description: "Enhanced app performance and implemented new features in a cross-functional team environment.",
    longDescription: "Contributed to performance optimization and feature development for a live Android application with focus on user experience improvements.",
    tech: ["Kotlin", "Jetpack Compose", "Dagger-Hilt", "Room", "Retrofit", "MVVM", "Clean Architecture"],
    link: "https://play.google.com/store/apps/details?id=com.digitalspaceexplorer.squadzip&hl=en",
    status: "Live on Play Store",
    icon: <Smartphone className="w-5 h-5" />,
    color: "bg-green-500",
    borderColor: "border-green-500",
    textColor: "text-green-400",
    bgAccent: "bg-green-500/10",
    highlights: ["Performance Optimization", "Team Collaboration", "Live Production"],
    impact: "Improved app performance and user experience"
  },
  {
    title: "XinChat (Live700)",
    type: "Work Project",
    category: "Android",
    description: "Maintained and enhanced a high-performance Android chat application.",
    longDescription: "Contributed to the development and maintenance of a real-time chat application with focus on performance and user engagement features.",
    tech: ["Kotlin", "Native XML", "RxHttp", "ObjectBox", "MVVM Architecture"],
    link: "https://play.google.com/store/apps/details?id=id.web.aplikasiku.xinchat&hl=en",
    status: "Live on Play Store",
    icon: <Smartphone className="w-5 h-5" />,
    color: "bg-purple-500",
    borderColor: "border-purple-500",
    textColor: "text-purple-400",
    bgAccent: "bg-purple-500/10",
    highlights: ["Real-time Chat", "High Performance", "Live Production"],
    impact: "Enhanced chat functionality and performance"
  },
  {
    title: "ToDo App",
    type: "Personal Project",
    category: "Android",
    description: "Android task management app with Clean Architecture for productivity tracking.",
    longDescription: "A modern task management application built with Clean Architecture principles, featuring intuitive UI and efficient task organization.",
    tech: ["Kotlin", "Jetpack Compose", "Room", "MVVM"],
    date: "Jan–Feb 2025",
    status: "Completed",
    icon: <Code className="w-5 h-5" />,
    color: "bg-orange-500",
    borderColor: "border-orange-500",
    textColor: "text-orange-400",
    bgAccent: "bg-orange-500/10",
    highlights: ["Clean Architecture", "Modern UI", "Personal Project"],
    impact: "Demonstrated clean coding practices"
  },
  {
    title: "Tasks App",
    type: "Personal Project",
    category: "Android",
    description: "CRUD productivity app with image picker integration and offline persistence.",
    longDescription: "A comprehensive task management application with advanced features including image attachments and robust offline capabilities.",
    tech: ["Kotlin", "XML", "Room", "MVVM"],
    date: "Jan–Apr 2024",
    status: "Completed",
    icon: <Code className="w-5 h-5" />,
    color: "bg-indigo-500",
    borderColor: "border-indigo-500",
    textColor: "text-indigo-400",
    bgAccent: "bg-indigo-500/10",
    highlights: ["CRUD Operations", "Image Integration", "Offline Support"],
    impact: "Enhanced mobile development skills"
  },
  {
    title: "Online Portfolio",
    type: "Personal Project",
    category: "Web",
    description: "Personal website to showcase development skills and projects.",
    longDescription: "A modern, interactive portfolio website featuring dynamic animations and responsive design to showcase professional work and skills.",
    tech: ["React", "TypeScript", "TailwindCSS", "React-tsparticles", "React-simple-typewriter"],
    date: "Jan 2023–Present",
    status: "Live & Evolving",
    icon: <Globe className="w-5 h-5" />,
    color: "bg-cyan-500",
    borderColor: "border-cyan-500",
    textColor: "text-cyan-400",
    bgAccent: "bg-cyan-500/10",
    highlights: ["Modern Design", "Interactive UI", "Responsive"],
    impact: "Professional showcase platform"
  },
];

const Projects = () => {
  const workProjects = projects.filter(p => p.type === "Work Project");
  const personalProjects = projects.filter(p => p.type === "Personal Project");

  return (
    <div className="relative w-screen h-screen flex items-center justify-center bg-neutral-950 text-gray-200 overflow-hidden">
      {/* Enhanced background effects */}
      <div className="absolute w-[600px] h-[600px] bg-blue-900/5 rounded-full blur-3xl -bottom-40 -left-40 -z-10" />
      <div className="absolute w-[500px] h-[500px] bg-cyan-900/5 rounded-full blur-3xl -top-40 -right-40 -z-10" />

      {/* Floating code particles */}
      {[...Array(10)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-blue-400/20 font-mono text-xs"
          animate={{
            y: [-20, -60, -20],
            x: [0, Math.random() * 50 - 25, 0],
            opacity: [0.2, 0.6, 0.2],
            rotate: [0, 360],
          }}
          transition={{
            duration: 4 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 3,
          }}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${20 + Math.random() * 60}%`,
          }}
        >
          {['</>', '{}', '[]', '()', '&&', '||'][Math.floor(Math.random() * 6)]}
        </motion.div>
      ))}

      <div className="w-full h-full overflow-y-auto">
        <div className="max-w-7xl mx-auto px-10 py-16">
          {/* Enhanced title */}
          <motion.div
            className="text-center mb-20 relative"
            initial={{ y: -40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="absolute -inset-6 bg-blue-500/5 rounded-2xl blur-xl" />
            <div className="relative">
              <h2 className="text-6xl font-black tracking-tight text-white mb-4">
                Projects
              </h2>
              <motion.div
                className="h-1 w-24 bg-blue-400 rounded-full mx-auto mb-6"
                initial={{ width: 0 }}
                animate={{ width: 96 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              />
              <motion.div
                className="flex items-center justify-center gap-3 text-gray-400 mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <Briefcase size={16} />
                <span className="text-sm">{workProjects.length} Work Projects</span>
                <div className="w-1 h-1 bg-gray-400 rounded-full" />
                <span className="text-sm">{personalProjects.length} Personal Projects</span>
                <Code size={16} />
              </motion.div>
            </div>
          </motion.div>

          {/* Work Projects Section */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <Briefcase className="w-6 h-6 text-blue-400" />
              <h3 className="text-2xl font-bold text-white">Professional Work</h3>
              <div className="flex-1 h-px bg-blue-400/20" />
            </div>

            <div className="grid gap-8 grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 mb-12">
              {workProjects.map((project, index) => (
                <ProjectCard key={index} project={project} index={index} />
              ))}
            </div>
          </motion.div>

          {/* Personal Projects Section */}
          <motion.div
            className="mb-20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <Star className="w-6 h-6 text-purple-400" />
              <h3 className="text-2xl font-bold text-white">Personal Projects</h3>
              <div className="flex-1 h-px bg-purple-400/20" />
            </div>

            <div className="grid gap-8 grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
              {personalProjects.map((project, index) => (
                <ProjectCard key={index} project={project} index={index + workProjects.length} />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      className="group relative"
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      whileHover={{ y: -8 }}
    >
      {/* Card glow effect */}
      <div className={`absolute -inset-4 ${project.bgAccent} rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
      
      <div className="relative bg-neutral-900/50 backdrop-blur-sm border border-gray-800/50 rounded-2xl overflow-hidden group-hover:border-gray-700/50 transition-all duration-300">
        {/* Project header with solid color */}
        <div className={`h-2 ${project.color}`} />
        
        <div className="p-8">
          {/* Title and icon */}
          <div className="flex items-start justify-between gap-4 mb-6">
            <div className="flex items-center gap-3 flex-1">
              <motion.div
                className={`p-3 ${project.bgAccent} ${project.borderColor} border rounded-xl text-white`}
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                {project.icon}
              </motion.div>
              <div>
                <motion.h3
                  className="text-xl font-bold text-white group-hover:text-blue-400 transition-all"
                  whileHover={{ scale: 1.02 }}
                >
                  {project.title}
                </motion.h3>
                <div className="flex items-center gap-2 mt-1">
                  <span className={`px-2 py-1 ${project.bgAccent} ${project.borderColor} border rounded text-xs font-medium ${project.textColor}`}>
                    {project.category}
                  </span>
                </div>
              </div>
            </div>

            {/* Status badge */}
            <motion.div
              className="flex items-center gap-1 px-3 py-1 bg-green-500/20 border border-green-500/30 rounded-full text-xs text-green-400 font-medium"
              whileHover={{ scale: 1.05 }}
            >
              <Zap size={10} />
              {project.status}
            </motion.div>
          </div>

          {/* Project type and date */}
          <div className="flex items-center justify-between mb-4">
            <span className="text-blue-400 font-mono text-sm">{project.type}</span>
            {project.date && (
              <div className="flex items-center gap-1 text-gray-500 text-sm">
                <Calendar size={12} />
                {project.date}
              </div>
            )}
          </div>

          {/* Description */}
          <p className="text-gray-400 mb-6 leading-relaxed group-hover:text-gray-300 transition-colors">
            {project.description}
          </p>

          {/* Impact */}
          <motion.div
            className="mb-6 p-3 bg-gray-800/30 rounded-lg border border-gray-700/30"
            whileHover={{ scale: 1.02 }}
          >
            <div className="flex items-center gap-2 mb-2">
              <Star size={14} className="text-yellow-400" />
              <span className="text-sm text-gray-400 font-medium">Impact</span>
            </div>
            <p className="text-sm text-gray-300">{project.impact}</p>
          </motion.div>

          {/* Tech stack */}
          <div className="mb-6">
            <div className="flex flex-wrap gap-2">
              {project.tech.slice(0, 4).map((tech, i) => (
                <motion.span
                  key={i}
                  className="bg-neutral-800/60 border border-gray-700/50 px-3 py-1 rounded-lg text-xs text-gray-300 hover:bg-neutral-700/60 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 + i * 0.05 }}
                >
                  {tech}
                </motion.span>
              ))}
              {project.tech.length > 4 && (
                <span className="px-3 py-1 text-xs text-gray-500 font-medium">
                  +{project.tech.length - 4} more
                </span>
              )}
            </div>
          </div>

          {/* Highlights */}
          <div className="mb-6">
            <div className="flex flex-wrap gap-2">
              {project.highlights.map((highlight, i) => (
                <motion.span
                  key={i}
                  className={`${project.bgAccent} ${project.borderColor} border px-3 py-1 rounded-lg text-xs font-medium ${project.textColor}`}
                  whileHover={{ scale: 1.05 }}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + i * 0.1 }}
                >
                  {highlight}
                </motion.span>
              ))}
            </div>
          </div>

          {/* Links */}
          {project.link && (
            <motion.div
              className="flex gap-4"
              whileHover={{ scale: 1.02 }}
            >
              <motion.a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-2 px-4 py-2 ${project.color} rounded-lg text-white font-medium transition-all hover:shadow-lg`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ExternalLink size={16} />
                View Live
              </motion.a>
            </motion.div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;