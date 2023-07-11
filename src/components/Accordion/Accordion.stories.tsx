import React from 'react';
import styled from 'styled-components';
import Text from '../Text';
import Accordion from './index';
import Image from '../Image';

export default {
  title: 'Components/Accordion',
  argTypes: {},
};

const MainWrapper = styled.div<{ length: number; index: number }>`
  & .primaryAccordion {
    max-width: 740px;
    background: #ffffff;
    box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.14);
    border-top-right-radius: ${({ index }) => (index == 0 ? '15px' : '0px')};
    border-top-left-radius: ${({ index }) => (index == 0 ? '15px' : '0px')};
    border-bottom-right-radius: ${({ length, index }) => (length == index ? '15px' : '0px')};
    border-bottom-left-radius: ${({ length, index }) => (length == index ? '15px' : '0px')};
    & .headerWrapper {
      background: white;
      padding: 15px;
      cursor: pointer;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom-right-radius: ${({ length, index }) => (length == index ? '15px' : '0px')};
      border-bottom-left-radius: ${({ length, index }) => (length == index ? '15px' : '0px')};
      & .icon {
        font-size: 13px;
        color: #91a5be;
        transform: rotate(0deg);
        transition: all 0.2s ease-in-out;
      }
      & .icon.open {
        transform: rotate(90deg);
      }
    }
  }
  & .secondaryAccordion {
    max-width: 318px;
    background: #ffffff;
    box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.14);
    border-top-right-radius: ${({ index }) => (index == 0 ? '15px' : '0px')};
    border-top-left-radius: ${({ index }) => (index == 0 ? '15px' : '0px')};
    border-bottom-right-radius: ${({ length, index }) => (length == index ? '15px' : '0px')};
    border-bottom-left-radius: ${({ length, index }) => (length == index ? '15px' : '0px')};
    & .headerWrapper {
      background: white;
      padding: 15px;
      cursor: pointer;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom-right-radius: ${({ length, index }) => (length == index ? '15px' : '0px')};
      border-bottom-left-radius: ${({ length, index }) => (length == index ? '15px' : '0px')};
      & .icon {
        font-size: 13px;
        color: #91a5be;
        transform: rotate(0deg);
        transition: all 0.2s ease-in-out;
      }
      & .icon.open {
        transform: rotate(90deg);
      }
    }
    & .headerTitle {
      margin-top: auto;
      margin-bottom: auto;
      margin-left: 20px;
    }
  }
`;

const HeaderMain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 30px;

  background: #ffffff;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.14);
  border-top-right-radius: 15px;
  border-top-left-radius: 15px;

  flex: none;
  order: 0;
  flex-grow: 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
`;

const WrapperContent = styled.div`
  display: flex;
  justify-content: space-between;
`;

const HeaderWrapper = styled.div`
  display: flex;
  & .mainSvg {
    margin-top: 14px;
  }
`;

const mainTitleData = [
  {
    title: 'Charger cable',
    image: './branding/svg/charger.svg',
  },
  {
    title: '30-point quality injection',
    image: './branding/svg/injection.svg',
  },
  {
    title: 'Easy 30-day returns',
    image: './branding/svg/returns.svg',
  },
  {
    title: 'No contracts or strings attached',
    image: './branding/svg/attached.svg',
  },
];

const MainTitle = () => {
  return (
    <>
      <HeaderMain>
        <Text
          font="body_md"
          color="text_primary"
          style={{ marginTop: 15, marginRight: 10, marginLeft: 10 }}
        >
          What's included?
        </Text>
        <WrapperContent>
          {mainTitleData.map((item, index) => {
            return (
              <HeaderWrapper key={index}>
                <Image src={item.image} className="mainSvg" />
                <Text
                  font="body_md"
                  color="text_primary"
                  style={{ fontSize: 12, marginTop: 15, marginRight: 10, marginLeft: 10 }}
                >
                  {item.title}
                </Text>
              </HeaderWrapper>
            );
          })}
        </WrapperContent>
      </HeaderMain>
    </>
  );
};

const Firstdata = [
  {
    mainTitle: <MainTitle />,
    title: 'How to activate',
    content: 'This is how to activate.',
  },
  {
    mainTitle: '',
    title: 'Carrier compatibility',
    content: 'This is Carrier compatibility.',
  },
];

const CustomTitle = () => {
  return (
    <>
      <Text
        font="body_md"
        style={{
          fontSize: 14,
          color: '#5870FF',
          fontWeight: 700,
        }}
      >
        Delivered, Nov 4th
      </Text>
      <Text
        font="body_md"
        style={{
          fontSize: 14,
          color: 'text_primary',
          fontWeight: 400,
        }}
      >
        Apple iPhone 14, Apple...
      </Text>
    </>
  );
};

const Seconddata = [
  {
    image: './branding/svg/mobile.svg',
    title: <CustomTitle />,
    content: 'Apple iPhone 14, Apple iPhone 14 Pro',
  },
  {
    image: './branding/svg/mobile.svg',
    title: <CustomTitle />,
    content: 'Apple iPhone 14, Apple iPhone 14 Pro',
  },
  {
    image: './branding/svg/mobile.svg',
    title: <CustomTitle />,
    content: 'Apple iPhone 14, Apple iPhone 14 Pro',
  },
];

export const Story = () => {
  return (
    <>
      <Text font="body_md" color="text_primary" mt="20px" mb="10px">
        Primary Accordion
      </Text>
      {Firstdata.map((item, index) => {
        return (
          <MainWrapper key={index} length={Firstdata.length - 1} index={index}>
            <Accordion
              mainTitle={item.mainTitle}
              headerTitle={item.title}
              className="primaryAccordion"
            >
              <Text
                font="body_md"
                color="text_primary"
                style={{
                  fontSize: 12,
                  marginTop: 0,
                  marginRight: 10,
                  marginLeft: 10,
                  marginBottom: 10,
                }}
              >
                {item.content}
              </Text>
            </Accordion>
          </MainWrapper>
        );
      })}
      <Text font="body_md" color="text_primary" mt="20px" mb="10px">
        Secondary Accordion
      </Text>
      {Seconddata.map((item, index) => {
        return (
          <MainWrapper key={index} length={Seconddata.length - 1} index={index}>
            <Accordion
              headerImage={item.image}
              headerTitle={item.title}
              className="secondaryAccordion"
            >
              <Text
                font="body_md"
                color="text_primary"
                style={{
                  fontSize: 12,
                  marginTop: 0,
                  marginRight: 10,
                  marginLeft: 10,
                  marginBottom: 10,
                }}
              >
                {item.content}
              </Text>
            </Accordion>
          </MainWrapper>
        );
      })}
    </>
  );
};
