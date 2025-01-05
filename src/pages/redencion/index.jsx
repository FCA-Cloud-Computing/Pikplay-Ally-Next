import Layout from "../../components/layout/Layout";
import { FormRedemption } from "../../components/redemption/FormRedemption";
import { useActionState } from "react";
import {
  initialStateRedemptionCredits,
  redemptionCredits,
} from "../../actions/redemptionCredits";
import "./styles.scss";
import { AlertDialog } from "../../components/dialog/dialog";

function CreditRedemptionPage() {
  const [{ success, credits }, actionState, isPending] = useActionState(
    redemptionCredits,
    initialStateRedemptionCredits
  );

  return (
    <Layout title="Redención de créditos">
      <section className="page max-w-screen-sm flex flex-col items-center h-mobile z-90 p-6 gap-5 text-secondary justify-center">
        <FormRedemption actionState={actionState} isPending={isPending} />
        {success && (
          <AlertDialog
            title={`¿Estás seguro que quieres redimir ${credits} créditos?`}
            description="Una vez redimidos, no podrás recuperarlos."
          />
        )}
      </section>
    </Layout>
  );
}

export default CreditRedemptionPage;
