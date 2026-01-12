import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { SectionWrapper } from "../../hoc";
import { projects } from "../../constants";
import { fadeIn } from "../../utils/motion";
import { config } from "../../constants/config";
import { Header } from "../atoms/Header";
import { TProject } from "../../types";

const ProjectCard: React.FC<{ index: number } & TProject> = ({
  index,
  name,
  description,
  tags
}) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.1, 0.75)}
      className="w-full"
    >
      <Tilt
        glareEnable={false}
        tiltEnable
        tiltMaxAngleX={5}
        tiltMaxAngleY={5}
        scale={1.02}
      >
        <div className="group relative w-full cursor-pointer overflow-hidden rounded-xl min-h-[320px] flex flex-col bg-gradient-to-br from-gray-900/90 to-purple-900/20 border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300">
          {/* Content */}
          <div className="relative flex-1 flex flex-col p-5 sm:p-6">
            {/* Project Number Badge */}
            <div className="flex items-center justify-between mb-3 sm:mb-4">
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-lg bg-gradient-to-br from-purple-600 to-blue-600 text-white font-bold text-xs sm:text-sm">
                  {String(index + 1).padStart(2, '0')}
                </div>
              </div>
            </div>

            {/* Project Name */}
            <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-blue-400 transition-all duration-300 line-clamp-2">
              {name}
            </h3>

            {/* Description */}
            <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4 flex-1 line-clamp-4">
              {description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-auto">
              {tags.map((tag) => (
                <span
                  key={tag.name}
                  className={`${tag.color} rounded-full px-2 sm:px-3 py-0.5 sm:py-1 text-[10px] sm:text-xs font-medium border border-purple-500/20`}
                >
                  #{tag.name}
                </span>
              ))}
            </div>
          </div>

          {/* Bottom Accent Line */}
          <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-purple-500 to-blue-500 group-hover:w-full transition-all duration-500" />
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <div className="relative">
      {/* Background Effects */}
      <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl" />

      <div className="relative z-10">
        <Header useMotion={true} {...config.sections.works} />

        {/* Description */}
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 sm:mt-4 text-secondary text-sm sm:text-[17px] max-w-3xl leading-relaxed sm:leading-[30px]"
        >
          {config.sections.works.content}
        </motion.p>

        {/* Projects Grid - 1 col mobile, 2 col tablet, 3 col desktop */}
        <div className="mt-10 sm:mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-7">
          {projects.map((project, index) => (
            <ProjectCard key={`project-${index}`} index={index} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(Works, "projects");
