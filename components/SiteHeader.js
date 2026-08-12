"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const navigation = [
  { label: "Work", href: "/#work", sectionId: "work" },
  { label: "Services", href: "/#services", sectionId: "services" },
  {
    label: "Experience",
    href: "/#experience",
    sectionId: "experience",
  },
  { label: "About", href: "/#about", sectionId: "about" },
  { label: "Contact", href: "/#contact", sectionId: "contact" },
];

const MOBILE_BREAKPOINT = 820;
const EDGE_ACTIVATION_WIDTH = 32;
const MINIMUM_SWIPE_DISTANCE = 70;

export function SiteHeader() {
  const pathname = usePathname();

  const mobileMenuRef = useRef(null);
  const touchStartRef = useRef(null);

  const [activeSection, setActiveSection] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  /* ==========================================================
     HOMEPAGE ACTIVE NAVIGATION
     ========================================================== */

  useEffect(() => {
    if (pathname !== "/") {
      setActiveSection("");
      return undefined;
    }

    const sectionElements = navigation
      .map((item) => document.getElementById(item.sectionId))
      .filter(Boolean);

    if (!sectionElements.length) {
      return undefined;
    }

    let animationFrameId = null;

    const updateActiveSection = () => {
      const headerHeight =
        document.querySelector(".site-header")?.getBoundingClientRect()
          .height ?? 0;

      const detectionLine = headerHeight + window.innerHeight * 0.28;

      let currentSection = "";

      sectionElements.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;

        if (sectionTop <= detectionLine) {
          currentSection = section.id;
        }
      });

      /*
       * Do not highlight Work while the visitor is still
       * looking at the homepage hero.
       */
      const workSection = document.getElementById("work");

      if (
        workSection &&
        workSection.getBoundingClientRect().top > detectionLine
      ) {
        currentSection = "";
      }

      setActiveSection((previousSection) =>
        previousSection === currentSection ? previousSection : currentSection,
      );
    };

    const handleScroll = () => {
      if (animationFrameId !== null) {
        window.cancelAnimationFrame(animationFrameId);
      }

      animationFrameId = window.requestAnimationFrame(updateActiveSection);
    };

    updateActiveSection();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);

      if (animationFrameId !== null) {
        window.cancelAnimationFrame(animationFrameId);
      }
    };
  }, [pathname]);

  /* ==========================================================
     MOBILE MENU HELPERS
     ========================================================== */

  const openMobileMenu = () => {
    const mobileMenu = mobileMenuRef.current;

    if (!(mobileMenu instanceof HTMLDetailsElement)) {
      return;
    }

    mobileMenu.open = true;
    setIsMobileMenuOpen(true);
  };

  const closeMobileMenu = () => {
    const mobileMenu = mobileMenuRef.current;

    if (!(mobileMenu instanceof HTMLDetailsElement)) {
      return;
    }

    mobileMenu.open = false;
    setIsMobileMenuOpen(false);
  };

  const handleMobileMenuToggle = () => {
    const mobileMenu = mobileMenuRef.current;

    if (!(mobileMenu instanceof HTMLDetailsElement)) {
      return;
    }

    setIsMobileMenuOpen(mobileMenu.open);
  };

  /* ==========================================================
     MOBILE SWIPE NAVIGATION

     Closed menu:
     Swipe left from the rightmost 32px to open it.

     Open menu:
     Swipe right anywhere to close it.

     Vertical movement is ignored so normal page scrolling
     continues to work.
     ========================================================== */

  useEffect(() => {
    const handleTouchStart = (event) => {
      if (window.innerWidth > MOBILE_BREAKPOINT || event.touches.length !== 1) {
        touchStartRef.current = null;
        return;
      }

      const touch = event.touches[0];

      const startedFromRightEdge =
        touch.clientX >= window.innerWidth - EDGE_ACTIVATION_WIDTH;

      /*
       * Opening is permitted only from the right edge.
       * Closing is permitted from anywhere while the menu is open.
       */
      if (!isMobileMenuOpen && !startedFromRightEdge) {
        touchStartRef.current = null;
        return;
      }

      touchStartRef.current = {
        startX: touch.clientX,
        startY: touch.clientY,
        currentX: touch.clientX,
        currentY: touch.clientY,
      };
    };

    const handleTouchMove = (event) => {
      const gesture = touchStartRef.current;

      if (!gesture || event.touches.length !== 1) {
        return;
      }

      const touch = event.touches[0];

      gesture.currentX = touch.clientX;
      gesture.currentY = touch.clientY;
    };

    const handleTouchEnd = () => {
      const gesture = touchStartRef.current;

      touchStartRef.current = null;

      if (!gesture) {
        return;
      }

      const horizontalDistance = gesture.currentX - gesture.startX;

      const verticalDistance = gesture.currentY - gesture.startY;

      const isHorizontalGesture =
        Math.abs(horizontalDistance) > Math.abs(verticalDistance) * 1.25;

      if (!isHorizontalGesture) {
        return;
      }

      /*
       * The closed menu opens with a leftward gesture.
       */
      if (!isMobileMenuOpen && horizontalDistance <= -MINIMUM_SWIPE_DISTANCE) {
        openMobileMenu();
        return;
      }

      /*
       * The open menu closes with a rightward gesture.
       */
      if (isMobileMenuOpen && horizontalDistance >= MINIMUM_SWIPE_DISTANCE) {
        closeMobileMenu();
      }
    };

    window.addEventListener("touchstart", handleTouchStart, {
      passive: true,
    });

    window.addEventListener("touchmove", handleTouchMove, {
      passive: true,
    });

    window.addEventListener("touchend", handleTouchEnd, {
      passive: true,
    });

    return () => {
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [isMobileMenuOpen]);

  /* ==========================================================
     CLOSE MENU AFTER NAVIGATION
     ========================================================== */

  useEffect(() => {
    closeMobileMenu();
  }, [pathname]);

  return (
    <header className="site-header">
      <div className="shell site-header__inner">
        <Link className="brand" href="/" aria-label="Sivaraj Marimuthu home">
          S<span className="blue-dot">M</span>
        </Link>

        <nav className="desktop-navigation" aria-label="Primary navigation">
          {navigation.map((item) => {
            const isActive =
              pathname === "/" && activeSection === item.sectionId;

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
          href="/resume/Sivaraj_Marimuthu_Complete_Professional_Resume.docx"
          download
        >
          Resume <span aria-hidden="true">↓</span>
        </a>

        <details
          ref={mobileMenuRef}
          className="mobile-menu"
          onToggle={handleMobileMenuToggle}
        >
          <summary
            aria-label={
              isMobileMenuOpen
                ? "Close navigation menu"
                : "Open navigation menu"
            }
            aria-expanded={isMobileMenuOpen}
          >
            <span />
            <span />
          </summary>

          <nav aria-label="Mobile navigation">
            <p>Navigation</p>

            {navigation.map((item, index) => {
              const isActive =
                pathname === "/" && activeSection === item.sectionId;

              return (
                <a
                  key={item.label}
                  href={item.href}
                  className={isActive ? "is-active" : undefined}
                  aria-current={isActive ? "location" : undefined}
                  onClick={closeMobileMenu}
                >
                  <span>{String(index + 1).padStart(2, "0")}</span>

                  {item.label}
                </a>
              );
            })}

            <a
              className="mobile-menu__resume"
              href="/resume/Sivaraj_Marimuthu_Complete_Professional_Resume.docx"
              download
              onClick={closeMobileMenu}
            >
              Download resume <span aria-hidden="true">↓</span>
            </a>
          </nav>
        </details>
      </div>
    </header>
  );
}
