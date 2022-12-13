import { Flex, Skeleton } from "@chakra-ui/react";

export function MoviesSkeleton() {
  return (
    <Flex>
      <Skeleton
        width={'205px'}
        height={'350px'}
        borderRadius={'4px'}
      />
    </Flex>
  )
}