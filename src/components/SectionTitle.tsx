
import React from "react";
import { cn } from "@/lib/utils";

interface SectionTitleProps {
  children: React.ReactNode;
  className?: string;
}

const SectionTitle = ({ children, className }: SectionTitleProps) => {
  return (
    <div className={cn("mb-10 text-center sm:mb-12", className)}>
      <h2 className="relative inline-block text-2xl font-bold leading-tight sm:text-3xl md:text-4xl">
        {children}
        <div className="absolute -bottom-1.5 left-1/4 right-1/4 h-0.5 rounded-full bg-primary sm:-bottom-2 sm:h-1" />
      </h2>
    </div>
  );
};

export default SectionTitle;
