import Image from 'next/image'
import { WatchList } from './WatchList'

export const FeaturesScreens = () => {
  return (
    <div className="flex gap-5 justify-between h-full">
      <WatchList />

      <div className="flex flex-col gap-4 max-w-[460px] w-full   border-1 border-[#222222] rounded-xl">
        <div className="relative h-[350px] w-full mb-10 flex-1">
          <Image src="/screen1.png" alt="img" fill className="object-cover" />
        </div>
        <div className="p-8">
          <h3 className="text-white text-3xl mt-5 mb-5">Portfolio Tracker</h3>
          <p className="text-[#9C9C9C] text-sm">
            Add your own portfolios, monitor real-time performance, and see how
            macro events impact every position.
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-4 max-w-[460px] w-full items-center  border-1 border-[#222222] rounded-xl">
        <div className="relative h-full w-[370px]   flex-1">
          <Image src="/screen2.png" alt="img" fill className="object-cover" />
        </div>
        <div className="p-8">
          <h3 className="text-white text-3xl mb-5">Calendar</h3>
          <p className="text-[#9C9C9C] text-sm">
            Stay ahead with 900+ economic and earnings reports across 45+
            countries. Filter by date, country, or category.
          </p>
        </div>
      </div>
    </div>
  )
}
