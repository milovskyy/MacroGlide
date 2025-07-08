import Image from 'next/image'
import { TextGradient } from '../TextGradient'
import Link from 'next/link'

export const FooterMenu = () => {
  return (
    <div className="mt-[167px] max-w-[1440px] w-full mx-auto grid grid-cols-4 mb-[50px]">
      <div>
        <div className="flex gap-3">
          <Image src="/logo.png" alt="Логотип" width={73} height={23} />
          <Link
            href="/"
            className="font-medium text-white text-2xl cursor-pointer"
          >
            MacroGlide
          </Link>
        </div>
      </div>
      <div className="flex flex-col gap-[10px] text-sm text-[#9C9C9C]">
        <h4>
          <TextGradient label="Social Media" />
        </h4>
        <Link
          href="https://www.instagram.com/macroglide/"
          className="hover:text-white w-fit"
        >
          Instagram
        </Link>
        <Link
          href="https://www.youtube.com/@MacroGlide"
          className="hover:text-white w-fit"
        >
          YouTube
        </Link>
        <Link
          href="https://www.linkedin.com/company/macroglide/"
          className="hover:text-white w-fit"
        >
          LinkedIn
        </Link>
        <Link
          href="https://x.com/macroglide?s=21&t=kz0LF"
          className="hover:text-white w-fit"
        >
          Twitter
        </Link>
      </div>

      <div className="flex flex-col gap-[10px] text-sm text-[#9C9C9C]">
        <h4>
          <TextGradient label="Links" />
        </h4>
        <Link href="/#features" className="hover:text-white w-fit ">
          Features
        </Link>
        <Link href="/#process" className="hover:text-white w-fit">
          Where to Start
        </Link>
        <Link href="/#pricing" className="hover:text-white w-fit">
          Pricing
        </Link>
        <Link href="/#faq" className="hover:text-white w-fit">
          FAQ
        </Link>
        <Link href="/#contact" className="hover:text-white w-fit">
          Contact Us
        </Link>
        <Link href="/#terms-and-conditions" className="hover:text-white w-fit">
          Terms & conditions
        </Link>
        <Link href="/#privacy-policy" className="hover:text-white w-fit">
          Privacy policy
        </Link>
      </div>
      <div className="flex flex-col gap-[10px] text-sm text-[#9C9C9C]">
        <h4>
          <TextGradient label="MacroGlide LLC." />
        </h4>
        <div className="flex flex-col gap-2 ml-[10px]">
          <p className="hover:text-white cursor-pointer  w-fit">
            5900 Balcones Drive STE 100
          </p>
          <p className="hover:text-white cursor-pointer  w-fit">
            United States
          </p>
          <p className="hover:text-white cursor-pointer  w-fit">
            Austin, TX 78731
          </p>
        </div>
      </div>
    </div>
  )
}
