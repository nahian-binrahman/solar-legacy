import type { Metadata } from "next";
import { UniversalServiceTemplate, type ServicePageData } from "@/components/service/universal-service-template";

export const metadata: Metadata = {
  title: "Commercial Solar Solutions | Solar Legacy",
  description:
    "Turn energy overhead into a competitive business advantage with turnkey commercial solar, carports, and industrial clean power infrastructure.",
};

const pageData: ServicePageData = {
  badge: "Commercial & Industrial Solar",
  headline: "Turn Energy Overhead Into a",
  headlineHighlight: "Business Strategy",
  oneSentenceExplanation:
    "Commercial electricity rates and peak demand surcharges represent massive ongoing operating costs; Solar Legacy designs enterprise solar infrastructure to lower overhead and enhance property equity.",
  heroImage: "/commercial-solar.jpg",
  heroImageAlt: "Commercial industrial solar rooftop array",
  heroFloatingBadge: {
    title: "Enterprise Clean Power",
    subtitle: "Rooftop, carport canopy, and ground-mount multi-megawatt systems",
  },
  problems: [
    {
      title: "Punitive Demand Charges",
      desc: "Commercial tariffs heavily penalize short 15-minute demand spikes, which often comprise up to 50% to 70% of total monthly electric costs.",
    },
    {
      title: "Uncontrollable Operating Expenses",
      desc: "Rising utility tariff schedules eat into operating margins and complicate long-term budgeting for commercial real estate and manufacturing.",
    },
    {
      title: "Mounting ESG & Tenant Expectations",
      desc: "Tenants and institutional investors increasingly prioritize buildings with verified clean energy credentials, on-site EV charging, and low carbon footprints.",
    },
  ],
  solutions: [
    {
      title: "Ballasted Non-Penetrating Rooftops",
      desc: "Custom engineered for TPO, EPDM, PVC, and standing seam roofs with zero roof penetrations and fully preserved membrane warranties.",
    },
    {
      title: "Solar Carports & EV Canopies",
      desc: "Turn open parking surfaces into revenue-generating power stations offering shaded parking and Level 2/DC Fast EV charging.",
    },
    {
      title: "Turnkey Municipal & Interconnect Permitting",
      desc: "We manage complete medium-voltage interconnect agreements, structural PE stamps, and fire marshal setbacks.",
    },
    {
      title: "Interval Data Load Modeling",
      desc: "Physics-based modeling utilizing 8,760 hours of real interval billing data to match your facility's exact operational curve.",
    },
    {
      title: "Enterprise Telemetry Dashboard",
      desc: "Portfolio-wide monitoring giving facility managers real-time insight into kWh production, peak demand mitigation, and carbon offsets.",
    },
  ],
  coreBenefits: [
    {
      title: "Drastic Operating Expense Drop",
      desc: "Hedge commercial electric bills against future utility rate inflation for the next 25+ years.",
    },
    {
      title: "Accelerated Tax Incentives (ITC + MACRS)",
      desc: "Monetize the 30% Federal Investment Tax Credit alongside 100% bonus MACRS depreciation in year one.",
    },
    {
      title: "Increased Net Operating Income (NOI)",
      desc: "Direct reduction of operating expenses drives immediate appreciation in capitalized commercial real estate value.",
    },
    {
      title: "Tenant Attraction & Corporate ESG",
      desc: "Provide shade, EV charging, and verifiable sustainability metrics demanded by enterprise corporate tenants.",
    },
  ],
  bestFitProfiles: [
    {
      title: "Distribution & Logistics Centers",
      desc: "Expansive, flat roof profiles with heavy ongoing HVAC, sorting automation, and fleet electrification power needs.",
    },
    {
      title: "Manufacturing & Industrial Facilities",
      desc: "Plants with heavy daytime electric consumption and machinery startup spikes seeking demand suppression.",
    },
    {
      title: "Commercial Real Estate & Retail Plazas",
      desc: "Property managers looking to generate solar canopy amenities, monetize rooftop space, or lower common-area electricity.",
    },
  ],
  processSteps: [
    { step: "01", title: "Interval Data Audit", desc: "Our engineering desk reviews 12 months of utility interval billing data (15-minute kW records)." },
    { step: "02", title: "Feasibility & CAD Layout", desc: "Structural engineers perform roof load audits and design optimal non-penetrating arrays." },
    { step: "03", title: "Interconnect & Financing", desc: "We secure utility interconnection approval and structure PPA, lease, or C-PACE capital." },
    { step: "04", title: "Construction & Commissioning", desc: "Licensed union commercial crews deploy racking, inverters, and switchgear with minimal business disruption." },
  ],
  paymentOptions: [
    {
      title: "Direct Capital Purchase",
      subtitle: "Highest Lifetime Financial Yield",
      highlights: [
        "Capture 100% of 30% Federal ITC & state solar rebates",
        "Full MACRS accelerated depreciation tax shelter",
        "Direct asset ownership on enterprise balance sheet",
        "Shortest payback period (typically 3 to 6 years)",
      ],
      isFeatured: true,
    },
    {
      title: "Commercial Solar PPA / Operating Lease",
      subtitle: "$0 Upfront Capital Expenditure",
      highlights: [
        "Immediate day-one electricity cost reductions",
        "Off-balance-sheet operating expense financing",
        "Complete operations & maintenance handled by provider",
        "Predictable, fixed per-kWh energy rate",
      ],
    },
    {
      title: "C-PACE Financing",
      subtitle: "Property Tax Assessment Structure",
      highlights: [
        "100% upfront long-term fixed-rate financing up to 30 years",
        "Repaid as a special assessment on the commercial property tax bill",
        "Pass-through of costs to tenants under NNN lease structures",
        "Transfers automatically upon building sale",
      ],
    },
  ],
  warrantyPoints: [
    {
      title: "25-Year Linear Power Warranty",
      desc: "Tier-1 commercial bifacial panels guaranteed to retain optimal generation performance across 25 years.",
    },
    {
      title: "Roof Membrane Compatibility Guarantee",
      desc: "Ballasted systems engineered with slip-sheets to uphold original roof manufacturer warranty specifications.",
    },
    {
      title: "Turnkey Commercial O&M Support",
      desc: "Preventative thermal drone imaging, inverter servicing, and 24/7 automated SCADA monitoring.",
    },
  ],
  faqs: [
    {
      question: "Will installing commercial solar disrupt day-to-day business operations?",
      answer:
        "No. All structural rooftop staging and electrical tie-ins are scheduled during non-peak or weekend hours to ensure zero operational downtime for your employees, tenants, and delivery trucks.",
    },
    {
      question: "What tax benefits are available for commercial solar installations?",
      answer:
        "Under the Inflation Reduction Act, commercial projects qualify for a minimum 30% Federal Investment Tax Credit (ITC), with potential adders of up to 50% for domestic content or energy communities. Additionally, systems qualify for 5-year MACRS accelerated depreciation.",
    },
    {
      question: "What is the difference between a commercial solar purchase and a PPA?",
      answer:
        "With a capital purchase, your enterprise owns the equipment and captures all tax depreciation and credits. With a Power Purchase Agreement (PPA), a third-party financing partner owns the system, and your business simply buys the clean electricity at a guaranteed low rate with $0 upfront expense.",
    },
    {
      question: "Can commercial solar be integrated with EV charging and battery storage?",
      answer:
        "Yes. We frequently engineer dual-purpose solar carports equipped with Level 2 and DC Fast EV charging stations, coupled with commercial Battery Energy Storage Systems (BESS) for complete demand shaving.",
    },
  ],
  defaultInterest: "Solar",
  defaultProperty: "Commercial",
};

export default function CommercialSolarPage() {
  return <UniversalServiceTemplate data={pageData} />;
}
