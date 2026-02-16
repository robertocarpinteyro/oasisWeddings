"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Hero() {
    const heroRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: heroRef,
        offset: ["start end", "end start"],
    });
    const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

    return (
        <section ref={heroRef} className="pt-8 pb-20 md:pt-5 md:pb-10 overflow-x-clip bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#f5f5f5,transparent_100%)]">
            <div className="container">
                <div className="md:flex items-center">
                    <div className="md:w-[478px]">
                        <div className="tag">Calidad Cinematográfica</div>
                        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#5a4832] text-transparent bg-clip-text mt-6">
                            Inmortalizamos tu historia de amor
                        </h1>
                        <p className="text-xl text-[#010D3E] tracking-tight mt-6">
                            Capturamos los mejores momentos de tu boda con equipo de cine de última generación.
                            Desde drones hasta iluminación profesional, creamos una película inolvidable de tu día especial.
                        </p>
                        <div className="flex gap-1 items-center mt-[30px]">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="btn btn-primary"
                                onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
                            >
                                Ver Paquetes
                            </motion.button>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="btn btn-text gap-1"
                                onClick={() => window.open("https://wa.me/528141558165", "_blank")}
                            >
                                <span>Contáctanos</span>
                                {/* Arrow Icon */}
                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9 16.5C13.1421 16.5 16.5 13.1421 16.5 9C16.5 4.85786 13.1421 1.5 9 1.5C4.85786 1.5 1.5 4.85786 1.5 9C1.5 13.1421 4.85786 16.5 9 16.5Z" stroke="#1A1A1A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M7.75 12.25L11.25 8.75L7.75 5.25" stroke="#1A1A1A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </motion.button>
                        </div>
                    </div>
                    <div className="mt-20 md:mt-0 md:h-[648px] md:flex-1 relative">
                        {/* 
                Placeholder for visuals. in a real scenario we'd use actual wedding photos.
                Using simple colored divs or placeholders for now to represent the "Cinematographic" feel
             */}
                        <motion.div
                            className="md:absolute md:h-[95%] md:w-[95%] bg-gradient-to-br from-gray-200 to-gray-400 rounded-3xl shadow-xl overflow-hidden border-4 border-white"
                            animate={{
                                translateY: [-20, 20],
                            }}
                            transition={{
                                repeat: Infinity,
                                repeatType: "mirror",
                                duration: 4,
                                ease: "easeInOut",
                            }}
                        >
                            <div className="w-full h-full flex items-center justify-center text-gray-500 font-serif italic text-2xl">
                                Cinematic Wedding Film Preview
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
