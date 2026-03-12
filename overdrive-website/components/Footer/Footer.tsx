/**
 ##
 ## OverDrive 2026
 ## All Technical rights reserved
 ##
 ## Footer - Component for the OverDrive website footer.
 ##
 */
"use client";

import Link from "next/link";
import "./footer.css";

const footerLinks = [
  { label: "GitHub", href: "https://github.com/OverDrive-Motorsports", external: true },
  { label: "Cookies", href: "/cookies", external: false },
  { label: "Privacy", href: "/privacy", external: false },
];

export default function Footer() {
    return (
        <footer className="footer-container">

        <div className="divider" />

        <div className="footer-top">
            <p className="footer-copyright">
            © 2026 OverDrive. All Technical rights reserved.
            </p>

            <nav className="footer-nav">
            {footerLinks.map((item) =>
                item.external ? (
                <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="footer-link"
                >
                    {item.label.toUpperCase()}
                </a>
                ) : (
                <Link
                    key={item.label}
                    href={item.href}
                    className="footer-link"
                >
                    {item.label.toUpperCase()}
                </Link>
                )
            )}
            </nav>
        </div>

        <div className="footer-bottom">
            <p>
            OverDrive is an independent platform and is not affiliated with, endorsed by, or associated with any official motorsport organization, including Formula 1, FIA, WEC, MotoGP, WRC, NASCAR, or their respective rights holders. All championship names, team names, driver names, and related marks are trademarks of their respective owners.
            </p>
            <p>
            OverDrive is an immersive motorsport experience platform built with passion for the sport.
            </p>
        </div>

        </footer>
    );
}