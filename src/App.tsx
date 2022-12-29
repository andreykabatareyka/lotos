import AuctionBoard from 'components/AuctionBoards'
import AuctionHeader from 'components/AuctionHeader'

import { Auction, Bid } from 'types'

const bids: Bid[] = [
  {
    bidderId: '1',
    bidderName: 'Вася',
    extraFeatures: '-',
    productionTimeDays: 80,
    warrantyTimeMonths: 24,
    paymentConditionPercent: 30,
    priceTotalRubles: 3_700_000,
    taxRubles: 25_000,
    priceWithoutTaxRubles: 2_475_000,
    actions: '',
  },
  {
    bidderId: '2',
    bidderName: 'Петя',
    extraFeatures: '-',
    productionTimeDays: 90,
    warrantyTimeMonths: 36,
    paymentConditionPercent: 100,
    priceTotalRubles: 3_700_000,
    taxRubles: 25_000,
    priceWithoutTaxRubles: 2_475_000,
    actions: '',
  },
  {
    bidderId: '3',
    bidderName: 'Коля',
    extraFeatures: '-',
    productionTimeDays: 80,
    warrantyTimeMonths: 24,
    paymentConditionPercent: 60,
    priceTotalRubles: 2_800_000,
    taxRubles: 25_000,
    priceWithoutTaxRubles: 2_475_000,
    actions: '',
  },
  {
    bidderId: '4',
    bidderName: 'Маша',
    extraFeatures: '-',
    productionTimeDays: 80,
    warrantyTimeMonths: 24,
    paymentConditionPercent: 50,
    priceTotalRubles: 2_500_000,
    taxRubles: 25_000,
    priceWithoutTaxRubles: 2_475_000,
    actions: '',
  },
]
const auction: Auction = {
  lotName: 'Тестовые торги на аппарат ЛОТОС №2033564',
  startTime: '1672305461',
  endTime: '1681712101',
  turnTimeSeconds: 120,
  bids: bids,
}
type Props = {
  lotName: string
  bids: Bid[]
}

export default function App({ lotName }: Props) {
  return (
    <div className="flex flex-col p-4">
      <AuctionHeader lotName={auction.lotName} aucStart="(09.11.2020 07:00)" />
      <AuctionBoard
        bids={auction.bids}
        startTime={auction.startTime}
        endTime={auction.endTime}
        turnTimeSeconds={auction.turnTimeSeconds}
      />
    </div>
  )
}
