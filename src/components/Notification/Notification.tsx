import styled from 'styled-components';
import { Error, Warning, Info, Success, Close } from '../Svgs';
import { NotificationContainerProps, NotificationProps } from './types';

export const getIcon = (type: string) => {
  switch (type) {
    case 'info':
      return <Info color="#fff" />;
      break;
    case 'warning':
      return <Warning color="#fff" />;
      break;
    case 'error':
      return <Error color="#fff" />;
      break;
    case 'success':
      return <Success color="#fff" />;
      break;
    default:
      return <></>;
      break;
  }
};

export const Notification = (
  list: NotificationProps[],
  deleteNotification: (id: string) => void,
) => {
  return (
    <>
      {list.map((toast: NotificationProps, i: number) => (
        <NotificationContainer key={i} type={toast.type}>
          <IconButton onClick={() => deleteNotification(toast.id)}>
            <Close color="#fff" />
          </IconButton>
          <Icon>{getIcon(toast.type)}</Icon>
          <div>
            <p>{toast.description}</p>
          </div>
        </NotificationContainer>
      ))}
    </>
  );
};

const NotificationContainer = styled.div<NotificationContainerProps>`
  background-color: ${({ theme, type }) =>
    type === 'error'
      ? theme.colors.error
      : type === 'warning'
      ? theme.colors.warning
      : type === 'info'
      ? theme.colors.info
      : theme.colors.success};
  border: 2px solid transparent;
  border-radius: 4px;
  max-width: 480px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
  margin-top: 16px;
  display: flex;
  position: relative;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.white};
  padding: 10px 10px 10px 10px;
  animation-name: notianimation;
  animation-duration: 1.5s;
  @keyframes notianimation {
    0% {
      left: 100px;
      top: 0px;
    }
    50% {
      left: -10px;
    }
    100% {
      left: 0px;
      top: 0px;
    }
  }
`;

const Icon = styled.div`
  margin-top: auto;
  margin-bottom: auto;
  padding-left: 10px;
  padding-right: 12px;
  display: block;
  width: 30px;
  height: 30px;
  font-size: 30px;
  text-align: center;
  line-height: 30px;
`;

const IconButton = styled.button`
  outline: none;
  border: none;
  background: transparent;
  padding: 0;
  margin: 0;
  position: absolute;
  top: 10%;
  right: 15px;
  display: block;
  width: 28px;
  height: 28px;
  font-size: 28px;
  text-align: center;
  line-height: 28px;
`;
