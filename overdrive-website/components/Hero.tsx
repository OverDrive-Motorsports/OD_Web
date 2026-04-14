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

        const scroll = scrollRef.current; //0.75
        const rotationProgress = Math.min(1, scroll / 0.22);//min(1, 0.75/ 0.25) =3.40->1
        const zoomProgress = Math.max(0, Math.min(1, (scroll - 0.2) / 0.5));//max(0, min(1, (0.75-0.5)/0.5))=max(0, min(1, 0.25/0.5))=max(0, 0.5)=0.5
        const baseRotation = 1.75* Math.PI;//1.75*PI=315°->car starts facing slightly left, then rotates to 360° 
        const targetRotation =
            baseRotation + rotationProgress * (Math.PI / 4);//final rotation = 315° + (45° * rotationProgress), so it rotates from 315° to 360°

        carRef.current.rotation.y = THREE.MathUtils.lerp(
            carRef.current.rotation.y,
            targetRotation,
            0.12
        );//smoothly interpolate the car's rotation towards the target rotation based on scroll progress
        const targetScale = 1 + zoomProgress * 0.55;//car scales up to 1.55x as scroll down, creating a zoom-in effect
        carRef.current.scale.setScalar(
            THREE.MathUtils.lerp(
                carRef.current.scale.x,
                targetScale,
                0.08
            )
        );//smoothly interpolate the car's scale towards the target scale based on scroll progress
        carRef.current.position.y = THREE.MathUtils.lerp(
            carRef.current.position.y,
        -0.5 + zoomProgress * 0.7,// car position y
            0.08
        );///smoothly interpolate the car's vertical position to create a lifting effect as it zooms in, moving up to 0.2 units higher at maximum zoom
        carRef.current.position.z = THREE.MathUtils.lerp(
            carRef.current.position.z,
            zoomProgress * 1.85,//depth in car's local space
            0.08
        );//smoothly interpolate the car's depth position to move it closer to the camera as it zooms in, moving up to 1.85 units closer at maximum zoom
        camera.position.y = THREE.MathUtils.lerp(
            camera.position.y,
            1.18 + zoomProgress * 0.08,//height of the camera
            0.08
        );//smoothly interpolate the camera's vertical position to slightly adjust as the car zooms in, moving up to 0.08 units higher at maximum zoom
        camera.position.z = THREE.MathUtils.lerp(
            camera.position.z,
            5.8 - zoomProgress * 2.6,//depth of the camera
            0.08
        );//smoothly interpolate the camera's depth position to move it closer to the car as it zooms in, moving up to 2.6 units closer at maximum zoom
        camera.fov = THREE.MathUtils.lerp(
            camera.fov,
            34 - zoomProgress * 4,//field of view of the camera, creating a subtle zoom effect by reducing the FOV as the car zooms in, up to 4 degrees at maximum zoom
            0.06
        );//smoothly interpolate the camera's field of view to create a subtle zoom effect, reducing the FOV by up to 4 degrees at maximum zoom
        //camera.updateProjectionMatrix();
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
                        position: [0, 1.3, 5.8],
                        fov: 34,
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