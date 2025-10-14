import ClipboardNoAccess from "@/components/icons/clipboard-no-access";
import LostDeals from "@/components/icons/lost-deals";
import Members from "@/components/icons/members";
import NoAxesChart from "@/components/icons/no-axes-chart";
import NoCoin from "@/components/icons/no-coin";
import Performance from "@/components/icons/performance";
import Repeatable from "@/components/icons/repeatable";
import CaseStudy from "@/public/images/pngs/case-study.png";
import Forecasting from "@/public/images/svgs/forecasting.svg";
import GoToMarket from "@/public/images/svgs/go-to-market.svg";
import MarketingSales from "@/public/images/svgs/marketing-sales.svg";
import SalesSystems from "@/public/images/svgs/sales-system.svg";
import TeamHiring from "@/public/images/svgs/team-hiring.svg";

export const commonProblems = [
    {
        Icon: NoCoin,
        problem: "No sales playbook or consistent pipeline?",
    },
    {
        Icon: NoAxesChart,
        problem: "Reps underperforming and lacking accountability?",
    },
    {
        Icon: LostDeals,
        problem: "Lost deals due to poor qualification or follow-up?",
    },
    {
        Icon: ClipboardNoAccess,
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
        Icon: Repeatable,
    },
    {
        heading: "Leadership You Can Rely On",
        description:
            "We show up like an internal team member, not an external advisor",
        Icon: Members,
    },
    {
        heading: "Performance Visibility",
        description: "Know exactly what's working and what's costing you.",
        Icon: Performance,
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
