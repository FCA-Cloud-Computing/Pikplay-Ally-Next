"use server";

import { toast } from 'react-toastify'

export const initialStateRedemptionCredits = {
  success: false,
  errors: null,
  credits: null,
};

export async function redemptionCredits(prevState, data) {
  const credits = data.get("credits");
  try {
    toast("Créditos redimidos correctamente.");
    // LLAMADA A API PARA REDIMIR CRÉDITOS ...
    return {
      success: true,
      credits: credits,
    };
  } catch (error) {
    return {
      success: false,
      credits: null,
    };
  }
}
