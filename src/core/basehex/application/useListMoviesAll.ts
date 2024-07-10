import { useQuery, type UseQueryResult } from "@tanstack/react-query";
import type Movie from "../domain/Movie";
import { LIST_MOVIES_ALL } from "./QueryKeys";

import { movieRepository } from "../infrastructure";

const useListMoviesAll = (
  q: number,
  p: number
): UseQueryResult<Movie[], Error> => {
  const response = useQuery({
    queryKey: [LIST_MOVIES_ALL],
    queryFn: async () => await movieRepository.MoviesListAll(q, p),
    retry: 0,
    refetchOnWindowFocus: false,
  });

  return response;
};

export default useListMoviesAll;
