"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navigation = [
  { label: "Work", href: "/#work", sectionId: "work" },
  { label: "Services", href: "/#services", sectionId: "services" },
  { label: "Experience", href: "/#experience", sectionId: "experience" },
  { label: "About", href: "/#about", sectionId: "about" },
  { label: "Contact", href: "/#contact", sectionId: "contact" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    /*
     * Section highlighting only applies to the homepage.
     *
     * Case-study pages continue displaying the normal navigation without
     * incorrectly marking a homepage section as active.
     */
    if (pathname !== "/") {
      setActiveSection("");
      return;
    }

    const sectionElements = navigation
      .map((item) => document.getElementById(item.sectionId))
      .filter(Boolean);

    if (!sectionElements.length) {
      return;
    }

    let animationFrameId = null;

    const updateActiveSection = () => {
      /*
       * The detection line sits below the fixed header and around 28% down
       * the viewport.
       *
       * A section becomes active when its anchor crosses this line and
       * remains active until the following section reaches it.
       */
      const header =
        document.querySelector(".site-header")?.getBoundingClientRect()
          .height ?? 0;

      const detectionLine = header + window.innerHeight * 0.28;

      let currentSection = "";

      sectionElements.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;

        if (sectionTop <= detectionLine) {
          currentSection = section.id;
        }
      });

      /*
       * Do not highlight Work while the visitor is still viewing the hero.
       */
      const workSection = document.getElementById("work");

      if (
        workSection &&
        workSection.getBoundingClientRect().top > detectionLine
      ) {
        currentSection = "";
      }

      setActiveSection((previousSection) =>
        previousSection === currentSection
          ? previousSection
          : currentSection,
      );
    };

    const handleScroll = () => {
      if (animationFrameId !== null) {
        cancelAnimationFrame(animationFrameId);
      }

      animationFrameId = window.requestAnimationFrame(
        updateActiveSection,
      );
    };

    /*
     * Run once when the page loads so direct URLs such as /#services
     * receive the correct active navigation state.
     */
    updateActiveSection();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);

      if (animationFrameId !== null) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [pathname]);

  const closeMobileMenu = () => {
    const mobileMenu = document.querySelector(".mobile-menu");

    if (mobileMenu instanceof HTMLDetailsElement) {
      mobileMenu.open = false;
    }
  };

  return (
    <header className="site-header">
      <div className="shell site-header__inner">
        <Link
          className="brand"
          href="/"
          aria-label="Sivaraj Marimuthu home"
        >
          S
          <span className="blue-dot">M</span>
        </Link>

        <nav
          className="desktop-navigation"
          aria-label="Primary navigation"
        >
          {navigation.map((item) => {
            const isActive =
              pathname === "/" &&
              activeSection === item.sectionId;

            return (
              <a
                key={item.label}
                href={item.href}
                className={isActive ? "is-active" : undefined}
                aria-current={isActive ? "location" : undefined}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        <a
          className="header-resume"
          href="/resume/sivaraj-marimuthu-resume.docx"
          download
        >
          Resume <span aria-hidden="true">↓</span>
        </a>

        <details className="mobile-menu">
          <summary aria-label="Open navigation menu">
            <span />
            <span />
          </summary>

          <nav aria-label="Mobile navigation">
            <p>Navigation</p>

            {navigation.map((item, index) => {
              const isActive =
                pathname === "/" &&
                activeSection === item.sectionId;

              return (
                <a
                  key={item.label}
                  href={item.href}
                  className={isActive ? "is-active" : undefined}
                  aria-current={
                    isActive ? "location" : undefined
                  }
                  onClick={closeMobileMenu}
                >
                  <span>
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  {item.label}
                </a>
              );
            })}

            <a
              className="mobile-menu__resume"
              href="/resume/sivaraj-marimuthu-resume.docx"
              download
            >
              Download resume{" "}
              <span aria-hidden="true">↓</span>
            </a>
          </nav>
        </details>
      </div>
    </header>
  );
}