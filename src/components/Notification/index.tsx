import React from 'react';
import styled from 'styled-components';
import { NotificationsProps, NotificationProps } from './types';
import { Notification } from './Notification';

const NotificationComponent = ({
  notifications,
  position,
  autoDelete,
  autoDeleteTime = 3000,
  maxLimit = 5,
  onClose,
}: NotificationsProps) => {
  const [list, setList] = React.useState<NotificationProps[]>([]);

  React.useEffect(() => {
    if (list.length <= maxLimit + 1) {
      setList([...list, ...notifications]);
    } else {
      const updatedArray: NotificationProps[] = [...list];
      updatedArray.shift();
      setList([...updatedArray]);

      setTimeout(() => {
        setList([...updatedArray, ...notifications]);
      }, 500);
    }
  }, [notifications]);

  React.useEffect(() => {
    const interval = setInterval(() => {
      if (autoDelete && notifications.length && list.length) {
        deleteNotification(list[0].id);
      }
    }, autoDeleteTime);
    return () => {
      clearInterval(interval);
    };
  }, [notifications, list]);

  const deleteNotification = (id: string) => {
    const index = list.findIndex((e) => e.id === id);
    list.splice(index, 1);
    setList([...list]);
    if (onClose) {
      onClose();
    }
  };

  const topRight = () => {
    return <TopRight>{Notification(list, deleteNotification)}</TopRight>;
  };

  const bottomRight = () => {
    return <BottomRight>{Notification(list, deleteNotification)}</BottomRight>;
  };

  const topLeft = () => {
    return <TopLeft>{Notification(list, deleteNotification)}</TopLeft>;
  };

  const bottomLeft = () => {
    return <BottomLeft>{Notification(list, deleteNotification)}</BottomLeft>;
  };

  const positionalNotification = () => {
    switch (position) {
      case 'top-right':
        return topRight();
        break;
      case 'bottom-right':
        return bottomRight();
        break;
      case 'top-left':
        return topLeft();
        break;
      case 'bottom-left':
        return bottomLeft();
        break;
      default:
        return topRight();
        break;
    }
  };

  return <>{positionalNotification()}</>;
};

const TopRight = styled.div`
  transition: transform 0.6s ease-in-out;
  top: 12px;
  right: 12px;
  position: absolute;
  width: 30%;
`;

const BottomRight = styled.div`
  transition: transform 0.6s ease-in-out;
  bottom: 12px;
  right: 12px;
  position: absolute;
  width: 30%;
`;

const TopLeft = styled.div`
  top: 12px;
  left: 12px;
  transition: transform 0.6s ease-in;
  position: absolute;
  width: 30%;
`;

const BottomLeft = styled.div`
  position: absolute;
  transition: transform 0.6s ease-in-out;
  bottom: 12px;
  left: 12px;
  transition: transform 0.6s ease-in;
  width: 30%;
`;

export default NotificationComponent;
