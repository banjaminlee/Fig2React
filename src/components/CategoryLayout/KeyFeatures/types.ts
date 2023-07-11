import React from "react";

type dataItemsProps = {
  icon: string,
  title: string,
  content?: string,
  image?: string,
  functionality?: string,
}

export type KeyFeaturesProps = {
  data: Array<dataItemsProps>;
  style?: React.CSSProperties | undefined;
};
