"use client";

import { navItems } from "@/lib/data";
import { cn } from "@/lib/utils";
import Metrics from "@/public/images/svgs/metrics.svg";
import Stacks from "@/public/images/svgs/stacks.svg";
import Image from "next/image";
import { useMemo } from "react";
import Star from "./icons/star";
import { Variants } from "motion/react";
import * as motion from "motion/react-client";

interface IPageHeaderProps extends React.ComponentProps<"section"> {
    page: React.ReactNode;
}

const PageHeader = ({ className, page }: IPageHeaderProps) => {
    const serviceItem = navItems.find(
        ({ name, type }) => type === "dropdown" && name === "Services",
    );
    const serviceLinks = useMemo(() => {
        if (serviceItem?.type === "dropdown") return serviceItem.dropdownItems;
    }, [serviceItem]);

    return (
        <motion.section
            variants={headerVariants}
            initial="hidden"
            animate="visible"
        >
            <div
                className={cn(
                    "md:px-8 px-4 pt-16 md:pb-16 pb-4 flex items-center md:justify-between justify-center gap-8",
                    className,
                )}
            >
                <Image src={Metrics} alt="" className="md:block hidden" />
                <h2 className="font-luxurious-script md:text-[7.25rem] leading-17.5 text-[3.125rem] text-primary text-center shrink-0">
                    {page}
                </h2>
                <Image src={Stacks} alt="" className="md:block hidden" />
            </div>

            <div className="bg-primary whitespace-nowrap">
                <div className="flex items-center gap-(--marquee-gap) text-white overflow-hidden hover:[&_:is(ul,svg)]:[animation-play-state:paused] [--speed:10s] [--marquee-gap:10vw]">
                    {Array.from({ length: 2 }, (_, index) => (
                        <ul
                            key={index}
                            className="min-w-full flex items-center gap-(--marquee-gap) shrink-0 py-5 animate-marquee"
                        >
                            {serviceLinks?.map(({ name }, index) => (
                                <li
                                    key={name + index}
                                    className="flex items-center gap-(--marquee-gap)"
                                >
                                    <Star className="animate-spin" />
                                    <h4 className="md:text-2xl text-xl">
                                        {name}
                                    </h4>
                                </li>
                            ))}
                        </ul>
                    ))}
                </div>
            </div>
        </motion.section>
    );
};

const headerVariants: Variants = {
    hidden: { opacity: 0, y: -40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: "easeOut",
        },
    },
};

export default PageHeader;