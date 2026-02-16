"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const highlights = [
    {
        image: "https://res.cloudinary.com/dxcr9utre/image/upload/v1770334085/WhatsApp_Image_2026-02-05_at_5.21.14_PM_ayu139.jpg",
        title: "Tu equipo dedicado",
        description: "Videógrafos, fotógrafos y operadores de drone — un equipo completo enfocado en que no se escape ni un solo momento.",
    },
    {
        image: "https://res.cloudinary.com/dxcr9utre/image/upload/v1770334142/9837c6f78552d14f441722a0f80cafb0-xxlarge_x6grtm.jpg",
        title: "Cineminuto para compartir",
        description: "Un resumen de un minuto con lo mejor de tu boda — perfecto para compartir con familia y amigos.",
    },
    {
        image: "https://res.cloudinary.com/dxcr9utre/image/upload/v1770334370/91ebce557df7d97b598c4084a77f100f-xxlarge_w1dddt.jpg",
        title: "Reels para tus redes",
        description: "Contenido profesional listo para Instagram y TikTok que va a enamorar a todos tus seguidores.",
    },
    {
        image: "https://res.cloudinary.com/dxcr9utre/image/upload/v1770334085/cd1fbe2511c34500d1c8a86399579a25-xxlarge_uzzrte.jpg",
        title: "Video highlight 4K",
        description: "De 5 a 6 minutos con las mejores tomas de tu día, editado con color y ritmo de cine.",
    },
];

export default function ProductShowcase() {
    return (
        <section id="servicios" className="py-24 md:py-32 bg-black relative">
            <div className="absolute top-0 left-0 right-0 h-px gold-line" />

            <div className="container">
                <div className="text-center mb-16">
                    <p className="section-label mb-4">Lo que te llevas</p>
                    <h2 className="section-title">
                        No es solo un video,<br />
                        <span className="italic text-white/60">es tu historia de amor</span>
                    </h2>
                    <p className="section-subtitle mx-auto mt-6">
                        Nos obsesionamos con cada detalle para que cuando veas tu video, sientas exactamente lo mismo que sentiste ese día.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
                    {highlights.map((item, index) => (
                        <motion.div
                            key={item.title}
                            className="group rounded-2xl border border-white/5 bg-white/[0.02] hover:border-[#C9A050]/20 transition-all duration-500 overflow-hidden"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            {/* Image */}
                            <div className="relative h-52 overflow-hidden">
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                                    sizes="(max-width: 640px) 100vw, 50vw"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                            </div>

                            {/* Text */}
                            <div className="p-6">
                                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                                <p className="text-sm text-white/40 leading-relaxed">{item.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
