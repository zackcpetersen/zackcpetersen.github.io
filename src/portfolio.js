/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Zack Petersen",
  title: "HI all, I'm Zack",
  subTitle: emoji(
    "A passionate Senior Software Engineer specializing in Backend Development and Cloud Infrastructure 🚀 with experience in Go, Python, AWS, and modern DevOps practices."
  ),
  resumeLink:
    "https://docs.google.com/document/d/1LVXZEjN5CWwisqJEA8RNt8qSfRODkcRJ",
  displayGreeting: true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/zackcpetersen",
  linkedin: "https://www.linkedin.com/in/zackcpetersen/",
  gmail: "zpetersen78@gmail.com",
  medium: "https://medium.com/@zackcpetersen",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "SENIOR SOFTWARE ENGINEER SPECIALIZING IN BACKEND & AUTOMATION",
  skills: [
    emoji("⚡ Build and scale microservices architectures with Go and Python"),
    emoji("⚡ Design and implement cloud infrastructure using AWS and GCP"),
    emoji("⚡ Develop robust automation and deployment pipelines")
  ],
  // https://fontawesome.com/icons?d=gallery
  softwareSkills: [
    {
      skillName: "go",
      fontAwesomeClassname: "fa-brands fa-golang"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "database",
      fontAwesomeClassname: "fas fa-database"
    }
    // TODO: terraform, datadog, langchain, django, kafka
  ],
  display: true
};

// Education Section

const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "The University of Utah",
      subHeader: "Bachelor of Science (BS)",
      duration: "August 2014 - May 2017",
      desc: "Completed Bachelor of Science degree program"
    }
  ]
};

// Your top 3 proficient stacks/tech experience

// TODO - might remove this, I have mixed feelings about skill bars
const techStack = {
  viewSkillBars: true,
  experience: [
    {
      Stack: "Frontend/Design",
      progressPercentage: "90%"
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

// TODO add Reserv
const workExperiences = {
  display: true,
  experience: [
    {
      role: "Senior Software Engineer (SE-3)",
      company: "Merit International Inc",
      companylogo: require("./assets/images/merit.jpg"),
      date: "June 2022 - Oct 2024",
      desc: "Led development of core services and infrastructure scaling",
      descBullets: [
        "Scaled critical features in Go microservices to support 250,000+ users",
        "Expanded test coverage by 60% and implemented comprehensive OAuth security",
        "Designed high-performance integration system processing 3M+ daily entries",
        "Built scalable notifications infrastructure for millions of daily communications"
      ]
    },
    {
      role: "Software Engineer III",
      company: "Neutron Interactive",
      companylogo: require("./assets/images/neutron.jpg"),
      date: "May 2021 - June 2022",
      desc: "Led team development and infrastructure modernization",
      descBullets: [
        "Led and mentored team of junior engineers",
        "Architected AWS ECS infrastructure for SaaS platform",
        "Implemented CI/CD pipelines reducing deployment times by 75%",
        "Modernized infrastructure using Terraform IaC"
      ]
    },
    {
      role: "Software Engineer II",
      company: "Neutron Interactive",
      companylogo: require("./assets/images/neutron.jpg"),
      date: "May 2020 - May 2021",
      desc: "Led system modernization and feature development",
      descBullets: [
        "Containerized backend systems using Docker and Terraform",
        "Developed key revenue-generating features",
        "Achieved 80% test coverage across system"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true",
  display: true
};

// Some big projects you have worked on

// TODO
const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
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
  display: true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  // blogs: [
  //   {
  //     url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
  //     title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
  //     description:
  //       "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
  //   },
  //   {
  //     url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
  //     title: "Why REACT is The Best?",
  //     description:
  //       "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
  //   }
  // ],
  display: true
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
  display: false
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",
  display: true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+1 (385) 404-5953",
  // TODO use a different email
  email_address: "zpetersen78@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false
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
