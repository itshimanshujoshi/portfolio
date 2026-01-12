import { motion } from "framer-motion";

import { experiences } from "../../constants";
import { SectionWrapper } from "../../hoc";
import { Header } from "../atoms/Header";
import { config } from "../../constants/config";
import { fadeIn } from "../../utils/motion";

const Experience = () => {
  const experience = experiences[0]; // Get the single experience

  return (
    <div className="relative">
      {/* Background Effects */}
      <div className="absolute top-1/4 right-1/3 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl" />

      <div className="relative z-10">
        <Header useMotion={true} {...config.sections.experience} />

        {/* Main Experience Card */}
        <motion.div
          variants={fadeIn("up", "spring", 0.1, 0.75)}
          className="mt-10 sm:mt-14"
        >
          <div className="glass-effect rounded-2xl border border-purple-500/30 overflow-hidden max-w-6xl mx-auto">
            {/* Header Section */}
            <div className="bg-gradient-to-r from-purple-900/50 to-blue-900/50 p-6 sm:p-8 border-b border-purple-500/20">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
                {/* Company Logo */}
                <div className="flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-xl bg-white/10 backdrop-blur-sm border border-purple-500/30 flex items-center justify-center p-3 sm:p-4">
                  <img
                    src={experience.icon}
                    alt={experience.companyName}
                    className="w-full h-full object-contain"
                  />
                </div>

                {/* Title and Company */}
                <div className="flex-1">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-1 sm:mb-2">
                    {experience.title}
                  </h3>
                  <p className="text-purple-300 text-base sm:text-lg font-semibold mb-1 sm:mb-2">
                    {experience.companyName}
                  </p>
                  <div className="flex items-center gap-2 text-gray-400 text-xs sm:text-sm">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span>{experience.date}</span>
                  </div>
                </div>

                {/* Duration Badge */}
                <div className="self-start sm:self-center">
                  <div className="px-4 py-2 rounded-lg bg-gradient-to-r from-purple-600/20 to-blue-600/20 border border-purple-500/30">
                    <div className="text-white font-bold text-base sm:text-lg">4+</div>
                    <div className="text-gray-400 text-[10px] sm:text-xs">Years</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Achievements Section */}
            <div className="p-6 sm:p-8">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-1 h-6 bg-gradient-to-b from-purple-500 to-blue-500 rounded-full" />
                <h4 className="text-lg sm:text-xl font-bold text-white">Key Achievements & Responsibilities</h4>
              </div>

              {/* Achievements Grid - 2 columns on tablet/desktop, 1 on mobile */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-5">
                {experience.points.map((point, index) => (
                  <motion.div
                    key={`achievement-${index}`}
                    variants={fadeIn("up", "spring", index * 0.05, 0.5)}
                    className="group flex items-start gap-3 p-3 sm:p-4 rounded-xl bg-gradient-to-br from-gray-900/50 to-purple-900/10 border border-purple-500/10 hover:border-purple-500/30 transition-all duration-300 hover:bg-purple-900/20"
                  >
                    {/* Index Badge */}
                    <div className="flex-shrink-0 w-6 h-6 sm:w-7 sm:h-7 rounded-lg bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center text-white font-bold text-xs sm:text-sm">
                      {String(index + 1).padStart(2, '0')}
                    </div>

                    {/* Achievement Text */}
                    <p className="text-gray-300 text-xs sm:text-sm leading-relaxed flex-1 group-hover:text-white transition-colors duration-300">
                      {point}
                    </p>

                    {/* Checkmark Icon */}
                    <div className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Tech Stack Section */}
              <div className="mt-8 pt-6 border-t border-purple-500/20">
                <h5 className="text-sm sm:text-base font-semibold text-gray-400 mb-4">Technologies & Tools Used</h5>
                <div className="flex flex-wrap gap-2">
                  {["React.js", "Redux Toolkit", "TypeScript", "RTK Query", "GraphQL", "REST APIs", "MySQL", "JWT", "SSR", "Agile/Scrum"].map((tech, index) => (
                    <motion.span
                      key={tech}
                      variants={fadeIn("up", "spring", index * 0.05, 0.3)}
                      className="px-3 py-1.5 text-xs sm:text-sm rounded-lg bg-purple-500/10 text-purple-300 border border-purple-500/20 hover:border-purple-500/50 hover:bg-purple-500/20 transition-all duration-200"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Optional: Stats Summary */}
        <motion.div
          variants={fadeIn("up", "spring", 0.3, 0.75)}
          className="mt-8 sm:mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto"
        >
          {[
            { label: "Performance Boost", value: "30%+" },
            { label: "Stability Improvement", value: "40%+" },
            { label: "Manual Effort Reduction", value: "60%+" },
            { label: "Query Optimization", value: "25%+" }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              variants={fadeIn("up", "spring", 0.1 * index, 0.5)}
              className="glass-effect rounded-xl p-4 sm:p-5 border border-purple-500/20 text-center hover:border-purple-500/40 transition-all duration-300"
            >
              <div className="text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 mb-1 sm:mb-2">
                {stat.value}
              </div>
              <div className="text-[10px] sm:text-xs text-gray-400 leading-tight">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default SectionWrapper(Experience, "work");
