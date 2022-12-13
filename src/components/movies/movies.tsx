import { Grid, GridItem } from '@chakra-ui/react';
import { IFilterMovie, IMovie } from '../../interface/movie.interface';
import { useEffect, useState } from 'react';

import { IMovieProps } from '../../interface/moviesProps.interface';
import MovieCard from '../movie-card/movie-card';
import MoviesApi from '../../api/movies.api';
import { MoviesSkeleton } from './movies.skeleton';
import { NoMovies } from './no-movies';

export default function Movies(props: IMovieProps) {
  const { onClickMovie, totalMovies, currentPage, wordSearch } = props

  const moviesApi = MoviesApi

  const skeletons = []

  /* All Movies returned from DB */
  const [movies, setMovies] = useState([] as IMovie[])

  const [pageSize, _] = useState(10)

  const [isLoading, setIsLoading] = useState(true);

  for (let index = 0; index < 10; index++) {
    skeletons.push({ skeleton: <MoviesSkeleton />, id: index })
  }

  useEffect(() => {
    const filter: IFilterMovie = {
      pageIndex: currentPage,
      pageSize,
    }

    if (wordSearch.length) {
      filter['title'] = wordSearch
    }

    setIsLoading(true)

    moviesApi.getMovies(filter).then(({ data }) => {
      const { items, totalCount } = data

      setMovies(items)
      totalMovies(totalCount)

      setTimeout(() => {
        setIsLoading(false)
      }, 500);
    }).catch(() => {
      setIsLoading(false)
    })
  }, [currentPage, wordSearch])

  if (isLoading) {
    return (
      <Grid templateColumns={'repeat(5, 1fr)'} gap={6} templateRows={'repeat(2, 1fr)'}>
        {skeletons.map(({ skeleton, id }) => {
          return (
            <GridItem key={id}>
              {skeleton}
            </GridItem>
          )
        })}
      </Grid>
    )
  }

  if (movies.length && !isLoading) {
    return (
      <Grid templateColumns={'repeat(5, 1fr)'} gap={6} templateRows={'repeat(2, 1fr)'}>
        {movies.map(movie => {
          return (
            <GridItem key={movie._id}>
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

  return (
    <NoMovies />
  )
}

