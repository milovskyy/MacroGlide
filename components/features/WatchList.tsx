import { getInstruments } from '@/lib/getInstruments'
import { InstrumentRow } from './InstrumentRow'

type Instrument = {
  name: string
  ticker: string
  price: number
  change_1d: number
  change_1d_value: number
}

export const WatchList = async () => {
  const data = await getInstruments()

  if (!data.success) return <div>Failed to fetch</div>

  return (
    <div className="flex flex-col gap-4 max-w-[460px] w-full  p-8 border-1 border-[#222222] rounded-xl">
      {data.data.map(
        ({ name, ticker, price, change_1d, change_1d_value }: Instrument) => (
          <InstrumentRow
            key={name}
            name={name}
            ticker={ticker}
            price={price}
            change_1d={change_1d}
            change_1d_value={change_1d_value}
          />
        )
      )}
      <h3 className="text-white text-3xl mt-5">Watchlist</h3>
      <p className="text-[#9C9C9C] text-sm">
        Create custom watchlists, track price movements across multiple
        timeframes, and spot top movers
      </p>
    </div>
  )
}
