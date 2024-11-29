"use client";

import { motion } from "framer-motion";
import { Heart, ArrowDown } from "lucide-react";
import { useState } from "react";
import confetti from "canvas-confetti";

export default function InteractiveHeart() {
  const [isClicked, setIsClicked] = useState(false);

  const triggerConfetti = () => {
    const count = 200;
    const defaults = {
      origin: { y: 0.7 },
      zIndex: 999,
    };

    function fire(particleRatio: number, opts: confetti.Options) {
      confetti({
        ...defaults,
        ...opts,
        particleCount: Math.floor(count * particleRatio),
      });
    }

    fire(0.25, {
      spread: 26,
      startVelocity: 55,
      colors: ['#ff0000', '#ffd700', '#ff69b4', '#ff1493'],
    });

    fire(0.2, {
      spread: 60,
      colors: ['#00ff00', '#0000ff', '#800080', '#ffa500'],
    });

    fire(0.35, {
      spread: 100,
      decay: 0.91,
      scalar: 0.8,
      colors: ['#1E90FF', '#FF1493', '#32CD32', '#FFD700'],
    });

    fire(0.1, {
      spread: 120,
      startVelocity: 25,
      decay: 0.92,
      scalar: 1.2,
      colors: ['#FF69B4', '#4169E1', '#FF4500', '#9400D3'],
    });
  };

  const handleClick = () => {
    if (!isClicked) {
      setIsClicked(true);
      triggerConfetti();
    }
  };

  return (
    <div className="relative flex flex-col items-center justify-center gap-4">
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="flex flex-col items-center gap-2"
      >
        <ArrowDown className="text-gray-400 w-6 h-6" />
        <span className="text-gray-400 text-sm font-medium">Click Here</span>
      </motion.div>
      
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={handleClick}
        className="relative cursor-pointer bg-transparent border-none p-0 outline-none"
      >
        <motion.div
          animate={{
            scale: isClicked ? [1, 1.2, 1] : 1,
            color: isClicked ? "#FF0000" : "#718096",
          }}
          transition={{
            duration: 0.5,
            ease: "easeInOut",
          }}
        >
          <Heart 
            className="w-16 h-16 transition-colors duration-300"
            fill={isClicked ? "#FF0000" : "none"}
          />
        </motion.div>
      </motion.button>
    </div>
  );
}