// Create a new file: src/components/sections/ClientSwiperWrapper.tsx
"use client";
import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, EffectCoverflow } from "swiper/modules";

// This component will only render on the client side
const ClientSwiperWrapper = ({ children, ...props }) => {
  return <Swiper {...props}>{children}</Swiper>;
};

export default ClientSwiperWrapper;