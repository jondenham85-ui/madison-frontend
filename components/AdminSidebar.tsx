import Link from "next/link";

export default function AdminSidebar() {
  return (
    <aside className="w-64 h-screen bg-dark border-r border-neon shadow-neonSoft p-6 fixed">
      <h1 className="text-neon text-2xl mb-8">MAD Admin</h1>

      <nav className="flex flex-col gap-4">
        <Link href="/admin" className="text-neon hover:shadow-neonSoft">Dashboard</Link>
        <Link href="/admin/system-overview" className="text-neon hover:shadow-neonSoft">System Overview</Link>
        <Link href="/admin/chat-intelligence" className="text-neon hover:shadow-neonSoft">Chat Intelligence</Link>
        <Link href="/admin/automation" className="text-neon hover:shadow-neonSoft">Automation</Link>
        <Link href="/admin/revenue" className="text-neon hover:shadow-neonSoft">Revenue</Link>
        <Link href="/admin/owner" className="text-neon hover:shadow-neonSoft">Owner Controls</Link>
        <Link href="/admin/voice-controls" className="text-neon hover:shadow-neonSoft">Voice Controls</Link>
      </nav>
    </aside>
  );
}
