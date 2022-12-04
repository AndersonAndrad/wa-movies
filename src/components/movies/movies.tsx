import { Grid, GridItem } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

import { IMovie } from '../../interface/movie.interface';
import { IMovieProps } from '../../interface/IMoviesProps.interface';
import MovieCard from '../movie-card/movie-card';
import MoviesApi from '../../api/movies.api';

export default function Movies(props: IMovieProps) {
  const { onClickMovie, totalMovies, currentPage } = props

  const moviesApi = MoviesApi

  /* All Movies returned from DB */
  const [movies, setMovies] = useState([] as IMovie[])

  const [pageSize, _] = useState(10)

  useEffect(() => {
    moviesApi.getMovies({
      pageIndex: currentPage,
      pageSize,

    }).then(({ data }) => {
      const { items, totalCount } = data

      setMovies(items)
      totalMovies(totalCount)
    })
  }, [currentPage])

  return (
    <Grid templateColumns={'repeat(5, 1fr)'} gap={6} templateRows={'repeat(2, 1fr)'}>
      {movies.map(movie => {
        return (
          <GridItem>
            <MovieCard
              movie={movie}
              onClickMovie={onClickMovie}
            />
          </GridItem>
        )
      })}
    </Grid>
  )
}

