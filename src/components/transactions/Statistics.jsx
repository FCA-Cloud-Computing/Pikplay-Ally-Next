import Image from "next/image";
import { useState } from "react";
import { formatNumberWithCommas } from "@/lib/utils";
import Eye from "../../../public/images/icons/eye.svg";
import EyeSlash from "../../../public/images/icons/eye-slash.svg";
import ModalTransactions from "../modal/ModalTransactions";
import { FormTransactions } from "./FormTransactions";
import CoinIcon from "../coinIcon/CoinIcon";

export function Statistics({ totalExperience }) {
  const [isVisibleExperience, setisVisibleExperience] = useState(true);
  const totalExperienceFormatted = formatNumberWithCommas(totalExperience);
  const newTotalExperience = isVisibleExperience
    ? totalExperienceFormatted
    : "*".repeat(totalExperienceFormatted.length + 2);
    
  return (
    <div className="flex items-center gap-3 w-full justify-between">
      <strong className="text-4xl flex items-center gap-1">
        <CoinIcon />
        {newTotalExperience}
      </strong>
      <button
        onClick={() => setisVisibleExperience(!isVisibleExperience)}
        className="grow"
      >
        <Image
          src={isVisibleExperience ? Eye : EyeSlash}
          alt={`${isVisibleExperience ? "Ocultar" : "Mostrar"} contraseña`}
          width={20}
          height={20}
        />
      </button>
      <ModalTransactions label="+">
        <FormTransactions role="client" />
      </ModalTransactions>
    </div>
  );
}
