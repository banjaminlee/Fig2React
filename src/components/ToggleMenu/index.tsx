import React, { useEffect } from 'react';
import styled from 'styled-components';
import { ToggleMenuProps, MenuStyle } from './types';
import Text from 'components/Text';

const HorizontalMargin = styled.span`
  margin-left: 13px;
  margin-right: 13px;
  & .icon {
    font-size: 13px;
    color: ${({ theme }) => theme.colors.primary_toggle};
  }
`;

const MenuTrigger = styled.div`
  display: flex;
  cursor: pointer;
`;

const Menu = styled.div<MenuStyle>`
  position: absolute;
  margin-top: 10px;
  background-color: ${({ theme }) => theme.colors.background_primary};
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.18);
  border-radius: 15px;
  padding: 10px 10px;
  width: fit-content;
  cursor: pointer;
  opacity: ${({ open }) => (open ? 1 : 0)};
  visibility: ${({ open }) => (open ? 'visible' : 'hidden')};
  transform: ${({ open }) => (open ? 'translateY(0)' : 'translateY(-20px)')};
  transition: 500ms ease;
`;

const MenuItemWrapper = styled.ul`
  padding: 0px;
  margin: 0px;
`;

const MenuItem = styled.li`
  display: flex;
  margin: 10px auto;
  padding: 5px 10px;
`;

const ToggleMenu: React.FC<ToggleMenuProps> = ({ title, items }) => {
  const [open, setOpen] = React.useState(false);
  const menuRef = React.useRef() as React.MutableRefObject<HTMLInputElement>;

  const handler = (e: any) => {
    if (!menuRef.current.contains(e.target)) {
      setOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handler);
    return () => {
      document.removeEventListener('mousedown', handler);
    };
  });

  return (
    <React.Fragment>
      <MenuTrigger onClick={() => setOpen(!open)} ref={menuRef}>
        <Text
          font="headingMedium5"
          color={open ? 'text_primary' : 'text_secondary'}
          style={{ cursor: 'pointer' }}
        >
          {title}
        </Text>
        <HorizontalMargin>
          <i
            color={open ? 'text_primary' : 'text_secondary'}
            className={`fa fa-chevron-${open ? 'up' : 'down'} icon`}
          ></i>
        </HorizontalMargin>
      </MenuTrigger>
      <Menu open={open}>
        <MenuItemWrapper>
          {items.map((item, index) => (
            <MenuItem key={index} onClick={() => item.onClick()}>
              {item.children}
            </MenuItem>
          ))}
        </MenuItemWrapper>
      </Menu>
    </React.Fragment>
  );
};

export default ToggleMenu;
