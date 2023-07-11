import { createContext } from 'react';

interface SidebarContextProps {
  isSidebar: boolean;
  toggleSidebar: (status: boolean) => void;
}

const SidebarContext = createContext<SidebarContextProps>({
  isSidebar: false,
  toggleSidebar: () => {
    null;
  },
});

export default SidebarContext;
