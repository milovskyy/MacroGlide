import { TextGradient } from '../TextGradient'

export const ContactInfo = () => {
  return (
    <div className="">
      <h2>
        <TextGradient label="Contact Us" className="text-[92px]" />
      </h2>

      <div className="flex flex-col gap-[30px] mt-[50px]">
        <div className="">
          <p>
            <TextGradient label="Office:" />
          </p>
          <div className="text-white text-[19px]">
            <p>5900 Balcones Drive STE 100</p>
            <p>Austin, TX 78731</p>
            <p>The United States</p>
          </div>
        </div>
        <div className="h-[1px] bg-[#222222] max-w-[556px]"></div>

        <div className="">
          <p>
            <TextGradient label="Email:" />
          </p>

          <a
            href="mailto:macroglide@gmail.com"
            className="text-white text-[23px] transition-all duration-500 hover:-translate-y-[-5px] inline-flex cursor-pointer"
          >
            macroglide@gmail.com
          </a>
        </div>

        <div className="h-[1px] bg-[#222222] max-w-[556px]"></div>

        <div className="">
          <p>
            <TextGradient label="Phone:" />
          </p>

          <a
            href="tel:+3122345678"
            className="text-white text-[23px] transition-all duration-500 hover:-translate-y-[4px] inline-flex cursor-pointer"
          >
            +1 (773) 886 4543
          </a>
        </div>
      </div>
    </div>
  )
}
