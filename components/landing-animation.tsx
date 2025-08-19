"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

interface LandingAnimationProps {
  onComplete: () => void
}

export function LandingAnimation({ onComplete }: LandingAnimationProps) {
  const [showName, setShowName] = useState(false)
  const [showImage, setShowImage] = useState(false)
  const [showSkills, setShowSkills] = useState(false)
  const [showButton, setShowButton] = useState(false)

  useEffect(() => {
    // Create floating particles
    const createParticles = () => {
      for (let i = 0; i < 50; i++) {
        const particle = document.createElement("div")
        particle.className = "particle"
        particle.style.left = Math.random() * 100 + "%"
        particle.style.animationDelay = Math.random() * 10 + "s"
        particle.style.animationDuration = Math.random() * 10 + 10 + "s"
        document.body.appendChild(particle)

        setTimeout(() => {
          if (document.body.contains(particle)) {
            document.body.removeChild(particle)
          }
        }, 20000)
      }
    }

    createParticles()

    const timer1 = setTimeout(() => setShowName(true), 500)
    const timer2 = setTimeout(() => setShowImage(true), 2000)
    const timer3 = setTimeout(() => setShowSkills(true), 3500)
    const timer4 = setTimeout(() => setShowButton(true), 5000)

    return () => {
      clearTimeout(timer1)
      clearTimeout(timer2)
      clearTimeout(timer3)
      clearTimeout(timer4)
    }
  }, [])

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-background via-background to-card">
      {/* Animated background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(109,40,217,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(109,40,217,0.1)_1px,transparent_1px)] bg-[size:50px_50px] animate-pulse" />

      <div className="text-center z-10 space-y-8 max-w-6xl mx-auto px-4">
        {/* Name with typewriter effect */}
        {showName && (
          <div className="space-y-4">
            <h1 className="text-6xl md:text-8xl font-bold font-[family-name:var(--font-heading)] typewriter glow-effect text-primary">
              Rakesh Kumar Jha
            </h1>
            <p className="text-2xl md:text-3xl text-primary font-semibold animate-fade-in-up glow-effect">
              Data Analyst & Visualization Expert
            </p>
          </div>
        )}

        {/* Profile image with glow effect */}
        {showImage && (
          <div className="flex justify-center animate-fade-in-up">
            <div className="relative">
              <div className="w-48 h-48 rounded-full bg-gradient-to-r from-primary to-secondary p-1 glow-effect float-effect">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/rkj_passportsize%20_photo-VAWKjMb8MzadWuvL3XIr1XSq1jcTOW.png"
                  alt="Rakesh Kumar Jha"
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
              {/* Orbiting elements */}
              <div className="absolute -inset-4">
                <div
                  className="w-4 h-4 bg-primary rounded-full absolute top-0 left-1/2 transform -translate-x-1/2 animate-spin"
                  style={{ animationDuration: "3s" }}
                />
                <div
                  className="w-3 h-3 bg-secondary rounded-full absolute bottom-0 right-0 animate-spin"
                  style={{ animationDuration: "4s", animationDirection: "reverse" }}
                />
                <div
                  className="w-2 h-2 bg-accent rounded-full absolute left-0 top-1/2 transform -translate-y-1/2 animate-spin"
                  style={{ animationDuration: "5s" }}
                />
              </div>
            </div>
          </div>
        )}

        {showSkills && (
          <div className="animate-fade-in-up space-y-6">
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <div className="bg-card/80 backdrop-blur-sm rounded-lg p-6 neon-border">
                <h3 className="text-xl font-bold text-primary mb-4 glow-effect">Visualization Tools</h3>
                <div className="flex flex-wrap gap-2">
                  {["Tableau", "Matplotlib", "Seaborn", "Excel", "Google Sheets", "Google Colab", "Canva"].map(
                    (tool) => (
                      <Badge
                        key={tool}
                        className="bg-secondary/30 text-secondary border border-secondary/50 text-sm font-medium glow-effect"
                      >
                        {tool}
                      </Badge>
                    ),
                  )}
                </div>
              </div>

              <div className="bg-card/80 backdrop-blur-sm rounded-lg p-6 neon-border">
                <h3 className="text-xl font-bold text-primary mb-4 glow-effect">Soft Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {["Problem Solving", "Communication", "Leadership", "Team Player", "Learning Agility"].map(
                    (skill) => (
                      <Badge
                        key={skill}
                        className="bg-accent/30 text-accent border border-accent/50 text-sm font-medium glow-effect"
                      >
                        {skill}
                      </Badge>
                    ),
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Enter button */}
        {showButton && (
          <div className="animate-fade-in-up">
            <Button
              onClick={onComplete}
              className="px-8 py-4 text-lg font-semibold bg-primary hover:bg-primary/80 text-primary-foreground neon-border hover-glow transition-all duration-300"
            >
              Enter Portfolio
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}
