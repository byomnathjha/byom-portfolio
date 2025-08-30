'use client';

import { useState, useEffect, useRef } from "react";

const Pointer = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [trailPosition, setTrailPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false); // New state to track hover status
  const animationFrameRef = useRef(null);

  const animate = () => {
    setTrailPosition((prevTrailPosition) => {
      const lerpFactor = 0.15;
      const newX = prevTrailPosition.x + (position.x - prevTrailPosition.x) * lerpFactor;
      const newY = prevTrailPosition.y + (position.y - prevTrailPosition.y) * lerpFactor;
      return { x: newX, y: newY };
    });
    animationFrameRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    // New function to handle cursor size change
    const handleHoverChange = (e) => {
      setIsHovering(e.type === "mouseenter");
    };

    // Add event listeners for mouse movement and hover detection
    window.addEventListener("mousemove", handleMouseMove);
    
    // Add event listeners to a specific element to trigger the hover effect.
    // Replace '.target-section' with the actual class or ID of your target div.
    const targetElement = document.querySelector('.target-section');
    if (targetElement) {
      targetElement.addEventListener('mouseenter', handleHoverChange);
      targetElement.addEventListener('mouseleave', handleHoverChange);
    }

    animationFrameRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (targetElement) {
        targetElement.removeEventListener('mouseenter', handleHoverChange);
        targetElement.removeEventListener('mouseleave', handleHoverChange);
      }
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [position]);

  const mainCursorClasses = `fixed z-[999] rounded-full bg-blue-500 pointer-events-none transition-all duration-300 ease-out 
    ${isHovering ? 'w-10 h-10 opacity-70' : 'w-4 h-4'}`;
  const trailCursorClasses = `fixed z-[999] rounded-full bg-blue-500/40 pointer-events-none transition-all duration-300 ease-out 
    ${isHovering ? 'w-20 h-20 opacity-30' : 'w-10 h-10'}`;

  return (
    <>
      {/* Trailing pointer */}
      <div
        className={trailCursorClasses}
        style={{
          transform: `translate(${trailPosition.x}px, ${trailPosition.y}px)`,
        }}
      />
      {/* Main pointer */}
      <div
        className={mainCursorClasses}
        style={{
          transform: `translate(${position.x}px, ${position.y}px)`,
        }}
      />
    </>
  );
};

export default Pointer;