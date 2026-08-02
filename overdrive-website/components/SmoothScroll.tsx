"use client";

/**
 ##
 ## OverDrive 2026
 ## All Technical rights reserved
 ##
 ## SmoothScroll - Wraps a page in a Lenis smooth-scroll instance wired into GSAP's
 ## ScrollTrigger ticker. Scoped per-page so it mounts/unmounts cleanly on navigation.
 ## Exposes the Lenis instance via context so pages can pause it (e.g. behind a modal).
 ##
 */

import { createContext, useContext, useEffect, useState } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

const LenisContext = createContext<Lenis | null>(null);

export function useLenis() {
    return useContext(LenisContext);
}

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
    const [lenis, setLenis] = useState<Lenis | null>(null);

    useEffect(() => {
        const instance = new Lenis({
            duration: 1.1,
            easing: (t: number) => 1 - Math.pow(1 - t, 3),
            smoothWheel: true,
        });

        instance.on("scroll", ScrollTrigger.update);

        const tickerCallback = (time: number) => {
            instance.raf(time * 1000);
        };
        gsap.ticker.add(tickerCallback);
        gsap.ticker.lagSmoothing(0);

        const refresh = () => ScrollTrigger.refresh();
        window.addEventListener("resize", refresh);

        setLenis(instance);

        return () => {
            window.removeEventListener("resize", refresh);
            gsap.ticker.remove(tickerCallback);
            instance.destroy();
            ScrollTrigger.getAll().forEach((t) => t.kill());
            setLenis(null);
        };
    }, []);

    return <LenisContext.Provider value={lenis}>{children}</LenisContext.Provider>;
}
