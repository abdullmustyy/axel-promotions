import FAQs from "@/components/faqs";
import HeroServiceCard from "@/components/hero-service-card";
import Phone from "@/components/icons/phone";
import JoinBrands from "@/components/join-brands";
import SectionHeader from "@/components/section-header";
import Testimonials from "@/components/testimonials";
import { buttonVariants } from "@/components/ui/button";
import { ourBenefits } from "@/lib/data/home";
import { cn } from "@/lib/utils";
import HeroImg from "@/public/images/pngs/home-hero-img.png";
import TakeOffImg from "@/public/images/svgs/takeoff.svg";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
    return (
        <main>
            {/* ---------------------  Hero  --------------------- */}
            <header className="container pt-5 pb-40 flex md:flex-row flex-col md:items-end md:gap-0 gap-12.5">
                <div className="md:w-1/2 flex flex-col md:gap-18.5 gap-12.5 md:text-left text-center">
                    <div className="md:space-y-7.5 space-y-2.5">
                        <h2 className="font-poppins font-medium md:text-[4rem] text-3xl md:leading-[70px] leading-[50px]">
                            <span className="relative font-luxurious-script font-normal md:text-8xl text-[3.125rem] text-[#F58B3B] md:before:inline before:hidden before:content-[url(@/public/images/pngs/wavy-vector.png)] before:absolute before:-bottom-6">
                                Accelerate Growth{" "}
                                <Image
                                    src={TakeOffImg}
                                    alt=""
                                    className="size-8 md:hidden inline"
                                />
                            </span>{" "}
                            with Proven Marketing & Sales Execution
                        </h2>
                        <p className="text-xl">
                            We partner with ambitious businesses to craft
                            offers, launch campaigns, and close deals profitably
                            and predictably.
                        </p>
                    </div>

                    <Link
                        href="/contact"
                        className={cn(
                            buttonVariants({ size: "lg" }),
                            "md:w-fit",
                        )}
                    >
                        Let&apos;s build your growth engine
                    </Link>
                </div>

                <div className="md:w-1/2 md:h-auto h-94.5 md:pl-25 pl-10 relative">
                    <div className="size-full rounded-xxl md:bg-linear-0 md:from-transparent md:to-transparent bg-[url(@/public/images/pngs/home-hero-img.png),linear-gradient(180deg,rgba(219,61,10,0.8)_-48.58%,rgba(219,61,10,0)_81.42%)] bg-no-repeat bg-size-[100%_auto] bg-top">
                        <Image
                            src={HeroImg}
                            alt=""
                            className="md:block hidden size-full object-cover"
                        />
                        <HeroServiceCard
                            heading="Increased Sales Pipeline"
                            description="2-3x More Leads Generated"
                            className="absolute left-0 md:top-1/2 top-3/5"
                        />
                        <HeroServiceCard
                            heading="Faster Marketing Campaigns"
                            description="50-200% Increase in Content Created"
                            className="absolute bottom-0 right-0"
                        />
                    </div>
                </div>
            </header>

            {/* ---------------------  Join the brands  --------------------- */}
            <JoinBrands />

            {/* ---------------------  Our Benefits  --------------------- */}
            <section className="container pt-40 pb-20 space-y-25">
                <SectionHeader
                    tag="Our Benefits"
                    heading={
                        <span>
                            Why growth-focused companies
                            <br className="md-br" /> choose Axel Promotions
                        </span>
                    }
                    className="gap-12.5"
                >
                    <Link
                        href="/contact"
                        className={cn(
                            buttonVariants({ size: "lg" }),
                            "w-fit mx-auto",
                        )}
                    >
                        Let&apos;s plan your next growth move
                    </Link>
                </SectionHeader>

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
            </section>

            {/* ---------------------  Testimonials  --------------------- */}
            <Testimonials
                heading={
                    <span>
                        Real results, Real partners. <br className="md-br" />
                        Trusted by our clients
                    </span>
                }
                className="md:bg-[url('@/public/images/pngs/wavy-vector-testimonial.png')] bg-[url('@/public/images/pngs/wavy-vector-testimonial-mobile.png')] bg-no-repeat md:bg-auto bg-size-[100%_80%] md:bg-bottom bg-center"
            />

            {/* ---------------------  FAQs  --------------------- */}
            <section className="container py-20 flex md:flex-row flex-col gap-10">
                <div className="md:w-[35%] space-y-7.5">
                    <SectionHeader
                        tag="FAQs"
                        heading="Your Questions, Answered"
                        className="md:[&_[data-slot='tag']]:justify-start md:[&_[data-slot='heading']]:text-start"
                    />

                    <div className="space-y-5">
                        <div className="md:bg-primary md:px-12.5 md:py-7.5 rounded-xxl md:space-y-7.5 text-center">
                            <div className="space-y-2 md:block hidden">
                                <h5 className="font-medium text-2xl text-white">
                                    Want to know more?
                                </h5>
                                <p className="text-xl text-silver-mist">
                                    Reach out to us and our team would respond
                                    asap
                                </p>
                            </div>
                            <Link
                                href="/contact"
                                className={cn(
                                    buttonVariants({ variant: "accent" }),
                                    "md:h-11 h-15 md:w-auto w-full px-7.5 py-2.5 text-xl mx-auto",
                                )}
                            >
                                Contact us
                            </Link>
                        </div>

                        <div className="bg-snow-haze px-12.5 py-5 rounded-xxl flex items-center md:gap-7.5 gap-4">
                            <div className="size-12.5 grid place-content-center bg-primary rounded-full">
                                <Phone className="text-white size-5" />
                            </div>
                            <div className="space-y-1.5">
                                <h5 className="text-xl font-semibold">
                                    +234 9087654321
                                </h5>
                                <span className="text-sm text-concrete-gray">
                                    24/7 service
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                <FAQs className="md:w-[65%]" />
            </section>
        </main>
    );
}
