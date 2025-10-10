import Martino from "@/public/images/pngs/martino.png";
import SquareStone from "@/public/images/pngs/square-stone.png";
import Vertex from "@/public/images/pngs/vertex.png";
import Virogan from "@/public/images/pngs/virogan.png";
import Waverio from "@/public/images/pngs/waverio.png";
import { INavItem } from "@/types";

const serviceLinks = [
    { name: "Marketing", href: "/services/marketing" },
    { name: "Sales", href: "/services/sales" },
    { name: "CMO for Hire", href: "/services/cmo" },
    { name: "CSO for Hire", href: "/services/cso" },
];

export const navItems: INavItem[] = [
    { type: "link", name: "Home", href: "/" },
    {
        type: "dropdown",
        name: "Services",
        dropdownItems: serviceLinks,
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
            { name: "Case Studies", href: "/case-studies" },
            { name: "About Us", href: "/about-us" },
            { name: "Blog", href: "/blog" },
            { name: "Contact", href: "/contact" },
        ],
    },
    {
        category: "Services",
        links: serviceLinks,
    },
];


