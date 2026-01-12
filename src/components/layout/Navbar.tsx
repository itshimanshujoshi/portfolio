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
          ? "glass-effect border-b border-purple-500/30 backdrop-blur-xl shadow-lg shadow-purple-500/10"
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
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-300" />

            {/* Logo Circle */}
            <div className="relative flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-purple-600 to-blue-600 shadow-lg shadow-purple-500/30 group-hover:shadow-purple-500/50 transition-all duration-300">
              <span className="text-white font-bold text-xl">H</span>
            </div>
          </motion.div>

          {/* Brand Text */}
          <p className="flex cursor-pointer text-[18px] font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-blue-400 transition-all duration-300">
            {config.html.title}
          </p>

          {/* Decorative Line */}
          <motion.div
            className="h-[2px] bg-gradient-to-r from-purple-500 to-transparent"
            initial={{ width: 0 }}
            animate={{ width: scrolled ? 0 : 20 }}
            transition={{ duration: 0.3 }}
          />
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden list-none flex-row gap-10 sm:flex">
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
                } cursor-pointer text-[16px] font-medium hover:text-white transition-colors duration-300 relative`}
              >
                {nav.title}

                {/* Underline Effect */}
                <span
                  className={`absolute -bottom-1 left-0 h-[2px] bg-gradient-to-r from-purple-500 to-blue-500 transition-all duration-300 ${
                    active === nav.id ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />

                {/* Glow Effect on Active */}
                {active === nav.id && (
                  <motion.span
                    className="absolute inset-0 bg-purple-500/10 blur-xl rounded-full -z-10"
                    layoutId="navHighlight"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </a>
            </motion.li>
          ))}
        </ul>

        {/* Mobile Menu Toggle */}
        <div className="flex flex-1 items-center justify-end sm:hidden">
          <motion.div
            whileTap={{ scale: 0.9 }}
            onClick={() => setToggle(!toggle)}
            className="cursor-pointer"
          >
            <div className="glass-effect p-2 rounded-lg border border-purple-500/30 hover:border-purple-500/50 transition-all duration-300">
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
            } glass-effect absolute right-0 top-20 z-10 mx-4 my-2 min-w-[200px] rounded-xl p-6 border border-purple-500/30 shadow-2xl shadow-purple-500/20`}
          >
            {/* Corner Decorations */}
            <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-purple-500/50" />
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-blue-500/50" />

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
                        ? "text-white bg-gradient-to-r from-purple-600/20 to-blue-600/20 px-3 py-2 rounded-lg border border-purple-500/30"
                        : "text-gray-400 hover:text-white px-3 py-2 hover:bg-purple-500/10 rounded-lg"
                    } transition-all duration-300 block`}
                    onClick={() => {
                      setToggle(!toggle);
                    }}
                  >
                    <span className="flex items-center gap-2">
                      <span className="text-purple-400">▹</span>
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
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />
      )}
    </nav>
  );
};

export default Navbar;
