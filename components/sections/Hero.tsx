"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import SnowBackground from "../SnowBackground";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden bg-black text-white">
      <SnowBackground />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center z-10"
      >
        <h1 className="font-playfair text-6xl md:text-8xl font-bold mb-6">
          Family or Living Solo?
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto px-4">
          The question today is: Should you stay with your family or venture out on your own?
          Let's explore both sides of this decision. 😎😎
        </p>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ArrowDown size={32} className="text-white/60" />
        </motion.div>
      </motion.div>
      
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 to-black/50" />
    </section>
  );
}