'use strict'

let btnAccordion = document.getElementsByClassName('accordion');
// console.log(btnAccordion);
let contentAccordion = document.getElementsByClassName('content');
// console.log(contentAccordion);
let arrows = document.getElementsByClassName('arrow')
// console.log(arrows);
let box = document.getElementById('box');
// console.log(box);
// console.log(screen.width);

for (let i = 0; i < btnAccordion.length; i++){

    btnAccordion[i].addEventListener('click', function(){
        this.classList.toggle('active');
        // console.log(this);
        let content = this.nextElementSibling;
        // console.log(content);
        if (content.style.maxHeight){
            content.style.maxHeight=null;
            // console.log(content);
            arrows[i].style.transform='rotate(0deg)';
            btnAccordion[i].style.fontWeight="400";
            btnAccordion[i].style.color="";
            if (screen.width < 421){
                box.style.left='38px';
            } else{
                box.style.left='-93px';
            }
        }
        else{
            content.style.maxHeight = content.scrollHeight + "px";
            // console.log(content);
            arrows[i].style.transform='rotate(180deg)';
            btnAccordion[i].style.fontWeight="700";
            btnAccordion[i].style.color="hsl(238, 29%, 16%)";
            if (screen.width < 421){
                box.style.left='15px';
            } else{
                box.style.left='-125px';
            }
        }
    });
};