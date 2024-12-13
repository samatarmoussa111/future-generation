"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface ProgramHeroProps {
  title: string;
  description: string;
  Icon: LucideIcon;
}

export function ProgramHero({ title, description, Icon }: ProgramHeroProps) {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <Icon className="w-16 h-16 mx-auto mb-6 text-primary" />
          <h1 className="text-4xl font-bold mb-6">{title}</h1>
          <p className="text-lg text-muted-foreground">{description}</p>
        </motion.div>
      </div>
    </section>
  );
}