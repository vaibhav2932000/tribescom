import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import expertiseActivations from "@/assets/expertise-activations.jpg";

const CTASection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="relative overflow-hidden">
      {/* Two-column layout */}
      <div className="grid lg:grid-cols-2 min-h-[500px]">
        {/* Left: Image */}
        <div className="relative h-64 lg:h-auto">
          <img 
            src={expertiseActivations} 
            alt="Corporate conference event" 
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-background/20 lg:bg-gradient-to-l lg:from-background lg:via-background/60 lg:to-transparent" />
        </div>

        {/* Right: Content */}
        <div className="relative bg-foreground flex items-center">
          <div className="px-8 py-16 sm:px-12 lg:px-16 lg:py-20 max-w-xl">
            {/* Decorative accent */}
            <motion.div
              className="w-10 h-[2px] bg-primary mb-8"
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.5 }}
            />

            <motion.h2
              className="text-2xl font-medium leading-snug tracking-tight text-background sm:text-3xl lg:text-4xl"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7 }}
            >
              Let's Create Something{" "}
              <span className="text-primary">Extraordinary</span>
            </motion.h2>

            <motion.p
              className="mt-5 text-base leading-relaxed text-background/70 sm:text-lg"
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              Transform your brand vision into immersive experiences that resonate and drive results.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <a
                href="mailto:enquiries@tribeww.in"
                className="mt-8 inline-flex items-center gap-2 rounded-md bg-primary px-7 py-3.5 text-base font-medium text-primary-foreground shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
              >
                Get In Touch
                <svg 
                  className="w-4 h-4" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M17 8l4 4m0 0l-4 4m4-4H3" 
                  />
                </svg>
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
