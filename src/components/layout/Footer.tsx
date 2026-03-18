import { config } from "../../constants/config";
import { navLinks } from "../../constants";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/5 bg-[#0a0e14]">
      <div className={`mx-auto max-w-7xl px-6 sm:px-16 py-12`}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-teal-600 to-emerald-600 flex items-center justify-center">
                <span className="text-white font-bold text-base">H</span>
              </div>
              <span className="text-white font-semibold text-base">{config.html.fullName}</span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
              Full Stack Developer crafting performant, scalable web applications. Open to freelance and full-time opportunities.
            </p>
            {/* Availability pill */}
            <div className="inline-flex items-center gap-2 mt-4 px-3 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/5">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
              </span>
              <span className="text-emerald-400 text-xs font-mono">Available for projects</span>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-white text-sm font-semibold uppercase tracking-wider mb-4">Navigation</h3>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    className="text-gray-500 hover:text-teal-400 text-sm transition-colors duration-200"
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white text-sm font-semibold uppercase tracking-wider mb-4">Get in touch</h3>
            <div className="space-y-3">
              <a href={`mailto:${config.social.email}`}
                className="flex items-center gap-3 text-gray-500 hover:text-teal-400 text-sm transition-colors duration-200 group">
                <svg className="w-4 h-4 flex-shrink-0 group-hover:text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                {config.social.email}
              </a>
              <a href={config.social.github} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-500 hover:text-teal-400 text-sm transition-colors duration-200 group">
                <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
                GitHub
              </a>
              <a href={config.social.linkedin} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-500 hover:text-teal-400 text-sm transition-colors duration-200 group">
                <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-gray-600 text-xs">
            © {year} {config.html.fullName}. All rights reserved.
          </p>
          <p className="text-gray-600 text-xs">
            Built with React · TypeScript · Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
