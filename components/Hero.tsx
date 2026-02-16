"use client";
import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Video Background */}
            <div className="absolute inset-0 z-0">
                <iframe
                    src="https://drive.google.com/file/d/1AtBE8gsV4VG2UIUVbKNvwzLniZIjwzvT/preview"
                    className="w-full h-full object-cover"
                    style={{ border: "none", pointerEvents: "none", width: "100%", height: "100%", position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%) scale(1.5)" }}
                    allow="autoplay"
                    allowFullScreen
                    title="Wedding Demo Reel"
                />
                {/* Dark overlay over video */}
                <div className="absolute inset-0 bg-black/65" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40" />
            </div>

            <div className="container relative z-10 text-center pt-24 pb-20">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <p className="section-label mb-6">Oasis Creativa × PG Estrategias</p>

                    <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight leading-[1.05] max-w-4xl mx-auto text-white drop-shadow-lg">
                        Tu boda merece{" "}
                        <span className="italic text-white/80">ser una película</span>
                    </h1>

                    <p className="text-lg md:text-xl text-white/70 leading-relaxed max-w-2xl mx-auto mt-8 drop-shadow-md">
                        Cada mirada, cada risa, cada lágrima de felicidad merece ser capturada como se siente —
                        con la emoción intacta y la belleza que solo el cine puede darle.
                    </p>
                </motion.div>

                <motion.div
                    className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.3 }}
                >
                    <button
                        className="btn-primary"
                        onClick={() => document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" })}
                    >
                        Ver Paquetes
                    </button>
                    <button
                        className="btn-outline !border-white/30 !text-white hover:!bg-white/10"
                        onClick={() => window.open("https://wa.me/528141558165", "_blank")}
                    >
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.654-.698c1.048.577 1.603.878 2.806.878 3.181 0 5.767-2.587 5.768-5.766.001-3.182-2.585-5.766-5.768-5.766zm3.073 8.237c-.128.36-.744.687-1.037.732-.293.045-.556.064-3.065-.964-2.508-1.027-4.08-3.604-4.204-3.77-.124-.167-.98-1.304-.98-2.486 0-1.183.599-1.764.835-2.01.236-.245.48-.306.648-.306.167 0 .335.002.481.009.167.007.381-.056.583.468.21.543.716 1.867.779 2.002.062.135.09.295.008.468-.083.173-.123.281-.248.431-.124.15-.266.335-.373.449-.124.132-.256.275-.112.542.145.268.645 1.114 1.394 1.812.964.898 1.785 1.18 2.053 1.313.268.133.42.112.579-.056.159-.167.676-.76.861-1.024.185-.264.363-.218.604-.12.24.098 1.532.72 1.795.851.262.13.433.197.496.303.062.106.062.61-.066.97z" fillRule="evenodd" />
                        </svg>
                        Contáctanos
                    </button>
                </motion.div>

                {/* Scroll indicator */}
                <motion.div
                    className="absolute bottom-8 left-1/2 -translate-x-1/2"
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                    <div className="w-5 h-8 rounded-full border border-white/20 flex items-start justify-center p-1">
                        <div className="w-1 h-2 bg-white/50 rounded-full" />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
