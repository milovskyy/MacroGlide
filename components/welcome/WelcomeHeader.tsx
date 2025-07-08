import { HeaderButton } from './HeaderButton'

export const WelcomeHeader = () => {
  return (
    <ul className="py-[2px] bg-[#0F0F0F] rounded-md text-[#9C9C9C] text-base flex gap-1 px-2 items-center justify-center border-1 border-[#222222]">
      <HeaderButton name="features" link="features" />
      <HeaderButton name="process" link="process" />
      <HeaderButton name="data" link="data" />
      <HeaderButton name="pricing" link="pricing" />
      <HeaderButton name="FAQ" link="faq" />
      <HeaderButton name="contact" link="contact" />
    </ul>
  )
}
