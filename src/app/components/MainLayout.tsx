"use client";

import FloatingActionButton from "@/components/FloatingActionButton";
import AIChatPopup from "./AIChatPopup";

interface MainLayoutProps {
  children: React.ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="h-full relative">
      {/* Scrollable content area */}
      <div className="h-full overflow-y-auto overflow-x-hidden">
        {children}
      </div>

      {/* Fixed floating components - anchored to viewport */}
      <FloatingActionButton />
      <AIChatPopup />
    </div>
  );
}