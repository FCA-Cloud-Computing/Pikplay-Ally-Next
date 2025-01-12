import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { schema } from "../../models/form.model";
import { InputTransactions } from "./InputTransactions";
import { useTransactionsStore } from "../../store/transactions.store";
import useSystemStore from "../../hooks/storeSystem";
import Button from "../button/Button";

export const FormAllied = () => {
  const { transactions, addTransactionStore } = useTransactionsStore();
  const { userLogged } = useSystemStore();
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(schema),
    mode: "onBlur",
    defaultValues: {
      description: "",
      experience: "",
      credits: "",
      purchase_date: "",
      client_document: "",
      amount: "",
      redemption_code: "",
    },
  });

  const onSubmit = (newTransaction) => {
    addTransactionStore({
      ...newTransaction,
      uid: userLogged.uid,
      client_document: 1234,
    });
    reset();
  };

  return (
    <>
      <h2 className="text-white text-center font-bold text-md">
        Crear transacción
      </h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="p-4 flex flex-col gap-2"
      >
        <InputTransactions
          name="description"
          control={control}
          label="Descripción del producto"
          placeholder="Pizza sin jamón"
          type="text"
          error={errors.description}
        />
        <InputTransactions
          name="experience"
          control={control}
          label="Experiencia por la compra"
          placeholder="150 EXP"
          type="number"
          error={errors.experience}
        />
        <InputTransactions
          name="credits"
          control={control}
          label="Créditos por la compra"
          type="number"
          error={errors.credits}
          placeholder="10, 5, 3.."
        />
        <InputTransactions
          name="purchase_date"
          control={control}
          label="Fecha de compra"
          type="date"
          error={errors.purchase_date}
        />
        <InputTransactions
          name="client_document"
          control={control}
          label="Documento del cliente"
          placeholder="CC 103242252"
          type="number"
          error={errors.client_document}
        />
        <InputTransactions
          name="amount"
          control={control}
          label="Monto total de la factura"
          placeholder="$1200, $5000, $3000.."
          type="number"
          error={errors.amount}
        />
        <InputTransactions
          name="redemption_code"
          control={control}
          label="Código de redención (opcional)"
          placeholder="123-AS3-24V-D22"
          type="string"
          error={errors.redemption_code}
        />
        <Button
          color="blue"
          className="transition duration-300 w-full text-center text-sm"
          type="submit"
          realistic
        >
          Crear transacción
        </Button>
      </form>
    </>
  );
};
