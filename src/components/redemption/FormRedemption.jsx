export function FormRedemption({actionState, isPending}) {
    return (
    <form action={actionState}>
      <label htmlFor="credits">Ingrese el valor de la redención</label>
      <input
        type="number"
        id="credits"
        name="credits"
        className="w-3/4 p-2"
        placeholder="Valor de la redención"
      />
      <button disabled={isPending ? true : false} type="submit" className="btn-primary">
        Redimir
      </button>
    </form>
  );
}
