import { FloatingActions } from "@/components/layout/FloatingActions";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { StickyMobileBar } from "@/components/layout/StickyMobileBar";

export function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-full flex-col pb-14 md:pb-0">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
      <StickyMobileBar />
      <FloatingActions />
    </div>
  );
}
