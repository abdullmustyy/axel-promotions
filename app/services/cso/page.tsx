import JoinBrands from "@/components/join-brands";
import SectionHeader from "@/components/section-header";
import Testimonials from "@/components/testimonials";
import { buttonVariants } from "@/components/ui/button";
import {
    caseStudies,
    commonProblems,
    ourBenefits,
    solutionsAndDeliverables,
} from "@/lib/data/services/cso";
import { cn } from "@/lib/utils";
import VideoPlaceholderMobile from "@/public/images/pngs/video-placeholder-mobile.png";
import VideoPlaceholder from "@/public/images/pngs/video-placeholder.png";
import ArrowVector from "@/public/images/svgs/arrow-vector.svg";
import Image from "next/image";
import Link from "next/link";

const CSO = () => {
    return (
        <>
            {/* ---------------------  Hero  --------------------- */}
            <section className="py-25 md:bg-[url('@/public/images/pngs/wavy-vector-hero.png')] bg-[url('@/public/images/pngs/wavy-vector-hero-mobile.png')] bg-no-repeat bg-size-[100%_100%] bg-center">
                <div className="container flex flex-col gap-12.5">
                    <SectionHeader
                        tag="Our Services"
                        heading={
                            <span>
                                Fractional CSO Services That Build
                                <br className="md-br" />
                                <span className="font-luxurious-script font-normal md:text-8xl text-[3.125rem] text-[#F58B3B]">
                                    Pipeline, Teams,
                                </span>{" "}
                                and{" "}
                                <span className="font-luxurious-script font-normal md:text-8xl text-[3.125rem] text-[#F58B3B]">
                                    Revenue Systems
                                </span>
                            </span>
                        }
                        className="[&_[data-slot='heading']]:md:text-6xl gap-5 relative"
                    >
                        <p className="font-poppins md:text-3xl text-accent text-center">
                            Get senior-level sales leadership to scale your
                            go-to-
                            <br className="md-br" />
                            market operation without full-time commitment.
                        </p>

                        <div className="md:flex flex-col items-center gap-2 hidden absolute bottom-0 right-0">
                            <span className="text-xl text-primary">
                                Words from us
                            </span>
                            <Image src={ArrowVector} alt="" className="" />
                        </div>
                    </SectionHeader>

                    <Image
                        src={VideoPlaceholder}
                        alt=""
                        className="md:block hidden size-full"
                    />
                    <Image
                        src={VideoPlaceholderMobile}
                        alt=""
                        className="block md:hidden"
                    />

                    <Link
                        href=""
                        className={cn(
                            buttonVariants({ size: "lg" }),
                            "mx-auto md:w-fit w-full md:text-xl text-lg",
                        )}
                    >
                        Book a CSO Discovery Call
                    </Link>
                </div>
            </section>

            {/* ---------------------  Join the brands  --------------------- */}
            <JoinBrands />

            {/* ---------------------  Common Problems  --------------------- */}
            <section className="container flex flex-col md:gap-25 gap-12.5 pt-30 pb-20">
                <SectionHeader
                    tag="Common Problems"
                    heading={
                        <span>
                            Scaling sales without a strategy{" "}
                            <br className="md-br" />
                            <span className="relative md:inline-flex justify-center md:before:inline-block before:hidden before:content-[url(@/public/images/pngs/wavy-vector-about.png)] before:absolute before:-bottom-12">
                                Is just guesswork
                            </span>
                        </span>
                    }
                />

                <div className="grid lg:grid-cols-4 md:grid-cols-2 md:gap-7.5 gap-5">
                    {commonProblems.map(({ Icon, problem }, index) => (
                        <div
                            key={index}
                            className="group flex flex-col gap-15 md:py-12.5 md:px-7.5 p-10 rounded-xxl bg-snow-haze hover:bg-primary transition duration-300"
                        >
                            <div className="grid size-15 bg-primary group-hover:bg-snow-haze rounded-full place-content-center">
                                <Icon className="size-6 text-white group-hover:text-primary" />
                            </div>
                            <p className="text-2xl font-medium group-hover:text-white">
                                {problem}
                            </p>
                        </div>
                    ))}
                </div>

                <Link
                    href=""
                    className={cn(
                        buttonVariants({ size: "lg" }),
                        "mx-auto md:w-fit w-full md:text-xl text-lg",
                    )}
                >
                    Talk to a sales strategist
                </Link>
            </section>

            {/* ---------------------  Solutions & Delieverables  --------------------- */}
            <section className="container flex flex-col gap-12.5 py-20">
                <SectionHeader
                    tag="Solutions & Delieverables"
                    heading={
                        <span>
                            Sales strategy meets <br className="md-br" />
                            hands-on execution
                        </span>
                    }
                />

                <div className="flex md:flex-row flex-col md:flex-wrap gap-(--sols-gap) justify-center [--sols-gap:calc(var(--spacing)*6)]">
                    {solutionsAndDeliverables.map(
                        ({ description, heading, image }, index) => (
                            <div
                                key={heading + index}
                                className={cn(
                                    "md:w-[calc(1/3*100%-var(--sols-gap))] min-h-128.5 relative isolate overflow-hidden flex flex-col gap-10 bg-[#FCFCFC] border-8 border-snow-haze rounded-xxl",
                                    {
                                        "flex-col-reverse": index === 0,
                                    },
                                )}
                            >
                                <div className="flex-2 flex items-center justify-center">
                                    <Image src={image} alt="" />
                                </div>
                                <div
                                    className={cn("space-y-2 px-6 flex-1", {
                                        "pt-8": index === 0,
                                        "pb-8": index !== 0,
                                    })}
                                >
                                    <h5 className="md:text-2xl text-[1.375rem] font-medium text-[#5D5757]">
                                        {heading}
                                    </h5>
                                    <p className="text-base text-[#5C5C5C]">
                                        {description}
                                    </p>
                                </div>

                                <div
                                    className={cn(
                                        "absolute -z-10 bg-[linear-gradient(179.94deg,#FEF6F3_37.78%,#FFFFFF_99.95%)] blur-2xl w-99.5 h-195",
                                        {
                                            "top-[138.38px] -right-5 rotate-[74.69deg]":
                                                index === 0,
                                            "top-[-265.87px] left-[-119.68px] rotate-[55.28deg]":
                                                index === 1,
                                            "top-[-249px] left-[-32px] rotate-[89.26deg]":
                                                [2, 3].includes(index),
                                            "h-297.5 w-151.5 top-[-438px] left-[-331px] rotate-[63.deg]":
                                                index === 4,
                                        },
                                    )}
                                />
                            </div>
                        ),
                    )}
                </div>
            </section>

            {/* ---------------------  Our Benefits  --------------------- */}
            <section className="py-20 bg-[url('@/public/images/pngs/vector-48.png')] bg-no-repeat md:bg-size-[100%_100%] md:bg-center">
                <div className="container flex flex-col gap-25">
                    <SectionHeader
                        tag="Our Benefits"
                        heading={
                            <span>
                                Why Founders and Sales <br className="md-br" />
                                Leaders Trust Axel
                            </span>
                        }
                        className="gap-12.5"
                    />

                    <div className="grid lg:grid-cols-3 md:grid-cols-2 md:gap-7.5 gap-5">
                        {ourBenefits.map(
                            ({ description, heading, Icon }, index) => (
                                <div
                                    key={heading + index}
                                    className="group flex flex-col gap-2.5 md:p-12.5 p-10 rounded-xxl bg-snow-haze hover:bg-primary transition duration-300"
                                >
                                    <div className="flex justify-between">
                                        <span className="font-aeonik-trial font-bold text-[3.125rem] text-primary group-hover:text-white">
                                            0{index + 1}
                                        </span>
                                        <Icon className="size-37.5 translate-x-7.5 -translate-y-7.5 text-[#1F1F1F14] group-hover:text-[#FCE3D180]" />
                                    </div>
                                    <div className="space-y-5">
                                        <h6 className="font-medium text-2xl group-hover:text-white">
                                            {heading}
                                        </h6>
                                        <p className="text-xl text-accent group-hover:text-silver-mist">
                                            {description}
                                        </p>
                                    </div>
                                </div>
                            ),
                        )}
                    </div>

                    <Link
                        href=""
                        className={cn(
                            buttonVariants({ size: "lg" }),
                            "w-fit mx-auto",
                        )}
                    >
                        Get started today
                    </Link>
                </div>
            </section>

            {/* ---------------------  Our Portfolio  --------------------- */}
            <section className="container flex flex-col gap-12.5 py-20">
                <SectionHeader
                    tag="Our Portfolio"
                    heading={
                        <span>
                            Where Our CMOs Have <br className="md-br" />
                            Delivered Impact
                        </span>
                    }
                    className="gap-12.5"
                />

                <div className="grid lg:grid-cols-3 md:grid-cols-2 md:gap-7.5 gap-5">
                    {caseStudies.map(({ description, tag, image }, index) => (
                        <div
                            key={tag + index}
                            className="grid grid-rows-subgrid row-span-2 gap-5 p-7.5 rounded-xxl bg-snow-haze"
                        >
                            <Image
                                src={image}
                                alt=""
                                className="size-full object-full"
                            />
                            <div className="flex flex-col gap-3">
                                <span className="px-2 py-1 bg-primary text-base text-white rounded-[6px] w-fit">
                                    {tag}
                                </span>
                                <p className="text-xl text-accent">
                                    {description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                <Link
                    href=""
                    className={cn(
                        buttonVariants({ size: "lg" }),
                        "w-fit mx-auto",
                    )}
                >
                    Explore Sales Case Studies
                </Link>
            </section>

            {/* ---------------------  Testimonials  --------------------- */}
            <Testimonials
                heading={
                    <span>
                        Real results, Real partners. <br className="md-br" />
                        <span className="relative md:inline-flex justify-center md:before:inline-block before:hidden before:content-[url(@/public/images/pngs/wavy-vector-18.png)] before:absolute before:-bottom-12">
                            Trusted by our clients
                        </span>
                    </span>
                }
            />
        </>
    );
};

export default CSO;
