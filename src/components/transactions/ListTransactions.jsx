import styles from './transactions.module.scss'

import { useEffect } from 'react';
import BuildIcon from '@mui/icons-material/Build';
import AddIcon from '@mui/icons-material/Add';

// Custom
import { Transaction } from './Transaction';
import useSystemStore from '@/hooks/storeSystem';

export function ListTransactions({ transactions }) {
  const transactionsSorted = transactions
  const { setStoreValue } = useSystemStore()
  // = transactions.toSorted(
  //   (a, b) => b.status - a.status
  // );

  useEffect(() => {
    setStoreValue('leftBottomMenuContent', <button className="btnLeftBottomMenu" onClick={() => setStoreValue('isModalAddTransactionOpen', true)}>
      <AddIcon />
    </button>)
  }, [])

  return (
    <ul className={styles.TransactionListComponent}>
      {transactionsSorted && transactionsSorted.map((transaction) => (
        <Transaction transaction={transaction} key={transaction.id} />
      ))}
    </ul>
  );
}
