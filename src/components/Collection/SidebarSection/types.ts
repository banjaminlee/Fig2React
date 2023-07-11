type Items = {
    id: number;
    title: string;
    property?: string;
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

export interface SidebarSectionProps {
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
}

export interface CheckboxGroupProps {
    groupData: Array<Items>; 
    value: any; //@todo once we know data structure.
    handleClick: (title: string) => void;
}


