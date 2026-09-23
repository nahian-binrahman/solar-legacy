import type { Metadata } from "next";
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
    <div className="min-h-screen bg-forest-950 text-white selection:bg-solar-400 selection:text-forest-950">
      <Navbar />

      <main>
        {/* HERO */}
        <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-forest-950">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(217,119,6,0.18),rgba(255,255,255,0))]" />
          <div className="absolute inset-0 bg-noise opacity-20 pointer-events-none" />

          <Container size="xl" padding="normal" className="relative z-10 text-center max-w-4xl mx-auto space-y-6">
            <Badge variant="gold" className="px-4 py-1.5 uppercase tracking-widest text-xs font-semibold">
              The Solar Legacy Standard
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-medium tracking-tight text-white leading-[1.1]">
              Architectural Precision. Tier-1 Engineering.{" "}
              <span className="italic font-light text-solar-300">Unwavering Trust.</span>
            </h1>
            <p className="text-base sm:text-lg text-beige-200/80 leading-relaxed max-w-2xl mx-auto">
              We started Solar Legacy because the solar industry was crowded with aggressive salesmen and shoddy subcontracted installations. We set a new benchmark for architectural beauty, technical integrity, and homeowner trust.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
              <Button
                variant="solar"
                size="lg"
                className="rounded-xl px-8 py-6 font-bold shadow-xl shadow-solar-400/20 text-forest-950"
                asChild
              >
                <a href="#plan-form">
                  <span>Build My Custom Energy Plan</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-xl border-white/20 hover:bg-white/10 text-white">
                <a href="#comparison">Compare Us to Standard Installers</a>
              </Button>
            </div>
          </Container>
        </section>

        {/* 6 PILLARS */}
        <Section background="dark" spacing="loose" className="relative border-t border-white/5">
          <Container size="xl" padding="normal">
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
              <Badge variant="glass" className="px-3.5 py-1 text-xs uppercase tracking-widest text-solar-300">
                Core Foundations
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-serif font-medium text-white">
                Engineered Differently From The Ground Up
              </h2>
              <p className="text-beige-200/70 text-sm sm:text-base">
                Discover the engineering standards that make Solar Legacy the preferred partner for architects, luxury builders, and discerning property owners.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
              {pillars.map((p) => {
                const Icon = p.icon;
                return (
                  <div
                    key={p.title}
                    className="p-8 rounded-3xl bg-forest-900/60 border border-white/10 hover:border-solar-400/40 transition-all flex flex-col justify-between group"
                  >
                    <div>
                      <div className="w-12 h-12 rounded-2xl bg-solar-400/10 border border-solar-400/20 flex items-center justify-center text-solar-300 mb-6 group-hover:bg-solar-400 group-hover:text-forest-950 transition-colors">
                        <Icon className="w-6 h-6" />
                      </div>
                      <h3 className="text-xl font-serif text-white font-medium mb-3">{p.title}</h3>
                      <p className="text-xs sm:text-sm text-beige-200/75 leading-relaxed">{p.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </Container>
        </Section>

        {/* COMPARISON TABLE */}
        <Section id="comparison" background="charcoal" spacing="loose" className="relative border-t border-white/5">
          <Container size="xl" padding="normal">
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
              <Badge variant="gold" className="px-3.5 py-1 text-xs uppercase tracking-widest">
                Side-By-Side Comparison
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-serif font-medium text-white">
                Solar Legacy vs Volume Installers
              </h2>
              <p className="text-beige-200/70 text-sm sm:text-base">
                Why standard solar contractors cut corners, and how our premium engineering model protects your home for 25+ years.
              </p>
            </div>

            <div className="max-w-4xl mx-auto rounded-3xl overflow-hidden border border-white/10 bg-forest-950/90 shadow-2xl text-left">
              <div className="grid grid-cols-12 bg-forest-900/90 p-4 sm:p-6 border-b border-white/10 text-xs sm:text-sm font-semibold text-white">
                <div className="col-span-4 sm:col-span-4">Evaluation Standard</div>
                <div className="col-span-4 sm:col-span-4 text-solar-300">Solar Legacy</div>
                <div className="col-span-4 sm:col-span-4 text-beige-400">Standard Volume Installers</div>
              </div>

              <div className="divide-y divide-white/5">
                {comparison.map((item, idx) => (
                  <div key={idx} className="grid grid-cols-12 p-4 sm:p-6 text-xs sm:text-sm items-center hover:bg-forest-900/30 transition-colors">
                    <div className="col-span-4 font-serif font-medium text-white pr-2">
                      {item.feature}
                    </div>
                    <div className="col-span-4 text-solar-200/95 flex items-start gap-2 pr-2">
                      <CheckCircle2 className="w-4 h-4 text-solar-400 shrink-0 mt-0.5" />
                      <span>{item.legacy}</span>
                    </div>
                    <div className="col-span-4 text-beige-400/80 flex items-start gap-2">
                      <XCircle className="w-4 h-4 text-red-400/70 shrink-0 mt-0.5" />
                      <span>{item.others}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </Section>

        {/* FINAL LEAD FORM */}
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
