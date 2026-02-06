import React from 'react'

export default function AboutPage() {
  return (
    <div className="about-container min-h-screen w-full" style={{ backgroundColor: 'var(--token-e42f5e7f-eb84-44c9-935c-17b662e18b38, #1a1a18)' }}>
      <div className="p-12 pt-32">
        <h1 className="text-5xl font-cormorant text-white mb-8">About Me</h1>
        <p className="description-text text-lg leading-relaxed max-w-2xl">
          This is the about page content. The transition brought you here with a smooth sliding overlay effect.
        </p>
      </div>
    </div>
  )
}
