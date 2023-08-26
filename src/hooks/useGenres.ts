// import useData from "./useData";
import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import geners from "../data/geners";
import APIClient from "../services/api-client";

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
    staleTime: ms("24h"), //24hrs
    initialData: geners,
  });

export default useGenres;
