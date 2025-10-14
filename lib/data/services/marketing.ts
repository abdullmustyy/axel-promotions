import ChartColumnLow from "@/components/icons/chart-column-low";
import Eye from "@/components/icons/eye";
import Plug from "@/components/icons/plug";
import Robot from "@/components/icons/robot";
import System from "@/components/icons/system";
import XFlow from "@/components/icons/x-flow";
import XTarget from "@/components/icons/x-target";
import CaseStudy from "@/public/images/pngs/case-study.png";
import AdOptimization from "@/public/images/svgs/ad-optimization.svg";
import ContentMarketing from "@/public/images/svgs/content-marketing.svg";
import EmailMarketing from "@/public/images/svgs/email-marketing.svg";
import MarketResearch from "@/public/images/svgs/market-research.svg";
import PaidAdvert from "@/public/images/svgs/paid-advert.svg";
import SEO from "@/public/images/svgs/seo.svg";

export const commonProblems = [
    { Icon: ChartColumnLow, problem: "Wasting ad spend with low conversions?" },
    { Icon: Plug, problem: "Content not aligned with your offer or brand?" },
    { Icon: XTarget, problem: "Struggling to generate qualified leads?" },
    {
        Icon: XFlow,
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
        Icon: System,
    },
    {
        heading: "Fast, Measurable Results",
        description:
            "From lead generation to paid campaigns, we optimize every dollar spent",
        Icon: Eye,
    },
    {
        heading: "Aligned Incentives",
        description:
            "We win when you win. Flexible packages, performance bonuses, and clear ROI.",
        Icon: Robot,
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
