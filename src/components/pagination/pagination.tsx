import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';
import { Button, Flex, Text } from "@chakra-ui/react";

export function Pagination() {
  return (
    <Flex
      gap='10px'
      align='center'
      height='fit-content'
      padding='10px'
    >
      <Button paddingX='15px' paddingY='5px' colorScheme='red' fontSize='20px'><BiChevronLeft /> </Button>
      <Button paddingX='15px' paddingY='5px' colorScheme='red'>1</Button>
      <Button paddingX='15px' paddingY='5px' colorScheme='red'>2</Button>
      <Text paddingX='15px' paddingY='5px' colorScheme='red'>...</Text>
      <Button paddingX='15px' paddingY='5px' colorScheme='red'>9</Button>
      <Button paddingX='15px' paddingY='5px' colorScheme='red'>10</Button>
      <Button paddingX='15px' paddingY='5px' colorScheme='red' fontSize='20px'><BiChevronRight /> </Button>
    </Flex>
  )
}