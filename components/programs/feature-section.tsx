"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface FeatureSectionProps {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  reverse?: boolean;
}

export function FeatureSection({ title, description, image, imageAlt, reverse }: FeatureSectionProps) {
  return (
    <div className="py-12">
      <div className={cn("grid md:grid-cols-2 gap-12 items-center", reverse && "md:[&>div:first-child]:order-2")}>
        <motion.div
          initial={{ opacity: 0, x: reverse ? 20 : -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-6">{title}</h2>
          <p className="text-muted-foreground">{description}</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: reverse ? -20 : 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="relative h-[300px] rounded-lg overflow-hidden"
        >
          <Image
            src={image}
            alt={imageAlt}
            fill
            className="object-cover"
          />
        </motion.div>
      </div>
    </div>
  );
}