"use client";

import * as React from "react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Container } from "@/components/core/container";
import { Section } from "@/components/core/section";
import { Heading } from "@/components/core/heading";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import {
  Sun,
  Sliders,
  CheckCircle2,
  Award,
} from "lucide-react";

import { HeroSection } from "@/components/home/hero-section";
import { ServicesSection } from "@/components/home/services-section";
import { HowItWorksSection } from "@/components/home/how-it-works-section";
import { ProjectsSection } from "@/components/home/projects-section";
import { SavingsCalculator } from "@/components/home/savings-calculator";
import { ConversionSections } from "@/components/home/conversion-sections";

export default function HomePage() {
  // Color Tokens Data
  const brandColors = [
    {
      name: "Deep Forest Green",
      token: "var(--forest-900)",
      hex: "#072218",
      role: "Brand Foundation & Primary Tone",
      bgClass: "bg-[#072218]",
      textClass: "text-white",
      description:
        "Grounding emerald obsidian expressing environmental heritage and luxury permanence.",
    },
    {
      name: "Solar Gold",
      token: "var(--solar-400)",
      hex: "#F5B338",
      role: "High-Energy Accent & Brilliance",
      bgClass: "bg-[#F5B338]",
      textClass: "text-[#0D1210]",
      description:
        "Radiant warm sunlight aurum for high-converting CTAs, accents, and power metrics.",
    },
    {
      name: "Pure White",
      token: "#FFFFFF",
      hex: "#FFFFFF",
      role: "Surface Clarity & Contrast",
      bgClass: "bg-white",
      textClass: "text-charcoal-900",
      description:
        "Crisp architectural canvas maximizing legibility and minimalist sophistication.",
    },
    {
      name: "Warm Beige",
      token: "var(--beige-100)",
      hex: "#F5F0E6",
      role: "Architectural Paper Tone",
      bgClass: "bg-[#F5F0E6]",
      textClass: "text-charcoal-900",
      description:
        "Organic sand stone hue providing warm tactile neutrality without cold sterile greys.",
    },
    {
      name: "Dark Charcoal",
      token: "var(--charcoal-900)",
      hex: "#131916",
      role: "Typography & Modern Depth",
      bgClass: "bg-[#131916]",
      textClass: "text-white",
      description:
        "Ultra-deep slate charcoal for precision typography, luxury cards, and nocturnal UI.",
    },
  ];

  return (
    <div className="flex min-h-screen flex-col bg-background selection:bg-solar-300 selection:text-forest-950">
      {/* Global Sticky Navigation */}
      <Navbar />

      <main className="flex-1">
        {/* Full-Screen Modern Hero Section */}
        <HeroSection />

        {/* Premium Services & Why Choose Solar Legacy */}
        <ServicesSection />

        {/* 4-Step Process: How Solar Works */}
        <HowItWorksSection />

        {/* Featured Projects & Key Metrics */}
        <ProjectsSection />

        {/* =========================================================================
            FOUNDATION & DESIGN SYSTEM SHOWCASE (Required by User Prompt)
           ========================================================================= */}
        <Section
          id="foundations"
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
                    Design Tokens & Architecture
                  </Badge>
                }
                solarAccent="Global Color System"
                description="A meticulously tuned HSL color architecture blending deep organic forest greens, radiant solar gold, warm architectural beige, pure white, and modern charcoal."
              >
                Solar Legacy
              </Heading>

              {/* Color Swatch Cards Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
                {brandColors.map((color) => (
                  <Card
                    key={color.name}
                    variant="elevated"
                    hoverEffect="lift"
                    className="overflow-hidden border-beige-200"
                  >
                    {/* Swatch preview */}
                    <div
                      className={`h-28 w-full ${color.bgClass} flex flex-col justify-between p-4 transition-transform group-hover:scale-105`}
                    >
                      <div className="flex items-center justify-between">
                        <span
                          className={`text-[11px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${
                            color.name === "Pure White" || color.name === "Warm Beige"
                              ? "bg-black/10 text-charcoal-900"
                              : "bg-white/20 text-white"
                          }`}
                        >
                          {color.hex}
                        </span>
                      </div>
                      <span className={`text-xs font-semibold ${color.textClass}`}>
                        {color.token}
                      </span>
                    </div>

                    <CardHeader className="p-4 sm:p-5 pb-2">
                      <CardTitle className="text-base font-bold text-charcoal-900">
                        {color.name}
                      </CardTitle>
                      <span className="text-xs font-semibold text-solar-600 uppercase tracking-wide font-sans">
                        {color.role}
                      </span>
                    </CardHeader>

                    <CardContent className="p-4 sm:p-5 pt-0">
                      <p className="text-xs text-charcoal-600 leading-relaxed">
                        {color.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Typography Specs Box */}
              <Card variant="beige" className="p-6 sm:p-8 border-beige-300 mt-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div className="flex flex-col gap-3">
                    <Badge variant="solar" size="sm" className="w-fit">
                      Typography Foundation
                    </Badge>
                    <h3 className="font-heading font-bold text-2xl text-charcoal-900">
                      Manrope & Inter Pairing
                    </h3>
                    <p className="text-sm text-charcoal-600 leading-relaxed">
                      Optimized for both impactful luxury branding and crystal-clear
                      readability. Headings leverage the geometric, architectural weight
                      of <strong>Manrope</strong>, while body copy and data cards
                      render with <strong>Inter</strong>.
                    </p>
                  </div>

                  <div className="bg-white rounded-xl p-5 border border-beige-200 flex flex-col gap-4 shadow-xs">
                    <div className="border-b border-beige-200 pb-3">
                      <span className="text-xs uppercase font-mono text-muted-foreground block mb-1">
                        Display & Headings (Manrope)
                      </span>
                      <span className="font-heading font-extrabold text-xl text-charcoal-900">
                        Architectural Precision 0123456789
                      </span>
                    </div>
                    <div>
                      <span className="text-xs uppercase font-mono text-muted-foreground block mb-1">
                        Body & Interface (Inter)
                      </span>
                      <span className="font-sans text-sm text-charcoal-700 leading-relaxed block">
                        Engineered with 23.8% efficiency monocrystalline cells, providing
                        unrivaled clean energy performance for landmark properties.
                      </span>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </Container>
        </Section>

        {/* =========================================================================
            REUSABLE COMPONENTS DEMONSTRATION SECTION
           ========================================================================= */}
        <Section
          id="components"
          spacing="lg"
          background="beige"
          className="border-b border-beige-200"
        >
          <Container size="xl" padding="normal">
            <div className="flex flex-col gap-12">
              <Heading
                level={2}
                align="center"
                eyebrow={
                  <Badge variant="solar" size="sm">
                    Modular Component Suite
                  </Badge>
                }
                solarAccent="Reusable UI Primitives"
                description="Production-ready, highly reusable components built with Shadcn UI principles, TypeScript, and customized for the Solar Legacy design system."
              >
                Scalable & Extensible
              </Heading>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* 1. Button Showcase */}
                <Card variant="default" className="p-6 sm:p-8 bg-white border-beige-200">
                  <div className="flex items-center justify-between mb-6 pb-4 border-b border-beige-200">
                    <div className="flex items-center gap-2.5">
                      <div className="p-2 rounded-lg bg-solar-400/20 text-solar-600">
                        <Sliders className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-heading font-bold text-lg text-charcoal-900">
                          Button Component
                        </h4>
                        <span className="text-xs text-muted-foreground">
                          Variants: default, solar, forest, outline, secondary, ghost
                        </span>
                      </div>
                    </div>
                    <Badge variant="forest" size="sm">
                      Interactive
                    </Badge>
                  </div>

                  <div className="flex flex-col gap-6">
                    {/* Primary Variants */}
                    <div>
                      <span className="text-xs font-semibold text-charcoal-600 uppercase tracking-wider block mb-3">
                        Brand Variants
                      </span>
                      <div className="flex flex-wrap gap-3">
                        <Button variant="solar">Solar Gold</Button>
                        <Button variant="forest">Deep Forest</Button>
                        <Button variant="solarOutline">Solar Outline</Button>
                        <Button variant="forestOutline">Forest Outline</Button>
                        <Button variant="secondary">Secondary Beige</Button>
                        <Button variant="charcoal">Charcoal</Button>
                        <Button variant="ghost">Ghost</Button>
                      </div>
                    </div>

                    {/* Button Sizes */}
                    <div>
                      <span className="text-xs font-semibold text-charcoal-600 uppercase tracking-wider block mb-3">
                        Size Hierarchy
                      </span>
                      <div className="flex flex-wrap items-center gap-3">
                        <Button variant="forest" size="sm">
                          Small (sm)
                        </Button>
                        <Button variant="forest" size="default">
                          Default (md)
                        </Button>
                        <Button variant="forest" size="lg">
                          Large (lg)
                        </Button>
                        <Button variant="solar" size="icon">
                          <Sun className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>

                {/* 2. Badge Showcase */}
                <Card variant="default" className="p-6 sm:p-8 bg-white border-beige-200">
                  <div className="flex items-center justify-between mb-6 pb-4 border-b border-beige-200">
                    <div className="flex items-center gap-2.5">
                      <div className="p-2 rounded-lg bg-forest-800/10 text-forest-800">
                        <Award className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-heading font-bold text-lg text-charcoal-900">
                          Badge Component
                        </h4>
                        <span className="text-xs text-muted-foreground">
                          Presets with optional pulsating status indicators
                        </span>
                      </div>
                    </div>
                    <Badge variant="solar" size="sm">
                      Variants
                    </Badge>
                  </div>

                  <div className="flex flex-col gap-6">
                    <div>
                      <span className="text-xs font-semibold text-charcoal-600 uppercase tracking-wider block mb-3">
                        Color Variants
                      </span>
                      <div className="flex flex-wrap gap-2.5">
                        <Badge variant="default">Default Forest</Badge>
                        <Badge variant="solar">Solar Amber</Badge>
                        <Badge variant="solarSolid">Solar Solid</Badge>
                        <Badge variant="forest">Forest Subtle</Badge>
                        <Badge variant="beige">Warm Beige</Badge>
                        <Badge variant="charcoal">Dark Charcoal</Badge>
                        <Badge variant="outline">Minimal Outline</Badge>
                      </div>
                    </div>

                    <div>
                      <span className="text-xs font-semibold text-charcoal-600 uppercase tracking-wider block mb-3">
                        Live Status Indicators
                      </span>
                      <div className="flex flex-wrap gap-3">
                        <Badge variant="solar" dot dotColor="solar" pulse>
                          Solar Inverter Active
                        </Badge>
                        <Badge variant="forest" dot dotColor="green" pulse>
                          Grid Online (99.8%)
                        </Badge>
                        <Badge variant="charcoal" dot dotColor="solar">
                          Storage Discharging
                        </Badge>
                      </div>
                    </div>
                  </div>
                </Card>

                {/* 3. Card Variations Showcase */}
                <div className="lg:col-span-2">
                  <div className="mb-4">
                    <span className="text-xs font-semibold text-charcoal-600 uppercase tracking-wider block">
                      Card System Variants & Elevation
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Default Card */}
                    <Card
                      variant="default"
                      hoverEffect="lift"
                      className="bg-white border-beige-200"
                    >
                      <CardHeader>
                        <Badge variant="forest" size="sm" className="w-fit mb-2">
                          Standard Elevation
                        </Badge>
                        <CardTitle>Default White Card</CardTitle>
                        <CardDescription>
                          Crisp white container with subtle borders and smooth hover lift.
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-xs text-charcoal-600">
                          Ideal for clean specifications, form fields, and documentation.
                        </p>
                      </CardContent>
                      <CardFooter>
                        <Button variant="forestOutline" size="sm" className="w-full">
                          Action
                        </Button>
                      </CardFooter>
                    </Card>

                    {/* Forest Luxury Card */}
                    <Card
                      variant="forest"
                      hoverEffect="glow"
                      className="border-forest-700/60"
                    >
                      <CardHeader>
                        <Badge
                          variant="solar"
                          size="sm"
                          dot
                          dotColor="solar"
                          className="w-fit mb-2 text-white border-solar-400/40"
                        >
                          Luxury Forest
                        </Badge>
                        <CardTitle className="text-white">Dark Forest Card</CardTitle>
                        <CardDescription className="text-beige-200">
                          Deep emerald background with ambient gold glow hover state.
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-xs text-beige-300">
                          Used for featured offerings, system guarantees, and metrics.
                        </p>
                      </CardContent>
                      <CardFooter>
                        <Button variant="solar" size="sm" className="w-full font-bold">
                          Configure
                        </Button>
                      </CardFooter>
                    </Card>

                    {/* Solar Highlight Card */}
                    <Card
                      variant="solarHighlight"
                      hoverEffect="lift"
                      className="bg-white"
                    >
                      <CardHeader>
                        <Badge variant="solarSolid" size="sm" className="w-fit mb-2">
                          Recommended Tier
                        </Badge>
                        <CardTitle className="text-charcoal-900">
                          Solar Highlight Card
                        </CardTitle>
                        <CardDescription>
                          High-converting card featuring a prominent 2px solar gold border.
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-xs text-charcoal-600">
                          Perfect for best-seller plans and high-priority callouts.
                        </p>
                      </CardContent>
                      <CardFooter>
                        <Button variant="solar" size="sm" className="w-full font-bold">
                          Select System
                        </Button>
                      </CardFooter>
                    </Card>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </Section>

        {/* =========================================================================
            SOLAR ARCHITECTURE & SYSTEM TIERS (Brand Presentation)
           ========================================================================= */}
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

        {/* Interactive Solar Savings Calculator */}
        <SavingsCalculator />

        {/* Conversion Sections: Testimonials, Shadcn FAQ Accordion, Final CTA */}
        <ConversionSections />
      </main>

      {/* Global Brand Footer */}
      <Footer />
    </div>
  );
}
