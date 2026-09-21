import { isAdminAuthenticated } from "@/lib/admin-auth";
import { redirect } from "next/navigation";
import { getSiteContent } from "@/lib/content-store";
import Link from "next/link";
import { 
  Sparkles, 
  Eye, 
  Layers, 
  FolderKanban, 
  HelpCircle, 
  Sliders, 
  ArrowRight, 
  ShieldCheck, 
  Zap 
} from "lucide-react";

export default async function AdminDashboardPage() {
  const isAuthed = await isAdminAuthenticated();
  if (!isAuthed) {
    redirect("/admin/login");
  }

  const content = await getSiteContent();

  const metrics = [
    { label: "Active Nav Items", value: content.navigation.filter(n => n.isVisible).length, total: content.navigation.length, icon: Layers, color: "text-solar-400" },
    { label: "Featured Projects", value: content.projects.length, total: content.projects.length, icon: FolderKanban, color: "text-emerald-400" },
    { label: "Core Services", value: content.services.length, total: content.services.length, icon: Zap, color: "text-amber-400" },
    { label: "FAQ Items", value: content.faqs.length, total: content.faqs.length, icon: HelpCircle, color: "text-blue-400" },
  ];

  return (
    <div className="p-8 max-w-7xl mx-auto space-y-8">
      {/* Top Banner */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-forest-800/80">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-solar-500/10 border border-solar-500/30 text-solar-400 text-xs font-mono mb-2">
            <ShieldCheck className="w-3.5 h-3.5" />
            Solar Legacy Control Center
          </div>
          <h1 className="text-2xl font-bold tracking-tight text-beige-50">
            Executive Admin Dashboard
          </h1>
          <p className="text-sm text-beige-300">
            Manage live website texts, photography, navigation links, project portfolios, and active sections.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/admin/content"
            className="px-5 py-2.5 rounded-xl bg-solar-500 hover:bg-solar-400 text-forest-950 font-semibold text-sm tracking-wide transition-all shadow-lg shadow-solar-500/20 flex items-center gap-2 cursor-pointer"
          >
            <Sliders className="w-4 h-4" />
            <span>Open Content Manager (CRUD)</span>
          </Link>
        </div>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {metrics.map((m, idx) => {
          const Icon = m.icon;
          return (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-forest-900/60 border border-forest-800/80 backdrop-blur-sm relative overflow-hidden"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono uppercase tracking-wider text-beige-300">
                  {m.label}
                </span>
                <div className={`p-2 rounded-xl bg-forest-950/60 ${m.color}`}>
                  <Icon className="w-4 h-4" />
                </div>
              </div>
              <div className="text-3xl font-bold text-beige-50 tracking-tight">
                {m.value}
              </div>
              <p className="text-[11px] text-beige-400 mt-1">
                Real-time active components
              </p>
            </div>
          );
        })}
      </div>

      {/* Quick Action Hub */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Section Visibility Card */}
        <div className="p-6 rounded-2xl bg-forest-900/60 border border-forest-800/80 space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-base font-bold text-beige-50 flex items-center gap-2">
              <Eye className="w-4 h-4 text-solar-400" />
              Homepage Section Status
            </h2>
            <Link
              href="/admin/content?tab=sections"
              className="text-xs text-solar-400 hover:text-solar-300 flex items-center gap-1 font-medium"
            >
              Manage Status <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-2">
            {Object.entries(content.sectionVisibility).map(([key, isVisible]) => (
              <div
                key={key}
                className={`p-3 rounded-xl border flex items-center justify-between text-xs capitalize ${
                  isVisible
                    ? "bg-emerald-950/30 border-emerald-800/40 text-emerald-300"
                    : "bg-forest-950/60 border-forest-800 text-beige-500"
                }`}
              >
                <span className="font-mono text-[11px]">{key}</span>
                <span
                  className={`w-2 h-2 rounded-full ${
                    isVisible ? "bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.6)]" : "bg-forest-700"
                  }`}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Quick Management Shortcuts */}
        <div className="p-6 rounded-2xl bg-forest-900/60 border border-forest-800/80 space-y-4">
          <h2 className="text-base font-bold text-beige-50 flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-solar-400" />
            Quick Management Shortcuts
          </h2>

          <div className="space-y-2.5">
            <Link
              href="/admin/content?tab=hero"
              className="p-3.5 rounded-xl bg-forest-950/60 border border-forest-800/80 hover:border-solar-500/50 flex items-center justify-between text-sm text-beige-100 hover:text-solar-400 transition-all group"
            >
              <span className="font-medium">Hero Section (Title, Subtitle, Background Image)</span>
              <ArrowRight className="w-4 h-4 text-beige-400 group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              href="/admin/content?tab=projects"
              className="p-3.5 rounded-xl bg-forest-950/60 border border-forest-800/80 hover:border-solar-500/50 flex items-center justify-between text-sm text-beige-100 hover:text-solar-400 transition-all group"
            >
              <span className="font-medium">Project Cards (Add, Edit Images, System Size)</span>
              <ArrowRight className="w-4 h-4 text-beige-400 group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              href="/admin/content?tab=navigation"
              className="p-3.5 rounded-xl bg-forest-950/60 border border-forest-800/80 hover:border-solar-500/50 flex items-center justify-between text-sm text-beige-100 hover:text-solar-400 transition-all group"
            >
              <span className="font-medium">Navigation Menu (Add/Remove Navbar Links)</span>
              <ArrowRight className="w-4 h-4 text-beige-400 group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              href="/admin/leads"
              className="p-3.5 rounded-xl bg-forest-950/60 border border-forest-800/80 hover:border-solar-500/50 flex items-center justify-between text-sm text-beige-100 hover:text-solar-400 transition-all group"
            >
              <span className="font-medium">Customer Consultation Leads (Inquiries)</span>
              <ArrowRight className="w-4 h-4 text-beige-400 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
