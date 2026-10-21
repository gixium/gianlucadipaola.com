export function StructuredData() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://gianlucadipaola.com/#person",
        name: "Gianluca Di Paola",
        givenName: "Gianluca",
        familyName: "Di Paola",
        jobTitle: "Computer Engineer",
        url: "https://gianlucadipaola.com",
        image: "https://gianlucadipaola.com/preview.jpg",
        email: "mailto:ing@gianlucadipaola.com",
        sameAs: [
          "https://github.com/gixium",
          "https://linkedin.com/in/gianlucadipaola",
        ],
        alumniOf: {
          "@type": "CollegeOrUniversity",
          name: "Politecnico di Milano",
          url: "https://www.polimi.it",
        },
        knowsAbout: [
          "Computer Engineering",
          "Software Engineering",
          "Distributed Systems",
          "iOS App Development",
          "Swift",
          "Java",
          "Artificial Intelligence",
          "LLM-based Agents",
          "Next.js",
          "React",
          "TypeScript",
        ],
      },
      {
        "@type": "WebSite",
        "@id": "https://gianlucadipaola.com/#website",
        url: "https://gianlucadipaola.com",
        name: "Gianluca Di Paola — Portfolio",
        description:
          "Portfolio professionale: progetti, competenze ed esperienze nel campo dell'ingegneria informatica.",
        publisher: {
          "@id": "https://gianlucadipaola.com/#person",
        },
        inLanguage: ["it-IT", "en-US"],
      },
      {
        "@type": "ProfilePage",
        "@id": "https://gianlucadipaola.com/#profilepage",
        url: "https://gianlucadipaola.com",
        name: "Gianluca Di Paola — Computer Engineer | Politecnico di Milano",
        isPartOf: {
          "@id": "https://gianlucadipaola.com/#website",
        },
        mainEntity: {
          "@id": "https://gianlucadipaola.com/#person",
        },
        description:
          "Portfolio professionale di Gianluca Di Paola: progetti software, competenze ed esperienze nel campo dell'ingegneria informatica.",
      },
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}
