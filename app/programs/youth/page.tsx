"use client";

import { Users } from "lucide-react";
import { ProgramHero } from "@/components/programs/program-hero";
import { FeatureSection } from "@/components/programs/feature-section";

export default function YouthPage() {
  return (
    <div>
      <ProgramHero
        title="Youth Leadership"
        description="Empowering young people with leadership skills, mentorship opportunities, and community engagement programs."
        Icon={Users}
      />

      <div className="container py-20">
        <FeatureSection
          title="Leadership Development"
          description="Our comprehensive leadership program helps young people develop essential skills in public speaking, project management, and community organizing through hands-on experiences and workshops."
          image="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=800&h=600&q=80"
          imageAlt="Youth leadership workshop"
        />

        <FeatureSection
          title="Mentorship Program"
          description="Connecting youth with experienced mentors who provide guidance, support, and real-world insights. Our mentorship program creates lasting relationships that inspire future success."
          image="https://images.unsplash.com/photo-1529390079861-591de354faf5?w=800&h=600&q=80"
          imageAlt="Mentorship session"
          reverse
        />

        <FeatureSection
          title="Community Service Projects"
          description="Engaging youth in meaningful community service projects that develop leadership skills while making a positive impact in their neighborhoods."
          image="https://images.unsplash.com/photo-1517486430290-35657bdcef51?w=800&h=600&q=80"
          imageAlt="Community service activity"
        />
      </div>
    </div>
  );
}