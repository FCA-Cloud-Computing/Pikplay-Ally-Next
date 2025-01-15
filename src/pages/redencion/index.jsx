import Layout from "../../components/layout/Layout";
import { FormRedemption } from "../../components/redemption/FormRedemption";
import {
  initialStateRedemptionCredits,
  redemptionCredits,
} from "../../actions/redemptionCredits";
import "./styles.scss";
import { useActionState } from "react";
import { Code } from "../../components/redemption/Code";

function CreditRedemptionPage() {
  const [{ result, error, success }, actionState, isPending] = useActionState(
    redemptionCredits,
    initialStateRedemptionCredits
  );
  return (
    <Layout title="Redención de créditos">
      <section className="page max-w-screen-sm flex flex-col items-center h-mobile z-90 p-6 text-secondary justify-center">
        {true || result?.verification_code ? (
          <FormRedemption
            coins={120402.03} // TOOD: Sacar totalCoins de la API/Store
            actionState={actionState}
            isPending={isPending}
          />
        ) : (
          null
          // <Code code={result.verification_code} />
        )}
      </section>
    </Layout>
  );
}

export default CreditRedemptionPage;
