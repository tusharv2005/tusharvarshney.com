import {
  CodeXmlIcon,
  DraftingCompassIcon,
  GraduationCapIcon,
  LightbulbIcon,
  SparklesIcon,
  VideoIcon,
} from "lucide-react"

import type { Experience } from "../types/experiences"

export const EXPERIENCES: Experience[] = [
  {
    id: "HoriznGames",
    companyName: "Horizn Games",
    companyLogo: "/WordMark.png",
    companyWebsite:
      "https://play.google.com/store/apps/details?id=com.horizngames.blockpuzzlemaster",
    positions: [
      {
        id: "1",
        title: "Founder ",
        employmentPeriod: {
          start: "01.2026",
        },
        employmentType: "Full-time",
        icon: <LightbulbIcon />,
        description:
          "- Lead game development and studio operations for Horizn Games.\n- Design and build engaging mobile games from concept to Google Play Store & App Store release.",
        skills: [
          "Unity",
          "Game Development",
          "Game Design",
          "Unreal",
          "Mobile Optimization",
          "Product Management",
        ],
        isExpanded: true,
      },
    ],
    isCurrentEmployer: true,
  },
  {
    id: "mahindra",
    companyName: "Mahindra & Mahindra Group",
    companyLogo: "/images.png",
    companyWebsite: "https://www.mahindra.com/",
    positions: [
      {
        id: "2",
        title: "AI Engineering Intern",
        employmentPeriod: {
          start: "05.2026",
          end: "06.2026",
        },
        employmentType: "Internship",
        icon: <CodeXmlIcon />,
        description: `- Worked on Mahindra’s voice AI platform “Naina”, building conversational intelligence for enterprise user interactions.
- Developed enterprise AI agent solutions across multiple business use-cases to improve automation and customer engagement.
- Contributed to designing scalable AI systems aligned with enterprise-specific requirements and operational needs.

Project: [Naina Voice AI Platform](https://quaric.com)
- Worked on improving voice-based AI assistant capabilities for natural, context-aware enterprise conversations.
- Assisted in enhancing dialogue flows and integration of AI modules for smoother user interactions.
- Supported refinement of response quality using feedback loops and usage analytics.

Project: [AI Search & Schematic Search](https://zadark.com)
- Developed and integrated AI-powered semantic search for improved enterprise knowledge discovery.
- Contributed to integration of search systems within Mahindra’s internal AI platform ecosystem.
- Improved search relevance and accuracy using AI-based ranking and context understanding.`,
        skills: [
          "Generative AI",
          "Semantic Search",
          "Conversational AI",
          "Analytics",
          "AI Automation",
          "Search Systems",
          "Customer Engagement",
          "Product Development",
          "Scalable Systems",
          "Enterprise AI",
        ],
      },
      // {
      //   id: "1",
      //   title: "Founder",
      //   employmentPeriod: {
      //     start: "03.2024",
      //   },
      //   employmentType: "Part-time",
      //   icon: <LightbulbIcon />,
      //   skills: ["Business Ownership", "Business Law", "Business Tax"],
      // },
    ],
    // isCurrentEmployer: true,
  },
  {
    id: "snapchat",
    companyName: "Snap AR Independent Creator",
    companyLogo: "https://cdn.simpleicons.org/snapchat/FFFC00",
    companyWebsite: "https://www.snapchat.com/@tusharv0003",
    positions: [
      {
        id: "2",
        title: "Lens Creator",
        employmentPeriod: {
          start: "09.2025",
        },
        employmentType: "Self-Employed",
        icon: <SparklesIcon />,
        description: `- Designed and published interactive AR lenses for Snapchat using Lens Studio.
- Generated over 1.89M total reach across multiple lens experiences.
- Achieved 2.96M+ lens plays through engaging and viral AR content.
- Drove 33,524+ organic shares through highly engaging AR experiences.
- Built multiple high-performing lenses, with top experiences reaching over 300K users individually.
- Created face filters, visual effects, and immersive experiences for a global audience.
- Leveraged analytics and user behavior insights to optimize reach and engagement.
- Optimized lens performance, usability, and engagement through iterative design improvements.
- Experimented with emerging AR technologies to build innovative social experiences.`,
        skills: [
          "Augmented Reality",
          "Lens Studio",
          "AR Experiences",
          "Creative Technology",
          "Viral Content",
          "Audience Growth",
          "Engagement Optimization",
          "Digital Creativity",
        ],
      },
      //       {
      //         id: "1",
      //         title: "UI Lead",
      //         employmentPeriod: {
      //           start: "10.2022",
      //           end: "01.2026",
      //         },
      //         employmentType: "Full-time",
      //         icon: <DraftingCompassIcon />,
      //         description: `- Ensured UI/UX consistency and high-quality standards.
      // - Designed intuitive, user-focused interfaces aligned with business goals.
      // - Defined and established a cohesive UI style for Simplamo.`,
      //         skills: ["Creativity", "UI/UX Design", "Figma"],
      //       },
    ],
    isCurrentEmployer: true,
  },
  //   {
  //     id: "tungtung",
  //     companyName: "Tung Tung",
  //     companyLogo:
  //       "https://assets.tusharvarshney.com/images/companies/tungtung.webp",
  //     positions: [
  //       {
  //         id: "3",
  //         title: "Web Developer",
  //         employmentPeriod: {
  //           start: "2020",
  //           end: "2022",
  //         },
  //         employmentType: "Full-time",
  //         description: `- Built a scalable design system for consistency and efficiency.
  // - Built a complex rich-text editor based on ProseMirror and Slate for customizable content creation.
  // - Integrated APIs with the Backend Team to enhance functionality.`,
  //         icon: <CodeXmlIcon />,
  //         skills: [
  //           "React",
  //           "Redux",
  //           "Storybook",
  //           "Lerna",
  //           "Agile",
  //           "Teamwork",
  //           "Research",
  //         ],
  //       },
  //       {
  //         id: "2",
  //         title: "Mobile Developer",
  //         employmentPeriod: {
  //           start: "2019",
  //           end: "2020",
  //         },
  //         employmentType: "Full-time",
  //         description: `- Rebuilt the app with React Native for better UX and performance.
  // - Integrated MoMo and in-app purchases for seamless payments.
  // - Optimized deployment for staging and production.
  // - Published on App Store and Google Play, ensuring compliance.`,
  //         icon: <CodeXmlIcon />,
  //         skills: [
  //           "React Native",
  //           "Redux",
  //           "MoMo Payment API",
  //           "App Store",
  //           "Google Play Store",
  //           "App Center",
  //           "Agile",
  //           "Teamwork",
  //           "Research",
  //         ],
  //       },
  //       {
  //         id: "1",
  //         title: "UI/UX Designer",
  //         employmentPeriod: {
  //           start: "2018",
  //           end: "2019",
  //         },
  //         employmentType: "Full-time",
  //         description: `- Designed a Landing Page for enterprise clients.
  // - Redesigned the Online Quiz Platform for a modern look on web and mobile.
  // - Redesigned the Pricing interface for individual customers.
  // - Enhanced UX by improving usability, navigation, and user flow.`,
  //         icon: <DraftingCompassIcon />,
  //         skills: ["UI/UX Design", "Sketch"],
  //       },
  //     ],
  //   },
  {
    id: "freelance",
    companyName: "Freelance",
    positions: [
      {
        id: "2",
        title: "Content Creator",
        employmentPeriod: {
          start: "2023",
          end: "",
        },
        employmentType: "Full-time",
        description: `- Grew faceless social media pages to 350K+ followers across multiple platforms.
- Generated 40M+ views through short-form content, viral videos, and audience-focused strategies.
- Created and edited engaging videos, thumbnails, and promotional content for online growth.
- Worked with multiple clients on branding, content creation, and social media growth strategies.`,
        icon: <VideoIcon />,
        skills: [
          "Content Creation",
          "Social Media Management",
          "Visual Storytelling",
          "Branding",
          "Creative Strategy",
          "Audience Engagement",
          "Content Planning",
          "Short-form Content",
        ],
        isCurrent: true,
      },
      {
        id: "1",
        title: "Graphic & UI/UX Designer",
        employmentPeriod: {
          start: "2018",
          end: "2019",
        },
        employmentType: "Part-time",
        description: "Designed logos, posters, thumbnails, ads, and UI.",
        icon: <DraftingCompassIcon />,
        skills: [
          "Creativity",
          "UI/UX Design",
          "Graphic Design",
          "Sketch",
          "Adobe Photoshop",
          "Adobe Illustrator",
        ],
      },
    ],
  },
  {
    id: "education",
    companyName: "Education",
    positions: [
      {
        id: "4",
        title: "SVKM's Narsee Monjee Institute of Management Studies — MBA",
        employmentPeriod: {
          start: "08.2026",
          end: "07.2028",
        },
        icon: <GraduationCapIcon />,
        description: `- Currently pursuing an MBA focused on business strategy, management, and entrepreneurship.
- Developing expertise in marketing, finance, leadership, and business analytics.
- Building the managerial and strategic capabilities required to lead high-growth startups and innovative organizations.
- Developing expertise in product strategy, go-to-market planning, and scaling technology-driven businesses.
- Exploring financial planning, investment analysis, risk management, and corporate decision-making frameworks.
- Building a strong foundation in entrepreneurship, venture creation, and business model innovation.`,
        skills: [
          "Entrepreneurship",
          "Business Strategy",
          "Financial Management",
          "Business Analytics",
          "Decision Making",
          "Market Research",
          "Brand Management",
          "Marketing",
          "Negotiation",
          "Leadership",
        ],
        isCurrent: true,
      },
      {
        id: "3",
        title: "SVKM's NMIMS — B.Tech in Artificial Intelligence",
        employmentPeriod: {
          start: "08.2023",
          end: "07.2027",
        },
        icon: <GraduationCapIcon />,
        description: `- Pursuing a Bachelor of Technology (B.Tech) in Artificial Intelligence with a focus on intelligent systems, machine learning, and data-driven technologies.
- Building strong foundations in Data Structures & Algorithms, Object-Oriented Programming, Database Management Systems, Operating Systems, and Software Engineering.
- Applying mathematics, probability, statistics, and linear algebra to solve complex computational and AI-related problems.
- Developing AI-powered applications, predictive models, and scalable software systems through project-based learning.
- Participating in technical events, hackathons, innovation programs, and collaborative engineering projects.
- Developing end-to-end products by combining artificial intelligence, full-stack development, and user-centric design.
- Leveraging AI to create innovative solutions across education, productivity, business, and digital experiences.`,
        skills: [
          "AI Development",
          "Machine Learning",
          "NLP",
          "Typescript",
          "DSA",
          "LLM Applications",
          "Systems Design",
          "Database Management",
          "Software Engineering",
          "Teamwork",
        ],
        isCurrent: true,
      },
      {
        id: "2",
        title: "Kishinchand Chellaram College",
        employmentPeriod: {
          start: "06.2021",
          end: "08.2023",
        },
        icon: <GraduationCapIcon />,
        description: `- Developed strong analytical and quantitative reasoning through advanced mathematics and scientific problem-solving.
- Built a solid foundation in classical mechanics, electromagnetism, organic chemistry, and biological sciences.
- Conducted laboratory experiments and practical investigations, strengthening observation and research skills.
- Enhanced critical thinking, logical reasoning, and data interpretation through rigorous coursework.
- Developed effective communication, presentation, and teamwork skills through academic projects and practical work.
- Prepared for competitive examinations while maintaining a strong academic foundation in STEM disciplines.
`,
        skills: [
          "Computer Science",
          "Physics",
          "Chemistry",
          "Economics",
          "Java",
          "Python",
          "Problem Solving",
          "Mathematics",
        ],
      },
      {
        id: "1",
        title: "Bharda New High School & Junior College",
        employmentPeriod: {
          start: "06.2010",
          end: "08.2020",
        },
        icon: <GraduationCapIcon />,
        description: `- Built a strong academic foundation in Science, Mathematics, and Computer Studies.
- Actively participated in inter-school Olympiads, quizzes, and academic competitions.
- Trained in Karate and participated in martial arts events, developing discipline and perseverance.
- Consistently demonstrated leadership, teamwork, and problem-solving skills through school projects and group activities.
- Participated in science exhibitions, annual functions, and co-curricular competitions.
- Developed strong communication, analytical thinking, and time-management skills throughout schooling.
- Graduated with a well-rounded educational background focused on academic excellence and personal growth.`,
        skills: [
          "Science",
          "Mathematics",
          "Computer Basics",
          "Discipline",
          "Logical Reasoning",
        ],
      },
    ],
  },
]
