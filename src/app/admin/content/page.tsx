"use client";

import { useState, useEffect } from "react";
import { fetchSiteContentAction, updateSiteContentAction, resetContentAction } from "@/actions/content";
import { SiteContent, NavLinkItem, ProjectItem, ServiceItem, TestimonialItem, FAQItem } from "@/types/content";
import { 
  Save, 
  RotateCcw, 
  Plus, 
  Trash2, 
  CheckCircle2, 
  AlertCircle, 
  Layers, 
  Sparkles, 
  FolderKanban, 
  Zap, 
  Quote, 
  HelpCircle, 
  Eye, 
  EyeOff,
  ExternalLink
} from "lucide-react";

export default function AdminContentManagerPage() {
  const [content, setContent] = useState<SiteContent | null>(null);
  const [activeTab, setActiveTab] = useState<"navigation" | "hero" | "projects" | "services" | "testimonials" | "faqs" | "sections">("navigation");
  const [isSaving, setIsSaving] = useState(false);
  const [saveStatus, setSaveStatus] = useState<{ type: "success" | "error"; text: string } | null>(null);

  useEffect(() => {
    fetchSiteContentAction().then((data) => setContent(data));
  }, []);

  if (!content) {
    return (
      <div className="p-8 text-center text-beige-300">
        <div className="animate-spin w-8 h-8 border-2 border-solar-500 border-t-transparent rounded-full mx-auto mb-4" />
        Loading executive content store...
      </div>
    );
  }

  const handleSave = async () => {
    if (!content) return;
    setIsSaving(true);
    setSaveStatus(null);
    try {
      const res = await updateSiteContentAction(content);
      if (res.success) {
        setSaveStatus({ type: "success", text: "All changes saved successfully and published live to website!" });
      } else {
        setSaveStatus({ type: "error", text: res.error || "Failed to persist changes." });
      }
    } catch {
      setSaveStatus({ type: "error", text: "An unexpected error occurred while saving." });
    } finally {
      setIsSaving(false);
    }
  };

  const handleReset = async () => {
    if (!confirm("Are you sure you want to reset all website content back to default factory settings?")) return;
    setIsSaving(true);
    await resetContentAction();
    const fresh = await fetchSiteContentAction();
    setContent(fresh);
    setIsSaving(false);
    setSaveStatus({ type: "success", text: "Site content has been reset to defaults." });
  };

  return (
    <div className="p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto space-y-6 sm:space-y-8">
      {/* Top Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-forest-800/80">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-beige-50">
            Content & Component Manager (CRUD)
          </h1>
          <p className="text-sm text-beige-300">
            Update texts, photography, navigation links, project cards, and active homepage sections.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={handleReset}
            disabled={isSaving}
            className="px-4 py-2 rounded-xl bg-forest-900 border border-forest-700/80 hover:bg-forest-850 text-beige-300 hover:text-beige-100 text-xs font-semibold flex items-center gap-2 cursor-pointer transition-all disabled:opacity-50"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            Reset Defaults
          </button>

          <button
            onClick={handleSave}
            disabled={isSaving}
            className="px-6 py-2.5 rounded-xl bg-solar-500 hover:bg-solar-400 text-forest-950 font-bold text-sm tracking-wide shadow-lg shadow-solar-500/20 flex items-center gap-2 cursor-pointer transition-all disabled:opacity-50"
          >
            <Save className="w-4 h-4" />
            {isSaving ? "Publishing..." : "Save & Publish Changes"}
          </button>
        </div>
      </div>

      {/* Save Notification */}
      {saveStatus && (
        <div
          className={`p-4 rounded-xl border flex items-center gap-3 text-sm animate-in fade-in slide-in-from-top-2 duration-300 ${
            saveStatus.type === "success"
              ? "bg-emerald-950/40 border-emerald-800/60 text-emerald-300"
              : "bg-red-950/40 border-red-800/60 text-red-300"
          }`}
        >
          {saveStatus.type === "success" ? (
            <CheckCircle2 className="w-5 h-5 shrink-0" />
          ) : (
            <AlertCircle className="w-5 h-5 shrink-0" />
          )}
          <span>{saveStatus.text}</span>
        </div>
      )}

      {/* Navigation Tabs */}
      <div className="flex flex-wrap gap-2 border-b border-forest-800/80 pb-3">
        {[
          { id: "navigation", label: "Navigation & Menus", icon: Layers },
          { id: "hero", label: "Hero Section", icon: Sparkles },
          { id: "projects", label: "Project Cards", icon: FolderKanban },
          { id: "services", label: "Services & Arrays", icon: Zap },
          { id: "testimonials", label: "Client Reviews", icon: Quote },
          { id: "faqs", label: "FAQs", icon: HelpCircle },
          { id: "sections", label: "Section Visibility", icon: Eye },
        ].map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() =>
                setActiveTab(
                  tab.id as
                    | "navigation"
                    | "hero"
                    | "projects"
                    | "services"
                    | "testimonials"
                    | "faqs"
                    | "sections"
                )
              }
              className={`px-4 py-2 rounded-xl text-xs font-semibold flex items-center gap-2 transition-all cursor-pointer ${
                isActive
                  ? "bg-solar-500 text-forest-950 shadow-md shadow-solar-500/20"
                  : "bg-forest-900/60 border border-forest-800/60 text-beige-300 hover:text-beige-100 hover:bg-forest-800/50"
              }`}
            >
              <Icon className="w-3.5 h-3.5" />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* TAB CONTENT: 1. NAVIGATION CRUD */}
      {activeTab === "navigation" && (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-bold text-beige-50">Header Navigation Menu Links</h2>
            <button
              onClick={() => {
                const newItem: NavLinkItem = {
                  id: `nav-${Date.now()}`,
                  label: "New Link",
                  href: "#new-section",
                  order: content.navigation.length + 1,
                  isVisible: true,
                };
                setContent({ ...content, navigation: [...content.navigation, newItem] });
              }}
              className="px-3.5 py-1.5 rounded-lg bg-solar-500/20 border border-solar-500/40 text-solar-400 hover:bg-solar-500 hover:text-forest-950 text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer"
            >
              <Plus className="w-3.5 h-3.5" />
              Add Navigation Link
            </button>
          </div>

          <div className="space-y-3">
            {content.navigation.map((item, index) => (
              <div
                key={item.id}
                className="p-4 rounded-xl bg-forest-900/50 border border-forest-800/80 flex flex-col md:flex-row md:items-center gap-4 justify-between"
              >
                <div className="flex items-center gap-3 flex-1">
                  <span className="w-6 h-6 rounded-md bg-forest-800 text-beige-400 text-xs font-mono flex items-center justify-center">
                    {index + 1}
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 flex-1">
                    <div>
                      <label className="text-[10px] font-mono uppercase text-beige-400 block mb-1">
                        Link Label
                      </label>
                      <input
                        type="text"
                        value={item.label}
                        onChange={(e) => {
                          const updated = [...content.navigation];
                          updated[index].label = e.target.value;
                          setContent({ ...content, navigation: updated });
                        }}
                        className="w-full bg-forest-950 border border-forest-700/60 rounded-lg px-3 py-1.5 text-xs text-beige-50 focus:border-solar-400 outline-none"
                      />
                    </div>
                    <div>
                      <label className="text-[10px] font-mono uppercase text-beige-400 block mb-1">
                        URL / Section Hash
                      </label>
                      <input
                        type="text"
                        value={item.href}
                        onChange={(e) => {
                          const updated = [...content.navigation];
                          updated[index].href = e.target.value;
                          setContent({ ...content, navigation: updated });
                        }}
                        className="w-full bg-forest-950 border border-forest-700/60 rounded-lg px-3 py-1.5 text-xs text-beige-50 focus:border-solar-400 outline-none"
                      />
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2 shrink-0 self-end md:self-center">
                  <button
                    onClick={() => {
                      const updated = [...content.navigation];
                      updated[index].isVisible = !updated[index].isVisible;
                      setContent({ ...content, navigation: updated });
                    }}
                    className={`p-2 rounded-lg border text-xs flex items-center gap-1 cursor-pointer transition-all ${
                      item.isVisible
                        ? "bg-emerald-950/30 border-emerald-800/50 text-emerald-300"
                        : "bg-forest-950 border-forest-800 text-beige-500"
                    }`}
                  >
                    {item.isVisible ? <Eye className="w-3.5 h-3.5" /> : <EyeOff className="w-3.5 h-3.5" />}
                    <span>{item.isVisible ? "Visible" : "Hidden"}</span>
                  </button>

                  <button
                    onClick={() => {
                      const updated = content.navigation.filter((_, i) => i !== index);
                      setContent({ ...content, navigation: updated });
                    }}
                    className="p-2 rounded-lg bg-red-950/30 border border-red-800/40 text-red-400 hover:bg-red-900/50 cursor-pointer"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB CONTENT: 2. HERO CRUD */}
      {activeTab === "hero" && (
        <div className="p-6 rounded-2xl bg-forest-900/50 border border-forest-800/80 space-y-6">
          <h2 className="text-lg font-bold text-beige-50">Hero Presentation & Headline</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <label className="text-xs font-mono uppercase text-beige-300 block mb-1">
                  Badge Eyebrow Text
                </label>
                <input
                  type="text"
                  value={content.hero.badge}
                  onChange={(e) =>
                    setContent({ ...content, hero: { ...content.hero, badge: e.target.value } })
                  }
                  className="w-full bg-forest-950 border border-forest-700/60 rounded-xl px-4 py-2.5 text-sm text-beige-50 focus:border-solar-400 outline-none"
                />
              </div>

              <div>
                <label className="text-xs font-mono uppercase text-beige-300 block mb-1">
                  Main Headline
                </label>
                <input
                  type="text"
                  value={content.hero.title}
                  onChange={(e) =>
                    setContent({ ...content, hero: { ...content.hero, title: e.target.value } })
                  }
                  className="w-full bg-forest-950 border border-forest-700/60 rounded-xl px-4 py-2.5 text-sm text-beige-50 focus:border-solar-400 outline-none"
                />
              </div>

              <div>
                <label className="text-xs font-mono uppercase text-beige-300 block mb-1">
                  Subtitle Description
                </label>
                <textarea
                  rows={3}
                  value={content.hero.subtitle}
                  onChange={(e) =>
                    setContent({ ...content, hero: { ...content.hero, subtitle: e.target.value } })
                  }
                  className="w-full bg-forest-950 border border-forest-700/60 rounded-xl px-4 py-2.5 text-sm text-beige-50 focus:border-solar-400 outline-none resize-none"
                />
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <label className="text-xs font-mono uppercase text-beige-300 block mb-1">
                  Background Image URL
                </label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={content.hero.bgImageUrl}
                    onChange={(e) =>
                      setContent({ ...content, hero: { ...content.hero, bgImageUrl: e.target.value } })
                    }
                    className="w-full bg-forest-950 border border-forest-700/60 rounded-xl px-4 py-2.5 text-sm text-beige-50 focus:border-solar-400 outline-none"
                  />
                  {content.hero.bgImageUrl && (
                    <a
                      href={content.hero.bgImageUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="p-2.5 rounded-xl bg-forest-800 text-beige-300 hover:text-solar-400"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-mono uppercase text-beige-300 block mb-1">
                    Primary CTA Label
                  </label>
                  <input
                    type="text"
                    value={content.hero.primaryCtaText}
                    onChange={(e) =>
                      setContent({ ...content, hero: { ...content.hero, primaryCtaText: e.target.value } })
                    }
                    className="w-full bg-forest-950 border border-forest-700/60 rounded-xl px-4 py-2.5 text-sm text-beige-50 focus:border-solar-400 outline-none"
                  />
                </div>
                <div>
                  <label className="text-xs font-mono uppercase text-beige-300 block mb-1">
                    Secondary CTA Label
                  </label>
                  <input
                    type="text"
                    value={content.hero.secondaryCtaText}
                    onChange={(e) =>
                      setContent({ ...content, hero: { ...content.hero, secondaryCtaText: e.target.value } })
                    }
                    className="w-full bg-forest-950 border border-forest-700/60 rounded-xl px-4 py-2.5 text-sm text-beige-50 focus:border-solar-400 outline-none"
                  />
                </div>
              </div>

              {/* Image Preview Box */}
              {content.hero.bgImageUrl && (
                <div className="mt-2 rounded-xl overflow-hidden border border-forest-800 h-28 relative">
                  <img
                    src={content.hero.bgImageUrl}
                    alt="Hero preview"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-forest-950/40 flex items-center justify-center">
                    <span className="text-xs font-mono text-beige-200 bg-forest-950/70 px-2 py-1 rounded">
                      Live Preview Active
                    </span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* TAB CONTENT: 3. PROJECTS CARDS CRUD */}
      {activeTab === "projects" && (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-bold text-beige-50">Featured Project Portfolios</h2>
            <button
              onClick={() => {
                const newProj: ProjectItem = {
                  id: `proj-${Date.now()}`,
                  title: "Coastal Modern Estate",
                  category: "Residential",
                  location: "Santa Barbara, California",
                  size: "24.8 kW DC",
                  impact: "38,500 kWh/yr clean generation",
                  image: "https://images.unsplash.com/photo-1509391365360-2e959784a276?q=80&w=1200&auto=format&fit=crop",
                };
                setContent({ ...content, projects: [...content.projects, newProj] });
              }}
              className="px-3.5 py-1.5 rounded-lg bg-solar-500/20 border border-solar-500/40 text-solar-400 hover:bg-solar-500 hover:text-forest-950 text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer"
            >
              <Plus className="w-3.5 h-3.5" />
              Add Project Card
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {content.projects.map((proj, index) => (
              <div
                key={proj.id}
                className="p-5 rounded-2xl bg-forest-900/60 border border-forest-800/80 space-y-4 relative flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono uppercase bg-solar-500/20 text-solar-400 px-2 py-0.5 rounded">
                      Card #{index + 1}
                    </span>
                    <button
                      onClick={() => {
                        const updated = content.projects.filter((_, i) => i !== index);
                        setContent({ ...content, projects: updated });
                      }}
                      className="p-1.5 rounded-lg text-red-400 hover:bg-red-950/50 cursor-pointer"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  <div>
                    <label className="text-[10px] font-mono uppercase text-beige-400 block mb-1">
                      Project Title
                    </label>
                    <input
                      type="text"
                      value={proj.title}
                      onChange={(e) => {
                        const updated = [...content.projects];
                        updated[index].title = e.target.value;
                        setContent({ ...content, projects: updated });
                      }}
                      className="w-full bg-forest-950 border border-forest-700/60 rounded-lg px-3 py-1.5 text-xs text-beige-50 focus:border-solar-400 outline-none"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="text-[10px] font-mono uppercase text-beige-400 block mb-1">
                        Category
                      </label>
                      <input
                        type="text"
                        value={proj.category}
                        onChange={(e) => {
                          const updated = [...content.projects];
                          updated[index].category = e.target.value;
                          setContent({ ...content, projects: updated });
                        }}
                        className="w-full bg-forest-950 border border-forest-700/60 rounded-lg px-3 py-1.5 text-xs text-beige-50 focus:border-solar-400 outline-none"
                      />
                    </div>
                    <div>
                      <label className="text-[10px] font-mono uppercase text-beige-400 block mb-1">
                        Location
                      </label>
                      <input
                        type="text"
                        value={proj.location}
                        onChange={(e) => {
                          const updated = [...content.projects];
                          updated[index].location = e.target.value;
                          setContent({ ...content, projects: updated });
                        }}
                        className="w-full bg-forest-950 border border-forest-700/60 rounded-lg px-3 py-1.5 text-xs text-beige-50 focus:border-solar-400 outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="text-[10px] font-mono uppercase text-beige-400 block mb-1">
                        System Size
                      </label>
                      <input
                        type="text"
                        value={proj.size}
                        onChange={(e) => {
                          const updated = [...content.projects];
                          updated[index].size = e.target.value;
                          setContent({ ...content, projects: updated });
                        }}
                        className="w-full bg-forest-950 border border-forest-700/60 rounded-lg px-3 py-1.5 text-xs text-beige-50 focus:border-solar-400 outline-none"
                      />
                    </div>
                    <div>
                      <label className="text-[10px] font-mono uppercase text-beige-400 block mb-1">
                        Energy Impact
                      </label>
                      <input
                        type="text"
                        value={proj.impact}
                        onChange={(e) => {
                          const updated = [...content.projects];
                          updated[index].impact = e.target.value;
                          setContent({ ...content, projects: updated });
                        }}
                        className="w-full bg-forest-950 border border-forest-700/60 rounded-lg px-3 py-1.5 text-xs text-beige-50 focus:border-solar-400 outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-[10px] font-mono uppercase text-beige-400 block mb-1">
                      Photography Image URL
                    </label>
                    <input
                      type="text"
                      value={proj.image}
                      onChange={(e) => {
                        const updated = [...content.projects];
                        updated[index].image = e.target.value;
                        setContent({ ...content, projects: updated });
                      }}
                      className="w-full bg-forest-950 border border-forest-700/60 rounded-lg px-3 py-1.5 text-xs text-beige-50 focus:border-solar-400 outline-none"
                    />
                  </div>
                </div>

                {proj.image && (
                  <div className="mt-3 rounded-lg overflow-hidden border border-forest-800 h-28">
                    <img src={proj.image} alt={proj.title} className="w-full h-full object-cover" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB CONTENT: 4. SERVICES CRUD */}
      {activeTab === "services" && (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-bold text-beige-50">Architectural Services & Arrays</h2>
            <button
              onClick={() => {
                const newSrv: ServiceItem = {
                  id: `srv-${Date.now()}`,
                  title: "Custom Architectural Array",
                  description: "Precision-engineered solar architectural solutions for estates.",
                  icon: "Sun",
                  tag: "Custom",
                };
                setContent({ ...content, services: [...content.services, newSrv] });
              }}
              className="px-3.5 py-1.5 rounded-lg bg-solar-500/20 border border-solar-500/40 text-solar-400 hover:bg-solar-500 hover:text-forest-950 text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer"
            >
              <Plus className="w-3.5 h-3.5" />
              Add Service Array
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {content.services.map((srv, index) => (
              <div
                key={srv.id}
                className="p-5 rounded-2xl bg-forest-900/60 border border-forest-800/80 space-y-3"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono uppercase bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded">
                    Service #{index + 1}
                  </span>
                  <button
                    onClick={() => {
                      const updated = content.services.filter((_, i) => i !== index);
                      setContent({ ...content, services: updated });
                    }}
                    className="p-1.5 rounded-lg text-red-400 hover:bg-red-950/50 cursor-pointer"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-[10px] font-mono uppercase text-beige-400 block mb-1">Title</label>
                    <input
                      type="text"
                      value={srv.title}
                      onChange={(e) => {
                        const updated = [...content.services];
                        updated[index].title = e.target.value;
                        setContent({ ...content, services: updated });
                      }}
                      className="w-full bg-forest-950 border border-forest-700/60 rounded-lg px-3 py-1.5 text-xs text-beige-50 focus:border-solar-400 outline-none"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] font-mono uppercase text-beige-400 block mb-1">Tag</label>
                    <input
                      type="text"
                      value={srv.tag}
                      onChange={(e) => {
                        const updated = [...content.services];
                        updated[index].tag = e.target.value;
                        setContent({ ...content, services: updated });
                      }}
                      className="w-full bg-forest-950 border border-forest-700/60 rounded-lg px-3 py-1.5 text-xs text-beige-50 focus:border-solar-400 outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-[10px] font-mono uppercase text-beige-400 block mb-1">Description</label>
                  <textarea
                    rows={2}
                    value={srv.description}
                    onChange={(e) => {
                      const updated = [...content.services];
                      updated[index].description = e.target.value;
                      setContent({ ...content, services: updated });
                    }}
                    className="w-full bg-forest-950 border border-forest-700/60 rounded-lg px-3 py-1.5 text-xs text-beige-50 focus:border-solar-400 outline-none resize-none"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB CONTENT: 5. TESTIMONIALS */}
      {activeTab === "testimonials" && (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-bold text-beige-50">Client Endorsements & Testimonials</h2>
            <button
              onClick={() => {
                const newTest: TestimonialItem = {
                  id: `test-${Date.now()}`,
                  name: "Arthur Pendelton",
                  role: "Estate Architect",
                  company: "Carmel-by-the-Sea",
                  review: "Solar Legacy delivered an array that complements our modernist aesthetic without clunky mounts.",
                  rating: 5,
                  avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=300&auto=format&fit=crop",
                };
                setContent({ ...content, testimonials: [...content.testimonials, newTest] });
              }}
              className="px-3.5 py-1.5 rounded-lg bg-solar-500/20 border border-solar-500/40 text-solar-400 hover:bg-solar-500 hover:text-forest-950 text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer"
            >
              <Plus className="w-3.5 h-3.5" />
              Add Testimonial
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {content.testimonials.map((test, index) => (
              <div
                key={test.id}
                className="p-5 rounded-2xl bg-forest-900/60 border border-forest-800/80 space-y-3"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono uppercase bg-amber-500/20 text-amber-400 px-2 py-0.5 rounded">
                    Review #{index + 1}
                  </span>
                  <button
                    onClick={() => {
                      const updated = content.testimonials.filter((_, i) => i !== index);
                      setContent({ ...content, testimonials: updated });
                    }}
                    className="p-1.5 rounded-lg text-red-400 hover:bg-red-950/50 cursor-pointer"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="text-[10px] font-mono uppercase text-beige-400 block mb-1">Name</label>
                    <input
                      type="text"
                      value={test.name}
                      onChange={(e) => {
                        const updated = [...content.testimonials];
                        updated[index].name = e.target.value;
                        setContent({ ...content, testimonials: updated });
                      }}
                      className="w-full bg-forest-950 border border-forest-700/60 rounded-lg px-3 py-1.5 text-xs text-beige-50 focus:border-solar-400 outline-none"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] font-mono uppercase text-beige-400 block mb-1">Company / Role</label>
                    <input
                      type="text"
                      value={test.company}
                      onChange={(e) => {
                        const updated = [...content.testimonials];
                        updated[index].company = e.target.value;
                        setContent({ ...content, testimonials: updated });
                      }}
                      className="w-full bg-forest-950 border border-forest-700/60 rounded-lg px-3 py-1.5 text-xs text-beige-50 focus:border-solar-400 outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-[10px] font-mono uppercase text-beige-400 block mb-1">Review Text</label>
                  <textarea
                    rows={3}
                    value={test.review}
                    onChange={(e) => {
                      const updated = [...content.testimonials];
                      updated[index].review = e.target.value;
                      setContent({ ...content, testimonials: updated });
                    }}
                    className="w-full bg-forest-950 border border-forest-700/60 rounded-lg px-3 py-1.5 text-xs text-beige-50 focus:border-solar-400 outline-none resize-none"
                  />
                </div>

                <div>
                  <label className="text-[10px] font-mono uppercase text-beige-400 block mb-1">Avatar Image URL</label>
                  <input
                    type="text"
                    value={test.avatar}
                    onChange={(e) => {
                      const updated = [...content.testimonials];
                      updated[index].avatar = e.target.value;
                      setContent({ ...content, testimonials: updated });
                    }}
                    className="w-full bg-forest-950 border border-forest-700/60 rounded-lg px-3 py-1.5 text-xs text-beige-50 focus:border-solar-400 outline-none"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB CONTENT: 6. FAQS */}
      {activeTab === "faqs" && (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-bold text-beige-50">Frequently Asked Questions (FAQs)</h2>
            <button
              onClick={() => {
                const newFaq: FAQItem = {
                  id: `faq-${Date.now()}`,
                  question: "How does solar battery storage protect against outages?",
                  answer: "Our solid-state storage systems feature automated islanding switchgear that engages in under 4 milliseconds.",
                };
                setContent({ ...content, faqs: [...content.faqs, newFaq] });
              }}
              className="px-3.5 py-1.5 rounded-lg bg-solar-500/20 border border-solar-500/40 text-solar-400 hover:bg-solar-500 hover:text-forest-950 text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer"
            >
              <Plus className="w-3.5 h-3.5" />
              Add FAQ Item
            </button>
          </div>

          <div className="space-y-4">
            {content.faqs.map((faq, index) => (
              <div
                key={faq.id}
                className="p-5 rounded-2xl bg-forest-900/60 border border-forest-800/80 space-y-3"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono uppercase bg-blue-500/20 text-blue-400 px-2 py-0.5 rounded">
                    FAQ #{index + 1}
                  </span>
                  <button
                    onClick={() => {
                      const updated = content.faqs.filter((_, i) => i !== index);
                      setContent({ ...content, faqs: updated });
                    }}
                    className="p-1.5 rounded-lg text-red-400 hover:bg-red-950/50 cursor-pointer"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>

                <div>
                  <label className="text-[10px] font-mono uppercase text-beige-400 block mb-1">
                    Question Title
                  </label>
                  <input
                    type="text"
                    value={faq.question}
                    onChange={(e) => {
                      const updated = [...content.faqs];
                      updated[index].question = e.target.value;
                      setContent({ ...content, faqs: updated });
                    }}
                    className="w-full bg-forest-950 border border-forest-700/60 rounded-lg px-3 py-1.5 text-xs text-beige-50 focus:border-solar-400 outline-none"
                  />
                </div>

                <div>
                  <label className="text-[10px] font-mono uppercase text-beige-400 block mb-1">
                    Answer Explanation
                  </label>
                  <textarea
                    rows={2}
                    value={faq.answer}
                    onChange={(e) => {
                      const updated = [...content.faqs];
                      updated[index].answer = e.target.value;
                      setContent({ ...content, faqs: updated });
                    }}
                    className="w-full bg-forest-950 border border-forest-700/60 rounded-lg px-3 py-1.5 text-xs text-beige-50 focus:border-solar-400 outline-none resize-none"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB CONTENT: 7. SECTION VISIBILITY TOGGLES */}
      {activeTab === "sections" && (
        <div className="p-6 rounded-2xl bg-forest-900/50 border border-forest-800/80 space-y-6">
          <div>
            <h2 className="text-lg font-bold text-beige-50">Homepage Section Visibility Controls</h2>
            <p className="text-xs text-beige-300">
              Toggle any homepage section on or off with a single click.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {Object.entries(content.sectionVisibility).map(([key, isVisible]) => (
              <div
                key={key}
                className="p-4 rounded-xl bg-forest-950/60 border border-forest-800/80 flex items-center justify-between"
              >
                <div>
                  <span className="font-semibold text-sm capitalize text-beige-100 block">
                    {key} Section
                  </span>
                  <span className="text-[11px] text-beige-400 font-mono">
                    {isVisible ? "Active on Website" : "Hidden / Disabled"}
                  </span>
                </div>

                <button
                  type="button"
                  onClick={() => {
                    setContent({
                      ...content,
                      sectionVisibility: {
                        ...content.sectionVisibility,
                        [key]: !isVisible,
                      },
                    });
                  }}
                  className={`w-12 h-6 rounded-full transition-colors relative cursor-pointer ${
                    isVisible ? "bg-emerald-500" : "bg-forest-800"
                  }`}
                >
                  <span
                    className={`w-4 h-4 rounded-full bg-forest-950 absolute top-1 transition-transform ${
                      isVisible ? "left-7" : "left-1"
                    }`}
                  />
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
