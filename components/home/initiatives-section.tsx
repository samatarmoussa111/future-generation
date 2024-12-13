import { Brain, Heart, Users } from "lucide-react";
import { InitiativeCard } from "./initiative-card";

export function InitiativesSection() {
  const initiatives = [
    {
      title: "Early Childhood Development",
      description: "Nurturing young minds through comprehensive early education programs and developmental support.",
      Icon: Brain,
    },
    {
      title: "Health & Wellness",
      description: "Promoting community health through preventive care, education, and wellness initiatives.",
      Icon: Heart,
    },
    {
      title: "Youth Leadership",
      description: "Empowering the next generation with leadership skills and community engagement opportunities.",
      Icon: Users,
    },
  ];

  return (
    <section className="py-20 bg-muted/50">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {initiatives.map((initiative) => (
            <InitiativeCard key={initiative.title} {...initiative} />
          ))}
        </div>
      </div>
    </section>
  );
}