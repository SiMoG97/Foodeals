let burger = document.getElementById('burger-button');
let menu_BG = document.getElementById('menu-BG');
let menu_nav = document.getElementById('menu-nav');
let body = document.getElementsByTagName('body')[0];

burger.addEventListener('click',()=>{
    menu_BG.classList.toggle('burger_Clicked');
    burger.classList.toggle('is-active')
    menu_nav.classList.toggle('ShowMenu');
    setTimeout(()=>menu_nav.classList.toggle('oppacityMenuNav'),100);
    body.classList.toggle('positionFixed');
})


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
function scrollFixNav(){
    if(window.innerWidth>767){
        console.log(document.getElementsByTagName('nav')[0].classList);
        if(window.scrollY >= 80){
            if(window.scrollY>Y){
                Y=window.scrollY;
                navContainer.classList.remove('navFixedScrollUp');
                navContainer.classList.add('navScrollDown');
                partnerButton.classList.add('partnerStyleOnSCroll');
            }else{
                Y=window.scrollY;
                navContainer.classList.add('navFixedScrollUp');
            }
        }else{
            navContainer.classList.remove('navFixedScrollUp');
            navContainer.classList.remove('navScrollDown');
            partnerButton.classList.remove('partnerStyleOnSCroll');
        }
    }
} 

function removeClasses(){
    if(window.innerWidth<768){
        navContainer.classList.remove('navFixedScrollUp');
        navContainer.classList.remove('navScrollDown');
        partnerButton.classList.remove('partnerStyleOnSCroll');
    }  
}