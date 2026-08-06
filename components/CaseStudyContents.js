"use client";

import { useEffect, useMemo, useState } from "react";

export function CaseStudyContents({ contributions }) {
  const navigationItems = useMemo(
    () => [
      {
        id: "overview",
        label: "Overview",
      },

      ...contributions.map((section) => ({
        id: section.id,
        label: section.title,
      })),

      {
        id: "outcomes",
        label: "Outcomes",
      },

      {
        id: "technology",
        label: "Technology",
      },
    ],
    [contributions],
  );

  const [activeSection, setActiveSection] = useState("overview");

  // useEffect(() => {
  //   const sections = navigationItems
  //     .map((item) => document.getElementById(item.id))
  //     .filter(Boolean);

  //   if (!sections.length) {
  //     return undefined;
  //   }

  //   const observer = new IntersectionObserver(
  //     (entries) => {
  //       const visibleSections = entries
  //         .filter((entry) => entry.isIntersecting)
  //         .sort(
  //           (firstEntry, secondEntry) =>
  //             firstEntry.boundingClientRect.top -
  //             secondEntry.boundingClientRect.top,
  //         );

  //       if (!visibleSections.length) {
  //         return;
  //       }

  //       const currentSection = visibleSections[0].target.id;

  //       setActiveSection(currentSection);

  //       window.history.replaceState(
  //         null,
  //         "",
  //         `${window.location.pathname}${window.location.search}#${currentSection}`,
  //       );
  //     },
  //     {
  //       root: null,
  //       rootMargin: "-22% 0px -62% 0px",
  //       threshold: 0,
  //     },
  //   );

  //   sections.forEach((section) => {
  //     observer.observe(section);
  //   });

  //   return () => {
  //     observer.disconnect();
  //   };
  // }, [navigationItems]);
  useEffect(() => {
    const sections = navigationItems
      .map((item) => document.getElementById(item.id))
      .filter(Boolean);

    if (!sections.length) {
      return undefined;
    }

    let animationFrameId = null;

    function updateActiveSection() {
      animationFrameId = null;

      const header = document.querySelector(".site-header");
      const headerHeight = header?.getBoundingClientRect().height ?? 0;

      /*
       * A section becomes active shortly below the sticky header.
       * Increasing this value activates the next section earlier.
       */
      const activationLine = headerHeight + 120;

      let currentSection = sections[0].id;

      /*
       * Select the final section whose heading has crossed the
       * activation line.
       */
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;

        if (sectionTop <= activationLine) {
          currentSection = section.id;
        }
      });

      /*
       * At the bottom of the case-study content, guarantee that
       * Technology remains active. Without this safeguard, there
       * may not be enough scrolling space for its heading to cross
       * the activation line.
       */
      const lastSection = sections[sections.length - 1];
      const caseOverview = lastSection.closest(".case-overview");

      if (caseOverview) {
        const overviewBottom = caseOverview.getBoundingClientRect().bottom;

        if (overviewBottom <= window.innerHeight + 8) {
          currentSection = lastSection.id;
        }
      }

      // setActiveSection((previousSection) => {
      //   if (previousSection === currentSection) {
      //     return previousSection;
      //   }

      //   window.history.replaceState(
      //     null,
      //     "",
      //     `${window.location.pathname}${window.location.search}#${currentSection}`,
      //   );

      //   return currentSection;
      // });
      setActiveSection((previousSection) =>
        previousSection === currentSection ? previousSection : currentSection,
      );
    }

    function requestActiveSectionUpdate() {
      if (animationFrameId !== null) {
        return;
      }

      animationFrameId = window.requestAnimationFrame(updateActiveSection);
    }

    /*
     * Run once after mounting so a URL containing a hash receives
     * the correct active state immediately.
     */
    requestActiveSectionUpdate();

    window.addEventListener("scroll", requestActiveSectionUpdate, {
      passive: true,
    });

    window.addEventListener("resize", requestActiveSectionUpdate);

    return () => {
      if (animationFrameId !== null) {
        window.cancelAnimationFrame(animationFrameId);
      }

      window.removeEventListener("scroll", requestActiveSectionUpdate);

      window.removeEventListener("resize", requestActiveSectionUpdate);
    };
  }, [navigationItems]);

  /* ==========================================================
   URL HASH SYNCHRONIZATION

   Browser-history updates are kept separate from React's state
   calculation. This prevents the Next.js Router from being
   updated while CaseStudyContents is rendering.
   ========================================================== */

  useEffect(() => {
    if (!activeSection) {
      return;
    }

    const nextHash = `#${activeSection}`;

    /*
     * Avoid writing the same hash repeatedly.
     */
    if (window.location.hash === nextHash) {
      return;
    }

    window.history.replaceState(
      null,
      "",
      `${window.location.pathname}${window.location.search}${nextHash}`,
    );
  }, [activeSection]);
  return (
    <aside className="case-contents">
      <div className="case-contents__menu">
        <p className="eyebrow">Contents</p>

        <nav aria-label="Case study contents">
          {navigationItems.map((item) => {
            const isActive = activeSection === item.id;

            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={isActive ? "is-active" : undefined}
                aria-current={isActive ? "location" : undefined}
                onClick={() => setActiveSection(item.id)}
              >
                {item.label}
              </a>
            );
          })}
        </nav>
      </div>
    </aside>
  );
}
