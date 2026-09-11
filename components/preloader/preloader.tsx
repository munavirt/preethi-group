'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export function Preloader() {
  const [isMounted, setIsMounted] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);

  // Initialize mounting state to avoid SSR hydration mismatch
  useEffect(() => {
    setIsMounted(true);
  }, []);

  useGSAP(() => {
    if (!isMounted) return;

    // Set initial GSAP states
    gsap.set(containerRef.current, { autoAlpha: 1 });
    // Hide logo completely via inset from bottom
    gsap.set(logoRef.current, { clipPath: 'inset(0 0 100% 0)' });
    
    // Lock scroll immediately when mounted
    document.body.style.overflow = 'hidden';

    const startAnimation = () => {
      // Small timeout to ensure DOM paints and is ready
      setTimeout(() => {
        const tl = gsap.timeline({
          onComplete: () => {
            setIsComplete(true);
            document.body.style.overflow = ''; // Restore scroll
          }
        });

        tl
          // Phase 1: Reveal PREETHI (Top ~65% of the image)
          // We assume SILKS is in the bottom 35% of the logo's typographic block
          .to(logoRef.current, {
            clipPath: 'inset(0% 0% 35% 0%)',
            duration: 0.8,
            ease: 'power3.inOut'
          })
          // Phase 2: Reveal SILKS (Remaining bottom 35%)
          .to(logoRef.current, {
            clipPath: 'inset(0% 0% 0% 0%)',
            duration: 0.6,
            ease: 'power2.out'
          }, '+=0.1') // elegant slight delay
          // Phase 3: Hold complete logo
          // Phase 4: Exit Transition (Slide up overlay)
          .to(containerRef.current, {
            yPercent: -100,
            duration: 0.9,
            ease: 'power4.inOut',
            delay: 0.4
          });
      }, 100);
    };

    if (document.readyState === 'complete') {
      startAnimation();
    } else {
      const handleLoad = () => startAnimation();
      window.addEventListener('load', handleLoad);
      
      // Fallback maximum duration to prevent permanent blocking
      const timeout = setTimeout(handleLoad, 1500);
      
      return () => {
        window.removeEventListener('load', handleLoad);
        clearTimeout(timeout);
      };
    }
  }, { dependencies: [isMounted], scope: containerRef });

  if (!isMounted || isComplete) return null;

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-brand-red invisible"
      aria-hidden="true"
    >
      <div className="relative w-[75vw] max-w-[400px] md:max-w-[600px] aspect-[4/3] flex items-center justify-center">
        <div ref={logoRef} className="relative w-full h-full">
          <Image
            src="/images/logo.webp"
            alt="Preethi Silks Logo"
            fill
            className="object-contain object-center"
            priority
            sizes="(max-width: 768px) 75vw, 600px"
          />
        </div>
      </div>
    </div>
  );
}
