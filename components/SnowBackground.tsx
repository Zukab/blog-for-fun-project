"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface Snowflake {
  id: number;
  x: number;
  initialY: number;
  size: number;
  opacity: number;
  duration: number;
}

export default function SnowBackground() {
  const [snowflakes, setSnowflakes] = useState<Snowflake[]>([]);

  useEffect(() => {
    const flakes = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      initialY: Math.random() * 100,
      size: Math.random() * 4 + 2,
      opacity: Math.random() * 0.3 + 0.2,
      duration: Math.random() * 8 + 12,
    }));
    setSnowflakes(flakes);
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {snowflakes.map((flake) => (
        <motion.div
          key={flake.id}
          className="absolute bg-white rounded-full blur-[0.3px]"
          style={{
            width: flake.size,
            height: flake.size,
            left: `${flake.x}%`,
            top: `${flake.initialY}%`,
            opacity: flake.opacity,
          }}
          animate={{
            y: [`${flake.initialY}%`, "100vh"],
            x: [
              `${flake.x}%`,
              `${flake.x + (Math.random() * 10 - 5)}%`,
              `${flake.x - (Math.random() * 10 - 5)}%`,
              `${flake.x}%`
            ],
          }}
          transition={{
            y: {
              duration: flake.duration,
              repeat: Infinity,
              ease: "linear",
            },
            x: {
              duration: flake.duration,
              repeat: Infinity,
              ease: "easeInOut",
            }
          }}
        />
      ))}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-purple-500/10" />
    </div>
  );
}
