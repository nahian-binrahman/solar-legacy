import { isAdminAuthenticated } from "@/lib/admin-auth";
import { redirect } from "next/navigation";
import { fetchConsultationLeadsAction } from "@/actions/leads";
import { 
  Users, 
  Mail, 
  Phone, 
  Calendar 
} from "lucide-react";

interface LeadItem {
  id: string;
  name: string;
  email: string;
  phone: string;
  propertyType: string;
  interest: string;
  message?: string | null;
  status: string;
  createdAt: string | Date;
}

export default async function AdminLeadsPage() {
  const isAuthed = await isAdminAuthenticated();
  if (!isAuthed) {
    redirect("/admin/login");
  }

  const res = await fetchConsultationLeadsAction();
  const leads: LeadItem[] = (res.leads as LeadItem[]) || [];

  return (
    <div className="p-8 max-w-7xl mx-auto space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-forest-800/80">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-beige-50">
            Consultation Inquiries & Leads
          </h1>
          <p className="text-sm text-beige-300">
            Manage incoming architectural solar consultation inquiries and prospect communications.
          </p>
        </div>

        <div className="px-4 py-2 rounded-xl bg-forest-900 border border-forest-800 text-xs font-mono text-solar-400">
          Total Inquiries: {leads.length}
        </div>
      </div>

      {/* Leads List */}
      {leads.length === 0 ? (
        <div className="p-12 text-center rounded-2xl bg-forest-900/40 border border-forest-800/60 text-beige-300">
          <Users className="w-8 h-8 text-beige-400 mx-auto mb-3 opacity-60" />
          <p className="font-medium">No consultation inquiries received yet.</p>
        </div>
      ) : (
        <div className="space-y-4">
          {leads.map((lead: LeadItem) => (
            <div
              key={lead.id}
              className="p-6 rounded-2xl bg-forest-900/60 border border-forest-800/80 hover:border-forest-700 transition-all space-y-4"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-forest-800/60 pb-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-solar-500/10 border border-solar-500/30 flex items-center justify-center text-solar-400 font-bold text-sm">
                    {lead.name.charAt(0)}
                  </div>
                  <div>
                    <h3 className="font-bold text-beige-50 text-base">{lead.name}</h3>
                    <div className="flex items-center gap-4 text-xs text-beige-300 font-mono mt-0.5">
                      <span className="flex items-center gap-1">
                        <Mail className="w-3.5 h-3.5 text-solar-400" />
                        {lead.email}
                      </span>
                      <span className="flex items-center gap-1">
                        <Phone className="w-3.5 h-3.5 text-emerald-400" />
                        {lead.phone}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-mono uppercase px-2.5 py-1 rounded-full bg-forest-950 border border-forest-700 text-beige-200">
                    {lead.propertyType}
                  </span>
                  <span
                    className={`text-[11px] font-mono uppercase px-2.5 py-1 rounded-full border ${
                      lead.status === "QUALIFIED"
                        ? "bg-emerald-950/40 border-emerald-800 text-emerald-300"
                        : lead.status === "CONTACTED"
                        ? "bg-blue-950/40 border-blue-800 text-blue-300"
                        : "bg-amber-950/40 border-amber-800 text-amber-300"
                    }`}
                  >
                    {lead.status}
                  </span>
                </div>
              </div>

              {/* Message */}
              {lead.message && (
                <div className="p-3.5 rounded-xl bg-forest-950/60 border border-forest-800/60 text-xs text-beige-200">
                  <span className="font-mono text-[10px] uppercase text-beige-400 block mb-1">
                    Client Requirement Message:
                  </span>
                  <p>{lead.message}</p>
                </div>
              )}

              <div className="flex items-center justify-between text-[11px] text-beige-400 font-mono pt-1">
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5" />
                  {new Date(lead.createdAt).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </span>
                <span className="text-solar-400">
                  Interest: {lead.interest} Solar Systems
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
