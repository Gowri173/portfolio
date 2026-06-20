import api from "./axios";

export const getLedgerEntries = (params) =>
  api.get("/api/ledger", { params });

export const createLedgerEntry = (data) =>
  api.post("/api/ledger", data);
