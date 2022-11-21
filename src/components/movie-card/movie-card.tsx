import { Flex } from '@chakra-ui/react';
import { Text } from '@chakra-ui/layout';

export default function MovieCard() {
  const imageMock = 'https://image.tmdb.org/t/p/w600_and_h900_bestv2/npOnzAbLh6VOIu3naU5QaEcTepo.jpg'

  return (
    <Flex>
      <Flex
        bgImage={imageMock}
        bgSize={'cover'}
        width={'300px'}
        height={'450px'}
        borderRadius={'4px'}
      >
        <Flex marginTop={'auto'} bg='#eeeeee' width='100%' opacity={'80%'} >
          <Flex direction={'column'} color={'#000'} padding={'10px'}>
            <Text fontSize={'18px'} fontWeight={'600'}>Castle in the sky</Text>
            <Text fontSize={'14px'} fontWeight={'400'}>Hayao Miyazaki</Text>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  )
}