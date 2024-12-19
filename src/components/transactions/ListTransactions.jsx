import { Transaction } from "./Transaction";

export function ListTransactions({ transactions }) {
  const transactionsSorted = transactions.toSorted(
    (a, b) => a.status - b.status
  );

  return (
    <ul className="flex gap-3 w-full flex-col-reverse">
      {transactionsSorted.map((transaction) => (
        <Transaction transaction={transaction} />
      ))}
    </ul>
  );
}
