import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Container } from "@/components/core/container";
import { Section } from "@/components/core/section";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sun, BatteryCharging, Shield, Building2, Battery, CheckCircle2, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Solar & Battery Solutions Built Around Your Property",
  description: "Whether you want to reduce your electric bill, protect your home during outages, or gain control over rising utility costs, Solar Legacy designs a bespoke solution.",
};

export default function SolarSolutionsPage() {
  const solutions = [
    {
      title: "Residential Solar",
      badge: "Clean Rooftop Generation",
      description: "Produce clean energy from your rooftop and reduce how much electricity you purchase from the utility.",
      href: "/residential-solar",
      image: "/project-hilltop-residence.jpg",
      icon: Sun,
      highlights: [
        "Tailored monocrystalline black silicon arrays",
        "High aesthetic roof integration with zero visible conduit",
        "Significant reduction in ongoing utility reliance",
      ],
    },
    {
      title: "Solar + Battery",
      badge: "Day & Night Independence",
      description: "Generate power during the day, store excess energy, and use it when utility electricity is most expensive—or unavailable.",
      href: "/solar-and-battery",
      image: "/tier-microgrid-bifacial.jpg",
      icon: BatteryCharging,
      highlights: [
        "Store midday generation for evening peak tariffs",
        "Instant seamless backup during grid outages",
        "Intelligent power-flow telemetry and mobile app monitoring",
      ],
    },
    {
      title: "Battery-Only Systems",
      badge: "Storage for Existing Solar or Grid",
      description: "Add backup power and energy storage without installing a new solar system.",
      href: "/battery-storage",
      image: "/project-coastal-microgrid.jpg",
      icon: Battery,
      highlights: [
        "Retrofits seamlessly onto existing solar installations",
        "Configurable for essential circuits or whole-home backup",
        "Time-of-use optimization for peak utility rates",
      ],
    },
    {
      title: "Commercial Solar",
      badge: "Enterprise Cost Reduction",
      description: "Custom solar solutions designed to reduce operating costs for businesses, commercial properties, and organizations.",
      href: "/commercial-solar",
      image: "/project-aura-logistics.jpg",
      icon: Building2,
      highlights: [
        "Rooftop, ground-mount, and solar carport canopies",
        "Megawatt-scale energy modeling and accelerated depreciation",
        "Measurable corporate ESG compliance and sustainability",
      ],
    },
    {
      title: "Commercial Battery Storage",
      badge: "Operational Resilience",
      description: "Control peak energy demand, strengthen operational resilience, and store energy for when your facility needs it most.",
      href: "/commercial-battery-storage",
      image: "/tier-commercial-solar.jpg",
      icon: Shield,
      highlights: [
        "Automated utility peak demand charge shaving",
        "Critical load and business continuity protection",
        "Modular expandable storage capacity",
      ],
    },
  ];

  return (
    <div className="flex min-h-screen flex-col bg-background selection:bg-solar-300 selection:text-forest-950">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-forest-950 text-white overflow-hidden">
          <div className="absolute inset-0 z-0 select-none overflow-hidden">
            <Image
              src="/hero-solar.jpg"
              alt="Solar Solutions"
              fill
              priority
              className="object-cover object-center opacity-25 brightness-75 scale-105"
            />
          </div>
          <div className="absolute inset-0 z-1 bg-gradient-to-b from-forest-950/90 via-forest-950/75 to-forest-950" />
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-solar-400/15 blur-[150px] rounded-full pointer-events-none z-1" />

          <Container size="xl" padding="normal" className="relative z-10 text-center max-w-4xl mx-auto">
            <Badge variant="glass" size="default" dot dotColor="solar" pulse className="mb-5 border-solar-400/40 text-solar-300">
              Tailored Architecture & Micro-Grids
            </Badge>
            <h1 className="font-heading font-extrabold text-3xl sm:text-5xl lg:text-6xl tracking-tight text-white leading-tight mb-6">
              Solar and Battery Solutions Built Around <span className="solar-gradient-text">Your Property</span>
            </h1>
            <p className="text-base sm:text-xl text-beige-200 font-sans max-w-2xl mx-auto leading-relaxed mb-8 font-light">
              Whether you want to reduce your electric bill, protect your home during outages, or gain more control over rising utility costs, Solar Legacy designs a solution around your property and energy needs.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                variant="solar"
                size="lg"
                className="font-bold text-forest-950 shadow-xl shadow-solar-400/25 h-13 px-8 text-base"
                asChild
              >
                <Link href="/#quote">
                  <span>Build My Custom Energy Plan</span>
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button
                variant="forestOutline"
                size="lg"
                className="border-white/20 text-beige-100 hover:bg-white/10 h-13 px-7 text-base backdrop-blur-sm"
                asChild
              >
                <Link href="#solutions-grid">
                  <Sparkles className="w-4 h-4 mr-2 text-solar-400" />
                  <span>Compare Systems</span>
                </Link>
              </Button>
            </div>
          </Container>
        </section>

        {/* Solutions Grid Section */}
        <Section id="solutions-grid" spacing="normal" background="forestDeep" className="text-white relative">
          <Container size="xl" padding="normal">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <Badge variant="glass" size="sm" className="mb-3 text-solar-300 border-solar-400/30">
                Engineered Solutions
              </Badge>
              <h2 className="font-heading font-bold text-3xl sm:text-4xl text-white">
                Choose the Architecture That Fits <span className="solar-gradient-text">Your Goals</span>
              </h2>
              <p className="text-sm sm:text-base text-beige-300 mt-3">
                Every property has unique electrical loads and architectural requirements. Explore our dedicated systems below.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {solutions.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="group rounded-2xl overflow-hidden bg-forest-900/60 backdrop-blur-xl border border-white/10 hover:border-solar-400/50 transition-all duration-300 shadow-xl flex flex-col justify-between"
                  >
                    <div>
                      {/* Image Header */}
                      <div className="relative h-56 w-full overflow-hidden">
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500 brightness-80"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-forest-950/50 to-transparent" />
                        <div className="absolute top-4 left-4">
                          <Badge variant="glass" size="sm" className="text-white border-white/20 bg-black/40 backdrop-blur-md">
                            {item.badge}
                          </Badge>
                        </div>
                        <div className="absolute bottom-4 left-4 right-4 flex items-center gap-3">
                          <div className="w-10 h-10 rounded-xl bg-solar-400 text-forest-950 flex items-center justify-center shrink-0 shadow-md">
                            <Icon className="w-5 h-5" />
                          </div>
                          <h3 className="font-heading font-bold text-xl text-white">
                            {item.title}
                          </h3>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-6">
                        <p className="text-sm text-beige-200 leading-relaxed mb-6 font-sans">
                          {item.description}
                        </p>
                        <ul className="flex flex-col gap-2.5 mb-6 text-xs text-beige-300">
                          {item.highlights.map((h, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <CheckCircle2 className="w-4 h-4 text-solar-400 shrink-0 mt-0.5" />
                              <span>{h}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="p-6 pt-0 border-t border-white/10 mt-auto">
                      <Button
                        variant="solar"
                        size="default"
                        className="w-full justify-between font-bold text-forest-950 h-11 rounded-xl shadow-md"
                        asChild
                      >
                        <Link href={item.href}>
                          <span>Explore {item.title}</span>
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                );
              })}
            </div>
          </Container>
        </Section>
      </main>

      <Footer />
    </div>
  );
}
