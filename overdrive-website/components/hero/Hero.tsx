/**
 ##
 ## OverDrive 2026
 ## All Technical rights reserved
 ##
 ## Hero - BMW hero section with scroll-driven rotation and mouse-driven light.
 ##
 */

"use client";

import { Suspense, useLayoutEffect, useRef, type MutableRefObject, type RefObject } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import * as THREE from "three";

function ModelBMW() {
    const gltf = useGLTF("/bmw_m_hybrid_v8.glb");
    return <primitive object={gltf.scene} />;
}

function MouseLight() {
    const lightRef = useRef<THREE.PointLight | null>(null);

    useFrame((state) => {
        if (!lightRef.current) {
            return;
        }

        const targetX = state.pointer.x * 5;
        const targetY = 1.8 + state.pointer.y * 2;

        lightRef.current.position.x = THREE.MathUtils.lerp(lightRef.current.position.x, targetX, 0.12);
        lightRef.current.position.y = THREE.MathUtils.lerp(lightRef.current.position.y, targetY, 0.12);
        lightRef.current.position.z = THREE.MathUtils.lerp(lightRef.current.position.z, 3.2, 0.12);
    });

    return <pointLight ref={lightRef} color="#ffffff" intensity={1.9} distance={16} position={[0, 1.8, 3.2]} />;
}

function ScrollRotation({
    modelRef,
    scrollProgressRef,
}: {
    modelRef: RefObject<THREE.Group | null>;
    scrollProgressRef: MutableRefObject<number>;
}) {
    useFrame(() => {
        if (!modelRef.current) {
            return;
        }

        modelRef.current.rotation.y = Math.PI + scrollProgressRef.current * Math.PI;
    });

    return null;
}

export default function Hero() {
    const sectionRef = useRef<HTMLElement | null>(null);
    const modelRef = useRef<THREE.Group | null>(null);
    const scrollProgressRef = useRef(0);

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const section = sectionRef.current;

        if (!section) {
            return;
        }

        const rotateTrigger = ScrollTrigger.create({
            trigger: section,
            start: "center center",
            end: "bottom top",
            scrub: true,
            invalidateOnRefresh: true,
            onUpdate: (self) => {
                scrollProgressRef.current = self.progress;
            },
        });

        return () => {
            rotateTrigger.kill();
            scrollProgressRef.current = 0;
        };
    }, []);

    return (
        <section
            ref={sectionRef}
            className="relative"
            style={{ backgroundColor: "#0d0d0d" }}
        >
            <div className="sticky top-0 h-screen overflow-hidden">
                <div className="absolute inset-0">
                    <Canvas camera={{ position: [0, 1.3, 5.8], fov: 34, near: 0.1, far: 100 }} dpr={[1, 1.75]}>
                        <color attach="background" args={["#0d0d0d"]} />
                        <ambientLight color="#ffffff" intensity={0.34} />
                        <directionalLight color="#ffffff" intensity={1.05} position={[-4, 5, 3]} />
                        <MouseLight />
                        <ScrollRotation modelRef={modelRef} scrollProgressRef={scrollProgressRef} />
                        <group ref={modelRef} position={[0, -0.62, 0]} rotation={[0, Math.PI, 0]} scale={1.04}>
                            <Suspense fallback={null}>
                                <ModelBMW />
                            </Suspense>
                        </group>
                    </Canvas>
                </div>
            </div>
            <div className="h-[220vh] md:h-[270vh]" />
        </section>
    );
}

useGLTF.preload("/bmw_m_hybrid_v8.glb");
