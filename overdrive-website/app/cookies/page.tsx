/**
 ##
 ## OverDrive 2026
 ## All Technical rights reserved
 ##
 ## CookiesPolicyPage - Cookie policy content and legal information page.
 ##
 */
import "./cookies.css";

export default function CookiesPage() {
  return (
    <main className="cookies-page">
      <div className="cookies-container">
        <h1 className="cookies-title">
          Cookies Policy
        </h1>
        <p className="cookies-date">
          Last Updated: Mar 5, 2026
        </p>
        <section className="cookies-content">
          <p>
            OverDrive ("we," "us," "our") uses cookies to improve your experience on the platform.
            This Cookies Policy explains what cookies are, how we use them, and how you can manage them.
          </p>
          <div>
            <h2 className="cookies-heading">What are Cookies?</h2>
            <p>
              Cookies are small text files stored on your device (computer, smartphone, or other device)
              when you visit a website or use an app. They help us understand how you use our app and
              improve your user experience.
            </p>
          </div>

          <div>
            <h2 className="cookies-heading">How we use Cookies</h2>
            <p style={{ marginBottom: "1rem" }}>
              We use cookies for the following purposes:
            </p>
            <ul className="cookies-list">
              <li>
                <strong className="cookies-strong">Enhancing User Experience:</strong>
                {" "}To remember your preferences and settings.
              </li>
              <li>
                <strong className="cookies-strong">Analytics:</strong>
                {" "}To collect information about how you use our platform,
                which helps us improve our services.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="cookies-heading">Managing Cookies</h2>
            <p>
              You can manage cookies through your browser settings. You can choose
              to disable cookies, but this may affect your ability to use some
              features of our platform.
            </p>
          </div>

        </section>
      </div>
    </main>
  );
}