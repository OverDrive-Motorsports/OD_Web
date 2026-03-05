"use client";

/**
 ##
 ## OverDrive 2026
 ## All Technical rights reserved
 ##
 ## Footer - Component for the OverDrive website footer.
 ##
 */

import Link from 'next/link'

export default function Footer() {
    const footerLinks = [
        { label: 'GitHub', href: 'https://github.com/OverDrive-Motorsports', external: true },
        { label: 'Cookies', href: '/cookies' },
        { label: 'Privacy', href: '/privacy' },
    ]

    return (
        <footer className="font-secondary" style={{ padding: '1.5rem 8rem' }}>
            <div style={{ background: 'linear-gradient(to right, transparent, #494949 20%, #494949 80%, transparent)', height: '1px', marginBottom: '2rem' }} />

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '3rem' }}>
                <p style={{ fontSize: '0.8rem', letterSpacing: '0.15em', color: '#707070' }}>
                    © 2026 OverDrive. All Technical rights reserved.
                </p>
                <nav style={{ display: 'flex', gap: '2.5rem', flexWrap: 'wrap', justifyContent: 'flex-end' }}>
                    {footerLinks.map((item) => (
                        item.external ? (
                            <a
                                key={item.label}
                                href={item.href}
                                target="_blank"
                                rel="noreferrer"
                                style={{ fontSize: '0.7rem', letterSpacing: '0.2em', color: '#707070', textDecoration: 'none', transition: 'color 0.2s' }}
                                onMouseEnter={e => (e.currentTarget.style.color = 'var(--color-white)')}
                                onMouseLeave={e => (e.currentTarget.style.color = '#707070')}
                            >
                                {item.label.toUpperCase()}
                            </a>
                        ) : (
                            <Link
                                key={item.label}
                                href={item.href}
                                style={{ fontSize: '0.7rem', letterSpacing: '0.2em', color: '#707070', textDecoration: 'none', transition: 'color 0.2s' }}
                                onMouseEnter={e => (e.currentTarget.style.color = 'var(--color-white)')}
                                onMouseLeave={e => (e.currentTarget.style.color = '#707070')}
                            >
                                {item.label.toUpperCase()}
                            </Link>
                        )
                    ))}
                </nav>
            </div>

            <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '1.5rem', paddingBottom: '3rem' }}>
                <p style={{ fontSize: '0.75rem', letterSpacing: '0.1em', color: '#585858', maxWidth: '700px', margin: '0 auto', lineHeight: '1.8' }}>
                    OverDrive is an independent platform and is not affiliated with, endorsed by, or associated with any official motorsport organization, including Formula 1, FIA, WEC, MotoGP, WRC, NASCAR, or their respective rights holders. All championship names, team names, driver names, and related marks are trademarks of their respective owners.
                </p>
                <p style={{ fontSize: '0.75rem', letterSpacing: '0.1em', color: '#585858', maxWidth: '700px', margin: '0 auto', lineHeight: '1.8' }}>
                    OverDrive is an immersive motorsport experience platform built with passion for the sport.
                </p>
            </div>
        </footer>
    )
}
