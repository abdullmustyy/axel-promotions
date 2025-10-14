import AccountNetworkOff from "@/components/icons/account-network-off";
import Channels from "@/components/icons/channels";
import Control from "@/components/icons/control";
import Insight from "@/components/icons/insight";
import Nolight from "@/components/icons/nolight";
import NotAllowed from "@/components/icons/not-allowed";
import Strategy from "@/components/icons/strategy";
import CaseStudy from "@/public/images/pngs/case-study.png";
import CampaignPlanning from "@/public/images/svgs/campaign-planning.svg";
import MarketingAlignment from "@/public/images/svgs/marketing-allignment.svg";
import MarketingStrategy from "@/public/images/svgs/marketing-strategy.svg";
import TeamLeadership from "@/public/images/svgs/team-leadership.svg";
import VideoSales from "@/public/images/svgs/video-sales.svg";

export const commonProblems = [
    {
        Icon: NotAllowed,
        problem: "No clear vision, KPIs, or roadmap?",
    },
    {
        Icon: Channels,
        problem: "Marketing channels operating in silos?",
    },
    {
        Icon: AccountNetworkOff,
        problem: "Marketing team lacks focus and accountability?",
    },
    {
        Icon: Nolight,
        problem: "Burning budget without knowing what's working?",
    },
];

export const solutionsAndDeliverables = [
    {
        heading: "Marketing Strategy & Vision",
        description:
            "We define your goals, KPIs, and positioning—and align every channel to your big picture.",
        image: MarketingStrategy,
    },
    {
        heading: "Team Leadership & Mentorship",
        description:
            "We lead internal teams, hire smart, and manage day-to-day execution with precision.",
        image: TeamLeadership,
    },
    {
        heading: "Campaign Planning & Oversight",
        description:
            "From high-level initiatives to daily metrics, we ensure your marketing system performs.",
        image: CampaignPlanning,
    },
    {
        heading: "Video Sales Letter (VSL) Creation",
        description: "Vendor Management & Vendorship",
        image: VideoSales,
    },
    {
        heading: "Sales & Marketing Alignment",
        description:
            "We connect go-to-market strategy across marketing, sales, and product—because silos kill growth.",
        image: MarketingAlignment,
    },
];

export const ourBenefits = [
    {
        heading: "Clarity & Control",
        description:
            "No more guessing, instead we provide clear direction and weekly results.",
        Icon: Control,
    },
    {
        heading: "Execution + Strategy",
        description:
            "We're not hands-off. We lead, perform, and optimize continuously.",
        Icon: Strategy,
    },
    {
        heading: "Experienced Insight",
        description: "Real CMO-level thinking grounded in growth—not fluff.",
        Icon: Insight,
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
