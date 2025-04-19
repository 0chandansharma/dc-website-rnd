// src/components/common/ClientOnlyModal.tsx
"use client";
import React, { useState, useEffect } from "react";
import ContactModal from "./ContactModal";

interface ClientOnlyModalProps {
  openModal: boolean;
  setOpenModal: (open: boolean) => void;
}

export default function ClientOnlyModal({ openModal, setOpenModal }: ClientOnlyModalProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  if (!mounted) return null;

  return <ContactModal openModal={openModal} setOpenModal={setOpenModal} />;
}