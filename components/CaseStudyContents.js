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

  /* ========================================================
   ACTIVE SECTION DETECTION

   Checks every section against one fixed activation line.
   This avoids the IntersectionObserver race that caused the
   active item and URL hash to remain one section behind.
   ======================================================== */

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
       * A section becomes active shortly after passing below
       * the sticky header.
       */
      const activationLine = headerHeight + 40;

      let nextActiveSection = sections[0].id;

      for (const section of sections) {
        const sectionTop = section.getBoundingClientRect().top;

        if (sectionTop <= activationLine) {
          nextActiveSection = section.id;
        } else {
          break;
        }
      }

      /*
       * Ensure Technology remains active at the bottom of the page.
       */
      const reachedPageBottom =
        window.scrollY + window.innerHeight >=
        document.documentElement.scrollHeight - 2;

      if (reachedPageBottom) {
        nextActiveSection = sections[sections.length - 1].id;
      }

      setActiveSection((currentSection) =>
        currentSection === nextActiveSection
          ? currentSection
          : nextActiveSection,
      );
    }

    function scheduleActiveSectionUpdate() {
      if (animationFrameId !== null) {
        return;
      }

      animationFrameId = window.requestAnimationFrame(updateActiveSection);
    }

    updateActiveSection();

    window.addEventListener("scroll", scheduleActiveSectionUpdate, {
      passive: true,
    });

    window.addEventListener("resize", scheduleActiveSectionUpdate);

    return () => {
      if (animationFrameId !== null) {
        window.cancelAnimationFrame(animationFrameId);
      }

      window.removeEventListener("scroll", scheduleActiveSectionUpdate);

      window.removeEventListener("resize", scheduleActiveSectionUpdate);
    };
  }, [navigationItems]);
  /* ==========================================================
   URL HASH SYNCHRONIZATION

   Browser-history updates are kept separate from React's state
   calculation. This prevents the Next.js Router from being
   updated while CaseStudyContents is rendering.
   ========================================================== */

  // useEffect(() => {
  //   if (!activeSection) {
  //     return;
  //   }

  //   const nextHash = `#${activeSection}`;

  //   /*
  //    * Avoid writing the same hash repeatedly.
  //    */
  //   if (window.location.hash === nextHash) {
  //     return;
  //   }

  //   window.history.replaceState(
  //     null,
  //     "",
  //     `${window.location.pathname}${window.location.search}${nextHash}`,
  //   );
  // }, [activeSection]);
  /* Update the URL only after React has completed rendering. */
  useEffect(() => {
    if (!activeSection) {
      return;
    }

    const nextHash = `#${activeSection}`;

    if (window.location.hash === nextHash) {
      return;
    }

    window.history.replaceState(
      window.history.state,
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
