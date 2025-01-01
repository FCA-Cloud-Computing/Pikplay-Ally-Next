import { create } from "zustand";

export const competitionsStore = create((set, get) => ({
    competitionDetail: {},
    setCompetitionDetail: (data) => {
        set(state => ({ competitionDetail: data }))
    }
}));
