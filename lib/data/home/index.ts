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
