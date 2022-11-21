import { Flex } from '@chakra-ui/react';
import Header from "./components/header/header";
import MovieCard from "./components/movie-card/movie-card";

export default function App() {

  return (
    <Flex className="App" direction={'column'}>
      <Header />
      <MovieCard />
    </Flex>
  )
}
