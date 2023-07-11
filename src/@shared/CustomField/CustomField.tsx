import React, { ReactNode } from 'react';
import { FC } from 'react';
import styled from 'styled-components';
import { Flex, Text } from '../../components';
import Image from '../../components/Image';
import { CustomFieldProps } from './types';

const Container = styled.div`
  padding: 50px;
`;

const ProccedImage = styled(Image)`
  width: 100%;
  height: 100%;
`;

const CustomField = ({ title, header, image, content, children }: CustomFieldProps) => {
  return (
    <Container>
      <Text font="heading_md" color="text_primary" pb="10px">
        {title}
      </Text>
      <Text font="heading_med_md" color="text_primary">
        {header}
      </Text>
      {content}
      {image && <ProccedImage src={image} alt="Image" />}
      {children}
    </Container>
  );
};

export default CustomField;
