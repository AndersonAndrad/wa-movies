import { IMovie } from "./movie.interface";

export interface IMovieCard {
  movie: IMovie;
  onClickMovie: (movie: IMovie) => void;
}
