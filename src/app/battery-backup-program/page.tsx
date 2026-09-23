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
  BatteryCharging,
  ArrowRight,
  CheckCircle2,
  Cpu,
  Sun,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Battery Backup Program | Solar Legacy",
  description:
    "A smarter path to home energy resilience. Explore Essential, Extended, and Whole-Home battery configurations tailored to your lifestyle and critical electrical loads.",
};

export default function BatteryBackupProgramPage() {
  const configurations = [
    {
      level: "Configuration 01",
      title: "Essential Backup",
      tagline: "Core security and preservation circuits",
      capacity: "~10 – 13.5 kWh Storage",
      desc: "Engineered for households prioritizing food preservation, family connectivity, security, and medical device continuity during sudden storm outages.",
      loadsCovered: [
        "Refrigerators & primary freezers",
        "Home Wi-Fi routers & mobile device charging",
        "Security cameras, alarm systems & sensors",
        "Essential interior LED lighting zones",
        "CPAP & vital medical devices",
      ],
      badge: "Targeted Subpanel",
    },
    {
      level: "Configuration 02",
      title: "Extended Home Backup",
      tagline: "Expanded daily living & climate comfort",
      capacity: "~20 – 27 kWh Storage",
      desc: "Provides comfortable living continuity without feeling like you are in an emergency. Supports water pumps, secondary appliances, and high-efficiency heating/cooling.",
      loadsCovered: [
        "All Essential Backup loads included",
        "Sump pumps & dedicated well water pumps",
        "Kitchen small appliances & microwave",
        "Garage door openers & outdoor lighting",
        "High-efficiency mini-split heating & cooling",
      ],
      badge: "Most Popular Setup",
      featured: true,
    },
    {
      level: "Configuration 03",
      title: "Whole-Home Energy System",
      tagline: "Uncompromising estate-scale autonomy",
      capacity: "30 – 40+ kWh Storage",
      desc: "Total household power autonomy. Integrates smart load shedding subpanels to power heavy inductive loads including central air conditioning and EV charging.",
      loadsCovered: [
        "Every circuit in the main electrical service panel",
        "Multi-zone central heat pumps & AC compressors",
        "Electric vehicle Level 2 top-up charging",
        "Electric water heaters & laundry appliances",
        "Autonomous multi-day off-grid islanding capability",
      ],
      badge: "Smart Panel Control",
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
                  Home Resilience Program
                </Badge>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-medium tracking-tight text-white leading-[1.1]">
                  A Smarter Path to{" "}
                  <span className="italic font-light text-solar-300">Home Backup Power</span>
                </h1>
                <p className="text-base sm:text-lg text-beige-200/80 leading-relaxed max-w-2xl">
                  Blackouts are becoming more frequent, longer, and more severe. Solar Legacy designs residential battery backup systems not as rigid, generic kits, but as precision configurations engineered around the specific appliances and lifestyle needs of your family.
                </p>
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                  <Button asChild variant="solar" size="lg" className="rounded-xl px-8 py-6 font-bold shadow-xl shadow-solar-400/20 text-forest-950">
                    <a href="#configurations">
                      Find My Backup Level
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </a>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="rounded-xl border-white/20 hover:bg-white/10 text-white">
                    <a href="#recharge">How Multi-Day Solar Works</a>
                  </Button>
                </div>
              </div>

              <div className="lg:col-span-5 relative">
                <div className="relative rounded-3xl overflow-hidden border border-solar-400/30 shadow-2xl aspect-[4/3] group">
                  <Image
                    src="/tier-microgrid-bifacial.jpg"
                    alt="Whole-home battery backup system installation"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-forest-950/20 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-forest-900/80 backdrop-blur-md border border-white/10 text-left">
                    <div className="text-xs uppercase tracking-widest text-solar-400 font-bold mb-1">Silent Instant Power</div>
                    <div className="text-sm font-medium text-white">Zero noise, zero diesel fumes, and sub-cycle microsecond transfer</div>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* 3 CONFIGURATIONS */}
        <Section id="configurations" background="dark" spacing="loose" className="relative border-t border-white/5">
          <Container size="xl" padding="normal">
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
              <Badge variant="glass" className="px-3.5 py-1 text-xs uppercase tracking-widest text-solar-300">
                Tailored Configurations
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-serif font-medium text-white">
                Choose the Scope of Your Resilience
              </h2>
              <p className="text-beige-200/70 text-sm sm:text-base">
                We present these backup tiers as engineering configurations rather than rigid packages. Your installation is customized to match your electrical service panel and priority loads.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 text-left">
              {configurations.map((cfg) => (
                <div
                  key={cfg.title}
                  className={`p-8 sm:p-10 rounded-3xl flex flex-col justify-between transition-all duration-300 relative ${
                    cfg.featured
                      ? "bg-forest-900/80 border-2 border-solar-400 shadow-2xl shadow-solar-400/10"
                      : "bg-forest-950/80 border border-white/10 hover:border-solar-400/30"
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-mono uppercase tracking-widest text-solar-400 font-semibold">{cfg.level}</span>
                      <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-solar-400/10 text-solar-300 border border-solar-400/20">
                        {cfg.badge}
                      </span>
                    </div>

                    <h3 className="text-2xl font-serif text-white font-medium mb-1">{cfg.title}</h3>
                    <div className="text-xs text-solar-300 font-mono mb-4">{cfg.capacity}</div>
                    <p className="text-xs sm:text-sm text-beige-200/70 leading-relaxed mb-6">{cfg.desc}</p>

                    <div className="pt-6 border-t border-white/10 space-y-3 mb-8">
                      <div className="text-xs font-semibold uppercase tracking-wider text-white">Protected Circuits:</div>
                      {cfg.loadsCovered.map((circuit) => (
                        <div key={circuit} className="flex items-start gap-2.5 text-xs text-beige-200/90">
                          <CheckCircle2 className="w-4 h-4 text-solar-400 shrink-0 mt-0.5" />
                          <span>{circuit}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Button asChild variant={cfg.featured ? "solar" : "outline"} size="default" className="w-full rounded-xl">
                    <Link href="/#quote" className={cfg.featured ? "text-forest-950 font-bold" : "text-white"}>
                      Configure This Tier
                    </Link>
                  </Button>
                </div>
              ))}
            </div>
          </Container>
        </Section>

        {/* SOLAR CONTINUOUS RECHARGE EXPLAINER */}
        <Section id="recharge" background="charcoal" spacing="loose" className="relative border-t border-white/5">
          <Container size="xl" padding="normal">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-6 space-y-6 text-left">
                <Badge variant="gold" className="px-3.5 py-1 text-xs uppercase tracking-widest">
                  Infinite Fuel Architecture
                </Badge>
                <h2 className="text-3xl sm:text-4xl font-serif font-medium text-white">
                  Generators Run Out of Fuel. Solar Batteries Don&apos;t.
                </h2>
                <p className="text-beige-200/80 text-sm sm:text-base leading-relaxed">
                  A traditional gas generator is limited by how much fuel you have stored or whether local gas stations have power to pump fuel. A Solar Legacy Battery Backup system automatically isolates from the grid during an outage and creates its own local microgrid.
                </p>
                <div className="space-y-4 pt-2">
                  <div className="p-4 rounded-2xl bg-forest-950/80 border border-white/10 flex items-start gap-3">
                    <Sun className="w-5 h-5 text-solar-400 shrink-0 mt-0.5" />
                    <div className="text-xs sm:text-sm text-beige-200/80 leading-relaxed">
                      <strong className="text-white">Daytime:</strong> Solar panels power your home and simultaneously recharge battery reserves to 100%.
                    </div>
                  </div>
                  <div className="p-4 rounded-2xl bg-forest-950/80 border border-white/10 flex items-start gap-3">
                    <BatteryCharging className="w-5 h-5 text-solar-400 shrink-0 mt-0.5" />
                    <div className="text-xs sm:text-sm text-beige-200/80 leading-relaxed">
                      <strong className="text-white">Nighttime:</strong> Stored solar energy sustains your home quietly until sunrise, restarting the cycle indefinitely.
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-6">
                <div className="p-8 sm:p-10 rounded-3xl bg-forest-900/60 border border-solar-400/25 space-y-6 text-left">
                  <div className="flex items-center gap-3 pb-4 border-b border-white/10">
                    <Cpu className="w-6 h-6 text-solar-400" />
                    <h3 className="text-lg font-serif text-white font-medium">Smart Panel Dynamic Load Management</h3>
                  </div>
                  <p className="text-xs sm:text-sm text-beige-200/80 leading-relaxed">
                    Unlike old-fashioned transfer switches that lock you into static circuits forever, modern smart panels let you adjust priorities right from your phone. If a storm is prolonged, you can selectively pause EV charging or air conditioning to stretch battery runtime for days.
                  </p>
                  <ul className="space-y-2.5">
                    {[
                      "Real-time circuit-level mobile app control",
                      "Automated shed triggers when battery reserves drop below 25%",
                      "Seamless integration with existing emergency generators",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-xs text-beige-200/90">
                        <CheckCircle2 className="w-4 h-4 text-solar-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </Container>
        </Section>

        {/* CTA */}
        <Section background="dark" spacing="loose" className="relative border-t border-white/10">
          <Container size="lg" padding="normal">
            <div className="p-10 sm:p-14 rounded-3xl bg-gradient-to-br from-forest-900 via-forest-950 to-charcoal-900 border border-solar-400/30 text-center space-y-6 shadow-2xl relative overflow-hidden">
              <div className="w-16 h-16 rounded-2xl bg-solar-400/10 border border-solar-400/30 flex items-center justify-center text-solar-400 mx-auto">
                <BatteryCharging className="w-8 h-8" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-serif text-white font-medium">
                Find My Ideal Backup Configuration
              </h2>
              <p className="text-beige-200/80 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
                Tell us which appliances you need protected during a storm. We will match you with the exact kWh capacity and inverter specifications for uninterrupted resilience.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                <Button asChild variant="solar" size="lg" className="rounded-xl px-8 font-bold text-forest-950 shadow-xl shadow-solar-400/20">
                  <Link href="/#quote">
                    Design My Backup System
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
                <a
                  href="tel:+18005557652"
                  className="text-sm font-semibold tracking-wide text-beige-200 hover:text-solar-300 py-3 px-4"
                >
                  Resilience Specialist: +1 (800) 555-7652
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
