import { useRef, useEffect, type MutableRefObject } from 'react';

const useOutsideClick = (
  callback: (event?: Event) => void
): MutableRefObject<null> => {
  const ref = useRef(null);

  useEffect(() => {
    const handleClick = (event: Event): void => {
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
