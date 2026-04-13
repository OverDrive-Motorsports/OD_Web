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
        <footer className="font-secondary !px-4 !py-5 sm:!px-6 md:!px-10 lg:!px-32 lg:!py-6" style={{ padding: '1.5rem 8rem' }}>
            <div style={{ background: 'linear-gradient(to right, transparent, #494949 20%, #494949 80%, transparent)', height: '1px', marginBottom: '2rem' }} />

            <div className="!flex !flex-col !items-start !justify-start !gap-5 md:!flex-row md:!items-center md:!justify-between" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '3rem' }}>
                <p className="!text-[0.68rem] md:!text-[0.8rem]" style={{ fontSize: '0.8rem', letterSpacing: '0.15em', color: '#707070' }}>
                    © 2026 OverDrive. All Technical rights reserved.
                </p>
                <nav className="w-full md:w-auto !justify-center md:!justify-end !gap-4 sm:!gap-6 md:!gap-10" style={{ display: 'flex', gap: '2.5rem', flexWrap: 'wrap', justifyContent: 'flex-end' }}>
                    {footerLinks.map((item) => (
                        item.external ? (
                            <a
                                key={item.label}
                                href={item.href}
                                target="_blank"
                                rel="noreferrer"
                                className="!text-[0.62rem] md:!text-[0.7rem]"
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
                                className="!text-[0.62rem] md:!text-[0.7rem]"
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

            <div className="!gap-5 md:!gap-6 !pb-8 md:!pb-12" style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '1.5rem', paddingBottom: '3rem' }}>
                <p className="!text-[0.65rem] sm:!text-[0.7rem] md:!text-[0.75rem] !px-1 sm:!px-2 md:!px-0" style={{ fontSize: '0.75rem', letterSpacing: '0.1em', color: '#585858', maxWidth: '700px', margin: '0 auto', lineHeight: '1.8' }}>
                    OverDrive is an independent platform and is not affiliated with, endorsed by, or associated with any official motorsport organization, including Formula 1, FIA, WEC, MotoGP, WRC, NASCAR, or their respective rights holders. All championship names, team names, driver names, and related marks are trademarks of their respective owners.
                </p>
                <p className="!text-[0.65rem] sm:!text-[0.7rem] md:!text-[0.75rem] !px-1 sm:!px-2 md:!px-0" style={{ fontSize: '0.75rem', letterSpacing: '0.1em', color: '#585858', maxWidth: '700px', margin: '0 auto', lineHeight: '1.8' }}>
                    OverDrive is an immersive motorsport experience platform built with passion for the sport.
                </p>
            </div>
        </footer>
    )
}