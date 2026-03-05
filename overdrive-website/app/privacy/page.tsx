/**
 ##
 ## OverDrive 2026
 ## All Technical rights reserved
 ##
 ## PrivacyPolicyPage - Privacy policy content and data usage information page.
 ##
 */

export default function PrivacyPage() {
    return (
        <main
            className="font-secondary"
            style={{
                minHeight: '100vh',
                padding: '10.5rem 2rem 7rem',
                color: '#d9d9d9',
            }}
        >
            <div style={{ maxWidth: '720px', margin: '0 auto' }}>
                <h1 style={{ fontSize: 'clamp(1.9rem, 4.8vw, 2.7rem)', lineHeight: 1.1, marginBottom: '0.85rem', color: '#f5f5f5', fontWeight: 700 }}>
                    Privacy Policy
                </h1>
                <p style={{ fontSize: 'clamp(0.92rem, 1.8vw, 1.05rem)', color: '#8a8a8a', marginBottom: '4.5rem' }}>
                    Last Updated: Mar 5, 2026
                </p>

                <section style={{ display: 'flex', flexDirection: 'column', gap: '2.75rem', color: '#8f8f8f', fontSize: 'clamp(0.98rem, 1.8vw, 1.18rem)', lineHeight: 1.7 }}>
                    <p>
                        OverDrive (&quot;we,&quot; &quot;us,&quot; &quot;our&quot;) is committed to protecting your privacy. This Privacy
                        Policy explains how we collect, use, disclose, and safeguard your information when you use our platform.
                    </p>

                    <div>
                        <h2 style={{ fontSize: 'clamp(1.45rem, 3vw, 1.95rem)', lineHeight: 1.2, marginBottom: '1.1rem', color: '#f0f0f0', fontWeight: 700 }}>
                            Information we collect
                        </h2>
                        <p style={{ marginBottom: '1rem', color: '#efefef' }}>Minimal Data Collection:</p>
                        <p style={{ marginBottom: '1rem' }}>
                            We collect almost no personal data. However, we may collect the following types of information:
                        </p>
                        <ul style={{ paddingLeft: '1.3rem', display: 'flex', flexDirection: 'column', gap: '0.9rem' }}>
                            <li>
                                <strong style={{ color: '#f0f0f0' }}>Cookies:</strong> For improving user experience.
                            </li>
                            <li>
                                <strong style={{ color: '#f0f0f0' }}>Analytics Data:</strong> To understand and improve our services.
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h2 style={{ fontSize: 'clamp(1.45rem, 3vw, 1.95rem)', lineHeight: 1.2, marginBottom: '1.1rem', color: '#f0f0f0', fontWeight: 700 }}>
                            Use of your information
                        </h2>
                        <p style={{ marginBottom: '1rem' }}>We use the information we collect in the following ways:</p>
                        <ul style={{ paddingLeft: '1.3rem', display: 'flex', flexDirection: 'column', gap: '0.9rem' }}>
                            <li>To operate and maintain the platform.</li>
                            <li>To improve performance, quality, and product decisions.</li>
                        </ul>
                    </div>

                    <div>
                        <h2 style={{ fontSize: 'clamp(1.45rem, 3vw, 1.95rem)', lineHeight: 1.2, marginBottom: '1.1rem', color: '#f0f0f0', fontWeight: 700 }}>
                            Data protection
                        </h2>
                        <p>
                            We apply reasonable technical and organizational measures to protect the information we process.
                            However, no system can be guaranteed as fully secure.
                        </p>
                    </div>
                </section>
            </div>
        </main>
    )
}
