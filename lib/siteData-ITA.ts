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
  // >>> PAPER: decommentare insieme alla voce di menu "Pubblicazioni" qui sotto
  // BookOpen,
  // <<< PAPER
} from "lucide-react"

export const landing = [
  { title: "Gianluca Di Paola", subtitle: "Ingegnere Informatico"},
] satisfies SiteData["landing"]

export const navItems = [
  { name: "Chi sono", id: "About", icon: UserRound },
  { name: "Formazione", id: "Education", icon: GraduationCap },
  // >>> PAPER: decommentare quando il paper sarà pubblico (l'id della sezione è "publications")
  // { name: "Pubblicazioni", id: "Publications", icon: BookOpen },
  // <<< PAPER
  { name: "Progetti", id: "Projects", icon: Code },
  { name: "Esperienze", id: "Experience", icon: Briefcase },
  { name: "Certificazioni", id: "Certifications", icon: Award },
] satisfies SiteData["navItems"]

export const about = [
  // >>> PAPER: quando il paper sarà pubblico, sostituire il primo elemento con questo
  // {
  //   icon: Hello,
  //   text: "Ciao, sono Gianluca, studente di Laurea Magistrale in Ingegneria Informatica al Politecnico di Milano e primo autore di un articolo accettato a ICSOC 2026 (CORE A) sulla robustezza degli oracoli blockchain basati su LLM.",
  // },
  // <<< PAPER
  {
    icon: Hello,
    text: "Ciao, sono Gianluca, studente di Laurea Magistrale in Ingegneria Informatica al Politecnico di Milano, specializzato in tecnologie ICT, Business e Innovazione.",
  },
  {
    icon: Studies,
    text: "La laurea triennale al Politecnico di Milano mi ha dato solide basi in informatica, ingegneria, matematica ed elettronica. Nella Magistrale mi concentro su ingegneria del software, sicurezza del software, basi di dati e valutazione delle prestazioni, e ho ottenuto un esonero dalle tasse universitarie per merito.",
  },
  {
    icon: Idea,
    text: "Sviluppo app native iOS e macOS in Swift (Skené, realizzata con la supervisione tecnica di Bending Spoons), sistemi distribuiti in Java, agenti basati su LLM e progetti di IA generativa. Oltre all'ingegneria, mi interessano il business e il management, che il mio percorso magistrale unisce all'ICT, e la scienza in generale.",
  },
  {
    icon: Aim,
    text: "Cerco opportunità di stage e di lavoro come software engineer, oltre a posizioni di ricerca come il dottorato. Per qualsiasi contatto, scrivimi pure.",
  },
] satisfies SiteData["about"]

export const education = [
  {
    title: "Laurea Magistrale in Ingegneria Informatica, ICT, Business e Innovazione",
    description: "Politecnico di Milano · 2025 – oggi",
    contents: [
      "Media attuale: 28,69/30 (GPA 3,83/4,0)",
      "Riconoscimenti: esonero dalle tasse universitarie per merito, assegnato dal Politecnico di Milano per un merito particolarmente elevato",
      "Corsi rilevanti: Ingegneria del Software Avanzata, Sicurezza del Software, Sistemi Avanzati per Basi di Dati, Architetture Avanzate dei Calcolatori, Valutazione delle Prestazioni, Progettazione di Processi e Servizi (con Camunda), Tecnologie per i Sistemi Informativi, Design and Implementation of Mobile Applications, Sviluppo di App con Flutter, Teoria dei Giochi Algoritmica",
    ],
  },
  {
    title: "Laurea Triennale in Ingegneria Informatica",
    description: "Politecnico di Milano · 2021 – 2024",
    contents: [
      "Corsi rilevanti in informatica: Ingegneria del Software, Programmazione Orientata agli Oggetti, Algoritmi (fondamentali e per la bioinformatica), Strutture Dati, Macchine a Stati Finiti, Software Defined Networking, Database e Progettazione, Architettura dei Calcolatori, Sistemi Operativi, Interazione Uomo-Macchina",
      "Corsi rilevanti in ingegneria: Analisi Matematica I e II, Algebra Lineare, Geometria, Fisica, Probabilità e Statistica, Chimica Generale, Automazione, Logica e Algebra, Sistemi Informativi, Economia e Organizzazione Aziendale, Elettronica",
    ],
  },
  {
    title: "Diploma di Maturità Scientifica",
    description: "Liceo Scientifico Statale Benedetto Croce",
    contents: [],
  },
] satisfies SiteData["education"]

// >>> PAPER: decommentare (e tenere allineata la voce di menu "Pubblicazioni" sopra). Array vuoto = la sezione non viene mostrata.
export const publications = [
  // {
  //   title: "Assessing the Robustness of LLM-Based Oracles for Blockchain-Based Services",
  //   authors: [
  //     { name: "Gianluca Di Paola", isMe: true },
  //     { name: "Alessandro Vitobello" },
  //     { name: "Elisabetta Di Nitto" },
  //     { name: "Giovanni Quattrocchi" },
  //   ],
  //   description: "ICSOC 2026 · CORE A · Lodz, Polonia · dicembre 2026",
  //   status: "Accettato", // poi: "Pubblicato"
  //   content:
  //     "Articolo accettato a ICSOC 2026, come primo autore. Valuta l'oracolo C-LLM contro nodi malevoli coordinati su 3 famiglie di LLM e 64 configurazioni: in 35 di esse i nodi malevoli superano quelli onesti in credibilità. C-LLM è inoltre confrontato con oracoli basati sul giudizio umano (Astraea, DeepThought). Il pacchetto di replica è archiviato su Zenodo e Software Heritage.",
  //   links: [
  //     { label: "Codice e dati", url: "https://github.com/deib-polimi/CLLM-Assessment", kind: "code" },
  //     { label: "Zenodo", url: "https://doi.org/10.5281/zenodo.21430174", kind: "data" },
  //     { label: "Software Heritage", url: "https://archive.softwareheritage.org/browse/origin/directory/?origin_url=https://github.com/deib-polimi/CLLM-Assessment", kind: "data" },
  //     // NOTE: una volta pubblicato, aggiungere { label: "Articolo (DOI)", url: "https://doi.org/10.1007/<DOI reale>", kind: "paper" }
  //   ],
  //   badges: ["LLM", "Oracoli blockchain", "Valutazione della robustezza", "Python"],
  //   badgeColor: "purple",
  // },
] satisfies SiteData["publications"]
// <<< PAPER

// Ordine: i più rilevanti per primi (il carosello mostra le prime due card). Nessun colore ripetuto su card adiacenti.
export const projects = [
  {
    title: "Skené",
    description: "Design and Implementation of Mobile Applications · 2025–2026",
    content:
      "App nativa iOS, iPadOS e macOS per scoprire e tenere traccia delle serie TV. Team di due persone (30/30) per il corso del Prof. Luciano Baresi, con supervisione tecnica di Bending Spoons. App SwiftUI local-first (MVVM, architettura a livelli) con SQLite e sincronizzazione iCloud, senza backend dedicato; API TMDB, condivisione della libreria via QR code, notifiche e widget; copertura dei test unitari superiore al 90% sui componenti principali.",
    link: "https://gianlucadipaola.com/DiPaola_Skene.pdf",
    badges: ["Swift", "SwiftUI", "MVVM", "Pattern Repository", "SQLite", "CloudKit", "TMDB API", "Test unitari"],
    badgeColor: "blue",
  },
  {
    title: "Codex Naturalis",
    description: "Ingegneria del Software · 2023",
    content:
      "Team di quattro persone (30/30 con lode): versione digitale distribuita del gioco da tavolo Codex Naturalis in Java, con architettura MVC, comunicazione TCP e RMI, interfaccia JavaFX e interfaccia testuale. Funzionalità avanzate: chat dal vivo, partite multiple e salvataggio periodico con ripristino dopo un crash.",
    link: "https://github.com/gixium/Codex-Naturalis",
    badges: ["Java", "JavaFX", "Maven", "TCP", "RMI", "MVC", "GUI/TUI"],
    badgeColor: "yellow",
  },
  {
    title: "Virgin of the Rocks Reconstruction",
    description: "IA generativa · Multidisciplinary Project · 2025",
    // NOTE: nessun materiale pubblico, quindi nessun link (la card non è cliccabile). Aggiungere `link: "..."` quando sarà pubblicato un report o un repository.
    content:
      "Multidisciplinary Project (30/30 con lode) con l'Archivio di Stato di Milano; docente guida: Prof.ssa Maristella Matera, a stretto contatto con il dottorando Luca Cordioli. Trascrizione e traduzione, con i paleografi dell'Archivio, del contratto di committenza di fine Quattrocento, che descrive un polittico; confronto di tre modelli text-to-image e ricostruzione di ogni pannello con Imagen 3 tramite prompt engineering iterativo.",
    badges: ["IA generativa", "Text-to-image", "Imagen 3", "Flux 1.1 Pro", "Reve Image 1.0", "Prompt engineering"],
    badgeColor: "teal",
  },
  {
    title: "AI Web Navigator",
    description: "Agente AI · Estensione Newelle · 2024",
    content:
      "Progetto di gruppo open source: estensione per l'assistente Newelle in cui un agente LLM apre le pagine web, ne estrae e ripulisce il contenuto e risponde mostrando la pagina di origine, così da poter verificare ogni risposta. Include l'integrazione opzionale con la RAG integrata di Newelle.",
    link: "https://github.com/gixium/AI-WebNavigator",
    badges: ["Python", "GPT", "Agenti LLM", "RAG", "Newelle", "Open source"],
    badgeColor: "purple",
  },
  {
    title: "Data Highway",
    description: "Algoritmi e Strutture Dati · 2022",
    content:
      "Progetto individuale (30/30): motore di pianificazione di percorsi in C con vincoli di memoria, per input fino a 50 MB, con una struttura dati personalizzata (array dinamico ordinato con ricerca binaria) e pianificazione greedy con ricorsione all'indietro, entro rigidi limiti di tempo e memoria. Validato su 111 casi di test e analizzato con Valgrind e Cachegrind.",
    link: "https://github.com/gixium/Data-Highway",
    badges: ["C", "GCC", "GDB", "Valgrind", "Notazione Big-O", "Unix Shell"],
    badgeColor: "red",
  },
  {
    title: "VentureLabs Flâneur",
    description: "Interazione Uomo-Macchina · 2024–2025",
    content:
      "Progetto di gruppo (29/30) che segue l'intero ciclo di User-Centered Design: needfinding, focus group, personas e scenari, prototipi Figma a bassa e media fedeltà, valutazione euristica e test di usabilità con questionari SUS e SEQ.",
    link: "https://github.com/gixium/VentureLabs",
    badges: ["Figma", "User-Centered Design", "UX", "Test di usabilità", "HTML", "CSS"],
    badgeColor: "blue",
  },
  {
    title: "FPGA Module Design",
    description: "Reti Logiche · 2022",
    content:
      "Progetto di gruppo (28/30): modulo VHDL di elaborazione di flussi di dati che legge e aggiorna una RAM asincrona, guidato da una FSM a 10 stati (52 flip-flop, 0 latch) e sintetizzato su FPGA Artix-7 con Vivado; rispetta un vincolo di clock di 20 ns con 16,2 ns di slack.",
    link: "https://github.com/gixium/FPGA-Module-Design",
    badges: ["VHDL", "FPGA", "Artix-7", "Vivado", "Progettazione hardware", "Git"],
    badgeColor: "pink",
  },
  {
    title: "gianlucadipaola.com",
    description: "Questo sito web · 2025",
    content:
      "Progetto individuale open source: portfolio statico bilingue (EN/IT) sviluppato con Next.js 15, React 19 e TypeScript, stilizzato con Tailwind CSS e shadcn/ui e pubblicato su Cloudflare Pages. Tutti i contenuti stanno in file di dati separati, quindi aggiornarli non richiede modifiche al codice; particolare attenzione a design responsive, prestazioni e accessibilità.",
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
      "Team finalista, 2° posto, in un hackathon di 6 ore dedicato agli agenti AI.",
      "Sviluppato un agente basato su GPT che assiste l'utente in ricerche complesse sui contenuti di polimi.it, con presentazione completa della soluzione.",
    ],
  },
  {
    title: "TOP: Tutoring Online Program",
    description: "Harvard University · Università Bocconi · Università Bicocca · CIAI · 2023",
    contents: [
      "Tutoraggio specializzato a uno studente con difficoltà, adattando il metodo di apprendimento alle sue esigenze.",
      "Open badge assegnato a riconoscimento delle competenze e conoscenze acquisite.",
    ],
  },
  {
    title: "Reply Student Tech Clash: Metaverse",
    description: "Reply · EBEC Milano · BEST Milano",
    contents: [
      "Team finalista: contributo alla sfida sul Metaverso con una presentazione sulle sue future applicazioni.",
    ],
  },
  {
    title: "Water and Data Analysis with Bioindicators",
    description: "Regione Sicilia · ICS Maredolce · 2021",
    contents: [
      "Guida di un team nell'analisi del fiume Oreto con bioindicatori, organizzando e analizzando i dati in Excel.",
      "Dati aggiornati sullo stato del fiume forniti alla Regione Sicilia.",
    ],
  },
] satisfies SiteData["experiences"]

export const certifications = [
  {
    title: "Cambridge C1 Advanced (CAE)",
    description: "Livello C1 QCER · 2023",
    content: "Certificazione di inglese avanzato rilasciata da Cambridge English.",
  },
] satisfies SiteData["certifications"]
