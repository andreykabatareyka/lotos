import dayjs from 'dayjs'
import { useEffect, useState } from 'react'
import { Auction, Bid } from 'types'
import Countdown from './Countdown'

type Props = {
  bids: Bid[]
  startTime: string
  endTime: string
  turnTimeSeconds: number
}

export default function AuctionBoard({
  bids,
  startTime,
  endTime,
  turnTimeSeconds,
}: Props) {
  const [bidderIndex, setBidderIndex] = useState(
    Math.floor((dayjs().unix() - +startTime) / turnTimeSeconds) % bids.length
  )

  useEffect(() => {
    const interval = setInterval(
      () =>
        setBidderIndex(
          Math.floor((dayjs().unix() - +startTime) / turnTimeSeconds) %
            bids.length
        ),
      100
    )
    return () => clearInterval(interval)
  }, [bids.length, startTime, turnTimeSeconds])
  return (
    <table>
      <thead className="boredr-b-2 border-gray-300 font-light text-blue-400">
        <tr className="h-20">
          <th>ХОД</th>
          {/* Use a loop to render the cells of the table */}
          {bids.map((bid, index) => (
            <th key={bid.bidderId}>
              {index === bidderIndex ? (
                <Countdown
                  startTime={startTime}
                  turnTimeSeconds={turnTimeSeconds}
                  bids={bids}
                />
              ) : null}
            </th>
          ))}
        </tr>
        <tr className="h-20">
          <td>ПАРАМЕТРЫ И ТРЕБОВАНИЯ</td>
          {bids.map((bid, index) => (
            <th key={bid.bidderId}>
              УЧАСТНИК №{index + 1} {bid.bidderName}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        <tr className="bg-gray-100">
          <td className="w-96 p-1 ">
            Наличие комплекса мероприятий, повышающих стандарты качества
            изготовления
          </td>
          {bids.map((bid) => (
            <td className="text-center" key={bid.bidderId}>
              {bid.extraFeatures}
            </td>
          ))}
        </tr>
        <tr>
          <td>Срок изготовления лота, дней</td>
          {bids.map((bid) => (
            <th key={bid.bidderId}>{bid.productionTimeDays}</th>
          ))}
        </tr>
        <tr className="bg-gray-100">
          <td> Гарантийные обязательства, мес</td>
          {bids.map((bid) => (
            <td className="text-center" key={bid.bidderId}>
              {bid.warrantyTimeMonths}
            </td>
          ))}
        </tr>
        <tr>
          <td>Условия оплаты</td>
          {bids.map((bid) => (
            <td className="text-center" key={bid.bidderId}>
              {bid.paymentConditionPercent}
            </td>
          ))}
        </tr>

        <tr className="bg-gray-100">
          <td>Стоимость изготовления лота, руб (без НДС)</td>
          {bids.map((bid) => (
            <th key={bid.bidderId}>
              <div className="font-bold text-blue-400">
                {bid.priceTotalRubles} руб.
              </div>
              <div className="font-bold text-red-400">
                -{bid.taxRubles} руб.
              </div>
              <div className="font-bold text-green-400">
                {bid.priceWithoutTaxRubles} руб.
              </div>
            </th>
          ))}
        </tr>
        <tr>
          <td>Действия:</td>
          {bids.map((bid) => (
            <td key={bid.bidderId}>{bid.actions}</td>
          ))}
        </tr>
      </tbody>
    </table>
  )
}
