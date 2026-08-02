"use client";

/**
 ##
 ## OverDrive 2026
 ## All Technical rights reserved
 ##
 ## RoadmapPage - Light, visual presentation of the OverDrive roadmap.
 ## A handful of headline objectives shown chronologically as wide, staggered cards.
 ##
 */

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import SmoothScroll from "@/components/SmoothScroll";
import { RoadmapTile, statusLabel, statusColor, type Milestone, type Quarter, type TimelineItem } from "@/components/RoadmapTile";
import roadmapData from "@/data/roadmap.json";

const quarters: Quarter[] = roadmapData as Quarter[];

const allMilestones: Milestone[] = quarters.flatMap((q) => q.milestones);

const timeline: TimelineItem[] = quarters.flatMap((q) =>
    q.milestones.map((m) => ({ ...m, quarterLabel: q.label }))
);

export default function Roadmap() {
    return (
        <SmoothScroll>
            <div>
                <RoadmapHero />
                <RoadmapTimeline />
                <RoadmapStats />
                <RoadmapClosing />
            </div>
        </SmoothScroll>
    );
}

function RoadmapHero() {
    return (
        <main className="relative min-h-[55vh] flex flex-col items-center justify-center gap-6 px-6 sm:px-10 md:px-12 lg:px-16 xl:px-20 text-center pt-24 pb-16">
            <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
                className="!text-[0.6rem] sm:!text-[0.65rem] !tracking-[0.4em]"
                style={{ color: "var(--color-gold)", fontFamily: "var(--font-primary)" }}
            >
                ROADMAP
            </motion.p>

            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
                className="max-w-2xl !text-[2rem] sm:!text-[2.75rem] md:!text-[3.25rem] leading-[1.1] font-secondary"
                style={{ fontWeight: 700, letterSpacing: "-0.02em" }}
            >
                What we&apos;re building next.
            </motion.h1>

            <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
                className="max-w-md text-gray-400 text-sm sm:text-base leading-relaxed font-secondary"
            >
                A new UI, a new championship, a new platform &mdash; here&apos;s where
                OverDrive is headed, quarter by quarter.
            </motion.p>
        </main>
    );
}

function RoadmapTimeline() {
    return (
        <section className="relative px-6 sm:px-10 md:px-12 lg:px-16 xl:px-20 pb-8 sm:pb-12">
            <div className="relative mx-auto max-w-6xl flex flex-col gap-16 sm:gap-24">
                <span
                    aria-hidden
                    className="pointer-events-none select-none absolute -top-6 right-0 !text-[16vw] sm:!text-[9rem] leading-none font-secondary hidden sm:block"
                    style={{ fontWeight: 800, color: "rgba(255,255,255,0.035)", letterSpacing: "-0.03em" }}
                >
                    Roadmap
                </span>

                {timeline.map((item, i) => (
                    <RoadmapTile key={item.title} item={item} align={i % 2 === 0 ? "left" : "right"} />
                ))}
            </div>
        </section>
    );
}

function RoadmapStats() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.5 });
    const stats = [
        { label: statusLabel.active, value: allMilestones.filter((m) => m.status === "active").length, color: statusColor.active },
        { label: statusLabel.planned, value: allMilestones.filter((m) => m.status === "planned").length, color: statusColor.planned },
        { label: statusLabel.done, value: allMilestones.filter((m) => m.status === "done").length, color: statusColor.done },
    ];

    return (
        <section ref={ref} className="px-6 sm:px-10 md:px-12 lg:px-16 xl:px-20 pt-16 sm:pt-24 pb-16 sm:pb-20">
            <div className="mx-auto max-w-4xl grid grid-cols-3 gap-3 sm:gap-4">
                {stats.map((s, i) => (
                    <motion.div
                        key={s.label}
                        initial={{ opacity: 0, y: 12 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5, delay: i * 0.08 }}
                        className="flex flex-col items-center gap-1.5 rounded-2xl border py-6 sm:py-8"
                        style={{ borderColor: "rgba(255,255,255,0.08)", background: "#0f0f0f" }}
                    >
                        <span className="!text-[1.75rem] sm:!text-[2.25rem] font-secondary" style={{ fontWeight: 700, color: "var(--color-white)" }}>
                            {s.value}
                        </span>
                        <span className="flex items-center gap-1.5 !text-[0.6rem] sm:!text-[0.65rem] text-gray-500 font-secondary uppercase" style={{ letterSpacing: "0.1em" }}>
                            <span className="h-1.5 w-1.5 rounded-full" style={{ background: s.color }} />
                            {s.label}
                        </span>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}

function RoadmapClosing() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.5 });

    return (
        <section ref={ref} className="px-6 sm:px-10 md:px-12 lg:px-16 xl:px-20 pb-24 sm:pb-32 flex flex-col items-center text-center gap-3">
            <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
                className="!text-[1.3rem] sm:!text-[1.6rem] max-w-lg font-secondary"
                style={{ fontWeight: 700, letterSpacing: "-0.01em" }}
            >
                What ships next is still being written.
            </motion.p>
            <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-gray-500 text-sm max-w-sm font-secondary leading-relaxed"
            >
                This roadmap evolves as we build. Check back for the latest on what&apos;s
                shipped and what&apos;s coming.
            </motion.p>
        </section>
    );
}
