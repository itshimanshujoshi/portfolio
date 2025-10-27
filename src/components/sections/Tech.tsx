import { useState } from 'react';
import { technologies } from "../../constants";
import { SectionWrapper } from "../../hoc";

const Tech = () => {
  const [hoveredTech, setHoveredTech] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Frontend", "Backend", "Database", "Tools"];
  
  const filteredTechs = selectedCategory === "All" 
    ? technologies 
    : technologies.filter(tech => tech.category === selectedCategory);

  return (
    <div className="w-full min-h-screen py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-4">
            Tech Stack
          </h2>
          <p className="text-xl text-purple-200">
            Technologies I work with
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-purple-500 text-white shadow-lg shadow-purple-500/50 scale-105"
                  : "bg-white/10 text-white hover:bg-white/20"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Tech Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
          {filteredTechs.map((tech, index) => (
            <div
              key={tech.name}
              onMouseEnter={() => setHoveredTech(tech.name)}
              onMouseLeave={() => setHoveredTech(null)}
              className="group relative"
              style={{
                animation: `fadeIn 0.5s ease-out ${index * 0.05}s both`
              }}
            >
              <div
                className={`relative bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 transition-all duration-300 cursor-pointer ${
                  hoveredTech === tech.name
                    ? "transform -translate-y-2 shadow-2xl shadow-purple-500/30 border-purple-500/50 bg-white/10"
                    : "hover:border-white/20"
                }`}
              >
                {/* Icon Container */}
                <div className="flex items-center justify-center mb-4">
                  <div className="w-16 h-16 rounded-xl bg-white/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <img
                      src={tech.icon}
                      alt={tech.name}
                      className="w-12 h-12 object-contain"
                    />
                  </div>
                </div>

                {/* Tech Name */}
                <h3 className="text-white text-center text-sm font-medium leading-tight">
                  {tech.name}
                </h3>

                {/* Category Badge */}
                <div className="absolute -top-2 -right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="bg-purple-500 text-white text-xs px-2 py-1 rounded-full shadow-lg">
                    {tech.category}
                  </span>
                </div>

                {/* Glow Effect */}
                <div
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 opacity-0 transition-opacity duration-300 -z-10 blur-xl ${
                    hoveredTech === tech.name ? "opacity-100" : ""
                  }`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default  SectionWrapper(Tech, "tech-stack");