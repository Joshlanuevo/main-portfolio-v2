import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, Github, Facebook, Instagram } from "lucide-react";

const contactInfo = [
  {
    icon: <Phone className="w-5 h-5" />,
    label: "Phone",
    value: "09214577200",
    href: "tel:+639214577200"
  },
  {
    icon: <Mail className="w-5 h-5" />,
    label: "Email",
    value: "joshlanuevo11@gmail.com",
    href: "mailto:joshlanuevo11@gmail.com"
  },
  {
    icon: <Linkedin className="w-5 h-5" />,
    label: "LinkedIn",
    value: "LinkedIn Profile",
    href: "https://www.linkedin.com/in/josh-i-3802ab287/"
  },
  {
    icon: <Github className="w-5 h-5" />,
    label: "GitHub",
    value: "GitHub Profile",
    href: "https://github.com/Joshlanuevo"
  },
  {
    icon: <Facebook className="w-5 h-5" />,
    label: "Facebook",
    value: "Facebook Profile",
    href: "https://www.facebook.com/joshivanlanuevo"
  },
  {
    icon: <Instagram className="w-5 h-5" />,
    label: "Instagram",
    value: "@joshlanuevo",
    href: "https://www.instagram.com/joshlanuevo/?next=%2F"
  }
];

const Contact = () => {
  return (
    <div className="relative w-screen h-screen overflow-y-auto flex flex-col items-center justify-start bg-neutral-950 text-gray-200 px-6 py-12 space-y-12">
      {/* Subtle background circle */}
      <div className="absolute w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-3xl -bottom-20 -right-20 -z-10" />

      <div className="max-w-4xl w-full px-10 flex flex-col items-center text-center space-y-12">
        {/* Title */}
        <motion.h1
          className="text-5xl font-extrabold tracking-tight text-white"
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Contact Me
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="text-xl text-gray-400 max-w-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Let's work together to build something amazing. I'm always open to discussing new opportunities 
          and interesting projects.
        </motion.p>

        {/* Contact Cards */}
        <motion.div
          className="grid gap-6 grid-cols-2 md:grid-cols-3 w-full max-w-4xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          {contactInfo.map((contact, index) => (
            <motion.a
              key={index}
              href={contact.href}
              target={contact.href.startsWith('http') ? '_blank' : '_self'}
              rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="bg-neutral-900/50 border border-gray-800 p-6 rounded-lg backdrop-blur-sm hover:border-gray-600 transition-all duration-300 group"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex flex-col items-center space-y-4">
                <div className="text-blue-400 group-hover:text-blue-300 transition-colors">
                  {contact.icon}
                </div>
                <div>
                  <h3 className="font-medium text-white mb-1">{contact.label}</h3>
                  <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                    {contact.value}
                  </p>
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>

        {/* Primary CTA */}
        <motion.div
          className="flex space-x-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
        >
          <a
            href="mailto:joshlanuevo11@gmail.com"
            className="px-8 py-3 bg-blue-600 rounded-lg font-medium hover:bg-blue-500 transition-colors duration-200"
          >
            Send Email
          </a>
          <a
            href="tel:+639214577200"
            className="px-8 py-3 border border-gray-600 rounded-lg font-medium hover:border-gray-400 transition-colors duration-200"
          >
            Call Me
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;