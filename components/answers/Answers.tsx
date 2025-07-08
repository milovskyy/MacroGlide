import { TextGradient } from '../TextGradient'
import { AnswersBlock } from './AnswersBlock'

export const Answers = () => {
  return (
    <section
      id="faq"
      className="flex flex-col justify-center items-center gap-[25px]"
    >
      <h2>
        <TextGradient label="Answers" className="text-[92px]" />
      </h2>
      <p className="text-[#9C9C9C]">{`We've gone ahead and answered some of the questions you might have.`}</p>
      <AnswersBlock />
    </section>
  )
}
