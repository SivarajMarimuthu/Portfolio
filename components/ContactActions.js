/*
 * Shared professional contact actions.
 *
 * The homepage displays LinkedIn, GitHub and the resume.
 * Case-study pages reuse the same actions without repeating
 * the resume download.
 */

export function ContactActions({ showResume = false }) {
  return (
    <div className="contact-panel__actions">
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

      {showResume && (
        <a
          className="button button--outline"
          href="/resume/Sivaraj_Marimuthu.docx"
          download
        >
          Download resume <span aria-hidden="true">↓</span>
        </a>
      )}
    </div>
  );
}
