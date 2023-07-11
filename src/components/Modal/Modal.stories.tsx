import React, { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import { Input } from '../Input';
import Modal, { CustomModal, DrawerModal } from './';
import { Button } from '../Button';
import Text from '../Text';
import Image from '../Image';

export default {
  title: 'Components/Modal',
  argTypes: {},
};

const Template = (args) => <CustomModal {...args} />;

export const Main = Template.bind({});
Main.args = {
  label: '',
  header: '',
  content: '',
};

const StyledModal = styled(Modal)`
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
  const [isSecondOpened, setIsSecondOpened] = useState(false);

  const changeHandler = useCallback(() => {
    setIsOpened((prev) => !prev);
  }, []);

  const subscribe = () => {
    //functionality after click subscribe button
  };

  const changeSecondHandler = useCallback(() => {
    setIsSecondOpened((prev) => !prev);
  }, []);

  const [input, setInput] = useState({
    name: '',
    value: '',
  });

  const changeInputHandler = useCallback(({ name, value }) => {
    setInput({
      name,
      value,
    });
  }, []);

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

  const [openThird, setOpenThird] = useState(false);
  const [data, setData] = useState<boolean>(true);

  const handleThirdOpen = () => {
    setOpenThird(true);
  };

  useEffect(() => {
    setOpenThird(false);
    setData(true);
  }, [data]);

  return (
    <div>
      <Button size="Small" onClick={changeHandler}>
        Open First Modal
      </Button>
      <Button size="Small" onClick={changeSecondHandler} style={{ marginLeft: 10 }}>
        Open Second Modal
      </Button>
      <Button size="Small" onClick={handleThirdOpen} style={{ marginLeft: 10 }}>
        Open Third Modal
      </Button>
      {openThird && <DrawerModal State={openThird} />}
      {isOpened && (
        <StyledModal>
          <CloseWrapper onClick={changeHandler}>
            <Image src="./branding/svg/modalclose.svg" />
          </CloseWrapper>
          <div style={{ marginTop: 10, marginLeft: 30, marginRight: 30, marginBottom: 10 }}>
            <Text font="bodySmall" mt="10px" mb="10px" style={{ whiteSpace: 'inherit' }}>
              Label
            </Text>
            <Text font="headingMediumBold3" mb="10px" style={{ whiteSpace: 'inherit' }}>
              Modal heading
            </Text>
            <Text font="bodySmall" mb="0px" style={{ whiteSpace: 'inherit' }}>
              Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac
              facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum
              at eros.
            </Text>
            <ButtonWrapper>
              <Button
                size={isMobile ? 'Small' : 'Medium'}
                Secondary
                onClick={subscribe}
                style={{ marginRight: 5, marginLeft: 5, marginTop: 10, marginBottom: 10 }}
              >
                Secondary Button
              </Button>
              <Button
                size={isMobile ? 'Small' : 'Medium'}
                onClick={subscribe}
                style={{ marginRight: 5, marginLeft: 5, marginTop: 10, marginBottom: 10 }}
              >
                Primary Button
              </Button>
            </ButtonWrapper>
          </div>
        </StyledModal>
      )}
      {isSecondOpened && (
        <StyledModal>
          <CloseWrapper onClick={changeSecondHandler}>
            <Image src="./branding/svg/modalclose.svg" />
          </CloseWrapper>
          <div style={{ marginTop: 10, marginLeft: 30, marginRight: 30, marginBottom: 10 }}>
            <Text font="bodySmall" mt="10px" mb="10px" style={{ whiteSpace: 'inherit' }}>
              Label
            </Text>
            <Text font="headingMediumBold3" mb="10px" style={{ whiteSpace: 'inherit' }}>
              Modal heading
            </Text>
            <Text font="bodySmall" mb="0px" style={{ whiteSpace: 'inherit' }}>
              Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac
              facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum
              at eros.
            </Text>
            <Input
              id="email"
              name={input.name}
              value={input.value}
              placeholder="yourname@fig2react.com"
              cbHandler={changeInputHandler}
              style={{ paddingTop: 12, paddingBottom: 12, marginTop: 10 }}
            />
            <ButtonWrapper>
              <Button
                size={isMobile ? 'Small' : 'Medium'}
                Secondary
                onClick={subscribe}
                style={{ marginRight: 5, marginLeft: 5, marginTop: 10, marginBottom: 10 }}
              >
                Secondary Button
              </Button>
              <Button
                size={isMobile ? 'Small' : 'Medium'}
                onClick={subscribe}
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
