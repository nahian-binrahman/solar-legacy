"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { submitConsultationAction } from "@/actions/consultation";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  User,
  Mail,
  Phone,
  Home,
  Sun,
  Building2,
  BatteryCharging,
  Send,
  CheckCircle2,
  AlertCircle,
  Loader2,
} from "lucide-react";

export function ConsultationForm() {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    phone: "",
    propertyType: "RESIDENTIAL" as "RESIDENTIAL" | "COMMERCIAL" | "ESTATE",
    interest: "RESIDENTIAL" as "RESIDENTIAL" | "COMMERCIAL" | "BATTERY",
    message: "",
  });

  const [loading, setLoading] = React.useState(false);
  const [errors, setErrors] = React.useState<Record<string, string[]>>({});
  const [feedback, setFeedback] = React.useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrors({});
    setFeedback(null);

    try {
      const res = await submitConsultationAction(formData);

      if (res.success) {
        setFeedback({
          type: "success",
          message: res.message,
        });
        setFormData({
          name: "",
          email: "",
          phone: "",
          propertyType: "RESIDENTIAL",
          interest: "RESIDENTIAL",
          message: "",
        });
      } else {
        setFeedback({
          type: "error",
          message: res.message || "Failed to submit request.",
        });
        if (res.errors) {
          setErrors(res.errors);
        }
      }
    } catch {
      setFeedback({
        type: "error",
        message: "An unexpected network error occurred. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto rounded-3xl bg-forest-950/85 backdrop-blur-xl border border-white/15 p-6 sm:p-10 shadow-2xl text-left">
      <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/10">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-solar-400 font-heading">
            Direct Engineering Inquiry
          </span>
          <h3 className="font-heading font-extrabold text-2xl text-white mt-1">
            Request Architectural Solar Audit
          </h3>
        </div>
        <Badge variant="glass" size="sm" className="hidden sm:inline-flex border-solar-400/40 text-solar-300">
          Server Actions
        </Badge>
      </div>

      <AnimatePresence>
        {feedback && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className={`p-4 rounded-xl mb-6 flex items-start gap-3 border ${
              feedback.type === "success"
                ? "bg-forest-900/90 border-emerald-500/50 text-emerald-200"
                : "bg-red-950/80 border-red-500/50 text-red-200"
            }`}
          >
            {feedback.type === "success" ? (
              <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
            ) : (
              <AlertCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
            )}
            <p className="text-xs sm:text-sm leading-relaxed">{feedback.message}</p>
          </motion.div>
        )}
      </AnimatePresence>

      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        {/* Name & Email Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="text-xs font-semibold uppercase tracking-wider text-beige-300 block mb-1.5">
              Full Name *
            </label>
            <div className="relative">
              <input
                type="text"
                required
                placeholder="e.g. Jonathan Sterling"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-forest-900/80 border border-white/15 rounded-xl px-4 py-3 pl-10 text-xs sm:text-sm text-white focus:border-solar-400 focus:outline-none transition-colors"
              />
              <User className="w-4 h-4 text-beige-400 absolute left-3.5 top-3.5 pointer-events-none" />
            </div>
            {errors.name && <span className="text-[11px] text-red-400 mt-1 block">{errors.name[0]}</span>}
          </div>

          <div>
            <label className="text-xs font-semibold uppercase tracking-wider text-beige-300 block mb-1.5">
              Email Address *
            </label>
            <div className="relative">
              <input
                type="email"
                required
                placeholder="jonathan@estate.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full bg-forest-900/80 border border-white/15 rounded-xl px-4 py-3 pl-10 text-xs sm:text-sm text-white focus:border-solar-400 focus:outline-none transition-colors"
              />
              <Mail className="w-4 h-4 text-beige-400 absolute left-3.5 top-3.5 pointer-events-none" />
            </div>
            {errors.email && <span className="text-[11px] text-red-400 mt-1 block">{errors.email[0]}</span>}
          </div>
        </div>

        {/* Phone & Property Type */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="text-xs font-semibold uppercase tracking-wider text-beige-300 block mb-1.5">
              Phone Number *
            </label>
            <div className="relative">
              <input
                type="tel"
                required
                placeholder="(555) 000-1234"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full bg-forest-900/80 border border-white/15 rounded-xl px-4 py-3 pl-10 text-xs sm:text-sm text-white focus:border-solar-400 focus:outline-none transition-colors"
              />
              <Phone className="w-4 h-4 text-beige-400 absolute left-3.5 top-3.5 pointer-events-none" />
            </div>
            {errors.phone && <span className="text-[11px] text-red-400 mt-1 block">{errors.phone[0]}</span>}
          </div>

          <div>
            <label className="text-xs font-semibold uppercase tracking-wider text-beige-300 block mb-1.5">
              Property Type *
            </label>
            <div className="grid grid-cols-3 gap-1.5">
              {[
                { id: "RESIDENTIAL", label: "Home", icon: Home },
                { id: "ESTATE", label: "Estate", icon: Sun },
                { id: "COMMERCIAL", label: "Com.", icon: Building2 },
              ].map((p) => {
                const Icon = p.icon;
                const active = formData.propertyType === p.id;
                return (
                  <button
                    key={p.id}
                    type="button"
                    onClick={() => setFormData({ ...formData, propertyType: p.id as "RESIDENTIAL" | "COMMERCIAL" | "ESTATE" })}
                    className={`flex items-center justify-center gap-1 py-2.5 px-2 rounded-xl text-xs font-semibold border transition-all cursor-pointer ${
                      active
                        ? "bg-solar-400 text-forest-950 border-solar-300 shadow-sm font-bold"
                        : "bg-forest-900/60 text-beige-300 border-white/10 hover:border-white/20"
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5" />
                    <span>{p.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Primary Interest Area */}
        <div>
          <label className="text-xs font-semibold uppercase tracking-wider text-beige-300 block mb-1.5">
            Primary Interest *
          </label>
          <div className="grid grid-cols-3 gap-2">
            {[
              { id: "RESIDENTIAL", label: "Residential Solar", icon: Sun },
              { id: "COMMERCIAL", label: "Commercial Solar", icon: Building2 },
              { id: "BATTERY", label: "Battery Storage", icon: BatteryCharging },
            ].map((item) => {
              const Icon = item.icon;
              const active = formData.interest === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setFormData({ ...formData, interest: item.id as "RESIDENTIAL" | "COMMERCIAL" | "BATTERY" })}
                  className={`flex flex-col items-center justify-center p-3 rounded-xl border text-xs font-semibold transition-all cursor-pointer ${
                    active
                      ? "bg-solar-400/20 text-solar-300 border-solar-400 shadow-md font-bold"
                      : "bg-forest-900/60 text-beige-300 border-white/10 hover:border-white/20"
                  }`}
                >
                  <Icon className="w-4 h-4 mb-1 text-solar-400" />
                  <span className="text-[11px]">{item.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Message */}
        <div>
          <label className="text-xs font-semibold uppercase tracking-wider text-beige-300 block mb-1.5">
            Project Scope or Message (Optional)
          </label>
          <textarea
            rows={3}
            placeholder="Tell us about your estate, roof architecture, or energy goals..."
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="w-full bg-forest-900/80 border border-white/15 rounded-xl px-4 py-3 text-xs sm:text-sm text-white focus:border-solar-400 focus:outline-none resize-none transition-colors"
          />
        </div>

        {/* Submit Button */}
        <div className="pt-2">
          <Button
            type="submit"
            disabled={loading}
            variant="solar"
            size="lg"
            className="w-full font-bold text-forest-950 shadow-xl shadow-solar-400/20 gap-2 cursor-pointer"
          >
            {loading ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Submitting to Engineering Queue...</span>
              </>
            ) : (
              <>
                <span>Submit Consultation Request</span>
                <Send className="w-4 h-4" />
              </>
            )}
          </Button>
        </div>
      </form>
    </div>
  );
}
