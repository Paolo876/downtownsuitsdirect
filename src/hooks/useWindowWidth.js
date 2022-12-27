import React, { useState, useEffect } from 'react';

export function useWindowWidth() {
    const [width, setWidth] = useState(window.innerWidth)

    useEffect(() => {
      const handleResize = debounce(() => setWidth(window.innerWidth), 250)
  
      window.addEventListener('resize', handleResize);
  
      return () => {
        window.removeEventListener('resize', handleResize);
      }
    }, [])
  
    return { width }
  
}

function debounce(fn, ms) {
  let timer;
  return _ => {
    clearTimeout(timer);
    timer = setTimeout(_ => {
      timer = null;
      fn.apply(this, arguments);
    }, ms);
  };
}