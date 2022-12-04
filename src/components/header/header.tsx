import { Box, Flex, Input } from '@chakra-ui/react'

import { IHeaderProps } from '../../interface/HeaderProps.interface'

export default function Header({ searchText }: IHeaderProps) {


  return (
    <Flex justifyContent={'center'} align='center' height={'20%'}>
      <Box>
        <Input
          placeholder={`Ex: Batman`}
          bg={'#F3F3F3'}
          width={'400px'}
          fontSize={'18px'}
          color="#121212"
          fontWeight={'600'}
          onChange={event => searchText(event.target.value)}
        />
      </Box>
      {/* <Text fontSize={'32px'}>Wa Filmes</Text> */}
    </Flex>
  )
}

