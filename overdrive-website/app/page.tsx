/**
 ##
 ## OverDrive 2026
 ## All Technical rights reserved
 ##
 ## HomePage - Main component for the OverDrive website landing page.
 ##
 */

"use client";

import { AnimatePresence, motion, useInView } from "framer-motion";
import { useEffect, useState, useRef } from "react";

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
                className="min-h-screen flex flex-col items-center justify-center gap-6 px-4 sm:px-6 md:px-0"
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

            {/* Vision Section */}
            <Section
                title="Vision"
                subtitle="The Future of Racing"
                content="OVERDRIVE is more than just a platform—it's a revolution in how motorsport is experienced. We envision a world where the thrill of racing transcends physical boundaries, where technology and tradition merge to create unprecedented experiences for drivers and fans alike."
            />

            {/* Problem Section */}
            <Section
                title="Problem"
                subtitle="Breaking Barriers"
                content="Traditional motorsport faces challenges: high costs, limited accessibility, and environmental concerns. The sport we love is becoming increasingly exclusive, disconnected from the next generation of enthusiasts who demand more immersive, sustainable, and accessible experiences."
                dark
            />

            {/* Solution Section */}
            <Section
                title="Solution"
                subtitle="Innovation Meets Passion"
                content="OVERDRIVE bridges the gap between virtual and physical racing through cutting-edge technology. We combine real-time telemetry, advanced simulation, and social connectivity to create a hybrid platform that democratizes motorsport while maintaining the authenticity and adrenaline that makes racing unforgettable."
            />
        </section>
    );
}



interface SectionProps {
  title: string;
  subtitle: string;
  content: string;
  dark?: boolean;
}
function Section({ title, subtitle, content, dark }: SectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section
      ref={ref}
      className={`min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-0 ${
        dark ? "bg-gradient-to-b from-black via-zinc-900 to-black" : "bg-black"
      }`}
    >
      <div className="max-w-3xl text-center flex flex-col gap-6">

        {/* subtitle */}
        <motion.p
          className="small-text !text-[0.58rem] sm:!text-[0.65rem] md:!text-[0.7rem] !tracking-[0.22em] sm:!tracking-[0.26em] md:!tracking-[0.3em]"
          style={{ color: "var(--color-gold)" }}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {subtitle}
        </motion.p>

        {/* title */}
        <motion.h2
          className="text-center !text-[1.35rem] sm:!text-[2.1rem] md:!text-[3rem] !tracking-[0.22em] sm:!tracking-[0.3em] md:!tracking-[0.4em]"
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          {title}
        </motion.h2>

        {/* content */}
        <motion.p
          className="text-gray-400 text-sm sm:text-base leading-relaxed"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          {content}
        </motion.p>

      </div>
    </section>
  );
}
