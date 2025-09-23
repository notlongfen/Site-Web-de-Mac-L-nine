"use client";

import { motion } from "framer-motion";
import type React from "react";

interface MotionWrapperProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export default function MotionWrapper({
  children,
  className = "",
  delay = 0,
}: MotionWrapperProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{
        duration: 0.5,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function MotionCard({
  children,
  className = "",
  delay = 0,
  index = 0,
}: MotionWrapperProps & { index?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 30 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      whileHover={{ scale: 1.02, y: -2 }}
      transition={{
        duration: 0.4,
        delay: delay + index * 0.1,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function MotionList({
  children,
  className = "",
}: Omit<MotionWrapperProps, "delay">) {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        visible: {
          transition: {
            staggerChildren: 0.1,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function MotionListItem({
  children,
  className = "",
}: Omit<MotionWrapperProps, "delay">) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, x: -20 },
        visible: { opacity: 1, x: 0 },
      }}
      transition={{
        duration: 0.4,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
