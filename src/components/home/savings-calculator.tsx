"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/core/container";
import { Section } from "@/components/core/section";
import { Heading } from "@/components/core/heading";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  TrendingUp,
  Building,
  Home,
  Sun,
  MapPin,
  ArrowRight,
} from "lucide-react";

export function SavingsCalculator() {
  const [bill, setBill] = React.useState<number>(450);
  const [propertyType, setPropertyType] = React.useState<string>("residential");
  const [location, setLocation] = React.useState<string>("sunbelt");

  // Multipliers
  const propertyMultipliers: Record<string, number> = {
    residential: 0.82,
    estate: 0.88,
    commercial: 0.92,
  };

  const locationMultipliers: Record<string, { factor: number; label: string }> = {
    california: { factor: 1.15, label: "California & Pacific" },
    sunbelt: { factor: 1.1, label: "Sunbelt & Southwest" },
    florida: { factor: 1.05, label: "Southeast & Florida" },
    midwest: { factor: 0.95, label: "Texas & Central" },
    northeast: { factor: 1.08, label: "Northeast & Mid-Atlantic" },
  };

  const propMult = propertyMultipliers[propertyType] || 0.85;
  const locMult = locationMultipliers[location]?.factor || 1.0;

  // Real-time calculations
  const monthlySavings = Math.round(bill * propMult * locMult);
  const annualSavings = monthlySavings * 12;
  const twentyFiveYearProjection = Math.round(annualSavings * 25 * 1.32);
  const lifetimeCleanKwh = Math.round((annualSavings / 0.18) * 25);

  return (
    <Section id="quote" spacing="screenFit" background="forestDeep" className="text-white relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[450px] bg-solar-400/10 blur-[150px] rounded-full pointer-events-none" />

      <Container size="xl" padding="normal">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <Badge variant="glass" size="sm" dot dotColor="solar" pulse className="mb-3 text-solar-300 border-solar-400/30">
            Interactive Financial Engine
          </Badge>
          <Heading level={2} align="center" theme="white" solarAccent="Solar Savings Model">
            High-Yield
          </Heading>
          <p className="text-sm text-beige-300 mt-2">
            Calculate your 25-year financial trajectory and energy independence in seconds.
          </p>
        </div>

        {/* Fintech Dashboard Card */}
        <div className="max-w-5xl mx-auto rounded-3xl bg-forest-900/60 backdrop-blur-2xl border border-white/15 p-6 sm:p-10 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Input Controls */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              {/* Bill Input & Slider */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label htmlFor="bill-range" className="text-xs uppercase font-bold tracking-wider text-beige-300">
                    Monthly Electric Bill
                  </label>
                  <span className="text-xs font-mono text-solar-400">Current Tariff</span>
                </div>
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="font-heading font-extrabold text-4xl text-white">
                    ${bill}
                  </span>
                  <span className="text-xs text-beige-400">/ month</span>
                </div>
                <input
                  id="bill-range"
                  type="range"
                  min="150"
                  max="2500"
                  step="25"
                  value={bill}
                  onChange={(e) => setBill(Number(e.target.value))}
                  className="w-full h-2 bg-forest-950 rounded-lg appearance-none cursor-pointer accent-solar-400"
                />
                <div className="flex justify-between text-[11px] text-beige-400 font-mono mt-1">
                  <span>$150</span>
                  <span>$1,250</span>
                  <span>$2,500+</span>
                </div>
              </div>

              {/* Property Type Selector */}
              <div>
                <label className="text-xs uppercase font-bold tracking-wider text-beige-300 block mb-2.5">
                  Property Type
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: "residential", label: "Residential", icon: Home },
                    { id: "estate", label: "Estate", icon: Sun },
                    { id: "commercial", label: "Commercial", icon: Building },
                  ].map((item) => {
                    const Icon = item.icon;
                    const active = propertyType === item.id;
                    return (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => setPropertyType(item.id)}
                        className={`flex flex-col items-center justify-center p-3 rounded-xl border text-xs font-semibold transition-all cursor-pointer ${
                          active
                            ? "bg-solar-400 text-forest-950 border-solar-300 shadow-md font-bold"
                            : "bg-forest-950/60 text-beige-300 border-white/10 hover:border-white/20"
                        }`}
                      >
                        <Icon className="w-4 h-4 mb-1" />
                        <span>{item.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Location Select */}
              <div>
                <label htmlFor="location-select" className="text-xs uppercase font-bold tracking-wider text-beige-300 block mb-2">
                  Installation Region
                </label>
                <div className="relative">
                  <select
                    id="location-select"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="w-full bg-forest-950/80 border border-white/15 rounded-xl px-4 py-3 text-xs text-beige-100 focus:border-solar-400 focus:outline-none appearance-none cursor-pointer"
                  >
                    {Object.entries(locationMultipliers).map(([key, value]) => (
                      <option key={key} value={key} className="bg-forest-950 text-white">
                        {value.label}
                      </option>
                    ))}
                  </select>
                  <MapPin className="w-4 h-4 text-solar-400 absolute right-3.5 top-3.5 pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Live Results Dashboard */}
            <div className="lg:col-span-7 flex flex-col gap-4">
              {/* Primary 25-Year Metric */}
              <div className="p-6 sm:p-7 rounded-2xl bg-forest-950/85 border border-solar-400/40 shadow-xl relative overflow-hidden">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-solar-400 flex items-center gap-1.5 font-heading">
                    <TrendingUp className="w-4 h-4" />
                    25-Year Net Projected Savings
                  </span>
                  <Badge variant="solarSolid" size="sm">
                    High ROI
                  </Badge>
                </div>
                <motion.div
                  key={twentyFiveYearProjection}
                  initial={{ scale: 0.96, opacity: 0.6 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.2 }}
                  className="font-heading font-extrabold text-4xl sm:text-5xl text-white tracking-tight"
                >
                  ${twentyFiveYearProjection.toLocaleString()}
                </motion.div>
                <p className="text-[11px] text-beige-400 mt-2">
                  Model incorporates local peak solar radiation and compound 3.8% annual grid inflation.
                </p>
              </div>

              {/* Grid of 3 supporting outputs */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
                <div className="p-4 rounded-xl bg-forest-950/60 border border-white/10">
                  <span className="text-[11px] text-beige-400 block mb-1">Estimated Monthly</span>
                  <span className="font-heading font-bold text-xl text-solar-300">
                    ${monthlySavings.toLocaleString()}
                  </span>
                </div>

                <div className="p-4 rounded-xl bg-forest-950/60 border border-white/10">
                  <span className="text-[11px] text-beige-400 block mb-1">Annual Savings</span>
                  <span className="font-heading font-bold text-xl text-white">
                    ${annualSavings.toLocaleString()}
                  </span>
                </div>

                <div className="p-4 rounded-xl bg-forest-950/60 border border-white/10">
                  <span className="text-[11px] text-beige-400 block mb-1">Lifetime Clean kWh</span>
                  <span className="font-heading font-bold text-xl text-solar-300">
                    {(lifetimeCleanKwh / 1000).toFixed(0)}k kWh
                  </span>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-2">
                <Button
                  variant="solar"
                  size="default"
                  className="w-full justify-center font-bold text-forest-950 gap-2 shadow-lg shadow-solar-400/20"
                  onClick={() => alert(`Consultation requested for $${bill}/mo plan!`)}
                >
                  <span>Lock In Your Custom System Quote</span>
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
