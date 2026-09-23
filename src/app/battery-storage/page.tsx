import type { Metadata } from "next";
import { UniversalServiceTemplate, type ServicePageData } from "@/components/service/universal-service-template";

export const metadata: Metadata = {
  title: "Battery-Only Systems | Backup Power Without Starting Over",
  description:
    "Already have solar or only need energy storage? Solar Legacy offers AC-coupled battery-only solutions tailored to your home and backup priorities.",
};

const pageData: ServicePageData = {
  badge: "AC-Coupled Storage Retrofits",
  headline: "Backup Power Without",
  headlineHighlight: "Starting Over",
  oneSentenceExplanation:
    "Already have solar panels, or simply need storm resilience without adding modules? Our AC-coupled battery systems integrate seamlessly with any existing electrical setup.",
  heroImage: "/battery-project.jpg",
  heroImageAlt: "AC-coupled residential battery storage wall unit",
  heroFloatingBadge: {
    title: "Universal AC Coupling",
    subtitle: "Compatible with Enphase, SolarEdge, Tesla & legacy string inverters",
  },
  problems: [
    {
      title: "Solar Shuts Off During Blackouts",
      desc: "Most homeowners discover too late that grid-tied solar panels produce zero power during a blackout without an active battery buffer.",
    },
    {
      title: "Incompatible Legacy Equipment",
      desc: "Many installers demand that you rip out your existing inverter to add batteries, creating tens of thousands in needless expense.",
    },
    {
      title: "Vulnerable Emergency Fuel Supplies",
      desc: "Gas generators require manual pull-starts, fuel stabilizer, periodic oil changes, and access to functioning gas stations during hurricanes.",
    },
  ],
  solutions: [
    {
      title: "Universal AC-Coupled Integration",
      desc: "Our battery systems attach directly to your existing AC main service panel—no need to touch or void warranties on your existing solar panels.",
    },
    {
      title: "Automated Instant Islanding",
      desc: "The microgrid switch detects loss of grid power and transfers your prioritized loads in less than 16 milliseconds.",
    },
    {
      title: "Intelligent Time-of-Use Arbitrage",
      desc: "Automatically charges from cheap off-peak power (or surplus daytime solar) and discharges during expensive 4 PM–9 PM peak utility hours.",
    },
    {
      title: "Modular Expandable Capacity",
      desc: "Start with a single 10–13.5 kWh unit and expand storage capacity as your household adds electric vehicles or heat pumps.",
    },
    {
      title: "Smartphone Telemetry Dashboard",
      desc: "Real-time visibility into battery state of charge, home consumption, and reserve backup duration from any iOS or Android device.",
    },
  ],
  coreBenefits: [
    {
      title: "True Blackout Security",
      desc: "Keep refrigeration, internet, lighting, and medical devices powered through severe weather storms.",
    },
    {
      title: "Preserves Existing Solar Investments",
      desc: "Zero need to replace existing modules, optimizers, or inverters already on your roof.",
    },
    {
      title: "Whisper-Quiet Operation",
      desc: "No engine noise, exhaust fumes, or carbon monoxide dangers associated with mechanical generators.",
    },
    {
      title: "Standalone 30% Federal ITC Eligible",
      desc: "Under the Inflation Reduction Act, standalone battery systems qualify for the 30% federal clean energy tax credit.",
    },
  ],
  bestFitProfiles: [
    {
      title: "Existing Solar Homeowners",
      desc: "Families with working rooftop solar looking to unlock blackout backup and eliminate low net metering credit rates.",
    },
    {
      title: "Homes in Outage-Prone Regions",
      desc: "Residences prone to frequent winter ice storms, coastal winds, or utility Public Safety Power Shutoffs (PSPS).",
    },
    {
      title: "Critical Medical Device Continuity",
      desc: "Individuals requiring uninterruptible electrical power for oxygen concentrators, CPAPs, or refrigerated biologics.",
    },
  ],
  processSteps: [
    { step: "01", title: "Electrical Service Audit", desc: "We evaluate your main service panel, inverter configuration, and breaker capacity." },
    { step: "02", title: "Backup Circuit Selection", desc: "Select targeted essential circuits or prepare for whole-home smart panel backup." },
    { step: "03", title: "Permits & Interconnect", desc: "We secure all required NFPA 855 municipal fire clearances and utility interconnect sign-offs." },
    { step: "04", title: "Mounting & Commissioning", desc: "Technicians mount the battery, install the automatic transfer switch, and test islanding." },
  ],
  paymentOptions: [
    {
      title: "Direct Battery Ownership",
      subtitle: "Cash Purchase or Clean Energy Loan",
      highlights: [
        "Claim 30% Federal Clean Energy Tax Credit on equipment & install",
        "Adds permanent appraised resilience value to your home",
        "Zero ongoing monthly lease fees or contractual encumbrances",
        "Full unencumbered equipment ownership",
      ],
      isFeatured: true,
    },
    {
      title: "Battery Backup Subscription",
      subtitle: "Zero Equipment Purchase",
      highlights: [
        "$0 upfront equipment capital expense",
        "Predictable monthly payment covering complete backup service",
        "Free manufacturer warranty replacement and maintenance forever",
        "Easy transfer to the home buyer if you ever relocate",
      ],
    },
    {
      title: "Low-Rate Energy Storage Financing",
      subtitle: "$0 Down Financing",
      highlights: [
        "Flexible 5 to 15-year fixed financing terms",
        "Apply your 30% federal tax credit to lower principal",
        "No prepayment penalties or early payoff charges",
      ],
    },
  ],
  warrantyPoints: [
    {
      title: "10 to 15-Year Manufacturer Warranty",
      desc: "Guaranteed minimum 70% energy capacity retention through 10,000+ full charge/discharge cycles.",
    },
    {
      title: "Safe LFP Chemistry",
      desc: "Lithium Iron Phosphate (LFP) chemistry ensures the highest thermal stability and fire safety ratings.",
    },
    {
      title: "Solar Legacy Installation Guarantee",
      desc: "10-year comprehensive warranty on all electrical balance of system hardware and conduit runs.",
    },
  ],
  faqs: [
    {
      question: "Can I install a battery if I don't have solar panels?",
      answer:
        "Yes! Under current regulations and the Inflation Reduction Act, standalone batteries can be installed without solar panels and charged directly from the utility grid during off-peak hours, qualifying for the 30% federal tax credit.",
    },
    {
      question: "Will this battery work with my existing solar system?",
      answer:
        "Yes. We specialize in AC-coupled battery architecture, which connects on the AC side of your home's main panel. This makes it universally compatible with Enphase microinverters, SolarEdge optimizers, Tesla inverters, SMA, and older string systems.",
    },
    {
      question: "How long will a single battery power my home during an outage?",
      answer:
        "A typical 10–13.5 kWh battery provides 18 to 24+ hours of runtime for essential loads (refrigeration, Wi-Fi, lighting, medical devices). When paired with rooftop solar, the battery can recharge daily and run indefinitely.",
    },
    {
      question: "Where is the battery installed physically?",
      answer:
        "Batteries can be mounted either indoors (in a garage, utility room, or basement) or outdoors on an exterior wall, provided local municipal setbacks and temperature ratings are observed.",
    },
  ],
  defaultInterest: "Battery",
  defaultProperty: "Residential",
};

export default function BatteryStoragePage() {
  return <UniversalServiceTemplate data={pageData} />;
}
