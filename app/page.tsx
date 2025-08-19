"use client"

import { useState } from "react"
import { LandingAnimation } from "@/components/landing-animation"
import { Portfolio } from "@/components/portfolio"
import { BackgroundMusic } from "@/components/background-music"

export default function Home() {
  const [showPortfolio, setShowPortfolio] = useState(false)

  return (
    <main className="min-h-screen bg-background">
      {!showPortfolio ? <LandingAnimation onComplete={() => setShowPortfolio(true)} /> : <Portfolio />}
      <BackgroundMusic />
    </main>
  )
}
