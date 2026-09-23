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
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  ArrowRight,
  Sun,
  BatteryCharging,
  ShieldCheck,
  AlertCircle,
  Power,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Solar + Battery | Generate It. Store It. Use It on Your Terms.",
  description: "Solar produces energy during the day. Battery storage saves that power for evenings, peak rates, and grid outages.",
};

export default function SolarAndBatteryPage() {
  const faqs = [
    {
      q: "Does a solar + battery system guarantee $0 electric bills?",
      a: "No. Our goal is to design your system around your actual energy usage and reduce unnecessary dependence on utility electricity. Customers may still receive required utility charges and charges for any energy drawn from the grid.",
    },
    {
      q: "How fast does the battery take over during an unexpected blackout?",
      a: "Modern high-voltage LFP storage modules feature automated micro-grid islanding switchgear that engages in under 4 milliseconds, preventing computers, clocks, and home appliances from dropping power.",
    },
    {
      q: "Can I choose between essential-circuit backup and whole-home backup?",
      a: "Yes. During your architectural engineering review, we assess your electrical panel. Essential load covers refrigeration, lighting, internet, and medical devices. Extended or whole-home systems include HVAC and EV charging.",
    },
    {
      q: "How does daytime production compare to nighttime usage?",
      a: "Midday solar production often exceeds instant household demand. Without a battery, that excess is pushed back to the utility at low wholesale credit rates. With a battery, you store that clean power to run your estate in the evening when utility rates peak.",
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
              src="/tier-microgrid-bifacial.jpg"
              alt="Solar and Battery Luxury Microgrid"
              fill
              priority
              className="object-cover object-center opacity-30 brightness-75 scale-105"
            />
          </div>
          <div className="absolute inset-0 z-1 bg-gradient-to-b from-forest-950/85 via-forest-950/70 to-forest-950" />

          <Container size="xl" padding="normal" className="relative z-10 max-w-4xl mx-auto text-center">
            <Badge variant="glass" size="default" dot dotColor="solar" pulse className="mb-5 border-solar-400/40 text-solar-300">
              Integrated Solar + Solid-State Storage
            </Badge>
            <h1 className="font-heading font-extrabold text-3xl sm:text-5xl lg:text-6xl tracking-tight text-white leading-tight mb-6">
              Generate It. Store It. <span className="solar-gradient-text">Use It on Your Terms.</span>
            </h1>
            <p className="text-base sm:text-xl text-beige-200 font-sans max-w-2xl mx-auto leading-relaxed mb-8 font-light">
              Solar produces energy during the day. Battery storage allows you to save more of that energy for evenings, expensive utility periods, and qualifying power outages.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                variant="solar"
                size="lg"
                className="font-bold text-forest-950 shadow-xl shadow-solar-400/25 h-13 px-8 text-base"
                asChild
              >
                <Link href="/#quote">
                  <span>Design My Solar + Battery System</span>
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </div>
          </Container>
        </section>

        {/* Required Positioning Disclosure Banner */}
        <div className="bg-forest-900/90 border-y border-solar-400/20 py-4 px-4 text-center">
          <Container size="lg" padding="compact" className="flex items-center justify-center gap-3 text-xs sm:text-sm text-beige-200">
            <AlertCircle className="w-5 h-5 text-solar-400 shrink-0" />
            <p className="font-sans leading-relaxed">
              <strong>Transparent Positioning:</strong> Our goal is to design your system around your actual energy usage and reduce unnecessary dependence on utility electricity. Customers may still receive required utility charges and charges for any energy drawn from the grid.
            </p>
          </Container>
        </div>

        {/* 1. Why Solar Alone May Not Provide Complete Control */}
        <Section spacing="normal" background="forestDeep" className="text-white relative">
          <Container size="xl" padding="normal">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge variant="glass" size="sm" className="mb-4 text-solar-400 border-solar-400/30">
                  The Timing Mismatch
                </Badge>
                <h2 className="font-heading font-bold text-3xl sm:text-4xl text-white mb-6">
                  Why Solar Alone May Not Provide Complete Energy Control
                </h2>
                <div className="flex flex-col gap-4 text-sm text-beige-300 font-sans leading-relaxed">
                  <p>
                    Solar panels generate their peak wattage during midday when sunlight is highest. However, most households consume the majority of their electricity during the late afternoon and evening—when cooking, entertaining, running climate systems, and charging EVs.
                  </p>
                  <p>
                    Without storage, excess daytime electricity is sent back to the grid for minimal net-metering credits, only for the home to buy expensive peak utility electricity hours later. Furthermore, standard grid-tied solar panels shut down during blackouts to protect utility line workers.
                  </p>
                </div>
              </div>

              <div className="p-8 rounded-3xl bg-forest-900/60 border border-white/10 flex flex-col gap-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-forest-950 text-solar-400 flex items-center justify-center shrink-0 border border-solar-400/30">
                    <Sun className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-lg text-white">Daytime Solar Generation</h3>
                    <p className="text-xs text-beige-300 mt-1">Powers current home needs while simultaneously routing surplus kilowatt-hours into your storage modules.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-forest-950 text-solar-400 flex items-center justify-center shrink-0 border border-solar-400/30">
                    <BatteryCharging className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-lg text-white">Evening Peak Shaving</h3>
                    <p className="text-xs text-beige-300 mt-1">Discharges stored solar power during 4 PM – 9 PM utility peak tariff windows, avoiding tier-3 utility prices.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-forest-950 text-solar-400 flex items-center justify-center shrink-0 border border-solar-400/30">
                    <Power className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-lg text-white">Grid Outage Islanding</h3>
                    <p className="text-xs text-beige-300 mt-1">Isolates your home from downed power lines in under 4ms, keeping your critical or whole-home circuits alive.</p>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </Section>

        {/* Backup Power Configurations: Whole-Home vs Essential-Load */}
        <Section spacing="normal" background="forestDeep" className="text-white relative border-t border-white/10">
          <Container size="xl" padding="normal">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <Badge variant="glass" size="sm" className="mb-3 text-solar-300 border-solar-400/30">
                Resilience Engineering
              </Badge>
              <h2 className="font-heading font-bold text-3xl sm:text-4xl text-white">
                Backup-Power Options Built For Your Priorities
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-8 rounded-3xl bg-forest-900/60 border border-white/15 flex flex-col justify-between">
                <div>
                  <Badge variant="glass" size="sm" className="mb-4 text-solar-300 border-solar-400/30">
                    Core Security
                  </Badge>
                  <h3 className="font-heading font-bold text-2xl text-white mb-3">Essential-Load Backup</h3>
                  <p className="text-sm text-beige-200 mb-6 font-sans">
                    Dedicated subpanel wiring that safeguards the critical circuits necessary for health, connectivity, and preservation.
                  </p>
                  <ul className="flex flex-col gap-2.5 text-xs text-beige-300">
                    <li className="flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-solar-400" /> Refrigeration and freezers</li>
                    <li className="flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-solar-400" /> Wi-Fi routers, modem, and security cameras</li>
                    <li className="flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-solar-400" /> Medical equipment & garage door openers</li>
                    <li className="flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-solar-400" /> Key lighting and device charging stations</li>
                  </ul>
                </div>
                <div className="mt-8 pt-4 border-t border-white/10 text-xs text-solar-400 font-mono">
                  Compact 10 kWh – 15 kWh LFP capacity
                </div>
              </div>

              <div className="p-8 rounded-3xl bg-forest-900/70 border border-solar-400/40 flex flex-col justify-between shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-solar-400/10 rounded-full blur-2xl pointer-events-none" />
                <div>
                  <Badge variant="solarSolid" size="sm" className="mb-4">
                    Complete Autonomy
                  </Badge>
                  <h3 className="font-heading font-bold text-2xl text-white mb-3">Whole-Home Energy System</h3>
                  <p className="text-sm text-beige-200 mb-6 font-sans">
                    High-output multi-battery array engineered to handle full electrical panel demands, multi-zone HVAC, and lifestyle loads.
                  </p>
                  <ul className="flex flex-col gap-2.5 text-xs text-beige-300">
                    <li className="flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-solar-400" /> Whole-house air conditioning and heat pumps</li>
                    <li className="flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-solar-400" /> Electric vehicle level-2 charging</li>
                    <li className="flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-solar-400" /> Induction cooktops and water heaters</li>
                    <li className="flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-solar-400" /> Multi-day off-grid operational resilience</li>
                  </ul>
                </div>
                <div className="mt-8 pt-4 border-t border-white/10 text-xs text-solar-400 font-mono">
                  Scalable 30 kWh – 80+ kWh modular arrays
                </div>
              </div>
            </div>
          </Container>
        </Section>

        {/* FAQs */}
        <Section spacing="normal" background="forestDeep" className="text-white relative border-t border-white/10">
          <Container size="md" padding="normal">
            <div className="text-center mb-12">
              <Badge variant="glass" size="sm" className="mb-3 text-solar-300 border-solar-400/30">
                Clarity & Answers
              </Badge>
              <h2 className="font-heading font-bold text-3xl sm:text-4xl text-white">
                Frequently Asked Questions
              </h2>
            </div>

            <Accordion type="single" collapsible className="flex flex-col gap-4">
              {faqs.map((faq, i) => (
                <AccordionItem key={i} value={`faq-${i}`} className="border border-white/10 rounded-2xl bg-forest-900/50 px-6">
                  <AccordionTrigger className="text-left font-heading font-bold text-base text-white hover:text-solar-300">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm text-beige-300 font-sans leading-relaxed pt-2">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            <div className="mt-14 text-center">
              <Button
                variant="solar"
                size="lg"
                className="font-bold text-forest-950 h-13 px-8 text-base shadow-xl shadow-solar-400/25"
                asChild
              >
                <Link href="/#quote">
                  <span>Design My Solar + Battery System</span>
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
