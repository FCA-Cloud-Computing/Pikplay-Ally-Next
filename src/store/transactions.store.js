import { getTransactions } from "@/services/user/transactions";
import { create } from "zustand";
import { persist, devtools } from "zustand/middleware";
import { addTransaction } from "@/services/user/transactions";

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

          removeTransaction: (orderId) => {
            set((state) => ({
              transactions: state.transactions.filter(
                (transaction) => transaction.orderId !== orderId
              ),
            }));
          },
          
          updateTransaction: (orderId, updatedTransaction) => {
            set((state) => ({
              transactions: state.transactions.map((transaction) =>
                transaction.orderId === orderId ? updatedTransaction : transaction
              ),
            }));
          },
        }
      }
    , { name: "transactions" })
  )
)