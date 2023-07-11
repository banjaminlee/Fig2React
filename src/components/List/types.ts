export type dataProps = {
  id: number;
  title: string;
}

export type ListProps = {
  varient?: string;
  style?: React.CSSProperties;
  start?: number;
  postsData: Array<dataProps>;
  custom?: boolean;
  note?: string;
};
