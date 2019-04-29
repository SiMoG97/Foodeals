let burger = document.getElementById('burger-button');
let menu_BG = document.getElementById('menu-BG');
let menu_nav = document.getElementById('menu-nav');
let body = document.getElementsByTagName('body')[0];

burger.addEventListener('click',()=>{
    menu_BG.classList.toggle('burger_Clicked');
    burger.classList.toggle('is-active');
    menu_nav.classList.toggle('ShowMenu');
    setTimeout(()=>menu_nav.classList.toggle('oppacityMenuNav'),100);
    body.classList.toggle('positionPreventScrolling');
})

const navChoices = document.querySelectorAll('.navChoices');

navChoices.forEach(navChoice =>{
    navChoice.addEventListener('click',()=>{
        menu_BG.classList.remove('burger_Clicked');
        burger.classList.remove('is-active');
        menu_nav.classList.remove('ShowMenu');
        setTimeout(()=>menu_nav.classList.remove('oppacityMenuNav'),100);
        body.classList.remove('positionPreventScrolling');
    })
});


/* Comment Ca march Navigation tabs */

let comCaMarchContent = [
{
    Number:'01',
    image:'./img/samsung1.png',
    svgIcon:'./img/note.svg',
    title:'INSCRIVEZ-VOUS',
    content:"Créez directement votre compte Foodeals, ou via la synchronisation avec vos comptes Facebook ou Gmail."},
{
    Number:'02',
    image:'./img/samsung2.png',
    svgIcon:'./img/location.svg',
    title:'LOCALISEZ-VOUS',
    content:'Cherchez des restaurants, boulangeries, cafés, ou même des supermarchés à proximité qui offrent des plats ou produits qui répondront à vos besoins, tout en rationalisant vos achats quotidiens.'},
{
    Number:'03',
    image:'./img/samsung3.png',
    svgIcon:'./img/product.svg',
    title:'PASSEZ VOTRE COMMANDE',
    content:'Choisissez votre repas à n’importe quel moment, confirmer l’heure de la récupération, payez facilement et en toute sécurité via l’application et enregistrez le code obtenu.'},
{
    Number:'04',
    image:'./img/samsung4.png',
    svgIcon:'./img/tray.svg',
    title:'RÉCUPÉREZ VOTRE PANIER',
    content:'A l’heure prévue passez au point de vente, présentez votre code et retrouvez votre achat.'}
];

let radioTabs = document.getElementsByName('navTabs');

let commeCaImg = document.getElementById('commeCaImg');
let commeCaNumber = document.getElementById('commeCaNumber');
let commeCaSVG = document.getElementById('commeCaSVG');
let commeCaTitle = document.getElementById('commeCaTitle');
let commeCaContent = document.getElementById('commeCaContent');
let comCaMarchPartRight = document.getElementById('comCaMarchPartRight');


function navTabFunc(event){
    if(event.target.tagName == "INPUT"){
        for( let i = 0 ; i < radioTabs.length ; i++ ){
            if(radioTabs[i].checked){
                comCaMarchPartRight.style.opacity = 0;
                setTimeout(()=>{
                    commeCaImg.src = comCaMarchContent[i].image;
                    commeCaNumber.innerHTML = comCaMarchContent[i].Number;
                    commeCaSVG.src = comCaMarchContent[i].svgIcon;
                    commeCaTitle.innerHTML = comCaMarchContent[i].title;
                    commeCaContent.innerHTML = comCaMarchContent[i].content;
                    comCaMarchPartRight.style.opacity = 1;
                } ,300); 
            }
        }
    }
}


/* scroll fix navbar */ 
let navContainer = document.getElementById('navContainer'); 
let partnerButton = document.getElementById('partnerButton');
let Y=0;
let count=0;
let foodLogo = document.getElementById('logo');
function scrollFixNav(){
    if(window.innerWidth>767){
        if(window.scrollY >= 80){
            if(window.scrollY>Y){
                Y=window.scrollY;
                navContainer.classList.remove('navFixedScrollUp');
                navContainer.classList.add('navScrollDown');
                partnerButton.classList.add('partnerStyleOnSCroll');
                foodLogo.classList.add('logoStyle')
            }else{
                Y=window.scrollY;
                navContainer.classList.add('navFixedScrollUp');
            }
        }else{
            navContainer.classList.remove('navFixedScrollUp');
            navContainer.classList.remove('navScrollDown');
            partnerButton.classList.remove('partnerStyleOnSCroll');
            foodLogo.classList.remove('logoStyle')
        } 
    }
    if(window.scrollY >= 850){
        document.getElementById('burgerCircle').style.fill = '#30C6B7';
        document.getElementsByClassName('hamburger-inner')[0].classList.add('changeBurgerColor');
        document.getElementById('partnerButton').classList.add('partnerMobileScroll');
    }else{
        document.getElementById('burgerCircle').style.fill = '#fff';
        document.getElementsByClassName('hamburger-inner')[0].classList.remove('changeBurgerColor');
        document.getElementById('partnerButton').classList.remove('partnerMobileScroll');
    }
} 

// let testimonyContainer = document.getElementsByClassName('testimony-container')[0];

function removeClasses(){
    if(window.innerWidth<768){
        navContainer.classList.remove('navFixedScrollUp');
        navContainer.classList.remove('navScrollDown');
        partnerButton.classList.remove('partnerStyleOnSCroll');
        // testimonyContainer.classList.add('center');
    }
}

/* Testimoials Script */

let profilePics = document.getElementsByClassName('testimony-pic');
let socialMediaDivs = document.getElementsByClassName('testimony-social-media');

function show(event){
    if(window.innerWidth>768){
        let numberOfDiv = parseInt(event.target.id[event.target.id.length - 1]);
        socialMediaDivs[numberOfDiv - 1].style.display = 'flex ';
        setTimeout( () => socialMediaDivs[numberOfDiv - 1].classList.add('show'),100);
    }
    
}

function hideOnLeave(){
    if (window.innerWidth>768){
        for(let i = 0 ; i < socialMediaDivs.length ; i++){
            socialMediaDivs[i].classList.remove('show');
            setTimeout( () => socialMediaDivs[i].style.display = 'none' ,100);
        }
    }
    
}