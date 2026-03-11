/**
 ####
 #### OverDrive 2026
 #### All Technical rights reserved
 ####
 #### PrivacyPolicyPage - Privacy policy content and data usage information page.
 ####
 */
import "./privacy.css"

export default function PrivacyPage() {
    return (
        <main className="legal-container">
            <div className="legal-wrapper">

                <h1 className="legal-title">
                    Privacy Policy
                </h1>

                <p className="legal-updated">
                    Last Updated: Mar 5, 2026
                </p>

                <section className="legal-content">

                    <p>
                        OverDrive ("we," "us," "our") is committed to protecting your privacy.
                        This Privacy Policy explains how we collect, use, disclose, and safeguard
                        your information when you use our platform.
                    </p>

                    <div>
                        <h2 className="legal-section-title">
                            Information we collect
                        </h2>

                        <p className="legal-note legal-emphasis">
                            Minimal Data Collection:
                        </p>

                        <p className="legal-note">
                            We collect almost no personal data. However, we may collect the
                            following types of information:
                        </p>

                        <ul className="legal-list">
                            <li>
                                <strong className="legal-highlight">Cookies:</strong>{" "}
                                For improving user experience.
                            </li>

                            <li>
                                <strong className="legal-highlight">Analytics Data:</strong>{" "}
                                To understand and improve our services.
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="legal-section-title">
                            Use of your information
                        </h2>

                        <p className="legal-note">
                            We use the information we collect in the following ways:
                        </p>

                        <ul className="legal-list">
                            <li>To operate and maintain the platform.</li>
                            <li>To improve performance, quality, and product decisions.</li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="legal-section-title">
                            Data protection
                        </h2>

                        <p>
                            We apply reasonable technical and organizational measures to protect
                            the information we process. However, no system can be guaranteed as
                            fully secure.
                        </p>
                    </div>

                </section>
            </div>
        </main>
    );
}