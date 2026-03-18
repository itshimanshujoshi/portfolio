import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import { styles } from "../../constants/styles";
import { navLinks } from "../../constants";
import { menu, close } from "../../assets";
import { config } from "../../constants/config";

const Navbar = () => {
  const [active, setActive] = useState<string | null>();
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
        setActive("");
      }
    };

    window.addEventListener("scroll", handleScroll);

    const navbarHighlighter = () => {
      const sections = document.querySelectorAll("section[id]");

      sections.forEach((current) => {
        const sectionId = current.getAttribute("id");
        // @ts-ignore
        const sectionHeight = current.offsetHeight;
        const sectionTop =
          current.getBoundingClientRect().top - sectionHeight * 0.2;

        if (sectionTop < 0 && sectionTop + sectionHeight > 0) {
          setActive(sectionId);
        }
      });
    };

    window.addEventListener("scroll", navbarHighlighter);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("scroll", navbarHighlighter);
    };
  }, []);

  return (
    <nav
      className={`${
        styles.paddingX
      } fixed top-0 z-20 flex w-full items-center py-5 transition-all duration-300 ${
        scrolled
          ? "glass-effect border-b border-teal-500/30 backdrop-blur-xl shadow-lg shadow-teal-500/10"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between">
        {/* Logo/Brand */}
        <Link
          to="/"
          className="flex items-center gap-2 group"
          onClick={() => {
            window.scrollTo(0, 0);
          }}
        >
          {/* Futuristic Logo Container */}
          <motion.div
            className="relative"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {/* Animated Border */}
            <div className="absolute inset-0 bg-gradient-to-r from-teal-600 to-emerald-600 rounded-lg opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-300" />

            {/* Logo Circle */}
            <div className="relative flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-teal-600 to-emerald-600 shadow-lg shadow-teal-500/30 group-hover:shadow-teal-500/50 transition-all duration-300">
              <span className="text-white font-bold text-xl">H</span>
            </div>
          </motion.div>

          {/* Brand Text */}
          <p className="flex cursor-pointer text-[18px] font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-teal-400 group-hover:to-emerald-400 transition-all duration-300">
            {config.html.title}
          </p>

          {/* Decorative Line */}
          <motion.div
            className="h-[2px] bg-gradient-to-r from-teal-500 to-transparent"
            initial={{ width: 0 }}
            animate={{ width: scrolled ? 0 : 20 }}
            transition={{ duration: 0.3 }}
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden sm:flex items-center gap-8">
          <ul className="list-none flex flex-row gap-8">
            {navLinks.map((nav, index) => (
              <motion.li
                key={nav.id}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.3 }}
                className="relative group"
              >
                <a
                  href={`#${nav.id}`}
                  className={`${
                    active === nav.id ? "text-white" : "text-gray-400"
                  } cursor-pointer text-[15px] font-medium hover:text-white transition-colors duration-300 relative`}
                >
                  {nav.title}
                  <span
                    className={`absolute -bottom-1 left-0 h-[2px] bg-gradient-to-r from-teal-500 to-emerald-500 transition-all duration-300 ${
                      active === nav.id ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                  {active === nav.id && (
                    <motion.span
                      className="absolute inset-0 bg-teal-500/10 blur-xl rounded-full -z-10"
                      layoutId="navHighlight"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </a>
              </motion.li>
            ))}
          </ul>

          {/* Social Icons */}
          <div className="flex items-center gap-2 border-l border-white/10 pl-6">
            <a href={config.social.github} target="_blank" rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-200" title="GitHub">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
            </a>
            <a href={config.social.linkedin} target="_blank" rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-200" title="LinkedIn">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex flex-1 items-center justify-end sm:hidden">
          <motion.div
            whileTap={{ scale: 0.9 }}
            onClick={() => setToggle(!toggle)}
            className="cursor-pointer"
          >
            <div className="glass-effect p-2 rounded-lg border border-teal-500/30 hover:border-teal-500/50 transition-all duration-300">
              <img
                src={toggle ? close : menu}
                alt="menu"
                className="h-[24px] w-[24px] object-contain"
              />
            </div>
          </motion.div>

          {/* Mobile Menu Dropdown */}
          <motion.div
            initial={false}
            animate={{
              opacity: toggle ? 1 : 0,
              scale: toggle ? 1 : 0.95,
              y: toggle ? 0 : -10,
            }}
            transition={{ duration: 0.2 }}
            className={`${
              !toggle ? "hidden" : "flex"
            } glass-effect absolute right-0 top-20 z-10 mx-4 my-2 min-w-[200px] rounded-xl p-6 border border-teal-500/30 shadow-2xl shadow-teal-500/20`}
          >
            {/* Corner Decorations */}
            <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-teal-500/50" />
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-emerald-500/50" />

            <ul className="flex flex-1 list-none flex-col items-start justify-end gap-4">
              {navLinks.map((nav, index) => (
                <motion.li
                  key={nav.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="w-full"
                >
                  <a
                    href={`#${nav.id}`}
                    className={`font-poppins cursor-pointer text-[16px] font-medium ${
                      active === nav.id
                        ? "text-white bg-gradient-to-r from-teal-600/20 to-emerald-600/20 px-3 py-2 rounded-lg border border-teal-500/30"
                        : "text-gray-400 hover:text-white px-3 py-2 hover:bg-teal-500/10 rounded-lg"
                    } transition-all duration-300 block`}
                    onClick={() => {
                      setToggle(!toggle);
                    }}
                  >
                    <span className="flex items-center gap-2">
                      <span className="text-teal-400">▹</span>
                      {nav.title}
                    </span>
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>

      {/* Scanline Effect (Subtle) */}
      {scrolled && (
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-teal-500/50 to-transparent" />
      )}
    </nav>
  );
};

export default Navbar;
