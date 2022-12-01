import { Button, Flex, Image, Text } from "@chakra-ui/react";

import { AiOutlineArrowRight } from 'react-icons/ai';
import { IMovie } from "../../interface/movie.interface";

export function SideDetails({ movie, onClick }: ISideDetailsProps) {
  return (
    <Flex
      width='30%'
      minWidth='25%'
      maxWidth='35%'
      flexGrow={1}
      direction='column'
      bg='#f13d13'
      padding='10px'
      marginLeft='auto'
      gap={2}
    >
      <Flex>
        <Button
          colorScheme={'blackAlpha'}
          onClick={() => onClick()}
        >
          <AiOutlineArrowRight />
        </Button>
      </Flex>
      {movie && <>
        <Image src={movie.movie_banner} />
        <Flex direction='column' gap='10px'>
          <Text fontSize='24px'>
            {movie.title}
          </Text>
          <Text fontSize='18px'>
            {movie.director}
          </Text>
          <Text>
            {movie.description}
          </Text>
        </Flex>
      </>}
    </Flex>
  )
}

interface ISideDetailsProps {
  movie: IMovie | undefined
  onClick: () => void
}