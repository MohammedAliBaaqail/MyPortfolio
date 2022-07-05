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





// [start] for adding animation effects on scroll

backInLeft = document.querySelectorAll(".backInLeft");
backInRight = document.querySelectorAll(".backInRight");
rubberBand = document.querySelectorAll(".rubberBand");
fadeInUp = document.querySelectorAll(".fadeInUp");

listOfEffects = ['backInLeft','backInRight','rubberBand','fadeInUp']
list = [backInLeft,backInRight,rubberBand,fadeInUp];



const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);


items = document.querySelectorAll(".container");

window.addEventListener("scroll", () => {
  

    for ( j = 0 ; j < list.length ; j = j + 1 ) {
    for ( i = 0 ; i < list[j].length ; i = i + 1 ) {
   
    
    let contentPosition = list[j][i].getBoundingClientRect().bottom;
    let screenPosition = window.innerHeight ;
    // console.log('vh',vh,j,i)
    // console.log('contentPosition',contentPosition)
    // console.log('screenPosition',screenPosition)

    if ( contentPosition < screenPosition && (contentPosition + vh) > screenPosition ) { 
        list[j][i].classList.add("op");
        list[j][i].classList.add("animate__animated");
        list[j][i].classList.add(`animate__${listOfEffects[j]}`);
    }
    else   {
        list[j][i].classList.remove("op");
        list[j][i].classList.add("animate__animated");
        list[j][i].classList.remove(`animate__${listOfEffects[j]}`);
            }
    }//end of 'i' for loop
    }//end of 'j' for loop
    }//end of arrow function 
    )//end of window.addEventListener
// [end]for adding animation effects on scroll


// [start] for active navigation 
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
// [end] for active navigation 



document.addEventListener('keydown', function(e) {
    switch (e.keyCode) {
        case 37:
            
            console.log('leftbtn');
            console.log(e.keyCode);
            break;
        case 38:
         
            console.log('upbtn');
            console.log(e.keyCode);
            break;
        case 39:
          
            console.log('rightbtn');
            console.log(e.keyCode);
            break;
        case 40:
          
            console.log('downbtn');
            console.log(e.keyCode);
            break;
    }
});





var lastScrollTop = 0;
$(window).scroll(function(event){
   var st = $(this).scrollTop();
   if (st > lastScrollTop){
    // console.log("down");


  


   

   } else {
    // console.log("up");
   }
   lastScrollTop = st;
});

