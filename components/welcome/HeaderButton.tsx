import { cn } from '@/utils/utils'
import Link from 'next/link'

type Props = {
  name: string
  link: string
}

export const HeaderButton = ({ name, link }: Props) => {
  return (
    <Link href={`/#${link}`} className="">
      <li
        className={cn(
          'px-4 py-2 rounded-md hover:bg-clip-text hover:text-transparent hover:border-[#70BEFA] hover:bg-gradient-to-r hover:from-[#FFFFFF] hover:to-[#70BEFA] border-1 border-transparent'
        )}
      >
        {name}
      </li>
    </Link>
  )
}
