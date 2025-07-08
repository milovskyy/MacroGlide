import { cn } from '@/utils/utils'

type Instrument = {
  name: string
  ticker: string
  price: number
  change_1d: number
  change_1d_value: number
}

export const InstrumentRow = ({
  name,
  ticker,
  price,
  change_1d,
  change_1d_value,
}: Instrument) => {
  return (
    <div
      className={cn(
        'flex justify-between w-full items-center border-b-1 border-[#222222]'
      )}
    >
      <div className="flex flex-col gap-1">
        <div className="text-white">{ticker}</div>
        <div className="text-[#9C9C9C]">{name}</div>
      </div>
      <div className="flex flex-col gap-1 items-end ">
        <div className="text-white">{price.toFixed(2)}</div>
        <div className="flex gap-2 text-sm">
          <div
            className={cn(
              change_1d_value >= 0 ? 'text-green-600' : 'text-red-600'
            )}
          >
            {change_1d_value.toFixed(2)}
          </div>
          <div
            className={cn(change_1d >= 0 ? 'text-green-600' : 'text-red-600')}
          >
            {change_1d.toFixed(2)}%
          </div>
        </div>
      </div>
    </div>
  )
}
