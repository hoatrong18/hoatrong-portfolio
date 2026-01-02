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
  username: "Truong Trong Hoa",
  title: "Hi all, I'm Hoa",
  subTitle: emoji(
    "A high school student specializing in Information Technology, passionate about AI and software development, with experience in data engineering, competitive programming, and building real-world tech projects."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1aRbsv-_WTdTLBVVPZ30-ZJhT4b9Eidzr/view", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/hoatrong18",
  gmail: "hoatrong2008td@gmail.com",
  facebook: "https://www.facebook.com/hoa.trong.747524",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "TECH STACK",
  skills: [
    emoji(
      "⚡ Master C++, understand basic Python, C and JavaScript"
    ),
    emoji("⚡ Have some experience in AI"),
    emoji(
      "⚡ Participate in some projects about AI and software engineering"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "vue.js",
      fontAwesomeClassname: "fab fa-vuejs"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Ha Long High School for Gifted Students",
      logo: require("./assets/images/CHLlogo.png"),
      subHeader: "Information Technology specialized student",
      duration: "July 2023 - June 2026",
      //desc: "Participated in the research of XXX and published 3 papers.",
      //descBullets: [
      //  "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      //  "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      //]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "50%" //Insert relative proficiency in percentage
    },
    {
      Stack: "AI", //Insert stack or technology you have experience in
      progressPercentage: "50%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Programming",
      progressPercentage: "80%"
    },
  ],
  displayCodersrank: true // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Development Intern",
      company: "Tan Phat Group",
      companylogo: require("./assets/images/tanphatg.avif"),
      date: "June 2025 – August 2025",
      descBullets: [
        "Supported Data Engineering tasks by writing Python and SQL scripts for data ingestion, cleaning, and reporting.",
        "Built a personal ETL pipeline on AWS to extract, transform, and load datasets into structured outputs for downstream use.",
        "Worked with distributed-data concepts and tooling (Hadoop ecosystem) to handle larger datasets and batch workflows."
      ]
    },
    {
      role: "Co-author, Research Team Lead",
      company: "Vietnam Journal of Education",
      //companylogo: require("./assets/images/tanphatg.avif"),
      date: "Paper published on July 2025",
      descBullets: [
        "Publication Title: Application of Artificial Intelligence in Detecting Food – Unsafe Vegetables",
        "Led research scope on AI tools in education, coordinated dataset collection (~1,000 samples) and designed the case study on clean vs contaminated vegetable classification.",
        "Implemented a CNN training + evaluation pipeline on Google Colab, including train/validation/test splits and reporting. ",
        "Tech stack: Python, TensorFlow/Keras, Google Colab, Google Drive, Matplotlib, PIL. "
      ]
    }
  ],
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "HERE ARE SOME PROJECTS THAT I HAD PARTICIPATED IN",
  projects: [
    {
      //image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Software System for Supporting the Supervision of School Regulations and Discipline",
      projectDesc: [
        "End-to-end object detection system with training pipeline and demo web UI.",
        "Tech stack: Python, OpenCV, MediaPipe, YOLO, Google Colab, Vue.js"
      ],
      footerLink: [
        {
          name: "Code",
          url: "https://github.com/hoatrong18/Var-School-application"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      //image: require("./assets/images/nextuLogo.webp"),
      projectName: "AI-Driven Early Parkinson’s Detection System",
      projectDesc: [
        "Built and prepared a training-ready video dataset for early detection experiments.",
        "Tech stack: Python, MediaPipe, OpenCV, Jupyter/Colab"
      ],
      footerLink: [
        {
          name: "Code",
          url: "https://github.com/hoatrong18/Early-Parkinson-s-Detection-Application"
        }
      ]
    },
    {
      //image: require("./assets/images/nextuLogo.webp"),
      projectName: "Application of Artificial Intelligence in Detecting Food – Unsafe Vegetables",
      projectDesc: [
        "Built an object detection system combining vision and IoT data for food safety monitoring.",
        "Tech stack: Python, YOLO, TensorFlow, OpenCV, Google Colab, IoT sensors"
      ],
      footerLink: [
        {
          name: "Code",
          url: "https://github.com/hoatrong18/Unsafe-Vegetable-Detection-System"
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
    "Here are my academic achievements and certifications",

  achievementsCards: [
    {
      title: "Gold Medal",
      subtitle:
        "INNOVERSE Invention & Innovation Expo",
      //image: require("./assets/images/codeInLogo.webp"),
      //imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/13Gvy3Imu5a14TkTAMDLeFuDFbmMH5HWV/view"
        },
      ]
    },
    {
      title: "3rd Prize",
      subtitle:
        "Provincial Young Informatics Competition",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1eXZt_XrrYeqVg16XKgkPmdKCkTaHbMBx/view"
        }
      ]
    },
    {
      title: "3rd Prize",
      subtitle: "Vietnam Student Olympiad in Informatics (Provincial)",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: "https://drive.google.com/file/d/1v0C4Nho8nK8nRNnW0v5WKFE_nfzn30Dj/view"},
      ]
    },
    {
      title: "Consolation Prize",
      subtitle: "Ha Noi Innovation Contest for Youth and Children",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: "https://drive.google.com/file/d/1qTC9mAxAgCeNKSu70e3VQugMfrDONLNX/view"},
      ]
    },
    {
      title: "Ranked 16th",
      subtitle: "Quang Ninh Informatics National Team Selection",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Result", url: "https://drive.google.com/file/d/1_utZv2IQtimPNNrJj16i9Ep5eBDZfDE5/view"},
      ]
    },
    {
      title: "Certificate: Python Basics",
      subtitle: "University of Michigan",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: "https://www.coursera.org/account/accomplishments/verify/NW3Y9DN2RJQ4"},
      ]
    },
    {
      title: "Certificate: Python for Data Analysis: Pandas & NumPy",
      subtitle: "Coursera Project Network",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: "https://www.coursera.org/account/accomplishments/verify/NKUZUAX3WE1U"},
      ]
    },
    {
      title: "Certificate: ChatGPT Advanced Data Analysis",
      subtitle: "Vanderbilt University",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: "https://www.coursera.org/account/accomplishments/verify/DJWEDJ2X6XQ9"},
      ]
    },
    {
      title: "Certificate: Prompt Engineering for ChatGPT",
      subtitle: "Vanderbilt University",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: "https://www.coursera.org/account/accomplishments/verify/Y4RQU54HBNUW"},
      ]
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "PUBLICATION",
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
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+84-969661196",
  email_address: "hoatrong2008td@gmail.com"
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
  resumeSection,
};
