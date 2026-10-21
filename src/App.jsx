import { useState } from "react";

const projects = [
  { title: "Shape studies", category: "Art", composition: "composition-one", alt: "Placeholder composition of a circle, arch, and fine lines" },
  { title: "In conversation", category: "Design", composition: "composition-two", alt: "Placeholder composition of overlapping circular forms" },
  { title: "Finding balance", category: "Exploration", composition: "composition-three", alt: "Placeholder composition of stacked geometric forms" },
  { title: "Everyday forms", category: "Art", composition: "composition-two alternate", alt: "Overlapping forms artwork placeholder" },
  { title: "Between spaces", category: "Design", composition: "composition-three alternate", alt: "Abstract arrangement artwork placeholder" },
  { title: "Work in progress", category: "Exploration", composition: "composition-one alternate", alt: "Abstract shape study placeholder" },
];

function Artwork({ project }) {
  return (
    <div className={`artwork ${project.composition}`} role="img" aria-label={project.alt}>
      <span /><i />
    </div>
  );
}

function Portrait() {
  return <div className="portrait-placeholder" role="img" aria-label="Portrait placeholder"><span /></div>;
}

function Header({ page }) {
  return (
    <header className={`site-header ${page === "home" ? "home-header" : "page"}`}>
      <a className="wordmark" href="index.html" aria-current={page === "home" ? "page" : undefined}>
        Zayn<span>Art &amp; design</span>
      </a>
      <nav aria-label="Main navigation">
        <a href="about.html" aria-current={page === "about" ? "page" : undefined}>About me</a>
        <a href="projects.html" aria-current={page === "projects" ? "page" : undefined}>
          Projects <span aria-hidden="true">&#8599;</span>
        </a>
      </nav>
    </header>
  );
}

function Footer({ page }) {
  return (
    <footer className="site-footer page">
      <a className="footer-name" href="index.html">Zayn</a>
      <p>Art &amp; design portfolio</p>
      {page === "projects"
        ? <a href="about.html">About me &#8599;</a>
        : <a href="projects.html">Explore the work &#8599;</a>}
    </footer>
  );
}

function ProjectGrid({ descriptions = false }) {
  return (
    <div className={`project-grid${descriptions ? " full-grid" : ""}`}>
      {projects.map((project, index) => (
        <article className="project-card" key={project.title}>
          <Artwork project={project} />
          <h2>{project.title} <span>{String(index + 1).padStart(2, "0")}</span></h2>
          <p>{project.category} / Placeholder</p>
          {descriptions && <p className="project-description">Add the story, materials, and process behind this project here.</p>}
        </article>
      ))}
    </div>
  );
}

function Slideshow() {
  const featured = projects.slice(0, 3);
  const [current, setCurrent] = useState(0);
  const [announcement, setAnnouncement] = useState("");

  function showSlide(index) {
    const next = (index + featured.length) % featured.length;
    setCurrent(next);
    setAnnouncement(`Artwork ${next + 1} of ${featured.length}: ${featured[next].title}, Artwork placeholder`);
  }

  return (
    <section className="slideshow" aria-label="Featured artwork placeholders" aria-roledescription="carousel">
      <div className="slides">
        {featured.map((project, index) => (
          <figure className="slide" key={project.title} hidden={index !== current}
            role="group" aria-roledescription="slide" aria-label={`${index + 1} of ${featured.length}`}>
            <Artwork project={project} />
            <figcaption><span>{String(index + 1).padStart(2, "0")} / {project.title}</span><span>Artwork placeholder</span></figcaption>
          </figure>
        ))}
      </div>
      <div className="slideshow-controls">
        <button type="button" onClick={() => showSlide(current - 1)} aria-label="Previous artwork">&larr;</button>
        <div className="slide-dots" role="group" aria-label="Choose artwork">
          {featured.map((project, index) => (
            <button type="button" key={project.title} onClick={() => showSlide(index)}
              aria-label={`Show artwork ${index + 1}`} aria-pressed={index === current}>
              {String(index + 1).padStart(2, "0")}
            </button>
          ))}
        </div>
        <button type="button" onClick={() => showSlide(current + 1)} aria-label="Next artwork">&rarr;</button>
      </div>
      <p className="visually-hidden" role="status" aria-live="polite">{announcement}</p>
    </section>
  );
}

function HomePage() {
  return (
    <main id="main" className="page">
      <Slideshow />
      <Header page="home" />
      <section className="work-section" aria-labelledby="selected-work">
        <div className="section-heading">
          <h1 id="selected-work">Selected work</h1>
          <p>A space for ideas, experiments, and things made.</p>
        </div>
        <ProjectGrid />
        <a className="text-link" href="projects.html">Explore projects <span aria-hidden="true">&rarr;</span></a>
      </section>
      <section className="about-preview" aria-labelledby="hello">
        <Portrait />
        <div>
          <p className="eyebrow">The person behind the work</p>
          <h2 id="hello">Hello, I'm Zayn.</h2>
          <p>This is where a short introduction will go. Share what you make, what inspires you, and the ideas behind your practice.</p>
          <a className="text-link" href="about.html">A little more about me <span aria-hidden="true">&rarr;</span></a>
        </div>
      </section>
    </main>
  );
}

function ProjectsPage() {
  return (
    <main id="main" className="page">
      <section className="page-intro">
        <p className="eyebrow">A collection of things made</p>
        <h1>Projects</h1>
        <p>Art, design, and everything in between.</p>
        <p className="placeholder-note">Sample layouts only. Real projects and artwork are coming soon.</p>
      </section>
      <section aria-label="Project collection"><ProjectGrid descriptions /></section>
    </main>
  );
}

function AboutPage() {
  return (
    <main id="main" className="page">
      <section className="page-intro">
        <p className="eyebrow">The person behind the work</p><h1>About me</h1>
      </section>
      <section className="about-layout" aria-labelledby="introduction">
        <div className="about-copy">
          <h2 id="introduction">Hello, I'm Zayn.</h2>
          <p className="lead">A space to introduce myself and my creative practice.</p>
          <p>This is placeholder text for your biography. Describe the kind of art and design you make, how you got started, and what you enjoy exploring in your work.</p>
          <p>Use this space to talk about your process, influences, or the materials you work with. Keep it personal and let visitors get to know the person behind the projects.</p>
          <div className="about-details">
            <h3>Get in touch</h3>
            <p>Add your preferred contact details or social links here when you're ready to share them.</p>
          </div>
          <a className="text-link" href="projects.html">See my projects <span aria-hidden="true">&rarr;</span></a>
        </div>
        <figure className="portrait-figure"><Portrait /><figcaption>Your portrait goes here.</figcaption></figure>
      </section>
    </main>
  );
}

export default function App({ page }) {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      {page !== "home" && <Header page={page} />}
      {page === "home" ? <HomePage /> : page === "projects" ? <ProjectsPage /> : <AboutPage />}
      <Footer page={page} />
    </>
  );
}
