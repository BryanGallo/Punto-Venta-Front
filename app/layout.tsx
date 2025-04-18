import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Punto de Venta",
    description: "Punto de venta",
    icons: {
        icon: "/logo.jpg", 
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="es">
            <body className={`${outfit.className}`}>
                {children}
            </body>
        </html>
    );
}
