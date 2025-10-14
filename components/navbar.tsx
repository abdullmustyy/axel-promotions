"use client";

import { navItems } from "@/lib/data";
import { cn } from "@/lib/utils";
import Logo from "@/public/images/pngs/logo.png";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useState } from "react";
import { Button, buttonVariants } from "./ui/button";

const Navbar = () => {
    const [{ isHamburgerOpen, isServiceDropdownOpen }, setIsOpen] = useState({
        isHamburgerOpen: false,
        isServiceDropdownOpen: false,
    });
    const pathname = usePathname();

    const closeAllMenu = useCallback(() => {
        setIsOpen({
            isHamburgerOpen: false,
            isServiceDropdownOpen: false,
        });
    }, []);

    return (
        <nav className="w-contain relative">
            {/* Horizontal nav */}
            <div className="h-20 flex items-center justify-between">
                <Link href="/">
                    <Image
                        src={Logo}
                        alt=""
                        className="size-full object-cover"
                    />
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
                                            "text-primary":
                                                pathname === item.href,
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
                                    <ul className="invisible group-hover:visible opacity-0 group-hover:opacity-100 absolute bottom-0 translate-y-9/10 group-hover:translate-y-full flex flex-col gap-4 p-5 rounded-[10px] bg-[#DB3D0A] text-white z-10 transition-all duration-300">
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

                <div className="flex items-center gap-2.5">
                    <Link
                        href="/contact"
                        className={cn(buttonVariants(), "rounded-full py-2.5")}
                        onClick={closeAllMenu}
                    >
                        Contact
                    </Link>

                    <Button
                        aria-label={
                            isHamburgerOpen ? "Close menu" : "Open menu"
                        }
                        aria-expanded={isHamburgerOpen ? "true" : "false"}
                        className="md:hidden inline-flex bg-linear-0 from-transparent to-transparent hover:bg-linear-0 size-10"
                        onClick={() =>
                            setIsOpen((prev) => ({
                                ...prev,
                                isHamburgerOpen: !prev.isHamburgerOpen,
                            }))
                        }
                    >
                        <div className="flex items-center *:transition-all *:duration-300 [--bar-width:calc(var(--spacing)*6)]">
                            {/* Top bar */}
                            <div
                                className={cn(
                                    "h-0.5 bg-primary w-(--bar-width) translate-x-full",
                                    { "-translate-y-2": !isHamburgerOpen },
                                )}
                            />
                            {/* Middle bar */}
                            <div
                                className={cn(
                                    "h-0.5 bg-primary w-(--bar-width)",
                                )}
                            />
                            {/* Bottom bar */}
                            <div
                                className={cn(
                                    "h-0.5 bg-primary w-(--bar-width) -translate-x-full",
                                    { "translate-y-2": !isHamburgerOpen },
                                )}
                            />
                        </div>
                    </Button>
                </div>
            </div>

            {/* Mobile Nav */}
            <div
                className={cn(
                    "md:hidden absolute inset-x-0 z-10 bg-background transition-all duration-300",
                    isHamburgerOpen
                        ? "[clip-path:inset(0_0_0_0)] max-h-dvh py-6"
                        : "[clip-path:inset(0_0_100%_0)] max-h-0 py-0",
                )}
            >
                <ul className="flex flex-col items-center gap-4">
                    {navItems.map((item, index) => (
                        <li key={item.name + index} className="group relative">
                            {item.type === "link" ? (
                                <Link
                                    href={item.href}
                                    className={cn(
                                        "hover:text-primary transition-all duration-300",
                                        {
                                            "text-primary":
                                                pathname === item.href,
                                        },
                                    )}
                                    onClick={closeAllMenu}
                                >
                                    {item.name}
                                </Link>
                            ) : (
                                <>
                                    <div
                                        className="flex items-center justify-center gap-0.5"
                                        onClick={() =>
                                            setIsOpen((prev) => ({
                                                ...prev,
                                                isServiceDropdownOpen:
                                                    !prev.isServiceDropdownOpen,
                                            }))
                                        }
                                    >
                                        <span>{item.name}</span>
                                        <ChevronDown
                                            className={cn(
                                                "size-4 transition-transform duration-300",
                                                {
                                                    "-rotate-180":
                                                        isServiceDropdownOpen,
                                                },
                                            )}
                                        />
                                    </div>
                                    <ul
                                        className={cn(
                                            "flex flex-col items-center gap-4 transition-all duration-300",
                                            isServiceDropdownOpen
                                                ? "[clip-path:inset(0_0_0_0)] max-h-50 py-3"
                                                : "[clip-path:inset(0_0_100%_0)] max-h-0 py-0",
                                        )}
                                    >
                                        {item.dropdownItems.map(
                                            ({ href, name }, index) => (
                                                <li
                                                    key={name + index}
                                                    className="flex"
                                                >
                                                    <Link
                                                        href={href}
                                                        className="whitespace-nowrap w-full"
                                                        onClick={closeAllMenu}
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
            </div>
        </nav>
    );
};

export default Navbar;
