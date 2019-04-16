let burger = document.getElementById('burger-button');
let menu_BG = document.getElementById('menu-BG');
let menu_nav = document.getElementById('menu-nav');


burger.addEventListener('click',()=>{
    menu_BG.classList.toggle('burger_Clicked');
    burger.classList.toggle('is-active')
    menu_nav.classList.toggle('ShowMenu');
    setTimeout(()=>menu_nav.classList.toggle('oppacityMenuNav'),100);
})