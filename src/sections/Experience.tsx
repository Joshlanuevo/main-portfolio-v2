import { motion } from "framer-motion";
import { Briefcase, MapPin, Calendar, ExternalLink, Code, Users, Zap } from "lucide-react";

const experiences = [
  {
    title: "Full Stack Web Developer (Contract)",
    company: "Pinoy Online Travel Solution Biz",
    location: "Remote",
    date: "Mar 2025 – Sep 2025",
    duration: "6 months",
    type: "Contract",
    accentColor: "text-blue-400",
    borderColor: "border-blue-500/30",  
    bgHover: "bg-blue-500/5",
    dotColor: "bg-blue-400",
    points: [
      "Led the transition of a legacy PHP CodeIgniter system to a serverless Node.js Express backend",
      "Built interactive, responsive frontend components using Vue.js",
      "Ensured API compatibility and smooth deployment with AWS Lambda",
    ],
    tech: ["Node.js", "Express.js", "Vue.js", "AWS Lambda", "PHP", "CodeIgniter"],
    achievements: ["Legacy System Migration", "Serverless Architecture", "Full Stack Development"]
  },
  {
    title: "Junior Android Developer",
    company: "Squadzip",
    location: "Remote",
    date: "Aug 2024 – May 2025",
    duration: "9 months",
    type: "Full-time",
    accentColor: "text-green-400",
    borderColor: "border-green-500/30",
    bgHover: "bg-green-500/5",
    dotColor: "bg-green-400",
    points: [
      "Focus on bug fixing and feature enhancement to improve app performance and usability",
      "Collaborated in a cross-platform team of 6 developers on feature updates",
      "Worked with senior developers to implement best practices and maintain code quality",
      "Coordinated with API and project management teams for smooth integration",
      "Contributed to Squadzip (Live on PlayStore)",
    ],
    tech: ["Kotlin", "Jetpack Compose", "MVVM", "Clean Architecture", "Retrofit"],
    achievements: ["Live App Contribution", "Cross-platform Team", "Performance Optimization"],
    link: "https://play.google.com/store/apps/details?id=com.digitalspaceexplorer.squadzip&hl=en"
  },
  {
    title: "Junior Android Developer",
    company: "Live700 Software Inc.",
    location: "Onsite",
    date: "Sep 2023 – Oct 2024",
    duration: "1 year 1 month",
    type: "Full-time",
    accentColor: "text-purple-400",
    borderColor: "border-purple-500/30",
    bgHover: "bg-purple-500/5",
    dotColor: "bg-purple-400",
    points: [
      "Modified and maintained a high-performance chat application for Android using Kotlin and Java",
      "Contributed as the Android developer in a cross-functional team of 5 members (2 backend, 1 web, 1 iOS, 1 Android)",
      "Collaborated with back-end developers to integrate APIs, ensuring smooth data flow and real-time updates",
      "Contributed to XinChat (Live on PlayStore)",
    ],
    tech: ["Kotlin", "Java", "Native XML", "RxHttp", "ObjectBox", "MVVM"],
    achievements: ["Chat Application", "Cross-functional Team", "Real-time Features"],
    link: "https://play.google.com/store/apps/details?id=id.web.aplikasiku.xinchat&hl=en"
  },
  {
    title: "Frontend Developer Intern",
    company: "Sparklestar International Corporation",
    location: "Remote",
    date: "Aug 2023 – Sep 2023",
    duration: "1 month",
    type: "Internship",
    accentColor: "text-orange-400",
    borderColor: "border-orange-500/30",
    bgHover: "bg-orange-500/5",
    dotColor: "bg-orange-400",
    points: [
      "Modified and improved admin dashboard UI for better usability and visual consistency",
      "Fixed broken internal links and navigation paths across multiple admin pages",
      "Assisted in ensuring responsive design and compatibility across different browsers",
      "Collaborated with the development team to implement quick UI fixes and enhancements",
    ],
    tech: ["HTML", "CSS", "JavaScript", "Bootstrap", "UI/UX"],
    achievements: ["UI Enhancement", "Cross-browser Compatibility", "Team Collaboration"]
  },
];

const Experience = () => {
  return (
    <div className="relative w-screen h-screen flex items-center justify-center bg-neutral-950 text-gray-200 overflow-hidden">
      {/* Simple background */}
      <div className="absolute w-96 h-96 bg-blue-500/5 rounded-full blur-3xl top-20 right-20 -z-10" />
      <div className="absolute w-80 h-80 bg-purple-500/5 rounded-full blur-3xl bottom-20 left-20 -z-10" />

      {/* Floating elements */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-blue-400/20 rounded-full"
          animate={{
            y: [-15, -40, -15],
            opacity: [0.2, 0.6, 0.2],
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

      <div className="w-full h-full overflow-y-auto">
        <div className="max-w-6xl mx-auto px-10 py-16">
          {/* Title */}
          <motion.div
            className="text-center mb-20"
            initial={{ y: -40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-6xl font-black tracking-tight text-white mb-4">
              Experience
            </h2>
            <motion.div
              className="h-1 w-24 bg-blue-400 rounded-full mx-auto mb-6"
              initial={{ width: 0 }}
              animate={{ width: 96 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            />
            <motion.div
              className="flex items-center justify-center gap-3 text-gray-400"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              <Calendar size={16} />
              <span className="text-sm">2.4 years of professional development</span>
              <Briefcase size={16} />
            </motion.div>
          </motion.div>

          {/* Timeline */}
          <div className="relative max-w-5xl mx-auto">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 h-full w-px bg-blue-400/30"></div>
            
            <div className="space-y-16 pb-20">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  className="relative pl-20 group"
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.2, duration: 0.8 }}
                  whileHover={{ x: 10 }}
                >
                  {/* Timeline dot */}
                  <motion.div
                    className={`absolute left-6 top-6 w-6 h-6 rounded-full ${exp.dotColor} border-4 border-neutral-950 flex items-center justify-center shadow-lg`}
                    whileHover={{ scale: 1.2 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <Briefcase size={12} className="text-white" />
                  </motion.div>

                  {/* Experience card */}
                  <motion.div
                    className="relative group/card"
                    whileHover={{ y: -8 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className={`bg-neutral-900 border ${exp.borderColor} p-8 rounded-2xl hover:${exp.bgHover} hover:border-opacity-50 transition-all duration-300`}>
                      {/* Header */}
                      <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                        <div className="flex-1">
                          <motion.h3
                            className="text-2xl font-bold text-white mb-2 group-hover/card:text-gray-100 transition-colors"
                            whileHover={{ scale: 1.02 }}
                          >
                            {exp.title}
                          </motion.h3>
                          <div className={`flex items-center gap-3 ${exp.accentColor} font-medium mb-2`}>
                            <span>{exp.company}</span>
                            {exp.link && (
                              <motion.a
                                href={exp.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-1 rounded-full hover:bg-current hover:bg-opacity-20 transition-colors"
                                whileHover={{ scale: 1.1 }}
                              >
                                <ExternalLink size={14} />
                              </motion.a>
                            )}
                          </div>
                          <div className="flex items-center gap-4 text-gray-500 text-sm">
                            <div className="flex items-center gap-1">
                              <MapPin size={14} />
                              {exp.location}
                            </div>
                            <div className="flex items-center gap-1">
                              <Calendar size={14} />
                              {exp.date}
                            </div>
                          </div>
                        </div>
                        
                        {/* Type badge */}
                        <motion.div
                          className={`px-4 py-2 ${exp.accentColor} bg-current bg-opacity-10 border border-current rounded-full text-sm font-medium`}
                          whileHover={{ scale: 1.05 }}
                        >
                          <h2 className="text-white">
                            {exp.type}
                          </h2>
                        </motion.div>
                      </div>

                      {/* Duration highlight */}
                      <motion.div
                        className="inline-flex items-center gap-2 px-3 py-1 bg-gray-800/50 rounded-full text-sm text-gray-300 mb-6"
                        whileHover={{ scale: 1.05 }}
                      >
                        <Zap size={12} />
                        {exp.duration}
                      </motion.div>

                      {/* Experience points */}
                      <div className="mb-6">
                        <ul className="space-y-3">
                          {exp.points.map((point, i) => (
                            <motion.li
                              key={i}
                              className="flex items-start gap-3 text-gray-400 group-hover/card:text-gray-300 transition-colors"
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.2 + i * 0.1 }}
                            >
                              <div className={`w-1.5 h-1.5 ${exp.dotColor} rounded-full mt-2 flex-shrink-0`} />
                              <span className="leading-relaxed">{point}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>

                      {/* Tech stack */}
                      <div className="mb-4">
                        <div className="flex items-center gap-2 mb-3">
                          <Code size={16} className="text-gray-400" />
                          <span className="text-sm text-gray-500 font-medium">Tech Stack</span>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {exp.tech.map((tech, i) => (
                            <motion.span
                              key={i}
                              className="bg-neutral-800 border border-gray-700 px-3 py-1 rounded-lg text-xs text-gray-300 hover:bg-neutral-700 hover:border-gray-600 transition-colors"
                              whileHover={{ scale: 1.05 }}
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: index * 0.2 + i * 0.05 }}
                            >
                              {tech}
                            </motion.span>
                          ))}
                        </div>
                      </div>

                      {/* Achievements */}
                      <div>
                        <div className="flex items-center gap-2 mb-3">
                          <Users size={16} className="text-gray-400" />
                          <span className="text-sm text-gray-500 font-medium">Key Achievements</span>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {exp.achievements.map((achievement, i) => (
                            <motion.span
                              key={i}
                              className={`${exp.accentColor} bg-current bg-opacity-10 border border-current px-3 py-1 rounded-lg text-xs font-medium`}
                              whileHover={{ scale: 1.05 }}
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: index * 0.2 + i * 0.1 }}
                            >
                              <h1 className="text-white">
                                {achievement}
                              </h1>
                            </motion.span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
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