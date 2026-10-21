import { useLayoutEffect, useState } from "react";
import placeholderImage from "../assets/images/project-placeholder.png";

const projects = [
  {
    id: "project-1",
    title: "Project 1",
    description: [
      "Introduce your first project here. Describe the idea behind the work, what inspired it, and what you wanted to communicate.",
      "Use a second paragraph to talk about your role, process, and the materials or tools you used. The images below can show the finished work and how it developed.",
    ],
  },
  {
    id: "project-2",
    title: "Project 2",
    description: [
      "Introduce your second project here. Describe the idea behind the work, what inspired it, and what you wanted to communicate.",
      "Use a second paragraph to talk about your role, process, and the materials or tools you used. The images below can show the finished work and how it developed.",
    ],
  },
  {
    id: "project-3",
    title: "Project 3",
    description: [
      "Introduce your third project here. Describe the idea behind the work, what inspired it, and what you wanted to communicate.",
      "Use a second paragraph to talk about your role, process, and the materials or tools you used. The images below can show the finished work and how it developed.",
    ],
  },
];

function Artwork({ project }) {
  return (
    <img className="artwork" src={placeholderImage} alt={`${project.title} image placeholder`}
      width="384" height="234" />
  );
}

function Portrait() {
  return <img className="portrait-placeholder" src={placeholderImage} alt="Portrait placeholder" width="384" height="234" loading="lazy" />;
}

function Header({ page }) {
  return (
    <header id="top" tabIndex={-1} className={`site-header ${page === "home" ? "home-header" : "page"}`}>
      <a className="wordmark" href="index.html" aria-current={page === "home" ? "page" : undefined}>
        Zayn.
      </a>
      <nav aria-label="Main navigation">
        <a href={page === "home" ? "#projects" : "index.html#projects"}>Projects</a>
        <a href="#about-me">About me</a>
      </nav>
    </header>
  );
}

function SocialLinks() {
  return (
    <div className="social-links" role="group" aria-label="Social links">
      <button className="social-button" type="button" disabled
        aria-label="LinkedIn link coming soon" title="LinkedIn link coming soon">
        <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
          <circle cx="5" cy="5" r="1.5" fill="currentColor" />
          <path d="M5 10v10M10 20V10m0 4c0-6 9-6 9 0v6" />
        </svg>
      </button>
      <button className="social-button" type="button" disabled
        aria-label="Email link coming soon" title="Email link coming soon">
        <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="m3 7 9 6 9-6" />
        </svg>
      </button>
    </div>
  );
}

function Footer() {
  return (
    <footer className="page">
      <section id="about-me" className="about-preview" aria-labelledby="about-heading">
        <div className="about-copy">
          <h2 id="about-heading">About me.</h2>
          <p className="about-name">Hello, I'm Zayn.</p>
          <p>This is where a short introduction will go. Share what you make, what inspires you, and the ideas behind your practice.</p>
          <SocialLinks />
          <p className="social-note">LinkedIn and email links coming soon.</p>
        </div>
        <Portrait />
      </section>
      <div className="site-footer">
        <a className="footer-name" href="index.html">Zayn</a>
        <p>Art &amp; design portfolio</p>
        <a className="outline-button back-to-top" href="#top">Back to top <span aria-hidden="true">&uarr;</span></a>
      </div>
    </footer>
  );
}

function ProjectGrid() {
  return (
    <div className="project-grid">
      {projects.map((project) => (
        <article className="project-card" key={project.id}>
          <a className="project-link" href={`${project.id}.html`} aria-label={`View ${project.title}`}>
            <Artwork project={project} />
            <h3>{project.title}</h3>
          </a>
          <p>Project placeholder</p>
        </article>
      ))}
    </div>
  );
}

function Slideshow() {
  const featured = projects;
  const [selection, setSelection] = useState({
    current: 0,
    previous: null,
    direction: 1,
    revision: 0,
  });
  const { current, previous, direction, revision } = selection;
  const announcement = revision === 0
    ? ""
    : `Project ${current + 1} of ${featured.length}: ${featured[current].title}, Image placeholder`;

  function showSlide(getNextIndex, forcedDirection) {
    setSelection((active) => {
      const next = (getNextIndex(active.current) + featured.length) % featured.length;
      if (next === active.current) return active;

      return {
        current: next,
        previous: active.current,
        direction: forcedDirection ?? (next > active.current ? 1 : -1),
        revision: active.revision + 1,
      };
    });
  }

  function finishTransition(event) {
    if (event.animationName !== "slide-enter") return;
    setSelection((active) => active.revision === revision ? { ...active, previous: null } : active);
  }

  return (
    <section id="middle" className="slideshow"
      aria-label="Featured projects" aria-roledescription="carousel">
      <div className="slides" style={{ "--slide-direction": direction }}>
        {featured.map((project, index) => (
          <figure
            className={`slide${index === current ? " is-active" : ""}${previous !== null && index === current ? " is-entering" : ""}${index === previous ? " is-exiting" : ""}`}
            key={`${project.id}-${revision}`}
            hidden={index !== current && index !== previous}
            aria-hidden={index !== current}
            inert={index !== current}
            onAnimationEnd={finishTransition}
            role="group" aria-roledescription="slide" aria-label={`${index + 1} of ${featured.length}`}>
            <a className="project-link" href={`${project.id}.html`} tabIndex={-1} aria-hidden="true"><Artwork project={project} /></a>
            <div className="hero-content">
              <h2>{project.title}</h2>
              <a className="outline-button" href={`${project.id}.html`}
                aria-label={`View ${project.title}`}>View project</a>
            </div>
          </figure>
        ))}
      </div>
      <div className="slideshow-controls">
        <button className="carousel-arrow carousel-previous" type="button"
          onClick={() => showSlide((index) => index - 1, -1)} aria-label="Previous project">&larr;</button>
        <div className="slide-dots" role="group" aria-label="Choose project">
          {featured.map((project, index) => (
            <button type="button" key={project.id} onClick={() => showSlide(() => index)}
              aria-label={`Show ${project.title}`} aria-pressed={index === current}>
              <span aria-hidden="true" />
            </button>
          ))}
        </div>
        <button className="carousel-arrow carousel-next" type="button"
          onClick={() => showSlide((index) => index + 1, 1)} aria-label="Next project">&rarr;</button>
      </div>
      <p className="visually-hidden" role="status" aria-live="polite">{announcement}</p>
    </section>
  );
}

function HomePage() {
  return (
    <main id="main">
      <h1 className="visually-hidden">Zayn's art and design portfolio</h1>
      <Slideshow />
      <div className="page">
        <section id="projects" className="work-section" aria-labelledby="selected-work">
          <h2 id="selected-work">Projects.</h2>
          <ProjectGrid />
        </section>
      </div>
    </main>
  );
}

function ProjectPage({ project }) {
  return (
    <main id="main" className="page">
      <section className="page-intro project-intro">
        <h1>{project.title}</h1>
        <div className="project-description">
          {project.description.map((paragraph, index) => <p key={index}>{paragraph}</p>)}
          <p className="placeholder-note">Template text and images. Replace these with your project.</p>
        </div>
      </section>
      <section className="project-gallery" aria-label="Project image placeholders">
        <figure><Artwork project={project} /><figcaption>Featured image placeholder</figcaption></figure>
        <figure><Artwork project={project} /><figcaption>Process image placeholder</figcaption></figure>
        <figure><Artwork project={project} /><figcaption>Detail image placeholder</figcaption></figure>
      </section>
    </main>
  );
}

export default function App({ page }) {
  const project = projects.find((item) => item.id === page);
  useLayoutEffect(() => {
    // Cross-page fragments need their target after React mounts the page.
    document.getElementById(window.location.hash.slice(1))?.scrollIntoView();
  }, [page]);
  if (page !== "home" && !project) throw new Error(`Unknown portfolio page: ${page}`);

  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <Header page={page} />
      {page === "home" ? <HomePage /> : <ProjectPage project={project} />}
      <Footer />
    </>
  );
}
