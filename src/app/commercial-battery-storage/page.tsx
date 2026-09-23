import type { Metadata } from "next";
import { UniversalServiceTemplate, type ServicePageData } from "@/components/service/universal-service-template";

export const metadata: Metadata = {
  title: "Commercial Battery Storage | Solar Legacy",
  description:
    "Store energy, shave peak-demand charges, and ensure mission-critical continuity with utility-grade commercial battery energy storage systems (BESS).",
};

const pageData: ServicePageData = {
  badge: "Commercial & Industrial BESS",
  headline: "Store Energy. Control Demand.",
  headlineHighlight: "Protect Operations",
  oneSentenceExplanation:
    "Commercial electricity rates are increasingly dictated by peak demand charges; Solar Legacy deploys utility-grade Battery Energy Storage Systems (BESS) that eliminate demand spikes and deliver unwavering operational resilience.",
  heroImage: "/battery-project.jpg",
  heroImageAlt: "Utility scale commercial battery storage enclosure",
  heroFloatingBadge: {
    title: "Peak Demand Mitigation",
    subtitle: "Automated sub-cycle dispatch & NFPA 855 certified thermal safety",
  },
  problems: [
    {
      title: "Extravagant 15-Minute Demand Charges",
      desc: "Instantaneous spikes in commercial machinery or HVAC startup can trigger peak-demand ratchet penalties that inflate bills for an entire year.",
    },
    {
      title: "Catastrophic Downtime Losses",
      desc: "Grid disruptions cause spoiled refrigerated inventory, stalled manufacturing assembly lines, dropped servers, and millions in unrecoverable losses.",
    },
    {
      title: "Volatile Time-of-Use Grid Tariffs",
      desc: "Utility pricing windows fluctuate wildly throughout the workday, leaving facilities vulnerable to unexpected price surges during high production shifts.",
    },
  ],
  solutions: [
    {
      title: "Automated Peak Demand Shaving",
      desc: "Batteries instantly inject power during facility demand spikes, flattening your utility meter reading below expensive surcharge thresholds.",
    },
    {
      title: "Sub-Cycle Critical Load Continuity",
      desc: "Instantaneous microgrid transfer keeps cleanrooms, refrigeration, IT servers, and automation lines energized without dropouts.",
    },
    {
      title: "AI Autonomous Dispatch Telemetry",
      desc: "Predictive algorithms monitor factory shifts, utility tariffs, and weather to discharge stored power at maximum financial value.",
    },
    {
      title: "Modular Utility-Scale Architecture",
      desc: "Containerized, liquid-cooled Lithium Iron Phosphate (LFP) systems scalable from 100 kWh to multi-megawatt-hour capacities.",
    },
    {
      title: "Generator Co-Optimization",
      desc: "Integrates seamlessly with existing diesel or natural gas backup generators to provide bridge power and eliminate fuel waste.",
    },
  ],
  coreBenefits: [
    {
      title: "Up to 50% Demand Charge Reduction",
      desc: "Compress the single most punitive line-item on your commercial electric utility bill.",
    },
    {
      title: "Mission-Critical Operational Security",
      desc: "Protect sensitive equipment, data centers, and cold-chain inventory against sudden grid collapse.",
    },
    {
      title: "30% Federal ITC & Bonus Depreciation",
      desc: "Commercial standalone battery systems qualify for the full 30% federal clean energy tax credit and MACRS.",
    },
    {
      title: "Grid Revenue & Demand Response",
      desc: "Earn cash incentives by participating in regional utility demand response and virtual power plant programs.",
    },
  ],
  bestFitProfiles: [
    {
      title: "Cold Storage & Food Processing",
      desc: "Facilities where even a brief power interruption or temperature spike risks catastrophic product spoilage.",
    },
    {
      title: "Manufacturing & Heavy Industrial",
      desc: "Plants with large electric motors, CNC machinery, or arc furnaces generating sharp 15-minute demand spikes.",
    },
    {
      title: "Healthcare, Biotech & Data Centers",
      desc: "High-consequence facilities requiring clean, uninterrupted power quality and instantaneous backup protection.",
    },
  ],
  processSteps: [
    { step: "01", title: "15-Minute Interval Audit", desc: "We ingest 12 months of utility interval meter data (814 EDI files) to map exact peak kilowatt spikes." },
    { step: "02", title: "Critical Circuit Isolation", desc: "Our master electrical team segments non-essential loads from mission-critical production circuits." },
    { step: "03", title: "Capacity Sizing & Modeling", desc: "Physics simulations determine exact kW discharge power and kWh storage capacity for maximum ROI." },
    { step: "04", title: "Deployment & Commissioning", desc: "Turnkey delivery, substation tie-in, NFPA 855 compliance, and SCADA telemetry activation." },
  ],
  paymentOptions: [
    {
      title: "Direct BESS Capital Purchase",
      subtitle: "Enterprise Balance Sheet Asset",
      highlights: [
        "Capture 100% of 30% Federal Investment Tax Credit",
        "Full MACRS accelerated depreciation tax savings",
        "Direct monetization of demand response utility revenue",
        "Maximum long-term net savings and ROI",
      ],
      isFeatured: true,
    },
    {
      title: "Storage-as-a-Service (SaaS)",
      subtitle: "$0 Upfront Capital Expense",
      highlights: [
        "Zero capital expenditure or debt on company books",
        "Shared-savings model based on proven demand reductions",
        "Complete maintenance, battery replacement & software managed",
        "Fixed monthly operational expense structure",
      ],
    },
    {
      title: "C-PACE Clean Energy Financing",
      subtitle: "Long-Term Fixed Financing",
      highlights: [
        "100% financing repaid via property tax assessments",
        "Non-recourse long-term terms up to 20–30 years",
        "Pass-through of costs to tenants in NNN commercial leases",
      ],
    },
  ],
  warrantyPoints: [
    {
      title: "10-Year Comprehensive Capacity Guarantee",
      desc: "Utility-grade performance warranties guaranteeing cell throughput and minimum energy retention.",
    },
    {
      title: "Active Liquid Thermal Regulation",
      desc: "Advanced HVAC chillers and thermal isolation prevent cell degradation and eliminate fire risks.",
    },
    {
      title: "24/7 Remote Monitoring & Dispatch",
      desc: "Automated firmware updates, thermal telemetry, and 24-hour rapid response field maintenance.",
    },
  ],
  faqs: [
    {
      question: "How do commercial batteries reduce demand charges?",
      answer:
        "Utilities measure your peak instantaneous power draw during rolling 15-minute intervals. When facility power draw approaches your target threshold, the BESS automatically discharges in milliseconds, capping your metered demand and reducing monthly demand charges by up to 50%.",
    },
    {
      question: "Can commercial storage replace diesel backup generators?",
      answer:
        "Commercial BESS can either replace or complement diesel generators. Unlike generators that require 10–30 seconds to spin up, batteries transfer sub-cycle without power blinks, eliminating server reboots and production halts.",
    },
    {
      question: "What safety standards and fire codes apply to commercial BESS?",
      answer:
        "All our commercial storage systems adhere strictly to UL 9540, UL 9540A large-scale fire testing, and NFPA 855 standards, utilizing inherently stable Lithium Iron Phosphate (LFP) chemistries with integrated suppression systems.",
    },
    {
      question: "How long is the payback period for commercial battery storage?",
      answer:
        "Payback typically ranges between 3 and 7 years, depending on your local utility demand tariff structure, interval profile, and monetization of the 30% Federal Investment Tax Credit.",
    },
  ],
  defaultInterest: "Battery",
  defaultProperty: "Commercial",
};

export default function CommercialBatteryStoragePage() {
  return <UniversalServiceTemplate data={pageData} />;
}
