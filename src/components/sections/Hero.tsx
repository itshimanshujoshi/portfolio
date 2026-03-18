import { styles } from "../../constants/styles";
import { config } from "../../constants/config";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className={`relative mx-auto h-screen w-full overflow-hidden`}>
      {/* Dot Grid Background */}
      <div className="cyber-grid absolute inset-0 opacity-100" />

      {/* Gradient Orbs */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl" />

      {/* Main Content Container - Higher z-index */}
      <div
        className={`absolute inset-0 top-[120px] mx-auto max-w-7xl ${styles.paddingX} flex flex-row items-start gap-5 z-30`}
      >
        {/* Futuristic Side Line */}
        <div className="mt-5 flex flex-col items-center justify-center">
          <motion.div
            className="h-5 w-5 rounded-full bg-gradient-to-br from-teal-500 to-emerald-500"
            animate={{
              scale: [1, 1.2, 1],
              boxShadow: [
                "0 0 0 0 rgba(20, 184, 166, 0.7)",
                "0 0 0 10px rgba(20, 184, 166, 0)",
                "0 0 0 0 rgba(20, 184, 166, 0)"
              ]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <div className="violet-gradient h-40 w-1 sm:h-80 relative" />
        </div>

        {/* Text Content */}
        <div className="relative flex-1 max-w-4xl">

          {/* Availability badge */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 mb-4 px-3 py-1.5 rounded-full border border-emerald-500/40 bg-emerald-500/10 backdrop-blur-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
            </span>
            <span className="text-emerald-400 text-xs font-mono">Available for freelance projects</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            className={`${styles.heroHeadText} text-white relative z-10`}
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block">Hi, I'm{" "}</span>
            <span className="futuristic-text inline-block">
              {config.hero.name}
            </span>
          </motion.h1>

          {/* Typewriter Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-3 sm:mt-4 glass-effect rounded-lg p-3 sm:p-4 border border-teal-500/30 backdrop-blur-xl bg-black/30"
          >
            <p className="text-white-100 text-sm sm:text-base md:text-lg leading-relaxed">
              <span className="text-teal-400 font-mono text-xs sm:text-sm">&gt;_</span>{" "}
              <Typewriter
                words={[
                  "Full Stack Developer with 4+ years of experience",
                  "React.js & TypeScript Specialist",
                  "Vue.js & Nuxt.js Expert",
                  "Building High-Performance Applications",
                  "Redux Toolkit & RTK Query Architect",
                  "Laravel & PHP Backend Developer",
                ]}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={2000}
              />
            </p>
          </motion.div>

          {/* Key Points - Simplified */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-4 sm:mt-6 space-y-1.5 sm:space-y-2"
          >
            {config.hero.p.map((text, index) => (
              <div
                key={index}
                className="flex items-start gap-2 text-white-100 text-xs sm:text-sm md:text-base"
              >
                <span className="text-teal-400 mt-0.5 flex-shrink-0">▹</span>
                <span className="leading-relaxed">{text}</span>
              </div>
            ))}
          </motion.div>

          {/* CTA Buttons + Social */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-6 sm:mt-8 flex items-center gap-3 sm:gap-4 flex-wrap"
          >
            <a href="#resume">
              <button className="px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg font-semibold text-sm sm:text-base text-white bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-700 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-teal-500/50">
                <span className="flex items-center gap-2">
                  View Resume
                  <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </span>
              </button>
            </a>
            <a href="#contact">
              <button className="glass-effect px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg font-semibold text-sm sm:text-base text-white border border-teal-500/50 hover:border-teal-500 transition-all duration-300 transform hover:scale-105 hover:bg-teal-500/10">
                Get In Touch
              </button>
            </a>
            {/* Social Icons */}
            <div className="flex items-center gap-2 ml-1">
              <a href={config.social.github} target="_blank" rel="noopener noreferrer"
                className="p-2 rounded-lg glass-effect border border-teal-500/20 hover:border-teal-500/50 text-gray-400 hover:text-white transition-all duration-300">
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
              </a>
              <a href={config.social.linkedin} target="_blank" rel="noopener noreferrer"
                className="p-2 rounded-lg glass-effect border border-teal-500/20 hover:border-teal-500/50 text-gray-400 hover:text-white transition-all duration-300">
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a href={`mailto:${config.social.email}`}
                className="p-2 rounded-lg glass-effect border border-teal-500/20 hover:border-teal-500/50 text-gray-400 hover:text-white transition-all duration-300">
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
            </div>
          </motion.div>

          {/* Tech Badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-4 sm:mt-6 flex flex-wrap gap-1.5 sm:gap-2"
          >
            {["React", "TypeScript", "Vue.js", "Node.js", "Laravel"].map((tech) => (
              <span
                key={tech}
                className="px-2.5 sm:px-3 py-0.5 sm:py-1 text-[10px] sm:text-xs font-mono rounded-full glass-effect border border-teal-500/30 text-teal-300 backdrop-blur-sm"
              >
                {tech}
              </span>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="xs:bottom-10 absolute bottom-8 flex w-full items-center justify-center z-30"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <a href="#about">
          <div className="flex h-[64px] w-[35px] items-start justify-center rounded-3xl border-2 border-teal-500/50 p-2 hover:border-teal-500 transition-colors bg-black/20 backdrop-blur-sm">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="bg-gradient-to-b from-teal-500 to-emerald-500 mb-1 h-3 w-3 rounded-full"
            />
          </div>
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
