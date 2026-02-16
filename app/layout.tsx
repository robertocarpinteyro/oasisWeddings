import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import clsx from "clsx";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata: Metadata = {
    title: "Oasis Creativa × PG Estrategias — Bodas Cinematográficas",
    description: "Capturamos los mejores momentos de tu boda con calidad cinematográfica. Paquetes desde $17,000 MXN.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="es" className="relative scroll-smooth">
            <body className={clsx(inter.variable, playfair.variable, "antialiased bg-black text-white font-sans")}>
                {children}
            </body>
        </html>
    );
}
