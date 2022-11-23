import { Flex, Image, Text } from "@chakra-ui/react";

export function SideDetails() {
  const mockImage = 'https://image.tmdb.org/t/p/w533_and_h300_bestv2/3cyjYtLWCBE1uvWINHFsFnE8LUK.jpg'

  return (
    <Flex
      width='30%'
      minWidth='25%'
      maxWidth='35%'
      height='100%'
      direction='column'
      bg='#f13d13'
      padding='10px'
      marginLeft='auto'
    >
      <Image src={mockImage} />
      <Flex direction='column' gap='10px'>
        <Text fontSize='24px'>
          Castle in the Sky
        </Text>
        <Text fontSize='18px'>
          Castle in the Sky
        </Text>
        <Text>
          is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </Text>
      </Flex>
    </Flex>
  )
}