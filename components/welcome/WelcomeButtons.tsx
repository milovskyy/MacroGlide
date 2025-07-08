'use client'

import { GoArrowRight } from 'react-icons/go'
import { TextGradient } from '../TextGradient'
import { useState } from 'react'
import { cn } from '@/lib/utils'

export const WelcomeButtons = () => {
  const [selected, setSelected] = useState(true)

  const onClickList = () => {
    const element = document.getElementById('waitlist')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }
  const onClickFetatures = () => {
    const element = document.getElementById('features')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }
  return (
    <div className="w-[240px] h-[45px] flex gap-5 rounded-xl bg-[#0F0F0F] py-2 px-2 border-1 border-[#222222] relative">
      <div
        onClick={onClickFetatures}
        onMouseEnter={() => setSelected(false)}
        onMouseLeave={() => setSelected(true)}
        className={cn(
          'relative z-10 px-3 cursor-pointer text-sm flex items-center justify-center',
          !selected &&
            'bg-clip-text text-transparent border-[#70BEFA] bg-gradient-to-r from-[#FFFFFF] to-[#70BEFA]'
        )}
      >
        our services
      </div>
      <div
        onClick={onClickList}
        className={cn(
          'flex gap-3 justify-center items-center  cursor-pointer relative z-10 text-sm '
        )}
      >
        <TextGradient label="wait-list" />
        <GoArrowRight size={18} color={selected ? '#70BEFA' : '#FFFFFF'} />
      </div>
      <div
        className={cn(
          'cursor-pointer absolute z-5 rounded-md top-[6px] bg-transparent right-1 w-[115px] h-[33px] border-1 border-[#70BEFA] transition-all duration-500 ease-in-out',
          !selected && '-translate-x-[115px]'
        )}
      ></div>
    </div>
  )
}
