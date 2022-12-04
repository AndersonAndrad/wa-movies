import { IMovie } from "./movie.interface";

export interface IMovieProps {
  onClickMovie: (movie: IMovie) => void;
  totalMovies: (total: number) => void;
  currentPage: number;
  wordSearch: string;
}
