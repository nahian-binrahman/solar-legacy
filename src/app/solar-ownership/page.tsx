import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Container } from "@/components/core/container";
import { Section } from "@/components/core/section";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  ShieldCheck,
  ArrowRight,
  Coins,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Solar System Ownership | Solar Legacy",
  description:
    "Direct system ownership maximizes your lifetime financial return, allows you to claim the 30% Federal Clean Energy Tax Credit, and builds permanent property equity.",
};

export default function SolarOwnershipPage() {
  const financingPaths = [
    {
      title: "Cash Purchase",
      subtitle: "Highest lifetime return on investment",
      bullets: [
        "100% elimination of finance fees and interest charges",
        "Fastest mathematical payback period (typically 5–8 years)",
        "Direct claim of 30% Federal Clean Energy Tax Credit in year one",
        "Clear, unencumbered property title with zero liens",
      ],
      cta: "Evaluate Cash Payback",
    },
    {
      title: "Solar Loan Financing",
      subtitle: "$0 down with predictable monthly terms",
      bullets: [
        "Keep your cash in other investments while paying over time",
        "Predictable fixed monthly payment designed to replace utility bills",
        "Apply your 30% federal tax credit to re-amortize down your loan balance",
        "No prepayment penalties—pay off at any time without fees",
      ],
      cta: "Explore Loan Rates",
    },
  ];

  const warrantyPillars = [
    {
      title: "25-Year Linear Power Output",
      desc: "Guarantees that your tier-1 monocrystalline panels retain at least 85%–90% of original factory rated output after a quarter century.",
    },
    {
      title: "25-Year Inverter & Hardware",
      desc: "Comprehensive warranty covering microinverters, central optimizers, and mounting hardware against manufacturing defects.",
    },
    {
      title: "10-Year Watertight Penetration",
      desc: "Our master roofers guarantee that every roof flashing and penetration remains 100% leak-proof and structurally sound.",
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
                  Capital Ownership & Equity
                </Badge>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-medium tracking-tight text-white leading-[1.1]">
                  Own Your Energy System and Its{" "}
                  <span className="italic font-light text-solar-300">Long-Term Value</span>
                </h1>
                <p className="text-base sm:text-lg text-beige-200/80 leading-relaxed max-w-2xl">
                  Purchasing your solar energy system offers the greatest long-term financial returns. As the direct owner of the hardware, you capture 100% of federal tax incentives, build equity into your real estate, and eliminate utility bills once the system pays for itself.
                </p>
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                  <Button asChild variant="solar" size="lg" className="rounded-xl px-8 py-6 font-bold shadow-xl shadow-solar-400/20 text-forest-950">
                    <a href="#comparison">
                      Compare Ownership Options
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </a>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="rounded-xl border-white/20 hover:bg-white/10 text-white">
                    <a href="#incentives">Tax Credit Disclosures</a>
                  </Button>
                </div>
              </div>

              <div className="lg:col-span-5 relative">
                <div className="relative rounded-3xl overflow-hidden border border-solar-400/30 shadow-2xl aspect-[4/3] group">
                  <Image
                    src="/project-hilltop-residence.jpg"
                    alt="Luxury architectural solar system with full ownership"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-forest-950/20 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-forest-900/80 backdrop-blur-md border border-white/10 text-left">
                    <div className="text-xs uppercase tracking-widest text-solar-400 font-bold mb-1">Permanent Home Asset</div>
                    <div className="text-sm font-medium text-white">Direct asset ownership with zero lease obligations upon resale</div>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* CASH VS FINANCING COMPARISON */}
        <Section id="comparison" background="dark" spacing="loose" className="relative border-t border-white/5">
          <Container size="xl" padding="normal">
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
              <Badge variant="glass" className="px-3.5 py-1 text-xs uppercase tracking-widest text-solar-300">
                Purchase Pathways
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-serif font-medium text-white">
                Cash Purchase vs Low-Rate Solar Financing
              </h2>
              <p className="text-beige-200/70 text-sm sm:text-base">
                Both paths provide full system ownership and tax credit eligibility. Choose based on your investment philosophy and available liquidity.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
              {financingPaths.map((path) => (
                <div key={path.title} className="p-8 sm:p-10 rounded-3xl bg-forest-900/60 border border-solar-400/20 flex flex-col justify-between">
                  <div>
                    <div className="text-xs uppercase tracking-widest font-mono text-solar-400 mb-2">{path.subtitle}</div>
                    <h3 className="text-2xl sm:text-3xl font-serif text-white font-medium mb-6">{path.title}</h3>
                    <ul className="space-y-4 mb-8">
                      {path.bullets.map((b) => (
                        <li key={b} className="flex items-start gap-3 text-sm text-beige-200/90">
                          <CheckCircle2 className="w-5 h-5 text-solar-400 shrink-0 mt-0.5" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Button asChild variant="outline" size="default" className="w-full rounded-xl border-white/20 text-white hover:bg-white/10">
                    <Link href="/#quote">{path.cta}</Link>
                  </Button>
                </div>
              ))}
            </div>
          </Container>
        </Section>

        {/* INCENTIVES & TAX ELIGIBILITY DISCLOSURE */}
        <Section id="incentives" background="charcoal" spacing="loose" className="relative border-t border-white/5">
          <Container size="xl" padding="normal">
            <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
              <Badge variant="gold" className="px-3.5 py-1 text-xs uppercase tracking-widest">
                Federal & State Incentives
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-serif font-medium text-white">
                The 30% Federal Clean Energy Tax Credit (ITC)
              </h2>
              <p className="text-beige-200/70 text-sm sm:text-base">
                Under the federal Inflation Reduction Act, qualified homeowners who purchase their solar energy systems may claim a dollar-for-dollar tax credit equal to 30% of their total project cost.
              </p>
            </div>

            <div className="max-w-4xl mx-auto p-8 rounded-3xl bg-forest-950/90 border border-solar-400/30 text-left space-y-6">
              <div className="flex items-start gap-4">
                <AlertCircle className="w-7 h-7 text-solar-400 shrink-0 mt-1" />
                <div className="space-y-3">
                  <h4 className="text-base font-semibold text-white">Mandatory Incentive & Tax Eligibility Disclosure</h4>
                  <p className="text-xs sm:text-sm text-beige-200/80 leading-relaxed">
                    Federal Investment Tax Credits (Section 25D) and local state rebates depend entirely upon existing tax laws and your individual federal tax liability. A tax credit is not a cash rebate or guarantee from Solar Legacy. Homeowners must have sufficient tax liability to monetize the credit (unused credits may roll over in accordance with IRS rules). Solar Legacy does not provide formal tax or legal advice; please consult a qualified CPA or tax advisor regarding your specific eligibility.
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </Section>

        {/* 25-YEAR WARRANTIES */}
        <Section background="dark" spacing="loose" className="relative border-t border-white/5">
          <Container size="xl" padding="normal">
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
              <Badge variant="glass" className="px-3.5 py-1 text-xs uppercase tracking-widest text-solar-300">
                Long-Term Protection
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-serif font-medium text-white">
                Comprehensive 25-Year Asset Protection
              </h2>
              <p className="text-beige-200/70 text-sm sm:text-base">
                When you own your equipment with Solar Legacy, your investment is safeguarded by industry-leading warranties backed directly by premier tier-1 global manufacturers.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
              {warrantyPillars.map((w) => (
                <div key={w.title} className="p-8 rounded-2xl bg-forest-900/50 border border-white/10 flex flex-col justify-between">
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-solar-400/10 border border-solar-400/20 flex items-center justify-center text-solar-300 mb-6">
                      <ShieldCheck className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-serif text-white font-medium mb-3">{w.title}</h3>
                    <p className="text-xs sm:text-sm text-beige-200/70 leading-relaxed">{w.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </Section>

        {/* CTA */}
        <Section background="charcoal" spacing="loose" className="relative border-t border-white/10">
          <Container size="lg" padding="normal">
            <div className="p-10 sm:p-14 rounded-3xl bg-gradient-to-br from-forest-900 via-forest-950 to-charcoal-900 border border-solar-400/30 text-center space-y-6 shadow-2xl relative overflow-hidden">
              <div className="w-16 h-16 rounded-2xl bg-solar-400/10 border border-solar-400/30 flex items-center justify-center text-solar-400 mx-auto">
                <Coins className="w-8 h-8" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-serif text-white font-medium">
                Compare Ownership Options
              </h2>
              <p className="text-beige-200/80 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
                Receive an architectural layout of your rooftop showing exact module count, estimated 25-year kWh yield, 30% tax credit calculations, and side-by-side cash vs loan scenarios.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                <Button asChild variant="solar" size="lg" className="rounded-xl px-8 font-bold text-forest-950 shadow-xl shadow-solar-400/20">
                  <Link href="/#quote">
                    Request Ownership Proposal
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
                <a
                  href="tel:+18005557652"
                  className="text-sm font-semibold tracking-wide text-beige-200 hover:text-solar-300 py-3 px-4"
                >
                  Direct Advisory: +1 (800) 555-7652
                </a>
              </div>
            </div>
          </Container>
        </Section>
      </main>

      <Footer />
    </div>
  );
}
