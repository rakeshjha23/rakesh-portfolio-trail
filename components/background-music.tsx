"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Volume2, VolumeX, Music } from "lucide-react"

export function BackgroundMusic() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [hasAudio, setHasAudio] = useState(true)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  useEffect(() => {
    audioRef.current = new Audio(
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/vlog-music-beat-trailer-showreel-promo-background-intro-theme-274290-iPijdy4cgERuwc6xTx8LxJjdG0t3zl.mp3",
    )
    audioRef.current.loop = true
    audioRef.current.volume = 0.3

    // Auto-play after 2 seconds
    const autoPlayTimer = setTimeout(() => {
      if (audioRef.current) {
        audioRef.current
          .play()
          .then(() => {
            setIsPlaying(true)
            setHasAudio(true)
          })
          .catch((error) => {
            console.log("[v0] Auto-play blocked by browser:", error)
            setHasAudio(true) // Still show controls for manual play
          })
      }
    }, 2000)

    return () => {
      clearTimeout(autoPlayTimer)
      if (audioRef.current) {
        audioRef.current.pause()
        audioRef.current = null
      }
    }
  }, [])

  const togglePlay = () => {
    if (!audioRef.current || !hasAudio) return

    if (isPlaying) {
      audioRef.current.pause()
      setIsPlaying(false)
    } else {
      audioRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch((error) => {
          console.log("[v0] Play failed:", error)
          setHasAudio(false)
        })
    }
  }

  const toggleMute = () => {
    if (!audioRef.current) return

    if (isMuted) {
      audioRef.current.volume = 0.3
      setIsMuted(false)
    } else {
      audioRef.current.volume = 0
      setIsMuted(true)
    }
  }

  return (
    <div className="fixed bottom-8 left-8 z-50 flex gap-2">
      <Button
        variant="outline"
        size="sm"
        onClick={togglePlay}
        disabled={!hasAudio}
        className="neon-border hover-glow bg-card/80 backdrop-blur-sm disabled:opacity-50"
        title={hasAudio ? (isPlaying ? "Pause Music" : "Play Music") : "Audio not available"}
      >
        {hasAudio ? isPlaying ? "⏸️" : "▶️" : <Music className="w-4 h-4" />}
      </Button>

      <Button
        variant="outline"
        size="sm"
        onClick={toggleMute}
        disabled={!hasAudio}
        className="neon-border hover-glow bg-card/80 backdrop-blur-sm disabled:opacity-50"
        title={hasAudio ? (isMuted ? "Unmute Music" : "Mute Music") : "Audio not available"}
      >
        {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
      </Button>

      {isPlaying && !isMuted && (
        <div className="flex items-center px-2 py-1 bg-primary/20 rounded-md border border-primary/30">
          <Music className="w-3 h-3 text-primary mr-1 animate-pulse" />
          <span className="text-xs text-primary">Playing</span>
        </div>
      )}
    </div>
  )
}
