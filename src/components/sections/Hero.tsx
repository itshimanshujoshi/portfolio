import { styles } from "../../constants/styles";
import { config } from "../../constants/config";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className={`relative mx-auto h-screen w-full overflow-hidden`}>
      {/* Animated Background Grid */}
      <div className="cyber-grid absolute inset-0 opacity-20" />

      {/* Gradient Orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-600/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

      {/* Main Content Container - Higher z-index */}
      <div
        className={`absolute inset-0 top-[120px] mx-auto max-w-7xl ${styles.paddingX} flex flex-row items-start gap-5 z-30`}
      >
        {/* Futuristic Side Line */}
        <div className="mt-5 flex flex-col items-center justify-center">
          <motion.div
            className="h-5 w-5 rounded-full bg-gradient-to-br from-purple-500 to-blue-500"
            animate={{
              scale: [1, 1.2, 1],
              boxShadow: [
                "0 0 0 0 rgba(99, 102, 241, 0.7)",
                "0 0 0 10px rgba(99, 102, 241, 0)",
                "0 0 0 0 rgba(99, 102, 241, 0)"
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
            className="mt-3 sm:mt-4 glass-effect rounded-lg p-3 sm:p-4 border border-purple-500/30 backdrop-blur-xl bg-black/30"
          >
            <p className="text-white-100 text-sm sm:text-base md:text-lg leading-relaxed">
              <span className="text-purple-400 font-mono text-xs sm:text-sm">&gt;_</span>{" "}
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
                <span className="text-purple-400 mt-0.5 flex-shrink-0">▹</span>
                <span className="leading-relaxed">{text}</span>
              </div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-6 sm:mt-8 flex gap-3 sm:gap-4 flex-wrap"
          >
            <a href="#resume">
              <button className="px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg font-semibold text-sm sm:text-base text-white bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/50">
                <span className="flex items-center gap-2">
                  View Resume
                  <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </span>
              </button>
            </a>
            <a href="#contact">
              <button className="glass-effect px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg font-semibold text-sm sm:text-base text-white border border-purple-500/50 hover:border-purple-500 transition-all duration-300 transform hover:scale-105 hover:bg-purple-500/10">
                Get In Touch
              </button>
            </a>
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
                className="px-2.5 sm:px-3 py-0.5 sm:py-1 text-[10px] sm:text-xs font-mono rounded-full glass-effect border border-purple-500/30 text-purple-300 backdrop-blur-sm"
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
          <div className="flex h-[64px] w-[35px] items-start justify-center rounded-3xl border-2 border-purple-500/50 p-2 hover:border-purple-500 transition-colors bg-black/20 backdrop-blur-sm">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="bg-gradient-to-b from-purple-500 to-blue-500 mb-1 h-3 w-3 rounded-full"
            />
          </div>
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
