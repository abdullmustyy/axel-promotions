import { Inter, Luxurious_Script, Poppins, Urbanist } from "next/font/google";
import localFont from "next/font/local";

export const aeonikTrial = localFont({
    src: [
        {
            path: "../public/fonts/aeoniktrial-light.otf",
            weight: "300",
            style: "normal",
        },
        {
            path: "../public/fonts/aeoniktrial-lightitalic.otf",
            weight: "300",
            style: "italic",
        },
        {
            path: "../public/fonts/aeoniktrial-regular.otf",
            weight: "400",
            style: "normal",
        },
        {
            path: "../public/fonts/aeoniktrial-regularitalic.otf",
            weight: "400",
            style: "italic",
        },
        {
            path: "../public/fonts/aeoniktrial-bold.otf",
            weight: "700",
            style: "normal",
        },
        {
            path: "../public/fonts/aeoniktrial-bolditalic.otf",
            weight: "700",
            style: "italic",
        },
    ],
    display: "swap",
    variable: "--font-aeonik-trial",
});

export const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
});

export const luxuriousScript = Luxurious_Script({
    subsets: ["latin"],
    weight: "400",
    variable: "--font-luxurious-script",
});

export const poppins = Poppins({
    subsets: ["latin"],
    weight: ["400", "500", "600"],
    variable: "--font-poppins",
});

export const urbanist = Urbanist({
    subsets: ["latin"],
    variable: "--font-urbanist",
});
