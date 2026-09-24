import AdminSidebar from "@/components/AdminSidebar";

export default function AdminLayout({ children }: any) {
  return (
    <div className="flex">
      <AdminSidebar />
      <div className="ml-64 p-10 w-full">{children}</div>
    </div>
  );
}
