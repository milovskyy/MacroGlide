import { Answers } from '@/components/answers/Answers'
import { Contact } from '@/components/contact/Contact'
import { FixedButton } from '@/components/FixedButton'
import { Footer } from '@/components/footer/Footer'
import { WelcomeScreen } from '@/components/welcome/WelcomeScreen'

export default function Home() {
  return (
    <main className="bg-[#0A0A0A] h-full max-w-[1440px] w-full mx-auto text-[#888888] relative">
      <WelcomeScreen />
      <Answers />
      <Contact />
      <FixedButton />
      <Footer />
    </main>
  )
}
