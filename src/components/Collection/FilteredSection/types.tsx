type colorItem = {
    id: number,
    color: string,
}

type sellerBtn = {
    title: string,
    image: string,
}

type productCardAddtional = {
    image: string;
    bestSellerBtn?: Array<sellerBtn>;
    favoriteImage?: string;
    previousPrice?: string;
    innerContent?: string;
    actionColor: Array<colorItem>;
    footerlink?: string;
}

export interface FilteredSectionProps {
    filteredData: any; //@todo once we know data structure.
    additionalData: productCardAddtional;
}

