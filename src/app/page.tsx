import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Container } from "@/components/core/container";
import { Section } from "@/components/core/section";
import { Heading } from "@/components/core/heading";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

import { HeroSection } from "@/components/home/hero-section";
import { ServicesSection } from "@/components/home/services-section";
import { HowItWorksSection } from "@/components/home/how-it-works-section";
import { ProjectsSection } from "@/components/home/projects-section";
import { SavingsCalculator } from "@/components/home/savings-calculator";
import { ConversionSections } from "@/components/home/conversion-sections";
import { getSiteContent } from "@/lib/content-store";

export default async function HomePage() {
  const content = await getSiteContent();
  const v = content.sectionVisibility;

  return (
    <div className="flex min-h-screen flex-col bg-background selection:bg-solar-300 selection:text-forest-950">
      {/* Global Sticky Navigation */}
      <Navbar customLinks={content.navigation} />

      <main className="flex-1">
        {/* Full-Screen Modern Hero Section */}
        {v.hero && <HeroSection content={content.hero} statsData={content.stats} />}

        {/* Premium Services & Why Choose Solar Legacy */}
        {v.services && <ServicesSection />}

        {/* 4-Step Process: How Solar Works */}
        {v.howItWorks && <HowItWorksSection />}

        {/* Featured Projects & Key Metrics */}
        {v.projects && (
          <ProjectsSection projectsData={content.projects} statsData={content.stats} />
        )}



        {/* =========================================================================
            SOLAR ARCHITECTURE & SYSTEM TIERS (Brand Presentation)
           ========================================================================= */}
        {v.architecture && (
          <Section
            id="architecture"
            spacing="lg"
            background="white"
            className="border-b border-beige-200"
          >
            <Container size="xl" padding="normal">
              <div className="flex flex-col gap-12">
                <Heading
                  level={2}
                  align="center"
                  eyebrow={
                    <Badge variant="forest" size="sm">
                      Engineered Arrays
                    </Badge>
                  }
                  solarAccent="Solar Architecture"
                  description="Designed in collaboration with world-class architects to seamlessly fuse high-yield solar physics with luxury residential estates."
                >
                  Signature
                </Heading>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {/* System 1 */}
                  <Card
                    variant="elevated"
                    hoverEffect="lift"
                    className="flex flex-col justify-between border-beige-200"
                  >
                    <div>
                      <div className="h-48 bg-forest-950 p-6 flex flex-col justify-between relative overflow-hidden">
                        <div className="absolute right-0 top-0 w-36 h-36 bg-solar-400/10 rounded-full blur-2xl" />
                        <Badge
                          variant="glass"
                          size="sm"
                          className="w-fit border-solar-400/30 text-beige-100"
                        >
                          Residential Estate
                        </Badge>
                        <div>
                          <h3 className="font-heading font-extrabold text-2xl text-white">
                            The Obsidian Monolith
                          </h3>
                          <p className="text-xs text-beige-300 font-sans mt-1">
                            All-black frameless monocrystalline roof integration
                          </p>
                        </div>
                      </div>

                      <CardContent className="p-6">
                        <ul className="flex flex-col gap-3 text-sm text-charcoal-700">
                          <li className="flex items-center gap-2">
                            <CheckCircle2 className="w-4 h-4 text-solar-500 shrink-0" />
                            <span>23.4% High-efficiency black silicon</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle2 className="w-4 h-4 text-solar-500 shrink-0" />
                            <span>Zero-penetration architectural mounting</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle2 className="w-4 h-4 text-solar-500 shrink-0" />
                            <span>15kWh Solid-State Storage module</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle2 className="w-4 h-4 text-solar-500 shrink-0" />
                            <span>25-Year comprehensive production warranty</span>
                          </li>
                        </ul>
                      </CardContent>
                    </div>

                    <CardFooter className="p-6 pt-0 border-t border-beige-200 mt-4 flex items-center justify-between">
                      <div>
                        <span className="text-xs text-muted-foreground block">Capacity</span>
                        <span className="font-heading font-bold text-lg text-charcoal-900">
                          12 kW — 24 kW
                        </span>
                      </div>
                      <Button variant="forest" size="sm">
                        Inquire
                      </Button>
                    </CardFooter>
                  </Card>

                  {/* System 2: Flagship Highlight */}
                  <Card
                    variant="solarHighlight"
                    hoverEffect="glow"
                    className="flex flex-col justify-between relative shadow-xl"
                  >
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <Badge variant="solarSolid" size="sm" className="shadow-md">
                        Flagship Estate System
                      </Badge>
                    </div>

                    <div>
                      <div className="h-48 bg-forest-900 p-6 flex flex-col justify-between relative overflow-hidden">
                        <div className="absolute right-0 top-0 w-44 h-44 bg-solar-400/20 rounded-full blur-2xl" />
                        <Badge
                          variant="solar"
                          size="sm"
                          dot
                          dotColor="solar"
                          pulse
                          className="w-fit border-solar-400/40 text-white"
                        >
                          Bifacial Active
                        </Badge>
                        <div>
                          <h3 className="font-heading font-extrabold text-2xl text-white">
                            Solar Legacy Micro-Grid
                          </h3>
                          <p className="text-xs text-solar-300 font-sans mt-1">
                            Autonomous energy independence for private estates
                          </p>
                        </div>
                      </div>

                      <CardContent className="p-6">
                        <ul className="flex flex-col gap-3 text-sm text-charcoal-700">
                          <li className="flex items-center gap-2 font-medium text-forest-900">
                            <CheckCircle2 className="w-4 h-4 text-solar-500 shrink-0" />
                            <span>23.8% Dual-surface bifacial gain</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle2 className="w-4 h-4 text-solar-500 shrink-0" />
                            <span>40kWh Modular solid-state battery array</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle2 className="w-4 h-4 text-solar-500 shrink-0" />
                            <span>AI Predictive weather & yield management</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle2 className="w-4 h-4 text-solar-500 shrink-0" />
                            <span>True off-grid islanding capability</span>
                          </li>
                        </ul>
                      </CardContent>
                    </div>

                    <CardFooter className="p-6 pt-0 border-t border-beige-200 mt-4 flex items-center justify-between">
                      <div>
                        <span className="text-xs text-muted-foreground block">Capacity</span>
                        <span className="font-heading font-bold text-lg text-solar-600">
                          30 kW — 80 kW
                        </span>
                      </div>
                      <Button variant="solar" size="sm" className="font-bold">
                        Design Micro-Grid
                      </Button>
                    </CardFooter>
                  </Card>

                  {/* System 3 */}
                  <Card
                    variant="elevated"
                    hoverEffect="lift"
                    className="flex flex-col justify-between border-beige-200"
                  >
                    <div>
                      <div className="h-48 bg-charcoal-900 p-6 flex flex-col justify-between relative overflow-hidden">
                        <div className="absolute right-0 top-0 w-36 h-36 bg-forest-600/20 rounded-full blur-2xl" />
                        <Badge
                          variant="glass"
                          size="sm"
                          className="w-fit border-white/20 text-beige-100"
                        >
                          Commercial & Winery
                        </Badge>
                        <div>
                          <h3 className="font-heading font-extrabold text-2xl text-white">
                            Net-Zero Commercial
                          </h3>
                          <p className="text-xs text-beige-300 font-sans mt-1">
                            Institutional-grade solar canopy and roof engineering
                          </p>
                        </div>
                      </div>

                      <CardContent className="p-6">
                        <ul className="flex flex-col gap-3 text-sm text-charcoal-700">
                          <li className="flex items-center gap-2">
                            <CheckCircle2 className="w-4 h-4 text-solar-500 shrink-0" />
                            <span>Megawatt-scale bifacial canopy architecture</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle2 className="w-4 h-4 text-solar-500 shrink-0" />
                            <span>Commercial peak-demand shaving OS</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle2 className="w-4 h-4 text-solar-500 shrink-0" />
                            <span>Enterprise ESG compliance & carbon reporting</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle2 className="w-4 h-4 text-solar-500 shrink-0" />
                            <span>Federal & state incentive optimization</span>
                          </li>
                        </ul>
                      </CardContent>
                    </div>

                    <CardFooter className="p-6 pt-0 border-t border-beige-200 mt-4 flex items-center justify-between">
                      <div>
                        <span className="text-xs text-muted-foreground block">Capacity</span>
                        <span className="font-heading font-bold text-lg text-charcoal-900">
                          100 kW — 1+ MW
                        </span>
                      </div>
                      <Button variant="charcoal" size="sm">
                        Inquire
                      </Button>
                    </CardFooter>
                  </Card>
                </div>
              </div>
            </Container>
          </Section>
        )}

        {/* Interactive Solar Savings Calculator */}
        {v.calculator && <SavingsCalculator />}

        {/* Conversion Sections: Testimonials, Shadcn FAQ Accordion, Final CTA */}
        <ConversionSections
          testimonialsData={content.testimonials}
          faqsData={content.faqs}
          showTestimonials={v.testimonials}
          showFaq={v.faq}
          showContact={v.contact}
        />
      </main>

      {/* Global Brand Footer */}
      <Footer />
    </div>
  );
}
