import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const usePageTitle = (title) => {
  const location = useLocation();
  const appTitle = 'GitFinders';

  useEffect(() => {
    document.title = title.trim() ? `${appTitle} | ${title}` : appTitle;
  }, [appTitle, location, title]);
};

export default usePageTitle;
