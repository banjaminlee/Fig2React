export type BreadcrumbArray = {
  displayName: string;
  redirect?: () => void;
  id?: number;
};

export type BreadcrumbProps = {
  breadcrumbs: BreadcrumbArray[];
  maxLimit?: number;
};

export type ClickItem = {
  redirect?: Function;
  displayName: string;
  index: number;
  id?: number;
};

export type DisplayTextProps = {
  displayName: string;
  index: number;
  id?: number;
  redirect?: () => void;
};
