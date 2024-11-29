"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Users } from "lucide-react";
import Image from 'next/image';

export default function LivingWithFamily() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-2 md:order-1"
          >
            <Image
              src="https://images.unsplash.com/photo-1511895426328-dc8714191300?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80"
              alt="Family dinner time"
              width={2340}
              height={1560}
              className="rounded-2xl shadow-2xl"
            />
          </motion.div>
          <div className="order-1 md:order-2 space-y-6">
            <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h2 className="font-playfair text-4xl md:text-5xl font-bold">Living with Family</h2>
            <div className="space-y-4 text-lg text-gray-600">
              <p>
                There's something special about coming home to familiar faces and the smell of mom's 
                cooking. Living with family means having a built in support system, someone to talk 
                to after a rough day, and yes home cooked meals!
              </p>
              <p>
                Sure, you might need to follow house rules and coordinate bathroom schedules, but 
                the trade off often includes financial benefits, emotional support, and never having 
                to figure out how to unclog a drain by yourself.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}