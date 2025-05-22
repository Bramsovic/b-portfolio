
import React from "react";

interface SectionTitleProps {
  children: React.ReactNode;
}

const SectionTitle = ({ children }: SectionTitleProps) => {
  return (
    <div className="mb-12 text-center">
      <h2 className="text-3xl md:text-4xl font-bold relative inline-block">
        {children}
        <div className="absolute -bottom-2 left-1/4 right-1/4 h-1 bg-primary rounded-full" />
      </h2>
    </div>
  );
};

export default SectionTitle;
