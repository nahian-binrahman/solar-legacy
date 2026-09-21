import { isAdminAuthenticated } from "@/lib/admin-auth";
import Link from "next/link";
import { logoutAdminAction } from "@/actions/admin-auth";
import { 
  LayoutDashboard, 
  FileEdit, 
  Users, 
  ExternalLink, 
  LogOut, 
  Sun
} from "lucide-react";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const isAuthed = await isAdminAuthenticated();

  // If unauthenticated, render children directly (which is the login page or handled by page)
  if (!isAuthed) {
    return <>{children}</>;
  }

  return (
    <div className="min-h-screen bg-forest-950 text-beige-100 flex">
      {/* Sidebar */}
      <aside className="w-64 border-r border-forest-800/80 bg-forest-900/60 backdrop-blur-xl flex flex-col justify-between shrink-0 p-5 sticky top-0 h-screen overflow-y-auto">
        <div>
          {/* Brand Header */}
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

          {/* Navigation Links */}
          <nav className="space-y-1.5">
            <Link
              href="/admin"
              className="flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm font-medium text-beige-200 hover:text-beige-50 hover:bg-forest-800/60 transition-colors"
            >
              <LayoutDashboard className="w-4 h-4 text-solar-400" />
              <span>Dashboard Overview</span>
            </Link>

            <Link
              href="/admin/content"
              className="flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm font-medium text-beige-200 hover:text-beige-50 hover:bg-forest-800/60 transition-colors"
            >
              <FileEdit className="w-4 h-4 text-emerald-400" />
              <span>Content & Cards (CRUD)</span>
            </Link>

            <Link
              href="/admin/leads"
              className="flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm font-medium text-beige-200 hover:text-beige-50 hover:bg-forest-800/60 transition-colors"
            >
              <Users className="w-4 h-4 text-amber-400" />
              <span>Consultation Leads</span>
            </Link>
          </nav>
        </div>

        {/* Footer Actions */}
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

      {/* Main Content Viewport */}
      <main className="flex-1 overflow-x-hidden min-h-screen bg-forest-950/90">
        {children}
      </main>
    </div>
  );
}
