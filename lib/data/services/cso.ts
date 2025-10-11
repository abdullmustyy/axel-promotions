import CaseStudy from "@/public/images/pngs/case-study.png";
import Forecasting from "@/public/images/pngs/forecasting.png";
import GoToMarket from "@/public/images/pngs/go-to-market.png";
import MarketingSales from "@/public/images/pngs/marketing-sales.png";
import SalesSystems from "@/public/images/pngs/sales-system.png";
import TeamHiring from "@/public/images/pngs/team-hiring.png";
import Control from "@/public/images/svgs/control.svg";
import Insight from "@/public/images/svgs/insight.svg";
import LostDeals from "@/public/images/svgs/lost-deals.svg";
import NoSales from "@/public/images/svgs/no-sales.svg";
import NoSchedule from "@/public/images/svgs/no-schedule.svg";
import Reps from "@/public/images/svgs/reps.svg";
import StrategyPrimary from "@/public/images/svgs/strategy-primary.svg";

export const commonProblems = [
    {
        image: NoSales,
        problem: "No sales playbook or consistent pipeline?",
    },
    {
        image: Reps,
        problem: "Reps underperforming and lacking accountability?",
    },
    {
        image: LostDeals,
        problem: "Lost deals due to poor qualification or follow-up?",
    },
    {
        image: NoSchedule,
        problem: "Misalignment between sales, marketing, and leadership?",
    },
];

export const solutionsAndDeliverables = [
    {
        heading: "Go-To-Market Strategy",
        description:
            "Define ICP, pricing, messaging, and sales motions to penetrate your market",
        image: GoToMarket,
    },
    {
        heading: "Team Hiring & Leadership",
        description:
            "We build your sales org, train reps, and drive accountability through clear KPIs.",
        image: TeamHiring,
    },
    {
        heading: "Forecasting & KPI Management",
        description:
            "Weekly dashboards, pipeline tracking, and reporting that drives smart decisions.",
        image: Forecasting,
    },
    {
        heading: "Sales Systems & Process Optimization",
        description:
            "Audit and refine your funnel from lead gen to close with data-driven precision.",
        image: SalesSystems,
    },
    {
        heading: "Marketing-Sales Alignment",
        description:
            "We ensure your messaging, content, and outreach are connected across functions.",
        image: MarketingSales,
    },
];

export const ourBenefits = [
    {
        heading: "Clarity & Control",
        description:
            "No more guessing, instead we provide clear direction and weekly results.",
        image: Control,
    },
    {
        heading: "Execution + Strategy",
        description:
            "We're not hands-off. We lead, perform, and optimize continuously.",
        image: StrategyPrimary,
    },
    {
        heading: "Experienced Insight",
        description: "Real CMO-level thinking grounded in growth—not fluff.",
        image: Insight,
    },
];

export const caseStudies = [
    {
        image: CaseStudy,
        tag: "HealthTech SaaS",
        description:
            "7-figure ARR growth with a full funnel rebuild + team scaling",
    },
    {
        image: CaseStudy,
        tag: "Professional Services Firm",
        description:
            "Brand repositioning + inbound engine created 40% pipeline lift",
    },
    {
        image: CaseStudy,
        tag: "eCommerce",
        description:
            "Restructured team + creative testing roadmap led to 28% ad efficiency gain",
    },
];
