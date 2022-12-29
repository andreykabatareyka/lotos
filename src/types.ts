export type Bidder = {
  id: string
  name: string
}

export type Bid = {
  bidderId: string
  bidderName: string
  extraFeatures: string
  productionTimeDays: number
  warrantyTimeMonths: number
  paymentConditionPercent: number
  priceTotalRubles: number
  taxRubles: number
  priceWithoutTaxRubles: number
  actions: string
}

export type Auction = {
  startTime: string
  endTime: string
  turnTimeSeconds: number
  bids: Bid[]
  lotName: string
}
