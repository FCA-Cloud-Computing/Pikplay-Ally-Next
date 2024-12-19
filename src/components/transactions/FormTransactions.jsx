import { FormClient } from "./FormClient";
import { FormAllied } from "./FormAllied";

export const FormTransactions = ({ role }) => {
  return (
    <>
      <h2 className="text-white text-center font-bold text-md">
        Crear transacción
      </h2>
      {role === "client" ? <FormClient /> : <FormAllied />}
    </>
  );
};
