import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import cap360 from "@/assets/capability-360.jpg";
import capReach from "@/assets/capability-reach.jpg";
import capTech from "@/assets/capability-tech.jpg";
import capMgmt from "@/assets/capability-management.jpg";

const capabilities = [
  { line1: "360°", line2: "Brand Experiences", image: cap360 },
  { line1: "Pan-India", line2: "Across Key Indian Markets", image: capReach },
  { line1: "Tech-First", line2: "Innovative Approach", image: capTech },
  { line1: "End-to-End", line2: "Event Management", image: capMgmt },
];

const CapabilitiesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="bg-[hsl(var(--section-alt))] py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 sm:px-12 lg:px-20">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {capabilities.map((cap, i) => (
            <motion.div
              key={cap.line1}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-lg aspect-square cursor-default"
            >
              <img
                src={cap.image}
                alt={`${cap.line1} ${cap.line2}`}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-[hsl(var(--hero-overlay)/0.55)] transition-colors duration-300 group-hover:bg-[hsl(var(--hero-overlay)/0.65)]" />
              <div className="relative z-10 flex h-full flex-col items-center justify-center p-6 text-center">
                <span className="text-xl font-medium tracking-wide text-primary-foreground sm:text-2xl">
                  {cap.line1}
                </span>
                <span className="mt-1 text-sm font-light tracking-wide text-primary-foreground/80 sm:text-base">
                  {cap.line2}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CapabilitiesSection;
