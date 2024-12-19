import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { schema } from "../../models/form.model";
import { InputTransactions } from "./InputTransactions";
import { useTransactionsStore } from "../../store/transactions.store";

export const FormAllied = () => {
  const { addTransactionStore } = useTransactionsStore();
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(schema),
    mode: "onBlur",
    defaultValues: {
      customer: "",
      productName: "",
      productDescription: "",
      experience: "",
      purchaseDate: "",
      allied: "",
    },
  });

  const onSubmit = (newTransaction) => {
    addTransactionStore(newTransaction);
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
          name="allied"
          control={control}
          label="Nombre del aliado"
          placeholder="KFC, McDonalds..."
          type="text"
          error={errors.allied}
        />
        <InputTransactions
          name="customer"
          control={control}
          label="Nombre del cliente"
          type="text"
          error={errors.customer}
          placeholder="John Doe.."
        />
        <InputTransactions
          name="productName"
          control={control}
          label="Nombre del producto"
          placeholder="Pizza XXL, CocaCola 3lt..."
          type="text"
          error={errors.productName}
        />
        <InputTransactions
          name="experience"
          control={control}
          label="Experiencia por la compra"
          type="number"
          placeholder="EXP 150"
          error={errors.experience}
        />
        <InputTransactions
          name="purchaseDate"
          control={control}
          label="Fecha de compra"
          type="date"
          error={errors.purchaseDate}
        />
        <InputTransactions
          name="productDescription"
          control={control}
          label="Descripción del producto"
          placeholder="Pizza sin jamón"
          type="text"
          error={errors.productDescription}
        />
        <button
          type="submit"
          className="border-white/50 hover:bg-white transition duration-300 hover:text-black border py-2 w-full rounded-md mt-4"
        >
          Crear transacción
        </button>
      </form>
    </>
  );
};
