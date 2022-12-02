import { Button } from "@chakra-ui/react";

export function PaginationButton(props: IPaginationProps) {
  const { number, onChangePage, isCurrent = false } = props

  if (isCurrent) {
    return (
      <Button paddingX='15px' paddingY='5px' colorScheme='blackAlpha' disabled>
        {number}
      </Button>
    )
  }

  return (
    <Button paddingX='15px' paddingY='5px' colorScheme='blackAlpha' onClick={() => onChangePage(number)}>
      {number}
    </Button>
  )
}

interface IPaginationProps {
  number: number;
  onChangePage: (page: number) => void
  isCurrent?: boolean
}
