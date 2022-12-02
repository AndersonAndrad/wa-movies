import { useEffect, useState } from 'react';

import { Flex } from '@chakra-ui/react';
import Header from "./components/header/header";
import { IMovie } from './interface/movie.interface';
import MovieCard from "./components/movie-card/movie-card";
import MoviesApi from './api/movies.api';
import { Pagination } from './components/pagination/pagination';
import { SideDetails } from './components/side-details/side-details';

export default function App() {
  const moviesApi = MoviesApi

  const [pageSize, _] = useState(10)

  /* Count movies in DB with filter */
  const [totalCount, setTotalCount] = useState(0)

  const [currentPage, setCurrentPage] = useState(1)

  /* All Movies returned from DB */
  const [movies, setMovies] = useState([] as IMovie[])

  /* SideInformation status */
  const [openSide, setOpenSide] = useState(false)

  /* Movie selected to show in sideInformation */
  const [selectedMovie, setSelectedMovie] = useState<IMovie | undefined>(undefined)

  const [wordFilter, setWordFilter] = useState('')

  const onChangeTitle = (title: string) => {
    /* TODO: Add debounce to reduce requests to backend */
    setWordFilter(title)
  }

  const onCloseSide = () => {
    setOpenSide(false)
  }

  const onClickMovie = (movie: IMovie) => {
    setSelectedMovie(movie)
    setOpenSide(true)
  }

  const onChangesPage = (page: number) => {
    setCurrentPage(page)
  }

  useEffect(() => {
    moviesApi.getMovies({
      pageIndex: currentPage,
      pageSize,

    }).then(({ data }) => {
      const { items, totalCount } = data

      console.log(totalCount)

      setMovies(items)
      setTotalCount(totalCount)
    })
  }, [wordFilter, currentPage])

  return (
    <Flex className="App" direction={'column'} height='100vh' padding={2} minWidth={'50%'}>
      <Header searchText={onChangeTitle} />
      <Flex height='100%'>
        <Flex flexWrap={'wrap'} gap={'5'} overflowY='auto' >
          {movies.map(movie => {
            return (
              <MovieCard
                movie={movie}
                onClickMovie={onClickMovie}
              />
            )
          })}
        </Flex>
        {openSide && <SideDetails
          movie={selectedMovie}
          onClick={onCloseSide}
        />}
      </Flex>
      <Flex justifyContent={'center'}>
        <Pagination
          currentPage={currentPage}
          totalCount={totalCount}
          onChangePage={onChangesPage}
          registerPerPage={pageSize}
        />
      </Flex>
    </Flex>
  )
}
