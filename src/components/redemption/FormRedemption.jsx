import { useState } from "react";
import { DialogRedemption } from "../dialog/dialog";
import { useRef } from "react";
import { useActionState } from "react";
import {
  initialStateRedemptionCredits,
  redemptionCredits,
} from "../../actions/redemptionCredits";
import { TotalCoins } from "../coins/TotalCoins";

export function FormRedemption({ className, coins }) {
  const [state, actionState, isPending] = useActionState(
    redemptionCredits,
    initialStateRedemptionCredits
  );
  const [credits, setCredits] = useState(null);
  const form = useRef();

  const handleChange = () => {
    setCredits(form.current?.elements.credits.value);
  };

  return (
    <form
      action={actionState}
      className={`flex flex-col gap-5 rounded-md ${className}`}
      ref={form}
    >
      <label htmlFor="credits" className="text-lg font-bold">
        Ingrese el valor de la redención
      </label>
      <input
        type="number"
        id="credits"
        min={1}
        value={credits}
        onChange={handleChange}
        step={1}
        name="credits"
        className="bg-transparent w-full p-2 text-lg border-b-2 border-b-slate-400"
        placeholder="$149"
      />
      <TotalCoins coins={coins} isHidden={false} className="text-2xl" />
      <DialogRedemption
        isPending={isPending}
        label="Redimir"
        ref={form}
        credits={credits}
        title={`¿Estás seguro que quieres redimir ${credits} créditos?`}
        description="Una vez redimidos, no podrás recuperarlos."
      />
    </form>
  );
}
