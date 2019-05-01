const partnerInputs = document.querySelectorAll('input');
const patterns ={
    phone:/^\d{9}$/,
    email:/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
    postCode:/^\d{5}$/
}

function validate(field , regex){
    if(!regex.test(field.value)){
        field.classList.add('regexInput')
        field.nextElementSibling.classList.add('regexLabel');
    }else{
        field.classList.remove('regexInput');
        field.nextElementSibling.classList.remove('regexLabel');
    }
}
partnerInputs.forEach(input => {
    input.addEventListener('keyup', e =>{
        if(input.value !== ''){
            input.nextElementSibling.classList.add('activeLabel');
            input.classList.add('activeInput');
          }else{
            input.nextElementSibling.classList.remove('activeLabel');
            input.classList.remove('activeInput');
          }
          if(patterns.hasOwnProperty(e.target.name)){
            validate(e.target, patterns[e.target.name]);    
          }
    })
});

const nextSbmtBtn = document.querySelector('#nextSbmtBtn');
const submited_form = document.querySelector('#submited_form')
let count=0;
const progressiveSpan = document.querySelector('#progressiveSpan');
nextSbmtBtn.addEventListener('click',() =>{
    document.querySelector('#formFirstStep').style.display="none";
    document.querySelector('#formSecondeStep').style.display="flex";
    nextSbmtBtn.innerHTML = 'Send'
    if(count % 2 !== 0){
        nextSbmtBtn.type="submit";
    }
    count++
    if(count === 2){
        document.querySelector('#formSecondeStep').style.display="none";
        document.querySelector('#submited_form').style.display="flex";
        nextSbmtBtn.style.display= 'none'
    }
    if(count === 1){
        progressiveSpan.style.width = '50%'
    }
    if(count === 2){
        progressiveSpan.style.width = '0%'
    }
    console.log(count)
})

