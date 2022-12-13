import { Button } from "@chakra-ui/react";
import { IPaginationButtonProps } from "../../interface/PaginationProps.interface";

export function PaginationButton(props: IPaginationButtonProps) {
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
