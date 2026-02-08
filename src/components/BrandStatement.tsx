import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const BrandStatement = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="relative bg-gradient-to-b from-background via-[hsl(var(--section-alt))] to-background py-32 sm:py-40 lg:py-52 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={isInView ? { scale: 1, opacity: 1 } : {}}
          transition={{ duration: 1.2 }}
        />
      </div>
      
      {/* Quote marks */}
      <motion.div
        className="absolute left-6 sm:left-12 lg:left-20 top-1/2 -translate-y-1/2 text-[180px] sm:text-[240px] lg:text-[300px] font-serif text-primary/10 leading-none select-none"
        initial={{ opacity: 0, x: -30 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        "
      </motion.div>
      
      <motion.div
        className="absolute right-6 sm:right-12 lg:right-20 top-1/2 -translate-y-1/2 text-[180px] sm:text-[240px] lg:text-[300px] font-serif text-primary/10 leading-none select-none rotate-180"
        initial={{ opacity: 0, x: 30 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        "
      </motion.div>

      <div className="relative z-10 mx-auto max-w-4xl px-12 sm:px-20 lg:px-24 text-center">
        {/* Decorative line above */}
        <motion.div
          className="mx-auto mb-10 w-16 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent"
          initial={{ scaleX: 0, opacity: 0 }}
          animate={isInView ? { scaleX: 1, opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
        />
        
        <motion.p
          className="text-xl font-normal italic leading-relaxed text-foreground sm:text-2xl lg:text-3xl lg:leading-relaxed"
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.3 }}
        >
          From concept to execution, we transform brand visions into{" "}
          <span className="text-primary font-medium not-italic">tangible experiences</span>{" "}
          that captivate audiences and create meaningful connections.
        </motion.p>
        
        {/* Decorative line below */}
        <motion.div
          className="mx-auto mt-10 w-16 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent"
          initial={{ scaleX: 0, opacity: 0 }}
          animate={isInView ? { scaleX: 1, opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
        />
      </div>
    </section>
  );
};

export default BrandStatement;
