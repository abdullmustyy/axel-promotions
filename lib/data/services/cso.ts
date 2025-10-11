import CaseStudy from "@/public/images/pngs/case-study.png";
import Forecasting from "@/public/images/pngs/forecasting.png";
import GoToMarket from "@/public/images/pngs/go-to-market.png";
import MarketingSales from "@/public/images/pngs/marketing-sales.png";
import SalesSystems from "@/public/images/pngs/sales-system.png";
import TeamHiring from "@/public/images/pngs/team-hiring.png";
import LostDeals from "@/public/images/svgs/lost-deals.svg";
import Members from "@/public/images/svgs/members.svg";
import NoSales from "@/public/images/svgs/no-sales.svg";
import NoSchedule from "@/public/images/svgs/no-schedule.svg";
import Performance from "@/public/images/svgs/performance.svg";
import Repeatable from "@/public/images/svgs/repeatable.svg";
import Reps from "@/public/images/svgs/reps.svg";

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
        heading: "Repeatable Process",
        description:
            "We help you build a scalable sales engine not a one-off campaign.",
        image: Repeatable,
    },
    {
        heading: "Leadership You Can Rely On",
        description:
            "We show up like an internal team member, not an external advisor",
        image: Members,
    },
    {
        heading: "Performance Visibility",
        description: "Know exactly what's working and what's costing you.",
        image: Performance,
    },
];

export const caseStudies = [
    {
        image: CaseStudy,
        tag: "SaaS Company",
        description:
            "Built outbound team from scratch, grew pipeline 6x in 90 days",
    },
    {
        image: CaseStudy,
        tag: "Consulting Firm",
        description: "Redesigned funnel and increased close rates by 34%",
    },
    {
        image: CaseStudy,
        tag: "Tech-Enabled Services",
        description: "Decreased ramp time for new reps by 50%",
    },
];
