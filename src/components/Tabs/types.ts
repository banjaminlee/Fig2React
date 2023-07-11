import React, { LiHTMLAttributes } from 'react';

export type Tabs = {
  children: any;
  vertical?: boolean;
  tabs: TabPropsType[];
};

export interface ListType extends LiHTMLAttributes<HTMLLIElement> {
  activeTab?: boolean;
  badge?: boolean;
  isBadge?: boolean;
  vertical?: boolean;
  disabled?: boolean;
}

export type TabType = {
  activeTab: string;
  label: string;
  onClick: Function;
  badge?: string;
  vertical?: boolean;
  disabled?: boolean;
};

export type BadgeType = {
  isActiveTab?: boolean;
  vertical?: boolean;
};

export type TabContainerType = {
  vertical?: boolean;
};

export type TabListType = {
  vertical?: boolean;
};

export type TabPropsType = {
  label: string;
  badge?: string;
  disabled?: boolean;
};

export type TabChildType = {
  props: TabPropsType;
};

export type TabContentType = {
  vertical?: boolean;
};

export type TabItemLabelType = {
  vertical?: boolean;
};
