export interface IPaginationButtonProps {
  number: number;
  onChangePage: (page: number) => void;
  isCurrent?: boolean;
}

export interface IPaginationProps {
  totalCount: number;
  registerPerPage: number;
  currentPage: number;
  onChangePage: (page: number) => void;
}
