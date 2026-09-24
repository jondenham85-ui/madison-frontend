export default function NeonButton({ children }: { children: any }) {
  return (
    <button className="px-6 py-3 bg-dark border border-neon text-neon shadow-neonSoft hover:shadow-neon transition-all">
      {children}
    </button>
  );
}
