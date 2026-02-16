"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

export default function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "bg-black/80 backdrop-blur-xl border-b border-white/5" : "bg-transparent"
                }`}
        >
            <div className="container flex items-center justify-between h-16 md:h-20">
                {/* Logo — using img tag directly to avoid Next.js Image optimization issues with SVG */}
                <a href="#" className="flex items-center">
                    <img
                        src="/assets/logotipo.svg"
                        alt="Oasis Creativa"
                        className="h-6 md:h-7 w-auto"
                    />
                </a>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8 text-sm text-white/60">
                    <a href="#servicios" className="hover:text-white transition-colors duration-200">Servicios</a>
                    <a href="#pricing" className="hover:text-white transition-colors duration-200">Paquetes</a>
                    <a href="#contacto" className="hover:text-white transition-colors duration-200">Contacto</a>
                    <button
                        onClick={() => window.open("https://wa.me/528141558165", "_blank")}
                        className="bg-gradient-to-r from-[#C9A050] to-[#E8C97A] text-black font-medium px-6 py-2.5 rounded-full text-xs tracking-wide hover:opacity-90 transition-opacity"
                    >
                        Reservar Fecha
                    </button>
                </nav>

                {/* Mobile Hamburger */}
                <button
                    className="md:hidden flex flex-col gap-1.5 p-2"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle menu"
                >
                    <span className={`block h-0.5 w-6 bg-white transition-transform duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
                    <span className={`block h-0.5 w-6 bg-white transition-opacity duration-300 ${menuOpen ? "opacity-0" : ""}`} />
                    <span className={`block h-0.5 w-6 bg-white transition-transform duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
                </button>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="md:hidden bg-black/95 backdrop-blur-xl border-t border-white/5 px-6 py-8 flex flex-col gap-6">
                    <a href="#servicios" onClick={() => setMenuOpen(false)} className="text-lg text-white/70 hover:text-white transition-colors">Servicios</a>
                    <a href="#pricing" onClick={() => setMenuOpen(false)} className="text-lg text-white/70 hover:text-white transition-colors">Paquetes</a>
                    <a href="#contacto" onClick={() => setMenuOpen(false)} className="text-lg text-white/70 hover:text-white transition-colors">Contacto</a>
                    <button
                        onClick={() => { setMenuOpen(false); window.open("https://wa.me/528141558165", "_blank"); }}
                        className="bg-gradient-to-r from-[#C9A050] to-[#E8C97A] text-black font-medium px-6 py-3 rounded-full w-full"
                    >
                        Reservar Fecha
                    </button>
                </div>
            )}
        </header>
    );
}