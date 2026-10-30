import { useCallback, useEffect, useLayoutEffect, useState } from "react";
import profilePhoto from "../assets/images/pfp.jpg";
import { projectImages } from "./project-images.js";

const projects = [
  {
    id: "project-1",
    title: "SHOTGUN! (2025)",
    category: "Student Art and Design Project",
    images: projectImages.shotgun,
    description: (
      <>
        <p>Fast and fantastical, cyberpunk meets Formula One, where high-tech racing is everything. However, an entity that was forced into the shadows reemerges, threatening this society. Will anyone be fast enough to stop this force?</p>
        <p>“SHOTGUN!” is a fast-paced, 2.5D animated action series that was for a worldbuilding project in 2025. It was a project in which I developed a pitch bible and three asset packages.</p>
      </>
    ),
  },
  {
    id: "project-2",
    title: "The Eternals, Primordial and The Universe (2026)",
    category: "Student Art and Illustration Project",
    images: projectImages.eternals,
    description: (
      <>
        <p>The Eternals, Primordial and The Universe was an experimental illustration project following the brief outlined by The Writers and Illustrators of the Future Contest.</p>
        <p>The brief was:</p>
        <ul className="project-brief">
          <li>3 works of either sci-fi or fantasy</li>
          <li>Can be greyscale or coloured</li>
          <li>Digital or traditional artwork is accepted</li>
          <li>NO AI</li>
          <li>Images submitted electronically must be a minimum of 300 dpi, a minimum of 5 x 7 inches and a maximum of 8.5 x 11 inches. The file can’t exceed 10 MB and must be .JPG or .JPEG.</li>
        </ul>
        <p>This was an opportunity for me as an artist to broaden my abilities and try my hand at fantasy artwork. I’d always been fascinated by the concept of gods and the pantheons that followed them. I really liked stories of how humans used to believe the world was created, such as those in Egyptian, Greek, Roman, Chinese, Korean and other mythologies. Thus, I wanted to try to explore my own take on such deities. The story I’d developed was a story about four deities who (in my thinking) represented each fundamental pillar of the universe. Each illustration revealed their history, depicting events of their past, present and future.</p>
        <p>Going into this assignment, I wanted to test my boundaries and explore colour and composition. I tended to limit myself to realistic depictions of the world when depicting my art, so I always subconsciously confined myself to the rigid forms and shapes I’d taught myself. However, with this, I wanted to create dynamic artworks that helped the eye flow through the composition. I liked to think my target audience was people who were in the entertainment industry or people who were looking to be in entertainment. Mystical, whimsical, ethereal and opulent were the words I wanted to define these artworks.</p>
      </>
    ),
  },
  {
    id: "project-3",
    title: "Mythverse: Cosmic Curios (2026)",
    category: "Student Art and Design Project",
    images: projectImages.mythverse,
    description: (
      <>
        <p>“Mythverse: Cosmic Curios” is a collaborative research and design project that wields concept design as a tool to promote diversity within toy and character design, specifically for toys related to video games. It seeks to answer the question: “How can we recontextualise the understanding and usage of toys to advocate for diversity, especially in a video game space through intentional design?” “Mythverse: Cosmic Curios” is a toy line that builds upon the world and characters of Mythverse through merchandising. By translating characters into toys, each design focuses on further platforming the integral idea of Mythverse as a brand that advocates and pushes for diversity in mainstream media. I wanted to create my own line of toys that were cute and trendy but also encouraged discussions about valuing uniqueness.</p>
        <p>Modern-day toys have evolved into something more than trinkets for children to play with, particularly with the rise of ‘kidults’. This movement has reshaped the definition of play to represent societal progress when it comes to tackling diversity. However, an industry that still has struggles with that concept is the game industry. Toys are often a conduit used to teach children and adults alike about certain ideas. The messaging of designs for toys may be intentional and unintentional, but regardless, it does create an impact. With this project, and as a designer, I want to exploit this aspect of toys and toy design in order to provide a way of celebrating diversity.</p>
        <p>As someone who has a big interest in both the video game and toy-collecting communities, I am able to identify the shortfalls found in both communities, especially in instances where they intersect with one another. There is a lack of effort put into meaningful representation in both industries, which leads to toxic communities upholding the same continued and unwarranted bias towards marginalised communities, which is a concern I hope to shed light on with this project.</p>
        <p>Core ideas that led this project were diversity, identity and expression, cultural diversity, the theory that toys can become a form of activism, conflicts between people, and kidults, who are a demographic of adults with a passion for toys formally acknowledged at Toy Fair 2024.</p>
        <p>The primary audience will be obviously the fans of the game who would be young adults to adults. The secondary audience would be kidults, toy collectors and communities that are marginalised.</p>
        <p>To begin this project, I started with developing three characters that will be playable in this game with visual precedents in design work from Dislyte and Deadlock in mind: a tank, a DPS and a healer. I started with in-game characters in order to have a solid design to play with when I would translate them into toys later in this project.</p>
      </>
    ),
  },
];

function Artwork({ project, filename = project.images.thumbnail.filename, alt = `${project.title} preview`, loading = "lazy" }) {
  const { folder, thumbnail } = project.images;
  const { width, height } = filename === thumbnail.filename ? thumbnail : project.images;
  const src = `${import.meta.env.BASE_URL}images/projects/${encodeURIComponent(folder)}/${encodeURIComponent(filename)}`;

  return (
    <img className="artwork" src={src} alt={alt}
      width={width} height={height} loading={loading} decoding="async" />
  );
}

function Portrait() {
  return <img className="portrait" src={profilePhoto} alt="Zayn Jung" width="3000" height="4000" loading="lazy" />;
}

function Header({ page }) {
  return (
    <header id="top" tabIndex={-1} className={`site-header ${page === "home" ? "home-header" : "page"}`}>
      <a className="wordmark" href="index.html" aria-current={page === "home" ? "page" : undefined}>
        Zayn Jung
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
      <a className="social-button" href="https://www.linkedin.com/in/zayn-jung-152404446"
        target="_blank" rel="noopener noreferrer"
        aria-label="LinkedIn" title="LinkedIn">
        <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
          <circle cx="5" cy="5" r="1.5" fill="currentColor" />
          <path d="M5 10v10M10 20V10m0 4c0-6 9-6 9 0v6" />
        </svg>
      </a>
      <a className="social-button" href="mailto:zaynjungart@gmail.com"
        aria-label="Email" title="Email">
        <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="m3 7 9 6 9-6" />
        </svg>
      </a>
    </div>
  );
}

function Footer() {
  return (
    <footer className="page">
      <section id="about-me" className="about-preview" aria-labelledby="about-heading">
        <h2 id="about-heading">About me.</h2>
        <div className="about-copy">
          <p>Hi! My name is Zayn Jung (정세인), the concept artist and fabricator for ‘Mythverse: Cosmic Curios’, currently working and located in Wellington, New Zealand. Originally from Auckland, I moved to Wellington to pursue my dream career of working in the creative industry.</p>
          <p>Outside of this project, I’m a concept artist with a deep passion for developing ideas in multimedia entertainment! With my art, I prioritise having fun and being experimental in projects as doing so helps develop more meaningful and visually captivating concepts.</p>
          <SocialLinks />
        </div>
        <Portrait />
      </section>
      <div className="site-footer">
        <a className="footer-name" href="index.html">Zayn Jung</a>
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
    : `Project ${current + 1} of ${featured.length}: ${featured[current].title}`;

  const showSlide = useCallback((getNextIndex, forcedDirection) => {
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
  }, [featured.length]);

  useEffect(() => {
    const timer = window.setInterval(() => showSlide((index) => index + 1, 1), 30_000);
    return () => window.clearInterval(timer);
  }, [showSlide]);

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
            <a className="project-link" href={`${project.id}.html`} tabIndex={-1} aria-hidden="true">
              <Artwork project={project} loading={index === current ? "eager" : "lazy"} />
            </a>
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
      <section className="project-gallery" aria-label={`${project.title} images`}>
        {project.images.files.map((filename, index) => (
          <figure key={filename}>
            <Artwork project={project} filename={filename} alt={`${project.title}, presentation page ${index + 1}`} />
          </figure>
        ))}
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
