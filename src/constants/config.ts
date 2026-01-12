type TSection = {
  p: string;
  h2: string;
  content?: string;
};

type TConfig = {
  html: {
    title: string;
    fullName: string;
    email: string;
  };
  hero: {
    name: string;
    p: string[];
  };
  contact: {
    form: {
      name: {
        span: string;
        placeholder: string;
      };
      email: {
        span: string;
        placeholder: string;
      };
      message: {
        span: string;
        placeholder: string;
      };
    };
  } & TSection;
  sections: {
    about: Required<TSection>;
    experience: TSection;
    feedbacks: TSection;
    works: Required<TSection>;
  };
};

export const config: TConfig = {
  html: {
    title: "Himanshu Joshi | Full Stack Developer",
    fullName: "Himanshu Joshi",
    email: "hjoshi365.hj@gmail.com",
  },
  hero: {
    name: "Himanshu Joshi",
    p: ["Full Stack Developer with 4+ years of experience", "Specializing in React.js, TypeScript, Vue.js, and modern web architectures", "Building scalable, high-performance applications with 30%+ faster load times"],
  },
  contact: {
    p: "Get in touch",
    h2: "Contact.",
    form: {
      name: {
        span: "Your Name",
        placeholder: "What's your name?",
      },
      email: { span: "Your Email", placeholder: "What's your email?" },
      message: {
        span: "Your Message",
        placeholder: "What do you want to say?",
      },
    },
  },
  sections: {
    about: {
      p: "Introduction",
      h2: "Overview.",
     content: `Results-driven Full Stack Developer with 4+ years of experience building scalable, high-performance web applications. Specialized in React.js, Redux Toolkit, TypeScript, and modern frontend architectures with proven track record of reducing page load times by 30%+ and improving application stability by 40%. Strong expertise in REST API/GraphQL integration, JWT authentication, and full-stack development using Node.js, Laravel, and PHP frameworks. Passionate about delivering production-ready solutions that combine clean code with exceptional performance.`,
    },
    experience: {
      p: "What I have done so far",
      h2: "Work Experience.",
    },
    feedbacks: {
      p: "What others say",
      h2: "Testimonials.",
    },
    works: {
      p: "My work",
      h2: "Projects.",
      content: `Following projects showcases my skills and experience through
    real-world examples of my work. Each project is briefly described with
    links to code repositories and live demos in it. It reflects my
    ability to solve complex problems, work with different technologies,
    and manage projects effectively.`,
    },
  },
};
