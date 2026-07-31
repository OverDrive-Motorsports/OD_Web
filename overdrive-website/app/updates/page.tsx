"use client";

/**
 ##
 ## OverDrive 2026
 ## All Technical rights reserved
 ##
 ## UpdatesPage - Editorial bento grid of OverDrive updates. Each tile carries a visual
 ## and opens a full detail overlay on click, with a shared-element morph transition.
 ##
 */

import { useEffect, useState } from "react";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import { X } from "lucide-react";
import SmoothScroll, { useLenis } from "@/components/SmoothScroll";
import {
    FeaturedTile,
    BentoTile,
    UpdateVisual,
    categoryConfig,
    entryMedia,
    type UpdateEntry,
} from "@/components/UpdateTile";
import updatesData from "@/data/updates.json";

const updates: UpdateEntry[] = updatesData as UpdateEntry[];

const bentoSpan = (i: number) => (i % 3 === 0 ? "sm:col-span-2" : "sm:col-span-1");

export default function Updates() {
    const [openVersion, setOpenVersion] = useState<string | null>(null);

    const gridEntries = updates.slice(1);
    const openEntry = updates.find((u) => u.version === openVersion) ?? null;

    return (
        <SmoothScroll>
            <div>
                <UpdatesHero />
                <LayoutGroup>
                    <section className="px-6 sm:px-10 md:px-12 lg:px-16 xl:px-20 pt-8 pb-28 sm:pb-36">
                        <div className="mx-auto max-w-6xl flex flex-col gap-5 sm:gap-6">
                            <FeaturedTile entry={updates[0]} onOpen={() => setOpenVersion(updates[0].version)} />

                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
                                {gridEntries.map((entry, i) => (
                                    <BentoTile
                                        key={entry.version}
                                        entry={entry}
                                        span={bentoSpan(i)}
                                        onOpen={() => setOpenVersion(entry.version)}
                                    />
                                ))}
                            </div>
                        </div>
                    </section>

                    <DetailModal entry={openEntry} onClose={() => setOpenVersion(null)} />
                </LayoutGroup>
            </div>
        </SmoothScroll>
    );
}

function UpdatesHero() {
    return (
        <main className="relative min-h-[65vh] flex flex-col items-center justify-center gap-7 px-6 sm:px-10 md:px-12 lg:px-16 xl:px-20 text-center">
            <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
                className="!text-[0.6rem] sm:!text-[0.65rem] !tracking-[0.4em]"
                style={{ color: "var(--color-gold)", fontFamily: "var(--font-primary)" }}
            >
                UPDATES
            </motion.p>

            <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
                className="max-w-3xl !text-[2rem] sm:!text-[3rem] md:!text-[4rem] leading-[1.05] font-secondary"
                style={{ fontWeight: 700, letterSpacing: "-0.02em" }}
            >
                Everything we shipped,
                <br />
                as we shipped it.
            </motion.h1>

            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                className="max-w-md text-gray-400 text-sm sm:text-base leading-relaxed font-secondary"
            >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi
                sed euismod nisl eget aliquam ultricies nunc nisl aliquet nunc.
            </motion.p>
        </main>
    );
}

function DetailModal({ entry, onClose }: { entry: UpdateEntry | null; onClose: () => void }) {
    const lenis = useLenis();

    useEffect(() => {
        if (entry) {
            lenis?.stop();
            document.body.style.overflow = "hidden";
        } else {
            lenis?.start();
            document.body.style.overflow = "";
        }
        return () => {
            lenis?.start();
            document.body.style.overflow = "";
        };
    }, [entry, lenis]);

    useEffect(() => {
        if (!entry) return;
        const onKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [entry, onClose]);

    return (
        <AnimatePresence>
            {entry && (
                <motion.div
                    className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.25 }}
                >
                    <motion.div
                        className="absolute inset-0"
                        style={{ background: "rgba(6,6,6,0.82)", backdropFilter: "blur(10px)" }}
                        onClick={onClose}
                    />

                    <motion.div
                        initial={{ opacity: 0, scale: 0.94, y: 16 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.96, y: 10 }}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        className="relative w-full max-w-2xl max-h-[88vh] overflow-y-auto rounded-3xl border"
                        style={{ background: "#0d0d0d", borderColor: "rgba(255,255,255,0.1)" }}
                    >
                        <button
                            onClick={onClose}
                            aria-label="Close"
                            className="absolute top-4 right-4 sm:top-5 sm:right-5 z-20 flex h-9 w-9 items-center justify-center rounded-full transition-colors duration-200 hover:bg-white/10"
                            style={{ background: "rgba(13,13,13,0.6)", backdropFilter: "blur(4px)" }}
                        >
                            <X size={16} className="text-white" />
                        </button>

                        <div className="p-2 sm:p-3">
                            <UpdateVisual category={entry.category} version={entry.version} layoutKey={entry.version} media={entryMedia(entry)} big />
                        </div>

                        <div className="px-6 sm:px-10 pb-8 sm:pb-10 pt-2 flex flex-col gap-5">
                            <div className="flex flex-wrap items-center gap-3">
                                <span
                                    className="!text-[0.6rem] uppercase font-secondary"
                                    style={{ color: categoryConfig[entry.category].color, letterSpacing: "0.15em" }}
                                >
                                    {entry.category}
                                </span>
                                <span className="!text-[0.6rem] text-gray-500 font-secondary" style={{ letterSpacing: "0.08em" }}>
                                    {entry.version} &middot; {entry.date}
                                </span>
                            </div>

                            <motion.h2
                                layoutId={`title-${entry.version}`}
                                className="!text-[1.5rem] sm:!text-[1.9rem] leading-tight font-secondary"
                                style={{ fontWeight: 700, letterSpacing: "-0.01em" }}
                            >
                                {entry.title}
                            </motion.h2>

                            <div className="flex flex-col gap-4">
                                {entry.body.map((paragraph, i) => (
                                    <p key={i} className="text-gray-400 text-sm sm:text-base leading-relaxed font-secondary">
                                        {paragraph}
                                    </p>
                                ))}
                            </div>

                            <div className="flex flex-wrap gap-2 pt-2">
                                {entry.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="!text-[0.6rem] px-2.5 py-1 rounded-full text-gray-400 font-secondary"
                                        style={{ border: "1px solid rgba(255,255,255,0.1)", letterSpacing: "0.06em" }}
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
