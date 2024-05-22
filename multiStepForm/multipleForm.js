"use strict" ;


const form1 = document.getElementById("form1") ;
const form2 = document.getElementById("form2") ;
const form3 = document.getElementById("form3") ;


const progressEl = document.getElementById("progress") ;
const circles = document.querySelectorAll(".circle") ;

let currentActive = 1;

//-----------------------------------
//next form

function nextOne(){
    form1.style.left="-450px"
    form2.style.left = "25px"

  increamentCurrentActive();
   
    update();
}
//-----------------------------
function nextTwo(){
    form2.style.left="-450px"
    form3.style.left = "25px"


    
    increamentCurrentActive()
    update();
}
//-----------------------------
function backTwo(){
    form1.style.left="25px"
    form2.style.left = "450px"
 
    decreamentCurrentActive();
    update();
    
}
//-----------------------------

function backThree(){
    form2.style.left="25px"
    form3.style.left = "450px"

    decreamentCurrentActive();
    update();
}
//-----------------------------


//progress update
function update(){
     //update progress bar
    
    circles.forEach((circle , indx) =>{
        if(indx < currentActive){
            circle.classList.add("active")
        }else{
            circle.classList.remove("active")
        }


        //get all active classes
        const actives = document.querySelectorAll(".active");

        progressEl.style.width = ((actives.length -1) / (circles.length - 1)) * 100  +"%";
    });
}


function increamentCurrentActive(){

      //next progress number
      currentActive++;
      if(currentActive > circles.length){
          currentActive = circles.length;
      }
}

function decreamentCurrentActive(){
    currentActive--;
    if(currentActive < 1){
        currentActive = 1 ;

    }
}

//-----------------------------------
// BTN Events :

const btnsEvents = () => {
    const next1 = document.getElementById("next1") ;
    const next2 = document.getElementById("next2") ;
    const back2 = document.getElementById("back2") ;
    const back3 = document.getElementById("back3") ;

    //next1
    next1.addEventListener ("click", nextOne)

    //next2
    next2.addEventListener("click", nextTwo)

    //back2
    back2.addEventListener ("click", backTwo);

    //back3
    back3.addEventListener ("click", backThree);
};

document.addEventListener("DOMContentLoaded" , btnsEvents);
