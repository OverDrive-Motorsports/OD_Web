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
import { useEffect, useRef, useState } from 'react'

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false)
    const [visible, setVisible] = useState(true)
    const [menuOpen, setMenuOpen] = useState(false)
    const lastScrollY = useRef(0)

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY
            const docHeight = document.documentElement.scrollHeight - window.innerHeight
            const nearFooter = currentScrollY >= docHeight - 100

            setScrolled(currentScrollY > 40)

            if (nearFooter) {
                setVisible(true)
            } else if (currentScrollY > lastScrollY.current && currentScrollY > 80) {
                setVisible(false)
            } else {
                setVisible(true)
            }

            lastScrollY.current = currentScrollY
        }

        window.addEventListener('scroll', handleScroll, { passive: true })
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setMenuOpen(false)
            }
        }

        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    return (
        <nav
            className="font-secondary !px-4 !py-4 sm:!px-6 md:!px-8 md:!py-5"
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                zIndex: 100,
                padding: '1.2rem 2rem',
                transition: 'background 0.4s ease, backdrop-filter 0.4s ease, border-bottom 0.4s ease, transform 0.35s ease',
                background: 'transparent',
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
                borderBottom: scrolled ? '1px solid #1a1a1a' : '1px solid transparent',
                transform: visible ? 'translateY(0)' : 'translateY(-120%)',
            }}
        >
            <div
                className="!grid !grid-cols-[1fr_auto_1fr] !gap-3 sm:!gap-4 md:!gap-4"
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
                    className="!text-[0.88rem] md:!text-[1rem]"
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
                <div className="!hidden md:!flex !gap-4 sm:!gap-6 md:!gap-12 !justify-self-end md:!justify-self-center" style={{ display: 'flex', gap: '3rem', justifySelf: 'center' }}>
                    {['Roadmap', 'Updates'].map((item) => (
                        <Link
                            key={item}
                            href={`/${item.toLowerCase()}`}
                            className="!text-[0.62rem] sm:!text-[0.68rem] md:!text-[0.75rem]"
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

                {/* MOBILE MENU BUTTON */}
                <button
                    type="button"
                    className="md:hidden col-start-3 !justify-self-end !text-[0.62rem] sm:!text-[0.68rem]"
                    style={{
                        fontSize: '0.75rem',
                        letterSpacing: '0.2em',
                        color: 'var(--color-white)',
                        textDecoration: 'none',
                        border: '1px solid #333',
                        padding: '0.5rem 0.9rem',
                        borderRadius: '999px',
                        background: 'transparent',
                        transition: 'border-color 0.2s, color 0.2s',
                    }}
                    onClick={() => setMenuOpen(prev => !prev)}
                    onMouseEnter={e => {
                        e.currentTarget.style.borderColor = 'var(--color-gold)'
                        e.currentTarget.style.color = 'var(--color-gold)'
                    }}
                    onMouseLeave={e => {
                        e.currentTarget.style.borderColor = '#333'
                        e.currentTarget.style.color = 'var(--color-white)'
                    }}
                    aria-expanded={menuOpen}
                    aria-label="Toggle menu"
                >
                    {menuOpen ? 'CLOSE' : 'MENU'}
                </button>

                {/* CTA */}
                <a
                    href="#"
                    className="hidden md:block !text-[0.68rem] md:!text-[0.75rem] !px-4 md:!px-[1.2rem]"
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

            {/* MOBILE DROPDOWN */}
            <div
                className={`md:hidden overflow-hidden transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${menuOpen ? 'max-h-72 opacity-100 mt-6 translate-y-0' : 'max-h-0 opacity-0 mt-0 -translate-y-2 pointer-events-none'}`}
            >
                <div
                    className="ml-auto w-full sm:w-[15rem] flex flex-col items-end gap-4 px-4 py-4"
                    style={{
                        borderRadius: '1rem',
                        background: 'rgba(13, 13, 13, 0.92)',
                        backdropFilter: 'blur(10px)',
                        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.25)',
                    }}
                >
                    {['Roadmap', 'Updates'].map((item) => (
                        <Link
                            key={`mobile-${item}`}
                            href={`/${item.toLowerCase()}`}
                            className="!text-[0.68rem] text-right"
                            style={{
                                fontSize: '0.75rem',
                                letterSpacing: '0.2em',
                                color: '#707070',
                                textDecoration: 'none',
                                transition: 'color 0.2s',
                            }}
                            onClick={() => setMenuOpen(false)}
                            onMouseEnter={e => (e.currentTarget.style.color = 'var(--color-white)')}
                            onMouseLeave={e => (e.currentTarget.style.color = '#707070')}
                        >
                            {item.toUpperCase()}
                        </Link>
                    ))}
                    <a
                        href="#"
                        className="!text-[0.68rem] text-right"
                        style={{
                            fontSize: '0.75rem',
                            letterSpacing: '0.2em',
                            color: '#707070',
                            textDecoration: 'none',
                            transition: 'color 0.2s',
                        }}
                        onClick={() => setMenuOpen(false)}
                        onMouseEnter={e => (e.currentTarget.style.color = 'var(--color-white)')}
                        onMouseLeave={e => (e.currentTarget.style.color = '#707070')}
                    >
                        DOWNLOAD
                    </a>
                </div>
            </div>
        </nav>
    )
}