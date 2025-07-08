import { Answer } from './Answer'

export const AnswersBlock = () => {
  return (
    <div className="py-[25px] px-5 flex gap-5 w-full">
      <div className="flex flex-col gap-5 w-full ">
        <Answer
          title="What is MacroGlide?"
          text="MacroGlide is a next-generation market analysis platform that unifies macroeconomic data, financial metrics, watchlists, calendars, collaborative tools, and more."
        />
        <Answer
          title="Is this App Free?"
          text="Yes, all features are currently free during our beta phase. Premium plans are shown for future tiers but are fully unlocked at no cost for now."
        />
        <Answer
          title="Do we support live market data?"
          text="Yes, MacroGlide provides real-time price tracking for stocks, indices, and other financial instruments across multiple timeframes."
        />
      </div>
      <div className="flex flex-col gap-5 w-full">
        <Answer
          title="Can I use MacroGlide with a team?"
          text="Yes. The platform supports group chats, threads, chart sharing, and note-taking—making it ideal for teams or analyst groups."
        />
        <Answer
          title="Do I need to register to use the App?"
          text="You can use most features without registration, but creating an account lets you save your progress, sync across devices, and unlock collaborative tools."
        />
        <Answer
          title="What kind of assets can I follow?"
          text="You can follow over 10,000 publicly listed companies, ETFs, indices, and macro assets across multiple regions and industries."
        />
      </div>
    </div>
  )
}
