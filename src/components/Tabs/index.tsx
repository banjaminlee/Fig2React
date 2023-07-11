// @ts-ignore
import React from 'react';
import styled from 'styled-components';
import {
  Tabs,
  ListType,
  TabType,
  BadgeType,
  TabContainerType,
  TabListType,
  TabContentType,
  TabItemLabelType,
  TabChildType,
  TabPropsType,
} from './types';

const TabList = styled.ol<TabListType>`
  padding-left: 0;
  flex: ${({ vertical }) => (vertical ? '1' : 'none')};
`;

const TabListItem = styled.li<ListType>`
  display: ${({ vertical }) => (vertical ? 'block' : 'inline-block')};
  cursor: pointer;
  list-style: none;
  margin-bottom: -1px;
  padding: 0.5rem 1.5rem;
  padding: ${({ vertical }) => (vertical ? '0rem' : '0.5rem 1.5rem')};
  text-align: ${({ vertical }) => (vertical ? 'initial' : 'center')};
  font-weight: 500;
  line-height: 14.5px;
  border-bottom: ${({ activeTab, vertical, disabled }) =>
    vertical
      ? 'none'
      : disabled
      ? '2.5px solid #D5D5D5'
      : activeTab
      ? '2.5px solid #5870FF'
      : '2.5px solid #BBBBBB'};
  border-right: ${({ activeTab, vertical, disabled }) =>
    vertical
      ? disabled
        ? '2.5px solid #D5D5D5'
        : activeTab
        ? '2.5px solid #5870FF'
        : '2.5px solid #BBBBBB'
      : 'none'};
  color: ${({ activeTab, disabled }) => (disabled ? '#D5D5D5' : activeTab ? '#5870FF' : '#000000')};
  padding-bottom: ${({ isBadge }) => (isBadge ? '5.5px' : '7px')};
  width: ${({ vertical }) => (vertical ? '50%' : 'auto')};
  margin-top: ${({ vertical }) => (vertical ? '10px' : '0px')};
  @media (max-width: 768px) {
    width: ${({ vertical }) => (vertical ? '100%' : 'auto')};
  }
  @media (max-width: 900px) {
    width: ${({ vertical }) => (vertical ? '70%' : 'auto')};
  }
`;

const TabContainer = styled.div<TabContainerType>`
  background-color: #fcf7ed;
  padding: 1px 20px 20px 20px;
  display: ${({ vertical }) => (vertical ? 'flex' : 'block')};
  @media (max-width: 768px) {
    display: block;
  }
`;

const Badge = styled.span<BadgeType>`
  font-size: 12px;
  border-radius: 17px;
  background: ${({ isActiveTab }) => (isActiveTab ? '#5870FF' : '#D9D9D9')};
  float: ${({ vertical }) => (vertical ? 'right' : 'initial')};
  margin-right: ${({ vertical }) => (vertical ? '10px' : '0px')};
  color: ${({ isActiveTab }) => (isActiveTab ? '#fff' : '#000')};
  padding: 0.1rem 0.4rem;
`;

const TabContent = styled.div<TabContentType>`
  width: ${({ vertical }) => (vertical ? '70%' : 'auto')};
  padding-top: ${({ vertical }) => (vertical ? '20px' : '0px')};
  @media (max-width: 768px) {
    width: ${({ vertical }) => (vertical ? '100%' : 'auto')};
  }
`;

const TabItemLabel = styled.span<TabItemLabelType>`
  padding-right: ${({ vertical }) => (vertical ? '30px' : '0px')};
`;

const TabsComponent: React.FC<Tabs> = ({ children, vertical, tabs }) => {
  const [activeTab, setActiveTab] = React.useState(tabs[0].label);

  const onClickTabItem = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <TabContainer vertical={vertical}>
      <TabList vertical={vertical}>
        {tabs.map((tab: TabPropsType) => {
          const { label, badge, disabled } = tab;

          return (
            <Tab
              activeTab={activeTab}
              key={label}
              label={label}
              badge={badge}
              onClick={onClickTabItem}
              vertical={vertical}
              disabled={disabled}
            />
          );
        })}
      </TabList>
      <TabContent vertical={vertical}>
        {tabs.map((tab: any, index: number) => {
          if (tab.label !== activeTab) return undefined;
          return children[index].props.children;
        })}
      </TabContent>
    </TabContainer>
  );
};

export default TabsComponent;

const Tab: React.FC<TabType> = ({ activeTab, label, badge, onClick, vertical, disabled }) => {
  return (
    <TabListItem
      vertical={vertical}
      disabled={disabled}
      activeTab={activeTab === label}
      isBadge={!!badge}
      onClick={() => !disabled && onClick(label)}
    >
      <TabItemLabel vertical={vertical}>{label} </TabItemLabel>
      {badge && (
        <Badge vertical={vertical} isActiveTab={activeTab === label}>
          {badge}
        </Badge>
      )}
    </TabListItem>
  );
};
