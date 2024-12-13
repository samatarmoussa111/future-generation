"use client";

import { Heart } from "lucide-react";
import { ProgramHero } from "@/components/programs/program-hero";
import { FeatureSection } from "@/components/programs/feature-section";

export default function HealthPage() {
  return (
    <div>
      <ProgramHero
        title="Health & Wellness"
        description="Promoting community health through preventive care, education, and comprehensive wellness initiatives."
        Icon={Heart}
      />

      <div className="container py-20">
        <FeatureSection
          title="Prenatal Services"
          description="Supporting expecting mothers with comprehensive prenatal care, nutrition guidance, and preparation for parenthood. Our program ensures healthy starts for both mothers and babies."
          image="https://images.unsplash.com/photo-1531983412531-1f49a365ffed?w=800&h=600&q=80"
          imageAlt="Prenatal care"
        />

        <FeatureSection
          title="Mental Health Support"
          description="Providing accessible mental health services, counseling, and support groups for all ages. We believe in nurturing both physical and mental well-being for overall health."
          image="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&h=600&q=80"
          imageAlt="Mental health support"
          reverse
        />

        <FeatureSection
          title="Community Wellness Programs"
          description="Offering fitness classes, nutrition workshops, and health education programs designed to promote healthy lifestyles and prevent chronic diseases in our community."
          image="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&h=600&q=80"
          imageAlt="Community wellness activities"
        />
      </div>
    </div>
  );
}