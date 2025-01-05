import Image from "next/image";
import CoinIcon from "../coinIcon/CoinIcon";
import { formatNumberWithCommas } from "../../lib/utils";
import { useState } from "react";
import Eye from "../../../public/images/icons/eye.svg";
import EyeSlash from "../../../public/images/icons/eye-slash.svg";

export function TotalCoins({ coins, className, isHidden }) {
  const [isVisibleCoins, setisVisibleCoins] = useState(true);
  const totalCoinsFormatted = formatNumberWithCommas(coins);
  const newTotalCoins = isVisibleCoins
    ? totalCoinsFormatted
    : "*".repeat(totalCoinsFormatted.length + 2);

  return (
    <div className={`flex items-center gap-2 text-4xl ${className}`}>
      <strong className="flex items-center gap-1">
        <CoinIcon />
        {newTotalCoins}
      </strong>
      {isHidden && (
        <button
          onClick={() => setisVisibleCoins(!isVisibleCoins)}
          className="grow"
        >
          <Image
            src={isVisibleCoins ? Eye : EyeSlash}
            alt={`${isVisibleCoins ? "Ocultar" : "Mostrar"} contraseña`}
            width={20}
            height={20}
          />
        </button>
      )}
    </div>
  );
}
