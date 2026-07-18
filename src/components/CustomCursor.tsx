import { useEffect, useState, useRef } from 'react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(true);

  const ringRef = useRef<HTMLDivElement>(null);
  const delayPosRef = useRef({ x: -100, y: -100 });

  useEffect(() => {
    // Detect mobile / touch screen
    const checkMobile = () => {
      const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
      setIsMobile(isTouch || window.innerWidth < 1024);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    if (isMobile) return;

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    // Smooth hover states for links/buttons/interactive elements
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target &&
        (target.tagName === 'BUTTON' ||
          target.tagName === 'A' ||
          target.closest('button') ||
          target.closest('a') ||
          target.closest('.interactive-card') ||
          target.classList.contains('cursor-pointer'))
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('mouseover', handleMouseOver);

    // Smooth trailing animation using RequestAnimationFrame
    let reqId: number;
    const updateRing = () => {
      const ring = ringRef.current;
      if (ring) {
        // Linear interpolation to make the outer ring lag slightly behind
        const targetX = position.x;
        const targetY = position.y;

        const currentX = delayPosRef.current.x;
        const currentY = delayPosRef.current.y;

        const nextX = currentX + (targetX - currentX) * 0.15;
        const nextY = currentY + (targetY - currentY) * 0.15;

        delayPosRef.current = { x: nextX, y: nextY };

        ring.style.transform = `translate3d(${nextX}px, ${nextY}px, 0) translate(-50%, -50%) ${
          isHovered ? 'scale(1.6)' : 'scale(1)'
        }`;
      }
      reqId = requestAnimationFrame(updateRing);
    };

    updateRing();

    return () => {
      window.removeEventListener('resize', checkMobile);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('mouseover', handleMouseOver);
      cancelAnimationFrame(reqId);
    };
  }, [position.x, position.y, isHovered, isMobile]);

  if (isMobile || !isVisible) return null;

  return (
    <div id="custom-cursor-container" className="fixed inset-0 pointer-events-none z-[10000] mix-blend-difference hidden lg:block">
      {/* Outer trailing glow circle */}
      <div
        ref={ringRef}
        className={`fixed top-0 left-0 w-8 h-8 rounded-full border border-electric-blue bg-electric-blue/5 transition-colors duration-300 pointer-events-none`}
        style={{
          boxShadow: isHovered ? '0 0 15px rgba(0, 229, 255, 0.6)' : 'none',
        }}
      />
      {/* Inner precise dot */}
      <div
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-neon-green pointer-events-none -translate-x-1/2 -translate-y-1/2"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          boxShadow: '0 0 10px #39ff14',
        }}
      />
    </div>
  );
}
