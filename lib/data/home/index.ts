import Martino from "@/public/images/pngs/martino.png";
import SquareStone from "@/public/images/pngs/square-stone.png";
import Vertex from "@/public/images/pngs/vertex.png";
import Virogan from "@/public/images/pngs/virogan.png";
import Waverio from "@/public/images/pngs/waverio.png";
import Plane from "@/public/images/svgs/plane.svg";
import RoundStacks from "@/public/images/svgs/round-stacks.svg";
import Swords from "@/public/images/svgs/swords.svg";

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
    { type: "link", name: "About Us", href: "" },
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
