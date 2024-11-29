"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import InteractiveHeart from "../InteractiveHeart";

export default function Conclusion() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="py-20 bg-black text-white">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <h2 className="font-playfair text-4xl md:text-5xl font-bold">The Choice is Yours</h2>
          <div className="space-y-4 text-lg text-gray-300">
            <p>
              Whether you choose to spread your wings and fly solo or nest with your family, 
              there's no universal right answer. It's about finding what works best for you, 
              your goals, and your circumstances. 
              Thanks for reading this topic, created by your besttt student Sebastian Quintero. The burger lover 🍔
            </p>
          </div>
          <InteractiveHeart />
          <p className="text-gray-400">Thanks for reading!</p>
        </motion.div>
      </div>
    </section>
  );
}