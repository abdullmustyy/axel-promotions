import PageHeader from "@/components/page-header";
import SectionHeader from "@/components/section-header";
import { buttonVariants } from "@/components/ui/button";
import { ourApproach, whyChooseUs } from "@/lib/data/about-us";
import { cn } from "@/lib/utils";
import AboutHeroImg from "@/public/images/pngs/about-hero-img.png";
import Workspace from "@/public/images/pngs/workspace.png";
import { Eye, Rocket } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type IWhyChooseUsCardProps = React.ComponentProps<"div"> &
    (typeof whyChooseUs)[number] & { index: number };

const WhyChooseUsCard = ({
    className,
    description,
    heading,
    Icon,
    index,
}: IWhyChooseUsCardProps) => {
    return (
        <div
            key={heading + index}
            className={cn(
                "group relative isolate flex flex-col gap-5 md:px-12.5 px-10 py-10 rounded-xxl bg-snow-haze hover:bg-primary transition duration-300",
                className,
            )}
        >
            <h6 className="font-medium text-xl group-hover:text-white">{heading}</h6>
            <p className="text-lg text-accent group-hover:text-silver-mist">{description}</p>
            <Icon
                className="size-37.5 absolute bottom-0 right-0 -z-10 text-[#1F1F1F14] group-hover:text-[#FCE3D180]"
            />
        </div>
    );
};

const AboutUs = () => {
    return (
        <main>
            {/* ---------------------  Header  --------------------- */}
            <PageHeader page="About Us" />

            {/* ---------------------  Hero  --------------------- */}
            <section className="pt-25 pb-20 md:bg-[url('@/public/images/pngs/wavy-vector-hero.png')] bg-[url('@/public/images/pngs/wavy-vector-hero-mobile.png')] bg-no-repeat bg-size-[100%_100%] bg-center">
                <div className="container md:space-y-22.5 space-y-12.5">
                    <SectionHeader
                        tag="About Us"
                        heading={
                            <span>
                                More Than a Team, we are
                                <br className="md-br" /> Your{" "}
                                <span className="relative font-luxurious-script font-normal md:text-[5.5rem] text-[3.125rem] text-[#F58B3B] md:before:inline-block before:hidden before:content-[url(@/public/images/pngs/wavy-vector-about.png)] before:absolute before:-bottom-6">
                                    Growth Partners
                                </span>
                            </span>
                        }
                        className="[&_[data-slot='heading']]:md:text-[3.5rem]"
                    />

                    <div className="grid lg:grid-cols-5 gap-8 itemscenter">
                        <div className="md:col-span-2 rounded-[18.33px] overflow-hidden">
                            <Image
                                src={AboutHeroImg}
                                alt=""
                                className="size-full object-cover"
                            />
                        </div>

                        <div className="md:col-span-3 flex flex-col justify-evenly gap-15">
                            <p className="flex flex-col gap-4 text-lg">
                                <span>
                                    At Axel Promotion, we don&apos;t just run
                                    ads — we build growth systems that turn
                                    attention into actual revenue.
                                </span>
                                <span>
                                    We&apos;re a marketing and sales company
                                    built for brands that want more than just
                                    clicks. From early-stage startups to
                                    established businesses, we help teams
                                    clarify their offer, tighten their funnel,
                                    and launch campaigns that move the needle —
                                    not just vanity metrics.
                                </span>
                                <span>
                                    Our work spans digital strategy, paid media,
                                    email flows, sales enablement, and
                                    boots-on-ground activations. But what sets
                                    us apart isn&apos;t the services — it&apos;s
                                    how we think. We approach every brand like
                                    operators, not spectators. That means deep
                                    audits, sharp positioning, honest feedback,
                                    and rapid execution.
                                </span>
                            </p>

                            <div className="flex md:flex-row flex-col gap-10">
                                <div className="space-y-4.5">
                                    <div className="size-15 grid place-content-center bg-primary rounded-full">
                                        <Eye className="text-white" />
                                    </div>
                                    <h4 className="text-lg font-semibold">
                                        Our Vision
                                    </h4>
                                    <p className="text-sm text-secondary">
                                        To redefine how brands grow — not
                                        through noise, but through clarity,
                                        strategy, and systems that scale. Axcel
                                        Promotion is here to lead that shift —
                                        helping founders, teams, and creators
                                        cut through the clutter.
                                    </p>
                                </div>
                                <div className="space-y-4.5">
                                    <div className="size-15 grid place-content-center bg-primary rounded-full">
                                        <Rocket className="text-white" />
                                    </div>
                                    <h4 className="text-lg font-semibold">
                                        Our Mission
                                    </h4>
                                    <p className="text-sm text-secondary">
                                        To redefine how brands grow — not
                                        through noise, but through clarity,
                                        strategy, and systems that scale. Axcel
                                        Promotion is here to lead that shift —
                                        helping founders, teams, and creators
                                        cut through the clutter.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ---------------------  Our Approach  --------------------- */}
            <section className="container py-20 md:space-y-22.5 space-y-12.5">
                <SectionHeader tag="Our Approach" heading="The Axel Approach" />

                <div className="grid lg:grid-cols-3 md:grid-cols-2 md:gap-7.5 gap-5">
                    {ourApproach.map(
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

            {/* ---------------------  Why Choose Us  --------------------- */}
            <section className="container py-20 md:space-y-22.5 space-y-12.5">
                <SectionHeader
                    tag="Why Choose Us"
                    heading="We are the right choice"
                />

                <div className="flex flex-col gap-11.5">
                    <div className="flex md:flex-row flex-col gap-8">
                        <figure className="md:w-[35%]">
                            <Image
                                src={Workspace}
                                alt=""
                                className="size-full object-cover"
                            />
                        </figure>

                        <div className="md:w-[65%] flex flex-col gap-2.5">
                            <div className="flex-1 flex md:flex-row flex-col gap-2.5">
                                {whyChooseUs
                                    .slice(0, 2)
                                    .map(
                                        (
                                            { description, heading, Icon },
                                            index,
                                        ) => (
                                            <WhyChooseUsCard
                                                key={heading + index}
                                                {...{
                                                    description,
                                                    heading,
                                                    Icon,
                                                    index,
                                                }}
                                            />
                                        ),
                                    )}
                            </div>
                            <div className="flex-1 flex md:flex-row flex-col gap-2.5">
                                {whyChooseUs
                                    .slice(2)
                                    .map(
                                        (
                                            { description, heading, Icon },
                                            index,
                                        ) => (
                                            <WhyChooseUsCard
                                                key={heading + index}
                                                {...{
                                                    description,
                                                    heading,
                                                    Icon,
                                                    index,
                                                }}
                                            />
                                        ),
                                    )}
                            </div>
                        </div>
                    </div>

                    <Link
                        href="/contact"
                        className={cn(
                            buttonVariants({ size: "lg" }),
                            "mx-auto md:w-fit w-full md:text-xl text-lg",
                        )}
                    >
                        Meet with Axel Promotions
                    </Link>
                </div>
            </section>
        </main>
    );
};

export default AboutUs;
