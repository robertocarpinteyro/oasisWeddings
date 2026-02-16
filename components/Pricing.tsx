"use client";
import React from 'react';
import { motion } from 'framer-motion';

const pricingTiers = [
    {
        title: "Básico",
        price: "$17,000",
        originalPrice: null, // No discount shown
        description: "Cobertura esencial con calidad cinematográfica.",
        buttonText: "Elegir Básico",
        popular: false,
        inverse: false,
        features: [
            "10 horas de cobertura",
            "Equipo cinematográfico (Cámara de cine, Drone, Iluminación)",
            "2 operadores (Video y Foto)",
            "Video de 5-6 minutos del evento",
            "100 fotografías en álbum digital y descarga",
        ],
    },
    {
        title: "Intermedio",
        price: "$29,000",
        originalPrice: "$32,000",
        description: "La opción ideal para capturar cada detalle.",
        buttonText: "Elegir Intermedio",
        popular: true,
        inverse: true,
        features: [
            "10 horas de cobertura",
            "2 Cámaras de cine (FX3) + Drone + Iluminación",
            "2 operadores de video + Fotógrafo profesional",
            "Video de 5-6 minutos + Cineminuto Highlight",
            "200 fotografías en álbum digital y descarga",
            "Photobook físico incluido",
        ],
    },
    {
        title: "Premium",
        price: "$36,000",
        originalPrice: null,
        description: "La máxima experiencia y calidad cinematográfica.",
        buttonText: "Elegir Premium",
        popular: false,
        inverse: false,
        features: [
            "Cobertura completa con máxima calidad (Cine)",
            "Todo lo del paquete intermedio",
            "Staff adicional para producción",
            "Edición de video avanzada y color grading de cine",
            "Photobook físico de lujo",
            "Entrega prioritaria",
        ],
    },
];

const CheckIcon = ({ className }: { className?: string }) => (
    <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
)

export default function Pricing() {
    return (
        <section id="pricing" className="py-24 bg-white">
            <div className="container">
                <div className="max-w-[540px] mx-auto">
                    <h2 className="section-title text-center text-3xl md:text-5xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#5a4832] text-transparent bg-clip-text">
                        Paquetes
                    </h2>
                    <p className="text-center text-xl text-[#010D3E] tracking-tight mt-5">
                        Elige la opción perfecta para tu día especial. Todos nuestros precios son más IVA.
                    </p>
                </div>
                <div className="flex flex-col gap-6 items-center mt-10 lg:flex-row lg:items-end lg:justify-center">
                    {pricingTiers.map(({ title, price, description, buttonText, popular, inverse, features }, index) => (
                        <div key={title} className={`p-10 rounded-3xl border border-[#F1F1F1] shadow-[0_7px_14px_#EAEAEA] max-w-xs w-full ${inverse ? 'bg-black text-white' : 'bg-white text-black'}`}>
                            <div className="flex justify-between items-center">
                                <h3 className={`text-lg font-bold ${inverse ? 'text-white/60' : 'text-black/50'}`}>{title}</h3>
                                {popular && (
                                    <div className="inline-flex text-sm px-4 py-1.5 rounded-xl border border-white/20">
                                        <span className="bg-[linear-gradient(to_right,#DD7DDF,#E1CD86,#BBCB92,#71C2EF,#3BFFFF,#DD7DDF)] text-transparent bg-clip-text font-medium">
                                            Más Popular
                                        </span>
                                    </div>
                                )}
                            </div>
                            <div className="flex items-baseline gap-1 mt-[30px]">
                                <span className="text-4xl font-bold tracking-tighter leading-none">{price}</span>
                                <span className="tracking-tight font-bold text-black/50 text-sm">MXN</span>
                            </div>
                            <div className="text-sm mt-1 text-gray-500 font-medium">+ IVA</div>

                            <p className="mt-5 text-sm md:text-base leading-6 text-gray-500">{description}</p>
                            <button
                                onClick={() => window.open(`https://wa.me/528141558165?text=Hola,%20me%20interesa%20el%20paquete%20${title}`, "_blank")}
                                className={`btn btn-primary w-full mt-[30px] ${inverse ? 'bg-white text-black hover:bg-gray-200' : ''}`}
                            >
                                {buttonText}
                            </button>
                            <ul className="flex flex-col gap-5 mt-8">
                                {features.map((feature, featureIndex) => (
                                    <li key={featureIndex} className="text-sm flex items-center gap-4">
                                        <CheckIcon className="h-6 w-6 flex-shrink-0" />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Custom Package Section */}
                <div className="mt-16 max-w-4xl mx-auto p-8 bg-gray-50 rounded-2xl border border-gray-200 text-center">
                    <h3 className="text-2xl font-bold mb-4">¿Necesitas algo diferente?</h3>
                    <p className="text-lg text-gray-600 mb-6">
                        Entendemos que cada boda es única. Si nuestros paquetes no se ajustan a lo que buscas,
                        podemos crear una propuesta personalizada para ti.
                    </p>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => window.open("https://wa.me/528141558165?text=Hola,%20me%20gustaría%20una%20cotización%20personalizada", "_blank")}
                        className="btn btn-primary"
                    >
                        Solicitar Cotización Personalizada
                    </motion.button>
                </div>

            </div>
        </section>
    );
}
