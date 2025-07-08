import { cn } from '@/utils/utils'
import { MdArrowOutward } from 'react-icons/md'

type ButtonProps = {
  label: string
  onClick?: React.MouseEventHandler<HTMLDivElement>
  className?: string
  arrow?: boolean
}

export const Button = ({
  label,
  onClick,
  className = '',
  arrow = false,
}: ButtonProps) => {
  return (
    <div
      onClick={onClick}
      className={cn(
        'bg-[#161616] h-10 w-[150px] rounded-[10px] text-sm border-1 border-[#222222] button-wrapper cursor-pointer',
        className,
        arrow && 'w-[170px]'
      )}
    >
      <div className="button-content flex items-center justify-center text-sm">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FFFFFF] to-[#70BEFA] ">
          {label}
        </span>
        {arrow && <MdArrowOutward className="ml-2" size={18} color="white" />}
      </div>
    </div>
  )
}
