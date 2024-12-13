"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, Heart, Users } from "lucide-react";
import Link from "next/link";

const programs = [
  {
    title: "Early Childhood Development",
    description: "Comprehensive programs focusing on early education and development from birth to age nine.",
    icon: Brain,
    link: "/programs/early-childhood",
  },
  {
    title: "Health & Wellness",
    description: "Promoting community health through preventive care and wellness education initiatives.",
    icon: Heart,
    link: "/programs/health",
  },
  {
    title: "Youth Leadership",
    description: "Empowering young people with leadership skills and community engagement opportunities.",
    icon: Users,
    link: "/programs/youth",
  },
];

export default function ProgramsPage() {
  return (
    <div className="py-20">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h1 className="text-4xl font-bold mb-6">Our Programs</h1>
          <p className="text-lg text-muted-foreground">
            Discover our comprehensive range of programs designed to support and empower our community
            members at every stage of life.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {programs.map((program, index) => {
            const Icon = program.icon;
            return (
              <motion.div
                key={program.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Link href={program.link}>
                  <Card className="h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                    <CardHeader>
                      <Icon className="w-12 h-12 mb-4 text-primary" />
                      <CardTitle>{program.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{program.description}</p>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}