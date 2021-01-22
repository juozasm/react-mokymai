import React from 'react'

const useIsMounted = () => {
  const isMounted = React.useRef(false);
  React.useEffect(() => {
    isMounted.current = true;
    return () => (isMounted.current = false); // will unmount atitikmuo
  }, []);
  return isMounted;
};

  export default useIsMounted