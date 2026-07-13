'use client';

import { useEffect, useState } from 'react';
import TransitionLink from "./components/TransitionLink";

export default function Home() {
  const [isReturn, setIsReturn] = useState(false);

  useEffect(() => {
    const hasVisited = sessionStorage.getItem('hasVisitedHome');
    if (hasVisited) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setIsReturn(true);
    } else {
      sessionStorage.setItem('hasVisitedHome', 'true');
    }
  }, []);

  const r = (n: number) => `content-reveal ${isReturn ? `content-reveal-fast-${n}` : `content-reveal-${n}`}`;

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-between py-12 px-4 relative overflow-hidden" style={{ backgroundColor: '#efff08' }}>
      {/* Top Section */}
      <div className="w-full flex justify-center pt-8 z-10">
        <h2 className={`${r(1)} text-black font-bold uppercase tracking-[0.2em] text-sm md:text-base flex items-center gap-2`} style={{ fontFamily: 'var(--font-inter)' }}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5">
            <rect x="3" y="3" width="7" height="7" fill="currentColor"/>
            <rect x="3" y="14" width="7" height="7" fill="currentColor"/>
            <rect x="14" y="3" width="7" height="7" fill="currentColor"/>
            <rect x="14" y="14" width="7" height="7" fill="currentColor"/>
          </svg>
          MUHAMMAD SHAMIL
        </h2>
      </div>

      {/* Center Section */}
      <div className="flex-grow flex flex-col justify-center items-center w-full z-10 my-8" style={{ fontFamily: 'var(--font-inter)', fontWeight: 900, fontStyle: 'italic' }}>
        <div className="flex flex-col items-center justify-center leading-[0.85]">
          <TransitionLink href="/works" className={`${r(2)} text-black hover:text-[#d9d9d9] transition-colors duration-300 text-[18vw] md:text-[15vw] lg:text-[200px] xl:text-[255px] uppercase text-center block`}>
            WORK
          </TransitionLink>
          <TransitionLink href="/about" className={`${r(3)} text-black hover:text-[#d9d9d9] transition-colors duration-300 text-[18vw] md:text-[15vw] lg:text-[200px] xl:text-[255px] uppercase text-center block`}>
            ABOUT
          </TransitionLink>
          <TransitionLink href="/contact" className={`${r(4)} text-black hover:text-[#d9d9d9] transition-colors duration-300 text-[18vw] md:text-[15vw] lg:text-[200px] xl:text-[255px] uppercase text-center block`}>
            CONTACT
          </TransitionLink>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="w-full flex justify-center pb-8 z-10">
        <p className={`${r(5)} text-black font-bold uppercase tracking-[0.2em] text-sm md:text-base`} style={{ fontFamily: 'var(--font-inter)' }}>
          BUILDING THE FUTURE.
        </p>
      </div>

     
    </div>
  );
}