import styled from 'styled-components';
import { FunctionComponent } from 'react';
import { FooterProps } from './types';
import Image from 'components/Image';
import Text from 'components/Text';
import GridLayout from '../GridLayout';
import Dropdown from 'components/Dropdown';
import HeaderSection from './HeaderSection';
import InnerSection from './InnerSection';
import BottomSection from './BottomSection';
import { RouteLink } from 'components/Link';

const FooterContainer = styled.div`
  & .desktop {
    display: none;
    ${({ theme }) => theme.mediaQueries.md} {
      display: block;
    }
  }
  & .mobile {
    display: block;
    ${({ theme }) => theme.mediaQueries.md} {
      display: none;
    }
  }
`;

const MainContainer = styled.div`
  background: #d7f5ff;
  padding: 0px 16px 1px 16px;
  ${({ theme }) => theme.mediaQueries.md} {
    padding: 0px 30px 0px 30px;
  }
`;

const BottomContainer = styled.div`
  background: #000000;
  padding: 16px;
  ${({ theme }) => theme.mediaQueries.md} {
    padding: 30px;
  }
`;

const MainSection = styled.div`
  margin-top: 30px;
  ${({ theme }) => theme.mediaQueries.md} {
    display: flex;
  }
`;

const HeaderContainer = styled.div`
  padding-top: 30px;
  padding-bottom: 20px;
  ${({ theme }) => theme.mediaQueries.md} {
    padding-top: 40px;
    padding-bottom: 40px;
    border-bottom: 1px solid #5870ff;
  }
  ${({ theme }) => theme.mediaQueries.xl} {
    display: flex;
    justify-content: space-between;
  }
`;

const CardSection = styled.div`
  width: 100%;
  ${({ theme }) => theme.mediaQueries.xl} {
    width: 33%;
  }
`;

const SupportSection = styled.div`
  padding-left: 25px;
  padding-right: 25px;
  width: 100%;
  ${({ theme }) => theme.mediaQueries.xl} {
    width: 67%;
  }
`;

const ContainerGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  column-gap: 3px;
  row-gap: 1px;
  justify-content: center;
  align-items: flex-start;

  ${({ theme }) => theme.mediaQueries.lg} {
    grid-template-columns: repeat(2, 1fr);
  }
  ${({ theme }) => theme.mediaQueries.xl} {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const SubscribeInput = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CardDiv = styled.div`
  background: #ffffff;
  border-radius: 15px;
  padding: 20px;
  margin-bottom: 24px;
  ${({ theme }) => theme.mediaQueries.md} {
    padding: 30px;
  }
  & .CardHeaderText {
    text-align: center;
    font-size: 20px;
    ${({ theme }) => theme.mediaQueries.md} {
      font-size: 24px;
    }
  }
  & .CardMediumText {
    text-align: center;
    font-size: 14px;
    ${({ theme }) => theme.mediaQueries.md} {
      font-size: 16px;
    }
  }
  & .CardContentText {
    text-align: center;
    font-size: 12px;
    ${({ theme }) => theme.mediaQueries.md} {
      font-size: 14px;
    }
  }
`;

const StyledInput = styled.input`
  border: 0.5px solid #5870ff;
  font-family: 'Roc Grotesk Medium';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  padding: 10px;
  border-radius: 20px 0px 0px 20px;
  margin-top: 20px;
  margin-bottom: 20px;
`;

const StyledButton = styled.button`
  font-family: 'Roc Grotesk Medium';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  color: #fcf7ed;
  background: #c94403;
  border-radius: 0px 20px 20px 0px;
  border: unset;
  padding: 12px;
  max-height: 38px;
  cursor: pointer;
  ${({ theme }) => theme.mediaQueries.md} {
    font-size: 16px;
    font-weight: 500;
    padding: 10px;
  }
`;

const StarBlock = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 5px;
  margin-bottom: 5px;
`;

const DriverSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 15px;
`;

const SocialLayout = styled.div`
  margin-top: 30px;
  padding-top: 30px;
  padding-bottom: 30px;
  display: flex;
  justify-content: space-between;
  border-top: 1px solid #5870ff;
  align-items: center;
`;

const IconsLayout = styled.div`
  display: flex;
  justify-content: space-between;
  margin-right: 42px;
  margin-left: 42px;
  margin-top: 30px;
  ${({ theme }) => theme.mediaQueries.md} {
    margin-top: 0px;
    margin-right: 0px;
    margin-left: 0px;
  }
  ${({ theme }) => theme.mediaQueries.lg} {
    min-width: 200px;
  }
`;

const SocialMobileSection = styled.div``;

const DropdownSection = styled.div`
  margin-bottom: 30px;
  & .maindropdown {
    p {
      color: #5870ff;
      margin: 0px;
    }
  }
`;

const GridLayoutMobile = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  column-gap: 3px;
  row-gap: 1px;
  justify-content: center;
  align-items: flex-start;
  grid-template-columns: repeat(3, 1fr);
`;

const Footer: FunctionComponent<FooterProps> = ({
  headerSectionData,
  innerSiteNavigationData,
  innerSitePopularSearchesData,
  bottomSectionData,
  changeHandler,
  subscribeHandler,
  termsConditionDesk,
  termsConditionMobile,
  children,
  ...props
}) => {
  const dropdownItem = (item: any) => {
    return (
      <Dropdown headerTitle={item.title} className="maindropdown">
        {item.case.map((cases: any, index: number) => {
          return (
            <div key={index}>
              <RouteLink size="Medium" path={cases.link}>
                <Text
                  font="bodyMain"
                  style={{
                    fontSize: 14,
                    color: '#000000',
                    fontWeight: 400,
                    marginBottom: 10,
                  }}
                >
                  {cases.titlecase}
                </Text>
              </RouteLink>
            </div>
          );
        })}
      </Dropdown>
    );
  };
  return (
    <FooterContainer>
      <MainContainer>
        <HeaderContainer>
          {headerSectionData && <HeaderSection data={headerSectionData} />}
          <SocialMobileSection className="mobile">
            <IconsLayout>
              <Image
                src="./branding/svg/footer-facebook.svg"
                width={30}
                height={30}
                alt="facebook"
              />
              <Image src="./branding/svg/footer-twitter.svg" width={30} height={30} alt="twitter" />
              <Image
                src="./branding/svg/footer-instagram.svg"
                width={30}
                height={30}
                alt="instagram"
              />
              <Image src="./branding/svg/footer-video.svg" width={30} height={30} alt="video" />
              <Image src="./branding/svg/footer-youtube.svg" width={30} height={30} alt="youtube" />
            </IconsLayout>
          </SocialMobileSection>
        </HeaderContainer>
        <MainSection>
          <CardSection>
            <CardDiv>
              <Text
                font="bodyMain"
                style={{
                  color: '#5870FF',
                  fontWeight: 700,
                  lineHeight: 1.2,
                }}
                className="CardHeaderText"
              >
                Be the first to know about new products
              </Text>
              <SubscribeInput>
                <StyledInput placeholder="Enter email address" onChange={changeHandler} />
                <StyledButton onClick={subscribeHandler}>Subscribe</StyledButton>
              </SubscribeInput>
              <Text
                font="bodyMain"
                style={{
                  color: '#000000',
                  fontWeight: 400,
                }}
                className="CardContentText"
              >
                By clicking “Subscribe”, you agree to recieve our newsletter about our website,
                special offers, and promotions.
              </Text>
            </CardDiv>
            <DropdownSection className="mobile">
              {innerSiteNavigationData && (
                <>
                  {innerSiteNavigationData.map((item: any, index: number) => {
                    return <div key={index}>{dropdownItem(item)}</div>;
                  })}
                </>
              )}
            </DropdownSection>
            <CardDiv>
              <StarBlock>
                <Text
                  font="bodyMain"
                  style={{
                    color: '#000000',
                    fontWeight: 400,
                    marginRight: 17,
                  }}
                  className="CardMediumText"
                >
                  Excellent
                </Text>
                <Image src="./branding/svg/footer-starblock.svg" alt="starblock" />
                <Text
                  font="bodyMain"
                  style={{
                    color: '#000000',
                    fontWeight: 400,
                    marginLeft: 17,
                  }}
                  className="CardMediumText"
                >
                  4.9 out of 5
                </Text>
              </StarBlock>
              <StarBlock>
                <Text
                  font="bodyMain"
                  style={{
                    color: '#000000',
                    fontWeight: 400,
                    marginRight: 10,
                  }}
                  className="CardContentText"
                >
                  436 reviews on
                </Text>
                <Image src="./branding/svg/footer-star.svg" alt="starblock" />
                <Text
                  font="bodyMain"
                  style={{
                    color: '#000000',
                    fontWeight: 400,
                    marginLeft: 5,
                  }}
                  className="CardContentText"
                >
                  Trustpilot
                </Text>
              </StarBlock>
            </CardDiv>
            <CardDiv>
              <Text
                font="bodyMain"
                style={{
                  color: '#5870FF',
                  fontWeight: 700,
                  textAlign: 'center',
                }}
              >
                Download the Flipr app
              </Text>
              <DriverSection>
                <Image
                  src="./branding/svg/footer-appstore.svg"
                  alt="appstore"
                  style={{ marginRight: 11 }}
                />
                <Image src="./branding/svg/footer-googleplay.svg" alt="googleplay" />
              </DriverSection>
            </CardDiv>
          </CardSection>
          <SupportSection className="desktop">
            <ContainerGrid>
              {innerSiteNavigationData && <InnerSection data={innerSiteNavigationData} />}
            </ContainerGrid>
            <Text
              font="bodyMain"
              style={{
                fontSize: 20,
                color: '#5870FF',
                fontWeight: 700,
                marginBottom: 10,
                marginTop: 20,
              }}
            >
              Popular Searches
            </Text>
            <ContainerGrid>
              {innerSitePopularSearchesData && <InnerSection data={innerSitePopularSearchesData} />}
            </ContainerGrid>
            <SocialLayout>
              <IconsLayout>
                <Image
                  src="./branding/svg/footer-facebook.svg"
                  width={30}
                  height={30}
                  alt="facebook"
                />
                <Image
                  src="./branding/svg/footer-twitter.svg"
                  width={30}
                  height={30}
                  alt="twitter"
                />
                <Image
                  src="./branding/svg/footer-instagram.svg"
                  width={30}
                  height={30}
                  alt="instagram"
                />
                <Image src="./branding/svg/footer-video.svg" width={30} height={30} alt="video" />
                <Image
                  src="./branding/svg/footer-youtube.svg"
                  width={30}
                  height={30}
                  alt="youtube"
                />
              </IconsLayout>
              <Text
                font="bodyMain"
                style={{
                  fontSize: 14,
                  color: '#5870FF',
                  fontWeight: 700,
                  marginBottom: 10,
                  marginLeft: 10,
                  marginTop: 20,
                }}
              >
                2022 Flipr, Inc. All Rights Reserved
              </Text>
            </SocialLayout>
          </SupportSection>
        </MainSection>
      </MainContainer>
      <BottomContainer className="desktop">
        <GridLayout rowGap={1} colGap={6}>
          {bottomSectionData && <BottomSection data={bottomSectionData} />}
        </GridLayout>
        <Text
          font="bodyMain"
          style={{
            fontSize: 12,
            color: '#FCF7ED',
            fontWeight: 400,
            textAlign: 'left',
          }}
        >
          {termsConditionDesk}
        </Text>
      </BottomContainer>
      <BottomContainer className="mobile">
        <GridLayoutMobile>
          {bottomSectionData && <BottomSection data={bottomSectionData} />}
        </GridLayoutMobile>
        <Text
          font="bodyMain"
          style={{
            fontSize: 14,
            color: '#FCF7ED',
            fontWeight: 400,
            textAlign: 'center',
          }}
        >
          {termsConditionMobile}
        </Text>
      </BottomContainer>
    </FooterContainer>
  );
};

export default Footer;
