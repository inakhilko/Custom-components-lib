import { useRef, useEffect } from 'react';

const useOutsideClick = (callback: (event?: Event) => void) => {
  const ref = useRef(null);

  useEffect(() => {
    const handleClick = (event: Event) => {
      if (
        ref.current &&
        !(ref.current as HTMLElement).contains(event.target as HTMLElement)
      ) {
        callback();
      }
    };

    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, [ref]);

  return ref;
};

export default useOutsideClick;
