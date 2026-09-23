import type { Metadata } from "next";
import { UniversalServiceTemplate, type ServicePageData } from "@/components/service/universal-service-template";

export const metadata: Metadata = {
  title: "Residential Solar | Turn Rooftops Into Energy Assets",
  description:
    "A properly designed residential solar system reduces utility dependence and gives homeowners greater control over rising electricity costs.",
};

const pageData: ServicePageData = {
  badge: "Architectural Photovoltaics",
  headline: "Turn Your Rooftop Into a",
  headlineHighlight: "Long-Term Energy Asset",
  oneSentenceExplanation:
    "A properly engineered solar system reduces your dependence on the utility monopoly and gives you predictable control over rising electricity costs.",
  heroImage: "/project-hilltop-residence.jpg",
  heroImageAlt: "Luxury home with flush monocrystalline solar array",
  heroFloatingBadge: {
    title: "Monocrystalline Precision",
    subtitle: "All-black tier-1 panels with zero-penetration flashings",
  },
  problems: [
    {
      title: "Compounding Utility Rate Hikes",
      desc: "Grid electricity rates continue escalating year-over-year with unpredictable peak-hour surcharges and regulatory tariff hikes.",
    },
    {
      title: "Zero Price or Budget Control",
      desc: "Homeowners remain vulnerable to monopoly utility pricing with no voice or alternative when monthly bills spike.",
    },
    {
      title: "Sunk Expense with Zero Equity",
      desc: "Traditional electric bills are 100% dead money that build zero equity, ownership, or appraisal value for your home.",
    },
  ],
  solutions: [
    {
      title: "Custom Architectural Layout",
      desc: "CAD roof layouts engineered to preserve architectural rooflines and maximize solar irradiance.",
    },
    {
      title: "LiDAR Irradiance & Shade Scan",
      desc: "3D micro-climate shade modeling ensuring modules receive optimal daily sun exposure.",
    },
    {
      title: "Hourly Interval Data Modeling",
      desc: "Granular audit of past 12–24 months of utility consumption to eliminate over-sizing or under-sizing.",
    },
    {
      title: "Turnkey Municipal Permitting",
      desc: "We manage complete structural engineering stamps, HOA architectural approvals, and utility interconnect.",
    },
    {
      title: "24/7 Cloud Telemetry",
      desc: "Module-level output monitoring with automated proactive dispatch for service needs.",
    },
    {
      title: "Battery-Ready Inverters",
      desc: "Every array is built storage-ready, enabling seamless battery add-ons anytime.",
    },
  ],
  coreBenefits: [
    {
      title: "Hedge Against Grid Inflation",
      desc: "Lock in predictable, low-cost solar electricity for the next 25 to 30 years.",
    },
    {
      title: "Immediate Monthly Bill Drop",
      desc: "Displace peak-tier utility purchases with free daylight energy produced right on your roof.",
    },
    {
      title: "Permanent Architectural Equity",
      desc: "Studies consistently show solar-equipped residences command premium appraisal values.",
    },
    {
      title: "100% Clean Rooftop Generation",
      desc: "Significantly shrink your household carbon footprint with silent, emission-free power.",
    },
  ],
  bestFitProfiles: [
    {
      title: "Single-Family Homeowners",
      desc: "Families experiencing rising monthly electric bills seeking long-term overhead stabilization.",
    },
    {
      title: "Electric Vehicle (EV) Drivers",
      desc: "Drivers needing high-capacity overnight charging without paying punitive utility EV tier tariffs.",
    },
    {
      title: "High-Consumption Households",
      desc: "Residences with pool pumps, multi-zone HVAC, home workshops, or smart-home electronics.",
    },
  ],
  processSteps: [
    { step: "01", title: "Remote Solar Audit", desc: "We review your address, roof pitch, and 12-month power bills using satellite LiDAR." },
    { step: "02", title: "Custom Engineering", desc: "Licensed engineers design panel layouts and calculate exact estimated kWh yield." },
    { step: "03", title: "Permits & Approvals", desc: "We secure all city building permits, HOA covenants, and utility interconnect agreements." },
    { step: "04", title: "Installation & PTO", desc: "Master electricians install hardware, pass inspections, and activate Permission to Operate." },
  ],
  paymentOptions: [
    {
      title: "Solar System Ownership",
      subtitle: "Capital Purchase or Solar Loan",
      highlights: [
        "Direct claim of 30% Federal Clean Energy Tax Credit",
        "Maximum lifetime return on investment (ROI)",
        "Permanent real estate asset on property deed",
        "Zero lease transfer encumbrance upon sale",
      ],
      isFeatured: true,
    },
    {
      title: "Solar Service Subscription",
      subtitle: "Zero Equipment Purchase",
      highlights: [
        "$0 upfront equipment expense",
        "Predictable, capped monthly energy rate",
        "100% full maintenance, inverters & repairs covered",
        "Easy transfer to qualified buyers when you sell",
      ],
    },
    {
      title: "Flexible Low-Interest Loan",
      subtitle: "Finance with $0 Down",
      highlights: [
        "Keep your cash invested elsewhere",
        "Fixed monthly payment lower than average utility bills",
        "Apply tax credit to re-amortize principal",
        "Zero prepayment penalties anytime",
      ],
    },
  ],
  warrantyPoints: [
    {
      title: "25-Year Production Guarantee",
      desc: "Tier-1 panels guaranteed to produce at least 85% to 90% of original factory rated output at year 25.",
    },
    {
      title: "25-Year Inverter & Component Coverage",
      desc: "Complete hardware warranty covering microinverters, optimizers, and mounting hardware.",
    },
    {
      title: "10-Year Watertight Roof Guarantee",
      desc: "Certified master roof flashings guaranteed 100% leak-proof and structurally sound.",
    },
  ],
  faqs: [
    {
      question: "Will solar completely eliminate my electric bill?",
      answer:
        "While solar drastically reduces the volume of kilowatt-hours purchased from the grid, most utilities still charge a standard monthly grid connection fee (typically $10–$25). If your usage exceeds solar production in winter or at night without batteries, you also pay for that grid power.",
    },
    {
      question: "What happens on rainy or cloudy days?",
      answer:
        "Solar modules produce power even in diffuse light and overcast weather, generating between 20% and 40% of their peak clear-sky output. Net metering credits earned on sunny days offset overcast periods.",
    },
    {
      question: "Will solar panels damage my roof?",
      answer:
        "No. We use heavy-duty engineered flashing and weather-sealed mounts tested against 140+ mph winds. In fact, panels protect the underlying shingles from UV degradation and hail impact.",
    },
    {
      question: "How long does the entire installation process take?",
      answer:
        "Physical rooftop installation takes only 1 to 2 days. The overall timeline—from initial design and municipal permitting to utility inspection and Permission to Operate (PTO)—typically spans 4 to 6 weeks.",
    },
  ],
  defaultInterest: "Solar",
  defaultProperty: "Residential",
};

export default function ResidentialSolarPage() {
  return <UniversalServiceTemplate data={pageData} />;
}
