import { motion } from "framer-motion";
import { SectionWrapper } from "../../hoc";
import { fadeIn } from "../../utils/motion";
import { config } from "../../constants/config";

const services = [
  {
    title: "Landing Page / Marketing Site",
    price: "From $500",
    turnaround: "3–5 days",
    description: "A fast, responsive, conversion-focused website to represent your brand or product online.",
    features: [
      "Fully responsive (mobile-first)",
      "SEO meta tags & Open Graph",
      "Smooth animations",
      "Contact form with email integration",
      "1 round of revisions",
    ],
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
    accent: "teal",
  },
  {
    title: "Admin Panel / Dashboard",
    price: "From $1,500",
    turnaround: "1–2 weeks",
    description: "Data-rich admin panels with tables, charts, filters, and role-based access control.",
    features: [
      "React + TypeScript",
      "REST API / GraphQL integration",
      "Role-based access (RBAC)",
      "Charts, tables, export",
      "Authentication (JWT / OAuth)",
    ],
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    accent: "emerald",
    highlight: true,
  },
  {
    title: "Full-Stack Web App / MVP",
    price: "From $3,000",
    turnaround: "2–4 weeks",
    description: "Complete product from frontend to backend — auth, database, APIs, and deployment.",
    features: [
      "React / Vue + Node.js / Laravel",
      "Database design (MySQL / MongoDB)",
      "API development & documentation",
      "Authentication & authorization",
      "Cloud deployment (VPS / Vercel)",
    ],
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    accent: "teal",
  },
  {
    title: "Bug Fixes & API Integration",
    price: "From $150",
    turnaround: "1–3 days",
    description: "Quick turnaround fixes, performance improvements, or connecting third-party APIs to your existing app.",
    features: [
      "Bug diagnosis & fix",
      "Third-party API integration",
      "Performance optimization",
      "Code review & refactoring",
      "Hourly rate available",
    ],
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
      </svg>
    ),
    accent: "emerald",
  },
];

const Services = () => {
  return (
    <div className="relative">
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10">
        {/* Header */}
        <motion.div variants={fadeIn("", "", 0, 0.6)}>
          <p className="text-teal-400 text-sm sm:text-base font-mono uppercase tracking-widest mb-2">Freelance</p>
          <h2 className="text-white font-black text-3xl sm:text-4xl md:text-5xl">What I can build for you.</h2>
        </motion.div>

        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-4 text-secondary text-sm sm:text-[17px] max-w-2xl leading-relaxed"
        >
          I take on freelance projects alongside my full-time work. Prices are starting points — every project is scoped individually. Reach out and we'll find the right fit.
        </motion.p>

        {/* Service Cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-5">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={fadeIn("up", "spring", index * 0.1, 0.6)}
              className={`relative group rounded-xl border p-6 transition-all duration-300 hover:-translate-y-1 ${
                service.highlight
                  ? "border-teal-500/50 bg-teal-500/5"
                  : "border-white/8 bg-white/[0.02] hover:border-teal-500/30"
              }`}
            >
              {service.highlight && (
                <div className="absolute -top-3 left-6">
                  <span className="px-3 py-1 text-[10px] font-mono uppercase tracking-widest rounded-full bg-teal-500/20 border border-teal-500/40 text-teal-400">
                    Most requested
                  </span>
                </div>
              )}

              <div className="flex items-start justify-between mb-4">
                <div className="p-2.5 rounded-lg bg-teal-500/10 border border-teal-500/20 text-teal-400">
                  {service.icon}
                </div>
                <div className="text-right">
                  <div className="text-white font-bold text-lg">{service.price}</div>
                  <div className="text-gray-500 text-xs mt-0.5">{service.turnaround}</div>
                </div>
              </div>

              <h3 className="text-white font-semibold text-base mb-2">{service.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">{service.description}</p>

              <ul className="space-y-1.5">
                {service.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-gray-400 text-xs">
                    <svg className="w-3.5 h-3.5 text-teal-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          variants={fadeIn("up", "spring", 0.4, 0.6)}
          className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-4 p-6 rounded-xl border border-teal-500/20 bg-teal-500/5"
        >
          <div className="flex-1">
            <p className="text-white font-semibold text-base">Not sure what you need?</p>
            <p className="text-gray-400 text-sm mt-1">Send me a message and describe your project — I'll help you figure out the scope and timeline.</p>
          </div>
          <a
            href={`mailto:${config.social.email}?subject=Freelance Project Inquiry`}
            className="flex-shrink-0 px-5 py-2.5 rounded-lg font-semibold text-sm text-white bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-700 hover:to-emerald-700 transition-all duration-300 hover:scale-105"
          >
            Let's talk
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default SectionWrapper(Services, "services");
