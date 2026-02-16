"use client";
import React from "react";
import { motion } from "framer-motion";

const highlights = [
    {
        icon: (
            <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
                <circle cx="12" cy="13" r="4" />
            </svg>
        ),
        title: "Imagen como de película",
        description: "Cada toma tiene el look y la emoción de una escena de cine. Tu boda va a verse increíble.",
    },
    {
        icon: (
            <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2L2 7l10 5 10-5-10-5z" />
                <path d="M2 17l10 5 10-5" />
                <path d="M2 12l10 5 10-5" />
            </svg>
        ),
        title: "Tomas aéreas espectaculares",
        description: "Vistas que te van a quitar el aliento. Capturas desde el cielo que hacen único tu recuerdo.",
    },
    {
        icon: (
            <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="5" /><line x1="12" y1="1" x2="12" y2="3" /><line x1="12" y1="21" x2="12" y2="23" />
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" /><line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                <line x1="1" y1="12" x2="3" y2="12" /><line x1="21" y1="12" x2="23" y2="12" />
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" /><line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
            </svg>
        ),
        title: "Iluminación perfecta",
        description: "La luz hace la magia. Nos aseguramos de que cada momento se vea tan hermoso como lo sentiste.",
    },
    {
        icon: (
            <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
        ),
        title: "Edición de alto nivel",
        description: "Color, ritmo y emoción. Tu video tendrá el acabado profesional que solo el cine puede darte.",
    },
];

export default function ProductShowcase() {
    return (
        <section id="servicios" className="py-24 md:py-32 bg-black relative">
            <div className="absolute top-0 left-0 right-0 h-px gold-line" />

            <div className="container">
                <div className="text-center mb-16">
                    <p className="section-label mb-4">Lo que nos hace diferentes</p>
                    <h2 className="section-title">
                        No es solo un video,<br />
                        <span className="italic text-white/60">es tu historia de amor</span>
                    </h2>
                    <p className="section-subtitle mx-auto mt-6">
                        Nos obsesionamos con cada detalle para que cuando veas tu video, sientas exactamente lo mismo que sentiste ese día.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
                    {highlights.map((item, index) => (
                        <motion.div
                            key={item.title}
                            className="group p-8 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] hover:border-[#C9A050]/20 transition-all duration-500"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <div className="text-[#C9A050]/50 group-hover:text-[#C9A050] transition-colors duration-500 mb-5">
                                {item.icon}
                            </div>
                            <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                            <p className="text-sm text-white/40 leading-relaxed">{item.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
