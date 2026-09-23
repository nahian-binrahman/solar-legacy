import { isAdminAuthenticated } from "@/lib/admin-auth";
import { AdminShell } from "@/components/admin/admin-shell";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const isAuthed = await isAdminAuthenticated();

  // If unauthenticated, render children directly (which is the login page)
  if (!isAuthed) {
    return <>{children}</>;
  }

  return <AdminShell>{children}</AdminShell>;
}
