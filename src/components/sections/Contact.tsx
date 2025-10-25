import { motion } from 'framer-motion';
import { EarthCanvas } from '../canvas';
import { SectionWrapper } from '../../hoc';
import { slideIn } from '../../utils/motion';
import { config } from '../../constants/config';
import { Header } from '../atoms/Header';
const Contact = () => {
  return (
    <div className={`flex flex-col-reverse gap-10 overflow-hidden xl:mt-12 xl:flex-row`}>
      <motion.div
        variants={slideIn('left', 'tween', 0.2, 1)}
        className="bg-black-100 flex-[0.75] rounded-2xl p-8"
      >
        <Header useMotion={false} {...config.contact} />

        <div className="mt-12 flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <span className="text-secondary text-sm font-medium uppercase tracking-wider">
              Phone
            </span>
            <a
              href="tel:+918950188696"
              className="text-white text-2xl font-semibold transition-colors"
            >
              +91 8950188696
            </a>
          </div>

          <div className="flex flex-col gap-2">
            <span className="text-secondary text-sm font-medium uppercase tracking-wider">
              Email
            </span>
            <a
              href="mailto:hjoshi365.hj@gmail.com"
              className="text-white text-2xl font-semibold transition-colors break-all"
            >
              hjoshi365.hj@gmail.com
            </a>
          </div>

          <div className="flex flex-col gap-2">
            <span className="text-secondary text-sm font-medium uppercase tracking-wider">
              Linkedin
            </span>
            <a
              href="https://www.linkedin.com/in/itshimanshujoshi"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl font-semibold transition-colors break-all text-blue-400 underline"
            >
              Visit My LinkedIn Profile
            </a>
          </div>
        </div>
      </motion.div>

      <motion.div
        variants={slideIn('right', 'tween', 0.2, 1)}
        className="h-[350px] md:h-[550px] xl:h-auto xl:flex-1"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, 'contact');
