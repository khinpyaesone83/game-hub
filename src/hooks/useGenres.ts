// import useData from "./useData";
import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import geners from "../data/geners";
import APIClient from "../services/api-client";
import { Genre } from "../entities/Genre";

const apiClient = new APIClient<Genre>("/genres");

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
