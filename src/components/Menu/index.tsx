import React, { FC, useEffect, useState, useCallback } from 'react';
import styled from 'styled-components';
import { DesktopMenuProps, MenuProps } from './types';
import Text from 'components/Text';
import Image from 'components/Image';
import GridLayout from '../GridLayout';
import { CarouselButton, IconButton } from '../Button/index';
import { ArrowLeft, ArrowRight } from '../Svgs';

const MainWrapper = styled.div`
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.14);
  padding: 20px 60px;
  gap: 10px;

  height: 88px;

  background: #fcf7ed;
  align-items: center;
  & .mainLogo {
    max-width: 80px;
    max-height: 30px;
    margin-top: 30px;
  }
  @media (max-width: 1023px) {
    padding: 10px 10px;
  }
`;

const WrapperMenu = styled.div`
  & .Menu-body {
    padding: 5px;
    display: none;
  }
  & .Menu-body.open {
    display: block;
  }
  & .mainItems:hover {
    & .icon {
      color: #c94403;
    }
    & .mainMenuItems {
      font-weight: 700;
      color: #c94403;
    }
  }
`;

const WrapperMenuHeader = styled.div`
  padding: 15px;
  cursor: pointer;
  display: flex;
  align-items: center;
  & .icon {
    font-size: 13px;
    color: #000000;
    transform: rotate(90deg);
    transition: all 0.2s ease-in-out;
    margin-left: 12px;
    @media (max-width: 1023px) {
      margin-left: 8px;
      font-size: 10px;
    }
  }

  & .icon:hover {
    color: #c94403;
  }

  & .icon.open {
    color: #c94403;
    transform: rotate(-90deg);
  }

  @media (max-width: 1023px) {
    padding: 10px;
  }
`;

const WrapperLetter = styled.div`
  & .mainMenuItems {
    font-weight: 400;
    font-size: 14px;
    line-height: 28px;
    color: #000000;

    ${({ theme }) => theme.mediaQueries.lg} {
      font-size: 14px;
      font-weight: 400;
    }
    ${({ theme }) => theme.mediaQueries.xl} {
      font-size: 18px;
      font-weight: 400;
    }
  }

  & .mainMenuItems:hover {
    font-weight: 700;
    color: #c94403;
  }
  & .mainMenuItems.open {
    font-weight: 700;
    color: #c94403;
  }
`;

const MainContainer = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  width: calc(100% - 105px);
  float: right;
`;

const FunctionalitySection = styled.div`
  display: flex;
`;

const FeatureSection = styled.div`
  display: flex;
  text-align: right;
  align-items: center;
`;

const ImageWrapper = styled.div`
  width: 24px;
  height: 24px;
  flex: none;
  order: 0;
  flex-grow: 0;
  ${({ theme }) => theme.mediaQueries.lg} {
    width: 44px;
    height: 44px;
    max-width: 34px;
    margin-top: auto;
    margin-bottom: auto;
    padding-top: 18px;
  }
  ${({ theme }) => theme.mediaQueries.xl} {
    width: 44px;
    height: 44px;
    max-width: 44px;
    margin-top: auto;
    margin-bottom: auto;
    padding-top: 18px;
  }
  @media (max-width: 1023px) {
    padding: 8px;
  }
`;

const SpanWrapper = styled.span`
  ${({ theme }) => theme.mediaQueries.lg} {
    width: 105px;
  }
`;

const MainDisplay = styled.div`
  background: #fcf7ed;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.14);
  padding: 0px 60px;
  margin-top: 0px;
  & .Menu-body {
    display: none;
  }
  & .Menu-body.open {
    display: block;

    height: 434px;
  }
  @media (max-width: 1023px) {
    padding: 0px 10px;
    & .Menu-body.open {
      height: auto;
    }
  }
`;

const Section = styled.div`
  padding-top: 60px;
  padding-bottom: 60px;
  @media (max-width: 1023px) {
    padding-top: 15px;
    padding-bottom: 15px;
  }
`;

const ShopSection = styled.div`
  display: flex;
`;

const Content = styled.div`
  margin-top: 30px;
  margin-right: 39px;
  ${({ theme }) => theme.mediaQueries.lg} {
    margin-top: 0px;
    margin-right: 0px;
  }
`;

const ContentHeader = styled.div`
  display: flex;
`;

const ContentBody = styled.div`
  margin-top: 0px;
  padding-left: 43px;
  ${({ theme }) => theme.mediaQueries.lg} {
    margin-top: 14px;
    padding-left: 47px;
  }
`;

const ContentBodyInner = styled.div`
  margin-top: 14px;
`;

const GapWrapper = styled.div`
  margin-top: 56px;
`;

const InnerSection = styled.div`
  width: 60%;
  @media (max-width: 1023px) {
    width: 100%;
  }
`;

const InnerImageSection = styled.div`
  width: 40%;
  padding-left: 60px;
  display: block;
  @media (max-width: 1023px) {
    display: none;
  }
`;

const InnerCategory = styled.div`
  display: flex;
  align-items: center;
  padding-top: 10px;
  padding-bottom: 10px;
`;

const InnerImageBox = styled.div`
  min-width: 60px;
  text-align: center;
`;

const Banner = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-left: 24px;
  padding-right: 24px;
  ${({ theme }) => theme.mediaQueries.lg} {
    padding-left: 60px;
    padding-right: 60px;
  }
  gap: 8px;

  height: 50px;
  background: #c94403;

  flex: none;
  order: 0;
  flex-grow: 0;
`;

const DesktopMenu: FC<DesktopMenuProps> = ({ children, style, ...props }) => {
  const [isOpen, setOpen] = useState(false);
  const [isOpenShop, setOpenShop] = useState(false);
  const [isOpenSell, setOpenSell] = useState(false);
  const [isOpenKiosk, setOpenKiosk] = useState(false);
  const [isOpenHelp, setOpenHelp] = useState(false);

  const toggleMenu = () => {
    setOpen(!isOpen);
    setOpenShop(false);
    setOpenSell(false);
    setOpenKiosk(false);
    setOpenHelp(false);
  };

  const toggleMenuShop = () => {
    setOpenShop(!isOpenShop);
    setOpen(false);
    setOpenSell(false);
    setOpenKiosk(false);
    setOpenHelp(false);
  };

  const toggleMenuSell = () => {
    setOpen(false);
    setOpenShop(false);
    setOpenSell(!isOpenSell);
    setOpenKiosk(false);
    setOpenHelp(false);
  };

  const toggleMenuKiosk = () => {
    setOpen(false);
    setOpenShop(false);
    setOpenSell(false);
    setOpenKiosk(!isOpenKiosk);
    setOpenHelp(false);
  };

  const toggleMenuHelp = () => {
    setOpen(false);
    setOpenShop(false);
    setOpenSell(false);
    setOpenKiosk(false);
    setOpenHelp(!isOpenHelp);
  };

  const ShopCategories = [
    {
      title: 'All Phones',
      image: './branding/svg/allphone.svg',
    },
    {
      title: 'All Tablets',
      image: './branding/svg/alltablets.svg',
    },
    {
      title: 'All Laptops',
      image: './branding/svg/alllaptops.svg',
    },
    {
      title: 'Accessories',
      image: './branding/svg/accessories.svg',
    },
  ];

  const ShopDevices = [
    {
      title: 'iPhones',
      image: './branding/svg/iphones.svg',
    },
    {
      title: 'Samsung Galaxy',
      image: './branding/svg/sumsung.svg',
    },
    {
      title: 'Google Phones',
      image: './branding/svg/google.svg',
    },
    {
      title: 'iPads',
      image: './branding/svg/iPads.svg',
    },
    {
      title: 'Laptops',
      image: './branding/svg/laptops.svg',
    },
  ];

  return (
    <>
      <Banner>
        <CarouselButton
          direction="Left"
          types={3}
          isGhost
          Secondary
          size="Small"
          Carousel
        ></CarouselButton>
        <Text
          font="bodyMain"
          style={{
            fontSize: 18,
            color: '#FCF7ED',
            fontWeight: 700,
          }}
        >
          Promotional banner
        </Text>
        <CarouselButton
          direction="Right"
          types={3}
          isGhost
          Secondary
          size="Small"
          Carousel
        ></CarouselButton>
      </Banner>
      <MainWrapper style={style}>
        <SpanWrapper>
          <Image src={'./branding/flipr.png'} className="mainLogo" />
        </SpanWrapper>
        <MainContainer>
          <FunctionalitySection>
            <WrapperMenu>
              <WrapperMenuHeader onClick={toggleMenu} className="mainItems">
                <WrapperLetter>
                  <Text font="bodyMain" className={`mainMenuItems ${isOpen && 'open'}`}>
                    About Us
                  </Text>
                </WrapperLetter>
                <i className={`fa fa-chevron-right icon ${isOpen && 'open'}`}></i>
              </WrapperMenuHeader>
            </WrapperMenu>
            <WrapperMenu>
              <WrapperMenuHeader onClick={toggleMenuShop} className="mainItems">
                <WrapperLetter>
                  <Text font="bodyMain" className={`mainMenuItems ${isOpenShop && 'open'}`}>
                    Shop
                  </Text>
                </WrapperLetter>
                <i className={`fa fa-chevron-right icon ${isOpenShop && 'open'}`}></i>
              </WrapperMenuHeader>
            </WrapperMenu>
            <WrapperMenu>
              <WrapperMenuHeader onClick={toggleMenuSell} className="mainItems">
                <WrapperLetter>
                  <Text font="bodyMain" className={`mainMenuItems ${isOpenSell && 'open'}`}>
                    Sell or Trade-In
                  </Text>
                </WrapperLetter>
                <i className={`fa fa-chevron-right icon ${isOpenSell && 'open'}`}></i>
              </WrapperMenuHeader>
            </WrapperMenu>
            <WrapperMenu>
              <WrapperMenuHeader onClick={toggleMenuKiosk} className="mainItems">
                <WrapperLetter>
                  <Text font="bodyMain" className={`mainMenuItems ${isOpenKiosk && 'open'}`}>
                    Kiosk Finder
                  </Text>
                </WrapperLetter>
                <i className={`fa fa-chevron-right icon ${isOpenKiosk && 'open'}`}></i>
              </WrapperMenuHeader>
            </WrapperMenu>
            <WrapperMenu>
              <WrapperMenuHeader onClick={toggleMenuHelp} className="mainItems">
                <WrapperLetter>
                  <Text font="bodyMain" className={`mainMenuItems ${isOpenHelp && 'open'}`}>
                    Help
                  </Text>
                </WrapperLetter>
                <i className={`fa fa-chevron-right icon ${isOpenHelp && 'open'}`}></i>
              </WrapperMenuHeader>
            </WrapperMenu>
          </FunctionalitySection>
          <FeatureSection>
            <ImageWrapper>
              <Image src={'./branding/svg/search.svg'} alt="search" />
            </ImageWrapper>
            <ImageWrapper>
              <Image src={'./branding/svg/heart.svg'} alt="heart" />
            </ImageWrapper>
            <ImageWrapper>
              <Image src={'./branding/svg/profile.svg'} alt="profile" />
            </ImageWrapper>
            <ImageWrapper>
              <Image src={'./branding/svg/shop.svg'} alt="shop" />
            </ImageWrapper>
          </FeatureSection>
        </MainContainer>
      </MainWrapper>
      <MainDisplay>
        <Section className={`Menu-body ${isOpen && 'open'}`}>
          <GridLayout rowGap={1} colGap={4}>
            <Content>
              <ContentHeader>
                <Image src={'./branding/svg/book.svg'} width={30} height={30} alt="shop" />
                <Text
                  font="bodyMain"
                  style={{
                    fontSize: 18,
                    color: '#5870FF',
                    fontWeight: 700,
                    marginLeft: 13,
                    marginTop: 5,
                  }}
                >
                  Our Story
                </Text>
              </ContentHeader>
              <ContentBody>
                <Text
                  font="bodyMain"
                  style={{
                    fontSize: 14,
                    color: '#000000',
                    fontWeight: 700,
                  }}
                >
                  Copy about Flipr’s story. Who we are and why we do what we do.
                </Text>
              </ContentBody>
            </Content>
            <Content>
              <ContentHeader>
                <Image src={'./branding/svg/thumbnail.svg'} width={30} height={30} alt="shop" />
                <Text
                  font="bodyMain"
                  style={{
                    fontSize: 18,
                    color: '#5870FF',
                    fontWeight: 700,
                    marginLeft: 13,
                    marginTop: 5,
                  }}
                >
                  Flipr Advantages
                </Text>
              </ContentHeader>
              <ContentBody>
                <Text
                  font="bodyMain"
                  style={{
                    fontSize: 14,
                    color: '#000000',
                    fontWeight: 700,
                  }}
                >
                  Copy about why Flipr is the best choice for shopping refurbished phones and
                  selling and recycling phones.
                </Text>
              </ContentBody>
            </Content>
            <Content>
              <ContentHeader>
                <Image src={'./branding/svg/environment.svg'} width={30} height={30} alt="shop" />
                <Text
                  font="bodyMain"
                  style={{
                    fontSize: 18,
                    color: '#5870FF',
                    fontWeight: 700,
                    marginLeft: 13,
                    marginTop: 5,
                  }}
                >
                  Environment
                </Text>
              </ContentHeader>
              <ContentBody>
                <Text
                  font="bodyMain"
                  style={{
                    fontSize: 14,
                    color: '#000000',
                    fontWeight: 700,
                  }}
                >
                  Copy about ESG and why Flipr is good for the planet.
                </Text>
              </ContentBody>
            </Content>
            <Content>
              <ContentHeader>
                <Image src={'./branding/svg/pen.svg'} width={30} height={30} alt="shop" />
                <Text
                  font="bodyMain"
                  style={{
                    fontSize: 18,
                    color: '#5870FF',
                    fontWeight: 700,
                    marginLeft: 13,
                    marginTop: 5,
                  }}
                >
                  Blog
                </Text>
              </ContentHeader>
              <ContentBody>
                <Text
                  font="bodyMain"
                  style={{
                    fontSize: 14,
                    color: '#000000',
                    fontWeight: 700,
                  }}
                >
                  What’s new with Flipr and the recommerce movement.
                </Text>
              </ContentBody>
            </Content>
          </GridLayout>
          <GapWrapper></GapWrapper>
          <GridLayout rowGap={1} colGap={4}>
            <Content>
              <ContentHeader>
                <Image src={'./branding/svg/press.svg'} width={30} height={30} alt="shop" />
                <Text
                  font="bodyMain"
                  style={{
                    fontSize: 18,
                    color: '#5870FF',
                    fontWeight: 700,
                    marginLeft: 13,
                    marginTop: 5,
                  }}
                >
                  Press
                </Text>
              </ContentHeader>
              <ContentBody>
                <Text
                  font="bodyMain"
                  style={{
                    fontSize: 14,
                    color: '#000000',
                    fontWeight: 700,
                  }}
                >
                  Copy about links to what about Flipr has been written up in the press.
                </Text>
              </ContentBody>
            </Content>
            <Content>
              <ContentHeader>
                <Image src={'./branding/svg/awards.svg'} width={30} height={30} alt="shop" />
                <Text
                  font="bodyMain"
                  style={{
                    fontSize: 18,
                    color: '#5870FF',
                    fontWeight: 700,
                    marginLeft: 13,
                    marginTop: 5,
                  }}
                >
                  Awards & Partnerships
                </Text>
              </ContentHeader>
              <ContentBody>
                <Text
                  font="bodyMain"
                  style={{
                    fontSize: 14,
                    color: '#000000',
                    fontWeight: 700,
                  }}
                >
                  Copy about links to awards Flipr has one, and what other great brands they’re
                  working with.
                </Text>
              </ContentBody>
            </Content>
            <Content>
              <ContentHeader>
                <Image src={'./branding/svg/career.svg'} width={30} height={30} alt="shop" />
                <Text
                  font="bodyMain"
                  style={{
                    fontSize: 18,
                    color: '#5870FF',
                    fontWeight: 700,
                    marginLeft: 13,
                    marginTop: 5,
                  }}
                >
                  Careers
                </Text>
              </ContentHeader>
              <ContentBody>
                <Text
                  font="bodyMain"
                  style={{
                    fontSize: 14,
                    color: '#000000',
                    fontWeight: 700,
                  }}
                >
                  We’re always looking for talented people to join our revolutionary team.
                </Text>
              </ContentBody>
            </Content>
            <Content></Content>
          </GridLayout>
        </Section>
        <Section className={`Menu-body ${isOpenShop && 'open'}`}>
          <ShopSection>
            <InnerSection>
              <GridLayout rowGap={1} colGap={3}>
                <Content>
                  <ContentHeader>
                    <Text
                      font="bodyMain"
                      style={{
                        fontSize: 18,
                        color: '#5870FF',
                        fontWeight: 700,
                        marginTop: 5,
                      }}
                    >
                      Discover
                    </Text>
                  </ContentHeader>
                  <ContentBodyInner>
                    <Text
                      font="bodyMain"
                      style={{
                        fontSize: 14,
                        color: '#000000',
                        fontWeight: 700,
                        marginBottom: 8,
                      }}
                    >
                      Shop All
                    </Text>
                    <Text
                      font="bodyMain"
                      style={{
                        fontSize: 14,
                        color: '#000000',
                        fontWeight: 700,
                        marginBottom: 8,
                      }}
                    >
                      Best Sellers
                    </Text>
                    <Text
                      font="bodyMain"
                      style={{
                        fontSize: 14,
                        color: '#000000',
                        fontWeight: 700,
                        marginBottom: 8,
                      }}
                    >
                      Featured Promotion
                    </Text>
                    <Text
                      font="bodyMain"
                      style={{
                        fontSize: 14,
                        color: '#000000',
                        fontWeight: 700,
                      }}
                    >
                      Sale
                    </Text>
                  </ContentBodyInner>
                </Content>
                <Content>
                  <ContentHeader>
                    <Text
                      font="bodyMain"
                      style={{
                        fontSize: 18,
                        color: '#5870FF',
                        fontWeight: 700,
                        marginTop: 5,
                      }}
                    >
                      Shop by Category
                    </Text>
                  </ContentHeader>
                  <ContentBodyInner>
                    {ShopCategories.map((item, index) => {
                      return (
                        <InnerCategory key={index}>
                          <InnerImageBox>
                            <Image src={item.image} alt="Image" />
                          </InnerImageBox>
                          <Text
                            font="bodyMain"
                            style={{
                              fontSize: 14,
                              color: '#000000',
                              fontWeight: 700,
                            }}
                          >
                            {item.title}
                          </Text>
                        </InnerCategory>
                      );
                    })}
                  </ContentBodyInner>
                </Content>
                <Content>
                  <ContentHeader>
                    <Text
                      font="bodyMain"
                      style={{
                        fontSize: 18,
                        color: '#5870FF',
                        fontWeight: 700,
                        marginTop: 5,
                      }}
                    >
                      Shop by Device
                    </Text>
                  </ContentHeader>
                  <ContentBodyInner>
                    {ShopDevices.map((item, index) => {
                      return (
                        <InnerCategory key={index}>
                          <InnerImageBox>
                            <Image src={item.image} alt="Image" />
                          </InnerImageBox>
                          <Text
                            font="bodyMain"
                            style={{
                              fontSize: 14,
                              color: '#000000',
                              fontWeight: 700,
                            }}
                          >
                            {item.title}
                          </Text>
                        </InnerCategory>
                      );
                    })}
                  </ContentBodyInner>
                </Content>
              </GridLayout>
            </InnerSection>
            <InnerImageSection>
              <Image src={'./branding/svg/promotion.svg'} maxWidth={364} alt="adImage" />
            </InnerImageSection>
          </ShopSection>
        </Section>
        <Section className={`Menu-body ${isOpenSell && 'open'}`}>
          <Text
            font="bodyMain"
            style={{
              fontSize: 14,
              color: '#000000',
              fontWeight: 700,
            }}
          >
            Sell
          </Text>
        </Section>
        <Section className={`Menu-body ${isOpenKiosk && 'open'}`}>
          <Text
            font="bodyMain"
            style={{
              fontSize: 14,
              color: '#000000',
              fontWeight: 700,
            }}
          >
            Kiosk
          </Text>
        </Section>
        <Section className={`Menu-body ${isOpenHelp && 'open'}`}>
          <Text
            font="bodyMain"
            style={{
              fontSize: 14,
              color: '#000000',
              fontWeight: 700,
            }}
          >
            Help
          </Text>
        </Section>
      </MainDisplay>
    </>
  );
};

export default DesktopMenu;

const MobileHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px 20px;

  height: 66px;

  background: #fcf7ed;
  box-shadow: inset 0px -1px 0px #d4d8db;

  flex: none;
  order: 1;
  align-self: stretch;
  flex-grow: 0;
`;

const MobileHeaderInner = styled.div`
  display: flex;
  & .menuHeader {
    margin-left: 4px;
    margin-top: -3px;
  }
  & .searchHeader {
    margin-left: 26px;
  }
  & .profileHeader {
    margin-left: -15px;
  }
  & .shopHeader {
    margin-right: 4px;
  }
`;

const Accordion = styled.div``;

const WrapperAccordion = styled.div`
  min-width: 318px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
  left: 0.45px;
  top: 0px;
  background: #fcf7ed;
  & .Accordion-body {
    display: none;
  }
  & .Accordion-body.open {
    display: block;
  }
`;

const WrapperAccordionHeader = styled.div`
  padding-top: 22px;
  padding-left: 15px;
  padding-right: 15px;
  padding-bottom: 22px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  & .icon {
    font-size: 13px;
    margin-right: 10px;
    color: #c94403;
    transform: rotate(90deg);
    transition: all 0.2s ease-in-out;
  }

  & .icon.open {
    transform: rotate(-90deg);
  }
`;

const InnerWrapper = styled.div`
  padding-top: 20px;
  padding-left: 40px;
  padding-bottom: 20px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
  ${({ theme }) => theme.mediaQueries.lg} {
    box-shadow: unset;
  }
`;

const InnerWrapperShop = styled.div`
  padding-top: 20px;
  padding-left: 16px;
  padding-right: 16px;
  padding-bottom: 20px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
  ${({ theme }) => theme.mediaQueries.lg} {
    box-shadow: unset;
  }
`;

const SpecialPromotion = styled.div`
  background: #5870ff;

  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
  border-radius: 15px;
  padding-top: 18.5px;
  padding-bottom: 18.5px;
  padding-left: 20px;
  padding-right: 20px;
  margin-top: 30px;
  margin-bottom: 20px;
`;

const SellBottom = styled.div`
  background: #ffffff;

  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
  border-radius: 15px;
  padding: 20px;
  align-items: center;
  margin-left: -20px;
  margin-right: 20px;
  margin-top: 30px;
  margin-bottom: 20px;
  text-align: center;
  & .getStartBtn {
    min-width: 235px;
    padding-left: 64px;
    ${({ theme }) => theme.mediaQueries.sm} {
      min-width: 310px;
      padding-left: 98px;
    }
  }
`;

const HelpBottom = styled.div`
  background: #d7f5ff;

  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
  border-radius: 15px;
  padding: 20px;
  align-items: center;
  margin-left: 4px;
  margin-right: 4px;
  margin-top: 30px;
  margin-bottom: 20px;
  text-align: center;
  & .getStartBtn {
    min-width: 235px;
    padding-left: 64px;
    ${({ theme }) => theme.mediaQueries.sm} {
      min-width: 310px;
      padding-left: 98px;
    }
  }
`;

export const Menu: FC<MenuProps> = ({ children, style, ...props }) => {
  const [isOpenAboutUs, setOpenAboutUs] = useState(false);
  const [isOpenShop, setOpenShop] = useState(false);
  const [isOpenSell, setOpenSell] = useState(false);
  const [isOpenHelp, setOpenHelp] = useState(false);

  const toggleAccordionAboutUs = () => {
    setOpenAboutUs(!isOpenAboutUs);
  };

  const toggleAccordionShop = () => {
    setOpenShop(!isOpenShop);
  };

  const toggleAccordionSell = () => {
    setOpenSell(!isOpenSell);
  };

  const toggleAccordionHelp = () => {
    setOpenHelp(!isOpenHelp);
  };

  const [isSecondaryHovering, setIsSecondaryHovering] = useState(false);
  const [iconSecondaryColor, setIconSecondaryColor] = useState('#FFFFFF');

  const handleMouseOver = () => {
    setIsSecondaryHovering(true);
  };

  const handleMouseOut = () => {
    setIsSecondaryHovering(false);
  };

  useEffect(() => {
    if (isSecondaryHovering == true) {
      setIconSecondaryColor('#C94403');
    } else if (isSecondaryHovering == false) {
      setIconSecondaryColor('#FFFFFF');
    }
  }, [isSecondaryHovering]);

  return (
    <>
      <Banner>
        <CarouselButton
          direction="Left"
          types={3}
          isGhost
          Secondary
          size="Small"
          Carousel
        ></CarouselButton>
        <Text
          font="bodyMain"
          style={{
            fontSize: 14,
            color: '#FCF7ED',
            fontWeight: 700,
          }}
        >
          Promotional banner
        </Text>
        <CarouselButton
          direction="Right"
          types={3}
          isGhost
          Secondary
          size="Small"
          Carousel
        ></CarouselButton>
      </Banner>
      <MobileHeader>
        <MobileHeaderInner>
          <ImageWrapper>
            <Image src={'./branding/svg/menu.svg'} alt="menu" className="menuHeader" />
          </ImageWrapper>
          <ImageWrapper>
            <Image src={'./branding/svg/search.svg'} alt="search" className="searchHeader" />
          </ImageWrapper>
        </MobileHeaderInner>
        <MobileHeaderInner>
          <SpanWrapper>
            <Image src={'./branding/flipr.png'} width={67} className="logoHeader" />
          </SpanWrapper>
        </MobileHeaderInner>
        <MobileHeaderInner>
          <ImageWrapper>
            <Image src={'./branding/svg/profile.svg'} alt="profile" className="profileHeader" />
          </ImageWrapper>
          <ImageWrapper>
            <Image src={'./branding/svg/shop.svg'} alt="shop" className="shopHeader" />
          </ImageWrapper>
        </MobileHeaderInner>
      </MobileHeader>
      <Accordion>
        <WrapperAccordion>
          <WrapperAccordionHeader onClick={toggleAccordionAboutUs}>
            <WrapperLetter>
              <Text
                font="bodyMain"
                style={{
                  fontSize: 18,
                  color: '#C94403',
                  fontWeight: 700,
                  marginLeft: 10,
                }}
              >
                About Us
              </Text>
            </WrapperLetter>
            <i className={`fa fa-chevron-right icon ${isOpenAboutUs && 'open'}`}></i>
          </WrapperAccordionHeader>
          <div className={`Accordion-body ${isOpenAboutUs && 'open'}`}>
            <InnerWrapper>
              <Content>
                <ContentHeader>
                  <Image src={'./branding/svg/book.svg'} width={30} height={30} alt="shop" />
                  <Text
                    font="bodyMain"
                    style={{
                      fontSize: 18,
                      color: '#5870FF',
                      fontWeight: 700,
                      marginLeft: 13,
                      marginTop: 5,
                    }}
                  >
                    Our Story
                  </Text>
                </ContentHeader>
                <ContentBody>
                  <Text
                    font="bodyMain"
                    style={{
                      fontSize: 14,
                      color: '#4F5157',
                      fontWeight: 400,
                    }}
                  >
                    Copy about Flipr’s story.
                  </Text>
                  <Text
                    font="bodyMain"
                    style={{
                      fontSize: 14,
                      color: '#C94403',
                      fontWeight: 700,
                      textDecorationLine: 'underline',
                    }}
                  >
                    Who we are and why we do what we do.
                  </Text>
                </ContentBody>
              </Content>
              <Content>
                <ContentHeader>
                  <Image
                    src={'./branding/svg/thumbnail.svg'}
                    width={30}
                    height={30}
                    alt="thumbnail"
                  />
                  <Text
                    font="bodyMain"
                    style={{
                      fontSize: 18,
                      color: '#5870FF',
                      fontWeight: 700,
                      marginLeft: 13,
                      marginTop: 5,
                    }}
                  >
                    Flipr Advantages
                  </Text>
                </ContentHeader>
                <ContentBody>
                  <Text
                    font="bodyMain"
                    style={{
                      fontSize: 14,
                      color: '#4F5157',
                      fontWeight: 400,
                    }}
                  >
                    Copy about why Flipr is the best choice for shopping refurbished phones and
                    selling and recycling phones.
                  </Text>
                  <Text
                    font="bodyMain"
                    style={{
                      fontSize: 14,
                      color: '#C94403',
                      fontWeight: 700,
                      textDecorationLine: 'underline',
                    }}
                  >
                    Why you should choose Flipr
                  </Text>
                </ContentBody>
              </Content>
              <Content>
                <ContentHeader>
                  <Image
                    src={'./branding/svg/environment.svg'}
                    width={30}
                    height={30}
                    alt="environment"
                  />
                  <Text
                    font="bodyMain"
                    style={{
                      fontSize: 18,
                      color: '#5870FF',
                      fontWeight: 700,
                      marginLeft: 13,
                      marginTop: 5,
                    }}
                  >
                    Environment
                  </Text>
                </ContentHeader>
                <ContentBody>
                  <Text
                    font="bodyMain"
                    style={{
                      fontSize: 14,
                      color: '#4F5157',
                      fontWeight: 400,
                    }}
                  >
                    Copy about ESG and wny Flipr is good for the planet.
                  </Text>
                  <Text
                    font="bodyMain"
                    style={{
                      fontSize: 14,
                      color: '#C94403',
                      fontWeight: 700,
                      textDecorationLine: 'underline',
                    }}
                  >
                    Learn about our sustainability work
                  </Text>
                </ContentBody>
              </Content>
              <Content>
                <ContentHeader>
                  <Image src={'./branding/svg/pen.svg'} width={30} height={30} alt="pen" />
                  <Text
                    font="bodyMain"
                    style={{
                      fontSize: 18,
                      color: '#5870FF',
                      fontWeight: 700,
                      marginLeft: 13,
                      marginTop: 5,
                    }}
                  >
                    Blog
                  </Text>
                </ContentHeader>
                <ContentBody>
                  <Text
                    font="bodyMain"
                    style={{
                      fontSize: 14,
                      color: '#4F5157',
                      fontWeight: 400,
                    }}
                  >
                    What’s new with Flipr and the recommerce movement.
                  </Text>
                  <Text
                    font="bodyMain"
                    style={{
                      fontSize: 14,
                      color: '#C94403',
                      fontWeight: 700,
                      textDecorationLine: 'underline',
                    }}
                  >
                    Get caught up
                  </Text>
                </ContentBody>
              </Content>
              <Content>
                <ContentHeader>
                  <Image src={'./branding/svg/press.svg'} width={30} height={30} alt="press" />
                  <Text
                    font="bodyMain"
                    style={{
                      fontSize: 18,
                      color: '#5870FF',
                      fontWeight: 700,
                      marginLeft: 13,
                      marginTop: 5,
                    }}
                  >
                    Press
                  </Text>
                </ContentHeader>
                <ContentBody>
                  <Text
                    font="bodyMain"
                    style={{
                      fontSize: 14,
                      color: '#4F5157',
                      fontWeight: 400,
                    }}
                  >
                    Copy about links to Flipr in the news.
                  </Text>
                  <Text
                    font="bodyMain"
                    style={{
                      fontSize: 14,
                      color: '#C94403',
                      fontWeight: 700,
                      textDecorationLine: 'underline',
                    }}
                  >
                    What people are saying about Flipr
                  </Text>
                </ContentBody>
              </Content>
              <Content>
                <ContentHeader>
                  <Image src={'./branding/svg/awards.svg'} width={30} height={30} alt="awards" />
                  <Text
                    font="bodyMain"
                    style={{
                      fontSize: 18,
                      color: '#5870FF',
                      fontWeight: 700,
                      marginLeft: 13,
                      marginTop: 5,
                    }}
                  >
                    Awards & Partnerships
                  </Text>
                </ContentHeader>
                <ContentBody>
                  <Text
                    font="bodyMain"
                    style={{
                      fontSize: 14,
                      color: '#4F5157',
                      fontWeight: 400,
                    }}
                  >
                    Copy about links to awards Flipr has one, and what other great brands they’re
                    working with.
                  </Text>
                  <Text
                    font="bodyMain"
                    style={{
                      fontSize: 14,
                      color: '#C94403',
                      fontWeight: 700,
                      textDecorationLine: 'underline',
                    }}
                  >
                    See our awards
                  </Text>
                </ContentBody>
              </Content>
              <Content>
                <ContentHeader>
                  <Image src={'./branding/svg/career.svg'} width={30} height={30} alt="career" />
                  <Text
                    font="bodyMain"
                    style={{
                      fontSize: 18,
                      color: '#5870FF',
                      fontWeight: 700,
                      marginLeft: 13,
                      marginTop: 5,
                    }}
                  >
                    Careers
                  </Text>
                </ContentHeader>
                <ContentBody>
                  <Text
                    font="bodyMain"
                    style={{
                      fontSize: 14,
                      color: '#4F5157',
                      fontWeight: 400,
                    }}
                  >
                    We’re always looking for talented people to join our revolutionary team.
                  </Text>
                  <Text
                    font="bodyMain"
                    style={{
                      fontSize: 14,
                      color: '#C94403',
                      fontWeight: 700,
                      textDecorationLine: 'underline',
                      marginBottom: 20,
                    }}
                  >
                    Join our team in saving the planet
                  </Text>
                </ContentBody>
              </Content>
            </InnerWrapper>
          </div>
        </WrapperAccordion>
        <WrapperAccordion>
          <WrapperAccordionHeader onClick={toggleAccordionShop}>
            <WrapperLetter>
              <Text
                font="bodyMain"
                style={{
                  fontSize: 18,
                  color: '#C94403',
                  fontWeight: 700,
                  marginLeft: 10,
                }}
              >
                Shop
              </Text>
            </WrapperLetter>
            <i className={`fa fa-chevron-right icon ${isOpenShop && 'open'}`}></i>
          </WrapperAccordionHeader>
          <div className={`Accordion-body ${isOpenShop && 'open'}`}>
            <InnerWrapperShop>
              <Content>
                <Text
                  font="bodyMain"
                  style={{
                    fontSize: 18,
                    color: '#5870FF',
                    fontWeight: 700,
                    marginTop: 5,
                  }}
                >
                  Discover
                </Text>
                <ContentHeader>
                  <Image
                    src={'./branding/svg/shopall.svg'}
                    style={{ marginTop: 14 }}
                    width={24}
                    height={24}
                    alt="shop"
                  />
                  <Text
                    font="bodyMain"
                    style={{
                      fontSize: 14,
                      color: '#000000',
                      fontWeight: 400,
                      marginLeft: 13,
                      marginTop: 16,
                    }}
                  >
                    Shop All
                  </Text>
                </ContentHeader>
                <ContentHeader>
                  <Image
                    src={'./branding/svg/bestseller.svg'}
                    style={{ marginTop: 14 }}
                    width={24}
                    height={24}
                    alt="bestseller"
                  />
                  <Text
                    font="bodyMain"
                    style={{
                      fontSize: 14,
                      color: '#000000',
                      fontWeight: 400,
                      marginLeft: 13,
                      marginTop: 16,
                    }}
                  >
                    Best Seller
                  </Text>
                </ContentHeader>
                <ContentHeader>
                  <Image
                    src={'./branding/svg/featuredpromotion.svg'}
                    style={{ marginTop: 14 }}
                    width={24}
                    height={24}
                    alt="featuredpromotion"
                  />
                  <Text
                    font="bodyMain"
                    style={{
                      fontSize: 14,
                      color: '#000000',
                      fontWeight: 400,
                      marginLeft: 13,
                      marginTop: 16,
                    }}
                  >
                    Featured Promotion
                  </Text>
                </ContentHeader>
                <ContentHeader>
                  <Image
                    src={'./branding/svg/sale.svg'}
                    style={{ marginTop: 14 }}
                    width={24}
                    height={24}
                    alt="sale"
                  />
                  <Text
                    font="bodyMain"
                    style={{
                      fontSize: 14,
                      color: '#000000',
                      fontWeight: 400,
                      marginLeft: 13,
                      marginTop: 16,
                    }}
                  >
                    Sale
                  </Text>
                </ContentHeader>
              </Content>
              <Content>
                <Text
                  font="bodyMain"
                  style={{
                    fontSize: 18,
                    color: '#5870FF',
                    fontWeight: 700,
                    marginTop: -10,
                  }}
                >
                  Shop by category
                </Text>
                <ContentHeader>
                  <Image
                    src={'./branding/svg/allphone.svg'}
                    style={{ marginTop: 14 }}
                    width={24}
                    height={24}
                    alt="allphone"
                  />
                  <Text
                    font="bodyMain"
                    style={{
                      fontSize: 14,
                      color: '#000000',
                      fontWeight: 400,
                      marginLeft: 13,
                      marginTop: 16,
                    }}
                  >
                    All Phones
                  </Text>
                </ContentHeader>
                <ContentHeader>
                  <Image
                    src={'./branding/svg/alltablets.svg'}
                    style={{ marginTop: 14 }}
                    width={24}
                    height={24}
                    alt="bestseller"
                  />
                  <Text
                    font="bodyMain"
                    style={{
                      fontSize: 14,
                      color: '#000000',
                      fontWeight: 400,
                      marginLeft: 13,
                      marginTop: 16,
                    }}
                  >
                    All Tablets
                  </Text>
                </ContentHeader>
                <ContentHeader>
                  <Image
                    src={'./branding/svg/alllaptops.svg'}
                    style={{ marginTop: 14 }}
                    width={24}
                    height={24}
                    alt="alllaptops"
                  />
                  <Text
                    font="bodyMain"
                    style={{
                      fontSize: 14,
                      color: '#000000',
                      fontWeight: 400,
                      marginLeft: 13,
                      marginTop: 16,
                    }}
                  >
                    All Laptops
                  </Text>
                </ContentHeader>
                <ContentHeader>
                  <Image
                    src={'./branding/svg/accessories.svg'}
                    style={{ marginTop: 14 }}
                    width={24}
                    height={24}
                    alt="accessories"
                  />
                  <Text
                    font="bodyMain"
                    style={{
                      fontSize: 14,
                      color: '#000000',
                      fontWeight: 400,
                      marginLeft: 13,
                      marginTop: 16,
                    }}
                  >
                    Accessories
                  </Text>
                </ContentHeader>
              </Content>
              <Content>
                <Text
                  font="bodyMain"
                  style={{
                    fontSize: 18,
                    color: '#5870FF',
                    fontWeight: 700,
                    marginTop: -10,
                  }}
                >
                  Shop by device
                </Text>
                <ContentHeader>
                  <Image
                    src={'./branding/svg/iphones.svg'}
                    style={{ marginTop: 14 }}
                    width={24}
                    height={24}
                    alt="iphones"
                  />
                  <Text
                    font="bodyMain"
                    style={{
                      fontSize: 14,
                      color: '#000000',
                      fontWeight: 400,
                      marginLeft: 13,
                      marginTop: 16,
                    }}
                  >
                    iPhones
                  </Text>
                </ContentHeader>
                <ContentHeader>
                  <Image
                    src={'./branding/svg/sumsung.svg'}
                    style={{ marginTop: 14 }}
                    width={24}
                    height={24}
                    alt="sumsung"
                  />
                  <Text
                    font="bodyMain"
                    style={{
                      fontSize: 14,
                      color: '#000000',
                      fontWeight: 400,
                      marginLeft: 13,
                      marginTop: 16,
                    }}
                  >
                    Samsung Galaxy
                  </Text>
                </ContentHeader>
                <ContentHeader>
                  <Image
                    src={'./branding/svg/google.svg'}
                    style={{ marginTop: 14 }}
                    width={24}
                    height={24}
                    alt="google"
                  />
                  <Text
                    font="bodyMain"
                    style={{
                      fontSize: 14,
                      color: '#000000',
                      fontWeight: 400,
                      marginLeft: 13,
                      marginTop: 16,
                    }}
                  >
                    Google Phones
                  </Text>
                </ContentHeader>
                <ContentHeader>
                  <Image
                    src={'./branding/svg/iPads.svg'}
                    style={{ marginTop: 14 }}
                    width={24}
                    height={24}
                    alt="iPads"
                  />
                  <Text
                    font="bodyMain"
                    style={{
                      fontSize: 14,
                      color: '#000000',
                      fontWeight: 400,
                      marginLeft: 13,
                      marginTop: 16,
                    }}
                  >
                    iPads
                  </Text>
                </ContentHeader>
                <ContentHeader>
                  <Image
                    src={'./branding/svg/macbooks.svg'}
                    style={{ marginTop: 14 }}
                    width={24}
                    height={24}
                    alt="macbooks"
                  />
                  <Text
                    font="bodyMain"
                    style={{
                      fontSize: 14,
                      color: '#000000',
                      fontWeight: 400,
                      marginLeft: 13,
                      marginTop: 16,
                    }}
                  >
                    MacBooks
                  </Text>
                </ContentHeader>
              </Content>
              <SpecialPromotion>
                <Text
                  font="bodyMain"
                  style={{
                    fontSize: 24,
                    color: '#FCF7ED',
                    fontWeight: 700,
                    textAlign: 'center',
                  }}
                >
                  Special Promotion
                </Text>
                <Text
                  font="bodyMain"
                  style={{
                    fontSize: 14,
                    color: '#FCF7ED',
                    fontWeight: 400,
                    textAlign: 'center',
                    marginTop: 12,
                    marginBottom: 12,
                    marginLeft: 15,
                    marginRight: 15,
                  }}
                >
                  Copy about this special promotion, explaining everything about it.
                </Text>
                <Text
                  font="bodyMain"
                  style={{
                    fontSize: 18,
                    color: '#FCF7ED',
                    fontWeight: 700,
                    textAlign: 'center',
                  }}
                >
                  PROMO CODE
                </Text>
              </SpecialPromotion>
            </InnerWrapperShop>
          </div>
        </WrapperAccordion>
        <WrapperAccordion>
          <WrapperAccordionHeader onClick={toggleAccordionSell}>
            <WrapperLetter>
              <Text
                font="bodyMain"
                style={{
                  fontSize: 18,
                  color: '#C94403',
                  fontWeight: 700,
                  marginLeft: 10,
                }}
              >
                Sell or Trade-in
              </Text>
            </WrapperLetter>
            <i className={`fa fa-chevron-right icon ${isOpenSell && 'open'}`}></i>
          </WrapperAccordionHeader>
          <div className={`Accordion-body ${isOpenSell && 'open'}`}>
            <InnerWrapper>
              <Content>
                <ContentHeader>
                  <Image
                    src={'./branding/svg/sellyourdevice.svg'}
                    width={30}
                    height={30}
                    alt="sellyourdevice"
                  />
                  <Text
                    font="bodyMain"
                    style={{
                      fontSize: 18,
                      color: '#5870FF',
                      fontWeight: 700,
                      marginLeft: 13,
                      marginTop: 5,
                    }}
                  >
                    Sell Your Device
                  </Text>
                </ContentHeader>
                <ContentBody>
                  <Text
                    font="bodyMain"
                    style={{
                      fontSize: 14,
                      color: '#4F5157',
                      fontWeight: 400,
                    }}
                  >
                    Get a price estimate for your phone, then sell it or trade it in to Flipr.
                  </Text>
                  <Text
                    font="bodyMain"
                    style={{
                      fontSize: 14,
                      color: '#C94403',
                      fontWeight: 700,
                      textDecorationLine: 'underline',
                    }}
                  >
                    Get Started
                  </Text>
                </ContentBody>
              </Content>
              <Content>
                <ContentHeader>
                  <Image
                    src={'./branding/svg/howitworks.svg'}
                    width={30}
                    height={30}
                    alt="howitworks"
                  />
                  <Text
                    font="bodyMain"
                    style={{
                      fontSize: 18,
                      color: '#5870FF',
                      fontWeight: 700,
                      marginLeft: 13,
                      marginTop: 5,
                    }}
                  >
                    How it Works
                  </Text>
                </ContentHeader>
                <ContentBody>
                  <Text
                    font="bodyMain"
                    style={{
                      fontSize: 14,
                      color: '#4F5157',
                      fontWeight: 400,
                    }}
                  >
                    Everything you need to know about selling or trading in your device with Flipr.
                  </Text>
                  <Text
                    font="bodyMain"
                    style={{
                      fontSize: 14,
                      color: '#C94403',
                      fontWeight: 700,
                      textDecorationLine: 'underline',
                    }}
                  >
                    See the process
                  </Text>
                </ContentBody>
              </Content>
              <Content>
                <ContentHeader>
                  <Image
                    src={'./branding/svg/kioskfinder.svg'}
                    width={30}
                    height={30}
                    alt="kioskfinder"
                  />
                  <Text
                    font="bodyMain"
                    style={{
                      fontSize: 18,
                      color: '#5870FF',
                      fontWeight: 700,
                      marginLeft: 13,
                      marginTop: 5,
                    }}
                  >
                    Kiosk Finder
                  </Text>
                </ContentHeader>
                <ContentBody>
                  <Text
                    font="bodyMain"
                    style={{
                      fontSize: 14,
                      color: '#4F5157',
                      fontWeight: 400,
                    }}
                  >
                    Locate any of our Flipr kiosks to trade in your device for instant cash.
                  </Text>
                  <Text
                    font="bodyMain"
                    style={{
                      fontSize: 14,
                      color: '#C94403',
                      fontWeight: 700,
                      textDecorationLine: 'underline',
                    }}
                  >
                    Find your nearest kiosk
                  </Text>
                </ContentBody>
              </Content>
              <Content>
                <ContentHeader>
                  <Image src={'./branding/svg/allphone.svg'} width={30} height={30} alt="phone" />
                  <Text
                    font="bodyMain"
                    style={{
                      fontSize: 18,
                      color: '#5870FF',
                      fontWeight: 700,
                      marginLeft: 13,
                      marginTop: 5,
                    }}
                  >
                    Prepare Your Phone
                  </Text>
                </ContentHeader>
                <ContentBody>
                  <Text
                    font="bodyMain"
                    style={{
                      fontSize: 14,
                      color: '#4F5157',
                      fontWeight: 400,
                    }}
                  >
                    There’s a few steps you should take before trading in your phone.
                  </Text>
                  <Text
                    font="bodyMain"
                    style={{
                      fontSize: 14,
                      color: '#C94403',
                      fontWeight: 700,
                      textDecorationLine: 'underline',
                    }}
                  >
                    Get ready
                  </Text>
                </ContentBody>
              </Content>
              <SellBottom>
                <Text
                  font="bodyMain"
                  style={{
                    fontSize: 20,
                    color: '#5870FF',
                    fontWeight: 700,
                    textAlign: 'center',
                    marginTop: 10,
                    marginBottom: 24,
                  }}
                >
                  Want to trade up your device?
                </Text>
                <IconButton
                  Secondary
                  onMouseOver={(e) => handleMouseOver()}
                  onMouseOut={(e) => handleMouseOut()}
                  size="Small"
                  Icon={
                    isSecondaryHovering ? (
                      <ArrowRight color={iconSecondaryColor} />
                    ) : (
                      <ArrowRight color="#FFFFFF" />
                    )
                  }
                  className="getStartBtn"
                  style={{
                    textAlign: 'center',
                    height: 50,
                    fontSize: 16,
                    marginBottom: 20,
                  }}
                >
                  Get Started
                </IconButton>
              </SellBottom>
            </InnerWrapper>
          </div>
        </WrapperAccordion>
        <WrapperAccordion>
          <WrapperAccordionHeader onClick={toggleAccordionHelp}>
            <WrapperLetter>
              <Text
                font="bodyMain"
                style={{
                  fontSize: 18,
                  color: '#C94403',
                  fontWeight: 700,
                  marginLeft: 10,
                }}
              >
                Help
              </Text>
            </WrapperLetter>
            <i className={`fa fa-chevron-right icon ${isOpenHelp && 'open'}`}></i>
          </WrapperAccordionHeader>
          <div className={`Accordion-body ${isOpenHelp && 'open'}`}>
            <InnerWrapperShop>
              <Content>
                <Text
                  font="bodyMain"
                  style={{
                    fontSize: 18,
                    color: '#5870FF',
                    fontWeight: 700,
                    marginTop: 5,
                  }}
                >
                  Contact Us
                </Text>
                <ContentHeader>
                  <Image
                    src={'./branding/svg/email.svg'}
                    style={{ marginTop: 14 }}
                    width={24}
                    height={24}
                    alt="email"
                  />
                  <Text
                    font="bodyMain"
                    style={{
                      fontSize: 14,
                      color: '#5870FF',
                      fontWeight: 700,
                      marginLeft: 13,
                      marginTop: 16,
                    }}
                  >
                    Email us anytime!
                  </Text>
                </ContentHeader>
                <ContentHeader>
                  <Image
                    src={'./branding/svg/phone.svg'}
                    style={{ marginTop: 14 }}
                    width={24}
                    height={24}
                    alt="phone"
                  />
                  <Text
                    font="bodyMain"
                    style={{
                      fontSize: 14,
                      color: '#5870FF',
                      fontWeight: 700,
                      marginLeft: 13,
                      marginTop: 16,
                    }}
                  >
                    1-800-555-5555
                  </Text>
                </ContentHeader>
                <Text
                  font="bodyMain"
                  style={{
                    fontSize: 14,
                    color: '#000000',
                    fontWeight: 400,
                    marginLeft: 37,
                    marginTop: 0,
                  }}
                >
                  Everyday, 9am - 8pm EST
                </Text>
                <ContentHeader>
                  <Image
                    src={'./branding/svg/livechat.svg'}
                    style={{ marginTop: 14 }}
                    width={24}
                    height={24}
                    alt="livechat"
                  />
                  <Text
                    font="bodyMain"
                    style={{
                      fontSize: 14,
                      color: '#5870FF',
                      fontWeight: 700,
                      marginLeft: 13,
                      marginTop: 16,
                    }}
                  >
                    Live Chat
                  </Text>
                </ContentHeader>
                <Text
                  font="bodyMain"
                  style={{
                    fontSize: 14,
                    color: '#000000',
                    fontWeight: 400,
                    marginLeft: 37,
                    marginTop: 0,
                  }}
                >
                  Monday - Friday, 5am - 10pm EST <br />
                  Saturday - Sunday, 6am - 9pm EST
                </Text>
              </Content>
              <Content>
                <Text
                  font="bodyMain"
                  style={{
                    fontSize: 18,
                    color: '#5870FF',
                    fontWeight: 700,
                    marginTop: -10,
                  }}
                >
                  Help center
                </Text>
                <ContentHeader>
                  <Image
                    src={'./branding/svg/faqs.svg'}
                    style={{ marginTop: 14 }}
                    width={24}
                    height={24}
                    alt="faqs"
                  />
                  <Text
                    font="bodyMain"
                    style={{
                      fontSize: 14,
                      color: '#000000',
                      fontWeight: 400,
                      marginLeft: 13,
                      marginTop: 16,
                    }}
                  >
                    FAQs
                  </Text>
                </ContentHeader>
                <ContentHeader>
                  <Image
                    src={'./branding/svg/howtoworks.svg'}
                    style={{ marginTop: 14 }}
                    width={24}
                    height={24}
                    alt="howtoworks"
                  />
                  <Text
                    font="bodyMain"
                    style={{
                      fontSize: 14,
                      color: '#000000',
                      fontWeight: 400,
                      marginLeft: 13,
                      marginTop: 16,
                    }}
                  >
                    How it Works
                  </Text>
                </ContentHeader>
                <ContentHeader>
                  <Image
                    src={'./branding/svg/sellyourdevice.svg'}
                    style={{ marginTop: 14 }}
                    width={24}
                    height={24}
                    alt="financing"
                  />
                  <Text
                    font="bodyMain"
                    style={{
                      fontSize: 14,
                      color: '#000000',
                      fontWeight: 400,
                      marginLeft: 13,
                      marginTop: 16,
                    }}
                  >
                    Financing
                  </Text>
                </ContentHeader>
                <ContentHeader>
                  <Image
                    src={'./branding/svg/sale.svg'}
                    style={{ marginTop: 14 }}
                    width={24}
                    height={24}
                    alt="sale"
                  />
                  <Text
                    font="bodyMain"
                    style={{
                      fontSize: 14,
                      color: '#000000',
                      fontWeight: 400,
                      marginLeft: 13,
                      marginTop: 16,
                    }}
                  >
                    Exclusive Discounts
                  </Text>
                </ContentHeader>
              </Content>

              <HelpBottom>
                <Text
                  font="bodyMain"
                  style={{
                    fontSize: 20,
                    color: '#5870FF',
                    fontWeight: 700,
                    textAlign: 'center',
                    marginTop: 10,
                    marginBottom: 24,
                  }}
                >
                  See how Flipr works
                </Text>
                <IconButton
                  Secondary
                  onMouseOver={(e) => handleMouseOver()}
                  onMouseOut={(e) => handleMouseOut()}
                  size="Small"
                  Icon={
                    isSecondaryHovering ? (
                      <ArrowRight color={iconSecondaryColor} />
                    ) : (
                      <ArrowRight color="#FFFFFF" />
                    )
                  }
                  className="getStartBtn"
                  style={{
                    textAlign: 'center',
                    height: 50,
                    fontSize: 16,
                    marginBottom: 20,
                  }}
                >
                  Watch video
                </IconButton>
              </HelpBottom>
            </InnerWrapperShop>
          </div>
        </WrapperAccordion>
      </Accordion>
    </>
  );
};
