// src/components/examples/ButtonExamples.tsx
import React from "react";
import Button from "@/components/common/Button";

const ButtonExamples: React.FC = () => {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Button System</h1>
      
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Variants</h2>
        <div className="flex flex-wrap gap-4">
          <Button text="Primary Button" variant="primary" />
          <Button text="Secondary Button" variant="secondary" />
          <Button text="Outline Button" variant="outline" />
          <Button text="Ghost Button" variant="ghost" />
          <Button text="White Button" variant="white" />
        </div>
      </section>
      
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Sizes</h2>
        <div className="flex flex-wrap items-center gap-4">
          <Button text="Small Button" size="sm" />
          <Button text="Medium Button" size="md" />
          <Button text="Large Button" size="lg" />
        </div>
      </section>
      
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">With Icons</h2>
        <div className="flex flex-wrap gap-4">
          <Button 
            text="Left Icon" 
            icon={
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            } 
            iconPosition="left" 
          />
          <Button 
            text="Right Icon" 
            icon={
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            } 
            iconPosition="right" 
          />
        </div>
      </section>
      
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">States</h2>
        <div className="flex flex-wrap gap-4">
          <Button text="Disabled Button" disabled />
          <Button text="Loading Button" loading />
          <Button text="Full Width Button" fullWidth />
        </div>
      </section>
    </div>
  );
};

export default ButtonExamples;