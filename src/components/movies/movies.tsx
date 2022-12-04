import { Grid, GridItem } from '@chakra-ui/react';
import { IFilterMovie, IMovie } from '../../interface/movie.interface';
import { useEffect, useState } from 'react';

import { IMovieProps } from '../../interface/MoviesProps.interface';
import MovieCard from '../movie-card/movie-card';
import MoviesApi from '../../api/movies.api';

export default function Movies(props: IMovieProps) {
  const { onClickMovie, totalMovies, currentPage, wordSearch } = props

  const moviesApi = MoviesApi

  /* All Movies returned from DB */
  const [movies, setMovies] = useState([] as IMovie[])

  const [pageSize, _] = useState(10)

  useEffect(() => {
    const filter: IFilterMovie = {
      pageIndex: currentPage,
      pageSize,
    }

    if (wordSearch.length) {
      filter['title'] = wordSearch
    }

    moviesApi.getMovies(filter).then(({ data }) => {
      const { items, totalCount } = data

      setMovies(items)
      totalMovies(totalCount)
    })
  }, [currentPage, wordSearch])

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

