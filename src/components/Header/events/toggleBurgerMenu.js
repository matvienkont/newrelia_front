export const toggleBurgerMenu = () => 
{
    const nav = document.querySelector(".links-wrapper");
    const navLinks = document.querySelectorAll(".links-wrapper>li");
    nav.classList.add("add-transition");
    
    navLinks.forEach((link, index) =>
    {
        if(link.style.animation.includes("navLinksFadeIn"))
        {
            link.style.animation = `navLinksFadeOut 0.2s ease backwards 1`;
            setTimeout(() => {
                link.style.animationPlayState = `paused`;
            }, 400);
        } else 
        {
            link.style.animation = `navLinksFadeIn 0.5s ease forwards ${index / 7 + 0.3}s`;
        }
    })
    
    nav.classList.toggle("header-links-mobile-active");
}