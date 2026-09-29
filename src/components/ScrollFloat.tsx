import React from 'react';
import { motion } from 'framer-motion';

interface ScrollFloatProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  offsetY?: number;
  scale?: boolean;
}

export const ScrollFloat: React.FC<ScrollFloatProps> = ({
  children,
  className = '',
  delay = 0,
  offsetY = 90,
  scale = true
}) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: offsetY,
        scale: scale ? 0.92 : 1,
        rotateX: 8,
        filter: 'blur(6px)'
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        scale: 1,
        rotateX: 0,
        filter: 'blur(0px)'
      }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{
        duration: 0.9,
        ease: [0.16, 1, 0.3, 1], // Smooth fluid float curve
        delay: delay
      }}
      style={{ transformPerspective: 1000 }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default ScrollFloat;
