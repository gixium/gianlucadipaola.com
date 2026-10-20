import type { SiteData } from "./types"
import {
  GraduationCap,
  Briefcase,
  Code,
  Award,
  Hand as Hello,
  LibraryBig as Studies,
  Lightbulb as Idea,
  Target as Aim,
  UserRound,
  // >>> PAPER: uncomment together with the "Publications" nav item below
  // BookOpen,
  // <<< PAPER
} from "lucide-react"

export const landing = [
  { title: "Gianluca Di Paola", subtitle: "Computer Engineer" },
] satisfies SiteData["landing"]

export const navItems = [
  { name: "About", id: "About", icon: UserRound },
  { name: "Education", id: "Education", icon: GraduationCap },
  // >>> PAPER: uncomment when the paper goes public (the section id is "publications")
  // { name: "Publications", id: "Publications", icon: BookOpen },
  // <<< PAPER
  { name: "Projects", id: "Projects", icon: Code },
  { name: "Experience", id: "Experience", icon: Briefcase },
  { name: "Certifications", id: "Certifications", icon: Award },
] satisfies SiteData["navItems"]

export const about = [
  // >>> PAPER: when the paper goes public, replace the first item with this one
  // {
  //   icon: Hello,
  //   text: "Hi, I'm Gianluca, an M.Sc. student in Computer Engineering at Politecnico di Milano and first author of a paper accepted at ICSOC 2026 (CORE A) on the robustness of LLM-based blockchain oracles.",
  // },
  // <<< PAPER
  {
    icon: Hello,
    text: "Hi, I'm Gianluca, an M.Sc. student in Computer Engineering at Politecnico di Milano, specialising in ICT Technologies, Business and Innovation.",
  },
  {
    icon: Studies,
    text: "My bachelor's degree at Politecnico di Milano gave me strong foundations in computer science, engineering, mathematics and electronics. In my Master's I focus on software engineering, software security, databases and performance evaluation, and I received a merit-based tuition fee exemption for my academic results.",
  },
  {
    icon: Idea,
    text: "I build native iOS and macOS apps in Swift (Skené, developed with technical supervision from Bending Spoons), distributed systems in Java, and LLM-based agents and generative AI projects. Alongside engineering, I'm interested in business and management, which my Master's track combines with ICT, and in science in general.",
  },
  {
    icon: Aim,
    text: "I'm looking for internship and software engineering opportunities, as well as research positions such as a PhD. Feel free to get in touch.",
  },
] satisfies SiteData["about"]

export const education = [
  {
    title: "Master of Science Degree in Computer Engineering, ICT, Business and Innovation",
    description: "Politecnico di Milano · 2025 – Present",
    contents: [
      "Current GPA: 3.83/4.0 (28.69/30)",
      "Honors: merit-based tuition fee exemption awarded by Politecnico di Milano for particularly high academic merit",
      "Relevant coursework: Advanced Software Engineering, Software Security, Advanced Database Systems, Advanced Computer Architectures, Performance Evaluation, Process and Service Design (with Camunda), Technologies for Information Systems, Design and Implementation of Mobile Applications, Flutter App Development, Algorithmic Game Theory",
    ],
  },
  {
    title: "Bachelor of Science Degree in Engineering of Computing Systems",
    description: "Politecnico di Milano · 2021 – 2024",
    contents: [
      "Relevant coursework in informatics: Software Engineering, Object-Oriented Programming, Algorithms (fundamental and for bioinformatics), Data Structures, Finite State Machines, Software Defined Networking, Databases and Design, Computer Architecture, Operating Systems, Human-Computer Interaction",
      "Relevant coursework in engineering: Calculus I & II, Linear Algebra, Geometry, Physics, Probability & Statistics, General Chemistry, Automation, Logic & Algebra, Information Systems, Business Economics & Organization, Electronics",
    ],
  },
  {
    title: "High School Diploma in Scientific Studies",
    description: "Liceo Scientifico Statale Benedetto Croce",
    contents: [],
  },
] satisfies SiteData["education"]

// >>> PAPER: uncomment (and keep the "Publications" nav item above in sync). Empty array = the section is not rendered.
export const publications = [
  // {
  //   title: "Assessing the Robustness of LLM-Based Oracles for Blockchain-Based Services",
  //   authors: [
  //     { name: "Gianluca Di Paola", isMe: true },
  //     { name: "Alessandro Vitobello" },
  //     { name: "Elisabetta Di Nitto" },
  //     { name: "Giovanni Quattrocchi" },
  //   ],
  //   description: "ICSOC 2026 · CORE A · Lodz, Poland · December 2026",
  //   status: "Accepted", // later: "Published"
  //   content:
  //     "First-author paper accepted at ICSOC 2026. It evaluates the C-LLM oracle against coordinated malicious nodes across 3 LLM families and 64 configurations: in 35 of them, malicious nodes overtook honest ones in credibility. C-LLM is also compared with human-based oracles (Astraea, DeepThought). The replication package is archived on Zenodo and Software Heritage.",
  //   links: [
  //     { label: "Code and data", url: "https://github.com/deib-polimi/CLLM-Assessment", kind: "code" },
  //     { label: "Zenodo", url: "https://doi.org/10.5281/zenodo.21430174", kind: "data" },
  //     { label: "Software Heritage", url: "https://archive.softwareheritage.org/browse/origin/directory/?origin_url=https://github.com/deib-polimi/CLLM-Assessment", kind: "data" },
  //     // NOTE: once published, add { label: "Paper (DOI)", url: "https://doi.org/10.1007/<real DOI>", kind: "paper" }
  //   ],
  //   badges: ["LLM", "Blockchain oracles", "Robustness evaluation", "Python"],
  //   badgeColor: "purple",
  // },
] satisfies SiteData["publications"]
// <<< PAPER

// Order: most relevant first (the carousel shows the first two cards). Colors never repeat on adjacent cards.
export const projects = [
  {
    title: "Skené",
    description: "Design and Implementation of Mobile Applications · 2025–2026",
    content:
      "Native iOS, iPadOS and macOS app to discover and track TV shows. Team of two (30/30) for Prof. Luciano Baresi's course, with technical supervision from Bending Spoons. Local-first SwiftUI app (MVVM, layered architecture) with SQLite and iCloud sync and no custom backend; TMDB API, QR-code library sharing, notifications and widgets; 90%+ unit-test coverage on core components.",
    link: "https://gianlucadipaola.com/DiPaola_Skene.pdf",
    badges: ["Swift", "SwiftUI", "MVVM", "Repository pattern", "SQLite", "CloudKit", "TMDB API", "Unit testing"],
    badgeColor: "blue",
  },
  {
    title: "Codex Naturalis",
    description: "Software Engineering · 2023",
    content:
      "Team of four (30/30 cum laude): distributed digital version of the Codex Naturalis board game in Java, with MVC architecture, TCP and RMI communication, a JavaFX GUI and a text UI. Advanced features include live chat, multiple matches, and periodic saving with crash recovery.",
    link: "https://github.com/gixium/Codex-Naturalis",
    badges: ["Java", "JavaFX", "Maven", "TCP", "RMI", "MVC", "GUI/TUI"],
    badgeColor: "yellow",
  },
  {
    title: "Virgin of the Rocks Reconstruction",
    description: "Generative AI · Multidisciplinary Project · 2025",
    // NOTE: no public material yet, so no link (the card is not clickable). Add `link: "..."` when a report or repository is published.
    content:
      "Multidisciplinary Project (30/30 cum laude) with the Archivio di Stato di Milano; advisor: Prof. Maristella Matera, working closely with PhD student Luca Cordioli. Transcribed and translated, with the archive's paleographers, the late-15th-century commission contract, which describes a polyptych; benchmarked three text-to-image models and rebuilt each panel with Imagen 3 through iterative prompt engineering.",
    badges: ["Generative AI", "Text-to-image", "Imagen 3", "Flux 1.1 Pro", "Reve Image 1.0", "Prompt engineering"],
    badgeColor: "teal",
  },
  {
    title: "AI Web Navigator",
    description: "AI agent · Newelle extension · 2024",
    content:
      "Team project, open source: an extension for the Newelle assistant in which an LLM agent opens web pages, scrapes and cleans their content, and answers showing the source page, so users can verify each answer. Includes optional integration with Newelle's built-in RAG.",
    link: "https://github.com/gixium/AI-WebNavigator",
    badges: ["Python", "GPT", "LLM agents", "RAG", "Newelle", "Open source"],
    badgeColor: "purple",
  },
  {
    title: "Data Highway",
    description: "Algorithms and Data Structures · 2022",
    content:
      "Solo project (30/30): memory-constrained route-planning engine in C for inputs up to 50 MB, with a custom data structure (a sorted dynamic array with binary search) and greedy backward-recursion path planning, within strict time and memory limits. Validated on 111 test cases and analyzed with Valgrind and Cachegrind.",
    link: "https://github.com/gixium/Data-Highway",
    badges: ["C", "GCC", "GDB", "Valgrind", "Big-O notation", "Unix Shell"],
    badgeColor: "red",
  },
  {
    title: "VentureLabs Flâneur",
    description: "Human-Computer Interaction · 2024–2025",
    content:
      "Team project (29/30) following the full User-Centered Design cycle: needfinding, focus group, personas and scenarios, low- and medium-fidelity Figma prototypes, heuristic evaluation, and usability testing with SUS and SEQ questionnaires.",
    link: "https://github.com/gixium/VentureLabs",
    badges: ["Figma", "User-Centered Design", "UX", "Usability testing", "HTML", "CSS"],
    badgeColor: "blue",
  },
  {
    title: "FPGA Module Design",
    description: "Logic Networks · 2022",
    content:
      "Team project (28/30): VHDL stream-processing module that reads and updates an asynchronous RAM, driven by a 10-state FSM (52 flip-flops, 0 latches) and synthesized for an Artix-7 FPGA in Vivado; it meets a 20 ns clock constraint with 16.2 ns of slack.",
    link: "https://github.com/gixium/FPGA-Module-Design",
    badges: ["VHDL", "FPGA", "Artix-7", "Vivado", "Hardware design", "Git"],
    badgeColor: "pink",
  },
  {
    title: "gianlucadipaola.com",
    description: "This website · 2025",
    content:
      "Solo open-source project: bilingual (EN/IT) static portfolio built with Next.js 15, React 19 and TypeScript, styled with Tailwind CSS and shadcn/ui, and deployed on Cloudflare Pages. All content lives in standalone data files, so updates need no code changes; the focus is on responsive design, performance and accessibility.",
    link: "https://github.com/gixium/gianlucadipaola.com",
    badges: ["TypeScript", "Next.js", "React", "Tailwind CSS", "shadcn/ui", "Framer Motion", "Cloudflare Pages"],
    badgeColor: "teal",
  },
] satisfies SiteData["projects"]

export const experiences = [
  {
    title: "Reply Student Tech Clash: AI Agents",
    description: "Reply · EBEC Milano · BEST Milano · 2024",
    contents: [
      "Finalist team, 2nd place, in a 6-hour hackathon on AI agents.",
      "Built a GPT-based agent that assists users with complex search tasks on polimi.it content, and presented the solution in a complete deck.",
    ],
  },
  {
    title: "TOP: Tutoring Online Program",
    description: "Harvard University · Bocconi University · Bicocca University · CIAI · 2023",
    contents: [
      "Delivered specialized tutoring to a student in difficulty, adapting the learning approach to the student's needs.",
      "Awarded an open badge certifying the skills and knowledge acquired.",
    ],
  },
  {
    title: "Reply Student Tech Clash: Metaverse",
    description: "Reply · EBEC Milano · BEST Milano",
    contents: [
      "Finalist team: contributed to the Metaverse challenge with a presentation on its future applications.",
    ],
  },
  {
    title: "Water and Data Analysis with Bioindicators",
    description: "Sicily Region · ICS Maredolce · 2021",
    contents: [
      "Led a team analysis of the Oreto river with bioindicators, organizing and analyzing the data in Excel.",
      "Provided the Sicily Region with up-to-date data on the state of the river.",
    ],
  },
] satisfies SiteData["experiences"]

export const certifications = [
  {
    title: "Cambridge C1 Advanced (CAE)",
    description: "CEFR level C1 · 2023",
    content: "Certification of advanced English proficiency issued by Cambridge English.",
  },
] satisfies SiteData["certifications"]
