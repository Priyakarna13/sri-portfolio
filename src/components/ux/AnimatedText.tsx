"use client";
import { motion } from "framer-motion";

export function Stagger({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <motion.div
      initial="hidden"
      animate="show"
      variants={{
        hidden: { opacity: 0, y: 12 },
        show: {
          opacity: 1, y: 0,
          transition: { staggerChildren: 0.10, delayChildren: delay }
        }
      }}
    >
      {children}
    </motion.div>
  );
}

export function Line({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 10 },
        show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
      }}
      className="overflow-hidden"
    >
      {children}
    </motion.div>
  );
}
