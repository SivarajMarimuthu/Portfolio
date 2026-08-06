import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="shell site-footer__inner">
        <Link className="brand brand--light" href="/">
          SM
        </Link>
        <p>© 2026 Sivaraj Marimuthu. All rights reserved.</p>
        {/*
          LEGACY VERSION (preserved): GitHub and LinkedIn were repeated here
          even though the Contact section already provides those actions.

          <a href="https://github.com/SivarajMarimuthu">GitHub</a>
          <a href="https://www.linkedin.com/in/sivarajmarimuthu/">LinkedIn</a>

          ACTIVE VERSION: the footer stays focused on copyright and navigation.
        */}
        <nav aria-label="Footer navigation">
          <a href="#top">Back to top ↑</a>
        </nav>
      </div>
    </footer>
  );
}
