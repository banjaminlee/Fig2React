import { ReactNode } from "react";

export interface DropdownProps {
    className: string;
    headerTitle: string;
    headerImage?: string;
    children: ReactNode;
}