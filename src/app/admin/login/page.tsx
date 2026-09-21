"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { loginAdminAction } from "@/actions/admin-auth";
import Link from "next/link";
import { ShieldCheck, Lock, ArrowLeft, Loader2, Sparkles } from "lucide-react";

export default function AdminLoginPage() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const formData = new FormData();
      formData.append("password", password);
      const res = await loginAdminAction(formData);

      if (res.success) {
        router.push("/admin");
        router.refresh();
      } else {
        setError(res.error || "Incorrect password! Please try again.");
      }
    } catch {
      setError("An unexpected authentication error occurred. Please retry.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-full bg-forest-950 text-beige-100 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background Decorative Gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-solar-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-emerald-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="w-full max-w-md relative z-10">
        {/* Back Link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-mono tracking-wider uppercase text-beige-300 hover:text-solar-400 mb-6 transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          Back to Public Website
        </Link>

        {/* Card */}
        <div className="bg-forest-900/80 backdrop-blur-xl border border-forest-800/80 rounded-2xl p-8 shadow-2xl shadow-forest-950/80">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl bg-solar-500/15 border border-solar-500/30 flex items-center justify-center text-solar-400">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h1 className="text-xl font-bold tracking-tight text-beige-50">Solar Legacy Admin</h1>
              <p className="text-xs text-beige-300">Executive Content & System Management</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-beige-200 mb-2">
                Security Passcode (Admin Password)
              </label>
              <div className="relative">
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter administrator password..."
                  required
                  autoFocus
                  className="w-full bg-forest-950/80 border border-forest-700/60 rounded-xl px-4 py-3 pl-11 text-sm text-beige-50 placeholder:text-beige-400/50 focus:outline-none focus:border-solar-400 focus:ring-1 focus:ring-solar-400 transition-all"
                />
                <Lock className="w-4 h-4 text-beige-400 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            </div>

            {error && (
              <div className="p-3 rounded-lg bg-red-950/50 border border-red-800/60 text-red-300 text-xs flex items-center gap-2">
                <span>⚠️</span>
                <span>{error}</span>
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 px-4 rounded-xl bg-solar-500 hover:bg-solar-400 text-forest-950 font-semibold text-sm tracking-wide transition-all shadow-lg shadow-solar-500/20 hover:shadow-solar-400/30 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
            >
              {loading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Verifying Credentials...
                </>
              ) : (
                <>
                  <Sparkles className="w-4 h-4" />
                  Sign In to Executive Console
                </>
              )}
            </button>
          </form>

          <div className="mt-6 pt-5 border-t border-forest-800/60 text-center">
            <p className="text-[11px] text-beige-400">
              Protected Administrative Session • Solar Legacy Executive Console
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
