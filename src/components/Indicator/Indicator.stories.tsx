import React, { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import Indicator from './';
import { Button } from '../Button';
import Text from '../Text';
import Image from '../Image';

export default {
  title: 'Components/Indicator',
  argTypes: {},
};

const StyledModal = styled(Indicator)`
  width: 90%;
  position: relative;
`;

const ButtonWrapper = styled.div`
  text-align: right;
  margin-top: 10px;
  margin-bottom: 30px;
  margin-right: -20px;
`;

const CloseWrapper = styled.div`
  width: 42px;
  height: 42px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  position: absolute;
  right: 20px;
  top: 15px;
`;

export const Story = () => {
  const [isOpened, setIsOpened] = useState(false);

  const changeHandler = useCallback(() => {
    setIsOpened((prev) => !prev);
  }, []);

  const [isOpenedShop, setIsOpenedShop] = useState(false);

  const changeHandlerShop = useCallback(() => {
    setIsOpenedShop((prev) => !prev);
  }, []);

  const [isNumber, setNumber] = useState<number>(1);

  const Handleplus = () => {
    setNumber(isNumber + 1);
    if (isNumber > 3) {
      setNumber(1);
    }
  };

  const Handleminus = () => {
    setNumber(isNumber - 1);
    if (isNumber < 2) {
      setNumber(4);
    }
  };

  const [isMobile, setIsMobile] = useState(false);

  const handleResize = () => {
    if (window.innerWidth < 720) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };
  useEffect(() => {
    window.addEventListener('resize', handleResize);
  });

  return (
    <div>
      <Button size="Small" onClick={changeHandler}>
        Open Indicator Modal
      </Button>
      <Button size="Small" onClick={changeHandlerShop}>
        Shopping cart process
      </Button>
      {isOpened && (
        <StyledModal>
          <CloseWrapper onClick={changeHandler}>
            <Image src="./branding/svg/modalclose.svg" />
          </CloseWrapper>
          <div
            style={{
              marginTop: 10,
              marginLeft: 30,
              marginRight: 30,
              marginBottom: 10,
              textAlign: 'center',
            }}
          >
            <Image src={`./branding/svg/indicator` + isNumber + `.svg`} alt="sellyourdevice" />
            <Text
              font="heading_sm"
              color="text_primary"
              mt="10px"
              mb="10px"
              style={{ fontSize: 20, textAlign: 'center' }}
            >
              Onboarding Example
            </Text>
            <ButtonWrapper>
              <Button
                size={isMobile ? 'Small' : 'Medium'}
                Secondary
                onClick={Handleminus}
                style={{ marginRight: 5, marginLeft: 5, marginTop: 10, marginBottom: 10 }}
              >
                Secondary Button
              </Button>
              <Button
                size={isMobile ? 'Small' : 'Medium'}
                onClick={Handleplus}
                style={{ marginRight: 5, marginLeft: 5, marginTop: 10, marginBottom: 10 }}
              >
                Primary Button
              </Button>
            </ButtonWrapper>
          </div>
        </StyledModal>
      )}
      {isOpenedShop && (
        <StyledModal>
          <CloseWrapper onClick={changeHandlerShop}>
            <Image src="./branding/svg/modalclose.svg" />
          </CloseWrapper>
          <div
            style={{
              marginTop: 10,
              marginLeft: 30,
              marginRight: 30,
              marginBottom: 10,
              textAlign: 'center',
            }}
          >
            <Image
              src={`./branding/svg/indicatorshop` + isNumber + `.svg`}
              width={170}
              alt="sellyourdevice"
            />
            <Text
              font="heading_sm"
              color="text_primary"
              mt="10px"
              mb="10px"
              style={{ fontSize: 20, textAlign: 'center' }}
            >
              Onboarding Example
            </Text>
            <ButtonWrapper>
              <Button
                size={isMobile ? 'Small' : 'Medium'}
                Secondary
                onClick={Handleminus}
                style={{ marginRight: 5, marginLeft: 5, marginTop: 10, marginBottom: 10 }}
              >
                Secondary Button
              </Button>
              <Button
                size={isMobile ? 'Small' : 'Medium'}
                onClick={Handleplus}
                style={{ marginRight: 5, marginLeft: 5, marginTop: 10, marginBottom: 10 }}
              >
                Primary Button
              </Button>
            </ButtonWrapper>
          </div>
        </StyledModal>
      )}
    </div>
  );
};
