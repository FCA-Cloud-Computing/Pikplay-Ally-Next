export function FormRedemption({ actionState, isPending }) {
  return (
    <form action={actionState} className="flex flex-col items-center gap-5">
      <label htmlFor="credits" className="text-lg font-bold">
        Ingrese el valor de la redención
      </label>
      <input
        type="number"
        id="credits"
        name="credits"
        className="bg-transparent w-full p-2 border-b-2 border-b-slate-400"
        placeholder="Valor de la redención"
      />
      <button
        disabled={isPending ? true : false}
        type="submit"
        className="border border-white/50 w-full px-4 py-2 rounded-md hover:bg-white/50"
      >
        Redimir
      </button>
    </form>
  );
}
