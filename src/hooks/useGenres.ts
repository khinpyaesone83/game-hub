// import useData from "./useData";
import { useQuery } from "@tanstack/react-query";
import geners from "../data/geners";
import APIClient from "../services/api-client";
import { FetchResponse } from "./useData";

const apiClient = new APIClient<Genre>("/genres");

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

// const useGenres = () => useData<Genre>("/genres");
// const useGenres = () => ({ data: geners, isLoading: false, error: null });

const useGenres = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60 * 1000,
    initialData: { count: geners.length, results: geners },
  });

export default useGenres;
