import { cn } from '@/utils/utils'

type TextProps = {
  label: string
  className?: string
}

export const TextGradient = ({ label, className = '' }: TextProps) => {
  return (
    <span
      className={cn(
        'bg-clip-text text-transparent bg-gradient-to-r from-[#FFFFFF] to-[#70BEFA]',
        className
      )}
    >
      {label}
    </span>
  )
}
