import { Flex, Text } from "@chakra-ui/react";

export function NoMovies() {
  return (
    <Flex
      direction={'column'}
      justify={'center'}
      align={'center'}
      gap={'10px'}
    >
      <Text fontSize={'25px'}>Desculpa, não encontramos nenhum filme 😕</Text>
    </Flex>
  )
}