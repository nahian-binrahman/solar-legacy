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
  Building2,
  Factory,
  Warehouse,
  School,
  Store,
  Truck,
  ArrowRight,
  CheckCircle2,
  FileSpreadsheet,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Commercial Solar Solutions | Solar Legacy",
  description:
    "Turn energy overhead into a competitive business advantage with turnkey commercial solar, carports, and industrial clean power infrastructure.",
};

export default function CommercialSolarPage() {
  const sectors = [
    {
      title: "Warehouses & Logistics Hubs",
      desc: "Large unobstructed roof profiles optimized for high-capacity bifacial generation that offsets heavy HVAC, fleet electrification, and sorting operations.",
      icon: Warehouse,
      stat: "Up to 80% bill reduction",
    },
    {
      title: "Manufacturing & Industrial",
      desc: "Engineered to withstand heavy duty cycles and suppress severe peak-demand spikes during simultaneous machinery startup and shift changes.",
      icon: Factory,
      stat: "Peak demand mitigation",
    },
    {
      title: "Corporate Campuses & Offices",
      desc: "Deliver tangible corporate ESG credentials while dramatically reducing annual class-A facility operating costs and common area power.",
      icon: Building2,
      stat: "25+ year predictable ROI",
    },
    {
      title: "Retail & Shopping Centers",
      desc: "Monetize expansive flat roofs and tenant utility metering or deploy revenue-generating solar carports that shade customer vehicles.",
      icon: Store,
      stat: "Value-add tenant amenity",
    },
    {
      title: "Schools, Universities & Non-Profits",
      desc: "Leverage direct-pay federal clean energy incentives and solar PPAs requiring zero capital outlay to protect institutional operating budgets.",
      icon: School,
      stat: "Direct-pay tax credit eligible",
    },
    {
      title: "Agricultural & Fleet Depots",
      desc: "Robust ground-mount systems and charging canopy arrays engineered for processing facilities, irrigation pumps, and fleet electrification.",
      icon: Truck,
      stat: "Dual-use land efficiency",
    },
  ];

  const deploymentModels = [
    {
      title: "Commercial Rooftop Arrays",
      description: "Ballasted or mechanically fastened configurations engineered for TPO, EPDM, PVC, and standing seam metal roofs with zero structural compromise.",
      features: ["Non-penetrating ballasted mounts", "Integrated fire code setbacks & walkways", "String inverters with rapid module-level shutdown"],
    },
    {
      title: "Solar Carports & Canopies",
      description: "Transform open parking lots into productive power stations that provide premium shaded parking for customers and staff while generating clean energy.",
      features: ["Level 2 & DC Fast EV charging integration", "LED architectural night lighting", "Water management and gutter channels"],
    },
    {
      title: "Ground-Mount Systems",
      description: "Utility-scale ground arrays for businesses with surplus acreage, brownfields, or remote sub-metered operational facilities.",
      features: ["Single-axis tracking or fixed-tilt racking", "Geotechnical pile foundations", "High-voltage central distribution design"],
    },
  ];

  const financingOptions = [
    {
      title: "Direct Capital Purchase",
      bestFor: "Enterprises with available capital & tax appetite",
      highlights: [
        "Maximum lifetime return on investment (ROI)",
        "Direct claim of 30% Federal Investment Tax Credit (ITC)",
        "100% MACRS accelerated depreciation tax deductions",
        "Direct asset ownership on company balance sheet",
      ],
    },
    {
      title: "Commercial Solar PPA / Lease",
      bestFor: "Organizations seeking $0 upfront capital expense",
      highlights: [
        "Immediate day-one electricity bill reductions",
        "Zero debt or balance sheet encumbrance (operating expense)",
        "Turnkey operations & maintenance fully covered by provider",
        "Fixed or predictable low escalation energy rates",
      ],
    },
    {
      title: "C-PACE Clean Energy Financing",
      bestFor: "Property owners financing through municipal tax roll",
      highlights: [
        "100% long-term fixed-rate financing up to 20-30 years",
        "Repaid as a special property assessment alongside real estate taxes",
        "Transfers automatically upon building sale or ownership change",
        "Pass-through of costs to tenants under NNN lease structures",
      ],
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
                  Commercial & Industrial Clean Energy
                </Badge>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-medium tracking-tight text-white leading-[1.1]">
                  Turn Energy Overhead Into a{" "}
                  <span className="italic font-light text-solar-300">Business Strategy</span>
                </h1>
                <p className="text-base sm:text-lg text-beige-200/80 leading-relaxed max-w-2xl">
                  Commercial electricity rates and peak-demand surcharges represent significant ongoing operating costs. Solar Legacy engineers commercial solar infrastructure to hedge price volatility, lower operating expenses, and enhance enterprise balance sheets.
                </p>
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                  <Button asChild variant="solar" size="lg" className="rounded-xl px-8 py-6 font-bold shadow-xl shadow-solar-400/20 text-forest-950">
                    <a href="#assessment">
                      Request Commercial Assessment
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </a>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="rounded-xl border-white/20 hover:bg-white/10 text-white">
                    <a href="#financing">Explore Financing Structures</a>
                  </Button>
                </div>
              </div>

              <div className="lg:col-span-5 relative">
                <div className="relative rounded-3xl overflow-hidden border border-solar-400/30 shadow-2xl aspect-[4/3] group">
                  <Image
                    src="/commercial-solar.jpg"
                    alt="Commercial Solar Installation on industrial facility"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-forest-950/20 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-forest-900/80 backdrop-blur-md border border-white/10 text-left">
                    <div className="text-xs uppercase tracking-widest text-solar-400 font-bold mb-1">Corporate Infrastructure</div>
                    <div className="text-sm font-medium text-white">Multi-megawatt engineered arrays for enterprise facilities</div>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* SECTOR CARDS */}
        <Section background="dark" spacing="loose" className="relative border-t border-white/5">
          <Container size="xl" padding="normal">
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
              <Badge variant="glass" className="px-3.5 py-1 text-xs uppercase tracking-widest text-solar-300">
                Industry Solutions
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-serif font-medium text-white">
                Engineered for High-Consumption Operations
              </h2>
              <p className="text-beige-200/70 text-sm sm:text-base">
                Whether you manage a temperature-controlled distribution center, a busy retail plaza, or a corporate headquarters, we optimize arrays for your load curve.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sectors.map((sector) => {
                const Icon = sector.icon;
                return (
                  <div
                    key={sector.title}
                    className="p-8 rounded-2xl bg-forest-900/50 border border-white/10 hover:border-solar-400/40 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 text-left"
                  >
                    <div>
                      <div className="w-12 h-12 rounded-xl bg-solar-400/10 border border-solar-400/20 flex items-center justify-center text-solar-300 mb-6 group-hover:bg-solar-400 group-hover:text-forest-950 transition-colors">
                        <Icon className="w-6 h-6" />
                      </div>
                      <h3 className="text-xl font-serif text-white font-medium mb-3">{sector.title}</h3>
                      <p className="text-beige-200/70 text-sm leading-relaxed mb-6">{sector.desc}</p>
                    </div>
                    <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs font-semibold text-solar-400">
                      <span>{sector.stat}</span>
                      <CheckCircle2 className="w-4 h-4 text-solar-400" />
                    </div>
                  </div>
                );
              })}
            </div>
          </Container>
        </Section>

        {/* DEPLOYMENT CONFIGURATIONS */}
        <Section background="charcoal" spacing="loose" className="relative border-t border-white/5">
          <Container size="xl" padding="normal">
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
              <Badge variant="glass" className="px-3.5 py-1 text-xs uppercase tracking-widest text-solar-300">
                Turnkey Engineering
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-serif font-medium text-white">
                Rooftop, Carport, or Ground-Mount Installations
              </h2>
              <p className="text-beige-200/70 text-sm sm:text-base">
                We handle comprehensive structural audits, electrical engineering, municipal permitting, utility interconnect agreements, and construction.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
              {deploymentModels.map((model) => (
                <div key={model.title} className="p-8 rounded-2xl bg-forest-950/80 border border-white/10 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-serif text-white font-medium mb-3">{model.title}</h3>
                    <p className="text-sm text-beige-200/70 leading-relaxed mb-6">{model.description}</p>
                    <ul className="space-y-3">
                      {model.features.map((feat) => (
                        <li key={feat} className="flex items-start gap-2.5 text-xs text-beige-100/90">
                          <CheckCircle2 className="w-4 h-4 text-solar-400 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </Section>

        {/* FINANCING & PROGRAMS */}
        <Section id="financing" background="dark" spacing="loose" className="relative border-t border-white/5">
          <Container size="xl" padding="normal">
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
              <Badge variant="gold" className="px-3.5 py-1 text-xs uppercase tracking-widest">
                Commercial Programs & Capital
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-serif font-medium text-white">
                Tailored Commercial Financing Structures
              </h2>
              <p className="text-beige-200/70 text-sm sm:text-base">
                Every balance sheet has different tax appetites and liquidity priorities. Choose the deployment model that fulfills your financial benchmarks.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 text-left">
              {financingOptions.map((opt) => (
                <div key={opt.title} className="p-8 rounded-2xl bg-forest-900/60 border border-solar-400/20 flex flex-col justify-between">
                  <div>
                    <div className="text-xs uppercase font-mono tracking-widest text-solar-400 mb-2">{opt.bestFor}</div>
                    <h3 className="text-2xl font-serif text-white font-medium mb-6">{opt.title}</h3>
                    <ul className="space-y-3 mb-8">
                      {opt.highlights.map((item) => (
                        <li key={item} className="flex items-start gap-2.5 text-xs sm:text-sm text-beige-200/90">
                          <CheckCircle2 className="w-4 h-4 text-solar-400 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Button asChild variant="outline" size="sm" className="w-full rounded-xl border-white/20 text-white hover:bg-white/10">
                    <a href="#assessment">Model This Financial Option</a>
                  </Button>
                </div>
              ))}
            </div>
          </Container>
        </Section>

        {/* ASSESSMENT CTA */}
        <Section id="assessment" background="charcoal" spacing="loose" className="relative border-t border-white/10">
          <Container size="lg" padding="normal">
            <div className="p-10 sm:p-14 rounded-3xl bg-gradient-to-br from-forest-900 via-forest-950 to-charcoal-900 border border-solar-400/30 text-center space-y-6 shadow-2xl relative overflow-hidden">
              <div className="w-16 h-16 rounded-2xl bg-solar-400/10 border border-solar-400/30 flex items-center justify-center text-solar-400 mx-auto">
                <FileSpreadsheet className="w-8 h-8" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-serif text-white font-medium">
                Request a Commercial Energy Assessment
              </h2>
              <p className="text-beige-200/80 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
                Send us 12 months of utility interval billing data. Our commercial engineering team will calculate your estimated peak demand reduction, capital cost, and ROI model within 48 hours.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                <Button asChild variant="solar" size="lg" className="rounded-xl px-8 font-bold text-forest-950 shadow-xl shadow-solar-400/20">
                  <Link href="/#quote">
                    Get Commercial Assessment
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
                <a
                  href="tel:+18005557652"
                  className="text-sm font-semibold tracking-wide text-beige-200 hover:text-solar-300 py-3 px-4"
                >
                  Direct Commercial Desk: +1 (800) 555-7652
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
