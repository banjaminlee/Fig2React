import React from "react"

export type TableHeaderProps = {
    column?: string;
    headers: string[];
    ml?: string;
    mr?: string;
}

export type TableBodyProps = {
    column?: string;
    cbHandler?: () => void;
}

export type CustomTableHeaderProps = {
    headers: string[];
    width?: string[];
}

export type CustomTableBodyProps = {
    width?: string[];
    data?: string[];
}