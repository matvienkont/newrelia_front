export const toggleBurgerMenu = (linkClick) => 
{
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".links-wrapper");
    const closeFieldMenu = document.querySelector(".closeMenuField");

    const navLinks = document.querySelectorAll(".links-wrapper>li");
    nav.classList.add("add-transition");

        navLinks.forEach((link, index) =>
        {
            if(linkClick)
            {
                link.style.animationPlayState = `paused`;
            } else {
                    if(link.style.animation.includes("navLinksFadeIn"))
                    {
                        link.style.animation = `navLinksFadeOut 0.2s ease backwards 1`;
                        setTimeout(() => {
                            link.style.animationPlayState = `paused`;
                        }, 200);
                    } else 
                    {
                        link.style.animation = `navLinksFadeIn 0.5s ease forwards ${index / 7 + 0.3}s running`;
                    }
            }
        });

    nav.classList.toggle("header-links-mobile-active");
    burger.classList.toggle("toggle");
    closeFieldMenu.classList.toggle("closeMenuFieldActive");
}