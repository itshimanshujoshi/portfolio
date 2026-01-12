import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { services } from "../../constants";
import { SectionWrapper } from "../../hoc";
import { fadeIn } from "../../utils/motion";
import { config } from "../../constants/config";
import { Header } from "../atoms/Header";

interface IServiceCard {
  index: number;
  title: string;
  icon: string;
}

const ServiceCard: React.FC<IServiceCard> = ({ index, title, icon }) => (
  <Tilt
    glareEnable
    tiltEnable
    tiltMaxAngleX={15}
    tiltMaxAngleY={15}
    glareColor="#6366f1"
    glareMaxOpacity={0.3}
    scale={1.05}
  >
    <motion.div
      variants={fadeIn("right", "spring", index * 0.15, 0.75)}
      className="w-full max-w-[280px] min-w-[250px]"
    >
      <div className="relative group">
        {/* Main Card */}
        <div className="glass-effect rounded-2xl p-4 sm:p-6 border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300 min-h-[250px] sm:min-h-[300px] flex flex-col items-center justify-center relative overflow-hidden">
          {/* Holographic Gradient Background on Hover */}
          <div className="absolute inset-0 holographic-gradient opacity-0 group-hover:opacity-10 transition-opacity duration-500" />

          {/* Corner Decorations */}
          <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-purple-500/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-blue-500/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          {/* Icon Container with Floating Effect */}
          <motion.div
            className="relative w-16 h-16 sm:w-24 sm:h-24 mb-4 sm:mb-6"
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: index * 0.2
            }}
          >
            {/* Glow Effect Behind Icon */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full blur-xl opacity-50 group-hover:opacity-70 transition-opacity duration-300" />

            {/* Icon Background */}
            <div className="relative w-full h-full rounded-2xl bg-gradient-to-br from-purple-900/50 to-blue-900/50 p-4 flex items-center justify-center border border-purple-500/30 group-hover:border-purple-500/70 transition-all duration-300">
              <img
                src={icon}
                alt={title}
                className="w-full h-full object-contain filter group-hover:drop-shadow-[0_0_10px_rgba(99,102,241,0.8)] transition-all duration-300"
              />
            </div>

            {/* Rotating Border Effect */}
            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{
              background: 'linear-gradient(45deg, #667eea, #764ba2, transparent, transparent)',
              animation: 'spin 3s linear infinite',
            }} />
          </motion.div>

          {/* Title */}
          <h3 className="text-center text-base sm:text-lg font-bold text-white leading-tight relative z-10 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-blue-400 transition-all duration-300 px-2">
            {title}
          </h3>

          {/* Index Number */}
          <div className="absolute top-3 right-3 sm:top-4 sm:right-4 text-purple-500/30 font-bold text-2xl sm:text-4xl group-hover:text-purple-500/50 transition-colors duration-300">
            0{index + 1}
          </div>

          {/* Particle Effect on Hover */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-purple-400 rounded-full"
                style={{
                  top: `${20 + i * 30}%`,
                  left: `${10 + i * 30}%`,
                }}
                animate={{
                  scale: [0, 1, 0],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.3,
                }}
              />
            ))}
          </div>
        </div>

        {/* Glow Effect Below Card */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-purple-600/20 to-blue-600/20 blur-2xl rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4" />
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <div className="relative">
      {/* Background Effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl" />

      <div className="relative z-10">
        <Header useMotion={true} {...config.sections.about} />

        {/* Description with Futuristic Box */}
        <motion.div
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-6 relative"
        >
          {/* Corner Accents */}
          <div className="absolute -top-2 -left-2 w-12 h-12 border-t-2 border-l-2 border-purple-500" />
          <div className="absolute -bottom-2 -right-2 w-12 h-12 border-b-2 border-r-2 border-blue-500" />

          {/* Content Box */}
          <div className="glass-effect rounded-xl p-6 md:p-8 border border-purple-500/30 max-w-4xl relative overflow-hidden">
            {/* Animated Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="cyber-grid w-full h-full" />
            </div>

            <p className="text-secondary text-sm sm:text-[17px] leading-relaxed sm:leading-[30px] relative z-10">
              {config.sections.about.content}
            </p>

            {/* Accent Line */}
            <div className="mt-4 h-0.5 w-24 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full" />

            {/* Stats Grid */}
            <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
              {[
                { value: "4+", label: "Years Exp" },
                { value: "30%", label: "Faster Load" },
                { value: "40%", label: "Stability ↑" },
                { value: "10+", label: "Projects" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="glass-effect rounded-lg p-2 sm:p-3 border border-purple-500/20 text-center hover:border-purple-500/50 transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <div className="text-xl sm:text-2xl font-bold futuristic-text">{stat.value}</div>
                  <div className="text-[10px] sm:text-xs text-gray-400 mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Service Cards Grid */}
        <div className="mt-12 sm:mt-20 flex flex-wrap gap-6 sm:gap-10 justify-center">
          {services.map((service, index) => (
            <ServiceCard key={service.title} index={index} {...service} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(About, "about");
