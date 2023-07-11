import  { ReactNode } from "react";

export interface AccordionProps {
    mainTitle?: ReactNode;
    className?: string;
    headerTitle: ReactNode;
    headerImage?: string;
    children: ReactNode;
}
