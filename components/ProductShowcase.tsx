"use client";
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
// Ideally we would import specific equipment images here
// import appScreen from "@/assets/app-screen.png"; 

export default function ProductShowcase() {
    const showcaseRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: showcaseRef,
        offset: ["start end", "end start"],
    });
    const rotateX = useTransform(scrollYProgress, [0, 1], [15, 0]);
    const opacity = useTransform(scrollYProgress, [0, 1], [0.5, 1]);

    return (
        <section ref={showcaseRef} className="bg-gradient-to-b from-[#FFFFFF] to-[#D2DCFF] py-24 overflow-x-clip">
            <div className="container">
                <div className="max-w-[540px] mx-auto">
                    <div className="flex justify-center">
                        <div className="tag">Equipo de Alta Gama</div>
                    </div>
                    <h2 className="text-center text-3xl md:text-5xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#5a4832] text-transparent bg-clip-text mt-5">
                        Calidad de cine para tu boda
                    </h2>
                    <p className="text-center text-xl text-[#010D3E] tracking-tight mt-5">
                        No somos solo videógrafos, somos cineastas. Utilizamos la misma tecnología que en las producciones cinematográficas para garantizar que cada encuadre sea una obra de arte.
                    </p>
                </div>
                <div className="relative mt-14">
                    <motion.div
                        style={{
                            rotateX: rotateX,
                            opacity: opacity,
                            transformPerspective: "800px",
                        }}
                        className="rounded-xl border border-white/20 p-2 bg-white/50 backdrop-blur-sm shadow-2xl"
                    >
                        {/* Placeholder for a collage of equipment or a high-quality behind-the-scenes shot */}
                        <div className="aspect-video bg-gray-900 rounded-lg flex items-center justify-center text-white/50 text-2xl font-light">
                            <div className="text-center p-8">
                                <p className="mb-4">Sony FX3 Cinema Line • Drones 4K • Iluminación Amaran</p>
                                <span className="text-sm border border-white/20 px-3 py-1 rounded-full">Tecnología de Punta</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
