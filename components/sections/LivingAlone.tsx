"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Home } from "lucide-react";
import Image from 'next/image';

export default function LivingAlone() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <div className="space-y-6">
            <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center">
              <Home className="w-8 h-8 text-white" />
            </div>
            <h2 className="font-playfair text-4xl md:text-5xl font-bold">Living on Your Own</h2>
            <div className="space-y-4 text-lg text-gray-600">
              <p>
                Taking the leap to live independently is like starting a new chapter in life's book. 
                You get to write your own rules, decorate your space exactly how you want, and eat 
                ice cream for breakfast if that's your thing (we won't judge, ok teacher? hehe).
              </p>
              <p>
                The freedom is amazing, but let&apos;s be real you&apos;ll need to master the art of 
                adulting. That means budgeting, cooking, cleaning, and figuring out why the 
                washing machine is making that weird noise at 2 AM.
              </p>
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Image
              src="https://images.unsplash.com/photo-1486304873000-235643847519?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80"
              alt="Cozy apartment living room"
              width={2340}
              height={1560}
              className="rounded-2xl shadow-2xl"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}