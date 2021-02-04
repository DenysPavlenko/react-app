import { useEffect } from 'react';

const toggleScroll = (hide) => {
  const html = document.querySelector('html');
  const documentWidth = document.documentElement.clientWidth;
  const windowWidth = window.innerWidth;
  const scrollBarWidth = windowWidth - documentWidth;
  if (hide) {
    html.style.overflowY = 'hidden';
    html.style.paddingRight = `${scrollBarWidth}px`;
  } else {
    html.style.overflowY = 'auto';
    html.style.paddingRight = 0;
  }
};

const useOnClickOutside = (isActive = true) => {
  useEffect(() => {
    if (isActive) {
      toggleScroll(true);
      return () => {
        toggleScroll(false);
      }
    }
  }, [isActive]);
};


export default useOnClickOutside;
