import { useContext } from 'react';
import SidebarContext from '../context/SidebarContext';

const useSidebarContext = () => {
  const { isSidebar, toggleSidebar } = useContext(SidebarContext);
  return { isSidebar, toggleSidebar };
};

export default useSidebarContext;
