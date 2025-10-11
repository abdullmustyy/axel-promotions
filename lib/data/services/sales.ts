import AdOptimization from "@/public/images/pngs/ad-optimization.png";
import CaseStudyLeadMagnet from "@/public/images/pngs/case-study-lead-magnet.png";
import CaseStudy from "@/public/images/pngs/case-study.png";
import LeadScraping from "@/public/images/pngs/lead-scraping.png";
import PersonalizedOutreach from "@/public/images/pngs/personalized-outreach.png";
import SalesPages from "@/public/images/pngs/sales-pages.png";
import VideoSales from "@/public/images/pngs/video-sales.png";
import Asset from "@/components/icons/asset";
import Log from "@/components/icons/log";
import SpeedPipiline from "@/components/icons/speed-pipiline";
import Outreach from "@/components/icons/outreach";
import Automation from "@/components/icons/automation";
import Pointer from "@/components/icons/pointer";
import Pipeline from "@/components/icons/pipeline";

export const commonProblems = [
    {
        Icon: Outreach,
        problem: "Spending hours on outreach with little to show for it?",
    },
    {
        Icon: Automation,
        problem: "Automation that feels robotic and gets ignored?",
    },
    {
        Icon: Pointer,
        problem: "No compelling narrative or assets to drive interest?",
    },
    {
        Icon: Pipeline,
        problem: "Lack of consistent, qualified leads in your pipeline?",
    },
];

export const solutionsAndDeliverables = [
    {
        heading: "Lead Scraping & Segmentation",
        description:
            "We identify your ideal buyers using scraping tools, filters, and enrichment then build clean, actionable lead lists.",
        image: LeadScraping,
    },
    {
        heading: "Multi-Channel Personalized Outreach",
        description:
            "Cold emails, social DMs, and even strategic cold calls all built around hyper-personalized messaging and follow-up logic",
        image: PersonalizedOutreach,
    },
    {
        heading: "Case Study & Lead Magnet Creation",
        description:
            "We turn your success stories into credibility boosters that open doors and build trust in cold outreach.",
        image: CaseStudyLeadMagnet,
    },
    {
        heading: "Video Sales Letter (VSL) Creation",
        description:
            "We script, produce, and optimize powerful video sales letters that capture attention and convert leads into booked calls.",
        image: VideoSales,
    },
    {
        heading: "Sales Pages That Sell",
        description:
            "We build high-converting landing pages tailored to your offer designed for conversion, not fluff.",
        image: SalesPages,
    },
    {
        heading: "Offer Crafting & Positioning",
        description:
            "We help you refine your offer to be irresistible, clear, and conversion-optimized for cold audiences.",
        image: AdOptimization,
    },
];

export const ourBenefits = [
    {
        heading: "Everything Tracked, Everything Optimized",
        description:
            "See open rates, response rates, booked calls, and close rates all in one dashboard.",
        Icon: Log,
    },
    {
        heading: "Done-for-You Assets",
        description:
            "Sales pages, case studies, VSLs we create every piece you need to sell effectively.",
        Icon: Asset,
    },
    {
        heading: "Speed to Pipeline",
        description:
            "We launch outbound campaigns fast because you don't have time to waste.",
        Icon: SpeedPipiline,
    },
];

export const caseStudies = [
    {
        image: CaseStudy,
        tag: "B2B Consulting",
        description:
            "42 booked meetings in 30 days via outbound email + LinkedIn DM system",
    },
    {
        image: CaseStudy,
        tag: "SaaS Startup",
        description:
            "200+ qualified leads scraped and segmented with 11% reply rate",
    },
    {
        image: CaseStudy,
        tag: "Coaching Brand",
        description:
            "VSL + sales page combo delivered $37k in new business from cold traffic",
    },
];
