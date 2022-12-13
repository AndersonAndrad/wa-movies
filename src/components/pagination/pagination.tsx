import { Flex, Text } from "@chakra-ui/react";

import { IPaginationProps } from "../../interface/PaginationProps.interface";
import { PaginationButton } from './pagination-button';

function generatePagesArray(from: number, to: number) {
  return [...new Array(to - from)].map((_, index) => index + from + 1).filter(page => page > 0)
}

export function Pagination(props: IPaginationProps) {
  const { currentPage, onChangePage, registerPerPage, totalCount } = props

  const siblingPages: number = 1;

  const lastPage = Math.floor(totalCount / registerPerPage)

  const previousPage = currentPage > 1 ? generatePagesArray(currentPage - 1 - siblingPages, currentPage - 1) : []

  const nextPages = currentPage < lastPage ? generatePagesArray(currentPage, Math.min(currentPage + siblingPages, lastPage)) : []

  return (
    <Flex
      gap='10px'
      align='center'
      height='fit-content'
      padding='10px'
    >
      {currentPage > (1 + siblingPages) && (
        <>
          <PaginationButton number={1} onChangePage={onChangePage} />
          {currentPage > (2 + siblingPages) && <Text paddingX='15px' paddingY='5px' colorScheme='red'>...</Text>}
        </>
      )}

      {previousPage.length > 0 && previousPage.map(page => { return <PaginationButton key={page} number={page} onChangePage={onChangePage} /> })}

      <PaginationButton number={currentPage} isCurrent onChangePage={onChangePage} />

      {nextPages.length > 0 && nextPages.map(page => { return <PaginationButton key={page} number={page} onChangePage={onChangePage} /> })}

      {
        (currentPage + siblingPages) < lastPage && (
          <>
            {(currentPage + 1 + siblingPages) < lastPage && <Text paddingX='15px' paddingY='5px' colorScheme='red'>...</Text>}
            <PaginationButton number={1} onChangePage={onChangePage} />
          </>
        )
      }
    </Flex>
  )
}
