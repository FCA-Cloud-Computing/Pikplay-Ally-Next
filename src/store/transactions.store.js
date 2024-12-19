import { create } from "zustand";
import { persist, devtools } from "zustand/middleware";

import { getTransactions } from "../services/user/transactions";
import { addTransaction } from "../services/user/transactions";

export const useTransactionsStore = create(
  devtools(
    persist(
      (set) => {
        return {
          transactions: [],

          getTransactionsStore: async () => {
            try {
              const res = await getTransactions();
              set((state) => ({
                transactions: res.data
              }));
            } catch (error) {
              console.error("Error fetching transactions:", error);
            }
          },

          addTransactionStore: (transaction) => {
            addTransaction(transaction);
            set((state) => ({
              transactions: [...state.transactions, transaction],
            }));
          },
        }
      }
    , { name: "transactions" })
  )
)