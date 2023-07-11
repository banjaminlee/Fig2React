import { ReactNode } from 'react';

type selectionProps = {
    selected: number;
};

export type PaginationProps = {
    breakLabel: ReactNode;
    nextLabel: ReactNode;
    onPageChange: (data: selectionProps) => void;
    marginPagesDisplayed: number;
    pageRangeDisplayed: number;
    pageCount: number;
    previousClassName?: string;
    nextClassName?: string;
    previousLabel: ReactNode;
}
