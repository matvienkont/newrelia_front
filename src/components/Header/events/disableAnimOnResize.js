import { useLayoutEffect } from 'react';

export function useWindowSize() {
    useLayoutEffect(() => {
      	let resizeTimer;
    	function updateSize() {
        	document.body.classList.add("resize-animation-stopper");
			clearTimeout(resizeTimer);
			console.log("CALL");
        	resizeTimer = setTimeout(() => {
        	    document.body.classList.remove("resize-animation-stopper");
        	}, 400);
    	}
    	window.addEventListener('resize', updateSize);
    	return () => window.removeEventListener('resize', updateSize);
  	}, []);
}