import React, {ReactNode} from 'react';
import styled from 'styled-components';
import { Flex, Text } from '../../components';
import { FontSizeProps } from './types';

const Container = styled.div`
  padding-top: 10px;
  padding-left: 50px;
  padding-right: 50px;
  padding-bottom: 10px;
`;

const Wrapper = styled.div`
  display: flex;
`;

const PropertyWrapper = styled.div`
  border-right: 1px solid ${({ theme }) => theme.colors.text_primary};
  padding-right: 20px;
  margin-right: 30px;
  max-height: 55px;
  min-width: 110px;
`;

const ExamWrapper = styled.div``;

const CustomField = ({ mainTitle, order, properties, example, children }: FontSizeProps) => {
  return (
    <Container>
      {mainTitle ? (
        <Text font="heading_med_md" color="text_primary" mt="20px">
          {mainTitle}
        </Text>
      ) : (
        <></>
      )}
      <Wrapper>
        <PropertyWrapper>
          {order && (
            <Text font="body_sm" color="text_primary" style={{ fontSize: 11 }}>
              Order: {order}
            </Text>
          )}
          {properties && (
            <>
              <Text font="caption_md" color="text_primary" style={{ fontSize: 11 }}>
                Font: {properties.Font}
              </Text>
              <Text font="caption_md" color="text_primary" style={{ fontSize: 11 }}>
                Weight: {properties.Weight}
              </Text>
              <Text font="caption_md" color="text_primary" style={{ fontSize: 11 }}>
                Size: {properties.Size}
              </Text>
              <Text font="caption_md" color="text_primary" style={{ fontSize: 11 }}>
                Line Height: {properties.LineHeight}
              </Text>
              <Text font="caption_md" color="text_primary" style={{ fontSize: 11 }}>
                Char Spacing: {properties.CharSpacing}
              </Text>
            </>
          )}
        </PropertyWrapper>
        <ExamWrapper>
          {properties && example && (
            <Text
              font={properties.Font}
              color="text_primary"
              style={{
                fontWeight: properties?.Weight,
                fontSize: properties?.Size,
                lineHeight: properties?.LineHeight,
                wordSpacing: properties?.CharSpacing,
              }}
            >
              {example}
            </Text>
          )}
        </ExamWrapper>
      </Wrapper>
      {children}
    </Container>
  );
};

export default CustomField;
