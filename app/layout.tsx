import Navbar from "@/components/navbar";
import Newsletter from "@/components/newsletter";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import {
    aeonikTrial,
    inter,
    luxuriousScript,
    poppins,
    urbanist,
} from "./fonts";
import "./globals.css";
import Footer from "@/components/footer";

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
                    urbanist.variable,
                )}
            >
                <Navbar />
                {children}
                <Newsletter />
                <Footer />
            </body>
        </html>
    );
}
