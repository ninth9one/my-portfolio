import { useEffect } from 'react';

const ScrollToRefresh = () => {
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        window.location.reload();
      }
    };

    window.addEventListener('scroll', handleScroll);

  
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return null;
};

export default ScrollToRefresh;