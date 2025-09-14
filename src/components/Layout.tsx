import { ReactNode } from "react";
import { Navigation } from "@/components/Navigation";

interface LayoutProps {
  children: ReactNode;
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export const Layout = ({ children, activeTab, onTabChange }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Navigation activeTab={activeTab} onTabChange={onTabChange} />
      <main className="pt-16">
        {children}
      </main>
    </div>
  );
};