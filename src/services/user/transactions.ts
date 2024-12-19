import CustomFetch from "../../components/fetch/CustomFetch";

const { get, post } = CustomFetch();

const BASE_URL = "/transactions";

const getTransactions = async () => {
  const data = await get({ headers: { 'Content-Type': 'application/json' } }, BASE_URL);
  return data;
}

const addTransaction = async (transaction) => {
  const data = await post({ headers: { 'Content-Type': 'application/json' } }, `${BASE_URL}/${transaction.orderId}`, transaction);
  return data;
}


export { getTransactions, addTransaction }