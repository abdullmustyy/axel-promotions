import Navbar from "@/components/navbar";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { aeonikTrial, inter, luxuriousScript, poppins } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
    title: "Axel Promotions",
    description: "Accelerate Growth with Proven Marketing & Sales Execution",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={cn(
                    aeonikTrial.variable,
                    inter.variable,
                    luxuriousScript.variable,
                    poppins.variable,
                )}
            >
                <Navbar />
                {children}
            </body>
        </html>
    );
}
