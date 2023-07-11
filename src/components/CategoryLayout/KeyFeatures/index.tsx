import React, { useState } from 'react';
import { KeyFeaturesProps } from './types';
import styled, { ThemeProvider } from 'styled-components';
import Image from '../../Image';
import Text from 'components/Text';
import Dropdown from 'components/Dropdown';
import { lightTheme } from 'styles/theme';

const Container = styled.div`
  margin-top: 6px;
  margin-left: 10px;
  margin-right: 10px;
  display: block;
  ${({ theme }) => theme.mediaQueries.md} {
    display: flex;
    margin-top: 60px;
  }
`;

const MobileContainer = styled.div`
  margin-left: 16px;
  margin-right: 16px;
  display: block;
  border-bottom: 1px solid #f3eee4;
  ${({ theme }) => theme.mediaQueries.md} {
    display: none;
  }
  & .mainDropdown {
    background: #ffffff;
    border: unset;
    & .headerImage {
      width: 12px;
      margin-right: 8px;
    }
    & .headerWrapper {
      padding: 0;
    }
    & .icon {
      color: #c94403;
    }
  }
  & p {
    font-weight: 700;
    font-size: 14px;
  }
  & .selected {
    & p {
      color: #c94403;
    }
    & .headerImage {
      filter: invert(29%) sepia(22%) saturate(5864%) hue-rotate(2deg) brightness(99%) contrast(98%);
    }
  }
  & .dropdown-body {
    text-align: center;
  }
`;

const SidebarContainer = styled.div``;

const ContentContainer = styled.div`
  display: none;
  ${({ theme }) => theme.mediaQueries.md} {
    display: flex;
  }
`;

const TabSection = styled.div`
  cursor: pointer;
  align-items: center;
  display: none;
  ${({ theme }) => theme.mediaQueries.md} {
    display: flex;
  }
  max-width: 250px;
  min-width: 250px;
  padding-top: 18px;
  padding-bottom: 18px;
  position: relative;
  & .selectedImage {
    filter: invert(29%) sepia(22%) saturate(5864%) hue-rotate(2deg) brightness(99%) contrast(98%);
  }
  & .selectedText {
    color: #c94403;
  }
  & .indicatorIcon {
    position: absolute;
    right: 0px;
    top: 21px;
  }
`;

const ContentSection = styled.div`
  display: block;
  align-items: center;
  & img {
    margin-bottom: 10px;
    margin-top: 10px;
  }
  ${({ theme }) => theme.mediaQueries.md} {
    & img {
      margin-left: 30px;
      margin-top: 30px;
    }
  }
  ${({ theme }) => theme.mediaQueries.lg} {
    display: flex;
  }
`;

const KeyFeaturesLayout: React.FC<KeyFeaturesProps> = ({ data, style }) => {
  const [selectedId, setSelectId] = useState<number>(0);

  const onSelectedHandler = (id: number) => {
    setSelectId(id);
  };

  return (
    <ThemeProvider theme={lightTheme}>
      <Container style={style}>
        <SidebarContainer data-testid={'sidebarContainer'}>
          {data.map((item, index) => {
            return (
              <div key={index}>
                <TabSection onClick={() => onSelectedHandler(index)} data-testid={'tabSection'}>
                  <Image
                    src={item.icon}
                    className={`sidebarIcon ${selectedId == index && 'selectedImage'}`}
                    alt="sidebarImage"
                  />
                  {selectedId == index && (
                    <Image
                      src="./branding/svg/layout-indicator.svg"
                      className="indicatorIcon"
                      alt="indicatorIcon"
                    />
                  )}
                  <Text
                    font="bodyMain"
                    style={{
                      fontWeight: 400,
                      fontSize: 18,
                      marginLeft: 35,
                    }}
                    className={`sidebarText ${selectedId == index && 'selectedText'}`}
                  >
                    {item.title}
                  </Text>
                </TabSection>
                <MobileContainer onClick={() => onSelectedHandler(index)}>
                  <Dropdown
                    headerTitle={item.title}
                    headerImage={item.icon}
                    className={`mainDropdown ${selectedId == index && 'selected'}`}
                  >
                    <ContentSection>
                      {item.image && (
                        <Image
                          src={item.image}
                          width={120}
                          className="conentImage"
                          alt="conentImage"
                          style={{ textAlign: 'center' }}
                        />
                      )}
                      {item.content && (
                        <Text
                          font="bodyMain"
                          style={{
                            fontWeight: 400,
                            fontSize: 12,
                          }}
                        >
                          {item.content}
                        </Text>
                      )}
                      {item.functionality && (
                        <Text
                          font="bodyMain"
                          style={{
                            fontWeight: 400,
                            fontSize: 12,
                          }}
                        >
                          {item.functionality}
                        </Text>
                      )}
                    </ContentSection>
                  </Dropdown>
                </MobileContainer>
              </div>
            );
          })}
        </SidebarContainer>
        <ContentContainer data-testid={'contentContainer'}>
          {data.map((item, index) => {
            return (
              <div key={index}>
                {selectedId == index && (
                  <ContentSection>
                    {item.content && (
                      <Text
                        font="bodyMain"
                        style={{
                          fontWeight: 400,
                          fontSize: 16,
                          marginLeft: 30,
                        }}
                      >
                        {item.content}
                      </Text>
                    )}
                    {item.image && (
                      <Image
                        src={item.image}
                        width={200}
                        className="conentImage"
                        alt="conentImage"
                      />
                    )}
                    {item.functionality && (
                      <Text
                        font="bodyMain"
                        style={{
                          fontWeight: 400,
                          fontSize: 18,
                          marginLeft: 35,
                          marginRight: 30,
                        }}
                      >
                        {item.functionality}
                      </Text>
                    )}
                  </ContentSection>
                )}
              </div>
            );
          })}
        </ContentContainer>
      </Container>
    </ThemeProvider>
  );
};

export default KeyFeaturesLayout;
