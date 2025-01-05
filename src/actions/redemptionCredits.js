"use server";

import { toast } from 'react-toastify'

export const initialStateRedemptionCredits = {
  success: false,
  errors: null,
  credits: null,
};

export async function redemptionCredits(prevState, data) {
  const credits = data.get("credits");
  if (!credits) {
    toast("Debe especificar el número de creditos a redimir.");
    return {
      success: false,
      credits: null,
    };
  }
  try {
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
