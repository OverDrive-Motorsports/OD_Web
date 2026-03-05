"use client";

/**
 ##
 ## OverDrive 2026
 ## All Technical rights reserved
 ##
 ## Navbar - Global navigation bar with scroll-aware background and responsive layout.
 ##
 */

import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 40)
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <nav
            className="font-secondary"
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                zIndex: 100,
                padding: '1.2rem 2rem',
                transition: 'background 0.4s ease, backdrop-filter 0.4s ease, border-bottom 0.4s ease',
                background: scrolled ? 'rgba(13, 13, 13, 0.85)' : 'transparent',
                backdropFilter: scrolled ? 'blur(12px)' : 'none',
                borderBottom: scrolled ? '1px solid #1a1a1a' : '1px solid transparent',
            }}
        >
            <div
                style={{
                    width: '100%',
                    maxWidth: '1200px',
                    margin: '0 auto',
                    display: 'grid',
                    gridTemplateColumns: '1fr auto 1fr',
                    alignItems: 'center',
                    gap: '1rem',
                }}
            >
                {/* LOGO */}
                <Link
                    href="/"
                    style={{
                        justifySelf: 'start',
                        fontFamily: 'var(--font-primary)',
                        fontSize: '1rem',
                        fontWeight: 'var(--font-bold)',
                        letterSpacing: '0.3em',
                        color: 'var(--color-white)',
                        textDecoration: 'none',
                    }}
                >
                    OD
                </Link>

                {/* LINKS */}
                <div style={{ display: 'flex', gap: '3rem', justifySelf: 'center' }}>
                    {['Roadmap', 'Updates'].map((item) => (
                        <Link
                            key={item}
                            href={`/${item.toLowerCase()}`}
                            style={{
                                fontSize: '0.75rem',
                                letterSpacing: '0.2em',
                                color: '#707070',
                                textDecoration: 'none',
                                transition: 'color 0.2s',
                            }}
                            onMouseEnter={e => (e.currentTarget.style.color = 'var(--color-white)')}
                            onMouseLeave={e => (e.currentTarget.style.color = '#707070')}
                        >
                            {item.toUpperCase()}
                        </Link>
                    ))}
                </div>

                {/* CTA */}
                <a
                    href="#"
                    style={{
                        justifySelf: 'end',
                        fontSize: '0.75rem',
                        letterSpacing: '0.2em',
                        color: 'var(--color-white)',
                        textDecoration: 'none',
                        border: '1px solid #333',
                        padding: '0.5rem 1.2rem',
                        borderRadius: '999px',
                        transition: 'border-color 0.2s, color 0.2s',
                    }}
                    onMouseEnter={e => {
                        e.currentTarget.style.borderColor = 'var(--color-gold)'
                        e.currentTarget.style.color = 'var(--color-gold)'
                    }}
                    onMouseLeave={e => {
                        e.currentTarget.style.borderColor = '#333'
                        e.currentTarget.style.color = 'var(--color-white)'
                    }}
                >
                    DOWNLOAD
                </a>
            </div>
        </nav>
    )
}
