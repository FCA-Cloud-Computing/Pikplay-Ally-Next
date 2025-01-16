"use server";

import { toast } from "react-toastify";
import { getRedemption } from "../services/redemption/redemption";

export const initialStateRedemptionCredits = {
  success: false,
  errors: null,
  result: null,
};

export async function redemptionCredits(prevState, formData) {
  const credits = formData.get("credits");
  const json = await getRedemption(credits);
  if (json.error) {
    toast("Ha ocurrido un error al intentar redimir los créditos.");
    return {
      success: false,
      errors: json.error,
      result: null,
    };
  }
  toast("Código de verificación creado exitosamente.");
  return {
    success: true,
    errors: null,
    result: json.data,
  };
}
