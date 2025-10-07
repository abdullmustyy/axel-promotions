import Martino from "@/public/images/pngs/martino.png";
import SquareStone from "@/public/images/pngs/square-stone.png";
import Vertex from "@/public/images/pngs/vertex.png";
import Virogan from "@/public/images/pngs/virogan.png";
import Waverio from "@/public/images/pngs/waverio.png";

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
