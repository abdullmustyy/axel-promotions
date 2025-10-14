import { placeholderBlogs } from "@/lib/data/blog";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Variants } from "motion/react";
import * as motion from "motion/react-client";

const PlaceholderBlogs = () => {
    return (
        <div className="flex flex-col md:gap-5 gap-10">
            {placeholderBlogs.map(
                ({ date, description, heading, image, tag }, index) => (
                    <motion.div
                        key={index}
                        variants={inViewVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.1 }}
                        className="md:p-7.5 p-5 flex flex-col gap-5 bg-snow-haze rounded-xxl"
                    >
                        <div className="md:h-100 h-62.5 w-full rounded-2xl overflow-hidden">
                            <Image
                                src={image}
                                alt=""
                                className="size-full object-cover"
                            />
                        </div>

                        <div className="flex items-center gap-5">
                            <div className="md:space-y-5 space-y-3">
                                <div className="flex gap-2">
                                    <span className="px-2 py-1 bg-primary text-base text-white rounded-[6px] w-fit">
                                        {tag}
                                    </span>
                                    <span className="px-2 py-1 bg-primary text-base text-white rounded-[6px] w-fit">
                                        {date}
                                    </span>
                                </div>
                                <h2 className="md:text-4xl text-xl font-medium">
                                    {heading}
                                </h2>
                                <p className="md:text-xl text-base text-accent">
                                    {description}
                                </p>
                            </div>

                            <Link
                                href=""
                                className="shrink-0 md:size-17.5 size-12.5 grid place-content-center bg-primary hover:bg-primary/90 text-white rounded-full transition duration-300"
                            >
                                <ArrowUpRight className="md:size-6 size-4.5" />
                            </Link>
                        </div>
                    </motion.div>
                ),
            )}
        </div>
    );
};

const inViewVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 1,
            ease: "easeOut",
        },
    },
};

export default PlaceholderBlogs;