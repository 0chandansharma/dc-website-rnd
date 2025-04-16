// src/app/coming-soon/[slug]/page.tsx
import React from "react";
import NotAvailable from "@/components/common/NotAvailable";

// Generate all possible paths at build time
export async function generateStaticParams() {
  // List all possible slugs that might be accessed
  const slugs = [
    "visiontech",
    "fusio",
    "rae",
    "notei",
    "healthcare",
    "finance", 
    "retail",
    "manufacturing",
    "docs",
    "api",
    "sdk",
    "case-studies",
    "whitepapers"
  ];
  
  return slugs.map(slug => ({
    slug: slug,
  }));
}

// This is a server component
export default function ComingSoonPage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  
  // Map slugs to page titles
  const pageTitles: Record<string, string> = {
    "visiontech": "VisionTech",
    "fusio": "Fusio",
    "rae": "Rae",
    "notei": "Notei",
    "healthcare": "Healthcare Solutions",
    "finance": "Finance Solutions",
    "retail": "Retail Solutions",
    "manufacturing": "Manufacturing Solutions",
    "docs": "Developer Documentation",
    "api": "API References",
    "sdk": "SDK Documentation",
    "case-studies": "Case Studies",
    "whitepapers": "Whitepapers"
  };
  
  const pageMessages: Record<string, string> = {
    "visiontech": "Our VisionTech platform for visual data processing is currently under development.",
    "fusio": "Fusio, our multimodal LLM solution, will be available soon.",
    "rae": "Rae is coming soon with powerful AI capabilities.",
    "notei": "Notei, our medical data processing solution, is almost ready.",
    "healthcare": "Our healthcare industry solutions will be available soon.",
    "finance": "Financial industry AI solutions are under development.",
    "retail": "Retail-focused AI solutions are coming soon.",
    "manufacturing": "Manufacturing optimization tools are in the works.",
    "docs": "Developer documentation is being prepared for launch.",
    "api": "API references will be available in the near future.",
    "sdk": "Our SDK documentation is under development.",
    "case-studies": "Case studies showcasing our solutions are being prepared.",
    "whitepapers": "Industry whitepapers will be available soon."
  };
  
  const title = pageTitles[slug] || "Coming Soon";
  const message = pageMessages[slug] || "This page is currently under development.";
  
  return (
    <NotAvailable 
      title={title} 
      message={message}
      pageName={title}
    />
  );
}