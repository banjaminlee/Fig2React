type colorItem = {
    id: number,
    color: string,
}

type sellerBtn = {
    title: string,
    image: string,
}

export interface ProductCardProps {
    image: string;
    title: string;
    bestSellerBtn?: Array<sellerBtn>;
    favoriteImage?: string;
    capacity?: string;
    price?: string;
    previousPrice?: string;
    initialprice?: string;
    color?: string;
    innerContent?: string;
    actionColor?: Array<colorItem>;
    footerlink?: string;
    className?: string;
}

