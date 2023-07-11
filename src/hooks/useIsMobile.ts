import useMatchBreakpoints from './useMatchBreakpoints';

const useIsMobile = () => {
  const { isSm, isXs, isMd } = useMatchBreakpoints();
  const isMobile = isXs || isSm || isMd;
  return isMobile;
};

export default useIsMobile;
