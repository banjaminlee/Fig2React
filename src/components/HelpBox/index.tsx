import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import { FunctionComponent } from 'react';
import { HelpBoxProps } from './types';
import Image from '../Image';

const Container = styled.div``;

const CardDiv = styled.div<{ variant?: string }>`
  position: relative;
  background: ${({ variant }) => (variant ? variant : '#ffffff')};
  box-shadow: 0px 1px 4px rgb(0 0 0 / 10%);
  border-radius: 10px;
  padding: 25px 20px 25px 20px;
`;

const CloseWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  position: absolute;
  right: 15px;
  top: 15px;
`;

const HelpBox: FunctionComponent<HelpBoxProps> = ({
  closable,
  variant,
  className,
  children,
  ...props
}) => {
  const [isClosed, setIsClosed] = useState(false);

  const closeHandler = useCallback(() => {
    setIsClosed(true);
  }, []);
  return (
    <>
      {!isClosed && (
        <Container>
          <CardDiv className={className} variant={variant}>
            {closable && (
              <CloseWrapper onClick={closeHandler}>
                <Image src="./branding/svg/modalclose.svg" width={15} height={15} />
              </CloseWrapper>
            )}
            {children}
          </CardDiv>
        </Container>
      )}
    </>
  );
};

export default HelpBox;
