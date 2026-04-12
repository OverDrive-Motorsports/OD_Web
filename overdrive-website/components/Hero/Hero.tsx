/**
 ##
 ## OverDrive 2026
 ## All Technical rights reserved
 ##
 ## Hero - Component for the OverDrive website hero section, featuring a 3D BMW M Hybrid V8 model that reacts to scroll.
 ##
 */
"use client";

import { Suspense, useLayoutEffect, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";

function BMWModel() {
    const model = useGLTF("/bmw_m_hybrid_v8.glb");
    return <primitive object={model.scene} />;
}

function ScrollCar({
    carRef,
    scrollRef,
}: {
    carRef: React.RefObject<THREE.Group | null>;
    scrollRef: React.MutableRefObject<number>;
}) {
    const camera = useThree((state) => state.camera as THREE.PerspectiveCamera);

    useFrame(() => {
        if (!carRef.current) 
            return;

        const scroll = scrollRef.current;
        const rotationProgress = Math.min(1, scroll / 0.22);
        const zoomProgress = Math.max(0, Math.min(1, (scroll - 0.5) / 0.5));
        const baseRotation = 1.75* Math.PI;
        const targetRotation =
            baseRotation + rotationProgress * (Math.PI / 4);

        carRef.current.rotation.y = THREE.MathUtils.lerp(
            carRef.current.rotation.y,
            targetRotation,
            0.12
        );
        const targetScale = 1 + zoomProgress * 0.55;
        carRef.current.scale.setScalar(
            THREE.MathUtils.lerp(
                carRef.current.scale.x,
                targetScale,
                0.08
            )
        );
        carRef.current.position.y = THREE.MathUtils.lerp(
            carRef.current.position.y,
            -0.5 + zoomProgress * 0.7,
            0.08
        );
        carRef.current.position.z = THREE.MathUtils.lerp(
            carRef.current.position.z,
            zoomProgress * 1.45,
            0.08
        );
        camera.position.y = THREE.MathUtils.lerp(
            camera.position.y,
            1.3 + zoomProgress * 0.18,
            0.08
        );
        camera.position.z = THREE.MathUtils.lerp(
            camera.position.z,
            5.8 - zoomProgress * 2.6,
            0.08
        );
        camera.fov = THREE.MathUtils.lerp(
            camera.fov,
            34 - zoomProgress * 4,
            0.06
        );
        camera.updateProjectionMatrix();
    });
    return null;
}

function Light() {
    return (
        <>
        <directionalLight
            intensity={1.2}
            color="#ffffff"
            position={[10, 13, 12]} // right top front
        />
        <directionalLight
            intensity={1.2}
            color="#ffffff"
            position={[-10, 13, -12]} // left top behind
        />
        </>
    );
}

export default function Hero() {
    const carRef = useRef<THREE.Group | null>(null);
    const scrollRef = useRef(0);

    useLayoutEffect(() => {
        const updateScroll = () => {
            const scrollY = window.scrollY;
            const height = document.body.scrollHeight - 1.5*window.innerHeight;

            scrollRef.current =
                height > 0
                    ? Math.min(1, Math.max(0, scrollY / height))
                    : 0;
        };
        updateScroll();
        window.addEventListener("scroll", updateScroll, {
            passive: true,
        });
        return () =>
            window.removeEventListener("scroll", updateScroll);
    }, []);

    return (
        <>
            <div className="fixed inset-0 -z-10 pointer-events-none bg-[#0d0d0d]">
                <Canvas
                    camera={{
                        position: [0, 1.3, 5.8]
                    }}
                >
\                   <ambientLight intensity={0.8} />
                    <Light />
                    <ScrollCar
                        carRef={carRef}
                        scrollRef={scrollRef}
                    />
                    <group
                        ref={carRef}
                        position={[0, -0.5, 0]}
                        rotation={[0, -Math.PI, 0]}
                        scale={1.1}
                    >
                        <Suspense fallback={null}>
                            <BMWModel />
                        </Suspense>
                    </group>
                </Canvas>
            </div>

            <div className="h-screen" />
        </>
    );
}

useGLTF.preload("/bmw_m_hybrid_v8.glb");