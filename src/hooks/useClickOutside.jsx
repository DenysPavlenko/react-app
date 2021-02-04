import { useEffect } from 'react';

const useOnClickOutside = (ref, handler, isActive) => {
  useEffect(() => {
    const listener = e => {
      if (!ref.current || ref.current.contains(e.target)) { return; }
      handler(e);
    }
    if (isActive) {
      document.addEventListener('click', listener);
      return () => document.removeEventListener('click', listener);
    }
  }, [ref, handler, isActive]);
};

export default useOnClickOutside;
