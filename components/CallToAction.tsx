"use client";
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function CallToAction() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

    return (
        <section ref={containerRef} className="bg-gradient-to-b from-white to-[#D2DCFF] py-24 overflow-x-clip">
            <div className="container">
                <div className="max-w-[540px] mx-auto relative text-center">

                    <h2 className="text-5xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#5a4832] text-transparent bg-clip-text mt-5">
                        ¿Listos para reservar su fecha?
                    </h2>
                    <p className="text-xl text-[#010D3E] tracking-tight mt-5">
                        Las fechas se llenan rápido. Contáctanos hoy para asegurar que tu historia sea contada con la calidad que merece.
                    </p>
                    {/* Decorative elements - keeping abstractions or could replace with rings/flowers */}
                    <motion.img
                        src="/assets/star.png"
                        alt="Star"
                        width={360}
                        className="absolute -left-[350px] -top-[137px]"
                        style={{ translateY }}
                    />
                    <motion.img
                        src="/assets/spring.png"
                        alt="Spring"
                        width={360}
                        className="absolute -right-[331px] -top-[19px]"
                        style={{ translateY }}
                    />
                </div>
                <div className="flex justify-center mt-10 gap-2">
                    <button
                        className="btn btn-primary"
                        onClick={() => window.open("https://wa.me/528141558165", "_blank")}
                    >
                        Cotizar por WhatsApp
                    </button>
                    <button
                        className="btn btn-text gap-1"
                        onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
                    >
                        <span>Ver Paquetes de Nuevo</span>
                        <span className="text-xl">↑</span>
                    </button>
                </div>
            </div>
        </section>
    );
};