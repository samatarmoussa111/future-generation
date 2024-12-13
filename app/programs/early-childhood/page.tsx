"use client";

import { Brain } from "lucide-react";
import { ProgramHero } from "@/components/programs/program-hero";
import { FeatureSection } from "@/components/programs/feature-section";

export default function EarlyChildhoodPage() {
  return (
    <div>
      <ProgramHero
        title="Early Childhood Development"
        description="Nurturing young minds through comprehensive early education programs and developmental support from birth to age nine."
        Icon={Brain}
      />

      <div className="container py-20">
        <FeatureSection
          title="Great by Nine Initiative"
          description="Our flagship program ensures every child receives the foundation they need for success. Through age-appropriate activities, developmental monitoring, and parent education, we create an environment where children can thrive."
          image="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=800&h=600&q=80"
          imageAlt="Children learning together"
        />

        <FeatureSection
          title="Early Learning Programs"
          description="Structured learning experiences that combine play-based education with developmental milestones. Our curriculum is designed to foster cognitive, social, and emotional growth in young children."
          image="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&h=600&q=80"
          imageAlt="Early learning activities"
          reverse
        />

        <FeatureSection
          title="Parent Partnership Program"
          description="We believe parents are their children's first teachers. Our partnership program provides resources, workshops, and support to help parents create enriching learning environments at home."
          image="https://images.unsplash.com/photo-1491013516836-7db643ee125a?w=800&h=600&q=80"
          imageAlt="Parent and child interaction"
        />
      </div>
    </div>
  );
}