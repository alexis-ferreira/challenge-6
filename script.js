'use strict'

let btnAccordion = document.getElementsByClassName('accordion');
// console.log(btnAccordion.length);
let contentAccordion = document.getElementsByClassName('content');
// console.log(contentAccordion);

for (let i = 0; i < btnAccordion.length; i++){

    btnAccordion[i].addEventListener('click', function(){
        this.classList.toggle('active');
        // console.log(this);
        let content = this.nextElementSibling;
        if (content.style.maxHeight){
            content.style.maxHeight=null;
        }
        else{
            content.style.maxHeight = content.scrollHeight + "px";
        }
    });
}