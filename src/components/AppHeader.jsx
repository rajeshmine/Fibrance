import useIsMobile from '../hooks/useIsMobile';
import MobileHeader from './MobileHeader';
import StandardHeader from './StandardHeader';

function AppHeader() {
  const isMobile = useIsMobile(700);

  return isMobile ? <MobileHeader /> : <StandardHeader />;
}

export default AppHeader;