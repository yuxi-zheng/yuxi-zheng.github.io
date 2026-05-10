import React, { useMemo, useState } from "react";

const profile = {
  name: "Yuxi Zheng",
  chineseName: "郑雨夕",
  subtitle: "Ph.D. Student in Theoretical Computer Science",
  affiliation: "EPFL",
  location: "Lausanne, Switzerland",
  email: "yuxi.zheng@epfl.ch",
  scholarUrl: "https://scholar.google.com/citations?user=fxooVZMAAAAJ&hl=en",
  advisorUrl: "https://ic-people.epfl.ch/~achiesa/",
};

const links = [{ label: "Google Scholar", href: profile.scholarUrl }];

const authorLinks = {
  "Krishna Agaram": "https://mathismusic.github.io/website2024/about/",
  "Nick Spooner": "https://spooner.cc/",
  "Alessandro Chiesa": "https://ic-people.epfl.ch/~achiesa/",
  "Zijing Di": "https://dizidizidi.github.io/",
  "Zihan Hu": "https://zihanhu.cn/",
  "Sachin K. Thekke Veettil": "https://orcid.org/0000-0003-4852-2839",
  "Uwe Hernandez Acosta": "https://orcid.org/0000-0002-6182-1481",
  "Damar Wicaksono": "https://orcid.org/0000-0001-8587-7730",
  "Michael Hecht": "https://www.casus.science/?page_id=4528",
};

const skatingLinks = {
  pufsc: "https://figureskatingclub.campusrec.princeton.edu/",
  lausanneIceGenesis: "https://www.lausanneicegenesis.com/",
};

const researchInterests = [
  "theoretical computer science",
  "post-quantum and quantum cryptography",
  "proof systems",
];

const publications = [
  {
    title: "Quantum Advantage in Proof Systems without Entanglement",
    venue:
      "ICALP 2026",
    authors: "Krishna Agaram, Nick Spooner, Yuxi Zheng",
    abstract: `The study of interactive proofs in the quantum setting has yielded profound insights in complexity theory and quantum information. A curious feature of these results is that the advantage, in terms of computational power, of quantum models over their classical counterparts is usually due to entanglement phenomena rather than quantum communication with the verifier. For example, it is known that QIP = IP = PSPACE, and QMIP with unentangled provers is equal to NEXP = MIP; on the other hand, MIP* = RE.

    In this work we initiate the general study of (quantum) \\emph{positional} multi-prover interactive proofs ((Q)PMIP), in which provers and verifiers positioned in space communicate freely save for the constraints imposed by the speed of light. We investigate how the class of languages decidable by (Q)PMIPs depends on the arrangement of the verifiers and (honest) provers. In the case of classical PMIPs, we show a dichotomy: if the arrangement satisfies what we call the \`\`min-ball'' condition, then the class is NEXP, otherwise it is PSPACE. We then exhibit an arrangement that \\emph{does not} satisfy the min-ball condition for which there is a \\emph{quantum} PMIP for EXP in the no pre-shared entanglement model.

    Our construction is based on positional cryptography and MIPs with no-signaling soundness. We introduce a new positional primitive, the positional hardcore bit, which allows a pair of spatially separated players to transmit a random bit to a particular location while guaranteeing that it remains strongly unguessable elsewhere.`,
    links: [],
  },
  {
    title:
      "How to Prove Post-Quantum Security for Succinct Non-Interactive Reductions",
    venue: "Eurocrypt 2026",
    authors: "Alessandro Chiesa, Zijing Di, Zihan Hu, Yuxi Zheng",
    abstract:
      "Hash-based succinct non-interactive arguments are widely used because they are efficient, easy to deploy, and believed to have post-quantum security. This work studies hash-based succinct non-interactive reductions and proves security in the quantum random oracle model under a natural post-quantum analogue of state-restoration security. It also develops a modular framework for proving security of the extended BCS transformation via quantum extraction properties for vector commitments.",
    links: [{ label: "arXiv", href: "https://eprint.iacr.org/2025/2166" }],
  },
];

const otherManuscripts = [
  {
    title:
      "Multivariate Polynomial Regression of Euclidean Degree Extends the Stability for Fast Approximations of Trefethen Functions",
    venue: "",
    authors:
      "Sachin K. Thekke Veettil, Yuxi Zheng, Uwe Hernandez Acosta, Damar Wicaksono, Michael Hecht",
    abstract:
      "This work studies multivariate polynomial regression through general polynomial lp-degree notions, including total, Euclidean, and maximum degree. It shows that choosing Euclidean degree gives improved resistance to instability in fast function approximation, especially for a class of analytic functions called Trefethen functions, and complements the regression scheme with adaptive domain decomposition.",
    links: [{ label: "arXiv", href: "https://arxiv.org/abs/2212.11706" }],
  },
  {
    title: "Lattice-Based Knowledge Assumption and IND-CCA1 Scheme",
    venue: "Princeton University senior thesis, 2023",
    authors: "Yuxi Zheng",
    abstract:
      "This thesis introduces a lattice-based encryption scheme, Dual LWE ElGamal ($\\mathcal{DLEG}$) that is IND-CCA1 secure and is relatively simple to construct. The scheme is an analog to Damgaard's ElGamal encryption scheme, which is also IND-CCA1 secure. The scheme is constructed using lattice trapdoors and its security relies on a lattice analog of the Knowledge of Exponent Assumption, called the Knowledge of LWE Secret Assumption (LWEK). This thesis motivates the construction of $\\mathcal{DLEG}$ scheme and gives a proof of security. We also show that LWEK is a member of Subset Witness Assumptions (SWK) and discuss some possible future work.",
    links: [
      {
        label: "DataSpace",
        href: "https://dataspace.princeton.edu/handle/88435/dsp01kw52jc347",
      },
    ],
  },
];

const talks = [
  {
    title:
      "How to Prove Post-Quantum Security for Succinct Non-Interactive Reductions",
    appearances: [
      {
        venue: "Chinese University of Hong Kong",
        date: "December 2025",
      },
      {
        venue: "CWI",
        date: "January 2026",
      },
    ],
  },
];

const teaching = [
  {
    course: "MATH489 Number Theory II.c — Cryptography",
    // instructor: "Dimitar Jetchev",
    role: "Teaching Assistant",
    institution: "EPFL",
    terms: "Spring 2024, Spring 2025",
  },
  {
    course: "COM402 Information Security and Privacy",
    // instructor: "Mathias Josef Payer",
    role: "Teaching Assistant",
    institution: "EPFL",
    terms: "Fall 2024, Fall 2025",
  },
  {
    course: "MAT473 Cryptography",
    role: "Teaching Assistant",
    institution: "Princeton",
    terms: "Spring 2023",
  },
  {
    course: "COS126 Computer Science An Interdisciplinary Approach",
    role: "Lab TA and grader",
    institution: "Princeton",
    terms: "Spring 2020, Fall 2021, Spring 2021",
  },
];

const service = [
  {
    role: "External Reviewer",
    venues: "TQC 2026, FOCS 2025, Eurocrypt 2024, Journal of the ACM 2024",
  },
];

/* Put your photos inside public/photos/ with these exact names. */
const siteBase = import.meta.env.BASE_URL;

const photoList = [
  `${siteBase}photos/yuxi1.jpg`,
  `${siteBase}photos/yuxi2.jpg`,
  `${siteBase}photos/yuxi3.jpg`,
  `${siteBase}photos/yuxi4.jpg`,
  `${siteBase}photos/yuxi5.jpg`,
  `${siteBase}photos/yuxi6.jpg`,
  `${siteBase}photos/yuxi7.jpg`,
  `${siteBase}photos/yuxi8.jpg`,
  `${siteBase}photos/yuxi9.jpg`,
  `${siteBase}photos/yuxi10.jpg`,
  `${siteBase}photos/yuxi11.jpg`,
];

function Header() {
  return (
    <header className="site-header">
      <nav>
        <a href="#about">About</a>
        <a href="#publications">Publications</a>
        <a href="#other-manuscripts">Other manuscripts</a>
        <a href="#talks">Talks</a>
        <a href="#teaching">Teaching</a>
        <a href="#service">Service</a>
        <a href="#misc">Miscellaneous</a>
      </nav>
    </header>
  );
}

function Portrait({ src, fallbackSrc }) {
  const [currentSrc, setCurrentSrc] = useState(src);

  return (
    <div className="portrait-shell">
      <div className="portrait">
        <img
          src={currentSrc}
          alt="Yuxi Zheng"
          className="portrait-image"
          onError={() => {
            if (currentSrc !== fallbackSrc) {
              setCurrentSrc(fallbackSrc);
            }
          }}
        />
      </div>
    </div>
  );
}

function Authors({ authors }) {
  const names = authors.split(", ");

  return names.map((name, index) => {
    const href = authorLinks[name];
    const separator = index < names.length - 1 ? ", " : "";
    const author = href ? (
      <a href={href} target="_blank" rel="noreferrer">
        {name}
      </a>
    ) : (
      name
    );

    return (
      <React.Fragment key={name}>
        {author}
        {separator}
      </React.Fragment>
    );
  });
}

function Publication({ paper }) {
  const [open, setOpen] = useState(false);

  return (
    <article className="publication">
      <h3>{paper.title}</h3>
      {paper.venue && <p className="venue">{paper.venue}</p>}
      <p className="authors">
        <Authors authors={paper.authors} />
      </p>

      <div className="paper-links">
        {paper.links.map((link) => (
          <a key={link.label} href={link.href} target="_blank" rel="noreferrer">
            {link.label}
          </a>
        ))}
        <button type="button" onClick={() => setOpen(!open)}>
          {open ? "hide abstract" : "abstract"}
        </button>
      </div>

      {open && <p className="abstract">{paper.abstract}</p>}
    </article>
  );
}

function Talk({ talk }) {
  return (
    <li>
      <span className="item-title">{talk.title}</span>
      {talk.appearances.map((appearance) => (
        <React.Fragment key={`${appearance.venue}-${appearance.date}`}>
          <br />
          <span className="muted">
            {appearance.venue}, {appearance.date}
          </span>
        </React.Fragment>
      ))}
    </li>
  );
}

function TeachingItem({ item }) {
  return (
    <li>
      <span className="item-title">{item.course}</span>{" "}
      <span className="muted">({item.institution})</span>
      <br />
      <span className="muted">
        {item.role}; {item.terms}
      </span>
    </li>
  );
}

export default function App() {
  const selectedPhoto = useMemo(() => {
    const index = Math.floor(Math.random() * photoList.length);
    return photoList[index];
  }, []);

  return (
    <>
      <style>{styles}</style>

      <main className="page">
        <Header />

        <section id="about" className="hero section">
          <Portrait src={selectedPhoto} fallbackSrc={photoList[0]} />

          <div className="intro">
            <h1>
              {profile.name} <span className="chinese-name">{profile.chineseName}</span>
            </h1>

            <p>
              I am a third-year Ph.D. student at EPFL in the COMSEC lab, advised
              by{" "}
              <a href={profile.advisorUrl} target="_blank" rel="noreferrer">
                Prof. Alessandro Chiesa
              </a>
              . I received my B.S. in Mathematics from Princeton University in
              2023 and minored in Computer Science and German Literature.
            </p>

            <p>
              I am broadly interested in {researchInterests[0]}, particularly in{" "}
              {researchInterests[1]} and {researchInterests[2]}.
            </p>

            <p className="contact">
              <a href={`mailto:${profile.email}`}>{profile.email}</a>
              {links.map((link) => (
                <span key={link.label}>
                  <span className="dot"> · </span>
                  <a href={link.href} target="_blank" rel="noreferrer">
                    {link.label}
                  </a>
                </span>
              ))}
            </p>
          </div>
        </section>

        <section id="publications" className="section">
          <h2>Publications</h2>
          <div className="publication-list">
            {publications.map((paper) => (
              <Publication key={paper.title} paper={paper} />
            ))}
          </div>
        </section>

        <section id="other-manuscripts" className="section">
          <h2>Other manuscripts</h2>
          <div className="publication-list">
            {otherManuscripts.map((paper) => (
              <Publication key={paper.title} paper={paper} />
            ))}
          </div>
        </section>

        <section id="talks" className="section">
          <h2>Talks</h2>
          <ul>
            {talks.map((talk) => (
              <Talk key={talk.title} talk={talk} />
            ))}
          </ul>
        </section>

        <section id="teaching" className="section">
          <h2>Teaching</h2>
          <ul>
            {teaching.map((item) => (
              <TeachingItem
                key={`${item.course}-${item.institution}-${item.terms}`}
                item={item}
              />
            ))}
          </ul>
        </section>

        <section id="service" className="section">
          <h2>Service</h2>
          <ul>
            {service.map((item) => (
              <li key={item.role}>
                <span className="item-title">{item.role}</span>:{" "}
                <span className="muted">{item.venues}</span>
              </li>
            ))}
          </ul>
        </section>

        <section id="misc" className="section">
          <h2>Miscellaneous</h2>
          <p>
            In my free time, I like to do figure skating and was previously a member of the
            synchro team at{" "}
            <a href={skatingLinks.pufsc} target="_blank" rel="noreferrer">
              PUFSC
            </a>{" "}
            and{" "}
            <a
              href={skatingLinks.lausanneIceGenesis}
              target="_blank"
              rel="noreferrer"
            >
              Lausanne Ice Genesis
            </a>
            . Other than that, I enjoy drawing, playing the piano, hiking, skating on natural lakes and
            gardening.
          </p>
        </section>

        <footer>
          © {new Date().getFullYear()} {profile.name}
        </footer>
      </main>
    </>
  );
}

const styles = `
:root {
  --background: #ffffff;
  --text: #222222;
  --muted: #555555;
  --link: #1f5f9f;
  --line: #dddddd;
  --max-width: 920px;
}

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  background: var(--background);
  color: var(--text);
  font-family: Arial, Helvetica, sans-serif;
  font-size: 16px;
  line-height: 1.55;
}

a {
  color: var(--link);
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

.page {
  width: min(var(--max-width), calc(100% - 40px));
  margin: 0 auto;
  padding: 28px 0 48px;
}

.site-header {
  margin-bottom: 42px;
}

.site-header nav {
  display: flex;
  flex-wrap: wrap;
  gap: 22px;
}

.site-header a {
  font-size: 1rem;
}

.section {
  margin-bottom: 36px;
  scroll-margin-top: 30px;
}

.hero {
  display: grid;
  grid-template-columns: 260px 1fr;
  gap: 38px;
  align-items: start;
}

.portrait-shell {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding-top: 6px;
}

.portrait {
  width: 230px;
  height: 310px;
  overflow: hidden;
  background: #f4f4f4;
  border-radius: 50%;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
}

.portrait-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center center;
  display: block;
}

h1,
h2,
h3,
p {
  margin-top: 0;
}

h1 {
  margin-bottom: 10px;
  font-family: "Avenir Next", Avenir, "Helvetica Neue", Arial, sans-serif;
  font-size: 2.45rem;
  line-height: 1.08;
  font-weight: 600;
}

.chinese-name {
  color: var(--muted);
  font-family: "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", sans-serif;
  font-size: 1.55rem;
  font-weight: 400;
  white-space: nowrap;
}

h2 {
  margin-bottom: 14px;
  font-family: Georgia, "Times New Roman", serif;
  font-size: 1.55rem;
  font-weight: 500;
}

h3 {
  margin-bottom: 5px;
  font-size: 1rem;
  line-height: 1.45;
  font-weight: 600;
}

.subtitle {
  margin-bottom: 22px;
  color: var(--muted);
}

.intro p {
  max-width: 68ch;
}

.contact {
  margin-top: 20px;
}

.dot,
.muted {
  color: var(--muted);
}

.publication-list {
  display: grid;
  gap: 22px;
}

.publication {
  margin-bottom: 4px;
}

.venue {
  margin-bottom: 4px;
}

.authors {
  margin-bottom: 6px;
  color: var(--muted);
}

.paper-links {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 6px;
}

.paper-links a::before,
.paper-links button::before {
  content: "[";
  color: var(--text);
}

.paper-links a::after,
.paper-links button::after {
  content: "]";
  color: var(--text);
}

.paper-links button {
  border: none;
  background: none;
  color: var(--link);
  padding: 0;
  font: inherit;
  cursor: pointer;
}

.paper-links button:hover {
  text-decoration: underline;
}

.abstract {
  max-width: 78ch;
  margin-top: 10px;
}

ul {
  margin-top: 0;
  padding-left: 1.25rem;
}

li {
  margin-bottom: 10px;
}

.item-title {
  font-weight: 600;
}

footer {
  margin-top: 42px;
  color: var(--muted);
  font-size: 0.95rem;
}

@media (max-width: 720px) {
  .page {
    width: min(100% - 28px, var(--max-width));
    padding-top: 22px;
  }

  .site-header {
    margin-bottom: 32px;
  }

  .site-header nav {
    gap: 14px;
  }

  .hero {
    grid-template-columns: 1fr;
    gap: 22px;
  }

  .portrait-shell {
    justify-content: flex-start;
  }

  .portrait {
    width: 220px;
    height: 295px;
    border-radius: 50%;
  }

  h1 {
    font-size: 2.15rem;
  }

  .chinese-name {
    display: block;
    margin-top: 4px;
    font-size: 1.35rem;
  }
}
`;
