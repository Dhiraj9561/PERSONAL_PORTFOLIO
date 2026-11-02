/* Change this file to get your personal Portfolio */

// Website related settings
const settings = {
  isSplash: false,
};

// SEO Related settings
const seo = {
  title: "Dhiraj Rathod | Computer Science Student",
  description:
    "Dhiraj Rathod is a third-year B.Tech Computer Science student interested in software development, web development and building real-world applications.",
  og: {
    title: "Dhiraj Rathod | Developer Portfolio",
    type: "website",
    url: "https://dhiraj9561.github.io/PERSONAL_PORTFOLIO/",
  },
};

// Home Page
const greeting = {
  title: "Dhiraj Rathod",
  logo_name: "DhirajRathod",
  nickname: "Dhiraj",
  subTitle:
    "B.Tech Computer Science student focused on software development, web development and building real-world applications.",
  portfolio_repository:
    "https://github.com/Dhiraj9561/PERSONAL_PORTFOLIO",
  githubProfile: "https://github.com/Dhiraj9561",
};

// Social Media Links
const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/Dhiraj9561",
    fontAwesomeIcon: "fa-github",
    backgroundColor: "#181717",
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/dhiraj-rathod-94920532b/",
    fontAwesomeIcon: "fa-linkedin-in",
    backgroundColor: "#0077B5",
  },
  {
    name: "Gmail",
    link: "mailto:dhirajrathod0608@gmail.com",
    fontAwesomeIcon: "fa-google",
    backgroundColor: "#D14836",
  },
];

// Skills
const skills = {
  data: [
    {
      title: "Programming",
      fileName: "ProgrammingImg",
      skills: [
        "⚡ Writing programs using Python, Java and C/C++",
        "⚡ Solving programming and data structure problems",
        "⚡ Applying object-oriented programming concepts",
      ],
      softwareSkills: [
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Java",
          fontAwesomeClassname: "logos-java",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "C++",
          fontAwesomeClassname: "simple-icons:cplusplus",
          style: {
            color: "#00599C",
          },
        },
      ],
    },

    {
      title: "Web Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive websites using HTML, CSS and JavaScript",
        "⚡ Developing frontend applications using React",
        "⚡ Working with Git and GitHub for version control",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "React",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
      ],
    },

    {
      title: "Database & Backend",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Working with databases and basic data management",
        "⚡ Understanding backend and API concepts",
        "⚡ Developing applications that connect frontend and backend components",
      ],
      softwareSkills: [
        {
          skillName: "MySQL",
          fontAwesomeClassname: "logos-mysql",
          style: {
            color: "#4479A1",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "devicon-plain:nodejs-wordmark",
          style: {
            color: "#339933",
          },
        },
      ],
    },

    {
      title: "Tools & Technologies",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Using Git and GitHub for source code management",
        "⚡ Deploying and maintaining web projects",
        "⚡ Learning modern development tools and workflows",
      ],
      softwareSkills: [
        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            color: "#F05032",
          },
        },
        {
          skillName: "GitHub",
          fontAwesomeClassname: "simple-icons:github",
          style: {
            color: "#181717",
          },
        },
        {
          skillName: "VS Code",
          fontAwesomeClassname: "simple-icons:visualstudiocode",
          style: {
            color: "#007ACC",
          },
        },
      ],
    },
  ],
};

// Competitive Programming / Coding Profiles
// Add your real profiles here.
// Do not add profiles that you don't actually use.
const competitiveSites = {
  competitiveSites: [],
};

// Education
const degrees = {
  degrees: [
    {
      title:
        "D.Y. Patil College of Engineering and Technology, Kolhapur",
      subtitle: "B.Tech. in Computer Science Engineering",
      duration: "2024 - 2028",
      descriptions: [
        "⚡ Currently pursuing B.Tech. with a focus on Computer Science and software development.",
        "⚡ Studying core subjects including Data Structures, Algorithms, DBMS, Operating Systems, Computer Networks and Software Engineering.",
        "⚡ Developing practical projects to strengthen programming and problem-solving skills.",
      ],
      website_link: "https://coek.dypgroup.edu.in/",
    },
  ],
};

// Certifications
// Add only certifications that you actually have.
const certifications = {
  certifications: [],
};

// Experience
// Keep empty until you have genuine internship/work experience.
// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Learning, Projects and Practical Experience",
  description:
    "I am currently building my skills through academic projects, programming practice, and hands-on software development.",
  header_image_path: "experience.svg",
  sections: [],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "A collection of projects and applications built while learning and exploring software development, web development, programming, and problem solving.",
  avatar_image_path: "projects_image.svg",
};

// Publications
// Add only genuine publications, articles or technical blogs.
const publicationsHeader = {
  title: "Publications",
  description:
    "Technical articles, blogs and research work.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [],
};

// Contact Page
// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "profile.png",
    description:
      "I am always open to connecting with fellow developers, recruiters, and people interested in technology and software development.",
  },

  blogSection: {
    title: "GitHub",
    subtitle:
      "Explore my projects, programming work and development journey on GitHub.",
    link: "https://github.com/Dhiraj9561",
    avatar_image_path: "blogs_image.svg",
  },

  addressSection: {
    title: "Location",
    subtitle: "Kolhapur, Maharashtra, India",
    locality: "Kolhapur",
    country: "India",
    region: "Maharashtra",
    postalCode: "",
    streetAddress: "",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://www.google.com/maps/search/?api=1&query=Kolhapur,Maharashtra,India",
  },

  phoneSection: {
    title: "",
    subtitle: "",
  },
};
// Export
export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};