import { Flex } from '@chakra-ui/react';
import { IMovieCard } from '../../interface/movieCardProps.interface';
import { Text } from '@chakra-ui/layout';

export default function MovieCard(props: IMovieCard) {
  const { movie, onClickMovie: onSelectMovie } = props;

  const { image, title, producer } = movie

  return (
    <Flex onClick={() => { onSelectMovie(movie) }} cursor='pointer' height={'fit-content'}>
      <Flex
        bgImage={image}
        bgSize={'contain'}
        width={'205px'}
        height={'350px'}
        borderRadius={'4px'}
      >
        <Flex marginTop={'auto'} bg='#2b2b2b' height={'30%'} width='100%' opacity={'90%'} >
          <Flex direction={'column'} color={'#fff'} padding={'10px'}>
            <Text fontSize={'20px'} fontWeight={'600'} textTransform='capitalize'>{title} </Text>
            <Text fontSize={'16px'} fontWeight={'400'}>{producer}</Text>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  )
}
