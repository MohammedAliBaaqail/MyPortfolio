// var sections = document.getElementsByTagName("section"),
//     li       = document.getElementsByClassName("li"),
//     i;

// window.onscroll = function () {
    
//     for ( i = 0 ; i < sections.length ; i = i + 1 ) {
        
//         if ( window.scrollY > sections[i].offsetTop && window.scrollY < sections[i].offsetTop + sections[i].offsetHeight ) {
            
//             li[i].classList.add("red");
//             sections[i].classList.add("red");
            
//         } else {
//             li[i].classList.remove("red");
//             sections[i].classList.remove("red");
//         }
        
//     }
    
// }

// ( contentPosition < screenPosition && (contentPosition+screenPosition) > screenPosition )
backInLeft = document.querySelectorAll(".backInLeft");
backInRight = document.querySelectorAll(".backInRight");
rubberBand = document.querySelectorAll(".rubberBand");
listOfEffects = ['backInLeft','backInRight','rubberBand']
list = [backInLeft,backInRight,rubberBand];

items = document.querySelectorAll(".container");




window.addEventListener("scroll", () => {
    for ( i = 0 ; i < list.length ; i = i + 1 ) {
    let contentPosition1 = list[i].getBoundingClientRect().top;
    let screenPosition1 = window.innerHeight ;

    }

    for ( j = 0 ; j < list.length ; j = j + 1 ) {
    for ( i = 0 ; i < list[j].length ; i = i + 1 ) {
   
    
    let contentPosition = list[j][i].getBoundingClientRect().top;
    let screenPosition = window.innerHeight ;

    if ( contentPosition < screenPosition ) {
        list[j][i].classList.add("op");
        list[j][i].classList.add("animate__animated");
        list[j][i].classList.add(`animate__${listOfEffects[j]}`);
    }
    else   {
        list[j][i].classList.remove("op");
        
        list[j][i].classList.remove(`animate__${listOfEffects[j]}`);
            }
    }//end of 'i' for loop
    }//end of 'j' for loop
    }//end of arrow function 
    )//end of window.addEventListener




const li=document.querySelectorAll(".links");
const sec=document.querySelectorAll("section");

function activeMenu(){
let len=sec.length;
 while(--len && window.scrollY + 97 < sec[len].offsetTop){} 
 li.forEach(ltx => ltx.classList.remove("active"));
  li[len].classList.add("active");
}
activeMenu();
window.addEventListener("scroll", activeMenu); 