import * as React from 'react';
import {ReactNode} from 'react';

type dataProps = {
    cat: string,
    key: string,
}

export interface TagSelectorProps {
    children?: React.ReactNode | undefined;
    style?: React.CSSProperties | undefined;
    className?: string;
    options?: Array<dataProps> ;
    selectedValues?: Array<dataProps> ;
    displayValue?: string;
    customCloseIcon?: ReactNode;
    onKeyPressFn?: (value: string) => void ;
    onSearch?: (value: string) => void ;
    onSelect?: (value: string) => void ;
    onRemove?: (value: string) => void ;
}

