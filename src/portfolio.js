/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file
// TODO
//  update favicon (fox, my own memoji)
//  figure out resume
//  add more items under "what I do"
//  add more proficiencies
//  fix logos - kiyote
//  use zackcpetersen.com domain - instructions in readme

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
  subTitle: emoji(
    "A passionate Senior Software Engineer specializing in Automation, Backend Development, and Cloud Infrastructure 🚀 with experience in Go, Python, AWS, and modern DevOps practices."
  ),
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
  subTitle: "SENIOR SOFTWARE ENGINEER SPECIALIZING IN BACKEND & AUTOMATION",
  skills: [
    emoji("🏗️ Build and scale microservices architectures with Go and Python"),
    emoji("🚀 Design and implement cloud infrastructure using AWS and GCP"),
    emoji("♾ Develop robust automation and deployment pipelines")
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
      skillName: "ci/cd",
      fontAwesomeClassname: "fa-solid fa-code-merge"
    },
    {
      skillName: "sql database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "data engineering",
      fontAwesomeClassname: "fas fa-gears"
    },
    {
      skillName: "api",
      fontAwesomeClassname: "fa-solid fa-code"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "terraform",
      fontAwesomeClassname: "fa fa-cubes"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
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
      role: "Senior Software Engineer I",
      company: "Reserv",
      companylogo: require("./assets/images/reservLogo.png"),
      date: "Oct 2024 - Present",
      desc: "Led AI development and data infrastructure initiatives",
      descBullets: [
        "Developed AI features reducing claims adjuster workload by 5+ hours weekly",
        "Architected data pipeline interfaces enabling scalable analytics operations",
        "Spearheaded data warehouse evaluation and implementation strategy",
        "Established engineering standards driving measurable quality improvements"
      ]
    },
    {
      role: "Senior Software Engineer (SE-3)",
      company: "Merit International",
      companylogo: require("./assets/images/meritLogo.jpeg"),
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
      companylogo: require("./assets/images/neutronLogo.png"),
      date: "May 2021 - June 2022",
      desc: "Led team development and infrastructure modernization",
      descBullets: [
        "Led and mentored team of junior engineers",
        "Architected AWS ECS infrastructure for SaaS platform",
        "Implemented CI/CD pipelines reducing deployment times by 75%",
        "Modernized infrastructure using Terraform IaC"
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
      // TODO
      image: require("./assets/images/indigo_innovations.jpeg"),
      projectName: "Kiyote",
      projectDesc: "Lead Management SaaS platform for the education sector",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.indigoinnovationsinc.com/"
        }
        //  you can add extra buttons here.
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
