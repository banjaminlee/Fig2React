import { ReactNode } from "react";

export type DatepickerProps = {
    isClearable?: boolean;
    placeholderText?: string;
    customInput?: ReactNode;
    className?: string;
    dateFormat?: string;
    disabled?: boolean;
    inline?: boolean;
    timeInputLabel?: string;
    showTimeInput?: boolean;
    showMonthYearPicker?: boolean;
    withPortal?: boolean;
    showYearPicker?: boolean;
};
