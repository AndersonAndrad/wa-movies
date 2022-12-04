import { Flex } from '@chakra-ui/react';
import Header from "./components/header/header";
import { IMovie } from './interface/movie.interface';
import Movies from './components/movies/movies';
import { Pagination } from './components/pagination/pagination';
import { SideDetails } from './components/side-details/side-details';
import { useState } from 'react';

export default function App() {

  const [pageSize, _] = useState(10)

  /* Count movies in DB with filter */
  const [totalCount, setTotalCount] = useState(0)

  const [currentPage, setCurrentPage] = useState(1)

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

  const setTotalMovies = (total: number) => {
    setTotalCount(total)
  }

  return (
    <Flex className="App" direction={'column'} height='100vh' padding={2} minWidth={'50%'}>
      <Header searchText={onChangeTitle} />
      <Flex height='100%' justifyContent='center' gap={50}>
        <Movies
          onClickMovie={onClickMovie}
          totalMovies={setTotalMovies}
          currentPage={currentPage}
        />
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
