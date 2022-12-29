import dayjs from 'dayjs'
import { useEffect, useState } from 'react'
import { Bid } from 'types'

type Props = {
  startTime: string
  turnTimeSeconds: number
  bids: Bid[]
}
const getSeconds = (time: number) => {
  const seconds = time % 60
  return seconds.toString().padStart(2, '0')
}
const getMinutes = (time: number) => {
  const minutes = Math.floor(time / 60)
  return minutes.toString().padStart(2, '0')
}

export default function Countdown({ turnTimeSeconds, startTime }: Props) {
  const [secondsLeft, setSecondsLeft] = useState(
    turnTimeSeconds - ((dayjs().unix() - +startTime) % turnTimeSeconds)
  )

  useEffect(() => {
    const interval = setInterval(() => {
      setSecondsLeft(
        turnTimeSeconds - ((dayjs().unix() - +startTime) % turnTimeSeconds)
      )
    }, 1000)

    return () => clearInterval(interval)
  }, [startTime, turnTimeSeconds])
  return (
    <div className="rounded-2xl border-b-2 bg-red-400 py-6 text-center text-2xl font-light text-red-600">
      {getMinutes(secondsLeft)}:{getSeconds(secondsLeft)}
    </div>
  )
}
