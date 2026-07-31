"use client";

/**
 ##
 ## OverDrive 2026
 ## All Technical rights reserved
 ##
 ## UpdateTile - Visual tile components for the Updates page: the large featured
 ## tile, the bento grid tile, and the shared visual/media block they both use.
 ##
 */

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Sparkles, Wrench, Bug, Megaphone, LucideIcon } from "lucide-react";

export type UpdateCategory = "Feature" | "Improvement" | "Fix" | "Announcement";
export type MediaType = "image" | "video";

export interface UpdateMedia {
    type: MediaType;
    src: string;
    alt?: string;
}

export interface UpdateEntry {
    version: string;
    date: string;
    category: UpdateCategory;
    title: string;
    excerpt: string;
    body: string[];
    tags: string[];
    image?: string | null;
    video?: string | null;
    comment?: string;
}

export function entryMedia(entry: UpdateEntry): UpdateMedia | undefined {
    if (entry.video) return { type: "video", src: entry.video, alt: entry.title };
    if (entry.image) return { type: "image", src: entry.image, alt: entry.title };
    return undefined;
}

export const categoryConfig: Record<UpdateCategory, { icon: LucideIcon; color: string }> = {
    Feature: { icon: Sparkles, color: "#c9a84c" },
    Improvement: { icon: Wrench, color: "#6ea8fe" },
    Fix: { icon: Bug, color: "#e07a5f" },
    Announcement: { icon: Megaphone, color: "#9d8cff" },
};

export function UpdateVisual({
    category,
    version,
    layoutKey,
    media,
    big,
    wide,
}: {
    category: UpdateCategory;
    version: string;
    layoutKey: string;
    media?: UpdateMedia;
    big?: boolean;
    wide?: boolean;
}) {
    const cfg = categoryConfig[category];
    const Icon = cfg.icon;
    const aspect = big ? "aspect-[21/9]" : wide ? "aspect-[2/1]" : "aspect-[6/5]";

    return (
        <motion.div
            layoutId={`visual-${layoutKey}`}
            className={`relative overflow-hidden rounded-2xl ${aspect}`}
            style={{ background: media ? "#0a0a0a" : `linear-gradient(135deg, ${cfg.color}26 0%, #0f0f0f 55%, #0a0a0a 100%)` }}
        >
            {media ? (
                media.type === "video" ? (
                    <video
                        src={media.src}
                        className="absolute inset-0 h-full w-full object-cover"
                        autoPlay
                        loop
                        muted
                        playsInline
                    />
                ) : (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                        src={media.src}
                        alt={media.alt ?? ""}
                        className="absolute inset-0 h-full w-full object-cover"
                    />
                )
            ) : (
                <>
                    <div
                        className="absolute inset-0 opacity-[0.08]"
                        style={{
                            backgroundImage: `repeating-linear-gradient(115deg, ${cfg.color} 0px, ${cfg.color} 1px, transparent 1px, transparent 34px)`,
                        }}
                    />
                    <motion.div
                        className="absolute rounded-full"
                        style={{
                            width: big ? 220 : 140,
                            height: big ? 220 : 140,
                            right: big ? "8%" : "-10%",
                            top: "-20%",
                            background: `radial-gradient(circle, ${cfg.color}33 0%, transparent 70%)`,
                        }}
                        animate={{ scale: [1, 1.15, 1] }}
                        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <Icon size={big ? 56 : 34} style={{ color: cfg.color, opacity: 0.5 }} strokeWidth={1.25} />
                    </div>
                </>
            )}
            {media && <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(10,10,10,0.35) 0%, transparent 40%)" }} />}
            <span
                className="absolute top-3 left-3 sm:top-4 sm:left-4 !text-[0.55rem] px-2 py-1 rounded-full font-secondary"
                style={{ background: "rgba(13,13,13,0.6)", color: cfg.color, letterSpacing: "0.12em", backdropFilter: "blur(4px)" }}
            >
                {category.toUpperCase()}
            </span>
            <span
                className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 !text-[0.55rem] text-gray-400 font-secondary px-2 py-1 rounded-full"
                style={{ letterSpacing: "0.06em", background: media ? "rgba(13,13,13,0.6)" : "transparent", backdropFilter: media ? "blur(4px)" : undefined }}
            >
                {version}
            </span>
        </motion.div>
    );
}

export function FeaturedTile({ entry, onOpen }: { entry: UpdateEntry; onOpen: () => void }) {
    const ref = useRef<HTMLButtonElement>(null);
    const isInView = useInView(ref, { amount: 0.35, once: false });

    return (
        <motion.button
            ref={ref}
            layout
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
            exit={{ opacity: 0, scale: 0.97 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            onClick={onOpen}
            className="group relative text-left rounded-2xl overflow-hidden border"
            style={{ borderColor: "rgba(255,255,255,0.08)" }}
        >
            <UpdateVisual category={entry.category} version={entry.version} layoutKey={entry.version} media={entryMedia(entry)} big />
            <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-10">
                <div
                    className="absolute inset-0"
                    style={{ background: "linear-gradient(to top, rgba(10,10,10,0.9) 0%, rgba(10,10,10,0.15) 55%, transparent 100%)" }}
                />
                <div className="relative z-10 flex flex-col gap-3 max-w-xl">
                    <span className="!text-[0.6rem] font-secondary" style={{ color: "var(--color-gold)", letterSpacing: "0.2em" }}>
                        LATEST RELEASE &middot; {entry.date}
                    </span>
                    <motion.h2
                        layoutId={`title-${entry.version}`}
                        className="!text-[1.5rem] sm:!text-[2.1rem] leading-tight font-secondary"
                        style={{ fontWeight: 700, letterSpacing: "-0.01em" }}
                    >
                        {entry.title}
                    </motion.h2>
                    <p className="text-gray-300 text-sm sm:text-base leading-relaxed font-secondary hidden sm:block">
                        {entry.excerpt}
                    </p>
                </div>
            </div>
        </motion.button>
    );
}

export function BentoTile({ entry, span, onOpen }: { entry: UpdateEntry; span: string; onOpen: () => void }) {
    const ref = useRef<HTMLButtonElement>(null);
    const isInView = useInView(ref, { amount: 0.35, once: false });
    const wide = span.includes("col-span-2");

    return (
        <motion.button
            ref={ref}
            layout
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -3 }}
            onClick={onOpen}
            className={`group text-left rounded-2xl overflow-hidden border transition-colors duration-300 hover:border-white/20 flex flex-col ${span}`}
            style={{ borderColor: "rgba(255,255,255,0.08)" }}
        >
            <UpdateVisual category={entry.category} version={entry.version} layoutKey={entry.version} media={entryMedia(entry)} wide={wide} />
            <div className="flex flex-col gap-1.5 p-4 sm:p-5">
                <span className="!text-[0.58rem] text-gray-500 font-secondary" style={{ letterSpacing: "0.08em" }}>
                    {entry.date}
                </span>
                <motion.h3
                    layoutId={`title-${entry.version}`}
                    className="!text-[1rem] sm:!text-[1.05rem] font-secondary leading-snug"
                    style={{ fontWeight: 700, letterSpacing: "-0.005em" }}
                >
                    {entry.title}
                </motion.h3>
                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed font-secondary line-clamp-2">
                    {entry.excerpt}
                </p>
            </div>
        </motion.button>
    );
}
