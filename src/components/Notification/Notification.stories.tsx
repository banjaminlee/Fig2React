import React from 'react';
import styled from 'styled-components';
import NotificationComponent from './index';
import { NotificationProps, PositionProps } from './types';
import Text from '../Text';
import { Button } from '../Button';

export default {
  title: 'Components/Notification',
  argTypes: {},
};

export const NotificationStory = () => {
  const [position, setPosition] = React.useState<PositionProps>('top-right');
  const [autoDelete, setAutoDelete] = React.useState(true);
  const [autoCloseTime, setAutoCloseTime] = React.useState(3000);
  const [alerts, setAlerts] = React.useState<NotificationProps[]>([]);

  const setNotification = (position, msg, type, autoDelete = false, autoCloseTime = 3000) => {
    setPosition(position);
    setAutoDelete(autoDelete);
    setAutoCloseTime(autoCloseTime);
    const errorAlert: NotificationProps[] = [
      { description: msg, type, title: type.toUpperCase(), id: Math.random().toString() },
    ];
    setAlerts(errorAlert);
  };

  const onclose = () => {};

  return (
    <>
      <CardDiv style={{ padding: 20 }}>
        <Text font="rocRegular" mt="10px" mb="10px" style={{ whiteSpace: 'inherit' }}>
          Default Notification
        </Text>
        <Button
          size="Small"
          onClick={() =>
            setNotification(
              'top-right',
              `This is the success text. ${(Math.random() + 1).toString(36).substring(7)}`,
              'success',
              true,
            )
          }
        >
          Top Right Success
        </Button>
      </CardDiv>
      <CardDiv style={{ padding: 20 }}>
        <Text font="rocRegular" mt="10px" mb="10px" style={{ whiteSpace: 'inherit' }}>
          Positional Notifications
        </Text>
        <Button
          size="Small"
          onClick={() =>
            setNotification('bottom-right', 'This is the critical alert text', 'error', true)
          }
        >
          Bottom Right Error
        </Button>
        <Button
          size="Small"
          onClick={() =>
            setNotification('bottom-left', 'This is the warning text', 'warning', true)
          }
        >
          Bottom Left Warning
        </Button>
        <Button
          size="Small"
          onClick={() => setNotification('top-right', 'This is the info text', 'info', true)}
        >
          Top Right Info
        </Button>
        <Button
          size="Small"
          onClick={() => setNotification('top-left', 'This is the success text', 'success', true)}
        >
          Top Left Success
        </Button>
      </CardDiv>
      <CardDiv style={{ padding: 20 }}>
        <Text font="rocRegular" mt="10px" mb="10px" style={{ whiteSpace: 'inherit' }}>
          Auto close enable Notification
        </Text>
        <Button
          size="Small"
          onClick={() => setNotification('top-right', 'This is the success text', 'success', true)}
        >
          Top Right
        </Button>
      </CardDiv>
      <CardDiv style={{ padding: 20 }}>
        <Text font="rocRegular" mt="10px" mb="10px" style={{ whiteSpace: 'inherit' }}>
          Auto close Notification after 4000ms
        </Text>
        <Button
          size="Small"
          onClick={() =>
            setNotification('top-right', 'This is the success text', 'success', true, 4000)
          }
        >
          Top Right
        </Button>
      </CardDiv>
      <CardDiv style={{ padding: 20 }}>
        <Text font="rocRegular" mt="10px" mb="10px" style={{ whiteSpace: 'inherit' }}>
          Maximum Limit control
        </Text>
        <Button
          size="Small"
          onClick={() =>
            setNotification('top-right', 'This is the success text', 'success', true, 4000)
          }
        >
          Top Right
        </Button>
      </CardDiv>
      <CardDiv style={{ padding: 20 }}>
        <Text font="rocRegular" mt="10px" mb="10px" style={{ whiteSpace: 'inherit' }}>
          Do something on Notification close
        </Text>
        <Button
          size="Small"
          onClick={() =>
            setNotification('top-right', 'This is the success text', 'success', false, 3000)
          }
        >
          Top Right
        </Button>
      </CardDiv>
      <NotificationComponent
        notifications={alerts}
        position={position}
        autoDelete={autoDelete}
        autoDeleteTime={autoCloseTime}
        maxLimit={3}
        onClose={onclose}
      />
    </>
  );
};

const CardDiv = styled.div`
  background: ${({ theme }) => theme.colors.backPrimary};
  box-shadow: 0px 1px 4px rgb(0 0 0 / 10%);
  border-radius: 2px;
  padding: 15px 10px 15px 10px;
`;
