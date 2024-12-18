export function ListTransactions({ transactions }) {
  return (
    <ul className="flex flex-col gap-3 w-full">
      {transactions.map((transaction) => (
        <li
          key={transaction.orderId}
          className="flex justify-between p-2 bg-[#1f6a9080] rounded-md items-center"
        >
          <picture>
            <img
              src={transaction.image || "images/users/hiro.jpeg"}
              alt={`Avatar ${transaction.customer}`}
              className="size-8 rounded-md"
            />
          </picture>
          <div className="grow flex flex-col pl-2">
            <strong className="font-semibold">{transaction.customer}</strong>
            <span className="text-sm text-gray-400">{transaction.purchaseDate}</span>
          </div>
          <div className="flex flex-col items-center">
            <strong className="text-sm font-semibold">
              {transaction.allied}
            </strong>
            <span className="text-sm text-green-500">
              EXP {(transaction.experience)}
            </span>
          </div>
        </li>
      ))}
    </ul>
  );
}
