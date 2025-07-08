'use client'

import { useState } from 'react'
import { Button } from '../Button'

export const NewsLetterForm = () => {
  const [email, setEmail] = useState('')
  const [checked, setChecked] = useState(false)

  const handleChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value)
  }

  const handleChangeCheck = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked)
  }

  const onSubmit = () => {
    if (checked) console.log(email)
  }

  return (
    <div className="flex flex-col gap-[20px] max-w-[603px] w-full p-5">
      <div className="flex flex-col gap-[10px]">
        <div className="text-white">Email</div>
        <input
          id="input"
          type="text"
          value={email}
          onChange={handleChangeEmail}
          className="text-white border-1 border-[#222222] py-4 px-[25px] focus:ring-[#70BEFA] focus:ring-1 focus:outline-none rounded-[5px]"
          placeholder="john@example.com"
        />
      </div>
      <div className="flex gap-[10px] items-center justify-center">
        <input
          id="checkbox"
          type="checkbox"
          checked={checked}
          onChange={handleChangeCheck}
          className="h-5 w-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
        />
        <div className=" text-xs font-medium text-[#888888]">
          I agree to receive early access updates and marketing emails from
          MacroGlide. By joining the waitlist, you also agree to our Privacy
          Policy.
        </div>
      </div>
      <Button label="Submit" onClick={onSubmit} />
    </div>
  )
}
