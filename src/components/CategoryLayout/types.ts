import React, { ReactNode } from "react";

type itemProps = {
  title?: string,
  content?: ReactNode,
  image?: string,
}

type dataItemsProps = {
  id: number,
  item: Array<itemProps>,
}

type keyFeaturesProps = {
  icon: string,
  title: string,
  content?: string,
  image?: string,
  functionality?: string,
}

type reviewdataItemsProps = {
  name: string,
  favoritePhone: string,
  feedback: string,
  mark?: string,
}

export type Option = {
  title: string;
  location: number;
  fullLength: number;
  titleTemplate: ReactNode;
};

export type CategoryLayoutProps = {
  keyFeaturesData?: Array<keyFeaturesProps>;
  specsData: Array<dataItemsProps>;
  reviewsData: Array<reviewdataItemsProps>;
  style?: React.CSSProperties | undefined;
  options: Option[];
};
