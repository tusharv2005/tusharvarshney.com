import {
  CodeXmlIcon,
  DraftingCompassIcon,
  GraduationCapIcon,
  LightbulbIcon,
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
          "- Lead game development and studio operations for Horizn Games.\n- Design and build engaging mobile games from concept to Google Play Store release.",
        skills: [
          "Unity",
          "Game Development",
          "Game Design",
          "Mobile Optimization",
          "Product Management",
        ],
        isExpanded: true,
      },
    ],
    isCurrentEmployer: true,
  },
  {
    id: "quaric",
    companyName: "Quaric",
    companyLogo:
      "https://assets.tusharvarshney.com/images/companies/quaric.svg",
    companyWebsite: "https://quaric.com",
    positions: [
      {
        id: "2",
        title: "Design Engineer",
        employmentPeriod: {
          start: "03.2024",
        },
        employmentType: "Part-time",
        icon: <CodeXmlIcon />,
        description: `- Created Quaric Brand Identity.
- Created the Quaric Design System to standardize design practices and accelerate development.

In-house Project: [Quaric Website](https://quaric.com)
- Designed the UI/UX for Quaric Website, delivering a seamless experience.
- Developed online ordering to streamline purchases.
- Integrated VNPAY-QR for secure transactions.
- Registered the e-commerce site with [online.gov.vn](http://online.gov.vn/website/chi-tiet-115855) for compliance.

In-house Project: [ZaDark](https://zadark.com)
- Build and maintain ZaDark.com with Docusaurus, integrating AdSense.
- Develop and maintain the ZaDark extension for Zalo Web on Chrome, Safari, Edge, and Firefox — with 20k+ active users via Chrome Web Store (as of Sep 2025).`,
        skills: [
          "Next.js",
          "Strapi",
          "Auth0",
          "VNPAY-QR",
          "Docker",
          "NGINX",
          "Google Cloud",
          "Docusaurus",
          "Extension",
          "UI/UX Design",
          "UX Writing",
          "Design System",
          "Brand Design",
          "Figma",
          "Research",
        ],
      },
      {
        id: "1",
        title: "Founder",
        employmentPeriod: {
          start: "03.2024",
        },
        employmentType: "Part-time",
        icon: <LightbulbIcon />,
        skills: ["Business Ownership", "Business Law", "Business Tax"],
      },
    ],
    isCurrentEmployer: true,
  },
  {
    id: "simplamo",
    companyName: "Simplamo",
    companyLogo:
      "https://assets.tusharvarshney.com/images/companies/simplamo.webp",
    positions: [
      {
        id: "2",
        title: "Senior Frontend Developer",
        employmentPeriod: {
          start: "10.2022",
          end: "01.2026",
        },
        employmentType: "Full-time",
        icon: <CodeXmlIcon />,
        description: `- Built Tree & Gantt views features to improve goal organization, visibility, and progress tracking.
- Developed [AI Chat](https://help.simplamo.com/features/simplamo-ai/ai-chat/guide_simplamo_ai_chat?ref=IN-926722) and [AI Assistant](https://help.simplamo.com/features/simplamo-ai/ai-expert/aiexpert-rockdiscribe?ref=IN-926722) features.
- Developed [Whiteboards](https://help.simplamo.com/features/whiteboard/overview?ref=IN-926722) with real-time collaboration.
- Built and maintained the [Zalo Mini App](https://zalo.me/s/1736112917405511258/) for Simplamo with seamless integration.
- Developed interactive chart and analytics widgets for the [Dashboard](https://help.simplamo.com/features/dashboard/overview) to enhance data visualization.
- Developed and maintained core features to enhance functionality and user experience.
- Ensured UI/UX consistency and adherence to standards.
- Implemented robust frontend solutions for web and mobile platforms.
- Analyzed technical capabilities and provided optimal solutions.`,
        skills: [
          "TypeScript",
          "Next.js",
          "React Native",
          "MobX",
          "MobX-State-Tree",
          "Tailwind CSS",
          "Dify",
          "Zalo Mini App",
          "Agile",
          "Teamwork",
          "Research",
          "Problem-solving",
        ],
      },
      {
        id: "1",
        title: "UI Lead",
        employmentPeriod: {
          start: "10.2022",
          end: "01.2026",
        },
        employmentType: "Full-time",
        icon: <DraftingCompassIcon />,
        description: `- Ensured UI/UX consistency and high-quality standards.
- Designed intuitive, user-focused interfaces aligned with business goals.
- Defined and established a cohesive UI style for Simplamo.`,
        skills: ["Creativity", "UI/UX Design", "Figma"],
      },
    ],
  },
  {
    id: "tungtung",
    companyName: "Tung Tung",
    companyLogo:
      "https://assets.tusharvarshney.com/images/companies/tungtung.webp",
    positions: [
      {
        id: "3",
        title: "Web Developer",
        employmentPeriod: {
          start: "2020",
          end: "2022",
        },
        employmentType: "Full-time",
        description: `- Built a scalable design system for consistency and efficiency.
- Built a complex rich-text editor based on ProseMirror and Slate for customizable content creation.
- Integrated APIs with the Backend Team to enhance functionality.`,
        icon: <CodeXmlIcon />,
        skills: [
          "React",
          "Redux",
          "Storybook",
          "Lerna",
          "Agile",
          "Teamwork",
          "Research",
        ],
      },
      {
        id: "2",
        title: "Mobile Developer",
        employmentPeriod: {
          start: "2019",
          end: "2020",
        },
        employmentType: "Full-time",
        description: `- Rebuilt the app with React Native for better UX and performance.
- Integrated MoMo and in-app purchases for seamless payments.
- Optimized deployment for staging and production.
- Published on App Store and Google Play, ensuring compliance.`,
        icon: <CodeXmlIcon />,
        skills: [
          "React Native",
          "Redux",
          "MoMo Payment API",
          "App Store",
          "Google Play Store",
          "App Center",
          "Agile",
          "Teamwork",
          "Research",
        ],
      },
      {
        id: "1",
        title: "UI/UX Designer",
        employmentPeriod: {
          start: "2018",
          end: "2019",
        },
        employmentType: "Full-time",
        description: `- Designed a Landing Page for enterprise clients.
- Redesigned the Online Quiz Platform for a modern look on web and mobile.
- Redesigned the Pricing interface for individual customers.
- Enhanced UX by improving usability, navigation, and user flow.`,
        icon: <DraftingCompassIcon />,
        skills: ["UI/UX Design", "Sketch"],
      },
    ],
  },
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
- Built content strategies focused on branding, audience engagement, and platform optimization.`,
        icon: <CodeXmlIcon />,
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
          start: "06.2023",
          end: "Present",
        },
        icon: <GraduationCapIcon />,
        description: `- Currently pursuing an MBA focused on business strategy, management, and entrepreneurship.
- Developing expertise in marketing, finance, leadership, and business analytics.
- Achieved several awards, including:
  - Bronze Medal — 10th Design, Manufacturing, and Application Award 2022
  - 2nd Prize — Business Startup Competition 2019`,
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
          start: "06.2023",
          end: "Present",
        },
        icon: <GraduationCapIcon />,
        description: `- Currently studying for a Bachelor’s degree in Information Systems.
- Language Proficiency: B1 level in English (CEFR).
- Achieved several awards, including:
  - Bronze Medal — 10th Design, Manufacturing, and Application Award 2022
  - 2nd Prize — Business Startup Competition 2019`,
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
        description: `- Student of the Specialized Computer Science Program.
- Granted direct admission to university due to achieving 3rd Prize at the national level.
- [Achieved numerous awards](https://baocantho.com.vn/tushar-varshney-17-tuoi-va-19-giai-thuong-a97348.html) at city and national levels, including:
  - [3rd Prize](https://muctim.tuoitre.vn/cong-cu-ho-tro-viec-day-va-hoc-55107.htm) — National Science and Engineering Fair 2018 (ViSEF)
  - 1st Prize — Can Tho City Science and Engineering Fair 2018
  - Creativity Award — Binh Duong Hackathon 2017
  - Consolation Prize — National Youth and Children’s Creativity Contest 2016
  - [1st Prize](https://www.youtube.com/watch?v=OYgugvjqU4A) — Can Tho City Youth and Children’s Creativity Contest 2016
  - 3rd Prize — National Young Informatics Contest 2016
- Achieved the title of Outstanding Student from Grade 10-12.
- Selected for the National Excellent Student Contest in Informatics for two consecutive years during high school.
- Honored on the school’s “Hall of Fame” for academic achievements.
- Developed a feature using Node.js and Pandoc to recognize multiple-choice questions from .docx files and upload them to an [online quiz platform](https://youtu.be/QjR99wdmTyo) I created.
- Developed websites based on Laravel framework.
- Built websites with PHP and MySQL, following the MVC architecture.`,
        skills: [
          "Computer Science",
          "Physics",
          "Chemistry",
          "Economics",
          "Java",
          "Python",
          "Problem Solving",
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
        description: `- Recognized as the most outstanding student of the district.
- Achieved numerous awards at city and national levels:
  - Consolation Prize — National Young Informatics Contest 2015
  - Consolation Prize — National Young Informatics Contest 2014
  - 1st Prize — Can Tho City Young Informatics Contest 2014
- Achieved the title of Outstanding Student from Grade 6-9.
- Developed websites using the open-source NukeViet CMS.`,
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
