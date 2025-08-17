import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    title: "Full Stack Web Developer (Contract)",
    company: "Pinoy Online Travel Solution Biz",
    location: "Remote",
    date: "Mar 2025 – Sep 2025 (6 months)",
    points: [
      "Led the transition of a legacy PHP CodeIgniter system to a serverless Node.js Express backend",
      "Built interactive, responsive frontend components using Vue.js",
      "Ensured API compatibility and smooth deployment with AWS Lambda",
    ],
  },
  {
    title: "Junior Android Developer",
    company: "Squadzip",
    location: "Remote",
    date: "Aug 2024 – May 2025 (9 months)",
    points: [
      "Focus on bug fixing and feature enhancement to improve app performance and usability",
      "Collaborated in a cross-platform team of 6 developers on feature updates",
      "Worked with senior developers to implement best practices and maintain code quality",
      "Coordinated with API and project management teams for smooth integration",
      "Contributed to Squadzip (Live on PlayStore)",
    ],
  },
  {
    title: "Junior Android Developer",
    company: "Live700 Software Inc.",
    location: "Onsite",
    date: "Sep 2023 – Oct 2024 (1 year 1 month)",
    points: [
      "Modified and maintained a high-performance chat application for Android using Kotlin and Java",
      "Contributed as the Android developer in a cross-functional team of 5 members (2 backend, 1 web, 1 iOS, 1 Android)",
      "Collaborated with back-end developers to integrate APIs, ensuring smooth data flow and real-time updates",
      "Contributed to XinChat (Live on PlayStore)",
    ],
  },
  {
    title: "Frontend Developer Intern",
    company: "Sparklestar International Corporation",
    location: "Remote",
    date: "Aug 2023 – Sep 2023 (1 month)",
    points: [
      "Modified and improved admin dashboard UI for better usability and visual consistency",
      "Fixed broken internal links and navigation paths across multiple admin pages",
      "Assisted in ensuring responsive design and compatibility across different browsers",
      "Collaborated with the development team to implement quick UI fixes and enhancements",
    ],
  },
];

const Experience = () => {
  return (
    <div className="relative w-screen h-screen flex items-center justify-center bg-neutral-950 text-gray-200 overflow-hidden">
      {/* Subtle background circle */}
      <div className="absolute w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-3xl -top-20 -right-20 -z-10" />

      <div className="w-full h-full overflow-y-auto">
        <div className="max-w-4xl mx-auto px-10 py-16">
          {/* Title */}
          <motion.h2
            className="text-5xl font-extrabold tracking-tight text-white text-center mb-16"
            initial={{ y: -40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            Experience
          </motion.h2>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 h-full w-px bg-gray-700"></div>

            <div className="space-y-12 pb-20">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  className="relative pl-20"
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-6 top-3 w-4 h-4 rounded-full bg-blue-600 border-4 border-neutral-950 flex items-center justify-center">
                    <Briefcase size={8} className="text-white" />
                  </div>

                  <div className="bg-neutral-900/50 border border-gray-800 p-8 rounded-lg backdrop-blur-sm">
                    <h3 className="text-2xl font-bold text-white mb-1">{exp.title}</h3>
                    <p className="text-blue-400 font-medium mb-2">
                      {exp.company} • {exp.location}
                    </p>
                    <p className="text-gray-500 text-sm font-mono mb-4">{exp.date}</p>
                    <ul className="space-y-2 text-gray-400">
                      {exp.points.map((point, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-blue-400 mr-3 mt-2">•</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;