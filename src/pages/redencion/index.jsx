import Layout from "../../components/layout/Layout";
import { FormRedemption } from "../../components/redemption/FormRedemption";
import "./styles.scss";

function CreditRedemptionPage() {
  return (
    <Layout title="Redención de créditos">
      <section className="page max-w-screen-sm flex flex-col items-center h-mobile z-90 p-6 gap-5 text-secondary justify-center">
        <FormRedemption />
      </section>
    </Layout>
  );
}

export default CreditRedemptionPage;
