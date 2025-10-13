import PageHeader from "@/components/page-header";
import SectionHeader from "@/components/section-header";
import { buttonVariants } from "@/components/ui/button";
import { caseStudies } from "@/lib/data/case-studies";
import { cn } from "@/lib/utils";
import CaseStudyPlaceholder from "@/public/images/pngs/case-study-placeholder.png";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const CaseStudy = () => {
    return (
        <main>
            {/* ---------------------  Header  --------------------- */}
            <PageHeader page="Details" />

            <section className="container pt-8 pb-20 flex flex-col gap-8">
                <div className="md:h-156 h-62.5 w-full rounded-2xl overflow-hidden">
                    <Image
                        src={CaseStudyPlaceholder}
                        alt=""
                        className="size-full object-cover"
                    />
                </div>

                <div className="flex md:flex-row flex-col-reverse md:items-start gap-7.5">
                    <div className="flex-1 space-y-6">
                        <h3 className="md:text-[2.5rem] text-xl font-medium leading-[100%]">
                            300 SQLs in 45 Days
                        </h3>
                        <div className="md:text-xl text-base text-accent leading-6 flex flex-col gap-6">
                            <p>
                                When Aaron R., a U.S.-based founder with strong
                                product instincts, approached us, he had one
                                request:
                            </p>
                            <p>
                                “I want to stop guessing with data. I want to
                                speak SQL fluently—like a second language.”
                            </p>
                            <p>
                                Aaron wasn&apos;t looking for tutorials or
                                certifications. He wanted muscle memory. So we
                                designed a hands-on, high-repetition SQL sprint
                                for him:
                            </p>
                            <ul className="list-disc list-inside space-y-2 md:pl-6 pl-4">
                                <li>300 SQL problems solved in 45 days.</li>
                                <li>Real business-style queries.</li>
                                <li>From zero to confident data thinker.</li>
                            </ul>
                            <p>
                                This is the story of how we made that happen—and
                                how you or your team could do the same.
                            </p>
                        </div>
                    </div>
                    <div className="md:p-10 p-8 flex flex-col gap-6 rounded-2xl bg-primary text-white">
                        <div className="space-y-1">
                            <h6 className="md:text-xl text-base text-white/70">
                                Project Category:
                            </h6>
                            <span className="md:text-3xl text-xl font-medium">
                                Sales & Marketing
                            </span>
                        </div>
                        <div className="space-y-1">
                            <h6 className="md:text-xl text-base text-white/70">
                                Client:
                            </h6>
                            <span className="md:text-3xl text-xl font-medium">
                                Aaron R.
                            </span>
                        </div>
                        <div className="space-y-1">
                            <h6 className="md:text-xl text-base text-white/70">
                                Duration:
                            </h6>
                            <span className="md:text-3xl text-xl font-medium">
                                2 Weeks
                            </span>
                        </div>
                        <div className="space-y-1">
                            <h6 className="md:text-xl text-base text-white/70">
                                Country:
                            </h6>
                            <span className="md:text-3xl text-xl font-medium">
                                USA
                            </span>
                        </div>
                    </div>
                </div>

                <div className="space-y-6">
                    <h3 className="md:text-[2.5rem] text-xl font-medium leading-[100%]">
                        The Challenge
                    </h3>
                    <div className="md:text-xl text-base text-accent leading-6 flex flex-col gap-6">
                        <p>
                            Aaron had the product sense. He understood user
                            flows, funnels, retention, and growth loops. But
                            like many non-technical founders, he felt limited
                            when it came to querying raw data himself.
                        </p>
                        <p>
                            He wasn&apos;t trying to become a backend engineer.
                            <br /> He just wanted to confidently answer
                            questions like:
                        </p>
                        <p>
                            “How many users used this feature in their first
                            week?”
                        </p>
                        <p>
                            “What&apos;s our best-performing acquisition channel
                            by cohort?”
                        </p>
                        <p>
                            “Who are our top 5% power users—and what makes them
                            tick?”
                        </p>
                        <p>
                            So we proposed a clear challenge:
                            <br /> 300 SQL queries in 45 days. A mix of
                            fundamentals, business logic, and real-world use
                            cases. The goal wasn&apos;t to memorize SQL
                            syntax—it was to train the brain to think in
                            queries.
                        </p>
                    </div>
                </div>

                <div className="space-y-6">
                    <h3 className="md:text-[2.5rem] text-xl font-medium leading-[100%]">
                        The Approach
                    </h3>
                    <div className="md:text-xl text-base text-accent leading-6 flex flex-col gap-6">
                        <p>
                            We built a custom SQL progression tailored to
                            Aaron&apos;s goals and current skill level.
                        </p>
                        <p>
                            Phase 1 - Foundations (Days 1-5)
                            <br /> Basic query structure, filtering, sorting,
                            and grouping.
                            <br /> Focus: SELECT, WHERE, GROUP BY, ORDER BY,
                            COUNT, SUM
                        </p>
                        <p>
                            Phase 2 - Joins & Relationships (Days 6-15)
                            <br /> Merging tables, relational thinking, handling
                            NULLs.
                            <br /> Focus: INNER JOIN, LEFT JOIN, RIGHT JOIN,
                            self joins
                        </p>
                        <p>
                            Phase 3 - Subqueries & Aggregates (Days 16-25)
                            <br /> Going deeper with nested logic and grouped
                            data.
                            <br /> Focus: subqueries, HAVING, DISTINCT, nested
                            SELECTs
                        </p>
                        <p>
                            Phase 4 - Window Functions & CTEs (Days 26-35)
                            <br /> Power tools for analyzing behavior over time.
                            <br /> Focus: ROW_NUMBER, RANK, LAG, LEAD, CTEs
                            (WITH clauses)
                        </p>
                        <p>
                            Phase 5 - Real-World Scenarios (Days 36-45)
                            <br />
                            Challenges that reflect startup-style metrics and
                            analytics.
                            <br /> Focus: user retention, funnel conversion,
                            session breakdowns, product usage
                        </p>
                        <p>
                            Each day, we delivered 6-8 SQL challenges—either
                            from a curated bank (StrataScratch, LeetCode,
                            DataLemur) or custom-built based on Aaron&apos;s
                            product domain.
                        </p>

                        <div>
                            <p>
                                We didn&apos;t just throw questions at him. We
                                offered:
                            </p>
                            <ul className="list-disc list-inside space-y-2 md:pl-6 pl-4">
                                <li>Step-by-step solutions</li>
                                <li>Query breakdowns</li>
                                <li>Pattern recognition tips</li>
                                <li>Rewrite-and-review sessions</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className="container py-20 flex flex-col md:gap-15 gap-12.5">
                <SectionHeader
                    tag="Our Case study"
                    heading="See more of our work"
                    className="[&_[data-slot='heading']]:md:text-6xl"
                />

                <div className="grid md:grid-cols-2 md:gap-7.5 gap-5">
                    {caseStudies
                        .slice(0, 2)
                        .map(({ author, tag, image, heading }, index) => (
                            <div
                                key={tag + index}
                                className="grid grid-rows-subgrid row-span-2 gap-5 md:p-7.5 p-5 rounded-xxl bg-snow-haze"
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
                        ))}
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
            </section>
        </main>
    );
};

export default CaseStudy;
