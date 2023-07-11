import styled from 'styled-components';
import { FunctionComponent } from 'react';
import { QuoteProps } from './types';
import { QuoteIcon } from '../Svgs/index';

const Container = styled.div`
  display: flex;
`;

const Content = styled.div`
  margin-left: 10px;
`;

const Quotecom: FunctionComponent<QuoteProps> = ({ color, children, ...props }) => {
  return (
    <Container>
      <QuoteIcon color={color ? color : '#5870FF'} />
      <Content>{children}</Content>
    </Container>
  );
};

export default Quotecom;
