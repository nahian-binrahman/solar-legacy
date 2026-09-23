"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { logoutAdminAction } from "@/actions/admin-auth";
import {
  LayoutDashboard,
  FileEdit,
  Users,
  ExternalLink,
  LogOut,
  Sun,
  Menu,
  X,
} from "lucide-react";

export function AdminShell({ children }: { children: React.ReactNode }) {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const pathname = usePathname();

  const navItems = [
    {
      label: "Dashboard Overview",
      href: "/admin",
      icon: LayoutDashboard,
      color: "text-solar-400",
    },
    {
      label: "Content & Cards (CRUD)",
      href: "/admin/content",
      icon: FileEdit,
      color: "text-emerald-400",
    },
    {
      label: "Consultation Leads",
      href: "/admin/leads",
      icon: Users,
      color: "text-amber-400",
    },
  ];

  return (
    <div className="min-h-screen bg-forest-950 text-beige-100 flex flex-col md:flex-row">
      {/* MOBILE TOPBAR */}
      <header className="md:hidden sticky top-0 z-40 bg-forest-900/95 backdrop-blur-xl border-b border-forest-800/80 px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-solar-500/20 border border-solar-500/40 flex items-center justify-center text-solar-400">
            <Sun className="w-4 h-4" />
          </div>
          <div>
            <span className="font-bold text-xs tracking-tight text-white block leading-none">
              Solar Legacy
            </span>
            <span className="text-[10px] font-mono text-solar-400 uppercase">
              Admin Console
            </span>
          </div>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="p-2 rounded-lg bg-forest-800/60 text-white hover:bg-forest-800 transition-colors"
          aria-label="Toggle Admin Navigation"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </header>

      {/* MOBILE SLIDE-OVER DRAWER */}
      {mobileOpen && (
        <div className="md:hidden fixed inset-0 z-50 flex">
          <div
            className="fixed inset-0 bg-black/70 backdrop-blur-xs transition-opacity"
            onClick={() => setMobileOpen(false)}
          />
          <div className="relative w-72 max-w-[85vw] bg-forest-900 border-r border-forest-800 p-5 flex flex-col justify-between h-full z-10 animate-in slide-in-from-left duration-200">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-forest-800/60 mb-5">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-solar-500/20 border border-solar-500/40 flex items-center justify-center text-solar-400">
                    <Sun className="w-4 h-4" />
                  </div>
                  <span className="font-bold text-sm text-white">Admin Console</span>
                </div>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="p-1 rounded-lg text-beige-400 hover:text-white"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <nav className="space-y-1.5">
                {navItems.map((item) => {
                  const Icon = item.icon;
                  const isActive = pathname === item.href;
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className={`flex items-center gap-3 px-3.5 py-3 rounded-xl text-sm font-medium transition-colors ${
                        isActive
                          ? "bg-forest-800 text-white border border-forest-700/60 shadow-sm"
                          : "text-beige-300 hover:text-white hover:bg-forest-800/40"
                      }`}
                    >
                      <Icon className={`w-4 h-4 ${item.color}`} />
                      <span>{item.label}</span>
                    </Link>
                  );
                })}
              </nav>
            </div>

            <div className="pt-4 border-t border-forest-800/60 space-y-2">
              <Link
                href="/"
                target="_blank"
                className="flex items-center justify-between px-3.5 py-2.5 rounded-lg text-xs font-mono text-beige-300 hover:text-solar-400 hover:bg-forest-800/40"
              >
                <span>Live Website</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </Link>
              <form action={logoutAdminAction}>
                <button
                  type="submit"
                  className="w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-semibold text-red-300 hover:bg-red-950/40 cursor-pointer"
                >
                  <LogOut className="w-4 h-4" />
                  <span>Logout</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* DESKTOP SIDEBAR */}
      <aside className="hidden md:flex w-64 border-r border-forest-800/80 bg-forest-900/60 backdrop-blur-xl flex-col justify-between shrink-0 p-5 sticky top-0 h-screen overflow-y-auto">
        <div>
          <div className="flex items-center gap-3 pb-6 border-b border-forest-800/60 mb-6">
            <div className="w-10 h-10 rounded-xl bg-solar-500/20 border border-solar-500/40 flex items-center justify-center text-solar-400">
              <Sun className="w-5 h-5" />
            </div>
            <div>
              <span className="font-bold tracking-tight text-beige-50 block text-base leading-none">
                Solar Legacy
              </span>
              <span className="text-[11px] font-mono text-solar-400 tracking-wider uppercase mt-1 block">
                Admin Console
              </span>
            </div>
          </div>

          <nav className="space-y-1.5">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-forest-800 text-white border border-forest-700/60 shadow-sm"
                      : "text-beige-200 hover:text-beige-50 hover:bg-forest-800/60"
                  }`}
                >
                  <Icon className={`w-4 h-4 ${item.color}`} />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </nav>
        </div>

        <div className="pt-6 border-t border-forest-800/60 space-y-2">
          <Link
            href="/"
            target="_blank"
            className="flex items-center justify-between px-3.5 py-2 rounded-lg text-xs font-mono text-beige-300 hover:text-solar-400 hover:bg-forest-800/40 transition-colors"
          >
            <span>Live Website Preview</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </Link>

          <form action={logoutAdminAction}>
            <button
              type="submit"
              className="w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-semibold text-red-300 hover:text-red-200 hover:bg-red-950/40 transition-colors cursor-pointer"
            >
              <LogOut className="w-4 h-4" />
              <span>Logout</span>
            </button>
          </form>
        </div>
      </aside>

      {/* MAIN VIEWPORT */}
      <main className="flex-1 overflow-x-hidden min-h-screen bg-forest-950/90">
        {children}
      </main>
    </div>
  );
}
