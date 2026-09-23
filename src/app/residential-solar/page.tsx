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
  ArrowRight,
  TrendingUp,
  AlertTriangle,
  Layers,
  Compass,
  FileCheck2,
  Activity,
  CheckCircle2,
  Users,
  ShieldCheck,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Residential Solar | Turn Rooftops Into Energy Assets",
  description: "A properly designed residential solar system reduces utility dependence and gives homeowners greater control over rising electricity costs.",
};

export default function ResidentialSolarPage() {
  const problems = [
    {
      title: "Volatile Utility Rates",
      desc: "Utility rates continue escalating year-over-year with unpredictable peak surcharges and regulatory tariff hikes.",
    },
    {
      title: "Zero Price Control",
      desc: "Homeowners remain exposed to utility monopoly pricing with no voice or control over recurring monthly rate increases.",
    },
    {
      title: "No Equity or Asset Value",
      desc: "Traditional electric bills are 100% sunk expenses that build zero ownership, equity, or long-term valuation for your property.",
    },
  ];

  const solutions = [
    { title: "Custom System Design", desc: "Architectural CAD layout tailored to your roofline and aesthetics.", icon: Layers },
    { title: "Roof & Shading Evaluation", desc: "LiDAR satellite irradiance scan and micro-climate shade modeling.", icon: Compass },
    { title: "Historical Usage Analysis", desc: "Granular audit of past 12-24 months of utility hourly consumption.", icon: Activity },
    { title: "Production Modeling", desc: "Conservative kWh generation modeling backed by physics simulations.", icon: TrendingUp },
    { title: "Permitting & Coordination", desc: "Full turnkey municipal permits, HOA approvals, and utility interconnection.", icon: FileCheck2 },
    { title: "Continuous Monitoring", desc: "24/7 panel-level telemetry with automated alerts and maintenance care.", icon: ShieldCheck },
  ];

  const benefits = [
    "Lower dependence on utility-generated power",
    "Predictable, capped energy expenses for decades",
    "Clean, emission-free energy generated on your own roof",
    "Potential increase in appraised architectural property appeal",
    "Seamless optional battery integration whenever you choose",
  ];

  const targetAudiences = [
    "Homeowners facing steep or continually rising electric bills",
    "Electric Vehicle (EV) owners needing high-capacity overnight charging",
    "High-energy-use households with pool pumps, climate control, or home tech",
    "Homeowners planning to establish long-term roots in their property",
    "Families seeking stable, transparent, and predictable overhead",
  ];

  const steps = [
    { num: "01", title: "Energy Assessment", desc: "We evaluate your historical usage, roof orientation, and electrical panel." },
    { num: "02", title: "Custom Design", desc: "Precision CAD modeling harmonized with architectural aesthetics." },
    { num: "03", title: "Program Selection", desc: "Choose between solar subscription or full asset ownership." },
    { num: "04", title: "Permit & Install", desc: "Licensed master technicians handle permits, racking, and wiring." },
    { num: "05", title: "Activation & Telemetry", desc: "Grid interconnection permission and live mobile monitoring go live." },
  ];

  return (
    <div className="flex min-h-screen flex-col bg-background selection:bg-solar-300 selection:text-forest-950">
      <Navbar />

      <main className="flex-1">
        {/* Hero */}
        <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-forest-950 text-white overflow-hidden">
          <div className="absolute inset-0 z-0 select-none overflow-hidden">
            <Image
              src="/project-hilltop-residence.jpg"
              alt="Residential Solar Luxury Estate"
              fill
              priority
              className="object-cover object-center opacity-30 brightness-75 scale-105"
            />
          </div>
          <div className="absolute inset-0 z-1 bg-gradient-to-b from-forest-950/85 via-forest-950/70 to-forest-950" />

          <Container size="xl" padding="normal" className="relative z-10 max-w-4xl mx-auto text-center">
            <Badge variant="glass" size="default" dot dotColor="solar" pulse className="mb-5 border-solar-400/40 text-solar-300">
              Architectural Residential Photovoltaics
            </Badge>
            <h1 className="font-heading font-extrabold text-3xl sm:text-5xl lg:text-6xl tracking-tight text-white leading-tight mb-6">
              Turn Your Rooftop Into a <span className="solar-gradient-text">Long-Term Energy Asset</span>
            </h1>
            <p className="text-base sm:text-xl text-beige-200 font-sans max-w-2xl mx-auto leading-relaxed mb-8 font-light">
              A properly designed solar system can reduce your dependence on the utility and give you greater control over rising electricity costs.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                variant="solar"
                size="lg"
                className="font-bold text-forest-950 shadow-xl shadow-solar-400/25 h-13 px-8 text-base"
                asChild
              >
                <Link href="/#quote">
                  <span>See What Solar Looks Like for Your Home</span>
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </div>
          </Container>
        </section>

        {/* 1. The Problem */}
        <Section spacing="normal" background="forestDeep" className="text-white relative border-t border-white/10">
          <Container size="xl" padding="normal">
            <div className="max-w-3xl mb-12">
              <Badge variant="glass" size="sm" className="mb-3 text-solar-400 border-solar-400/30">
                The Utility Reality
              </Badge>
              <h2 className="font-heading font-bold text-3xl sm:text-4xl text-white">
                Why Traditional Utility Power Is a Sunk Expense
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {problems.map((p, idx) => (
                <div key={idx} className="p-6 sm:p-8 rounded-2xl bg-forest-900/50 border border-white/10 shadow-lg">
                  <div className="w-12 h-12 rounded-xl bg-forest-950 border border-solar-400/20 text-solar-400 flex items-center justify-center mb-5">
                    <AlertTriangle className="w-6 h-6" />
                  </div>
                  <h3 className="font-heading font-bold text-xl text-white mb-2">{p.title}</h3>
                  <p className="text-sm text-beige-300 font-sans leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>
          </Container>
        </Section>

        {/* 2. The Solar Legacy Solution */}
        <Section spacing="normal" background="forestDeep" className="text-white relative border-t border-white/10">
          <Container size="xl" padding="normal">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <Badge variant="glass" size="sm" className="mb-3 text-solar-300 border-solar-400/30">
                Engineering Discipline
              </Badge>
              <h2 className="font-heading font-bold text-3xl sm:text-4xl text-white">
                The Solar Legacy <span className="solar-gradient-text">Engineering Solution</span>
              </h2>
              <p className="text-sm sm:text-base text-beige-300 mt-3">
                We combine architectural elegance with rigorous electrical physics.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {solutions.map((s, idx) => {
                const Icon = s.icon;
                return (
                  <div key={idx} className="p-6 rounded-2xl bg-forest-900/60 border border-white/10 hover:border-solar-400/40 transition-colors">
                    <div className="w-11 h-11 rounded-xl bg-solar-400 text-forest-950 flex items-center justify-center mb-4">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-heading font-bold text-lg text-white mb-2">{s.title}</h3>
                    <p className="text-xs sm:text-sm text-beige-300 leading-relaxed font-sans">{s.desc}</p>
                  </div>
                );
              })}
            </div>
          </Container>
        </Section>

        {/* 3. Benefits & 4. Who It Is For */}
        <Section spacing="normal" background="forestDeep" className="text-white relative border-t border-white/10">
          <Container size="xl" padding="normal">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Benefits */}
              <div className="p-8 rounded-3xl bg-forest-900/60 border border-white/15">
                <Badge variant="glass" size="sm" className="mb-4 text-solar-400 border-solar-400/30">
                  Key Advantages
                </Badge>
                <h3 className="font-heading font-bold text-2xl sm:text-3xl text-white mb-6">
                  Benefits for Your Home
                </h3>
                <ul className="flex flex-col gap-4 text-sm text-beige-200">
                  {benefits.map((b, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-solar-400 shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{b}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Who It Is For */}
              <div className="p-8 rounded-3xl bg-forest-900/60 border border-white/15">
                <Badge variant="glass" size="sm" className="mb-4 text-solar-400 border-solar-400/30">
                  Ideal Candidate Profile
                </Badge>
                <h3 className="font-heading font-bold text-2xl sm:text-3xl text-white mb-6">
                  Who This Is Designed For
                </h3>
                <ul className="flex flex-col gap-4 text-sm text-beige-200">
                  {targetAudiences.map((t, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Users className="w-5 h-5 text-solar-400 shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{t}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Container>
        </Section>

        {/* 5. How It Works */}
        <Section spacing="normal" background="forestDeep" className="text-white relative border-t border-white/10">
          <Container size="xl" padding="normal">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <Badge variant="glass" size="sm" className="mb-3 text-solar-300 border-solar-400/30">
                Turnkey Pathway
              </Badge>
              <h2 className="font-heading font-bold text-3xl sm:text-4xl text-white">
                How It Works: Five Transparent Milestones
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {steps.map((st, i) => (
                <div key={i} className="p-5 rounded-2xl bg-forest-900/50 border border-white/10 flex flex-col justify-between">
                  <div>
                    <span className="font-mono text-2xl font-bold text-solar-400 block mb-2">{st.num}</span>
                    <h3 className="font-heading font-bold text-base text-white mb-2">{st.title}</h3>
                    <p className="text-xs text-beige-300 font-sans leading-relaxed">{st.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom CTA */}
            <div className="mt-16 text-center">
              <Button
                variant="solar"
                size="lg"
                className="font-bold text-forest-950 h-13 px-8 text-base shadow-xl shadow-solar-400/25"
                asChild
              >
                <Link href="/#quote">
                  <span>See What Solar Could Look Like for Your Home</span>
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </div>
          </Container>
        </Section>
      </main>

      <Footer />
    </div>
  );
}
