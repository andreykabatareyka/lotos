type Props = {
  lotName: string
  aucStart: string
}

export default function AuctionHeader({ lotName, aucStart }: Props) {
  return (
    <>
      <div className="border-b-2 py-6 text-2xl font-light text-red-600">
        Ход торгов{' '}
        <span>
          {lotName} {aucStart}
        </span>
      </div>

      <div className="flex py-4">
        <div className="rounded-sm bg-red-100 px-2 font-medium text-red-500">
          Уважаемые участники, во время вашего хода вы сможете изменить парметры
          торгов, указанных в таблице:
        </div>
      </div>
    </>
  )
}
