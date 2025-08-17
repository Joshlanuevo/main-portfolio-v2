import { motion } from "framer-motion";
import { Code, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "LakbayHub",
    type: "Work Project",
    description:
      "Migrated a legacy PHP booking system to a modern full-stack architecture and developed key features of the travel platform.",
    tech: ["Node.js", "Express.js", "Vue.js", "JavaScript", "PHP", "CodeIgniter", "AWS Lambda"],
    link: "https://www.lakbayhub.com/",
  },
  {
    title: "Squadzip Android App",
    type: "Work Project",
    description:
      "Enhanced app performance and implemented new features in a cross-functional team environment.",
    tech: ["Kotlin", "Jetpack Compose", "Dagger-Hilt", "Room", "Retrofit", "MVVM", "Clean Architecture"],
    link: "https://play.google.com/store/apps/details?id=com.digitalspaceexplorer.squadzip&hl=en",
  },
  {
    title: "XinChat (Live700)",
    type: "Work Project",
    description:
      "Maintained and enhanced a high-performance Android chat application.",
    tech: ["Kotlin", "Native XML", "RxHttp", "ObjectBox", "MVVM Architecture"],
    link: "https://play.google.com/store/apps/details?id=id.web.aplikasiku.xinchat&hl=en",
  },
  {
    title: "ToDo App",
    type: "Personal Project",
    description:
      "Android task management app with Clean Architecture for productivity tracking.",
    tech: ["Kotlin", "Jetpack Compose", "Room", "MVVM"],
    date: "Jan–Feb 2025"
  },
  {
    title: "Tasks App",
    type: "Personal Project",
    description:
      "CRUD productivity app with image picker integration and offline persistence.",
    tech: ["Kotlin", "XML", "Room", "MVVM"],
    date: "Jan–Apr 2024"
  },
  {
    title: "Online Portfolio",
    type: "Personal Project",
    description:
      "Personal website to showcase development skills and projects.",
    tech: ["React", "TypeScript", "TailwindCSS", "React-tsparticles", "React-simple-typewriter"],
    date: "Jan 2023–Present"
  },
];

const Projects = () => {
  return (
    <div className="relative w-screen h-screen flex items-center justify-center bg-neutral-950 text-gray-200 overflow-hidden">
      {/* Subtle background circle */}
      <div className="absolute w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-3xl -bottom-40 -left-40 -z-10" />

      <div className="w-full h-full overflow-y-auto">
        <div className="max-w-6xl mx-auto px-10 py-16">
          {/* Title */}
          <motion.h2
            className="text-5xl font-extrabold tracking-tight text-white text-center mb-16"
            initial={{ y: -40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            Projects
          </motion.h2>

          {/* Projects Grid */}
          <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pb-20">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="bg-neutral-900/50 border border-gray-800 p-6 rounded-lg backdrop-blur-sm group hover:border-gray-600 transition-all duration-300"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <Code size={20} className="text-blue-400" />
                  <h3 className="text-xl font-bold text-white">{project.title}</h3>
                </div>
                
                <p className="text-sm text-blue-400 font-mono mb-4">
                  {project.type}
                  {project.date && ` • ${project.date}`}
                </p>
                
                <p className="text-gray-400 mb-6 leading-relaxed">{project.description}</p>
                
                {/* Tech Stack */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="bg-neutral-800/80 border border-gray-700 px-3 py-1 rounded-md text-xs text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Links */}
                {project.link && (
                  <div className="flex gap-4">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white transition-colors duration-200"
                      title="Live Demo"
                    >
                      <ExternalLink size={18} />
                    </a>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;