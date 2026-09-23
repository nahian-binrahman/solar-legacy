import type { Metadata } from "next";
import { UniversalServiceTemplate, type ServicePageData } from "@/components/service/universal-service-template";

export const metadata: Metadata = {
  title: "Solar + Battery | Generate It. Store It. Use It on Your Terms.",
  description:
    "Solar produces energy during the day. Battery storage saves that power for evenings, peak rates, and grid outages.",
};

const pageData: ServicePageData = {
  badge: "Integrated Photovoltaics & Storage",
  headline: "Generate It. Store It.",
  headlineHighlight: "Use It on Your Terms",
  oneSentenceExplanation:
    "Solar produces clean power during daylight hours; integrated battery storage reserves that power for evenings, peak utility rate tiers, and unexpected grid blackouts.",
  heroImage: "/tier-microgrid-bifacial.jpg",
  heroImageAlt: "Integrated solar plus battery storage microgrid",
  heroFloatingBadge: {
    title: "Dual Power Synergy",
    subtitle: "Automatic sub-cycle islanding & whole-home battery backup",
  },
  transparencyBanner:
    "Our goal is to design your system around your actual energy usage and reduce unnecessary dependence on utility electricity. Customers may still receive required utility charges and charges for any energy drawn from the grid.",
  problems: [
    {
      title: "The Evening Production Mismatch",
      desc: "Solar generates peak power at midday when families are away, but family energy consumption surges from 5 PM to 10 PM when the sun has set.",
    },
    {
      title: "Net Metering Degradation",
      desc: "Utilities across the country are cutting compensation for exported solar power, penalizing homeowners who do not have on-site storage.",
    },
    {
      title: "Solar Shuts Off During Blackouts",
      desc: "Standard solar systems without batteries are legally mandated to disconnect during grid outages to protect linemen, leaving you in the dark.",
    },
  ],
  solutions: [
    {
      title: "Midday Solar Self-Capture",
      desc: "Rather than selling clean power to the utility at pennies, automatically route 100% of midday surplus into your high-voltage batteries.",
    },
    {
      title: "Peak-Rate Time-of-Use Arbitrage",
      desc: "Intelligent software discharges batteries during expensive on-peak 4 PM–9 PM utility windows to avoid highest tariff rates.",
    },
    {
      title: "Sub-4ms Microgrid Islanding",
      desc: "When the grid drops, your home instantly severs connection and runs uninterrupted on battery and active solar power.",
    },
    {
      title: "Infinite Day-Night Recharge Cycle",
      desc: "Unlike fuel generators that run out of diesel, solar panels recharge your battery pack every morning as long as the outage persists.",
    },
    {
      title: "Automated Smart Load Shedding",
      desc: "Smart subpanels prioritize essentials (food, cooling, communications) to maximize battery runtime across multiple days.",
    },
  ],
  coreBenefits: [
    {
      title: "True Day & Night Energy Security",
      desc: "Enjoy quiet, seamless power 24/7 without worrying about sudden neighborhood storm blackouts.",
    },
    {
      title: "Maximum Financial Self-Sufficiency",
      desc: "Consume your own power on-site instead of purchasing electricity at inflated evening utility rates.",
    },
    {
      title: "Zero Noise, Fumes, or Refueling",
      desc: "Replace noisy, smelly gas generators with whisper-quiet, automated Lithium Iron Phosphate battery banks.",
    },
    {
      title: "Combined 30% Federal ITC Claim",
      desc: "Qualify for the 30% Federal Clean Energy Tax Credit on the total combined cost of solar plus storage equipment.",
    },
  ],
  bestFitProfiles: [
    {
      title: "Residences in Severe Weather Zones",
      desc: "Homeowners prone to storm outages, ice events, high-wind utility shutoffs, or grid instability.",
    },
    {
      title: "Utilities with Time-of-Use Tariffs",
      desc: "Properties facing punitive 4 PM–9 PM peak utility rate spikes where battery arbitrage provides maximum savings.",
    },
    {
      title: "Families with Critical Power Needs",
      desc: "Households reliant on home medical equipment, well water pumps, temperature-controlled medicines, or home data servers.",
    },
  ],
  processSteps: [
    { step: "01", title: "Circuit & Load Audit", desc: "We review your electrical panel, identifying critical backup circuits versus heavy non-essential loads." },
    { step: "02", title: "Storage & Solar Sizing", desc: "We calculate exact solar array kW and battery kWh capacity for balanced day-and-night cycling." },
    { step: "03", title: "Permits & Interconnect", desc: "Turnkey submission of all NFPA 855 fire clearances, municipal building permits, and utility approvals." },
    { step: "04", title: "Installation & Commissioning", desc: "Master electricians mount and test battery switchgear with full mobile app telemetry activation." },
  ],
  paymentOptions: [
    {
      title: "Combined Ownership",
      subtitle: "Capital Purchase or Low-Rate Loan",
      highlights: [
        "Claim 30% Federal Clean Energy Tax Credit on full system",
        "Full permanent equity added to home valuation",
        "Lowest lifetime levelized cost of energy (LCOE)",
        "Zero lease or subscription liens on property title",
      ],
      isFeatured: true,
    },
    {
      title: "Solar + Storage Subscription",
      subtitle: "Zero Hardware Purchase",
      highlights: [
        "$0 upfront equipment capital required",
        "Predictable monthly energy rate including battery resilience",
        "Free battery warranty replacement and monitoring included",
        "Simple transfer to prospective buyer upon home sale",
      ],
    },
    {
      title: "Solar Loan with Tax Credit Re-Amortization",
      subtitle: "$0 Down Financing",
      highlights: [
        "12 to 18-month interest-free window to apply 30% ITC",
        "Fixed low monthly payment replacing utility bill",
        "No prepayment penalties or hidden balloon terms",
      ],
    },
  ],
  warrantyPoints: [
    {
      title: "10 to 15-Year Battery Warranty",
      desc: "Guaranteed cycle life and minimum capacity retention backed by tier-1 global battery manufacturers.",
    },
    {
      title: "25-Year Solar Module Production",
      desc: "Monocrystalline panels guaranteed to retain at least 85%–90% original production after a quarter century.",
    },
    {
      title: "10-Year Workmanship & Roof Seal",
      desc: "Every electrical conduit penetration and roof flashing is backed by our master craftsman guarantee.",
    },
  ],
  faqs: [
    {
      question: "Does a solar + battery system guarantee a $0 electric bill?",
      answer:
        "No. Our engineering goal is to design your system around your actual energy consumption and reduce unnecessary dependence on utility power. Customers may still receive required baseline utility interconnection fees and charges for any electricity drawn from the grid during high-demand or extended cloudy periods.",
    },
    {
      question: "How fast does the battery switch on during a blackout?",
      answer:
        "Modern high-voltage LFP storage modules feature automated micro-grid islanding switchgear that engages in under 4 milliseconds—faster than a blink. Home computers, Wi-Fi routers, and clocks do not drop or reset.",
    },
    {
      question: "Can I choose between essential-circuit backup and whole-home backup?",
      answer:
        "Yes. During your engineering review, we assess your electrical panel. Essential load covers refrigeration, lighting, internet, and medical devices. Extended or whole-home systems include central AC, heat pumps, and EV charging.",
    },
    {
      question: "What happens if an outage lasts several consecutive days?",
      answer:
        "As long as daytime brings daylight, your solar modules will continuously power your house while simultaneously recharging the battery bank to 100% capacity before nightfall, providing indefinite off-grid autonomy.",
    },
  ],
  defaultInterest: "Both (Solar + Battery)",
  defaultProperty: "Residential",
};

export default function SolarAndBatteryPage() {
  return <UniversalServiceTemplate data={pageData} />;
}
