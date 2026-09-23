import type { Metadata } from "next";
import Image from "next/image";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Container } from "@/components/core/container";
import { Section } from "@/components/core/section";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CustomEnergyPlanForm } from "@/components/service/custom-energy-plan-form";
import {
  ShieldCheck,
  CheckCircle2,
  XCircle,
  ArrowRight,
  Award,
  Layers,
  Zap,
  Cpu,
  Compass,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Why Solar Legacy | The Standard in Luxury Architectural Solar",
  description:
    "Discover why homeowners and enterprise architects choose Solar Legacy for precision aesthetics, tier-1 engineering, and radical transparency.",
};

export default function WhySolarLegacyPage() {
  const pillars = [
    {
      title: "Architectural Harmony",
      desc: "We believe solar should enhance property value, not compromise aesthetics. We use all-black monocrystalline modules with concealed conduit and customized flashing that blend seamlessly into your roofline.",
      icon: Layers,
    },
    {
      title: "Master Electrician Craftsmanship",
      desc: "No outsourced gig-economy subcontractors. Every installation is engineered and built by certified in-house master electricians with decades of high-voltage experience.",
      icon: Award,
    },
    {
      title: "Radical Transparency",
      desc: "Zero deceptive sales gimmicks or false zero-bill guarantees. We provide physics-based production simulations and honest disclosure of utility interconnect rules and rate escalators.",
      icon: ShieldCheck,
    },
    {
      title: "24/7 Autonomous Telemetry",
      desc: "Our proactive operations desk monitors your array down to individual module microinverters. If a module underperforms, our team is dispatched before you even notice.",
      icon: Cpu,
    },
    {
      title: "Triple 25-Year Protection",
      desc: "Industry-leading warranties covering 25-year panel linear power production, 25-year inverter hardware, and a 10-year leak-proof roof penetration guarantee.",
      icon: Zap,
    },
    {
      title: "Tailored Financing & Programs",
      desc: "Whether you prefer direct ownership to monetize the 30% federal clean energy tax credit or a $0-down subscription with zero maintenance headaches, we design around your balance sheet.",
      icon: Compass,
    },
  ];

  const comparison = [
    {
      feature: "System Aesthetics & Racking",
      legacy: "All-black tier-1 panels, recessed mounts & concealed conduit",
      others: "Mismatched silver frames with exposed exterior conduit",
    },
    {
      feature: "Installation Personnel",
      legacy: "Full-time, licensed in-house master technicians",
      others: "Rotating low-bid independent subcontractors",
    },
    {
      feature: "Energy Production Modeling",
      legacy: "Physics-based LiDAR satellite shade & irradiance audit",
      others: "Inflated sales estimates ignoring real roof shading",
    },
    {
      feature: "Watertight Roof Warranty",
      legacy: "10-Year comprehensive leak-free penetration guarantee",
      others: "Standard 1-year installer warranty with roof exclusions",
    },
    {
      feature: "Monitoring & Maintenance",
      legacy: "24/7 automated telemetry with proactive service alerts",
      others: "Passive app; homeowner must identify failed components",
    },
    {
      feature: "Contract Transparency",
      legacy: "Clear disclosure of utility fees, buyout terms & warranties",
      others: "Hidden annual escalators and confusing transfer rules",
    },
  ];

  return (
    <div className="min-h-screen bg-forest-950 text-white selection:bg-solar-400 selection:text-forest-950 font-sans relative">
      {/* =========================================================================
          GLOBAL LOW-OPACITY RELEVANT BACKGROUND (Luxury Solar Estate Villa)
          Clearly visible across the entire page, fading to zero behind text
         ========================================================================= */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden select-none">
        <Image
          src="/bg-why-solar.jpg"
          alt="Luxury modern architectural solar estate"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-30 brightness-115 contrast-110"
        />
        {/* Soft base dark overlay */}
        <div className="absolute inset-0 bg-forest-950/50" />
      </div>

      <Navbar />

      <main className="relative z-10">
        {/* =========================================================================
            HERO SECTION with Radial Mask (Opacity goes close to zero behind text)
           ========================================================================= */}
        <section className="relative pt-36 pb-20 md:pt-44 md:pb-28 overflow-hidden">
          {/* Radial mask that brings image opacity to ZERO directly behind the text */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse 70% 60% at 50% 48%, rgba(4,20,14,0.98) 0%, rgba(4,20,14,0.85) 45%, transparent 100%)",
            }}
          />
          {/* Subtle vertical luxury gradient transitions */}
          <div className="absolute inset-0 bg-gradient-to-b from-forest-950/80 via-transparent to-forest-950 pointer-events-none" />
          {/* Ambient Solar Gold Accent Glow */}
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[550px] sm:w-[750px] h-[300px] sm:h-[400px] bg-solar-400/10 blur-[140px] rounded-full pointer-events-none z-1" />

          {/* Hero Content - Pristine Contrast on Zero-Opacity Cleared Area */}
          <Container size="xl" padding="normal" className="relative z-10 text-center max-w-4xl mx-auto space-y-6">
            <Badge
              variant="glass"
              size="default"
              dot
              dotColor="solar"
              pulse
              className="border-solar-400/40 text-beige-100 px-3.5 sm:px-4 py-1.5 shadow-lg bg-forest-950/80 backdrop-blur-md text-xs mb-4 sm:mb-5"
            >
              The Solar Legacy Standard
            </Badge>

            <h1 className="font-heading font-extrabold text-[2.15rem] xs:text-4xl sm:text-6xl lg:text-7xl tracking-tight text-white leading-[1.12] mb-5 sm:mb-6">
              Architectural Precision. Tier-1 Engineering.{" "}
              <span className="solar-gradient-text block sm:inline">
                Unwavering Trust.
              </span>
            </h1>

            <p className="text-sm sm:text-xl text-beige-200 font-sans max-w-2xl mx-auto leading-relaxed mb-7 sm:mb-9 font-light">
              We started Solar Legacy because the solar industry was crowded with aggressive salesmen and shoddy subcontracted installations. We set a new benchmark for architectural beauty, technical integrity, and homeowner trust.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-4">
              <Button
                variant="solar"
                size="lg"
                className="font-bold text-forest-950 shadow-xl shadow-solar-400/25 group cursor-pointer h-12 sm:h-14 px-8 text-sm sm:text-base justify-center rounded-xl"
                asChild
              >
                <a href="#plan-form">
                  <span>Build My Custom Energy Plan</span>
                  <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
              <Button
                asChild
                variant="forestOutline"
                size="lg"
                className="border-white/20 text-beige-100 hover:bg-white/10 hover:text-white cursor-pointer backdrop-blur-sm h-12 sm:h-14 px-8 text-sm sm:text-base justify-center rounded-xl"
              >
                <a href="#comparison">Compare Us to Standard Installers</a>
              </Button>
            </div>
          </Container>
        </section>

        {/* =========================================================================
            6 CORE FOUNDATIONS PILLARS
           ========================================================================= */}
        <Section background="transparent" spacing="loose" className="relative border-t border-white/5 overflow-hidden">
          {/* Radial zero-opacity mask behind section title & description */}
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-72 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse 70% 60% at 50% 30%, rgba(4,20,14,0.98) 0%, rgba(4,20,14,0.8) 50%, transparent 100%)",
            }}
          />
          {/* Subtle Ambient Lighting */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[450px] bg-solar-400/5 blur-[160px] rounded-full pointer-events-none z-1" />

          <Container size="xl" padding="normal" className="relative z-10">
            {/* Header */}
            <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
              <Badge variant="glass" size="sm" dot dotColor="solar" pulse className="mb-3 text-solar-300 border-solar-400/30">
                Core Foundations
              </Badge>
              <h2 className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl leading-[1.2] text-white tracking-tight">
                Engineered Differently <span className="solar-gradient-text">From The Ground Up</span>
              </h2>
              <p className="text-sm sm:text-base text-beige-300 mt-3 sm:mt-4 leading-relaxed font-sans max-w-2xl mx-auto">
                Discover the engineering standards that make Solar Legacy the preferred partner for architects, luxury builders, and discerning property owners.
              </p>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 text-left">
              {pillars.map((p) => {
                const Icon = p.icon;
                return (
                  <div
                    key={p.title}
                    className="p-7 sm:p-8 rounded-2xl bg-forest-900/60 backdrop-blur-xl border border-white/10 hover:border-solar-400/50 shadow-xl hover:shadow-2xl hover:shadow-solar-400/10 transition-all duration-300 flex flex-col justify-between group"
                  >
                    <div>
                      {/* Icon Box */}
                      <div className="w-12 h-12 rounded-xl bg-forest-950/80 border border-solar-400/30 flex items-center justify-center text-solar-400 group-hover:bg-solar-400 group-hover:text-forest-950 transition-colors duration-300 shadow-sm mb-6">
                        <Icon className="w-6 h-6" />
                      </div>

                      {/* Title & Desc */}
                      <h3 className="font-heading font-bold text-xl text-white mb-3 group-hover:text-solar-300 transition-colors">
                        {p.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-beige-300 leading-relaxed font-sans">
                        {p.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </Container>
        </Section>

        {/* =========================================================================
            COMPARISON TABLE: SOLAR LEGACY VS VOLUME INSTALLERS
           ========================================================================= */}
        <Section id="comparison" background="transparent" spacing="loose" className="relative border-t border-white/5 overflow-hidden">
          {/* Radial zero-opacity mask behind comparison table header */}
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-72 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse 70% 60% at 50% 30%, rgba(4,20,14,0.98) 0%, rgba(4,20,14,0.8) 50%, transparent 100%)",
            }}
          />
          <Container size="xl" padding="normal" className="relative z-10">
            {/* Header */}
            <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
              <Badge variant="glass" size="sm" dot dotColor="solar" pulse className="mb-3 text-solar-300 border-solar-400/30">
                Side-By-Side Comparison
              </Badge>
              <h2 className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl leading-[1.2] text-white tracking-tight">
                Solar Legacy vs <span className="solar-gradient-text">Volume Installers</span>
              </h2>
              <p className="text-sm sm:text-base text-beige-300 mt-3 sm:mt-4 leading-relaxed font-sans max-w-2xl mx-auto">
                Why standard solar contractors cut corners, and how our premium engineering model protects your home for 25+ years.
              </p>
            </div>

            {/* Premium Table Card */}
            <div className="max-w-4xl mx-auto rounded-3xl overflow-hidden border border-white/10 bg-forest-950/90 backdrop-blur-xl shadow-2xl text-left">
              <div className="grid grid-cols-12 bg-forest-900/90 p-4 sm:p-6 border-b border-white/10 text-xs sm:text-sm font-heading font-bold text-white tracking-wide">
                <div className="col-span-4 sm:col-span-4">Evaluation Standard</div>
                <div className="col-span-4 sm:col-span-4 text-solar-300 flex items-center gap-1.5">
                  <span>Solar Legacy</span>
                  <Badge variant="glass" size="sm" className="hidden sm:inline-flex text-[10px] text-solar-300 border-solar-400/40 py-0 px-2">
                    Standard
                  </Badge>
                </div>
                <div className="col-span-4 sm:col-span-4 text-beige-400">Standard Volume Installers</div>
              </div>

              <div className="divide-y divide-white/5">
                {comparison.map((item, idx) => (
                  <div
                    key={idx}
                    className="grid grid-cols-12 p-4 sm:p-6 text-xs sm:text-sm items-center hover:bg-forest-900/40 transition-colors"
                  >
                    <div className="col-span-4 font-heading font-semibold text-white pr-2">
                      {item.feature}
                    </div>
                    <div className="col-span-4 text-solar-200/95 flex items-start gap-2 pr-2 font-sans">
                      <CheckCircle2 className="w-4 h-4 text-solar-400 shrink-0 mt-0.5" />
                      <span>{item.legacy}</span>
                    </div>
                    <div className="col-span-4 text-beige-400/80 flex items-start gap-2 font-sans">
                      <XCircle className="w-4 h-4 text-red-400/70 shrink-0 mt-0.5" />
                      <span>{item.others}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </Section>

        {/* =========================================================================
            FINAL LEAD CONVERSION FORM
           ========================================================================= */}
        <Section id="plan-form" background="dark" spacing="loose" className="relative border-t border-white/10">
          <Container size="xl" padding="normal">
            <CustomEnergyPlanForm defaultInterest="Both (Solar + Battery)" defaultProperty="Residential" />
          </Container>
        </Section>
      </main>

      <Footer />
    </div>
  );
}
