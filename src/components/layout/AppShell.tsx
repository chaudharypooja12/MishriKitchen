import { FloatingActions } from "@/components/layout/FloatingActions";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { StickyMobileBar } from "@/components/layout/StickyMobileBar";

export function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="mesh-bg flex min-h-full flex-col pb-[calc(3.5rem+env(safe-area-inset-bottom,0px))] md:pb-0">
      <Navbar />
      <main className="relative z-0 flex-1">{children}</main>
      <Footer />
      <StickyMobileBar />
      <FloatingActions />
    </div>
  );
}
