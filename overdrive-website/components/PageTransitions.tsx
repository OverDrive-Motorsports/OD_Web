"use client";

/**
 ##
 ## OverDrive 2026
 ## All Technical rights reserved
 ##
 ## PageTransition - Page enter transition without exit delay.
 ##
 */

import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

export default function PageTransition({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const isHome = pathname === "/";

    return (
        <motion.div
            key={pathname}
            initial={isHome ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.28, ease: [0.25, 0.1, 0.25, 1] }}
        >
            {children}
        </motion.div>
    );
}
