import Image from 'next/image'
import Link from 'next/link'
import { WelcomeHeader } from './WelcomeHeader'
import { Button } from '../Button'

export const MainHeader = () => {
  return (
    <div className="flex justify-between w-full absolute top-0 z-5 left-0 px-10  py-5">
      <div className="flex gap-3">
        <Image src="/logo.png" alt="Логотип" width={55} height={11} />
        <Link
          href="/"
          className="font-medium text-white text-2xl cursor-pointer"
        >
          MacroGlide
        </Link>
      </div>
      <WelcomeHeader />
      <Button label="Get Early Access" />
    </div>
  )
}
