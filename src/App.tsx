import { useEffect, useState } from 'react';

import { Flex } from '@chakra-ui/react';
import Header from "./components/header/header";
import { IMovie } from './interface/movie.interface';
import { IPaginatedResponse } from './interface/pagination.interface';
import MovieCard from "./components/movie-card/movie-card";
import { SideDetails } from './components/side-details/side-details';
import axios from 'axios';

export default function App() {
  /* Count movies in DB with filter */
  const [totalCount, setTotalCount] = useState(0)

  const [currentPage, setCurrentPage] = useState(0)

  /* All Movies returned from DB */
  const [movies, setMovies] = useState([] as IMovie[])

  /* SideInformation status */
  const [openSide, setOpenSide] = useState(false)

  /* Movie selected to show in sideInformation */
  const [selectedMovie, setSelectedMovie] = useState({})

  useEffect(() => {
    axios.get('http://localhost:3000/movies').then(
      ({ data }: { data: IPaginatedResponse<IMovie> }) => {
        const { totalCount, items } = data

        setMovies(items)
        setTotalCount(totalCount)
      })
  }, [])

  return (
    <Flex className="App" direction={'column'} height='100vh' gap={20} padding={2} minWidth={'50%'}>
      <Header />
      <Flex height='100%'>
        <Flex flexWrap={'wrap'} gap={'5'}>
          {movies.map(movie => {
            return (
              <MovieCard movie={movie} />
            )
          })}
        </Flex>
        {/* <Pagination /> */}
        {openSide && <SideDetails />}

      </Flex>
    </Flex>
  )
}
