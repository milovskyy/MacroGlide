import Image from 'next/image'

export const FeaturePosters = () => {
  return (
    <div className="flex gap-[25px] w-full justify-between ">
      <div className="relative border-1 border-[#222222] rounded-xl">
        <div className="relative h-[350px] w-full mb-10">
          <Image src="/graph1.png" alt="img" fill className="object-cover" />
        </div>
        <div className="flex flex-col gap-4 pl-20 pb-10 pr-16">
          <h3 className="text-white text-3xl">Collaborative Charts</h3>
          <p className="text-[#9C9C9C] text-sm">
            Trade smarter—together. With MacroGlide’s Collaborative Chart, you
            and your team can analyze markets, draw insights, and mark levels on
            the same chart in real time.
          </p>
        </div>
        <div className="absolute top-[-1] left-0 w-full h-[1px] pointer-events-none px-3">
          <div className="w-full h-full rounded-full bg-radial from-[#70BEFABF] from-0% to-[#222222] "></div>
        </div>
      </div>

      <div className="relative border-1 border-[#222222] rounded-xl  pt-5">
        <div className="relative h-[350px] w-full mb-5">
          <Image
            src="/graph2.png"
            alt="img"
            fill
            className="object-cover p-5 pl-8"
          />
        </div>
        <div className="flex flex-col gap-4 pl-10 pb-10 pr-16">
          <h3 className="text-white text-3xl">Messenger Built for Markets</h3>
          <p className="text-[#9C9C9C] text-sm">
            Create discussions and group chats, pin insights, and share charts
            directly with edit access. Launch screen-sharing calls or
            collaborate live on charts in real time.
          </p>
        </div>
        <div className="absolute top-[-1] left-0 w-full h-[1px] pointer-events-none px-3">
          <div className="w-full h-full rounded-full bg-radial from-[#70BEFABF] from-0% to-[#222222]"></div>
        </div>
      </div>
    </div>
  )
}
