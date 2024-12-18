import { getTransactions } from "@/services/user/transactions";
import { useState, useEffect } from "react";
import {
  ListTransactions,
  Header,
  Statistics,
} from "@/components/transactions";
import Layout from "@/components/layout/Layout";
import "./styles.scss";
import { useTransactionsStore } from "@/store/transactions.store";

function Transactions() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const res = await getTransactions();
        setData(res);
      } catch (error) {
        console.error("Error fetching transactions:", error);
      }
    };

    fetchTransactions();
  }, []);

  // const { transactions } = useTransactionsStore();

  const handleNotification = () => {
    console.log("click");
  };

  console.log(data);

  const totalProfit = data?.trasactions.reduce(
    (acc, curr) => acc + curr.experience,
    0
  );

  const image = "";
  const descripcion = "";
  const title = "Transacciones";
  const url = "";

  return (
    <Layout title={title} descripcion={descripcion} image={image} url={url}>
      <section className="page min-h-dvh max-w-screen-sm flex flex-col items-center bg-primary p-6 gap-5">
        <Header handleNotification={handleNotification} />
        <Statistics totalProfit={totalProfit} />
        {data?.trasactions && <ListTransactions transactions={data.trasactions} />}
      </section>
    </Layout>
  );
}

export default Transactions;
