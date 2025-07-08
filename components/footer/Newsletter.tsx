import { NewsLetterForm } from './NewsLetterForm'
import { NewsLetterText } from './NewsLetterText'

export const Newsletter = () => {
  return (
    <div
      id="waitlist"
      className="relative max-w-[1440px] w-full bg-[#0D0D0D] border-1 border-[#222222] mx-auto px-[50px] flex gap-[25px] justify-center items-center"
    >
      <NewsLetterText />
      <NewsLetterForm />
      <div className="absolute bottom-[-1] left-0 w-full h-[1px] pointer-events-none">
        <div className="w-full h-full rounded-full bg-radial from-[#70BEFABF] from-0% to-[#222222]"></div>
      </div>
    </div>
  )
}
