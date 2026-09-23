"use client";

import * as React from "react";
import Image from "next/image";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Container } from "@/components/core/container";
import { Section } from "@/components/core/section";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CustomEnergyPlanForm } from "@/components/service/custom-energy-plan-form";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  ArrowRight,
  CheckCircle2,
  AlertCircle,
  ShieldCheck,
} from "lucide-react";

export interface ServicePageData {
  badge: string;
  // 1. Clear customer-focused headline
  headline: string;
  headlineHighlight: string;
  // 2. One-sentence explanation
  oneSentenceExplanation: string;
  heroImage: string;
  heroImageAlt: string;
  heroFloatingBadge?: { title: string; subtitle: string };

  // Mandatory positioning/transparency banner (if applicable)
  transparencyBanner?: string;

  // 4. Customer problem
  problems: { title: string; desc: string }[];

  // 5. Solar Legacy solution
  solutions: { title: string; desc: string; icon?: React.ElementType }[];

  // 6. Three to five core benefits
  coreBenefits: { title: string; desc: string }[];

  // 7. Who the solution is best for
  bestFitProfiles: { title: string; desc: string }[];

  // 8. How the process works
  processSteps: { step: string; title: string; desc: string }[];

  // 9. Program or payment options
  paymentOptions: {
    title: string;
    subtitle: string;
    highlights: string[];
    isFeatured?: boolean;
  }[];

  // 10. Warranty and support information
  warrantyPoints: { title: string; desc: string }[];

  // 11. Frequently asked questions
  faqs: { question: string; answer: string }[];

  // Form configuration
  defaultInterest?: "Solar" | "Battery" | "Both (Solar + Battery)";
  defaultProperty?: "Residential" | "Commercial";
}

export function UniversalServiceTemplate({ data }: { data: ServicePageData }) {
  const scrollToForm = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById("plan-form");
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-forest-950 text-white selection:bg-solar-400 selection:text-forest-950">
      <Navbar />

      <main>
        {/* 1, 2, 3: HEADLINE, ONE-SENTENCE EXPLANATION, PRIMARY CTA */}
        <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-forest-950">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(217,119,6,0.18),rgba(255,255,255,0))]" />
          <div className="absolute inset-0 bg-noise opacity-20 pointer-events-none" />

          <Container size="xl" padding="normal" className="relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7 space-y-6 text-left">
                <Badge variant="gold" className="px-4 py-1.5 uppercase tracking-widest text-xs font-semibold">
                  {data.badge}
                </Badge>
                {/* 1. Clear customer-focused headline */}
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-medium tracking-tight text-white leading-[1.1]">
                  {data.headline}{" "}
                  <span className="italic font-light text-solar-300">{data.headlineHighlight}</span>
                </h1>
                {/* 2. One-sentence explanation */}
                <p className="text-base sm:text-lg text-beige-200/80 leading-relaxed max-w-2xl">
                  {data.oneSentenceExplanation}
                </p>
                {/* 3. Primary CTA */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                  <Button
                    onClick={scrollToForm}
                    variant="solar"
                    size="lg"
                    className="rounded-xl px-8 py-6 font-bold shadow-xl shadow-solar-400/20 text-forest-950 cursor-pointer"
                  >
                    <span>Build My Custom Energy Plan</span>
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="rounded-xl border-white/20 hover:bg-white/10 text-white"
                  >
                    <a href="#process">See How It Works</a>
                  </Button>
                </div>
              </div>

              <div className="lg:col-span-5 relative">
                <div className="relative rounded-3xl overflow-hidden border border-solar-400/30 shadow-2xl aspect-[4/3] group">
                  <Image
                    src={data.heroImage}
                    alt={data.heroImageAlt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-forest-950/20 to-transparent" />
                  {data.heroFloatingBadge && (
                    <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-forest-900/85 backdrop-blur-md border border-white/10 text-left">
                      <div className="text-xs uppercase tracking-widest text-solar-400 font-bold mb-1">
                        {data.heroFloatingBadge.title}
                      </div>
                      <div className="text-sm font-medium text-white">
                        {data.heroFloatingBadge.subtitle}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* MANDATORY TRANSPARENCY BANNER (if present) */}
        {data.transparencyBanner && (
          <div className="bg-forest-900/95 border-y border-solar-400/25 py-4 px-4 text-center">
            <Container size="lg" padding="compact" className="flex items-center justify-center gap-3 text-xs sm:text-sm text-beige-200">
              <AlertCircle className="w-5 h-5 text-solar-400 shrink-0" />
              <p className="font-sans leading-relaxed text-left">
                <strong>Mandatory Disclosure:</strong> {data.transparencyBanner}
              </p>
            </Container>
          </div>
        )}

        {/* 4. CUSTOMER PROBLEM */}
        <Section background="dark" spacing="loose" className="relative border-t border-white/5">
          <Container size="xl" padding="normal">
            <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
              <Badge variant="glass" className="px-3.5 py-1 text-xs uppercase tracking-widest text-solar-300">
                The Customer Challenge
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-serif font-medium text-white">
                The Cost & Vulnerability of Doing Nothing
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              {data.problems.map((prob) => (
                <div key={prob.title} className="p-8 rounded-2xl bg-forest-900/50 border border-white/10 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-serif text-white font-medium mb-3">{prob.title}</h3>
                    <p className="text-beige-200/70 text-sm leading-relaxed">{prob.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </Section>

        {/* 5. SOLAR LEGACY SOLUTION */}
        <Section background="charcoal" spacing="loose" className="relative border-t border-white/5">
          <Container size="xl" padding="normal">
            <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
              <Badge variant="glass" className="px-3.5 py-1 text-xs uppercase tracking-widest text-solar-300">
                Engineered Resolution
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-serif font-medium text-white">
                The Solar Legacy Engineering Solution
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
              {data.solutions.map((sol) => (
                <div key={sol.title} className="p-7 rounded-2xl bg-forest-950/80 border border-white/10 flex flex-col justify-between">
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-solar-400/10 border border-solar-400/20 flex items-center justify-center text-solar-400 mb-5">
                      <CheckCircle2 className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-serif text-white font-medium mb-2">{sol.title}</h3>
                    <p className="text-xs sm:text-sm text-beige-200/70 leading-relaxed">{sol.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </Section>

        {/* 6. THREE TO FIVE CORE BENEFITS */}
        <Section background="dark" spacing="loose" className="relative border-t border-white/5">
          <Container size="xl" padding="normal">
            <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
              <Badge variant="gold" className="px-3.5 py-1 text-xs uppercase tracking-widest">
                Core Advantages
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-serif font-medium text-white">
                Measurable, Lasting Value
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
              {data.coreBenefits.map((b) => (
                <div key={b.title} className="p-7 rounded-2xl bg-forest-900/60 border border-solar-400/20 flex flex-col justify-between">
                  <div>
                    <div className="text-xs font-mono text-solar-400 uppercase tracking-widest mb-3">Key Benefit</div>
                    <h3 className="text-lg font-serif text-white font-medium mb-3">{b.title}</h3>
                    <p className="text-xs sm:text-sm text-beige-200/80 leading-relaxed">{b.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </Section>

        {/* 7. WHO THE SOLUTION IS BEST FOR */}
        <Section background="charcoal" spacing="loose" className="relative border-t border-white/5">
          <Container size="xl" padding="normal">
            <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
              <Badge variant="glass" className="px-3.5 py-1 text-xs uppercase tracking-widest text-solar-300">
                Ideal Applications
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-serif font-medium text-white">
                Who This Solution Is Best For
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              {data.bestFitProfiles.map((fit) => (
                <div key={fit.title} className="p-8 rounded-2xl bg-forest-950/80 border border-white/10 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-serif text-white font-medium mb-3">{fit.title}</h3>
                    <p className="text-xs sm:text-sm text-beige-200/75 leading-relaxed">{fit.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </Section>

        {/* 8. HOW THE PROCESS WORKS */}
        <Section id="process" background="dark" spacing="loose" className="relative border-t border-white/5">
          <Container size="xl" padding="normal">
            <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
              <Badge variant="glass" className="px-3.5 py-1 text-xs uppercase tracking-widest text-solar-300">
                Turnkey Workflow
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-serif font-medium text-white">
                How The Process Works
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
              {data.processSteps.map((step) => (
                <div key={step.step} className="p-7 rounded-2xl bg-forest-900/50 border border-white/10 flex flex-col justify-between">
                  <div>
                    <div className="text-3xl font-serif font-bold text-solar-400/50 mb-4">{step.step}</div>
                    <h3 className="text-lg font-serif text-white font-medium mb-2">{step.title}</h3>
                    <p className="text-xs text-beige-200/70 leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </Section>

        {/* 9. PROGRAM OR PAYMENT OPTIONS */}
        <Section background="charcoal" spacing="loose" className="relative border-t border-white/5">
          <Container size="xl" padding="normal">
            <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
              <Badge variant="gold" className="px-3.5 py-1 text-xs uppercase tracking-widest">
                Flexible Capital
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-serif font-medium text-white">
                Program & Payment Pathways
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 text-left">
              {data.paymentOptions.map((opt) => (
                <div
                  key={opt.title}
                  className={`p-8 sm:p-10 rounded-3xl flex flex-col justify-between ${
                    opt.isFeatured
                      ? "bg-forest-900/80 border-2 border-solar-400 shadow-2xl shadow-solar-400/10"
                      : "bg-forest-950/80 border border-white/10"
                  }`}
                >
                  <div>
                    <div className="text-xs font-mono uppercase tracking-widest text-solar-400 mb-2">{opt.subtitle}</div>
                    <h3 className="text-2xl font-serif text-white font-medium mb-6">{opt.title}</h3>
                    <ul className="space-y-3 mb-8">
                      {opt.highlights.map((h) => (
                        <li key={h} className="flex items-start gap-2.5 text-xs sm:text-sm text-beige-200/90">
                          <CheckCircle2 className="w-4 h-4 text-solar-400 shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Button
                    onClick={scrollToForm}
                    variant={opt.isFeatured ? "solar" : "outline"}
                    size="default"
                    className="w-full rounded-xl cursor-pointer"
                  >
                    Select Option
                  </Button>
                </div>
              ))}
            </div>
          </Container>
        </Section>

        {/* 10. WARRANTY AND SUPPORT INFORMATION */}
        <Section background="dark" spacing="loose" className="relative border-t border-white/5">
          <Container size="xl" padding="normal">
            <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
              <Badge variant="glass" className="px-3.5 py-1 text-xs uppercase tracking-widest text-solar-300">
                Lifetime Assurance
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-serif font-medium text-white">
                Warranty & Ongoing Support
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
              {data.warrantyPoints.map((w) => (
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

        {/* 11. FREQUENTLY ASKED QUESTIONS */}
        <Section background="charcoal" spacing="loose" className="relative border-t border-white/5">
          <Container size="lg" padding="normal">
            <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
              <Badge variant="glass" className="px-3.5 py-1 text-xs uppercase tracking-widest text-solar-300">
                FAQ
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-serif font-medium text-white">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="max-w-3xl mx-auto text-left">
              <Accordion type="single" collapsible className="space-y-4">
                {data.faqs.map((faq, idx) => (
                  <AccordionItem
                    key={idx}
                    value={`faq-${idx}`}
                    className="border border-white/10 rounded-2xl bg-forest-950/80 px-6 overflow-hidden"
                  >
                    <AccordionTrigger className="text-base font-serif font-medium text-white hover:text-solar-300 py-4 hover:no-underline">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-sm text-beige-200/80 leading-relaxed pb-5">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </Container>
        </Section>

        {/* 12. FINAL LEAD FORM */}
        <Section id="plan-form" background="dark" spacing="loose" className="relative border-t border-white/10">
          <Container size="xl" padding="normal">
            <CustomEnergyPlanForm
              defaultInterest={data.defaultInterest}
              defaultProperty={data.defaultProperty}
            />
          </Container>
        </Section>
      </main>

      <Footer />
    </div>
  );
}
