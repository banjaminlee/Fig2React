import React, { FC, useEffect, useState, useCallback } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import Flex from '../Flex';
import { ModalProps, CustomModalProps, DrawerModalProps } from './types';
import Text from 'components/Text';
import { Button } from '../Button';
import Image from '../Image';
import { lightTheme } from 'styles/theme';

const Container = styled(Flex)`
  position: fixed;
  left: 0;
  top: 0;
  display: block;
  width: 100%;
  height: 100%;
  padding-left: 0px;
  overflow-x: hidden;
  overflow-y: auto;
  outline: 0;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
  z-index: 1100;
`;

const ModalBody = styled(Flex)`
  flex-direction: column;
  width: 300px;
  height: auto;
  margin: 60px auto;
  padding: 10px;
  transition: transform 0.3s ease-out;
  transform: none;
  background: ${({ theme }) => theme.colors.background_primary};
  box-shadow: ${({ theme }) => theme.shadows.shadow08};
  border-radius: 20px;

  ${({ theme }) => theme.mediaQueries.sm} {
    height: auto;
    min-width: 300px;
    max-width: 75%;
    padding: 2.5rem 3rem 0 3rem;
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    max-width: 55%;
  }
`;

const Modal: FC<ModalProps> = ({ className = 'modal-body', children, ...props }) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <ThemeProvider theme={lightTheme}>
      <Container className="modal">
        <ModalBody {...props} className={className}>
          {children}
        </ModalBody>
      </Container>
    </ThemeProvider>
  );
};

export default Modal;

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

export const CustomModal: FC<CustomModalProps> = ({ label, header, content }) => {
  const [isOpened, setIsOpened] = useState(false);

  const changeHandler = useCallback(() => {
    setIsOpened((prev) => !prev);
  }, []);

  const subscribe = () => {
    //functionality after click subscribe button
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
        Open Modal
      </Button>

      {isOpened && (
        <StyledModal>
          <CloseWrapper onClick={changeHandler} data-testid={'customModalBtn'}>
            <Image src="./branding/svg/modalclose.svg" />
          </CloseWrapper>
          <div style={{ marginTop: 10, marginLeft: 30, marginRight: 30, marginBottom: 10 }}>
            <Text font="bodySmall" mt="10px" mb="10px" style={{ whiteSpace: 'inherit' }}>
              {label}
            </Text>
            <Text font="headingMediumBold3" mb="10px" style={{ whiteSpace: 'inherit' }}>
              {header}
            </Text>
            <Text font="bodySmall" mb="0px" style={{ whiteSpace: 'inherit' }}>
              {content}
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
    </div>
  );
};

const NavigationBody = styled.div`
  position: fixed;
  z-index: 1200;
  inset: 0px;
`;

const OpacityWrapper = styled.div`
  opacity: 1;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  z-index: -1;
  position: fixed;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5);
  -webkit-tap-highlight-color: transparent;
`;

const BodyWrapper = styled.div`
  left: auto;
  right: 0;
  top: 0;
  flex: 1 0 auto;
  height: 100%;
  display: flex;
  outline: 0;
  z-index: 1200;
  position: fixed;
  max-width: 100%;
  overflow-y: auto;
  flex-direction: column;
  -webkit-overflow-scrolling: touch;
  background: white;
  animation-name: notianimation;
  animation-duration: 0.5s;
  width: 75%;
  @keyframes notianimation {
    0% {
      right: -75%;
    }
    100% {
      right: 0;
    }
  }
`;

const BodyHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;
const HeaderTitle = styled.div``;

export const DrawerModal: FC<DrawerModalProps> = ({ State, Headertitle, children }) => {
  const [open, setOpen] = useState(State);

  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };
  return (
    <>
      <Button size="Small" onClick={handleOpen}>
        Open Modal
      </Button>

      {open && (
        <NavigationBody>
          <OpacityWrapper onClick={handleClose}></OpacityWrapper>
          <BodyWrapper>
            <BodyHeader>
              <HeaderTitle>{Headertitle}</HeaderTitle>
              <CloseWrapper onClick={handleClose} data-testid={'drawerModalBtn'}>
                <Image src="./branding/svg/modalclose.svg" />
              </CloseWrapper>
            </BodyHeader>
            {children}
          </BodyWrapper>
        </NavigationBody>
      )}
    </>
  );
};
