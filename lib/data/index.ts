import CaseStudy from "@/public/images/pngs/case-study.png";
import Martino from "@/public/images/pngs/martino.png";
import SquareStone from "@/public/images/pngs/square-stone.png";
import Vertex from "@/public/images/pngs/vertex.png";
import Virogan from "@/public/images/pngs/virogan.png";
import Waverio from "@/public/images/pngs/waverio.png";
import { INavItem } from "@/types";

export const navItems: INavItem[] = [
    { type: "link", name: "Home", href: "/" },
    {
        type: "dropdown",
        name: "Services",
        dropdownItems: [
            { name: "Marketing", href: "/services/marketing" },
            { name: "Sales", href: "/services/sales" },
            { name: "CMO for Hire", href: "/services/cmo" },
            { name: "CSO for Hire", href: "/services/cso" },
        ],
    },
    { type: "link", name: "Case Studies", href: "/case-studies" },
    { type: "link", name: "About Us", href: "/about-us" },
    { type: "link", name: "Blog", href: "/blog" },
];

export const brands = [Waverio, SquareStone, Martino, Virogan, Vertex];

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

export const caseStudies = [
    {
        image: CaseStudy,
        tag: "B2B SaaS",
        description:
            "5x increase in MQLs through full-funnel LinkedIn ads + whitepaper strategy.",
    },
    {
        image: CaseStudy,
        tag: "eCommerce",
        description: "27% drop in CPA within 60 days of paid media takeover.",
    },
    {
        image: CaseStudy,
        tag: "Professional Services",
        description:
            "Ranked #1 on Google for 7 high-intent keywords within 90 days.",
    },
];
