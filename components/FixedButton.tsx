'use client'

import { Button } from './Button'

export const FixedButton = () => {
  const onClick = () => {
    const element = document.getElementById('waitlist')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }
  return (
    <Button
      label="Get Early Access"
      onClick={onClick}
      className="fixed bottom-14 right-10 z-50"
      arrow={true}
    />
  )
}
