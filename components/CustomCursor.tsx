import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // Check if the target is interactive
      if (
        target.tagName === 'BUTTON' ||
        target.tagName === 'A' ||
        target.closest('button') ||
        target.closest('a') ||
        target.classList.contains('cursor-interactive')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <>
      <style>{`
        body { cursor: none; }
        @media (hover: none) { body { cursor: auto; } .custom-cursor { display: none; } }
      `}</style>
      <motion.div
        className="custom-cursor fixed top-0 left-0 w-4 h-4 rounded-full bg-brand-gold mix-blend-difference pointer-events-none z-[100]"
        animate={{
          x: mousePosition.x - 8,
          y: mousePosition.y - 8,
          scale: isHovering ? 4 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 150,
          damping: 15,
          mass: 0.1
        }}
      />
      <motion.div 
        className="custom-cursor fixed top-0 left-0 w-8 h-8 rounded-full border border-brand-gold pointer-events-none z-[100]"
        animate={{
            x: mousePosition.x - 16,
            y: mousePosition.y - 16,
            scale: isHovering ? 1.5 : 1,
            opacity: isHovering ? 0 : 0.5
        }}
        transition={{
            type: "spring",
            stiffness: 100,
            damping: 25,
            mass: 0.1,
            delay: 0.05
        }}
      />
    </>
  );
};

export default CustomCursor;