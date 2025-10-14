import PageHeader from "@/components/page-header";
import SectionHeader from "@/components/section-header";
import Testimonials from "@/components/testimonials";
import { buttonVariants } from "@/components/ui/button";
import { caseStudies } from "@/lib/data/case-studies";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Variants } from "motion/react";
import * as motion from "motion/react-client";

const CaseStudies = () => {
    return (
        <main>
            {/* ---------------------  Header  --------------------- */}
            <PageHeader
                page={
                    <span>
                        Case
                        <br className="md-br" /> Studies
                    </span>
                }
            />

            {/* ---------------------  Our Case study  --------------------- */}
            <motion.section
                variants={inViewVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                className="w-contain py-20 flex flex-col md:gap-15 gap-12.5"
            >
                <SectionHeader
                    tag="Our Case study"
                    heading={
                        <span>
                            See How We Deliver
                            <br className="md-br" /> Measurable Growth
                        </span>
                    }
                    className="[&_[data-slot='heading']]:md:text-6xl"
                />

                <div className="grid md:grid-cols-2 md:gap-7.5 gap-5">
                    {caseStudies.map(
                        ({ author, tag, image, heading }, index) => (
                            <div
                                key={tag + index}
                                className="grid md:grid-rows-subgrid md:row-span-2 gap-5 md:p-7.5 p-5 rounded-xxl bg-snow-haze"
                            >
                                <Image
                                    src={image}
                                    alt=""
                                    className="size-full object-full"
                                />

                                <div className="flex items-center justify-between gap-5">
                                    <div className="flex flex-col gap-3">
                                        <span className="px-2 py-1 bg-primary text-base text-white rounded-[6px] w-fit">
                                            {tag}
                                        </span>
                                        <h4 className="md:text-4xl text-xl font-medium">
                                            {heading}
                                        </h4>
                                        <p className="md:text-xl text-base text-accent">
                                            {author}
                                        </p>
                                    </div>

                                    <Link
                                        href="/case-studies/1"
                                        className="shrink-0 md:size-17.5 size-12.5 grid place-content-center bg-primary hover:bg-primary/90 text-white rounded-full transition duration-300"
                                    >
                                        <ArrowUpRight className="md:size-6 size-4.5" />
                                    </Link>
                                </div>
                            </div>
                        ),
                    )}
                </div>

                <Link
                    href="/contact"
                    className={cn(
                        buttonVariants({ size: "lg" }),
                        "w-fit mx-auto",
                    )}
                >
                    Let&apos;s Build Your Case Study Next
                </Link>
            </motion.section>

            {/* ---------------------  Testimonials  --------------------- */}
            <motion.div
                variants={inViewVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
            >
                <Testimonials
                    heading={
                        <span>
                            Real results, Real partners. <br className="md-br" />
                            <span className="relative md:inline-flex justify-center md:before:inline-block before:hidden before:content-[url(@/public/images/pngs/wavy-vector-18.png)] before:absolute before:-bottom-12">
                                Trusted by our clients
                            </span>
                        </span>
                    }
                    className="md:bg-[url('@/public/images/pngs/wavy-vector-testimonial.png')] bg-[url('@/public/images/pngs/wavy-vector-testimonial-mobile.png')] bg-no-repeat md:bg-auto bg-size-[100%_80%] md:bg-bottom bg-center"
                />
            </motion.div>
        </main>
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

export default CaseStudies;