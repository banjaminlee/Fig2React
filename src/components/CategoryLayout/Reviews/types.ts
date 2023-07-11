import React from "react";

type dataItemsProps = {
  name: string,
  favoritePhone: string,
  feedback: string,
  mark?: string,
}

export type ReviewsProps = {
  data: Array<dataItemsProps>;
  style?: React.CSSProperties | undefined;
};
