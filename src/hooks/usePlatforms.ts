// import useData from "./useData";
import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import platforms from "../data/platforms";
import APIClient from "../services/api-client";
import { FetchResponse } from "./useData";

interface Platform {
  id: number;
  name: string;
  slug: string;
}
const apiClient = new APIClient<Platform>("/platforms/lists/parents");

// const usePlatforms = () => useData<Platform>("/platforms/lists/parents");
// const usePlatforms = () => ({ data: platforms, isLoading: false, error: null });

const usePlatforms = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: apiClient.getAll,
    // () =>
    // apiClient
    //   .get<FetchResponse<Platform>>("/platforms/lists/parents")
    //   .then((res) => res.data),
    staleTime: ms("24h"),
    initialData: platforms,
  });

export default usePlatforms;
