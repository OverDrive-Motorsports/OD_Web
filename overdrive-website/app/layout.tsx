/**
 ##
 ## OverDrive 2026
 ## All Technical rights reserved
 ##
 ## RootLayout - Application root layout that injects global styles, metadata, and base document structure.
 ##
 */

import type { Metadata } from "next";
import { Orbitron } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransitions";

const orbitron = Orbitron({
    subsets: ["latin"],
    weight: ["400", "700", "900"],
    variable: "--font-orbitron",
    display: "swap",
});

export const metadata: Metadata = {
    title: "OverDrive",
    description: "Motorsport Reimagined",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${orbitron.variable} antialiased`}>
                <Navbar />
                <PageTransition>{children}</PageTransition>
                <Footer />
            </body>
        </html>
    );
}
