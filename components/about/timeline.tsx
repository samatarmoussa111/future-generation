"use client";

import { motion } from "framer-motion";

const timelineEvents = [
  {
    year: "2010",
    title: "DACEP Foundation",
    description: "Initial establishment of the Development and Community Empowerment Program.",
  },
  {
    year: "2015",
    title: "Program Expansion",
    description: "Launch of comprehensive early childhood development initiatives.",
  },
  {
    year: "2018",
    title: "Health Initiative",
    description: "Integration of health and wellness programs into our community services.",
  },
  {
    year: "2020",
    title: "4 Future Generations",
    description: "Rebranding and expansion of our mission to focus on generational impact.",
  },
  {
    year: "2024",
    title: "Growing Impact",
    description: "Reaching more communities and expanding our programs across the region.",
  },
];

export function Timeline() {
  return (
    <div className="relative">
      <div className="absolute left-1/2 h-full w-0.5 bg-border -translate-x-1/2" />
      <div className="space-y-12">
        {timelineEvents.map((event, index) => (
          <motion.div
            key={event.year}
            initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`relative grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 ${
              index % 2 === 0 ? "md:text-right" : ""
            }`}
          >
            <div className={index % 2 === 0 ? "md:order-1" : "md:order-2"}>
              <div
                className={`bg-card p-6 rounded-lg shadow-sm relative ${
                  index % 2 === 0 ? "md:mr-6" : "md:ml-6"
                }`}
              >
                <div className="absolute top-1/2 -translate-y-1/2 w-3 h-3 bg-primary rounded-full
                  ${index % 2 === 0 ? 'right-0 translate-x-1/2' : 'left-0 -translate-x-1/2'}"
                />
                <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                <p className="text-muted-foreground">{event.description}</p>
              </div>
            </div>
            <div
              className={`text-2xl font-bold text-primary flex items-center ${
                index % 2 === 0 ? "md:order-2 md:justify-start" : "md:order-1 md:justify-end"
              }`}
            >
              {event.year}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}