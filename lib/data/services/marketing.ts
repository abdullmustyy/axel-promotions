import AdOptimization from "@/public/images/pngs/ad-optimization.png";
import CaseStudy from "@/public/images/pngs/case-study.png";
import ContentMarketing from "@/public/images/pngs/content-marketing.png";
import EmailMarketing from "@/public/images/pngs/email-marketing.png";
import MarketResearch from "@/public/images/pngs/market-research.png";
import PaidAdvert from "@/public/images/pngs/paid-advert.png";
import SEO from "@/public/images/pngs/seo.png";
import AdConversion from "@/public/images/svgs/ad-conversion.svg";
import Eye from "@/public/images/svgs/eye.svg";
import Plug from "@/public/images/svgs/plug.svg";
import Robot from "@/public/images/svgs/robot.svg";
import SystemGray from "@/public/images/svgs/systems-gray.svg";
import XFlow from "@/public/images/svgs/x-flow.svg";
import XTarget from "@/public/images/svgs/x-target.svg";

export const commonProblems = [
    { image: AdConversion, problem: "Wasting ad spend with low conversions?" },
    { image: Plug, problem: "Content not aligned with your offer or brand?" },
    { image: XTarget, problem: "Struggling to generate qualified leads?" },
    {
        image: XFlow,
        problem: "Lacking a marketing strategy tied to business outcomes?",
    },
];

export const solutionsAndDeliverables = [
    {
        heading: "Market Research & Brand Strategy",
        description:
            "We run deep audits, ask  questions, and strip things down until the message is clear.",
        image: MarketResearch,
    },
    {
        heading: "Content Marketing",
        description:
            "Blogs, social posts, lead magnets aligned with your brand and buyer journey.",
        image: ContentMarketing,
    },
    {
        heading: "Paid Advertising (Meta, LinkedIn, X, TikTok)",
        description: "Targeted ad campaigns built for ROI.",
        image: PaidAdvert,
    },
    {
        heading: "SEO",
        description: "Technical SEO, content SEO, and site optimization.",
        image: SEO,
    },
    {
        heading: "Ad Optimization & Creative",
        description: "Technical SEO, content SEO, and site optimization.",
        image: AdOptimization,
    },
    {
        heading: "Email Marketing & Funnels",
        description: "Build nurture sequences that move leads to buyers.",
        image: EmailMarketing,
    },
];

export const ourBenefits = [
    {
        heading: "Strategy Meets Execution",
        description:
            "We go beyond advice — we build, optimize, and scale with you.",
        image: SystemGray,
    },
    {
        heading: "Fast, Measurable Results",
        description:
            "From lead generation to paid campaigns, we optimize every dollar spent",
        image: Eye,
    },
    {
        heading: "Aligned Incentives",
        description:
            "We win when you win. Flexible packages, performance bonuses, and clear ROI.",
        image: Robot,
    },
];

export const caseStudies = [
    {
        image: CaseStudy,
        tag: "B2B SaaS",
        description:
            "5x increase in MQLs through full-funnel LinkedIn ads + whitepaper strategy.",
    },
    {
        image: CaseStudy,
        tag: "eCommerce",
        description: "27% drop in CPA within 60 days of paid media takeover.",
    },
    {
        image: CaseStudy,
        tag: "Professional Services",
        description:
            "Ranked #1 on Google for 7 high-intent keywords within 90 days.",
    },
];
