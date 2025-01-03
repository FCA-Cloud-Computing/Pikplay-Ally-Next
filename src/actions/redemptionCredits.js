"use server";

export const redemptionCredits = async (data, event) => {
  event.preventDefault();
  const credits = data.get("credits");
  console.log(`Redeeming ${credits} credits`);
};