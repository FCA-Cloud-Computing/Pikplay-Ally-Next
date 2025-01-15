import { formatCode } from "../../lib/utils";

export function Code({ code }) {
  return (
    <div className="flex flex-col gap-5 rounded-md bg-primary p-5">
      <p className="text-sm text-pretty">
        Con este código de verificación podrás redimir tus monedas. Suminístralo
        al encargado del local cuando él te lo pida.
      </p>
      <strong className="text-center text-2xl bg-secondary w-full rounded-md text-primary p-2">
        {formatCode(code)}
      </strong>
    </div>
  );
}
