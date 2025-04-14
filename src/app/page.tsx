// src/app/page.tsx
"use client";
import React, { useState } from "react";
import { Flowbite } from "flowbite-react";
import Header from "@/components/common/Header";
import HeroSection from "@/components/sections/HeroSection";
import CollaboratorsSection from "@/components/sections/CollaboratorsSection";
import SpecializeSection from "@/components/sections/SpecializeSection";
import SolutionsSection from "@/components/sections/SolutionsSection";
import EncryptionSection from "@/components/sections/EncryptionSection";
import DrivingGrowthSection from "@/components/sections/DrivingGrowthSection";
import SmartNoteTabSection from "@/components/sections/SmartNoteTabSection";
import ChallengesSection from "@/components/sections/ChallengesSection";
import ClientTestimonialsSection from "@/components/sections/ClientTestimonialsSection";
import InsightsSection from "@/components/sections/InsightsSection";
import ReadyToUnlockSection from "@/components/sections/ReadyToUnlockSection";
import ContactModal from "@/components/common/ContactModal";
import Footer from "@/components/common/Footer";
import { customTheme } from "@/utils/theme";

export default function Home() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <Flowbite theme={{ theme: customTheme }}>
        <Header />
        
        <main>
          <HeroSection onBookDemo={() => setOpenModal(true)} />
          <CollaboratorsSection />
          <SpecializeSection onBookDemo={() => setOpenModal(true)} />
          <SolutionsSection />
          <EncryptionSection />
          <DrivingGrowthSection onBookDemo={() => setOpenModal(true)} />
          <SmartNoteTabSection />
          <ChallengesSection />
          <ClientTestimonialsSection />
          <InsightsSection />
          <ReadyToUnlockSection onBookDemo={() => setOpenModal(true)} />
        </main>
        
        <Footer />
        <ContactModal openModal={openModal} setOpenModal={setOpenModal} />
      </Flowbite>
    </>
  );
}