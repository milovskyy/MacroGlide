'use client'

import { useEffect, useRef } from 'react'

export default function CursorFollower() {
  const circleRef = useRef<HTMLDivElement>(null)
  const pos = useRef({ x: 0, y: 0 })s
  const mouse = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouse.current.x = e.clientX
      mouse.current.y = e.clientY
    }

    const animate = () => {
      pos.current.x += (mouse.current.x - pos.current.x) * 0.1
      pos.current.y += (mouse.current.y - pos.current.y) * 0.1

      if (circleRef.current) {
        circleRef.current.style.transform = `translate3d(${pos.current.x}px, ${pos.current.y}px, 0) translate(-50%, -50%)`
      }

      requestAnimationFrame(animate)
    }

    window.addEventListener('mousemove', handleMouseMove)
    animate()

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <div
      ref={circleRef}
      className="pointer-events-none fixed top-0 left-0 w-3 h-3 bg-gradient-to-r from-[#FFFFFF] to-[#70BEFA] rounded-full  z-[9999]"
      style={{ transform: 'translate(-50%, -50%)' }}
    />
  )
}
