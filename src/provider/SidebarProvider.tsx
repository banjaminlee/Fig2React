import { FC, useState } from 'react';
import SidebarContext from '../context/SidebarContext';

const SidebarProvider: FC = ({ children }) => {
  const [isSidebar, setIsSidebar] = useState(false);

  const toggleSidebar = (status: boolean) => {
    setIsSidebar(status);
  };

  return (
    <SidebarContext.Provider value={{ isSidebar, toggleSidebar }}>
      {children}
    </SidebarContext.Provider>
  );
};

export default SidebarProvider;
