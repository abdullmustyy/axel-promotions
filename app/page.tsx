import HeroServiceCard from "@/components/hero-service-card";
import { buttonVariants } from "@/components/ui/button";
import { brands } from "@/lib/data/home";
import { cn } from "@/lib/utils";
import HeroImg from "@/public/images/pngs/home-hero-img.png";
import TakeOffImg from "@/public/images/svgs/takeoff.svg";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
    return (
        <main>
            {/* ---------------------  Hero  --------------------- */}
            <header className="container pt-5 pb-30 flex md:flex-row flex-col md:items-end md:gap-0 gap-12.5">
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
                        href=""
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
            <section className="container space-y-6">
                <p className="text-2xl text-[#F58B3B] font-medium font-poppins text-center">
                    Join the brands who are scaling with Axel Promotions
                </p>

                <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 items-center justify-items-center md:gap-8 gap-10">
                    {brands.map((logo, index) => (
                        <Image
                            key={index}
                            src={logo}
                            alt=""
                            className="md:last:col-span-1 last:col-span-2"
                        />
                    ))}
                </div>
            </section>
        </main>
    );
}
