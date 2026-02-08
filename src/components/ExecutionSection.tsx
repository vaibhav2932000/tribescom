import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import executionBg from "@/assets/execution-bg.jpg";

const ExecutionSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative bg-background py-24 sm:py-32 lg:py-40 overflow-hidden">
      {/* Decorative background glow */}
      <motion.div 
        className="absolute top-0 left-0 w-[400px] h-[400px] rounded-full bg-primary/5 blur-3xl -translate-x-1/2 -translate-y-1/2"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 1 }}
      />
      
      <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-12 lg:px-20">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-20 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            {/* Decorative line */}
            <motion.div
              className="w-12 h-[2px] bg-gradient-to-r from-primary to-primary/50 mb-6"
              initial={{ scaleX: 0, opacity: 0 }}
              animate={isInView ? { scaleX: 1, opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            />
            
            <h2 className="text-2xl font-medium leading-snug tracking-tight sm:text-3xl lg:text-4xl">
              <span className="text-primary">About</span>
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg lg:text-xl lg:leading-relaxed">
              Working with both private enterprises and government bodies, Latitude XP brings together creative thinking, operational rigor, and on-ground excellence to deliver experiences that are immersive, scalable, and memorable.
            </p>
            
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              <a
                href="mailto:enquiries@tribeww.in"
                className="mt-8 inline-block rounded-md bg-primary px-7 py-3 text-base font-medium text-primary-foreground shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
              >
                Get In Touch
              </a>
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-br from-primary/10 to-transparent rounded-2xl blur-xl" />
            <img
              src={executionBg}
              alt="Behind the scenes event execution"
              className="relative w-full rounded-lg object-cover shadow-xl aspect-[4/3]"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ExecutionSection;
