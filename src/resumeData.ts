export const resumeData = {
  basics: {
    name: "Naveen Nain",
    label: "Backend Developer",
    email: "nainnaveen24@gmail.com",
    phone: "+91-9355746709",
    url: "https://naveennain.in",
    // ssh: "ssh://ba3a.tech",
    summary: "Full Stack Developer at India Coders, skilled in Laravel, PHP, and MySQL, delivering scalable web solutions. Completed internships in hosting management and custom software development. Currently pursuing B.Tech CSE at Lovely Professional University (2029) and focused on growing in web and backend development.",
    location: {
      city: "Narwana",
      region: "Haryana",
      countryCode: "India"
    },
    profiles: [
      {
        network: "LinkedIn",
        url: "https://linkedin.com/in/naveennain",
        username: "naveennain"
      },
      {
        network: "Github",
        username: "NaveenNain1",
        url: "https://github.com/NaveenNain1"
      }
    ],
    image: "https://github.com/NaveenNain1.png"
  },
  work: [
    {
      name: "India Coders",
      position: "Full Stack Developer (Web+Mobile)",
      url: "https://indiacoders.in",
      startDate: "2023-8-01",
      endDate: "2025-12",
      summary: "",
      highlights: [
        "Developed and maintained web applications using Laravel, PHP, and MySQL, ensuring high performance and responsiveness.",
        "Collaborated with cross-functional teams to define, design, and ship new features.",
        "Optimized applications for maximum speed and scalability.",
        "Built 100+ websites and mobile applications for clients across various industries, enhancing their online presence and operational efficiency."
      ],
      location: "Pune"
    },
     
  ],

  education: [
    {
      institution: "Lovely Professional University",
      area: "",
      studyType: "Bachelor of Technology",
      startDate: "2025-08-01",
      endDate: "2029-03"
    },
    {
      institution: "PM SHRI Govt. Sr. Sec. School (Ujhana, Jind)",
      area: "",
      studyType: "Senior Secondary",
      startDate: "2023-03-01",
      endDate: "2025-03-01"
    }
  ],
 
  certificates: [
    // {
    //   name: "Google Cybersecurity Specialization",
    //   issuer: "Google on Coursera",
    //   date: "2025-03"
    // },
    // {
    //   name: "RedHat System Administration II",
    //   issuer: "RedHat",
    //   date: "2024-10"
    // }
  ],
  skills: [
    {
      name: "Languages",
      keywords: [
        "Laravel",
        "PHP",
        "Python",
        "React.js",
        "Wordpress Plugins",
        "HTML",
        "CSS",
        "JavaScript"
      ]
    },
    {
      name: "Backend Frameworks / Libs",
      keywords: [
        "Laravel",
        "CodeIgniter",
      
        "FastAPI",
        "Node.js"
        
      ]
    },
    {
      name: "Databases",
      keywords: [
        "PostgreSQL",
        "DynamoDB",
      
        "MongoDB",
        "MySQL",
        "SQLite"
      ]
    },
    {
      name: "Tools & Platforms",
      keywords: [
        
        "Postman",
        "AWS",
        "GCP",
        "Cloudflare",
       "Firebase",

        "Git"
      ]
    },
    // {
    //   name: "Concepts",
    //   keywords: [
    //     "Microservices",
    //     "OAuth2",
    //     "OIDC",
    //     "Web3 (Solana, ICP)",
    //     "CI/CD",
    //     "System Design",
    //     "Low-Level Design (LLD)"
    //   ]
    // }
  ],
  projects: [
     {
      name: "ProSchoolERP - School Management System",
      highlights: [
        "Developed a comprehensive school management system using CodeIgniter and PHP, streamlining administrative tasks for educational institutions.",
        "Implemented modules for student enrollment, attendance tracking, grade management, and communication between teachers, students, and parents.",
        "Ensured data security and user-friendly interfaces for efficient school operations."
      ],
      url: "https://proschoolerp.com"
    },
    {
      name: "TowRides - Vehicle Rescue Application",
      highlights: [
        "Developed a full-stack vehicle rescue application using React Native for cross-platform mobile development and Laravel for backend services.",
        "Implemented real-time tracking and notification features to connect stranded vehicle owners with nearby rescue services.",
        "Integrated payment gateways for seamless transaction processing within the app."
      ],
 
      
    },
   
    {
      name: "PostCraftAI - AI Content Generation Platform",
      highlights: [
        "Created an AI instagram post generation plateform using React.js for the frontend and Laravel for the backend.",
        "Canva like editor to design instagram posts.",
        "Integrated advanced AI models to generate engaging and relevant content based on user inputs.",
        "Implemented user authentication, content management, and analytics features to enhance user experience."  
      ]
    },{
      name: "GuardianDNS - AI-Powered DNS Security",
      highlights: [
        "Developed a high-performance DNS security layer utilizing Python and Laravel to filter malicious traffic at the network level.",
        "Implemented a Redis-backed caching mechanism to minimize latency for real-time domain classification and threat detection.",
        "Integrated Gemini Multimodal AI to dynamically analyze and block emerging phishing and malware domains."
      ],
    }
  ]
} as const;

export type ResumeData = typeof resumeData;
