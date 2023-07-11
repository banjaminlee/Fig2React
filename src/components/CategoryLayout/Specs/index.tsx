import React from 'react';
import { SpecsProps, itemProps } from './types';
import styled, { ThemeProvider } from 'styled-components';
import Image from '../../Image';
import Text from 'components/Text';
import GridLayout from 'components/GridLayout';
import { lightTheme } from 'styles/theme';

const Container = styled.div`
  margin-top: 6px;
  ${({ theme }) => theme.mediaQueries.md} {
    margin-top: 60px;
  }
  & .gridSection {
    align-items: center !important;
  }
`;

const InnerLayout = styled.div`
  margin-left: 16px;
  margin-right: 16px;
  & p {
    font-size: 12px;
    margin-top: 0px;
    font-weight: 400;
    letter-spacing: 0.01em;
  }
  & span {
    font-weight: 700;
    letter-spacing: 0.015em;
    margin-right: 4px;
  }
`;

const InnerImage = styled.div`
  display: flex;
  justify-content: center;
  ${({ theme }) => theme.mediaQueries.md} {
    display: block;
  }
`;

const SpecsLayout: React.FC<SpecsProps> = ({ data, style }) => {
  const innerItem = (items: any) => {
    return (
      <>
        {items.item.map((item: itemProps, index: number) => {
          return (
            <div key={index}>
              {item.title && (
                <Text
                  font="bodyMain"
                  style={{
                    fontWeight: 400,
                    fontSize: 12,
                    color: '#5870FF',
                  }}
                  className="itemTitle"
                >
                  {item.title}
                </Text>
              )}
              {item.content && <div>{item.content}</div>}
              <InnerImage>
                {item.image && (
                  <Image
                    src={item.image}
                    className="itemImage"
                    alt="itemImage"
                    style={{ maxWidth: 250 }}
                  />
                )}
              </InnerImage>
            </div>
          );
        })}
      </>
    );
  };
  return (
    <ThemeProvider theme={lightTheme}>
      <Container style={style} data-testid={'specsContainer'}>
        <GridLayout rowGap={0} colGap={3}>
          {data.map((items, index) => {
            return <InnerLayout key={index}>{innerItem(items)}</InnerLayout>;
          })}
        </GridLayout>
      </Container>
    </ThemeProvider>
  );
};

export default SpecsLayout;
