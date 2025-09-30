/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 1500 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Zack Petersen",
  title: "Hi all, I'm Zack",
  subTitle:
    "Driven Senior Software Engineer passionate about building scalable systems that make life easier for users and teams. I specialize in Python, Go, and cloud tech (GCP/AWS), and thrive when scaling products, optimizing data pipelines, or mentoring engineers. Recently, I've doubled claims accuracy, reduced workloads by 40+ hours monthly, and explored generative AI with tools like LangChain. I'm always learning, innovating, and building - not just software, but culture and opportunity.",
  resumeLink:
    "https://docs.google.com/document/d/1LVXZEjN5CWwisqJEA8RNt8qSfRODkcRJ", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/zackcpetersen",
  linkedin: "https://www.linkedin.com/in/zackcpetersen/",
  gmail: "zpetersen78@gmail.com",
  // gitlab: "https://gitlab.com/saadpasta",
  // facebook: "https://www.facebook.com/saad.pasta7",
  medium: "https://medium.com/@zackcpetersen",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle:
    "SENIOR SOFTWARE ENGINEER SPECIALIZING IN DATA & PLATFORM ENGINEERING",
  skills: [
    emoji("🏗️ Build and scale microservices architectures with Go and Python"),
    emoji("🚀 Design and implement cloud infrastructure using AWS and GCP"),
    emoji("📊 Architect data pipelines and warehouses with DBT and Terraform"),
    emoji("🤖 Develop AI-powered features using LangChain and generative AI")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "golang",
      fontAwesomeClassname: "fa-brands fa-golang"
    },
    {
      skillName: "postgresql",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "gcp",
      fontAwesomeClassname: "fab fa-google"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "kubernetes",
      fontAwesomeClassname: "fas fa-dharmachakra"
    },
    {
      skillName: "terraform",
      fontAwesomeClassname: "fa fa-cubes"
    },
    {
      skillName: "datadog",
      fontAwesomeClassname: "fas fa-chart-line"
    },
    {
      skillName: "django",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "kafka",
      fontAwesomeClassname: "fas fa-stream"
    },
    {
      skillName: "ci/cd",
      fontAwesomeClassname: "fa-solid fa-code-merge"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "University Of Utah",
      logo: require("./assets/images/utahLogo.png"),
      subHeader: "Bachelor of Science, Business",
      duration: "August 2014 - May 2017"
      // desc: "Participated in the research of XXX and published 3 papers.",
      // descBullets: [
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      // ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Backend",
      progressPercentage: "90%"
    },

    {
      Stack: "AI/Automation",
      progressPercentage: "80%"
    },
    {
      Stack: "Data Engineering",
      progressPercentage: "80%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Senior Backend Engineer - Data",
      company: "Reserv",
      companylogo: require("./assets/images/reservLogo.png"),
      date: "Oct 2024 - Present",
      desc: "Led AI development and data infrastructure initiatives, collaborating directly with CTO",
      descBullets: [
        "Developed features for flagship Copilot product that doubled claims accuracy and reduced manual work for adjusters by up to 10 hours weekly",
        "Architected and optimized scalable data pipelines and warehouse solutions, reducing claims adjuster workload by 40+ hours monthly and cutting DBT model runtimes by 28%",
        "Built an AWS Textract-based pipeline that significantly increased context awareness of AI tools, enabling faster and more accurate claims resolutions for 100% of claims",
        "Reduced Docker image sizes by up to 76% and improved security posture, streamlining deployments and mitigating vulnerabilities across multiple repositories"
      ]
    },
    {
      role: "Senior Backend Engineer - Platform",
      company: "Merit International Inc",
      companylogo: require("./assets/images/meritLogo.jpeg"),
      date: "June 2022 - Oct 2024",
      desc: "Led development of core services and infrastructure scaling",
      descBullets: [
        "Successfully scaled critical features including user authentication, notifications, data ingestion, and graph management in core Go microservices from initial deployment to a user base exceeding 250,000",
        "Expanded integration test coverage by 60% across all core services, enhancing system reliability and reducing the risk of cross-service failures",
        "Developed a comprehensive integration framework incorporating services like Snowflake and Fivetran, designing a high-performance system that synchronizes over 3 million data entries per day",
        "Transformed the Notifications microservice from prototype to robust production infrastructure, creating a scalable solution capable of dispatching millions of daily communications"
      ]
    },
    {
      role: "Senior Backend Engineer - Platform",
      company: "Neutron Interactive",
      companylogo: require("./assets/images/neutronLogo.png"),
      date: "May 2021 - June 2022",
      desc: "Led team expansion and infrastructure modernization",
      descBullets: [
        "Recruited, onboarded, and guided two junior engineers, enabling strategic focus on system architecture and development while fostering a collaborative environment",
        "Architected and built AWS ECS infrastructure, facilitating streamlined container orchestration for the SaaS platform and improving resource utilization",
        "Designed and implemented a comprehensive GitHub Actions CI/CD pipeline from the ground up, automating build, test, and deployment processes and reducing release cycle times by 75%",
        "Transitioned from manual AWS console management to comprehensive Terraform-based Infrastructure as Code (IaC), ensuring consistent and version-controlled resource provisioning"
      ]
    },
    {
      role: "Backend Engineer",
      company: "Neutron Interactive",
      companylogo: require("./assets/images/neutronLogo.png"),
      date: "May 2020 - May 2021",
      desc: "Led system containerization and revenue-driving feature development",
      descBullets: [
        "Led the transformation of a legacy monolithic backend into a fully containerized architecture using Docker, enabling rapid, consistent deployments and improving environment portability",
        "Engineered and established over 10 pivotal features for the SaaS platform, including the primary matching algorithm responsible for generating over 80% of company revenue",
        "Developed comprehensive unit and integration test suites, achieving over 80% code coverage across the entire system, ensuring robust and reliable software delivery"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/reserv_logo_transparent.png"),
      projectName: "Adjuster Copilot",
      projectDesc:
        "AI-powered claims processing tool that doubled claims accuracy and reduces manual work for adjusters by over 40 hours weekly through advanced data pipelines and context-aware AI features",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.reserv.com/"
        }
      ]
    },
    {
      image: require("./assets/images/kiyote-stacked.png"),
      projectName: "Kiyote",
      projectDesc: "Lead Management SaaS platform for the education sector",
      footerLink: [
        {
          name: "Visit GitHub",
          url: "https://github.com/zackcpetersen/kiyote"
        }
      ]
    },
    {
      image: require("./assets/images/meritLogo.png"),
      projectName: "Merit Notifications",
      projectDesc:
        "Designed a scalable notifications solution capable of dispatching millions of daily communications",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.merits.com/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+1 (385) 404-5953",
  email_address: "zpetersen78@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
