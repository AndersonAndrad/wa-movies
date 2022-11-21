import { Box, Flex, Input, Text } from '@chakra-ui/react'

export default function Header() {
  return (
    <Flex justifyContent={'space-between'} align='center'>
      <Box>
        <Input placeholder='Ex: Batman' bg={'#F3F3F3'} width={'400px'} color="#121212" fontWeight={'600'} />
      </Box>
      <Text fontSize={'32px'}>Wa Filmes</Text>
    </Flex>
  )
}