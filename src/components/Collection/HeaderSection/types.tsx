type Items = {
    id: number;
    title: string;
    property?: string;
}

export interface HeaderSectionProps {
    resultNum: number;
    deviceTags: string;
    deviceColorTags: string;
    deviceConditionTags: string;
    handleModelClick: (title:string) => void;
    handleColorClick: (title:string) => void;
    handleConditionClick: (title:string) => void;
    selectedItems: Array<string>;
    clearHandle: () => void;
    dropdownData: Array<Items>;
    filterHandle: () => void;
    mobileFilter: boolean;
}

