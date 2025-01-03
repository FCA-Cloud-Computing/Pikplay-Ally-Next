"use client";

import Layout from "../../components/layout/Layout";
import { FormRedemption } from "../../components/redemption/FormRedemption";
import { useActionState } from "react";
import { redemptionCredits } from "../../actions/redemptionCredits";
import "./styles.scss";

const initialState = {
  success: false,
  error: null,
  result: null,
};

function CreditRedemptionPage() {
  const [{ success, error, result }, actionState, isPending] = useActionState(
    redemptionCredits,
    initialState
  );
  return (
    <Layout title="Redención de créditos">
      <section className="page max-w-screen-sm flex flex-col items-center bg-primary z-90 p-6 gap-5 text-secondary justify-center">
        <FormRedemption actionState={actionState} isPending={isPending} />
        {error && (
          <div className="bg-red-500 text-white p-3 rounded-lg">{error.message}</div>
        )}
        {success && (
          <div className="bg-green-500 text-white p-3 rounded-lg">
            {result}
          </div>
        )}
      </section>
    </Layout>
  );
}

export default CreditRedemptionPage;
