import Image from "next/image";
import { ContactActions } from "@/components/ContactActions";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { TechnicalVisual } from "@/components/TechnicalVisual";

import {
  experiences,
  projects,
  services,
  skillGroups,
} from "@/content/portfolio";

/* ==========================================================
   PROJECT WORKFLOW LABELS

   These labels replace the labels previously generated inside
   the TechnicalVisual component.

   Keeping this fallback mapping here means the Work section
   continues to function even before visualLabel is added to
   every project inside content/portfolio.js.

   If a project contains project.visualLabel, that value takes
   priority over this fallback mapping.
   ========================================================== */

const projectWorkflowLabels = {
  retail: "Campaign · Store · Report",
  pos: "Session · Billing · Closing",
  automation: "Input · Process · Deliver",
  commerce: "Browse · Order · Verify",
};

export default function Home() {
  return (
    <>
      <SiteHeader />

      {/* =====================================================
          MAIN HOMEPAGE

          The home-page class allows homepage-specific section
          height and spacing rules without affecting case-study
          pages.
          ===================================================== */}

      <main className="home-page" id="main-content">
        {/* ===================================================
            01 / HERO SECTION
            =================================================== */}

        <section className="hero" id="top" aria-labelledby="hero-title">
          <div className="hero__dark" aria-hidden="true">
            <TechnicalVisual variant="hero" />
          </div>

          <div className="shell hero__inner">
            <div className="hero__copy">
              <p className="eyebrow">01 / Introduction</p>

              <p className="hero__greeting">Hi, I&apos;m</p>

              <h1 id="hero-title">Sivaraj Marimuthu</h1>

              <p className="hero__role">
                Full-Stack &amp; Backend Software Engineer
              </p>

              <p className="hero__summary">
                I build complete web applications—from responsive interfaces and
                REST APIs to databases, automation and production deployment.
              </p>

              <div className="hero__actions">
                <a className="button button--primary" href="#work">
                  View selected work <span aria-hidden="true">→</span>
                </a>

                <a className="button button--outline" href="#contact">
                  Discuss a project <span aria-hidden="true">↗</span>
                </a>
              </div>

              <div className="hero__meta">
                <span className="availability">
                  <span aria-hidden="true" />
                  Available for freelance projects and full-time opportunities
                </span>

                <span className="hero__location">
                  Thanjavur, Tamil Nadu, India
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* ===================================================
            02 / SELECTED WORK

            LEGACY ANCHOR VERSION:
            The id="work" attribute was previously attached to
            the outer section. Navigating to #work displayed the
            section's empty top padding.

            ACTIVE VERSION:
            id="work" is attached to the visible heading.
            =================================================== */}

        <section
          className="section section--light"
          aria-labelledby="work-title"
        >
          <div className="shell">
            <header
              className="section-heading section-heading--split"
              id="work"
            >
              <div>
                <p className="eyebrow">02 / Selected work</p>

                <h2 id="work-title">Projects shaped around real operations.</h2>
              </div>

              <p>
                Selected examples covering enterprise retail, point-of-sale
                operations, workflow automation and e-commerce.
              </p>
            </header>

            <div className="project-grid">
              {projects.map((project, index) => {
                /*
                 * Use the project's content-defined visual label when it
                 * exists. Otherwise, use the fallback mapping above.
                 */
                const workflowLabel =
                  project.visualLabel ?? projectWorkflowLabels[project.visual];

                return (
                  <article className="project-card" key={project.slug}>
                    {/*
                      =====================================================
                      LEGACY PROJECT VISUAL

                      The project cards previously rendered the repeated
                      CSS TechnicalVisual component:

                      <TechnicalVisual
                        variant={project.visual}
                        compact
                      />

                      The code is preserved here for reference.
                      =====================================================
                    */}

                    {/*
                      =====================================================
                      ACTIVE PROJECT VISUAL

                      Every project now uses a meaningful project-specific
                      image. Both labels remain editable HTML text instead
                      of being embedded inside the bitmap.
                      =====================================================
                    */}

                    <div className="project-card__visual">
                      <Image
                        src={project.image}
                        alt={project.imageAlt}
                        width={1792}
                        height={1024}
                        sizes="(max-width: 820px) 100vw, 50vw"
                      />

                      {/* Project category: displayed at the top-left. */}
                      <span className="project-card__visual-label">
                        {project.domain}
                      </span>

                      {/* Project workflow: displayed at the bottom-right. */}
                      {workflowLabel && (
                        <span className="project-card__workflow-label">
                          {workflowLabel}
                        </span>
                      )}
                    </div>

                    <div className="project-card__body">
                      <p className="project-card__number">
                        {String(index + 1).padStart(2, "0")}
                      </p>

                      <div>
                        <p className="project-card__domain">{project.domain}</p>

                        <h3>{project.title}</h3>

                        <p>{project.summary}</p>

                        <a className="text-link" href={`/work/${project.slug}`}>
                          View case study <span aria-hidden="true">→</span>
                        </a>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* ===================================================
            03 / SERVICES

            id="services" is attached to the visible heading so
            navigating from the header does not expose the
            section's top padding.
            =================================================== */}

        <section
          className="section section--dark"
          aria-labelledby="services-title"
        >
          <div className="shell">
            <header
              className="
                section-heading
                section-heading--dark
                section-heading--split
              "
              id="services"
            >
              <div>
                <p className="eyebrow">03 / What I do</p>

                <h2 id="services-title">
                  Engineering support from interface to production.
                </h2>
              </div>

              <p>
                Services are defined by the outcome you need, with technology
                selected based on the project.
              </p>
            </header>

            <ol className="service-list">
              {services.map((service, index) => (
                <li key={service.title}>
                  <span>{String(index + 1).padStart(2, "0")}</span>

                  <div>
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                  </div>
                </li>
              ))}
            </ol>

            <div className="services-cta">
              <p>Have a project or existing application that needs support?</p>

              <a className="text-link" href="#contact">
                Discuss your requirements <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </section>

        {/* ===================================================
            04 / EXPERIENCE AND 05 / SKILLS
            =================================================== */}

        <section
          className="section section--light"
          aria-label="Professional experience and technical skills"
        >
          <div className="shell profile-grid">
            {/* Experience column */}
            <div>
              <header className="section-heading" id="experience">
                <p className="eyebrow">04 / Experience</p>

                <h2 id="experience-title">
                  Hands-on delivery across the stack.
                </h2>
              </header>

              <ol className="timeline" aria-labelledby="experience-title">
                {experiences.map((experience) => (
                  <li key={`${experience.company}-${experience.period}`}>
                    <span className="timeline__marker" aria-hidden="true" />

                    <p className="timeline__period">{experience.period}</p>

                    <h3>{experience.company}</h3>

                    <p className="timeline__role">{experience.role}</p>

                    <p>{experience.summary}</p>
                  </li>
                ))}
              </ol>
            </div>

            {/* Skills column */}
            <div id="skills">
              <header className="section-heading">
                <p className="eyebrow">05 / Skills</p>

                <h2 id="skills-title">Technologies used in delivered work.</h2>
              </header>

              <div className="skill-list" aria-labelledby="skills-title">
                {skillGroups.map((group, index) => (
                  <section
                    key={group.title}
                    aria-labelledby={`skill-group-${index}`}
                  >
                    <p className="skill-list__index">
                      {String(index + 1).padStart(2, "0")}
                    </p>

                    <div>
                      <h3 id={`skill-group-${index}`}>{group.title}</h3>

                      <p>{group.items.join(" · ")}</p>
                    </div>
                  </section>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ===================================================
            06 / ABOUT

            id="about" remains on the first visible content
            column instead of the outer padded section.
            =================================================== */}

        <section
          className="section section--about"
          aria-labelledby="about-title"
        >
          <div className="shell about-grid">
            <div id="about">
              <p className="eyebrow">06 / About</p>

              <h2 id="about-title">
                Turning business requirements into maintainable software.
              </h2>
            </div>

            <div className="about-copy">
              <p>
                I&apos;m a full-stack and backend software engineer based in
                Thanjavur, Tamil Nadu, India. I build complete web applications
                for practical business requirements, covering responsive
                frontend development, backend APIs, database design, third-party
                integrations, automation and production deployment.
              </p>

              <p>
                My experience includes enterprise retail platforms, e-commerce
                applications, billing and point-of-sale software, reporting
                workflows and internal business systems. I&apos;m comfortable
                translating designs into responsive interfaces, integrating APIs
                and supporting production systems.
              </p>

              <p>
                I&apos;m open to freelance projects, contract work and full-time
                opportunities, with remote work preferred and on-site work
                considered based on the requirement.
              </p>

              <div className="about-availability">
                <span aria-hidden="true" />
                Available for freelance, contract and full-time opportunities
              </div>
            </div>
          </div>
        </section>

        {/* ===================================================
            07 / CONTACT

            LEGACY VERSION:
            id="contact" was placed on the outer section.

            ACTIVE VERSION:
            It is now attached to the visible contact panel,
            preventing section padding from appearing after
            navigation.
            =================================================== */}

        <section
          className="section section--contact"
          aria-labelledby="contact-title"
        >
          <div className="shell contact-panel" id="contact">
            <div>
              <p className="eyebrow">07 / Contact</p>

              <h2 id="contact-title">Have a project or opportunity in mind?</h2>

              <p>
                Tell me what you&apos;re building, what is currently blocking
                you and what a successful result should look like.
              </p>
            </div>

            {/* <div className="contact-panel__actions">
              <a
                className="button button--primary"
                href="https://www.linkedin.com/in/sivarajmarimuthu/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Connect on LinkedIn{" "}
                <span aria-hidden="true">↗</span>
              </a>

              <a
                className="button button--outline"
                href="https://github.com/SivarajMarimuthu"
                target="_blank"
                rel="noopener noreferrer"
              >
                View GitHub <span aria-hidden="true">↗</span>
              </a>

              <a
                className="button button--outline"
                href="/resume/sivaraj-marimuthu-resume.docx"
                download
              >
                Download resume <span aria-hidden="true">↓</span>
              </a>
            </div> */}
            <ContactActions showResume={true} />
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
