import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation, type Variants } from "framer-motion";
import { cn } from "@/libs/utils";

export type RevealDirection = "up" | "down" | "left" | "right" | "none";

function getOffset(direction: RevealDirection, distance: number) {
  switch (direction) {
    case "up":
      return { y: distance };
    case "down":
      return { y: -distance };
    case "left":
      return { x: distance };
    case "right":
      return { x: -distance };
    case "none":
    default:
      return {};
  }
}

interface RevealProps {
  children: React.ReactNode;
  width?: "fit-content" | "100%";
  className?: string;
  delay?: number;
  duration?: number;
  direction?: RevealDirection;
  distance?: number;
}

export const Reveal = ({
  children,
  width = "100%",
  className,
  delay = 0,
  duration = 0.5,
  direction = "up",
  distance = 24,
}: RevealProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-75px" });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  const variants: Variants = {
    hidden: { opacity: 0, ...getOffset(direction, distance) },
    visible: { opacity: 1, x: 0, y: 0 },
  };

  return (
    <div
      ref={ref}
      style={{ position: "relative", width, overflow: "hidden" }}
      className={className}
    >
      <motion.div
        variants={variants}
        initial="hidden"
        animate={mainControls}
        transition={{ duration, delay }}
      >
        {children}
      </motion.div>
    </div>
  );
};

interface RevealStaggerProps {
  children: React.ReactNode;
  className?: string;
  width?: "fit-content" | "100%";
  staggerDelay?: number;
}

export const RevealStagger = ({
  children,
  className,
  width = "100%",
  staggerDelay = 0.1,
}: RevealStaggerProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-75px" });

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: staggerDelay },
    },
  };

  return (
    <motion.div
      ref={ref}
      className={cn(className)}
      style={{ width }}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      {children}
    </motion.div>
  );
};

interface RevealItemProps {
  children: React.ReactNode;
  className?: string;
  direction?: RevealDirection;
  distance?: number;
  duration?: number;
}

export const RevealItem = ({
  children,
  className,
  direction = "up",
  distance = 24,
  duration = 0.5,
}: RevealItemProps) => {
  const itemVariants: Variants = {
    hidden: { opacity: 0, ...getOffset(direction, distance) },
    visible: { opacity: 1, x: 0, y: 0 },
  };

  return (
    <motion.div
      className={className}
      variants={itemVariants}
      transition={{ duration }}
    >
      {children}
    </motion.div>
  );
};