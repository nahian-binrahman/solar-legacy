"use client";

import * as React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Container } from "@/components/core/container";
import { Section } from "@/components/core/section";
import { Heading } from "@/components/core/heading";
import { Badge } from "@/components/ui/badge";
import {
  MapPin,
  Zap,
  Leaf,
  ShieldCheck,
  Award,
  Users,
  Calendar,
} from "lucide-react";

import { ProjectItem, StatItem } from "@/types/content";

interface ProjectsSectionProps {
  projectsData?: ProjectItem[];
  statsData?: StatItem[];
}

export function ProjectsSection({ projectsData, statsData }: ProjectsSectionProps) {
  const defaultProjects = [
    {
      title: "The Pacific Cliffside Estate",
      category: "Residential Rooftop",
      image: "/hero-solar.jpg",
      location: "Montecito, California",
      systemSize: "28.4 kW Monocrystalline",
      energyImpact: "100% Net-Zero Electricity Offset",
    },
    {
      title: "BioTech Innovation Campus",
      category: "Commercial Solar",
      image: "/commercial-solar.jpg",
      location: "Austin, Texas",
      systemSize: "1.25 MW Canopy & Rooftop",
      energyImpact: "1,450 Tons Annual CO₂ Avoided",
    },
    {
      title: "Alpine Ridge Villa & Micro-Grid",
      category: "Battery Storage",
      image: "/battery-project.jpg",
      location: "Aspen, Colorado",
      systemSize: "60 kWh Solid-State Storage",
      energyImpact: "72+ Hours Total Off-Grid Autonomy",
    },
  ];

  const projects = projectsData
    ? projectsData.map((p) => ({
        title: p.title,
        category: p.category,
        image: p.image || "/hero-solar.jpg",
        location: p.location,
        systemSize: p.size,
        energyImpact: p.impact,
      }))
    : defaultProjects;

  const stats = statsData
    ? statsData.map((s, idx) => ({
        value: s.value,
        label: s.label,
        icon: [Calendar, Award, Users, ShieldCheck][idx % 4] || Award,
      }))
    : [
        { value: "15+", label: "Years Experience", icon: Calendar },
        { value: "12,500+", label: "Projects Completed", icon: Award },
        { value: "99.4%", label: "Customer Satisfaction", icon: Users },
        { value: "28", label: "States Served", icon: ShieldCheck },
      ];

  return (
    <Section id="projects" spacing="lg" background="white" className="border-b border-beige-200">
      <Container size="xl" padding="normal">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <Badge variant="forest" size="sm" className="mb-3">
            Portfolio of Excellence
          </Badge>
          <Heading level={2} align="center" solarAccent="Featured Projects">
            Architectural Installations:
          </Heading>
          <p className="text-sm text-charcoal-600 mt-3 leading-relaxed">
            A curated showcase of residential and enterprise micro-grids engineered for peak aesthetic integration and yield.
          </p>
        </div>

        {/* 3 Featured Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {projects.map((proj, idx) => (
            <motion.div
              key={proj.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              whileHover={{ y: -6 }}
              className="group flex flex-col rounded-2xl overflow-hidden bg-white border border-beige-200 shadow-md hover:shadow-2xl transition-all duration-300"
            >
              {/* Large Image Container */}
              <div className="relative h-64 w-full overflow-hidden bg-forest-950">
                <Image
                  src={proj.image}
                  alt={proj.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute top-4 left-4">
                  <Badge variant="glass" size="sm" className="text-white border-white/20 bg-black/40 backdrop-blur-md">
                    {proj.category}
                  </Badge>
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="font-heading font-bold text-xl text-white leading-tight">
                    {proj.title}
                  </h3>
                </div>
              </div>

              {/* Specs Content */}
              <div className="p-6 flex flex-col gap-3.5 flex-1 justify-between bg-beige-50/50">
                <div className="flex flex-col gap-2.5 text-xs text-charcoal-700">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-solar-600 shrink-0" />
                    <span className="font-medium text-charcoal-900">{proj.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Zap className="w-4 h-4 text-solar-600 shrink-0" />
                    <span>System Size: <strong>{proj.systemSize}</strong></span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Leaf className="w-4 h-4 text-forest-700 shrink-0" />
                    <span>Energy Impact: <strong className="text-forest-800">{proj.energyImpact}</strong></span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Statistics Section with Animated Counters */}
        <div className="rounded-3xl bg-forest-950 text-white p-8 sm:p-12 border border-forest-800 shadow-2xl relative overflow-hidden">
          <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-solar-400/10 blur-[120px] rounded-full pointer-events-none" />
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 text-center relative z-10">
            {stats.map((stat, i) => {
              const SIcon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex flex-col items-center"
                >
                  <div className="w-10 h-10 rounded-xl bg-forest-900 border border-solar-400/30 flex items-center justify-center text-solar-400 mb-3 shadow-xs">
                    <SIcon className="w-5 h-5" />
                  </div>
                  <span className="font-heading font-extrabold text-3xl sm:text-5xl text-white tracking-tight solar-gradient-text">
                    {stat.value}
                  </span>
                  <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-beige-300 font-sans mt-2">
                    {stat.label}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </div>
      </Container>
    </Section>
  );
}
