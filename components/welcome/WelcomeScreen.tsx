import { TextGradient } from '../TextGradient'
import { WelcomeButtons } from './WelcomeButtons'

export const WelcomeScreen = () => {
  return (
    <section className="w-full h-screen flex flex-col justify-center items-center py-5 pb-10">
      <div className="flex-1 flex flex-col justify-center items-center gap-3">
        <h1>
          <TextGradient
            label="MacroGlide"
            className="text-[150px] font-medium"
          />
        </h1>
        <h3 className="text-white text-xl mb-5">
          No Signals. Just Real Analytics.
        </h3>
        <WelcomeButtons />
      </div>
    </section>
  )
}
