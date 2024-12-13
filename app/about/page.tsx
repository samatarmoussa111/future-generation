"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Timeline } from "@/components/about/timeline";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div>
      <section className="py-20 bg-muted/50">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl font-bold mb-6">Who We Are</h1>
            <p className="text-lg text-muted-foreground mb-8">
              4 Future Generations is dedicated to building stronger communities through early childhood development,
              health initiatives, and youth leadership programs. Our mission is to create lasting positive change
              that spans generations.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Vision & Goals</h2>
              <p className="text-muted-foreground mb-6">
                We envision a future where every child has access to quality education, healthcare, and opportunities
                for growth. Our goals include:
              </p>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <span className="text-primary">•</span>
                  <span>Providing comprehensive early childhood education programs</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-primary">•</span>
                  <span>Promoting community health and wellness initiatives</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-primary">•</span>
                  <span>Developing future leaders through youth engagement</span>
                </li>
              </ul>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&h=800&q=80"
                alt="Community Vision"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/50">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Our Journey</h2>
          <Timeline />
        </div>
      </section>

      <section className="py-20">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-6">Join Our Mission</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Together, we can create lasting change in our community. Join us in our mission to build a better future
            for generations to come.
          </p>
          <Button asChild size="lg">
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}