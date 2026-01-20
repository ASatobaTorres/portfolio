"use client"

import { useRef, useState, type MouseEvent, type ReactNode } from "react"
import { Button } from "@/components/ui/button"
import type { ButtonProps } from "@/components/ui/button"

interface MagneticButtonProps extends ButtonProps {
  children: ReactNode
  strength?: number
}

export default function MagneticButton({ children, strength = 0.3, className, ...props }: MagneticButtonProps) {
  const buttonRef = useRef<HTMLButtonElement>(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e: MouseEvent<HTMLButtonElement>) => {
    if (!buttonRef.current) return

    const rect = buttonRef.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2

    const distanceX = e.clientX - centerX
    const distanceY = e.clientY - centerY

    // Calculate distance from center
    const distance = Math.sqrt(distanceX ** 2 + distanceY ** 2)
    const maxDistance = 150 // Maximum distance for magnetic effect

    if (distance < maxDistance) {
      // Apply magnetic effect
      const force = (maxDistance - distance) / maxDistance
      setPosition({
        x: distanceX * strength * force,
        y: distanceY * strength * force,
      })
    }
  }

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 })
  }

  return (
    <Button
      ref={buttonRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`transition-all duration-200 ease-out relief-blue hover:glow-blue-strong ${className || ""}`}
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
      }}
      {...props}
    >
      {children}
    </Button>
  )
}
