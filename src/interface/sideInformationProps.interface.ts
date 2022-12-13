import { IMovie } from "./movie.interface";

export interface ISideDetailsProps {
  movie: IMovie | undefined;
  onClick: () => void;
}
