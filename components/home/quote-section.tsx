"use client";

import { motion } from "framer-motion";

export function QuoteSection() {
  return (
    <section className="py-20">
      <div className="container">
        <motion.blockquote
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center"
        >
          <p className="text-2xl font-serif italic mb-4">
            "I have the audacity to believe that peoples everywhere can have three meals a day for their bodies, education and culture for their minds, and dignity, equality, and freedom for their spirits."
          </p>
          <footer className="text-muted-foreground">
            — Martin Luther King Jr.
          </footer>
        </motion.blockquote>
      </div>
    </section>
  );
}