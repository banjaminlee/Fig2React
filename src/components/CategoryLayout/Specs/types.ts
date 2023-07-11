import React, { ReactNode } from "react";

export type itemProps = {
  title?: string,
  content?: ReactNode,
  image?: string,
}

type dataItemsProps = {
  id: number,
  item: Array<itemProps>,
}

export type SpecsProps = {
  data: Array<dataItemsProps>;
  style?: React.CSSProperties | undefined;
};
