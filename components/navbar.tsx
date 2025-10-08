"use client";

import { navItems } from "@/lib/data/home";
import { cn } from "@/lib/utils";
import Logo from "@/public/images/pngs/logo.png";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { buttonVariants } from "./ui/button";

const Navbar = () => {
    const pathname = usePathname();

    return (
        <nav className="container h-20 flex items-center justify-between">
            <Link href="/">
                <Image src={Logo} alt="" className="size-full object-cover" />
            </Link>

            <ul className="md:flex hidden items-center gap-15">
                {navItems.map((item, index) => (
                    <li key={item.name + index} className="group relative">
                        {item.type === "link" ? (
                            <Link
                                href={item.href}
                                className={cn(
                                    "hover:text-primary  transition-all duration-300",
                                    {
                                        "text-primary": pathname === item.href,
                                    },
                                )}
                            >
                                {item.name}
                            </Link>
                        ) : (
                            <>
                                <div className="flex items-center gap-0.5">
                                    <span>{item.name}</span>
                                    <ChevronDown className="size-4 group-hover:-rotate-180 transition-transform duration-300" />
                                </div>
                                <ul className="invisible group-hover:visible absolute bottom-0 translate-y-full flex flex-col gap-4 p-5 rounded-[10px] bg-[#DB3D0A] text-white z-10 transition-all duration-300">
                                    {item.dropdownItems.map(
                                        ({ href, name }, index) => (
                                            <li
                                                key={name + index}
                                                className="flex"
                                            >
                                                <Link
                                                    href={href}
                                                    className="whitespace-nowrap w-full"
                                                >
                                                    {name}
                                                </Link>
                                            </li>
                                        ),
                                    )}
                                </ul>
                            </>
                        )}
                    </li>
                ))}
            </ul>

            <Link
                href=""
                className={cn(buttonVariants(), "md:inline-flex hidden rounded-full py-2.5")}
            >
                Contact
            </Link>
        </nav>
    );
};

export default Navbar;
