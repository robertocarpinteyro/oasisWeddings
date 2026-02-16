"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface PackageTier {
    id: string;
    title: string;
    subtitle: string;
    price: string;
    duration: string;
    description: string;
    features: string[];
    bonus?: string[];
}

const packages: PackageTier[] = [
    {
        id: "esencia",
        title: "Esencia",
        subtitle: "Lo que importa",
        price: "$18,000",
        duration: "10 horas de cobertura",
        description: "Para las parejas que quieren un recuerdo auténtico y hermoso de su día especial, sin complicaciones.",
        features: [
            "2 profesionales dedicados a cámara y fotografía",
            "Iluminación profesional para cada momento",
            "Video highlight cinematográfico de 5-6 minutos",
            "100 fotografías editadas profesionalmente",
            "Entrega digital en Drive privado",
        ],
    },
    {
        id: "eterna",
        title: "Eterna",
        subtitle: "Cada ángulo, cada emoción",
        price: "$29,000",
        duration: "10 horas de cobertura",
        description: "Nuestra opción más popular. Cobertura exclusiva para novio y novia con videógrafos dedicados y un fotógrafo profesional que no dejará escapar nada.",
        features: [
            "2 videógrafos exclusivos — uno para el novio, otro para la novia",
            "Fotógrafo profesional dedicado",
            "Tomas aéreas con drone",
            "Iluminación profesional de cine",
            "Video highlight cinematográfico de 5-6 minutos",
            "Cineminuto highlight para compartir en redes",
            "200 fotografías editadas profesionalmente",
            "Álbum digital en sitio web personalizado",
            "Photobook físico impreso de tu boda",
        ],
        bonus: [
            "🎁 Invitaciones digitales de regalo",
            "Diseño personalizado en sitio web",
            "Envío directo por correo a tus invitados",
        ],
    },
    {
        id: "leyenda",
        title: "Leyenda",
        subtitle: "La experiencia definitiva",
        price: "$38,000",
        duration: "Cobertura completa",
        description: "La producción máxima. Un equipo completo dedicado a que cada segundo de tu boda se convierta en una obra de arte.",
        features: [
            "2 videógrafos profesionales",
            "Operador de drone certificado",
            "1 persona de staff de producción",
            "Iluminación profesional de cine",
            "Video highlight cinematográfico de 5-6 minutos",
            "Cineminuto highlight para compartir en redes",
            "5 Reels para redes sociales (hasta 35 seg c/u)",
            "300 fotografías editadas profesionalmente",
            "Álbum digital en sitio web personalizado",
            "Photobook físico impreso de lujo",
            "Edición de color a nivel cinematográfico",
            "Entrega prioritaria",
        ],
        bonus: [
            "🎁 Invitaciones digitales de regalo",
            "Diseño personalizado en sitio web",
            "Envío directo por correo a tus invitados",
        ],
    },
];

export default function Pricing() {
    const [selected, setSelected] = useState<string>("eterna");
    const [showBonus, setShowBonus] = useState<Record<string, boolean>>({});

    const toggleBonus = (id: string, e: React.MouseEvent) => {
        e.stopPropagation();
        setShowBonus((prev) => ({ ...prev, [id]: !prev[id] }));
    };

    return (
        <section id="pricing" className="py-24 md:py-32 bg-black relative">
            <div className="absolute top-0 left-0 right-0 h-px gold-line" />

            <div className="container">
                {/* Header */}
                <div className="text-center mb-16">
                    <p className="section-label mb-4">Inversión</p>
                    <h2 className="section-title">
                        Elige tu <span className="italic text-white/60">experiencia</span>
                    </h2>
                    <p className="section-subtitle mx-auto mt-6">
                        Tres experiencias pensadas para que tu boda tenga el recuerdo que siempre soñaste. Precios + IVA.
                    </p>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto items-start">
                    {packages.map((pkg) => {
                        const isSelected = selected === pkg.id;
                        const isBonusOpen = showBonus[pkg.id] ?? false;
                        return (
                            <motion.div
                                key={pkg.id}
                                onClick={() => setSelected(pkg.id)}
                                className={`relative cursor-pointer rounded-2xl p-8 transition-all duration-500 border ${isSelected
                                        ? "bg-white text-black border-[#C9A050]/30 shadow-[0_0_60px_rgba(201,160,80,0.08)]"
                                        : "bg-white/[0.03] text-white border-white/10 hover:border-[#C9A050]/20 hover:bg-white/[0.05]"
                                    }`}
                                layout
                                whileTap={{ scale: 0.98 }}
                            >
                                {/* Popular Badge */}
                                {pkg.id === "eterna" && (
                                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs font-medium px-4 py-1 rounded-full whitespace-nowrap bg-gradient-to-r from-[#C9A050] to-[#E8C97A] text-black">
                                        Más Popular
                                    </div>
                                )}

                                {/* Title & Duration */}
                                <div className="mb-6">
                                    <p className={`text-xs uppercase tracking-[0.2em] mb-1 ${isSelected ? "text-[#C9A050]" : "text-[#C9A050]/50"}`}>
                                        {pkg.subtitle}
                                    </p>
                                    <h3 className="text-2xl font-serif font-semibold">{pkg.title}</h3>
                                    <p className={`text-xs mt-1 ${isSelected ? "text-black/40" : "text-white/30"}`}>{pkg.duration}</p>
                                </div>

                                {/* Price */}
                                <div className="flex items-baseline gap-2 mb-4">
                                    <span className="text-4xl font-bold tracking-tight">{pkg.price}</span>
                                    <span className={`text-sm ${isSelected ? "text-black/40" : "text-white/40"}`}>MXN + IVA</span>
                                </div>

                                {/* Description */}
                                <p className={`text-sm leading-relaxed mb-8 ${isSelected ? "text-black/60" : "text-white/50"}`}>
                                    {pkg.description}
                                </p>

                                {/* CTA Button */}
                                <button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        window.open(
                                            `https://wa.me/528141558165?text=${encodeURIComponent(`Hola, me interesa el paquete ${pkg.title} para mi boda`)}`,
                                            "_blank"
                                        );
                                    }}
                                    className={`w-full py-3 rounded-full text-sm font-medium transition-all duration-300 mb-8 ${isSelected
                                            ? "bg-gradient-to-r from-[#C9A050] to-[#E8C97A] text-black hover:opacity-90"
                                            : "bg-white/10 text-white hover:bg-white/15"
                                        }`}
                                >
                                    Elegir {pkg.title}
                                </button>

                                {/* Features */}
                                <ul className="space-y-3">
                                    {pkg.features.map((feature, i) => (
                                        <li key={i} className="flex items-start gap-3 text-sm">
                                            <svg
                                                className={`w-4 h-4 mt-0.5 flex-shrink-0 ${isSelected ? "text-[#C9A050]" : "text-[#C9A050]/40"}`}
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                            <span className={isSelected ? "text-black/70" : "text-white/60"}>{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                {/* Bonus Tab — Only for Eterna & Leyenda */}
                                {pkg.bonus && (
                                    <div className="mt-6">
                                        <button
                                            onClick={(e) => toggleBonus(pkg.id, e)}
                                            className={`w-full flex items-center justify-between gap-2 py-3 px-4 rounded-xl text-sm font-medium transition-all duration-300 ${isSelected
                                                    ? "bg-[#C9A050]/10 text-[#C9A050] hover:bg-[#C9A050]/15"
                                                    : "bg-[#C9A050]/5 text-[#C9A050]/70 hover:bg-[#C9A050]/10"
                                                }`}
                                        >
                                            <span>🎁 Bonificación incluida</span>
                                            <motion.svg
                                                className="w-4 h-4"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                                animate={{ rotate: isBonusOpen ? 180 : 0 }}
                                                transition={{ duration: 0.2 }}
                                            >
                                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                            </motion.svg>
                                        </button>

                                        <AnimatePresence>
                                            {isBonusOpen && (
                                                <motion.div
                                                    initial={{ height: 0, opacity: 0 }}
                                                    animate={{ height: "auto", opacity: 1 }}
                                                    exit={{ height: 0, opacity: 0 }}
                                                    transition={{ duration: 0.3 }}
                                                    className="overflow-hidden"
                                                >
                                                    <ul className="space-y-2 pt-4 pl-1">
                                                        {pkg.bonus.map((item, i) => (
                                                            <li key={i} className={`text-sm flex items-start gap-2 ${isSelected ? "text-black/60" : "text-white/50"
                                                                }`}>
                                                                <span>{item}</span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                )}
                            </motion.div>
                        );
                    })}
                </div>

                {/* Custom Package */}
                <div className="mt-16 text-center">
                    <div className="inline-flex flex-col items-center max-w-lg">
                        <p className="section-label mb-3">¿Buscas algo a tu medida?</p>
                        <p className="text-white/50 text-sm mb-6">
                            Si ninguno de estos paquetes se ajusta a lo que tienes en mente, con gusto armamos una propuesta especial para ti.
                        </p>
                        <button
                            onClick={() =>
                                window.open(
                                    "https://wa.me/528141558165?text=Hola,%20me%20gustaría%20una%20cotización%20personalizada%20para%20mi%20boda",
                                    "_blank"
                                )
                            }
                            className="btn-outline"
                        >
                            Solicitar Cotización Personalizada
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
