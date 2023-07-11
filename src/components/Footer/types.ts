import * as React from 'react';

interface headerItemsProps {
    image: string;
    content: string;
    subcontent?: string;
    subsubcontent?: string;
};

type caseItemProps = {
    titlecase: string;
    link: string;
}

interface innerItemsProps {
    title?: string;
    case?: Array<caseItemProps>;
};

export interface FooterProps {
    children?: React.ReactNode | undefined;
    headerSectionData?: Array<headerItemsProps>;
    innerSiteNavigationData?: Array<innerItemsProps>;
    innerSitePopularSearchesData?: Array<innerItemsProps>;
    bottomSectionData?: Array<string>;
    changeHandler?: () => void;
    subscribeHandler?: () => void;
    termsConditionDesk?: string;
    termsConditionMobile?: string;
}

