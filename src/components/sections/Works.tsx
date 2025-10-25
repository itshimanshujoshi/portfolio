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
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        glareEnable
        tiltEnable
        tiltMaxAngleX={20}
        tiltMaxAngleY={20}
        glareColor="#aaa6c3"
      >
        <div
          className="bg-tertiary group relative w-full cursor-pointer overflow-hidden rounded-2xl p-6 transition-all duration-300 hover:scale-[1.02] sm:w-[360px] min-h-[280px] flex flex-col"
        >
          {/* Gradient overlay on hover */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#915EFF]/0 to-[#915EFF]/0 group-hover:from-[#915EFF]/10 group-hover:to-transparent transition-all duration-300" />
          
          {/* Content */}
          <div className="relative flex-1 flex flex-col">
            {/* Header with project number */}
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#915EFF]/20 text-[#915EFF] font-bold text-xl">
                  {String(index + 1).padStart(2, '0')}
                </div>
                <div className="h-[2px] w-8 bg-gradient-to-r from-[#915EFF] to-transparent" />
              </div>
            </div>

            {/* Project name */}
            <h3 className="text-[26px] font-bold text-white mb-3 group-hover:text-[#915EFF] transition-colors duration-300">
              {name}
            </h3>

            {/* Description */}
            <p className="text-secondary text-[15px] leading-[24px] flex-1">
              {description}
            </p>

            {/* Tags */}
            <div className="mt-6 flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span
                  key={tag.name}
                  className={`${tag.color} rounded-full bg-white/5 px-3 py-1 text-[13px] font-medium backdrop-blur-sm`}
                >
                  #{tag.name}
                </span>
              ))}
            </div>
          </div>

          {/* Bottom accent line */}
          <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-[#915EFF] to-transparent group-hover:w-full transition-all duration-500" />
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <Header useMotion={true} {...config.sections.works} />

      <div className="flex w-full">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="text-secondary mt-3 max-w-3xl text-[17px] leading-[30px]"
        >
          {config.sections.works.content}
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");