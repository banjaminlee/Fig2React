export type NotificationsProps = {
  notifications: NotificationProps[];
  position?: 'top-right' | 'top-left' | 'bottom-left' | 'bottom-right';
  autoDelete?: boolean;
  autoDeleteTime?: number;
  maxLimit?: number;
  onClose?: () => void;
};

export type PositionProps = 'top-right' | 'top-left' | 'bottom-left' | 'bottom-right';

export type NotificationProps = {
  id: string;
  title: string;
  description: string;
  type: 'error' | 'warning' | 'success' | 'info';
};

export type NotificationContainerProps = {
  type: 'error' | 'warning' | 'success' | 'info';
};
