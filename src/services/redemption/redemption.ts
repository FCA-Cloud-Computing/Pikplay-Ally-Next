import CustomFetch from "../../components/fetch/CustomFetch";

const { get, post, put, del } = CustomFetch();

const BASE_URL = "/redemption";

const getRedemption = async (credits) => {
  const json = await post(
    { headers: { "Content-Type": "application/json" } },
    `${BASE_URL}`,
    { amount: credits }
  );
  return json;
};

const cancelRedemption = async (id) => {
  const json = await del(
    { headers: { "Content-Type": "application/json" } },
    `${BASE_URL}/cancel/${id}`
  );
  return json;
};

export { getRedemption, cancelRedemption };
