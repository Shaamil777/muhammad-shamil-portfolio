'use client'

import React from 'react'
import Image from 'next/image'

export default function AboutPage() {
  return (
    <div className="about-container">
      {/* Main content grid */}
      <div className="about-content">
        {/* Left Section - Title and Notes */}
        <div className="about-left pl-30">
          <h1 className="about-title font-cormorant">About</h1>

          <h2 className="about-subtitle font-cormorant">
            I'm Lauren. A designer, maker and problem solver.
          </h2>

          <div className="about-notes">
            <p className="about-paragraph">
              The cusp of art and technology has always fascinated me and I've never been afraid to just jump in and give it a go,
              whether it's Paint, Photoshop, Sketch or CSS. I've been designing with computers since the day I first opened Microsoft Paint.
            </p>

            <p className="about-paragraph">
              Fast forward to 2023 and I've tried it all, from Digital Campaign Design and Flash Actionscript to Web Design,
              Animation, HTML/CSS, No-Code Web Development, Product Design and Product Management. Everything I have done,
              small or big, has been a vital stepping stone for where I am today.
            </p>

            <p className="about-paragraph">
              What excites me most about being a Product Designer is being able to design and create things that have purpose
              and solve real problems. It goes beyond designing buttons and websites and involves having a passion for designing
              experiences and solutions that help people, whether it's helping them make better videos, market themselves online,
              or buy something online. Leaning into customer insight and understanding their needs, finding the right problems to
              solve, delivering solutions as quickly as possible, learning from those and then iterating and improving that value over
              time is the key to great product design.
            </p>
          </div>
        </div>

        {/* Right Section - Image */}
        <div className="about-right">
          <div className="about-image-container">
            <Image
              src="/about-profile.png"
              alt="Profile portrait"
              width={400}
              height={520}
              className="about-image"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  )
}
