"use client";

import * as React from "react";
import { submitEnergyPlanAction, type EnergyPlanInput } from "@/actions/energy-plan";
import { Button } from "@/components/ui/button";
import {
  User,
  Phone,
  Mail,
  MapPin,
  CheckCircle2,
  AlertCircle,
  Loader2,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";

interface CustomEnergyPlanFormProps {
  defaultInterest?: "Solar" | "Battery" | "Both (Solar + Battery)";
  defaultProperty?: "Residential" | "Commercial";
}

export function CustomEnergyPlanForm({
  defaultInterest = "Both (Solar + Battery)",
  defaultProperty = "Residential",
}: CustomEnergyPlanFormProps) {
  const [formData, setFormData] = React.useState<EnergyPlanInput>({
    fullName: "",
    phone: "",
    email: "",
    address: "",
    propertyType: defaultProperty,
    averageElectricBill: "$200 - $350 / mo",
    systemInterest: defaultInterest,
    hasExistingSolar: "No",
    ownershipStatus: "Own",
    preferredContactTime: "Morning (8AM - 12PM)",
  });

  const [loading, setLoading] = React.useState(false);
  const [status, setStatus] = React.useState<{ type: "success" | "error"; message: string } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    const res = await submitEnergyPlanAction(formData);
    setLoading(false);

    if (res.success) {
      setStatus({ type: "success", message: res.message });
      setFormData({
        fullName: "",
        phone: "",
        email: "",
        address: "",
        propertyType: defaultProperty,
        averageElectricBill: "$200 - $350 / mo",
        systemInterest: defaultInterest,
        hasExistingSolar: "No",
        ownershipStatus: "Own",
        preferredContactTime: "Morning (8AM - 12PM)",
      });
    } else {
      setStatus({ type: "error", message: res.message });
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto rounded-3xl bg-forest-900/80 border border-solar-400/30 p-6 sm:p-10 shadow-2xl backdrop-blur-xl relative">
      <div className="text-center max-w-xl mx-auto mb-8 space-y-2">
        <h3 className="text-2xl sm:text-3xl font-serif text-white font-medium">
          Build My Custom Energy Plan
        </h3>
        <p className="text-xs sm:text-sm text-beige-200/80">
          Enter your property and electrical details below. Our senior engineering desk will calculate your production model, battery capacity, and payback analysis.
        </p>
      </div>

      {status?.type === "success" ? (
        <div className="p-8 rounded-2xl bg-emerald-950/60 border border-emerald-500/40 text-center space-y-4 animate-in fade-in zoom-in-95">
          <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h4 className="text-xl font-serif text-white font-medium">Request Received</h4>
          <p className="text-sm text-beige-200/90 max-w-md mx-auto">{status.message}</p>
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={() => setStatus(null)}
            className="rounded-xl border-white/20 text-white mt-2"
          >
            Submit Another Property
          </Button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          {status?.type === "error" && (
            <div className="p-4 rounded-xl bg-red-950/60 border border-red-500/40 flex items-center gap-3 text-red-200 text-xs sm:text-sm">
              <AlertCircle className="w-5 h-5 shrink-0 text-red-400" />
              <span>{status.message}</span>
            </div>
          )}

          {/* CONTACT INFO GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5 text-left">
              <label className="text-xs font-semibold uppercase tracking-wider text-beige-200/90 flex items-center gap-1.5">
                <User className="w-3.5 h-3.5 text-solar-400" />
                First & Last Name *
              </label>
              <input
                required
                type="text"
                placeholder="Jane Doe"
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                className="w-full h-11 px-4 rounded-xl bg-forest-950/80 border border-white/15 focus:border-solar-400 text-white text-sm outline-none transition-colors"
              />
            </div>

            <div className="space-y-1.5 text-left">
              <label className="text-xs font-semibold uppercase tracking-wider text-beige-200/90 flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-solar-400" />
                Phone Number *
              </label>
              <input
                required
                type="tel"
                placeholder="(555) 000-0000"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full h-11 px-4 rounded-xl bg-forest-950/80 border border-white/15 focus:border-solar-400 text-white text-sm outline-none transition-colors"
              />
            </div>

            <div className="space-y-1.5 text-left">
              <label className="text-xs font-semibold uppercase tracking-wider text-beige-200/90 flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-solar-400" />
                Email Address *
              </label>
              <input
                required
                type="email"
                placeholder="jane@example.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full h-11 px-4 rounded-xl bg-forest-950/80 border border-white/15 focus:border-solar-400 text-white text-sm outline-none transition-colors"
              />
            </div>

            <div className="space-y-1.5 text-left">
              <label className="text-xs font-semibold uppercase tracking-wider text-beige-200/90 flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-solar-400" />
                Property Address & City *
              </label>
              <input
                required
                type="text"
                placeholder="1248 Oakridge Lane, City, State"
                value={formData.address}
                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                className="w-full h-11 px-4 rounded-xl bg-forest-950/80 border border-white/15 focus:border-solar-400 text-white text-sm outline-none transition-colors"
              />
            </div>
          </div>

          {/* PROPERTY & SYSTEM OPTIONS */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
            <div className="space-y-1.5 text-left">
              <label className="text-xs font-semibold uppercase tracking-wider text-beige-200/90">
                Property Type
              </label>
              <select
                value={formData.propertyType}
                onChange={(e) => setFormData({ ...formData, propertyType: e.target.value as "Residential" | "Commercial" })}
                className="w-full h-11 px-3 rounded-xl bg-forest-950/80 border border-white/15 focus:border-solar-400 text-white text-xs sm:text-sm outline-none cursor-pointer"
              >
                <option value="Residential">Residential</option>
                <option value="Commercial">Commercial / Industrial</option>
              </select>
            </div>

            <div className="space-y-1.5 text-left">
              <label className="text-xs font-semibold uppercase tracking-wider text-beige-200/90">
                Average Electric Bill
              </label>
              <select
                value={formData.averageElectricBill}
                onChange={(e) => setFormData({ ...formData, averageElectricBill: e.target.value })}
                className="w-full h-11 px-3 rounded-xl bg-forest-950/80 border border-white/15 focus:border-solar-400 text-white text-xs sm:text-sm outline-none cursor-pointer"
              >
                <option value="Under $150 / mo">Under $150 / mo</option>
                <option value="$150 - $250 / mo">$150 - $250 / mo</option>
                <option value="$250 - $400 / mo">$250 - $400 / mo</option>
                <option value="$400 - $600 / mo">$400 - $600 / mo</option>
                <option value="$600+ / mo">$600+ / mo</option>
              </select>
            </div>

            <div className="space-y-1.5 text-left">
              <label className="text-xs font-semibold uppercase tracking-wider text-beige-200/90">
                System Interest
              </label>
              <select
                value={formData.systemInterest}
                onChange={(e) => setFormData({ ...formData, systemInterest: e.target.value as "Solar" | "Battery" | "Both (Solar + Battery)" })}
                className="w-full h-11 px-3 rounded-xl bg-forest-950/80 border border-white/15 focus:border-solar-400 text-white text-xs sm:text-sm outline-none cursor-pointer"
              >
                <option value="Both (Solar + Battery)">Solar + Battery</option>
                <option value="Solar">Solar Only</option>
                <option value="Battery">Battery Storage Only</option>
              </select>
            </div>
          </div>

          {/* STATUS & TIME */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-1">
            <div className="space-y-1.5 text-left">
              <label className="text-xs font-semibold uppercase tracking-wider text-beige-200/90">
                Do you currently have solar?
              </label>
              <select
                value={formData.hasExistingSolar}
                onChange={(e) => setFormData({ ...formData, hasExistingSolar: e.target.value as "Yes" | "No" })}
                className="w-full h-11 px-3 rounded-xl bg-forest-950/80 border border-white/15 focus:border-solar-400 text-white text-xs sm:text-sm outline-none cursor-pointer"
              >
                <option value="No">No</option>
                <option value="Yes">Yes, existing solar on roof</option>
              </select>
            </div>

            <div className="space-y-1.5 text-left">
              <label className="text-xs font-semibold uppercase tracking-wider text-beige-200/90">
                Property Ownership
              </label>
              <select
                value={formData.ownershipStatus}
                onChange={(e) => setFormData({ ...formData, ownershipStatus: e.target.value as "Own" | "Rent / Lease" | "Buying" })}
                className="w-full h-11 px-3 rounded-xl bg-forest-950/80 border border-white/15 focus:border-solar-400 text-white text-xs sm:text-sm outline-none cursor-pointer"
              >
                <option value="Own">I own this property</option>
                <option value="Buying">In escrow / purchasing</option>
                <option value="Rent / Lease">Rent / Lease</option>
              </select>
            </div>

            <div className="space-y-1.5 text-left">
              <label className="text-xs font-semibold uppercase tracking-wider text-beige-200/90">
                Preferred Contact Time
              </label>
              <select
                value={formData.preferredContactTime}
                onChange={(e) => setFormData({ ...formData, preferredContactTime: e.target.value })}
                className="w-full h-11 px-3 rounded-xl bg-forest-950/80 border border-white/15 focus:border-solar-400 text-white text-xs sm:text-sm outline-none cursor-pointer"
              >
                <option value="Morning (8AM - 12PM)">Morning (8AM - 12PM)</option>
                <option value="Afternoon (12PM - 5PM)">Afternoon (12PM - 5PM)</option>
                <option value="Evening (5PM - 8PM)">Evening (5PM - 8PM)</option>
                <option value="Anytime">Anytime</option>
              </select>
            </div>
          </div>

          {/* SUBMIT BUTTON */}
          <div className="pt-4">
            <Button
              type="submit"
              variant="solar"
              size="lg"
              disabled={loading}
              className="w-full rounded-2xl h-14 font-bold text-forest-950 shadow-2xl shadow-solar-400/25 text-base sm:text-lg flex items-center justify-center gap-2 cursor-pointer"
            >
              {loading ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  <span>Calculating Custom Plan...</span>
                </>
              ) : (
                <>
                  <span>Build My Custom Energy Plan</span>
                  <ArrowRight className="w-5 h-5" />
                </>
              )}
            </Button>
          </div>

          <div className="flex items-center justify-center gap-2 text-xs text-beige-200/60 pt-1">
            <ShieldCheck className="w-4 h-4 text-solar-400" />
            <span>Privacy guaranteed. Zero spam. 100% complimentary architectural modeling.</span>
          </div>
        </form>
      )}
    </div>
  );
}
