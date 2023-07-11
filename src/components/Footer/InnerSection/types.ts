type caseItemProps = {
    titlecase: string;
    link: string;
}

interface innerItemsProps {
    title?: string;
    case?: Array<caseItemProps>;
};

export interface InnerSectionProps {
    data: Array<innerItemsProps>;
}
