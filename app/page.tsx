"use client";

import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Experience } from "@/components/Experience";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Achievements } from "@/components/Achievements";
import { GlobalJourney } from "@/components/GlobalJourney";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { FloatingDecorations } from "@/components/FloatingDecorations";

export default function Home() {
  return (
    <div className="min-h-screen bg-petal-pink selection:bg-sakura/30 font-sans text-berry overflow-x-hidden">
      <FloatingDecorations />
      <Navbar />
      <main className="relative z-10 pt-20">
        <Hero />
        <Experience />
        <Skills />
        <Projects />
        <Achievements />
        <GlobalJourney />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
