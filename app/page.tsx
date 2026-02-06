'use client';

import TransitionLink from "./components/TransitionLink";

export default function Home() {
  return (
    <div className="home-container h-screen w-full flex">
      {/* Left side - Content area for paragraph */}
      <div className="w-1/2 p-12 pt-110 flex items-center justify-center">
        <div className="max-w-md">
          <div className="mb-8">
            <h2 className="content-reveal content-reveal-1 text-1xl mb-4 text-white font-normal">
              MUHAMMAD SHAMIL
            </h2>
            <p className="content-reveal content-reveal-2 description-text text-md leading-relaxed">
              Freelance MERN stack developer with real client experience, focused on building scalable and maintainable web applications.
            </p>
            <p className="content-reveal content-reveal-3 description-text text-md leading-relaxed mt-4">
              Full-stack Web Developer · MERN
            </p>
          </div>
        </div>
      </div>

      {/* Right side - Navigation Links */}
      <div className="w-1/2 flex flex-col justify-center items-center pr-55 space-y-6">
        <TransitionLink href="/works" className="content-reveal content-reveal-3 nav-link text-[12rem] pr-90 tracking-wider leading-none">
          WORK
        </TransitionLink>

        <TransitionLink href="/about" className="content-reveal content-reveal-4 nav-link text-[12rem] pr-65 tracking-wider leading-none">
          ABOUT
        </TransitionLink>

        <TransitionLink href="/contact" className="content-reveal content-reveal-5 nav-link text-[12rem] tracking-wider leading-none">
          CONTACT
        </TransitionLink>
      </div>
    </div>
  );
}