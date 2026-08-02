"use client";

/**
 ##
 ## OverDrive 2026
 ## All Technical rights reserved
 ##
 ## RoadmapTile - Wide, staggered tile used by the Roadmap timeline to present
 ## a single objective: visual/mockup, quarter, title, status and description.
 ##
 */

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export type MilestoneStatus = "done" | "active" | "planned";

export interface Milestone {
    status: MilestoneStatus;
    title: string;
    description: string;
    tags: string[];
    image?: string | null;
}

export interface TimelineItem extends Milestone {
    quarterLabel: string;
}

export interface Quarter {
    id: string;
    label: string;
    heading: string;
    milestones: Milestone[];
}

export const statusLabel: Record<MilestoneStatus, string> = {
    active: "In progress",
    planned: "Planned",
    done: "Done",
};

export const statusColor: Record<MilestoneStatus, string> = {
    active: "var(--color-gold)",
    planned: "#8a8a8a",
    done: "#7fae8a",
};

export function RoadmapTile({ item, align }: { item: TimelineItem; align: "left" | "right" }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.25 });
    const color = statusColor[item.status];

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 w-full sm:w-[86%] md:w-[78%]"
            style={{ marginLeft: align === "right" ? "auto" : undefined }}
        >
            <div className="relative aspect-[16/8] sm:aspect-[16/7] overflow-hidden rounded-2xl">
                {item.image ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={item.image} alt={item.title} className="absolute inset-0 h-full w-full object-cover" />
                ) : (
                    <div className="absolute inset-0" style={{ background: `linear-gradient(135deg, ${color}1f 0%, #101010 60%, #0a0a0a 100%)` }}>
                        <div
                            className="absolute inset-0 opacity-[0.05]"
                            style={{
                                backgroundImage: `repeating-linear-gradient(115deg, ${color} 0px, ${color} 1px, transparent 1px, transparent 34px)`,
                            }}
                        />
                    </div>
                )}
            </div>

            <div className="flex flex-wrap items-center justify-between gap-3 pt-5">
                <div className="flex items-center gap-3">
                    <span className="!text-[0.6rem] text-gray-500 font-secondary uppercase" style={{ letterSpacing: "0.15em" }}>
                        {item.quarterLabel}
                    </span>
                    <h3 className="!text-[1.15rem] sm:!text-[1.35rem]" style={{ fontFamily: "var(--font-primary)", fontWeight: "var(--font-bold)" }}>
                        {item.title}
                    </h3>
                </div>
                <span
                    className="!text-[0.65rem] px-3 py-1.5 rounded-full font-secondary shrink-0"
                    style={{ border: `1px solid ${color}`, color, letterSpacing: "0.04em" }}
                >
                    {statusLabel[item.status]}
                </span>
            </div>

            <p className="text-gray-400 text-sm sm:text-base leading-relaxed font-secondary pt-2 max-w-xl">
                {item.description}
            </p>
        </motion.div>
    );
}
