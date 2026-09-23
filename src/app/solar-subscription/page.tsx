import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Container } from "@/components/core/container";
import { Section } from "@/components/core/section";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CustomEnergyPlanForm } from "@/components/service/custom-energy-plan-form";
import {
  ShieldCheck,
  Zap,
  ArrowRight,
  BadgePercent,
  CheckCircle2,
  AlertCircle,
  Home,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Solar Service Subscription | Solar Legacy",
  description:
    "Generate clean energy from your roof without purchasing equipment. Enjoy predictable monthly energy pricing, complete maintenance coverage, and zero capital outlay.",
};

export default function SolarSubscriptionPage() {
  const benefits = [
    {
      title: "$0 Upfront Equipment Expense",
      desc: "Begin generating solar electricity without taking out a solar loan or spending tens of thousands in cash upfront for panels and inverters.",
      icon: BadgePercent,
    },
    {
      title: "Predictable Energy Billing",
      desc: "Replace volatile utility electricity spikes with a transparent, predictable rate structure designed to deliver ongoing peace of mind.",
      icon: Zap,
    },
    {
      title: "100% Maintenance & Monitoring",
      desc: "Inverter replacements, system telemetry, insurance, and routine panel upkeep are fully managed and covered at zero out-of-pocket cost to you.",
      icon: ShieldCheck,
    },
    {
      title: "Hassle-Free Home Transfer",
      desc: "Selling your home? The subscription smoothly transfers to the prospective buyer, or you can exercise flexible buyout options.",
      icon: Home,
    },
  ];

  const contractTerms = [
    {
      term: "Term Length",
      detail: "Standard 20 to 25-year service agreement guaranteeing continuous generation, system health, and monitoring.",
    },
    {
      term: "Rate & Escalator Clarity",
      detail: "Select between fixed flat-rate agreements or modest predictable annual escalators (e.g. 0% to 2.9%) clearly stated upfront.",
    },
    {
      term: "System Buyout Rights",
      detail: "Homeowners typically retain the legal option to purchase the system at fair market value beginning after year 5.",
    },
    {
      term: "Home Sale Provisions",
      detail: "Dedicated Solar Legacy closing specialists assist your realtor with seamless transfer documentation to qualified home buyers.",
    },
    {
      term: "Performance Assurance",
      detail: "Includes guaranteed kWh production metrics; if the system underperforms verified benchmarks, you are credited.",
    },
  ];

  return (
    <div className="min-h-screen bg-forest-950 text-white selection:bg-solar-400 selection:text-forest-950">
      <Navbar />

      <main>
        {/* HERO */}
        <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-forest-950">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(217,119,6,0.18),rgba(255,255,255,0))]" />
          <div className="absolute inset-0 bg-noise opacity-20 pointer-events-none" />

          <Container size="xl" padding="normal" className="relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7 space-y-6 text-left">
                <Badge variant="gold" className="px-4 py-1.5 uppercase tracking-widest text-xs font-semibold">
                  Subscription & Power Service
                </Badge>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-medium tracking-tight text-white leading-[1.1]">
                  Get the Benefits of Solar Without{" "}
                  <span className="italic font-light text-solar-300">Purchasing the Equipment</span>
                </h1>
                <p className="text-base sm:text-lg text-beige-200/80 leading-relaxed max-w-2xl">
                  Not every property owner wants to manage equipment depreciation, inverter replacements, or substantial loan balances. Our Solar Service Subscription delivers clean, lower-cost electricity with comprehensive lifetime service and zero capital risk.
                </p>
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                  <Button asChild variant="solar" size="lg" className="rounded-xl px-8 py-6 font-bold shadow-xl shadow-solar-400/20 text-forest-950">
                    <a href="#options">
                      Check My Subscription Options
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </a>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="rounded-xl border-white/20 hover:bg-white/10 text-white">
                    <a href="#transparency">View Contract Transparency</a>
                  </Button>
                </div>
              </div>

              <div className="lg:col-span-5 relative">
                <div className="relative rounded-3xl overflow-hidden border border-solar-400/30 shadow-2xl aspect-[4/3] group">
                  <Image
                    src="/tier-obsidian-monolith.jpg"
                    alt="Modern residential solar rooftop installation"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-forest-950/20 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-forest-900/80 backdrop-blur-md border border-white/10 text-left">
                    <div className="text-xs uppercase tracking-widest text-solar-400 font-bold mb-1">Turnkey Solar Service</div>
                    <div className="text-sm font-medium text-white">All premium hardware, permits, monitoring & warranties included</div>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* WHY SUBSCRIPTION */}
        <Section background="dark" spacing="loose" className="relative border-t border-white/5">
          <Container size="xl" padding="normal">
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
              <Badge variant="glass" className="px-3.5 py-1 text-xs uppercase tracking-widest text-solar-300">
                Worry-Free Energy
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-serif font-medium text-white">
                Solar Freedom Without Equipment Headaches
              </h2>
              <p className="text-beige-200/70 text-sm sm:text-base">
                Similar to how you pay for high-speed internet or utilities, pay simply for the clean electricity your rooftop generates, while we assume 100% of the operational risk.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
              {benefits.map((b) => {
                const Icon = b.icon;
                return (
                  <div key={b.title} className="p-7 rounded-2xl bg-forest-900/50 border border-white/10 hover:border-solar-400/30 transition-all flex flex-col justify-between">
                    <div>
                      <div className="w-12 h-12 rounded-xl bg-solar-400/10 border border-solar-400/20 flex items-center justify-center text-solar-300 mb-6">
                        <Icon className="w-6 h-6" />
                      </div>
                      <h3 className="text-lg font-serif text-white font-medium mb-3">{b.title}</h3>
                      <p className="text-xs sm:text-sm text-beige-200/70 leading-relaxed">{b.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </Container>
        </Section>

        {/* MANDATORY CONTRACT TRANSPARENCY & DISCLOSURES */}
        <Section id="transparency" background="charcoal" spacing="loose" className="relative border-t border-white/5">
          <Container size="xl" padding="normal">
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
              <Badge variant="gold" className="px-3.5 py-1 text-xs uppercase tracking-widest">
                Consumer Transparency
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-serif font-medium text-white">
                Straightforward Terms with Zero Hidden Traps
              </h2>
              <p className="text-beige-200/70 text-sm sm:text-base">
                We believe trust is built on radical disclosure. Here is how our subscription agreements are structured from day one.
              </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-4 text-left">
              {contractTerms.map((item) => (
                <div key={item.term} className="p-6 rounded-2xl bg-forest-950/80 border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="sm:w-1/3">
                    <span className="font-serif text-base sm:text-lg font-medium text-solar-300">{item.term}</span>
                  </div>
                  <div className="sm:w-2/3">
                    <p className="text-xs sm:text-sm text-beige-200/80 leading-relaxed">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* MANDATORY DISCLOSURE CALLOUT */}
            <div className="max-w-4xl mx-auto mt-10 p-6 rounded-2xl bg-forest-900/60 border border-solar-400/30 flex items-start gap-4 text-left">
              <AlertCircle className="w-6 h-6 text-solar-400 shrink-0 mt-0.5" />
              <div className="space-y-1">
                <h4 className="text-sm font-semibold text-white">Important Program Disclosures</h4>
                <p className="text-xs text-beige-200/80 leading-relaxed">
                  Solar subscriptions are long-term service agreements (typically 20–25 years) rather than direct equipment purchases. Rate structures, escalators, and savings depend on local utility tariffs, roof orientation, and future utility rate increases. In rare cases where a home is sold, transfer is subject to buyer credit approval. Solar Legacy provides written rate comparisons prior to any commitment.
                </p>
              </div>
            </div>
          </Container>
        </Section>

        {/* SUBSCRIPTION VS OWNERSHIP QUICK COMPARE */}
        <Section background="dark" spacing="loose" className="relative border-t border-white/5">
          <Container size="xl" padding="normal">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 text-left">
              <div className="p-8 rounded-2xl bg-forest-900/60 border border-solar-400/30">
                <div className="text-xs uppercase font-mono tracking-widest text-solar-400 mb-2">Service Model</div>
                <h3 className="text-2xl font-serif text-white font-medium mb-4">Solar Subscription</h3>
                <ul className="space-y-3 mb-6">
                  {[
                    "$0 capital expense or upfront equipment costs",
                    "Predictable monthly rates with guaranteed generation",
                    "Inverters, panels & repairs 100% covered forever",
                    "Simpler qualification without taking on equipment debt",
                  ].map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-xs sm:text-sm text-beige-200/90">
                      <CheckCircle2 className="w-4 h-4 text-solar-400 shrink-0 mt-0.5" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <div className="text-xs text-beige-200/60">Ideal for homeowners seeking predictable energy savings with zero maintenance liability.</div>
              </div>

              <div className="p-8 rounded-2xl bg-forest-950/70 border border-white/10">
                <div className="text-xs uppercase font-mono tracking-widest text-beige-200/50 mb-2">Asset Model</div>
                <h3 className="text-2xl font-serif text-white font-medium mb-4">Direct Ownership</h3>
                <ul className="space-y-3 mb-6">
                  {[
                    "Direct claim of 30% Federal Clean Energy Tax Credit",
                    "Maximum long-term savings once equipment is fully amortized",
                    "Adds permanent equity to appraised home value",
                    "Financed with cash or dedicated low-interest solar loans",
                  ].map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-xs sm:text-sm text-beige-200/90">
                      <CheckCircle2 className="w-4 h-4 text-solar-400 shrink-0 mt-0.5" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <div className="text-xs text-beige-200/60">
                  Prefer direct asset ownership? Check out our{" "}
                  <Link href="/solar-ownership" className="text-solar-400 underline hover:text-solar-300">
                    Solar System Ownership
                  </Link>{" "}
                  program.
                </div>
              </div>
            </div>
          </Container>
        </Section>

        {/* FINAL 12-STEP LEAD FORM */}
        <Section id="options" background="charcoal" spacing="loose" className="relative border-t border-white/10">
          <Container size="xl" padding="normal">
            <CustomEnergyPlanForm defaultInterest="Solar" defaultProperty="Residential" />
          </Container>
        </Section>
      </main>

      <Footer />
    </div>
  );
}
