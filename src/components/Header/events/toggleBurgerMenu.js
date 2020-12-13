export const toggleBurgerMenu = (linkClick) => 
{
    const burger = document.querySelector(".burger");
    const burgerWrapper = document.querySelector(".burgerWrapper")
    const burgerIsActive = !(burgerWrapper.offsetWidth === 0 && burgerWrapper.offsetHeight === 0)
    const nav = document.querySelector(".links-wrapper");
    const closeFieldMenu = document.querySelector(".closeMenuField");
    
    console.log(burgerIsActive)
    if(burgerIsActive)
    {
    const navLinks = document.querySelectorAll(".links-wrapper>li");
    nav.classList.add("add-transition");
        
            navLinks.forEach((link, index) =>
            {
                let i = 1;
                let scopeLink = link
                if(linkClick)
                {
                    console.log("1");
                    scopeLink.style.animation = `navLinksFadeOut 0.2s ease backwards 1s running`;
                } else {
                        if(scopeLink.style.animation.includes("navLinksFadeIn"))
                        {
                            console.log("2");
                            scopeLink.style.animation = `navLinksFadeOut 0.2s ease backwards 1s running`;
                        } else 
                        {
                            console.log("3");
                            scopeLink.style.animation = `navLinksFadeIn 0.5s ease forwards ${index / 7 + 0.3}s running`
                        }
                }
                i++
            });
        

            nav.classList.toggle("header-links-mobile-active");
            burger.classList.toggle("toggle");
            closeFieldMenu.classList.toggle("closeMenuFieldActive");
    }
}