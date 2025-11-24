import { api } from "./api";

export const analyzeCode = async (code: string) => {
  const res = await api.post("/analysis/analyze", { code });
  return res.data;
};
