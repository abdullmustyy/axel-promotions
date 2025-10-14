"use client";

import PageHeader from "@/components/page-header";
import SectionHeader from "@/components/section-header";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import APIllustration from "@/public/images/svgs/ap-illustration.svg";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import React from "react";
import PlaceholderBlogs from "./_components/placeholder-blogs";
import { Variants } from "motion/react";
import * as motion from "motion/react-client";

const TABS: Array<Record<"label" | "value", string>> = [
    { label: "All Blog Post", value: "all" },
    { label: "B2B Blog Post", value: "b2b" },
    { label: "SaaS Blog Post", value: "saas" },
    { label: "Sales Blog Post", value: "sales" },
    { label: "Marketing Blog Post", value: "marketing" },
    { label: "CSO/CMO Blog Post", value: "cso-cmo" },
];

const Blog = () => {
    const [currentTab, setCurrentTab] = React.useState("all");

    return (
        <main>
            {/* ---------------------  Header  --------------------- */}
            <PageHeader page="Blogs" />

            <motion.section
                variants={heroContainerVariants}
                initial="hidden"
                animate="visible"
                className="w-contain py-20 flex flex-col md:gap-15 gap-5"
            >
                <motion.div variants={heroItemVariants}>
                    <SectionHeader
                        tag="News & Blogs"
                        heading="Growth Insights from the Frontlines"
                        className="[&_[data-slot='heading']]:md:text-6xl"
                    />
                </motion.div>

                <motion.div variants={heroItemVariants}>
                    <Tabs
                        value={currentTab}
                        onValueChange={setCurrentTab}
                        className="w-full gap-12.5"
                    >
                        <TabsList className="w-full h-16.5 rounded-full p-2 overflow-auto hide-scrollbar">
                            {TABS.map(({ label, value }) => (
                                <TabsTrigger
                                    key={value}
                                    value={value}
                                    className="px-10"
                                >
                                    {label}
                                </TabsTrigger>
                            ))}
                        </TabsList>

                        <div className="flex items-start gap-7.5">
                            {TABS.map(({ value }) => (
                                <TabsContent
                                    key={value}
                                    value={value}
                                    className="flex-1"
                                >
                                    <PlaceholderBlogs />
                                </TabsContent>
                            ))}

                            <div className="md:flex flex-col hidden rounded-2xl bg-primary text-white p-8 pt-12 gap-6">
                                <Image
                                    src={APIllustration}
                                    alt=""
                                    className="mb-8"
                                />
                                <h5 className="md:text-3xl text-xl font-medium text-center">
                                    Get started
                                    <br className="md-br" /> with us
                                </h5>
                                <Button
                                    variant="accent"
                                    className="rounded-md! h-14 text-lg"
                                >
                                    Book a Call <ArrowUpRight className="size-5" />
                                </Button>
                            </div>
                        </div>
                    </Tabs>
                </motion.div>
            </motion.section>
        </main>
    );
};

const heroContainerVariants: Variants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.2,
        },
    },
};

const heroItemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: "easeOut",
        },
    },
};

export default Blog;