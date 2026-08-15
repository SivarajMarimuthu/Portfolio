import Image from "next/image";
import Link from "next/link";

import { CaseStudyContents } from "./CaseStudyContents";
import { ContactActions } from "./ContactActions";
import { SiteFooter } from "./SiteFooter";
import { SiteHeader } from "./SiteHeader";

export function CaseStudyPage({ project }) {
  return (
    <>
      <SiteHeader />
      <main id="main-content">
        {/*
  ============================================================
  LEGACY VERSION — FRAMED CASE-STUDY HERO
  ============================================================

  The previous version presented the project image as a framed
  card inside a uniformly dark hero section.

  <section className="case-hero" id="top">
    <div className="shell">
      <Link className="back-link" href="/#work">
        ← Back to selected work
      </Link>

      <div className="case-hero__grid">
        <div>
          ...
        </div>

        <div className="case-hero__visual">
          <Image
            src={project.image}
            alt={project.imageAlt}
            width={1568}
            height={1003}
            sizes="(max-width: 820px) 100vw, 50vw"
            priority
          />
        </div>
      </div>
    </div>
  </section>
*/}

        {/*
  ============================================================
  ACTIVE VERSION — LANDING-PAGE-INSPIRED SPLIT HERO
  ============================================================
*/}

        <section className={`case-hero case-hero--${project.visual}`} id="top">
          {/*The dark content layer contains the title and project details. CSS creates the diagonal edge extending into the image panel.
           */}
          <div className="case-hero__light" aria-hidden="true" />
          {/* left side */}
          <div className="shell case-hero__inner">
            <Link className="back-link" href="/#work">
              ← Back to selected work
            </Link>

            <div className="case-hero__content">
              <p className="eyebrow">Case study / {project.domain}</p>

              <h1>
                {project.visual === "commerce" ? (
                  <>
                    Grocery <span className="no-wrap">E-commerce</span>{" "}
                    Marketplace
                  </>
                ) : (
                  project.title
                )}
              </h1>

              <p className="case-hero__summary">{project.summary}</p>

              <div className="case-hero__badges">
                <span>{project.role}</span>

                {project.visual === "retail" && (
                  <span>Project details generalized for confidentiality</span>
                )}
              </div>
            </div>
          </div>

          {/* right side */}
          {/*
              The image occupies the right side of the hero independently
              from the content shell, allowing it to feel like part of the
              hero composition rather than a floating image card. */}
          <div className="case-hero__image-panel">
            {/*
                Decorative enlarged backdrop.

                This fills the unusually tall image panel without forcing the
                primary project artwork itself to be cropped. */}
            <Image
              src={project.image}
              alt=""
              fill
              sizes="(max-width: 820px) 100vw, 58vw"
              className="case-hero__image-backdrop"
              aria-hidden="true"
              priority
            />

            {/* Primary image.`object-fit: contain` keeps the complete project artwork visible.The blurred backdrop fills any remaining space around it. */}
            <Image
              src={project.image}
              alt={project.imageAlt}
              fill
              sizes="(max-width: 820px) 100vw, 58vw"
              className="case-hero__image"
              priority
            />

            <span className="case-hero__image-overlay" aria-hidden="true" />

            <span className="case-hero__visual-label">
              Conceptual project visual
            </span>
          </div>
        </section>

        <section className="section section--dark case-overview">
          <div className="shell case-layout">
            {/* <aside>
              <p className="eyebrow">Contents</p>
              <nav aria-label="Case study contents">
                <a href="#overview">Overview</a>
                {project.contributions.map((section) => (
                  <a key={section.title} href={`#${section.id}`}>
                    {section.title}
                  </a>
                ))}
                <a href="#outcomes">Outcomes</a>
                <a href="#technology">Technology</a>
              </nav>
            </aside> */}
            <CaseStudyContents contributions={project.contributions} />

            <div className="case-content">
              <section id="overview">
                <p className="eyebrow">01 / Overview</p>
                <h2>Business context</h2>
                <p>{project.context}</p>
              </section>

              {project.contributions.map((section, index) => (
                <section id={section.id} key={section.title}>
                  <p className="eyebrow">
                    {String(index + 2).padStart(2, "0")} / {section.label}
                  </p>
                  <h2>{section.title}</h2>
                  <ul>
                    {section.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </section>
              ))}

              <section id="outcomes">
                <p className="eyebrow">
                  {String(project.contributions.length + 2).padStart(2, "0")} /
                  Outcomes
                </p>
                <h2>Outcome and impact</h2>
                <div className="outcome-grid">
                  {project.outcomes.map((outcome) => (
                    <p key={outcome}>{outcome}</p>
                  ))}
                </div>
              </section>

              <section id="technology">
                <p className="eyebrow">
                  {String(project.contributions.length + 3).padStart(2, "0")} /
                  Technology
                </p>
                <h2>{project.technologyHeading}</h2>
                {project.technologyGroups ? (
                  <div className="technology-groups">
                    {project.technologyGroups.map((group) => (
                      <div key={group.title}>
                        <h3>{group.title}</h3>
                        <ul className="technology-list">
                          {group.items.map((technology) => (
                            <li key={technology}>{technology}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                ) : (
                  <ul className="technology-list">
                    {project.technologies.map((technology) => (
                      <li key={technology}>{technology}</li>
                    ))}
                  </ul>
                )}
              </section>
            </div>
          </div>
        </section>

        <section className="section section--light case-contact">
          <div className="shell case-contact__inner">
            <div>
              <p className="eyebrow">Interested in something similar?</p>
              <h2>Let&apos;s discuss the problem you need to solve.</h2>
            </div>
            {/* <Link
              className="button button--primary"
              href="/#contact"
            >
              Discuss a project <span aria-hidden="true">→</span>
            </Link> */}
            <div className="case-contact__social">
              {/* <h3>Start a conversation</h3> */}

              {/* <div className="contact-panel__actions">
                <a
                  className="button button--primary"
                  href="https://www.linkedin.com/in/sivarajmarimuthu/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Connect on LinkedIn <span aria-hidden="true">↗</span>
                </a>

                <a
                  className="button button--outline"
                  href="https://github.com/SivarajMarimuthu"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View GitHub <span aria-hidden="true">↗</span>
                </a>
              </div> */}
              <ContactActions />
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
