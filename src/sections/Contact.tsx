import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, Github, Facebook, Instagram, MessageCircle, User, Zap } from "lucide-react";

const contactInfo = [
  {
    icon: <Phone className="w-5 h-5" />,
    label: "Phone",
    value: "09214577200",
    href: "tel:+639214577200",
    color: "text-blue-400",
    bgAccent: "bg-blue-500/10",
    borderColor: "border-blue-500/30",
    hoverBg: "hover:bg-blue-500/5",
  },
  {
    icon: <Mail className="w-5 h-5" />,
    label: "Email",
    value: "joshlanuevo11@gmail.com",
    href: "mailto:joshlanuevo11@gmail.com",
    color: "text-green-400",
    bgAccent: "bg-green-500/10",
    borderColor: "border-green-500/30",
    hoverBg: "hover:bg-green-500/5",
  },
  {
    icon: <Linkedin className="w-5 h-5" />,
    label: "LinkedIn",
    value: "LinkedIn Profile",
    href: "https://www.linkedin.com/in/josh-i-3802ab287/",
    color: "text-purple-400",
    bgAccent: "bg-purple-500/10",
    borderColor: "border-purple-500/30",
    hoverBg: "hover:bg-purple-500/5",
  },
  {
    icon: <Github className="w-5 h-5" />,
    label: "GitHub",
    value: "GitHub Profile",
    href: "https://github.com/Joshlanuevo",
    color: "text-orange-400",
    bgAccent: "bg-orange-500/10",
    borderColor: "border-orange-500/30",
    hoverBg: "hover:bg-orange-500/5",
  },
  {
    icon: <Facebook className="w-5 h-5" />,
    label: "Facebook",
    value: "Facebook Profile",
    href: "https://www.facebook.com/joshivanlanuevo",
    color: "text-cyan-400",
    bgAccent: "bg-cyan-500/10",
    borderColor: "border-cyan-500/30",
    hoverBg: "hover:bg-cyan-500/5",
  },
  {
    icon: <Instagram className="w-5 h-5" />,
    label: "Instagram",
    value: "@joshlanuevo",
    href: "https://www.instagram.com/joshlanuevo/?next=%2F",
    color: "text-pink-400",
    bgAccent: "bg-pink-500/10",
    borderColor: "border-pink-500/30",
    hoverBg: "hover:bg-pink-500/5",
  },
];

const Contact = () => {
  return (
    <div className="relative w-screen h-screen flex items-center justify-center bg-neutral-950 text-gray-200 overflow-hidden">
      {/* Enhanced background effects */}
      <div className="absolute w-[600px] h-[600px] bg-blue-900/5 rounded-full blur-3xl -bottom-40 -left-40 -z-10" />
      <div className="absolute w-[500px] h-[500px] bg-purple-900/5 rounded-full blur-3xl -top-40 -right-40 -z-10" />

      {/* Floating contact particles */}
      {[...Array(8)].map((_, i) => (
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
          {['@', '#', '&', '*', '+', '%'][Math.floor(Math.random() * 6)]}
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
                Contact Me
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
                <MessageCircle size={16} />
                <span className="text-sm">Let's connect and build something amazing</span>
                <User size={16} />
              </motion.div>
            </div>
          </motion.div>

          {/* Description */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Let's work together to build something amazing. I'm always open to discussing new opportunities 
              and interesting projects.
            </p>
          </motion.div>

          {/* Contact Cards */}
          <motion.div
            className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            {contactInfo.map((contact, index) => (
              <motion.div
                key={index}
                className="group relative"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -8 }}
              >
                {/* Card glow effect */}
                <div className={`absolute -inset-4 ${contact.bgAccent} rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                <a
                  href={contact.href}
                  target={contact.href.startsWith('http') ? '_blank' : '_self'}
                  rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className={`relative block bg-neutral-900/50 backdrop-blur-sm border ${contact.borderColor} rounded-2xl overflow-hidden ${contact.hoverBg} hover:border-opacity-50 transition-all duration-300`}
                >
                  {/* Accent line */}
                  <div className={`h-1 bg-blue-500`} />
                  
                  <div className="p-8">
                    {/* Icon and label */}
                    <div className="flex items-center gap-4 mb-6">
                      <motion.div
                        className={`p-3 ${contact.bgAccent} ${contact.borderColor} border rounded-xl text-white`}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 400 }}
                      >
                        {contact.icon}
                      </motion.div>
                      <div>
                        <motion.h3
                          className="text-xl font-bold text-white group-hover:text-blue-400 transition-all"
                          whileHover={{ scale: 1.02 }}
                        >
                          {contact.label}
                        </motion.h3>
                      </div>
                    </div>

                    {/* Contact value */}
                    <div className="mb-6">
                      <p className="text-gray-400 group-hover:text-gray-300 transition-colors leading-relaxed break-words">
                        {contact.value}
                      </p>
                    </div>

                    {/* Status indicator */}
                    <motion.div
                      className="inline-flex items-center gap-1 px-3 py-1 bg-green-500/20 border border-green-500/30 rounded-full text-xs text-green-400 font-medium"
                      whileHover={{ scale: 1.05 }}
                    >
                      <Zap size={10} />
                      Available
                    </motion.div>
                  </div>
                </a>
              </motion.div>
            ))}
          </motion.div>

          {/* Primary CTA Section */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            <div className="flex items-center gap-3 justify-center mb-8">
              <MessageCircle className="w-6 h-6 text-blue-400" />
              <h3 className="text-2xl font-bold text-white">Ready to Connect?</h3>
              <div className="flex-1 h-px bg-blue-400/20 max-w-32" />
            </div>

            <div className="flex flex-wrap gap-4 justify-center">
              <motion.a
                href="mailto:joshlanuevo11@gmail.com"
                className="flex items-center gap-2 px-6 py-3 bg-blue-500 rounded-lg text-white font-medium hover:bg-blue-600 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail size={16} />
                Send Email
              </motion.a>
              
              <motion.a
                href="tel:+639214577200"
                className="flex items-center gap-2 px-6 py-3 bg-neutral-800 border border-gray-700 rounded-lg text-gray-300 font-medium hover:bg-neutral-700 hover:border-gray-600 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Phone size={16} />
                Call Me
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;