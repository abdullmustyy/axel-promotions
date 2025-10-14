"use client";

import { footerLinks } from "@/lib/data";
import { cn } from "@/lib/utils";
import FooterLogo from "@/public/images/svgs/footer-logo.svg";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Discord from "./icons/discord";
import Facebook from "./icons/facebook";
import Instagram from "./icons/instagram";
import LinkedIn from "./icons/linkedin";
import { buttonVariants } from "./ui/button";

const Footer = () => {
    const pathname = usePathname();

    return (
        <footer className="w-contain min-h-dvh py-20 space-y-25">
            <div className="flex md:flex-row flex-col md:justify-between gap-25">
                <div className="space-y-12.5">
                    <h3 className="font-aeonik-trial md:text-[3.125rem]/[60px] text-3xl md:text-left text-center">
                        Ready to drive growth
                        <br /> without guesswork?
                    </h3>
                    <Link
                        href="/contact"
                        className={cn(
                            buttonVariants({ size: "lg" }),
                            "md:w-fit w-full",
                        )}
                    >
                        Book a free strategy call
                    </Link>
                </div>

                <div className="flex justify-between md:gap-25 gap-7.5">
                    {footerLinks.map(({ category, links }, index) => (
                        <div
                            key={category + index}
                            className="flex flex-col gap-7.5"
                        >
                            <h6 className="text-base font-medium">
                                {category}
                            </h6>
                            {links.map(({ href, name }, index) => (
                                <Link
                                    key={name + index}
                                    href={href}
                                    className={cn(
                                        "text-base hover:text-primary transition-colors duration-300",
                                        {
                                            "text-primary": pathname === href,
                                        },
                                    )}
                                >
                                    {name}
                                </Link>
                            ))}
                        </div>
                    ))}

                    <div className="flex flex-col gap-7.5">
                        <h6 className="text-base font-medium">Socials</h6>
                        <div className="flex md:flex-row flex-col md:items-center gap-7">
                            <Link href="">
                                <LinkedIn className="size-4.5 text-black/40 hover:text-primary transition-colors duration-300" />
                            </Link>
                            <Link href="">
                                <Discord className="size-4.5 text-black/40 hover:text-primary transition-colors duration-300" />
                            </Link>
                            <Link href="">
                                <Facebook className="size-4.5 text-black/40 hover:text-primary transition-colors duration-300" />
                            </Link>
                            <Link href="">
                                <Instagram className="size-4.5 text-black/40 hover:text-primary transition-colors duration-300" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <Image src={FooterLogo} alt="" className="size-full object-cover" />
        </footer>
    );
};

export default Footer;
