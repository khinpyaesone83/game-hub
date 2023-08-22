// import useData from "./useData";
import geners from "../data/geners";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

// const useGenres = () => useData<Genre>("/genres");
const useGenres = () => ({ data: geners, isLoading: false, error: null });

export default useGenres;
