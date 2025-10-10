import JoinBrands from "@/components/join-brands";
import SectionHeader from "@/components/section-header";
import Testimonials from "@/components/testimonials";
import { buttonVariants } from "@/components/ui/button";
import {
    caseStudies,
    commonProblems,
    ourBenefits,
    solutionsAndDeliverables,
} from "@/lib/data/services/sales";
import { cn } from "@/lib/utils";
import VideoPlaceholderMobile from "@/public/images/pngs/video-placeholder-mobile.png";
import VideoPlaceholder from "@/public/images/pngs/video-placeholder.png";
import ArrowVector from "@/public/images/svgs/arrow-vector.svg";
import Image from "next/image";
import Link from "next/link";

const CMO = () => {
    return (
        <>
            {/* ---------------------  Hero  --------------------- */}
            <section className="py-25 md:bg-[url('@/public/images/pngs/wavy-vector-hero.png')] bg-[url('@/public/images/pngs/wavy-vector-hero-mobile.png')] bg-no-repeat bg-size-[100%_100%] bg-center">
                <div className="container flex flex-col gap-12.5">
                    <SectionHeader
                        tag="Our Services"
                        heading={
                            <span>
                                Fractional CMO Services That Turn
                                <br className="md-br" /> Chaos into
                                <span className="font-luxurious-script font-normal md:text-8xl text-[3.125rem] text-[#F58B3B]">
                                    Clarity
                                </span>{" "}
                                and{" "}
                                <span className="font-luxurious-script font-normal md:text-8xl text-[3.125rem] text-[#F58B3B]">
                                    Growth
                                </span>
                            </span>
                        }
                        className="[&_[data-slot='heading']]:md:text-6xl gap-5 relative"
                    >
                        <p className="font-poppins md:text-3xl text-accent text-center">
                            You get C-suite marketing leadership, strategy, and
                            <br className="md-br" /> execution—without the
                            full-time overhead.
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
                        className="md:block hidden"
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
                        Book a CMO Discovery Call
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
                            Your marketing can&apos;t scale{" "}
                            <br className="md-br" />
                            <span className="relative md:inline-flex justify-center md:before:inline-block before:hidden before:content-[url(@/public/images/pngs/wavy-vector-about.png)] before:absolute before:-bottom-12">
                                without a real strategy
                            </span>
                        </span>
                    }
                />

                <div className="grid lg:grid-cols-4 md:grid-cols-2 md:gap-7.5 gap-5">
                    {commonProblems.map(({ image, problem }, index) => (
                        <div
                            key={index}
                            className="flex flex-col gap-15 md:py-12.5 md:px-7.5 p-10 rounded-xxl bg-snow-haze nth-[2]:bg-primary"
                        >
                            <Image src={image} alt="" className="size-12.5" />
                            <p
                                className={cn("text-2xl font-medium", {
                                    "text-white": index === 1,
                                })}
                            >
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
                    Talk to a fractional CMO
                </Link>
            </section>

            {/* ---------------------  Solutions & Delieverables  --------------------- */}
            <section className="container flex flex-col gap-12.5 py-20">
                <SectionHeader
                    tag="Solutions & Delieverables"
                    heading={
                        <span>
                            Executive-level marketing strategy{" "}
                            <br className="md-br" />
                            without the full-time price tag
                        </span>
                    }
                />

                <div className="flex flex-col gap-6">
                    <div className="grid lg:grid-cols-3 gap-6">
                        {solutionsAndDeliverables
                            .slice(0, 3)
                            .map(({ description, heading, image }, index) => (
                                <div
                                    key={heading + index}
                                    className="relative isolate overflow-hidden grid grid-rows-subgrid row-span-2 items-center gap-0 bg-[#FCFCFC] border-8 border-snow-haze rounded-xxl"
                                >
                                    <div className="px-6 py-8">
                                        <Image
                                            src={image}
                                            alt=""
                                            className="size-full object-cover"
                                        />
                                    </div>
                                    <div className="space-y-2 px-6 pb-8">
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
                                                "top-[-249px] left-[-32px] rotate-[89.26deg]":
                                                    index === 0,
                                                "top-[-265.87px] left-[-119.68px] rotate-[55.28deg]":
                                                    index === 1,
                                                "-top-5.5 -right-3/10 rotate-[28.68deg]":
                                                    index === 2,
                                            },
                                        )}
                                    />
                                </div>
                            ))}
                    </div>

                    <div className="grid lg:grid-cols-2 gap-6 md:max-w-[66.6%] md:mx-auto">
                        {solutionsAndDeliverables
                            .slice(3, 5)
                            .map(({ description, heading, image }, index) => (
                                <div
                                    key={heading + index}
                                    className="relative isolate overflow-hidden grid grid-rows-subgrid row-span-2 items-center gap-0 bg-[#FCFCFC] border-8 border-snow-haze rounded-xxl"
                                >
                                    <div
                                        className={cn("px-6 py-8", {
                                            "row-start-2": index === 1,
                                        })}
                                    >
                                        <Image
                                            src={image}
                                            alt=""
                                            className="size-full object-cover"
                                        />
                                    </div>
                                    <div
                                        className={cn("space-y-2 px-6 pb-8", {
                                            "md:pt-0 pt-8": index === 1,
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
                                                "top-[-237.51px] left-[-258.58px] rotate-[104.38deg]":
                                                    index === 0,
                                                "top-[-173px] left-[-343px] rotate-[-76.46deg]":
                                                    [1, 2].includes(index),
                                            },
                                        )}
                                    />
                                </div>
                            ))}
                    </div>
                </div>
            </section>

            {/* ---------------------  Our Benefits  --------------------- */}
            <section className="py-20 bg-[url('@/public/images/pngs/vector-48.png')] bg-no-repeat md:bg-size-[100%_100%] md:bg-center">
                <div className="container flex flex-col gap-25">
                    <SectionHeader
                        tag="Our Benefits"
                        heading={
                            <span>
                                Why Ambitious Teams Work{" "}
                                <br className="md-br" />
                                With Axel Promotions
                            </span>
                        }
                        className="gap-12.5"
                    />

                    <div className="grid lg:grid-cols-3 md:grid-cols-2 md:gap-7.5 gap-5">
                        {ourBenefits.map(
                            ({ description, heading, image }, index) => (
                                <div
                                    key={heading + index}
                                    className="flex flex-col gap-2.5 md:p-12.5 p-10 rounded-xxl bg-snow-haze nth-[2]:bg-primary"
                                >
                                    <div className="flex justify-between">
                                        <span
                                            className={cn(
                                                "font-aeonik-trial font-bold text-[3.125rem] text-primary",
                                                {
                                                    "text-white": index === 1,
                                                },
                                            )}
                                        >
                                            0{index + 1}
                                        </span>
                                        <Image
                                            src={image}
                                            alt=""
                                            className="size-37.5 translate-x-7.5 -translate-y-7.5"
                                        />
                                    </div>
                                    <div className="space-y-5">
                                        <h6
                                            className={cn(
                                                "font-medium text-2xl",
                                                {
                                                    "text-white": index === 1,
                                                },
                                            )}
                                        >
                                            {heading}
                                        </h6>
                                        <p
                                            className={cn(
                                                "text-xl text-accent",
                                                {
                                                    "text-silver-mist":
                                                        index === 1,
                                                },
                                            )}
                                        >
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
                            <Image src={image} alt="" />
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

export default CMO;
