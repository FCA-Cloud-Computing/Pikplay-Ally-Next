import Layout from "../../components/layout/Layout";
import { FormRedemption } from "../../components/redemption/FormRedemption";
import "./styles.scss";
import { TotalCoins } from "../../components/coins/TotalCoins";

function CreditRedemptionPage() {
  return (
    <Layout title="Redención de créditos">
      <section className="page max-w-screen-sm flex flex-col items-center h-mobile z-90 p-6 text-secondary justify-center">
        <FormRedemption coins={120402.03} />
      </section>
    </Layout>
  );
}

export default CreditRedemptionPage;
