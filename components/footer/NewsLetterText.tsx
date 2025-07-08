export const NewsLetterText = () => {
  return (
    <div className="w-full max-w-[712px] flex flex-col gap-[11px] p-1">
      <h3 className="leading-[42px] font-medium text-[32px]">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FFFFFF] to-[#70BEFA]">
          Be the First to Get Access
        </span>
      </h3>
      <p className="text-[#9C9C9C] text-sm ">
        {`To ensure a smooth experience during our early rollout, we’re limiting
        the number of users who can join at launch. The waitlist exists to give
        early access to those who are genuinely excited to be part of something
        new — from the very beginning. Join the waitlist if you want to be among
        the first.`}
      </p>
    </div>
  )
}
