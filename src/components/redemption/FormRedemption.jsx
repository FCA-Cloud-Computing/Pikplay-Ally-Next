import { useState, useRef } from "react";
import { TotalCoins } from "../coins/TotalCoins";
import { useIAStore } from "../ia/IAstore";
import Button from "../button/Button";

export function FormRedemption({ coins, actionState, isPending }) {
  const { handleUserMessage } = useIAStore();
  const [credits, setCredits] = useState(null);
  const form = useRef();

  const handleChange = () => {
    setCredits(form.current?.elements.credits.value);
  };

  return (
    <form
      action={actionState}
      className="flex flex-col gap-5 rounded-md"
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
        required
      />
      <TotalCoins coins={coins} isHidden={false} className="text-2xl" />
      <Button
        realistic
        type="button"
        color="blue"
        className={`opacity-0 ${
          credits && "opacity-100"
        } transition duration-300 text-center`}
        disabled={isPending}
        onClick={() => handleUserMessage("redemption", { credits, form })}
      >
        Redimir
      </Button>
    </form>
  );
}
