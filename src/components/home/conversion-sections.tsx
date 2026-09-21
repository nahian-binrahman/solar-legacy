"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/core/container";
import { Section } from "@/components/core/section";
import { Heading } from "@/components/core/heading";
import { Badge } from "@/components/ui/badge";
import { ConsultationForm } from "@/components/home/consultation-form";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import {
  Star,
  Quote,
  ShieldCheck,
  Sparkles,
  CheckCircle2,
} from "lucide-react";

import { TestimonialItem, FAQItem } from "@/types/content";

interface ConversionSectionsProps {
  testimonialsData?: TestimonialItem[];
  faqsData?: FAQItem[];
  showTestimonials?: boolean;
  showFaq?: boolean;
  showContact?: boolean;
}

export function ConversionSections({
  testimonialsData,
  faqsData,
  showTestimonials = true,
  showFaq = true,
  showContact = true,
}: ConversionSectionsProps) {
  const defaultTestimonials = [
    {
      name: "Arthur Pendelton",
      role: "Architectural Estate Owner",
      location: "Carmel-by-the-Sea, CA",
      initials: "AP",
      rating: 5,
      review:
        "Solar Legacy was the only engineering firm capable of integrating high-efficiency panels into our custom cedar and slate roofline without disturbing the aesthetic line. Our utility bill dropped to $0.",
    },
    {
      name: "Elena Rostova",
      role: "Managing Director, BioVenture Labs",
      location: "Austin, TX",
      initials: "ER",
      rating: 5,
      review:
        "The 1.25 MW canopy project exceeded all ESG targets. The installation was seamless, and the telemetry dashboard gives our board real-time visibility into carbon reduction and financial yield.",
    },
    {
      name: "Marcus Vance",
      role: "Vineyard Estate Owner",
      location: "Napa Valley, CA",
      initials: "MV",
      rating: 5,
      review:
        "When the regional grid collapsed during wildfire season, our 60kWh solid-state battery array switched over in milliseconds. Our climate controls and irrigation ran uninterrupted for 4 days.",
    },
  ];

  const testimonials = testimonialsData
    ? testimonialsData.map((t) => ({
        name: t.name,
        role: t.role,
        location: t.company,
        initials: t.name.split(" ").map((n) => n[0]).join("").slice(0, 2),
        rating: t.rating,
        review: t.review,
      }))
    : defaultTestimonials;

  const defaultFaqs = [
    {
      question: "Is my home suitable for solar?",
      answer:
        "Most homes with south, east, or west-facing roof exposure and minimal tree shading are ideal. During our initial consultation, our engineering team uses satellite LiDAR 3D irradiance mapping to analyze roof azimuth, structural integrity, and shading patterns down to the square inch.",
    },
    {
      question: "How much can I save?",
      answer:
        "Most Solar Legacy residential clients reduce electric bills by 70% to 100%, saving between $4,000 and $18,000+ annually. Commercial estates frequently save upwards of $60,000 yearly while taking advantage of the 30% federal investment tax credit (ITC) and accelerated MACRS depreciation.",
    },
    {
      question: "Do batteries work during outages?",
      answer:
        "Yes, absolutely. Unlike conventional grid-tied solar that shuts down during blackouts, Solar Legacy systems paired with our Solid-State Battery Storage feature micro-grid islanding capabilities. They instantaneously disconnect from the dead grid and supply continuous, clean power to your essential circuits.",
    },
    {
      question: "How long does installation take?",
      answer:
        "Physical on-roof and electrical installation is completed in just 2 to 4 business days by our certified master electricians. Prior to that, municipal permitting, utility interconnection applications, and custom CAD engineering typically take 3 to 5 weeks.",
    },
  ];

  const faqs = faqsData
    ? faqsData.map((f) => ({ question: f.question, answer: f.answer }))
    : defaultFaqs;

  return (
    <>
      {/* 1. Testimonials Section */}
      {showTestimonials && (
      <Section id="resources" spacing="lg" background="white" className="border-b border-beige-200">
        <Container size="xl" padding="normal">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <Badge variant="forest" size="sm" className="mb-3">
              Client Endorsements
            </Badge>
            <Heading level={2} align="center" solarAccent="Customer Experiences">
              Proven Across Landmark Properties:
            </Heading>
            <p className="text-sm text-charcoal-600 mt-3 leading-relaxed">
              Read how homeowners and estate architects experience energy autonomy with Solar Legacy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((item, idx) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.12 }}
                whileHover={{ y: -6 }}
                className="flex flex-col justify-between p-7 rounded-2xl bg-beige-50 border border-beige-200/80 shadow-md hover:shadow-xl transition-all duration-300"
              >
                <div>
                  {/* Rating Stars & Quote Icon */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="flex items-center gap-1">
                      {[...Array(item.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-solar-400 text-solar-400" />
                      ))}
                    </div>
                    <Quote className="w-6 h-6 text-forest-900/20" />
                  </div>

                  <p className="text-sm text-charcoal-800 leading-relaxed italic mb-6">
                    &ldquo;{item.review}&rdquo;
                  </p>
                </div>

                {/* Avatar & Customer Meta */}
                <div className="flex items-center gap-3 pt-4 border-t border-beige-200">
                  <div className="w-11 h-11 rounded-full bg-forest-900 text-solar-400 flex items-center justify-center font-heading font-bold text-sm shadow-xs">
                    {item.initials}
                  </div>
                  <div className="flex flex-col">
                    <span className="font-heading font-bold text-sm text-charcoal-900">
                      {item.name}
                    </span>
                    <span className="text-[11px] text-muted-foreground">
                      {item.role} · {item.location}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>
      )}

      {/* 2. FAQ Section */}
      {showFaq && (
      <Section id="faq" spacing="lg" background="forestDeep" className="text-white relative overflow-hidden">
        <Container size="lg" padding="normal">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <Badge variant="glass" size="sm" dot dotColor="solar" pulse className="mb-3 text-solar-300 border-solar-400/30">
              Clear Answers
            </Badge>
            <Heading level={2} align="center" theme="white" solarAccent="Frequently Asked Questions">
              Solar Engineering & Economics:
            </Heading>
            <p className="text-sm text-beige-300 mt-2">
              Everything you need to know about system feasibility, incentives, and installation.
            </p>
          </div>

          <div className="max-w-3xl mx-auto rounded-2xl bg-forest-900/50 backdrop-blur-xl border border-white/10 p-6 sm:p-10 shadow-2xl">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger>{faq.question}</AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </Container>
      </Section>
      )}

      {/* 3. Final High-Conversion CTA Section */}
      {showContact && (
      <Section id="contact" spacing="xl" background="forestDeep" className="relative text-white border-t border-forest-800">
        <div className="absolute inset-0 bg-gradient-to-b from-forest-900/70 via-forest-950 to-forest-950 -z-10" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-solar-400/15 blur-[150px] rounded-full pointer-events-none -z-10" />

        <Container size="xl" padding="normal">
          <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
            <Badge variant="glass" size="sm" className="mb-4 text-solar-300 border-solar-400/40">
              <Sparkles className="w-3.5 h-3.5 mr-1" />
              Limited Monthly Engineering Allocations
            </Badge>

            <h2 className="font-heading font-extrabold text-3xl sm:text-5xl lg:text-6xl tracking-tight text-white mb-6 leading-tight">
              Ready to take control of your{" "}
              <span className="solar-gradient-text block sm:inline">
                energy future?
              </span>
            </h2>

            <p className="text-base sm:text-lg text-beige-200 max-w-2xl mb-10 leading-relaxed font-light">
              Speak with a senior Solar Legacy architect today. Receive a full 3D roof irradiance
              simulation, battery storage optimization plan, and guaranteed 25-year financial forecast.
            </p>

            <div className="w-full mt-2 mb-10">
              <ConsultationForm />
            </div>

            <div className="flex flex-wrap items-center justify-center gap-6 mt-10 pt-8 border-t border-white/10 text-xs text-beige-300">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-solar-400" />
                <span>Zero Obligation Assessment</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-solar-400" />
                <span>25-Year Production Guarantee</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-solar-400" />
                <span>Custom Architectural CAD</span>
              </div>
            </div>
          </div>
        </Container>
      </Section>
      )}
    </>
  );
}
