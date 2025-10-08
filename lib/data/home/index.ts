import Martino from "@/public/images/pngs/martino.png";
import SquareStone from "@/public/images/pngs/square-stone.png";
import Vertex from "@/public/images/pngs/vertex.png";
import Virogan from "@/public/images/pngs/virogan.png";
import Waverio from "@/public/images/pngs/waverio.png";
import Plane from "@/public/images/svgs/plane.svg";
import RoundStacks from "@/public/images/svgs/round-stacks.svg";
import Swords from "@/public/images/svgs/swords.svg";
import { INavItem } from "@/types";

export const navItems: INavItem[] = [
    { type: "link", name: "Home", href: "/" },
    {
        type: "dropdown",
        name: "Services",
        dropdownItems: [
            { name: "Marketing", href: "" },
            { name: "Sales", href: "" },
            { name: "CMO for Hire", href: "" },
            { name: "CSO for Hire", href: "" },
        ],
    },
    { type: "link", name: "Case Studies", href: "" },
    { type: "link", name: "About Us", href: "/about-us" },
    { type: "link", name: "Blog", href: "" },
];

export const brands = [Waverio, SquareStone, Martino, Virogan, Vertex];

export const ourBenefits = [
    {
        heading: "Strategy Meets Execution",
        description:
            "We go beyond advice — we build, optimize, and scale with you.",
        image: Swords,
    },
    {
        heading: "Fast, Measurable Results",
        description:
            "From lead generation to paid campaigns, we optimize every dollar spent",
        image: Plane,
    },
    {
        heading: "Aligned Incentives",
        description:
            "We win when you win. Flexible packages, performance bonuses, and clear ROI.",
        image: RoundStacks,
    },
];

export const faqs = [
    {
        question: "What makes Axel Promotions different from agencies?",
        answer: "We are different from agencies because we are a full-service marketing and sales agency that provides a comprehensive solution for your business needs. We work closely with you to understand your goals and create a customized plan that aligns with your business objectives. We also provide ongoing support and maintenance to ensure that your business is always running smoothly.",
    },
    {
        question: "How does pricing work?",
        answer: "We are different from agencies because we are a full-service marketing and sales agency that provides a comprehensive solution for your business needs. We work closely with you to understand your goals and create a customized plan that aligns with your business objectives. We also provide ongoing support and maintenance to ensure that your business is always running smoothly.",
    },
    {
        question: "What industries do you specialize in?",
        answer: "We specialize in different kind of industries such as: Tech, Finance, Healthcare, B2B SaaS industries",
    },
    {
        question: "How quickly can we launch a campaign?",
        answer: "We are different from agencies because we are a full-service marketing and sales agency that provides a comprehensive solution for your business needs. We work closely with you to understand your goals and create a customized plan that aligns with your business objectives. We also provide ongoing support and maintenance to ensure that your business is always running smoothly.",
    },
    {
        question: "Is there a minimum contract offer?",
        answer: "We are different from agencies because we are a full-service marketing and sales agency that provides a comprehensive solution for your business needs. We work closely with you to understand your goals and create a customized plan that aligns with your business objectives. We also provide ongoing support and maintenance to ensure that your business is always running smoothly.",
    },
];

export const footerLinks = [
    {
        category: "Home",
        links: [
            { name: "Case Studies", href: "" },
            { name: "About Us", href: "/about-us" },
            { name: "Blog", href: "" },
            { name: "Contact", href: "" },
        ],
    },
    {
        category: "Services",
        links: [
            { name: "Marketing", href: "" },
            { name: "Sales", href: "" },
            { name: "CMO for Hire", href: "" },
            { name: "CSO for Hire", href: "" },
        ],
    },
];
