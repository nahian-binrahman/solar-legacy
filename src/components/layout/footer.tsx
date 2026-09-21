import * as React from "react";
import Link from "next/link";
import { Container } from "@/components/core/container";
import { Badge } from "@/components/ui/badge";
import { SunMedium, ShieldCheck, Zap, Award } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-forest-950 text-beige-100 border-t border-forest-800/80 pt-16 pb-12">
      <Container size="xl" padding="normal">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-12 pb-14 border-b border-white/10">
          {/* Brand Column */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-3 w-fit">
              <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-forest-900 border border-solar-400/40">
                <SunMedium className="w-5 h-5 text-solar-400" />
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-extrabold text-xl tracking-tight text-white">
                  SOLAR <span className="solar-gradient-text">LEGACY</span>
                </span>
                <span className="text-[10px] tracking-[0.25em] uppercase font-semibold text-beige-300 -mt-0.5">
                  Renewable Energy Systems
                </span>
              </div>
            </Link>

            <p className="text-sm text-beige-300 max-w-sm leading-relaxed mt-2">
              Engineering bespoke monocrystalline solar micro-grids and smart energy
              storage for landmark estates and architectural residences.
            </p>

            <div className="flex flex-wrap gap-2 pt-2">
              <Badge variant="glass" size="sm" className="border-forest-700/60 text-beige-200">
                <ShieldCheck className="w-3.5 h-3.5 text-solar-400 mr-1" />
                25-Yr System Guarantee
              </Badge>
              <Badge variant="glass" size="sm" className="border-forest-700/60 text-beige-200">
                <Award className="w-3.5 h-3.5 text-solar-400 mr-1" />
                Tier-1 Monocrystalline
              </Badge>
            </div>
          </div>

          {/* Solutions Column */}
          <div className="flex flex-col gap-3">
            <span className="text-xs font-bold uppercase tracking-widest text-solar-400 font-heading">
              Energy Solutions
            </span>
            <ul className="flex flex-col gap-2.5 text-sm text-beige-200">
              <li>
                <Link href="#architecture" className="hover:text-solar-300 transition-colors">
                  Architectural Solar Tiles
                </Link>
              </li>
              <li>
                <Link href="#technology" className="hover:text-solar-300 transition-colors">
                  High-Yield Solar Arrays
                </Link>
              </li>
              <li>
                <Link href="#solutions" className="hover:text-solar-300 transition-colors">
                  Micro-Grid Battery Systems
                </Link>
              </li>
              <li>
                <Link href="#solutions" className="hover:text-solar-300 transition-colors">
                  Commercial Net-Zero
                </Link>
              </li>
            </ul>
          </div>

          {/* Technology Column */}
          <div className="flex flex-col gap-3">
            <span className="text-xs font-bold uppercase tracking-widest text-solar-400 font-heading">
              Engineering
            </span>
            <ul className="flex flex-col gap-2.5 text-sm text-beige-200">
              <li>
                <Link href="#technology" className="hover:text-solar-300 transition-colors">
                  Bifacial N-Type Cells
                </Link>
              </li>
              <li>
                <Link href="#technology" className="hover:text-solar-300 transition-colors">
                  Solid-State Storage OS
                </Link>
              </li>
              <li>
                <Link href="#technology" className="hover:text-solar-300 transition-colors">
                  AI Yield Optimizers
                </Link>
              </li>
              <li>
                <Link href="#technology" className="hover:text-solar-300 transition-colors">
                  Off-Grid Independence
                </Link>
              </li>
            </ul>
          </div>

          {/* Company & Support */}
          <div className="flex flex-col gap-3">
            <span className="text-xs font-bold uppercase tracking-widest text-solar-400 font-heading">
              Company
            </span>
            <ul className="flex flex-col gap-2.5 text-sm text-beige-200">
              <li>
                <Link href="#about" className="hover:text-solar-300 transition-colors">
                  Our Architectural Ethos
                </Link>
              </li>
              <li>
                <Link href="#components" className="hover:text-solar-300 transition-colors">
                  Design System Specs
                </Link>
              </li>
              <li>
                <Link href="#sustainability" className="hover:text-solar-300 transition-colors">
                  Environmental Charter
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-solar-300 transition-colors">
                  Executive Consultation
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-beige-400">
          <p>© {new Date().getFullYear()} Solar Legacy Technologies Inc. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="#privacy" className="hover:text-beige-200 transition-colors">
              Privacy Policy
            </Link>
            <Link href="#terms" className="hover:text-beige-200 transition-colors">
              Terms of Engineering
            </Link>
            <span className="flex items-center gap-1.5 text-solar-400 font-medium">
              <Zap className="w-3.5 h-3.5" />
              100% Carbon Negative Facility
            </span>
          </div>
        </div>
      </Container>
    </footer>
  );
}
