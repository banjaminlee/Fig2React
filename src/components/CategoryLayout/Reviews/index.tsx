import React from 'react';
import { ReviewsProps } from './types';
import styled, { ThemeProvider } from 'styled-components';
import Image from '../../Image';
import Text from 'components/Text';
import { lightTheme } from 'styles/theme';

const Container = styled.div`
  margin-top: 6px;
  ${({ theme }) => theme.mediaQueries.md} {
    margin-top: 60px;
  }
`;

const CardDiv = styled.div`
  background: #ffffff;
  border: 1px solid #5870ff;
  border-radius: 16px;
  padding: 16px;
  margin-bottom: 16px;
  margin-left: 10px;
  margin-right: 10px;
  ${({ theme }) => theme.mediaQueries.md} {
    margin-bottom: 8px;
  }
`;

const HeaderPart = styled.div`
  display: none;
  justify-content: space-between;
  border-bottom: 1px solid rgba(0, 0, 0, 0.12);
  padding-bottom: 16px;
  ${({ theme }) => theme.mediaQueries.md} {
    display: flex;
  }
`;

const HeaderPartMobile = styled.div`
  display: block;
  ${({ theme }) => theme.mediaQueries.md} {
    display: none;
  }
`;

const BodyPart = styled.div`
  padding-top: 16px;
`;

const BottomPart = styled.div`
  margin-top: 16px;
  border-top: 1px solid rgba(0, 0, 0, 0.12);
  padding-top: 16px;
  display: flex;
  justify-content: end;
`;

const ReviewsLayout: React.FC<ReviewsProps> = ({ data, style }) => {
  return (
    <ThemeProvider theme={lightTheme}>
      <Container style={style} data-testid="reviewsContainer">
        {data.map((item, index) => {
          return (
            <CardDiv key={index}>
              <HeaderPart>
                <Text
                  font="bodyMain"
                  style={{
                    fontWeight: 700,
                    fontSize: 18,
                  }}
                >
                  {item.name}
                </Text>
                <Image
                  src="./branding/svg/layout-feedback.svg"
                  className="ratingImage"
                  alt="ratingImage"
                />
                <Text
                  font="bodyMain"
                  style={{
                    fontWeight: 700,
                    fontSize: 12,
                    color: '#5870FF',
                  }}
                >
                  VERIFIED BUYER
                </Text>
              </HeaderPart>
              <HeaderPartMobile>
                <Text
                  font="bodyMain"
                  style={{
                    fontWeight: 700,
                    fontSize: 24,
                  }}
                >
                  {item.name}
                </Text>
                <Text
                  font="bodyMain"
                  style={{
                    fontWeight: 700,
                    fontSize: 12,
                    color: '#5870FF',
                    marginTop: 5,
                  }}
                >
                  VERIFIED BUYER
                </Text>
                <Image
                  src="./branding/svg/layout-feedback.svg"
                  className="ratingImage"
                  alt="ratingImage"
                  style={{ marginTop: 26, marginBottom: 26 }}
                />
              </HeaderPartMobile>
              <BodyPart>
                <Text
                  font="bodyMain"
                  style={{
                    fontWeight: 700,
                    fontSize: 18,
                    color: '#000000',
                  }}
                >
                  {item.favoritePhone}
                </Text>
                <Text
                  font="bodyMain"
                  style={{
                    fontWeight: 400,
                    fontSize: 14,
                    color: '#000000',
                    marginTop: 8,
                    marginBottom: 24,
                  }}
                >
                  {item.feedback}
                </Text>
                <Text
                  font="bodyMain"
                  style={{
                    fontWeight: 400,
                    fontSize: 12,
                    color: '#5870FF',
                  }}
                >
                  Device condition purchased: {item.mark}
                </Text>
              </BodyPart>
              <BottomPart>
                <Text
                  font="bodyMain"
                  style={{
                    fontWeight: 400,
                    fontSize: 12,
                    color: '#000000',
                    marginRight: 10,
                  }}
                >
                  Was this helpful?
                </Text>
                <Image
                  src="./branding/svg/layout-thumb-like.svg"
                  className="ratingImage"
                  style={{ marginRight: 10 }}
                  alt="ratingImage"
                />
                <Image
                  src="./branding/svg/layout-thumb-dislike.svg"
                  className="ratingImage"
                  alt="ratingImage"
                />
              </BottomPart>
            </CardDiv>
          );
        })}
      </Container>
    </ThemeProvider>
  );
};

export default ReviewsLayout;
