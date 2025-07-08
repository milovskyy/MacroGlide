import { ContactForm } from './ContactForm'
import { ContactInfo } from './ContactInfo'

export const Contact = () => {
  return (
    <section
      id="contact"
      className="max-w-[1440px] w-full mx-auto grid grid-cols-2 gap-[50px] pt-[100px] bg-[#0A0A0A]"
    >
      <ContactInfo />
      <ContactForm />
    </section>
  )
}
