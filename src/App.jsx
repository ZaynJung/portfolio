import { useLayoutEffect, useState } from "react";
import placeholderImage from "../assets/images/project-placeholder.png";

const projects = [
  {
    id: "project-1",
    title: "SHOTGUN! (2025)",
    category: "Student Art and Design Project",
    description: (
      <>
        <p>Fast and fantastical, Cyberpunk meets Formula One where high tech racing is everything. However an entity that was forced into the shadows remerges threatening this society. Will anyone be fast enough to stop this force?</p>
        <p>“SHOTGUN!” is a fast-paced action, 2.5D animated series that was for a worldbuilding project in 2024. It was a project where developed a pitch bible and three asset packages.</p>
      </>
    ),
  },
  {
    id: "project-2",
    title: "The Eternals, Primordial and The Universe (2026)",
    category: "Student Art and Illustration Project",
    description: (
      <>
        <p>The Eternals, Primordial and The Universe was an experimental illustration project following the brief outlined by The Writers and Illustrators of the Future Contest.</p>
        <p>The brief was:</p>
        <ul className="project-brief">
          <li>3 works of either Sci-Fi or Fantasy</li>
          <li>Can be grayscale or coloured</li>
          <li>Digital or Traditional is accepted</li>
          <li>NO AI</li>
          <li>Images submitted electronically must be a minimum of 300 dpi, a minimum of 5 x 7 inches and a maximum of 8.5 x 11 inches. The file can’t exceed 10 mb and must be .JPG or .JPEG.</li>
        </ul>
        <p>This was an opportunity for myself as an artist to broaden my abilities and try my hand at fantasy artwork. I’ve always been fascinated by the concept of gods and the pantheons that follow them. I really like stories of how humans used to believe the world was created such as Egyptian, Greek, Roman, Chinese, Korean and more Mythology. Thus I wanted to try to explore my own take on such deities. The story I’ve developed is a story between 4 deities who (in my thinking) represent each fundamental pillar of the universe. Each illustration shows off their history displaying events of their past, present and future.</p>
        <p>Going into this assignment I would like to test my boundaries and explore colour and composition. I tend to limit myself into the reality of the world when depicting my art so I always subconsciously contain myself into the rigid forms and shapes I've taught myself. However with this I want to create dynamic artworks that help the eye flow through the composition. I like to think my target audience is for people who are in the entertainment industry or people who are looking to be in entertainment. Mystical, whimsical, ethereal and opulent are the words I want to define these artworks.</p>
      </>
    ),
  },
  {
    id: "project-3",
    title: "Mythverse: Cosmic Curios (2026)",
    category: "Student Art and Design Project",
    description: (
      <>
        <p>“Mythverse: Cosmic Curios” is a collaborative research and design project that wields concept design as a tool to promote diversity within toy and character design specifically for toys related to video games. It seeks to answer the question: “How can we recontextualise the understanding and usage of toys to advocate for diversity, especially in a video game space through intentional design?” Mythverse: Cosmic Curios’ is a toyline that extends upon the world and characters of Mythverse through merchandising. Characters translated into a toy, each design focuses on further platforming the integral idea of Mythverse as a brand that advocates and pushes for diversity in mainstream media. I wanted to create my own line of toys that were cute and trendy but also provided discussions in valuing uniqueness.</p>
        <p>Modern day toys have evolved into something more than trinkets for children to play with the rise in 'kidults'. This movement has reshaped the definition of play to represent societal progress when it comes to tackling diversity. However an industry that still has struggles with that concept is the game industry. Toys are often a conduit used to teach children and adults alike about certain ideas. The messaging of designs for toys may be intentional and unintentional, but regardless it does create an impact. With this project, and as a designer, I want to exploit this aspect of toys and toy design in order to provide a way of celebrating diversity.</p>
        <p>As someone who has a big interest in both the video game space and toy collector community space I am able to identify the shortfalls found in both communities, especially in instances where they intersect with one another. There is both a lack of effort put into meaningful representation in both industries which leads to toxic communities upholding the same continued and unwarranted bias towards marginalized communities, which is a concern I hope to shed light onto with this project.</p>
        <p>Core ideas that led this project were diversity, identity and expression, cultural diversity, the theory that toys can become a form of activism, conflicts between people, and kidults, who are a demographic of adult people with a passion for toys formally acknowledged in Toy Fair 2024.</p>
        <p>The primary audience will be obviously the fans of the game who would be young adults to adults. The secondary audience would be kidults, toy collectors and communities that are marginalized. Core ideas that led this project were diversity, identity and expression, cultural diversity, the theory that toys can become a form of activism, conflicts between people, and kidults, who are a demographic of adult people with a passion for toys formally acknowledged in Toy Fair 2024.</p>
        <p>To begin this project I started with developing three characters that will be playable in this game with visual precedents in design work from Dislyte and Deadlock in mind; a tank, a DPS and a healer. I started with ingame characters in order to have a solid design to play with when I would translate them into toys later in this project.</p>
      </>
    ),
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
          <p>Hi! My name is Zayn Jung, a conceptual artist and illustrator, who has a deep passion for developing ideas in multimedia entertainment! I prioritise having fun and being experimental in the projects I create and work on to try to showcase new ideas into the world.</p>
          <SocialLinks />
          <p className="social-note">LinkedIn and email links coming soon.</p>
        </div>
        <Portrait />
      </section>
      <div className="site-footer">
        <a className="footer-name" href="index.html">Zayn</a>
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
          <p>{project.category}</p>
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
          {project.description}
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
