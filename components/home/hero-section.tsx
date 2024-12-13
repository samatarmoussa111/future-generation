"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="container relative z-10"
      >
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mb-6">
            Building a Thriving Community for Future Generations
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Together, we shape a better future through Early Childhood Development and Social Justice
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg">
              <Link href="/about">Learn More</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/contact">Join Us</Link>
            </Button>
          </div>
        </div>
      </motion.div>
      <div className="absolute inset-0 -z-10">
        <Image
          src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=2069"
          alt="Community"
          fill
          className="object-cover opacity-10"
          priority
        />
      </div>
    </section>
  );
}