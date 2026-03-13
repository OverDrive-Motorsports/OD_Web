/**
 ##
 ## OverDrive 2026
 ## All Technical rights reserved
 ##
 ## HomePage - Main component for the OverDrive website landing page.
 ##
 */

"use client";

import Hero from "@/components/hero/Hero";
import { AnimatePresence, motion, useInView, useAnimation } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { ChevronDown } from 'lucide-react';

function ScrollIndicator() {
	const controls = useAnimation();

	useEffect(() => {
		const animateScroll = async () => {
		while (true) {
			await controls.start({ y: 10, opacity: 0.6 });
			await controls.start({ y: 0, opacity: 1 });
		}
		};
		animateScroll();
	}, [controls]);

	return (
		<motion.div
		animate={controls}
		className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
		>
		<motion.div
			className="w-3 h-3 border-b-2 border-r-2 border-gold rotate-45"
		/>
		<p className="text-xs text-gold/50 tracking-widest">Scroll</p>
		</motion.div>
	);
}

export default function Home() {
	const [showIntro, setShowIntro] = useState(true);
	useEffect(() => {
		if (window.scrollY !== 0) window.scrollTo({ top: 0, left: 0, behavior: "auto" });
		let timer: ReturnType<typeof setTimeout> | null = null;
		const frame = window.requestAnimationFrame(() => {
		timer = setTimeout(() => setShowIntro(false), 1100);
		});

		return () => {
		window.cancelAnimationFrame(frame);
		if (timer) clearTimeout(timer);
		};
	}, []);


    return (
		<section style={{ position: "relative" }}>
		<AnimatePresence>
			{showIntro && <IntroOverlay />}
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

			<motion.div
				className="absolute bottom-12 left-1/2 -translate-x-1/2"
				initial={{ opacity: 0 }}
				animate={{ 
					opacity: 1,
					y: [0, 12, 0]
				}}
				transition={{ 
					y: {
					duration: 1,
					ease: "easeInOut",
					repeat: Infinity,
					repeatType: "mirror"
					},
					opacity: { duration: 1, delay: 1 }
				}}
			>
			<ChevronDown className="w-8 h-8 text-yellow-500" />
			</motion.div>
		</motion.main>
		<Hero />

		<Section
			title="Vision"
			subtitle="The Future of Racing"
			content="OVERDRIVE is more than just a platform—it's a revolution in how motorsport is experienced. We envision a world where the thrill of racing transcends physical boundaries, where technology and tradition merge to create unprecedented experiences for drivers and fans alike."
		/>
		<Section
			title="Problem"
			subtitle="Breaking Barriers"
			content="Traditional motorsport faces challenges: high costs, limited accessibility, and environmental concerns. The sport we love is becoming increasingly exclusive, disconnected from the next generation of enthusiasts who demand more immersive, sustainable, and accessible experiences."
			dark
		/>
		<Section
			title="Solution"
			subtitle="Innovation Meets Passion"
			content="OVERDRIVE bridges the gap between virtual and physical racing through cutting-edge technology. We combine real-time telemetry, advanced simulation, and social connectivity to create a hybrid platform that democratizes motorsport while maintaining the authenticity and adrenaline that makes racing unforgettable."
		/>
		<TechStackSection />
            </section>
    );
}

function IntroOverlay() {
	return (
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
			<motion.p className="!text-[0.58rem] sm:!text-[0.65rem] md:!text-[0.7rem]"
			initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
			transition={{ duration: 0.45 }}
			style={{ color: "var(--color-gold)", fontSize: "0.7rem", letterSpacing: "0.3em" }}
			>
			Aventix present
			</motion.p>

			<motion.h1 className="text-center !text-[1.35rem] sm:!text-[2.1rem] md:!text-[3rem] !tracking-[0.22em] sm:!tracking-[0.3em] md:!tracking-[0.4em]"
			initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
			transition={{ duration: 0.55, delay: 0.08 }}
			style={{ fontSize: "3rem", letterSpacing: "0.4em" }}
			>
			O V E R D R I V E
			</motion.h1>

			<p className="small-text !text-[0.58rem] sm:!text-[0.65rem] md:!text-[0.7rem] !tracking-[0.22em] sm:!tracking-[0.3em] md:!tracking-[0.4em]"
			style={{ opacity: 0, fontSize: "0.7rem", letterSpacing: "0.4em" }}
			>
			VER +1.234
			</p>
		</div>
		</motion.div>
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
			dark ? "bg-gradient-to-b from-transparent via-transparent to-transparent" : "bg-transparent"
		}`}
		>
		<div className="max-w-3xl text-center flex flex-col gap-6">
			<motion.p
			className="small-text !text-[0.58rem] sm:!text-[0.65rem] md:!text-[0.7rem] !tracking-[0.22em] sm:!tracking-[0.26em] md:!tracking-[0.3em]"
			style={{ color: "var(--color-gold)", fontFamily: "var(--font-secondary)" }}
			initial={{ opacity: 0, y: 40 }}
			animate={isInView ? { opacity: 1, y: 0 } : {}}
			transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
			>
			{subtitle}
			</motion.p>

			<motion.h2
			className="text-center !text-[1.35rem] sm:!text-[2.1rem] md:!text-[3rem] !tracking-[0.22em] sm:!tracking-[0.3em] md:!tracking-[0.4em]"
			style={{ fontFamily: "var(--font-primary)", fontWeight: "var(--font-bold)" }}
			initial={{ opacity: 0, y: 60 }}
			animate={isInView ? { opacity: 1, y: 0 } : {}}
			transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
			>
			{title}
			</motion.h2>

			<motion.p
			className="text-gray-300 text-sm sm:text-base leading-relaxed"
			style={{ fontFamily: "var(--font-secondary)" }}
			initial={{ opacity: 0, y: 40 }}
			animate={isInView ? { opacity: 1, y: 0 } : {}}
			transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
			>
			{content}
			</motion.p>
		</div>
		</section>
	);
}


function TechStackSection() {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, amount: 0.3 });
	const techStack = [
		{ name: "AR/VR", description: "Immersive Tech", color: "#D4AF37" },
		{ name: "WebSocket", description: "Real-time Data", color: "#D4AF37" },
		{ name: "PostgreSQL+Prisma", description: "Database Management", color: "#D4AF37" },
		{ name: "Go", description: "Backend Development", color: "#D4AF37" },
		{ name: "Flutter", description: "Mobile Development", color: "#D4AF37" },
		{ name: "Next.js", description: "Frontend Framework", color: "#D4AF37" },
	];

	return (
		<section ref={ref} className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 md:px-0 py-24 bg-transparent">
		<div className="max-w-3xl w-full text-center flex flex-col gap-6">
			<motion.p
			className="small-text !text-[0.58rem] sm:!text-[0.65rem] md:!text-[0.7rem] !tracking-[0.22em] sm:!tracking-[0.26em] md:!tracking-[0.3em]"
			style={{ color: "var(--color-gold)", fontFamily: "var(--font-secondary)" }}
			initial={{ opacity: 0, y: 40 }}
			animate={isInView ? { opacity: 1, y: 0 } : {}}
			transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
			>
			Built with Precision
			</motion.p>

			<motion.h2
			className="text-center !text-[1.35rem] sm:!text-[2.1rem] md:!text-[3rem] !tracking-[0.22em] sm:!tracking-[0.3em] md:!tracking-[0.4em]"
			style={{ fontFamily: "var(--font-primary)", fontWeight: "var(--font-bold)" }}
			initial={{ opacity: 0, y: 60 }}
			animate={isInView ? { opacity: 1, y: 0 } : {}}
			transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
			>
			Tech Stack
			</motion.h2>

			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
			{techStack.map((tech, i) => (
				<TechCard key={tech.name} tech={tech} index={i} isInView={isInView} />
			))}
			</div>

			<motion.p
			className="text-white text-sm tracking-wide font-light mt-16"
			initial={{ opacity: 0 }}
			animate={isInView ? { opacity: 1 } : {}}
			transition={{ duration: 0.8, delay: 0.8 }}
			>
			Modern technologies for exceptional experiences.
			</motion.p>
		</div>
		</section>
	);
}

interface TechCardProps {
	tech: { name: string; description: string; color: string };
	index: number;
	isInView: boolean;
}

function TechCard({ tech, index, isInView }: TechCardProps) {
	return (
		<motion.div
		initial={{ opacity: 0, y: 20 }}
		animate={isInView ? { opacity: 1, y: 0 } : {}}
		transition={{ duration: 0.5, delay: 0.1 + index * 0.1, ease: [0.22, 1, 0.36, 1] }}
		whileHover={{ y: -6, transition: { duration: 0.3 } }}
		className="group relative"
		>
		<div className="relative bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] rounded-2xl border border-white/5 p-8 transition-all duration-300 hover:border-[#D4AF37]/30 hover:shadow-[0_8px_32px_rgba(212,175,55,0.1)] flex flex-col items-center justify-center gap-2 min-h-[140px]">
			<div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#D4AF37]/0 to-[#D4AF37]/0 group-hover:from-[#D4AF37]/5 group-hover:to-transparent transition-all duration-300 pointer-events-none" />
			<div className="relative z-10">
			<h3 className="text-xl font-light tracking-wide text-[#D4AF37] mb-1">{tech.name}</h3>
				<p
					className="text-gray-400 text-sm sm:text-sm leading-relaxed"
					style={{ fontFamily: "var(--font-secondary)" }}
				>
					{tech.description}
				</p>
			</div>
			<div className="absolute top-0 right-0 w-12 h-12 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
			<div className="absolute top-3 right-3 w-6 h-px bg-gradient-to-r from-transparent to-[#D4AF37]/30" />
			<div className="absolute top-3 right-3 w-px h-6 bg-gradient-to-b from-transparent to-[#D4AF37]/30" />
			</div>
		</div>
		</motion.div>
	);
}