import { FooterMenu } from './FooterMenu'
import { Newsletter } from './Newsletter'

export const Footer = () => {
  return (
    <footer className="pt-[76px]">
      <Newsletter />
      <FooterMenu />
      <div className="h-[1px] bg-[#232323]"></div>
      <div className="text-sm text-[#9C9C9C] py-4 max-w-[1440px] w-full mx-auto pl-10">
        <p>© 2025, MacroGlide LLC. - All rights reserved.</p>
      </div>
    </footer>
  )
}
