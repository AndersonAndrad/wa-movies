import { Button, Flex, Image, Text } from "@chakra-ui/react";

import { ISideDetailsProps } from "../../interface/SideInformationProps.interface";
import { VscChromeClose } from 'react-icons/vsc';

export function SideDetails({ movie, onClick }: ISideDetailsProps) {
  return (
    <Flex
      width='30%'
      minWidth='25%'
      maxWidth='25%'
      flexGrow={1}
      direction='column'
      bg='#3b3b3b'
      padding='10px'
      borderRadius={'4px'}
      gap={2}
    >
      <Flex>
        <Button
          colorScheme={'blackAlpha'}
          onClick={() => onClick()}
        >
          <VscChromeClose />
        </Button>
      </Flex>
      {movie && <>
        <Image src={movie.movie_banner} />
        <Flex direction='column' gap='10px'>
          <Text fontSize='28px' fontWeight={'700'} textTransform='capitalize'>
            {movie.title}
          </Text>
          <Text fontSize='22px'>
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

