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
  Battery,
  Shield,
  Clock,
  Car,
  Users,
  Cpu,
  RefreshCw,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Battery-Only Systems | Backup Power Without Starting Over",
  description: "Already have solar or only need energy storage? Solar Legacy offers AC-coupled battery-only solutions tailored to your home and backup priorities.",
};

export default function BatteryStoragePage() {
  const bestFit = [
    {
      title: "Existing Solar Owners",
      desc: "Homeowners who already installed solar panels but now need blackout protection and peak-rate defense.",
    },
    {
      title: "Outage-Prone Regions",
      desc: "Residents facing frequent storms, grid overloads, or public safety power shutoffs (PSPS).",
    },
    {
      title: "Time-of-Use Customers",
      desc: "Households looking to charge storage with low off-peak grid rates and discharge during costly on-peak hours.",
    },
    {
      title: "Critical Medical Needs",
      desc: "Homes dependent on uninterruptible power for oxygen concentrators, CPAPs, or refrigerated pharmaceuticals.",
    },
    {
      title: "Expanding Storage Capacity",
      desc: "Existing battery owners who have added heat pumps, hot tubs, or EVs and require expanded kilowatt-hours.",
    },
  ];

  const features = [
    {
      title: "AC-Coupled for Existing Solar",
      desc: "Our storage systems integrate cleanly with virtually any existing solar inverter setup—including Enphase, SolarEdge, SMA, and string inverters.",
      icon: RefreshCw,
    },
    {
      title: "Standalone Grid-Charged Storage",
      desc: "Where utility regulations permit, batteries can be installed without solar, charging from the grid during cheap hours to supply backup power.",
      icon: Battery,
    },
    {
      title: "Time-of-Use Arbitrage",
      desc: "Automated software charges the battery when grid electricity is lowest and powers your home when electricity costs spike.",
      icon: Clock,
    },
    {
      title: "EV & High-Demand Appliances",
      desc: "Intelligent soft-start modules prevent air conditioners and high-draw vehicle chargers from overloading battery reserves during an outage.",
      icon: Car,
    },
    {
      title: "System Compatibility Audit",
      desc: "Our licensed electrical engineers inspect your service panel, grounding, and wiring to guarantee code-compliant turnkey integration.",
      icon: Cpu,
    },
    {
      title: "24/7 Monitored Protection",
      desc: "Real-time mobile state-of-charge tracking with automatic storm-watch modes that top up batteries before severe weather strikes.",
      icon: Shield,
    },
  ];

  return (
    <div className="flex min-h-screen flex-col bg-background selection:bg-solar-300 selection:text-forest-950">
      <Navbar />

      <main className="flex-1">
        {/* Hero */}
        <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-forest-950 text-white overflow-hidden">
          <div className="absolute inset-0 z-0 select-none overflow-hidden">
            <Image
              src="/project-coastal-microgrid.jpg"
              alt="Coastal Battery Storage System"
              fill
              priority
              className="object-cover object-center opacity-30 brightness-75 scale-105"
            />
          </div>
          <div className="absolute inset-0 z-1 bg-gradient-to-b from-forest-950/85 via-forest-950/70 to-forest-950" />

          <Container size="xl" padding="normal" className="relative z-10 max-w-4xl mx-auto text-center">
            <Badge variant="glass" size="default" dot dotColor="solar" pulse className="mb-5 border-solar-400/40 text-solar-300">
              AC-Coupled & Standalone Energy Storage
            </Badge>
            <h1 className="font-heading font-extrabold text-3xl sm:text-5xl lg:text-6xl tracking-tight text-white leading-tight mb-6">
              Backup Power <span className="solar-gradient-text">Without Starting Over</span>
            </h1>
            <p className="text-base sm:text-xl text-beige-200 font-sans max-w-2xl mx-auto leading-relaxed mb-8 font-light">
              Already have solar—or only need energy storage? Solar Legacy offers battery-only solutions designed around your home, existing electrical system, and backup priorities.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                variant="solar"
                size="lg"
                className="font-bold text-forest-950 shadow-xl shadow-solar-400/25 h-13 px-8 text-base"
                asChild
              >
                <Link href="/#quote">
                  <span>Build My Battery Plan</span>
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </div>
          </Container>
        </section>

        {/* Best-Fit Customers */}
        <Section spacing="normal" background="forestDeep" className="text-white relative border-t border-white/10">
          <Container size="xl" padding="normal">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <Badge variant="glass" size="sm" className="mb-3 text-solar-300 border-solar-400/30">
                Ideal Candidates
              </Badge>
              <h2 className="font-heading font-bold text-3xl sm:text-4xl text-white">
                Who Needs a Battery-Only Solution?
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {bestFit.map((item, i) => (
                <div key={i} className="p-6 rounded-2xl bg-forest-900/60 border border-white/10 hover:border-solar-400/40 transition-colors">
                  <div className="w-10 h-10 rounded-xl bg-forest-950 text-solar-400 flex items-center justify-center mb-4 border border-solar-400/30">
                    <Users className="w-5 h-5" />
                  </div>
                  <h3 className="font-heading font-bold text-lg text-white mb-2">{item.title}</h3>
                  <p className="text-xs sm:text-sm text-beige-300 leading-relaxed font-sans">{item.desc}</p>
                </div>
              ))}
            </div>
          </Container>
        </Section>

        {/* Technical Architecture */}
        <Section spacing="normal" background="forestDeep" className="text-white relative border-t border-white/10">
          <Container size="xl" padding="normal">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <Badge variant="glass" size="sm" className="mb-3 text-solar-300 border-solar-400/30">
                System Capabilities
              </Badge>
              <h2 className="font-heading font-bold text-3xl sm:text-4xl text-white">
                Engineered for Complete Compatibility
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feat, idx) => {
                const Icon = feat.icon;
                return (
                  <div key={idx} className="p-6 rounded-2xl bg-forest-900/50 border border-white/10">
                    <div className="w-11 h-11 rounded-xl bg-solar-400 text-forest-950 flex items-center justify-center mb-4">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-heading font-bold text-lg text-white mb-2">{feat.title}</h3>
                    <p className="text-xs sm:text-sm text-beige-300 leading-relaxed font-sans">{feat.desc}</p>
                  </div>
                );
              })}
            </div>

            <div className="mt-16 text-center">
              <Button
                variant="solar"
                size="lg"
                className="font-bold text-forest-950 h-13 px-8 text-base shadow-xl shadow-solar-400/25"
                asChild
              >
                <Link href="/#quote">
                  <span>Build My Battery Plan</span>
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
