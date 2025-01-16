import ModalTransactions from "../modal/ModalTransactions";
import { FormAllied } from "./FormAllied";
import useSystemStore from "../../hooks/storeSystem";
import { TotalCoins } from "../coins/TotalCoins";

export function Statistics({ totalCredits }) {
  const { userLogged } = useSystemStore();
  return (
    <div className="flex items-center gap-3 w-full justify-between">
      <TotalCoins coins={totalCredits} />
      {userLogged.rol === "client" && (
        <ModalTransactions label="+">
          <FormAllied />
        </ModalTransactions>
      )}
    </div>
  );
}
