import { Flex } from '@chakra-ui/react';
import Header from "./components/header/header";
import MovieCard from "./components/movie-card/movie-card";
import { SideDetails } from './components/side-details/side-details';

export default function App() {

  return (
    <Flex className="App" direction={'column'} height='100vh' >
      <Header />
      <Flex height='100%'>
        <MovieCard />
        <SideDetails />
      </Flex>
    </Flex>
  )
}
