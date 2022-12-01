import { Flex } from '@chakra-ui/react';
import { IMovie } from './../../interface/movie.interface';
import { Text } from '@chakra-ui/layout';

export default function MovieCard({ movie }: IMovieCard) {
  const { image, title, producer } = movie

  return (
    <Flex>
      <Flex
        bgImage={image}
        bgSize={'cover'}
        width={'300px'}
        height={'450px'}
        borderRadius={'4px'}
      >
        <Flex marginTop={'auto'} bg='#eeeeee' width='100%' opacity={'80%'} >
          <Flex direction={'column'} color={'#000'} padding={'10px'}>
            <Text fontSize={'18px'} fontWeight={'600'}>{title}</Text>
            <Text fontSize={'14px'} fontWeight={'400'}>{producer}</Text>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  )
}

interface IMovieCard {
  movie: IMovie
}