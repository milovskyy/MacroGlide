'use client'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { useState } from 'react'

type Props = {
  title: string
  text: string
}

export const Answer = ({ title, text }: Props) => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <Accordion
      type="single"
      collapsible
      value={isOpen ? 'item-1' : ''}
      onValueChange={(value) => setIsOpen(value === 'item-1')}
    >
      <AccordionItem
        value="item-1"
        className={`px-[25px] rounded-md border ${
          isOpen ? 'border-[#70BEFA]' : 'border-[#222222]'
        }`}
      >
        <AccordionTrigger className="text-white text-xl">
          <p>{title}</p>
        </AccordionTrigger>
        <AccordionContent>
          <p>{text}</p>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
