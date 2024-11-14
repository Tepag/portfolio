import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
import TwitterIcon from '../components/Icon/TwitterIcon';
import heroImage from '../images/header-background.png';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
import porfolioImage7 from '../images/portfolio/portfolio-7.jpg';
import porfolioImage8 from '../images/portfolio/portfolio-8.jpg';
import porfolioImage9 from '../images/portfolio/portfolio-9.jpg';
import porfolioImage10 from '../images/portfolio/portfolio-10.jpg';
import porfolioImage11 from '../images/portfolio/portfolio-11.jpg';
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'David Jiabiao Zhu | CV',
  description: "Example site built with Tim Baker's react resume template",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm David Jiabiao Zhu.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a student of <strong className="text-stone-100">PoliMi</strong>: II year Computer Science
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        In my free time time, you can catch me <strong className="text-stone-100">training</strong>,
        reading some <strong className="text-stone-100">books</strong>, or exploring beautiful{' '}
        <strong className="text-stone-100">Places</strong>.
      </p>
    </>
  ),
  actions: [
    {
      href: '', //TODO: Add resume link
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `Motivated to learn and highly adaptable, with skills developed through academic studies and university projects. While my professional experience is currently limited, I am determined to put my skills into practice and grow in professional settings. Actively seeking opportunities to engage with the professional world and collaborate with companies that value a passion for technology and dedication.`,
  aboutItems: [
    {label: 'Location', text: 'Milan, IT', Icon: MapIcon},
    {label: 'Age', text: '20', Icon: CalendarIcon},
    {label: 'Nationality', text: 'Italian', Icon: FlagIcon},
    {label: 'Interests', text: 'Photography, Training, Reading', Icon: SparklesIcon},
    {label: 'Study', text: 'Politecnico di Milano', Icon: AcademicCapIcon},
    {label: 'Status', text: 'Student', Icon: BuildingOffice2Icon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'Italian',
        level: 9,
      },
      {
        name: 'Chinese',
        level: 8,
      },
      {
        name: 'English',
        level: 7,
      },
    ],
  },
  {
    name: 'Frontend development',
    skills: [
      {
        name: 'React',
        level: 1,
      },
      {
        name: 'Typescript',
        level: 0,
      },
      {
        name: 'GraphQL',
        level: 0,
      },
    ],
  },
  {
    name: 'Backend development',
    skills: [
      {
        name: 'Node.js',
        level: 0,
      },
      {
        name: 'Rust',
        level: 0,
      },
      {
        name: 'Golang',
        level: 0,
      },
    ],
  },
  {
    name: 'Mobile development',
    skills: [
      {
        name: 'React Native',
        level: 0,
      },
      {
        name: 'Flutter',
        level: 0,
      },
      {
        name: 'Swift',
        level: 0,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Project title 1',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage1,
  },
  {
    title: 'Project title 2',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage2,
  },
  {
    title: 'Project title 3',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage3,
  },
  {
    title: 'Project title 4',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage4,
  },
  {
    title: 'Project title 5',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage5,
  },
  {
    title: 'Project title 6',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage6,
  },
  {
    title: 'Project title 7',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage7,
  },
  {
    title: 'Project title 8',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage8,
  },
  {
    title: 'Project title 9',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage9,
  },
  {
    title: 'Project title 10',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage10,
  },
  {
    title: 'Project title 11',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage11,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: '---',
    location: 'Politecnico di Milano',
    title: '(In progress) Bachelor’s degree in Informatics Engineering ',
    content: <p>deepen all the knowledge about informatics and gain experience to develop a solution</p>,
  },
  {
    date: 'August 2023',
    location: 'ITI Galileo Galilei - Ostiglia',
    title: 'diploma informatico',
    content: <p>basic knowledge about programming and some programming languages like: C, html, php, css, Java; </p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'May 2022 - May 2022',
    location: 'XS - Xenia Software & Services',
    title: 'Stage - junior developer',
    content: (
      <p>
        Worked on a project to develop a application for the management of a company's internal data. The project used programming languages like: C#, visualBasic and SQL.
      </p>
    ),
  }
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'Working Progress',
      text: 'Working Progress',
      image: 'https://imgs.search.brave.com/ms8PhEzGN0h_GkHBb8zV0KkQBn4uRwZRIqCRJUXVBm0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTU1/Mzg4NDY2L3Bob3Rv/L3dvcmstaW4tcHJv/Z3Jlc3Mtcm9hZC1z/aWduLmpwZz9zPTYx/Mng2MTImdz0wJms9/MjAmYz0wTkhUdU4x/aHR6VUtPRHo3Z0RN/czRIa29PblBjY2Jf/eWtzRC1MLXZJQ0xR/PQ',
    },
    {
      name: 'Working Progress',
      text: 'Working Progress',
      image: 'https://imgs.search.brave.com/ms8PhEzGN0h_GkHBb8zV0KkQBn4uRwZRIqCRJUXVBm0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTU1/Mzg4NDY2L3Bob3Rv/L3dvcmstaW4tcHJv/Z3Jlc3Mtcm9hZC1z/aWduLmpwZz9zPTYx/Mng2MTImdz0wJms9/MjAmYz0wTkhUdU4x/aHR6VUtPRHo3Z0RN/czRIa29PblBjY2Jf/eWtzRC1MLXZJQ0xR/PQ',
    },
    {
      name: 'Working Progress',
      text: 'Working Progress',
      image: 'https://imgs.search.brave.com/ms8PhEzGN0h_GkHBb8zV0KkQBn4uRwZRIqCRJUXVBm0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTU1/Mzg4NDY2L3Bob3Rv/L3dvcmstaW4tcHJv/Z3Jlc3Mtcm9hZC1z/aWduLmpwZz9zPTYx/Mng2MTImdz0wJms9/MjAmYz0wTkhUdU4x/aHR6VUtPRHo3Z0RN/czRIa29PblBjY2Jf/eWtzRC1MLXZJQ0xR/PQ',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch 😁',
  description: 'I encourage reaching out with any questions, collaboration ideas, or just to share your thoughts!',
  items: [
    {
      type: ContactType.Email,
      text: 'zhudavidjiabiao@gmail.com',
      href: 'mailto:zhudavidjiabiao@gmail.com',
    },
    {
      type: ContactType.Location,
      text: 'Milan, Italy',
      href: 'https://maps.app.goo.gl/qegjKtgmL7ucufVj9',
    },
    {
      type: ContactType.Instagram,
      text: '---',
      href: '',//TODO: add instagram account
    },
    {
      type: ContactType.Github,
      text: 'Tepag',
      href: 'https://github.com/Tepag',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/Tepag'},
  {label: 'Stack Overflow', Icon: StackOverflowIcon, href: ''}, //TODO: add stackoverflow account
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/zhudavidjiabiao/'},
  {label: 'Instagram', Icon: InstagramIcon, href: ''}, //TODO: add instagram account
  {label: 'Twitter', Icon: TwitterIcon, href: ''}, //TODO: add twitter account
];
