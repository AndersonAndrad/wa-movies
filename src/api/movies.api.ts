import { IFilterMovie, IMovie } from "../interface/movie.interface";

import { HttpHelpers } from "./../helpers/http.helpers";
import { IPaginatedResponse } from "../interface/pagination.interface";
import axios from "axios";

class MoviesApi {
  constructor(private httpHelpers: HttpHelpers) {}

  public async getMovies(filter: IFilterMovie) {
    /* TODO: Change to local enviroment  */
    // `${process.env.REACT_APP_BACK_END}?${this.httpHelpers.build(filter)}`
    return await axios.get<IPaginatedResponse<IMovie>>(
      `http://localhost:3000/movies?${this.httpHelpers.build(filter)}`
    );
  }
}

export default new MoviesApi(new HttpHelpers());
