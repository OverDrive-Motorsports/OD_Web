/**
 ##
 ## OverDrive 2026
 ## All Technical rights reserved
 ##
 ## HomePage - Main component for the OverDrive website landing page.
 ##
 */

"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import Hero from "@/components/hero/Hero";

export default function Home() {
    const [showIntro, setShowIntro] = useState(true);

    useEffect(() => {
        if (window.scrollY !== 0) {
            window.scrollTo({ top: 0, left: 0, behavior: "auto" });
        }

        let timer: ReturnType<typeof setTimeout> | null = null;
        const frame = window.requestAnimationFrame(() => {
            timer = setTimeout(() => setShowIntro(false), 1100);
        });

        return () => {
            window.cancelAnimationFrame(frame);
            if (timer) {
                clearTimeout(timer);
            }
        };
    }, []);

    return (
        <>
            <section style={{ position: "relative" }}>
                <AnimatePresence>
                    {showIntro ? (
                        <motion.div
                            initial={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.65, ease: [0.25, 0.1, 0.25, 1] }}
                            style={{
                                position: "absolute",
                                inset: 0,
                                zIndex: 200,
                                background: "#000000",
                                pointerEvents: "none",
                                willChange: "opacity",
                            }}
                        >
                            <div
                                className="px-4 sm:px-6 md:px-0"
                                style={{
                                    minHeight: "100vh",
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    gap: "1.5rem",
                                }}
                            >
                                <motion.p
                                    className="!text-[0.58rem] sm:!text-[0.65rem] md:!text-[0.7rem]"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.45 }}
                                    style={{
                                        color: "var(--color-gold)",
                                        fontSize: "0.7rem",
                                        letterSpacing: "0.3em",
                                    }}
                                >
                                    Aventix present
                                </motion.p>
                                <motion.h1
                                    className="text-center !text-[1.35rem] sm:!text-[2.1rem] md:!text-[3rem] !tracking-[0.22em] sm:!tracking-[0.3em] md:!tracking-[0.4em]"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.55, delay: 0.08 }}
                                    style={{ fontSize: "3rem", letterSpacing: "0.4em" }}
                                >
                                    O V E R D R I V E
                                </motion.h1>
                                <p
                                    className="small-text !text-[0.58rem] sm:!text-[0.65rem] md:!text-[0.7rem] !tracking-[0.22em] sm:!tracking-[0.3em] md:!tracking-[0.4em]"
                                    style={{ opacity: 0, fontSize: "0.7rem", letterSpacing: "0.4em" }}
                                >
                                    VER +1.234
                                </p>
                            </div>
                        </motion.div>
                    ) : null}
                </AnimatePresence>

                <motion.main
                    className="min-h-[52vh] md:min-h-[48vh] flex flex-col items-center justify-center gap-6 px-4 sm:px-6 md:px-0"
                    initial={{ opacity: 0, filter: "blur(12px)" }}
                    animate={showIntro ? { opacity: 0, filter: "blur(12px)" } : { opacity: 1, filter: "blur(0px)" }}
                    transition={{ duration: 0.65, ease: [0.25, 0.1, 0.25, 1] }}
                    style={{ willChange: "opacity, filter" }}
                >
                    <p className="small-text !text-[0.58rem] sm:!text-[0.65rem] md:!text-[0.7rem] !tracking-[0.22em] sm:!tracking-[0.26em] md:!tracking-[0.3em]" style={{ color: "var(--color-gold)", fontSize: "0.7rem", letterSpacing: "0.3em" }}>
                        MOTORSPORT REIMAGINED
                    </p>
                    <h1 className="text-center !text-[1.35rem] sm:!text-[2.1rem] md:!text-[3rem] !tracking-[0.22em] sm:!tracking-[0.3em] md:!tracking-[0.4em]" style={{ fontSize: "3rem", letterSpacing: "0.4em" }}>
                        O V E R D R I V E
                    </h1>
                    <p className="small-text !text-[0.58rem] sm:!text-[0.65rem] md:!text-[0.7rem] !tracking-[0.22em] sm:!tracking-[0.3em] md:!tracking-[0.4em]" style={{ fontSize: "0.7rem", letterSpacing: "0.4em" }}>
                        VER +1.234
                    </p>
                </motion.main>
            </section>

            <Hero />
        </>
    );
}
