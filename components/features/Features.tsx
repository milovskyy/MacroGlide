import { TextGradient } from '../TextGradient'
import { FeaturePosters } from './FeaturePosters'
import { FeaturesScreens } from './FeaturesScreens'

export const Features = () => {
  return (
    <section id="features" className="flex flex-col py-24 gap-[25px] w-full">
      <h2>
        <TextGradient label="Features" className="text-[92px] mb-[25px]" />
      </h2>
      <FeaturePosters />
      <FeaturesScreens />
    </section>
  )
}
