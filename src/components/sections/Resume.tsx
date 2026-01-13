import { motion } from "framer-motion";
import { SectionWrapper } from "../../hoc";
import { fadeIn } from "../../utils/motion";
import { Header } from "../atoms/Header";

const Resume = () => {
  const resumePath = "/Himanshu Resume.pdf"; // Place your resume in the public folder

  const highlights = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "4+ Years Experience",
      description: "Full Stack Development"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "30%+ Faster",
      description: "Page Load Times"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      title: "40% Better",
      description: "Application Stability"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: "10+ Projects",
      description: "Delivered Successfully"
    }
  ];

  const skills = {
    "Frontend": ["React.js", "Next.js", "Vue.js", "TypeScript", "Redux Toolkit"],
    "Backend": ["Node.js", "Laravel", "CodeIgniter", "PHP", "GraphQL"],
    "Database": ["MySQL", "MongoDB"],
    "Cloud & Tools": ["AWS", "Git", "JIRA", "CI/CD"]
  };

  return (
    <div className="relative">
      {/* Background Glow */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl" />

      <div className="relative z-10">
        <Header
          useMotion={true}
          p="My Professional Profile"
          h2="Resume & Qualifications"
        />

        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 sm:mt-4 text-secondary text-sm sm:text-[17px] max-w-3xl leading-relaxed sm:leading-[30px]"
        >
          Download my resume to learn more about my professional experience, technical skills, and achievements.
          Perfect for recruiters and hiring managers looking for a skilled Full Stack Developer.
        </motion.p>

        {/* Key Highlights Grid */}
        <div className="mt-8 sm:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {highlights.map((highlight, index) => (
            <motion.div
              key={index}
              variants={fadeIn("up", "spring", index * 0.1, 0.75)}
              className="glass-effect rounded-xl p-4 sm:p-6 border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300 group"
            >
              <div className="text-purple-400 mb-2 sm:mb-3 group-hover:scale-110 transition-transform duration-300">
                {highlight.icon}
              </div>
              <h3 className="text-white font-bold text-base sm:text-lg mb-1">{highlight.title}</h3>
              <p className="text-gray-400 text-xs sm:text-sm">{highlight.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Resume Card */}
        <motion.div
          variants={fadeIn("up", "spring", 0.2, 0.75)}
          className="mt-8 sm:mt-12"
        >
          <div className="glass-effect rounded-2xl p-5 sm:p-8 border border-purple-500/30 mx-auto">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-5 sm:gap-6">
              {/* Left Side - Info */}
              <div className="flex-1 w-full">
                <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 flex-shrink-0 rounded-xl bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-lg sm:text-xl">Himanshu Joshi</h3>
                    <p className="text-gray-400 text-xs sm:text-sm">Full Stack Developer</p>
                  </div>
                </div>

                <p className="text-gray-300 text-xs sm:text-sm mb-3 sm:mb-4 leading-relaxed">
                  Comprehensive resume showcasing 4+ years of experience in Full Stack Development with React.js, Vue.js, TypeScript, Node.js, Laravel, and more.
                </p>

                <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
                  <span className="px-3 py-1 text-xs rounded-full bg-purple-500/10 text-purple-300 border border-purple-500/20">
                    PDF Format
                  </span>
                  <span className="px-3 py-1 text-xs rounded-full bg-blue-500/10 text-blue-300 border border-blue-500/20">
                    Updated Recently
                  </span>
                  <span className="px-3 py-1 text-xs rounded-full bg-green-500/10 text-green-300 border border-green-500/20">
                    ATS Friendly
                  </span>
                </div>
              </div>

              {/* Right Side - Actions */}
              <div className="flex flex-col sm:flex-row md:flex-col gap-3 w-full md:w-auto">
                <a
                  href={resumePath}
                  download="Himanshu_Joshi_Resume.pdf"
                  className="group w-full md:w-auto"
                >
                  <button className="w-full px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg font-semibold text-sm sm:text-base text-white bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/50 flex items-center justify-center gap-2 whitespace-nowrap">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    Download Resume
                  </button>
                </a>

                <a
                  href={resumePath}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group w-full md:w-auto"
                >
                  <button className="w-full px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg font-semibold text-sm sm:text-base text-white glass-effect border border-purple-500/50 hover:border-purple-500 transition-all duration-300 transform hover:scale-105 hover:bg-purple-500/10 flex items-center justify-center gap-2 whitespace-nowrap">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                    View Online
                  </button>
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Skills Overview */}
        <motion.div
          variants={fadeIn("up", "spring", 0.3, 0.75)}
          className="mt-8 sm:mt-12"
        >
          <h3 className="text-white font-bold text-xl sm:text-2xl mb-5 sm:mb-6">Core Competencies</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {Object.entries(skills).map(([category, skillList], index) => (
              <motion.div
                key={category}
                variants={fadeIn("right", "spring", index * 0.1, 0.75)}
                className="glass-effect rounded-xl p-4 sm:p-6 border border-purple-500/20"
              >
                <h4 className="text-purple-400 font-semibold text-base sm:text-lg mb-3 sm:mb-4">{category}</h4>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {skillList.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 sm:px-3 py-1 text-xs sm:text-sm rounded-lg bg-gray-800/50 text-gray-300 border border-gray-700 hover:border-purple-500/50 transition-colors duration-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Contact CTA */}
        <motion.div
          variants={fadeIn("up", "spring", 0.4, 0.75)}
          className="mt-8 sm:mt-12 text-center"
        >
          <div className="glass-effect rounded-xl p-5 sm:p-8 border border-purple-500/20 mx-auto">
            <h3 className="text-white font-bold text-lg sm:text-xl mb-2 sm:mb-3">Interested in Working Together?</h3>
            <p className="text-gray-400 text-sm sm:text-base mb-5 sm:mb-6">
              I'm actively looking for exciting opportunities. Let's discuss how I can contribute to your team.
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 justify-center">
              <a href="#contact" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg font-semibold text-sm sm:text-base text-white bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
                  Get In Touch
                </button>
              </a>
              <a href="https://www.linkedin.com/in/itshimanshujoshi" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg font-semibold text-sm sm:text-base text-white glass-effect border border-purple-500/50 hover:border-purple-500 transition-all duration-300 transform hover:scale-105">
                  LinkedIn Profile
                </button>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SectionWrapper(Resume, "resume");
