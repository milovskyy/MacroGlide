'use client'

import { useState } from 'react'
import emailjs from 'emailjs-com'

import { Button } from '../Button'

export const ContactForm = () => {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [number, setNumber] = useState('')
  const [message, setMessage] = useState('')
  const [checked, setChecked] = useState(false)

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!checked) {
      alert('Please agree to our Privacy Policy')
      return
    }

    const templateParams = {
      name: name,
      email: email,
      phone: number,
      message: message,
    }

    try {
      await emailjs.send(
        'service_a68x6ic',
        'template_6ruj8rs',
        templateParams,
        '3xV0U7LnkDR7fHFVO'
      )

      alert('message sent!')

      setEmail('')
      setName('')
      setNumber('')
      setMessage('')
      setChecked(false)
    } catch (err) {
      console.error('Error:', err)
      alert('Message not sent, error')
    }
  }
  return (
    <div className="flex flex-col py-4 w-full gap-5 pl-8 ">
      <div className="flex flex-col gap-[10px]">
        <label htmlFor="input" className="text-sm text-white">
          Name
        </label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="text-white border-1 border-[#222222] py-4 px-[25px] focus:ring-[#70BEFA] focus:ring-1 focus:outline-none rounded-[5px]"
          placeholder="John Doe"
        />
      </div>

      <div className="flex flex-col gap-[10px]">
        <label htmlFor="input" className="text-sm text-white">
          Email
        </label>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="text-white border-1 border-[#222222] py-4 px-[25px] focus:ring-[#70BEFA] focus:ring-1 focus:outline-none rounded-[5px]"
          placeholder="john@example.com"
        />
      </div>

      <div className="flex flex-col gap-[10px]">
        <label htmlFor="input" className="text-sm text-white">
          Phone
        </label>
        <input
          type="number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          className="text-white border-1 border-[#222222] py-4 px-[25px] focus:ring-[#70BEFA] focus:ring-1 focus:outline-none rounded-[5px]"
          placeholder="+1 (773) 343 9223"
        />
      </div>

      <div className="flex flex-col gap-[10px]">
        <label htmlFor="input" className="text-sm text-white">
          Message
        </label>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="text-white border-1 border-[#222222] h-24 py-4 px-[25px] focus:ring-[#70BEFA] focus:ring-1 focus:outline-none rounded-[5px]"
          placeholder="Hi! I'm reaching out for..."
        />
      </div>

      <div className="flex gap-[10px] items-center justify-center">
        <input
          id="checkbox"
          type="checkbox"
          checked={checked}
          onChange={(e) => setChecked(e.target.checked)}
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
