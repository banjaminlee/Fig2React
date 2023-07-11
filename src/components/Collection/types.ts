type Items = {
    id: number;
    title: string;
    property?: string;
}

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

type valueModelProps = {
    iPhone12: boolean,
    iPhone13: boolean,
    iPhone14: boolean,
    iPhone14Pro: boolean,
}

type valueColorProps = {
    red: boolean,
    green: boolean,
    yellow: boolean,
}

type valueConditionProps = {
    Excellent: boolean,
    Good: boolean,
    Fair: boolean,
}

export interface CollectionProps {
    resultNum: number;
    deviceTags: string;
    deviceColorTags: string;
    deviceConditionTags: string;
    selectedItems: Array<string>;
    clearHandle: () => void;
    dropdownData: Array<Items>;
    filterHandle: () => void;
    mobileFilter: boolean;
    onToggle: (state: boolean) => void;
    siderbarTitleData: Array<string>;
    modelData: Array<Items>;
    valueModel: valueModelProps;
    handleModelClick: (title: string) => void;
    priceData?: Array<Items>;
    colorData: Array<Items>;
    valueColor: valueColorProps;
    handleColorClick: (title: string) => void;
    carrierData?: Array<Items>;
    conditionData: Array<Items>;
    valueCondition: valueConditionProps;
    handleConditionClick: (title: string) => void;
    storageData?: Array<Items>;
    screenSizeData?: Array<Items>;
    releaseYearData?: Array<Items>;
    filteredData: any; //@todo once we know data structure.
    additionalData: productCardAddtional;
}

