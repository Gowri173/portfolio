import api from "./axios";

export const fetchStats = () =>
  api.get("/api/stats");
