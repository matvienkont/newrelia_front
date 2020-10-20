import { useLayoutEffect } from 'react';

export function useWindowSize() {
    useLayoutEffect(() => {
		  let resizeTimer;
		  
    	function updateSize() {
        	document.body.classList.add("resize-animation-stopper");
			clearTimeout(resizeTimer);
        	resizeTimer = setTimeout(() => {
        	    document.body.classList.remove("resize-animation-stopper");
        	}, 50);
		}
		
		const disableAnimToggledBurgerOnResize = () =>
		{
			const navLinks = document.querySelectorAll(".links-wrapper>li");

			const burger = document.querySelector(".burger");
			if(burger.classList.value.includes("toggle"))
			{
				const nav = document.querySelector(".links-wrapper");
				const closeFieldMenu = document.querySelector(".closeMenuField");

				nav.classList.toggle("header-links-mobile-active");
				burger.classList.toggle("toggle");
				closeFieldMenu.classList.toggle("closeMenuFieldActive");
			}
			
			navLinks.forEach((link, index) =>
        	{	
				link.style.animation = `navLinksFadeOut 0.2s ease backwards 1`;
				link.style.animationPlayState = `paused`;
			});
		}


    	window.addEventListener('resize', () => {
			disableAnimToggledBurgerOnResize();
			updateSize();
		});
    	return () => window.removeEventListener('resize', updateSize);
  	}, []);
}