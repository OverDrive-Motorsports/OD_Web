/**
 ##
 ## OverDrive 2026
 ## All Technical rights reserved
 ##
 ## CookiesPolicyPage - Cookie policy content and legal information page.
 ##
 */

export default function CookiesPage() {
    return (
        <main
            className="font-secondary !px-4 !pt-28 !pb-16 sm:!px-6 md:!px-8 lg:!pt-[10.5rem] lg:!pb-28"
            style={{
                minHeight: '100vh',
                padding: '10.5rem 2rem 7rem',
                color: '#d9d9d9',
            }}
        >
            <div style={{ maxWidth: '720px', margin: '0 auto' }}>
                <h1 className="!text-[1.7rem] sm:!text-[2.05rem] md:!text-[2.4rem] lg:!text-[2.7rem]" style={{ fontSize: 'clamp(1.9rem, 4.8vw, 2.7rem)', lineHeight: 1.1, marginBottom: '0.85rem', color: '#f5f5f5', fontWeight: 700 }}>
                    Cookies Policy
                </h1>
                <p className="!text-[0.84rem] sm:!text-[0.92rem] md:!text-[1rem] !mb-10 md:!mb-14 lg:!mb-[4.5rem]" style={{ fontSize: 'clamp(0.92rem, 1.8vw, 1.05rem)', color: '#8a8a8a', marginBottom: '4.5rem' }}>
                    Last Updated: Mar 5, 2026
                </p>

                <section className="!gap-8 md:!gap-11 !text-[0.92rem] sm:!text-[1rem] md:!text-[1.08rem] lg:!text-[1.18rem]" style={{ display: 'flex', flexDirection: 'column', gap: '2.75rem', color: '#8f8f8f', fontSize: 'clamp(0.98rem, 1.8vw, 1.18rem)', lineHeight: 1.7 }}>
                    <p>
                        OverDrive (&quot;we,&quot; &quot;us,&quot; &quot;our&quot;) uses cookies to improve your experience on the platform.
                        This Cookies Policy explains what cookies are, how we use them, and how you can manage them.
                    </p>

                    <div>
                        <h2 className="!text-[1.28rem] sm:!text-[1.5rem] md:!text-[1.75rem] lg:!text-[1.95rem]" style={{ fontSize: 'clamp(1.45rem, 3vw, 1.95rem)', lineHeight: 1.2, marginBottom: '1.1rem', color: '#f0f0f0', fontWeight: 700 }}>
                            What are Cookies?
                        </h2>
                        <p>
                            Cookies are small text files stored on your device (computer, smartphone, or other device) when you
                            visit a website or use an app. They help us understand how you use our app and improve your user
                            experience.
                        </p>
                    </div>

                    <div>
                        <h2 className="!text-[1.28rem] sm:!text-[1.5rem] md:!text-[1.75rem] lg:!text-[1.95rem]" style={{ fontSize: 'clamp(1.45rem, 3vw, 1.95rem)', lineHeight: 1.2, marginBottom: '1.1rem', color: '#f0f0f0', fontWeight: 700 }}>
                            How we use Cookies
                        </h2>
                        <p style={{ marginBottom: '1rem' }}>We use cookies for the following purposes:</p>
                        <ul style={{ paddingLeft: '1.3rem', display: 'flex', flexDirection: 'column', gap: '0.9rem' }}>
                            <li>
                                <strong style={{ color: '#f0f0f0' }}>Enhancing User Experience:</strong> To remember your preferences
                                and settings.
                            </li>
                            <li>
                                <strong style={{ color: '#f0f0f0' }}>Analytics:</strong> To collect information about how you use our
                                platform, which helps us improve our services.
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="!text-[1.28rem] sm:!text-[1.5rem] md:!text-[1.75rem] lg:!text-[1.95rem]" style={{ fontSize: 'clamp(1.45rem, 3vw, 1.95rem)', lineHeight: 1.2, marginBottom: '1.1rem', color: '#f0f0f0', fontWeight: 700 }}>
                            Managing Cookies
                        </h2>
                        <p>
                            You can manage cookies through your browser settings. You can choose to disable cookies, but this may
                            affect your ability to use some features of our platform.
                        </p>
                    </div>
                </section>
            </div>
        </main>
    )
}