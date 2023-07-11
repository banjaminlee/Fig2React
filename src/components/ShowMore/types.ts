import * as React from 'react';

export interface ReactShowMoreTextProps {
    anchorClass?: string | undefined;
    children?: React.ReactNode | undefined;
    className?: string | undefined;
    expanded?: boolean | undefined;
    keepNewLines?: boolean | undefined;
    less?: React.ReactNode | undefined;
    lines?: number | undefined;
    more?: React.ReactNode | undefined;
    onClick?: ((expanded: boolean) => void) | undefined;
    width?: number | undefined;
    truncatedEndingComponent?: React.ReactNode | undefined;
}

export interface ReadMoreTextProps {
    children?: React.ReactNode | undefined;
}

