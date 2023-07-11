import * as React from 'react';

export interface QRcodeProps {
    children?: React.ReactNode | undefined;
    value: string;
    size?: number;
    level?: string;
    fgColor?: string;
    bgColor?: string;
    style?: React.CSSProperties | undefined;
}

