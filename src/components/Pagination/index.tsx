import styled from 'styled-components';
import { PaginationProps } from './types';
import ReactPaginate from 'react-paginate';

const Paginate = styled(ReactPaginate)`
  display: flex;
  list-style-type: none;
  & .selected {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 4.5px;
    width: 32px;
    height: 32px;
    background: ${({ theme }) => theme.colors.clay};
    border-radius: 100px;
    font-family: 'Roc Grotesk Medium';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 130%;
    text-align: center;
    color: ${({ theme }) => theme.colors.sand};
  }
  & li {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 4.5px;
    width: 32px;
    height: 32px;
    border-radius: 100px;
    font-family: 'Roc Grotesk Medium';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 130%;
    text-align: center;
    color: #000000;
    border: 2px solid #c94403;
    margin-left: 4px;
    margin-right: 4px;

    & a {
      cursor: pointer;
      margin-top: 2px;
    }
  }
  & .break {
    border: unset;
  }
`;

const Pagination = ({ breakLabel, nextLabel, onPageChange, ...props }: PaginationProps) => {
  return (
    <>
      <Paginate
        breakLabel={breakLabel}
        nextLabel={nextLabel}
        onPageChange={onPageChange}
        {...props}
      />
    </>
  );
};

export default Pagination;
