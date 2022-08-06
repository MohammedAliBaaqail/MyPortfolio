"use strict";

var swiper = new Swiper(".slide-content", {
  slidesPerView: 3,
  spaceBetween: 25,
  loop: true,
  centerSlide: "true",
  fade: "true",
  grabCursor: "true",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  breakpoints: {
    0: {
      slidesPerView: 1
    },
    520: {
      slidesPerView: 2
    },
    950: {
      slidesPerView: 3
    }
  }
}); // var sections = document.getElementsByTagName("section"),
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
// [start] for adding animation effects on scroll-----------------------------------------
// backInLeft = document.querySelectorAll(".backInLeft");
// backInRight = document.querySelectorAll(".backInRight");
// rubberBand = document.querySelectorAll(".rubberBand");
// fadeInUp = document.querySelectorAll(".fadeInUp");
// fadeInRight = document.querySelectorAll(".fadeInRight");
// fadeInLeft = document.querySelectorAll(".fadeInLeft");

fadeIn = document.querySelectorAll(".fadeIn");
skillsList = document.querySelectorAll(".skill-per");
skillsList1 = document.querySelectorAll(".skills");
listOfEffects = [// "backInLeft",
// "backInRight",
// "rubberBand",
// "fadeInUp",
// "fadeInRight",
// "fadeInLeft",
"fadeIn"];
list = [// backInLeft,
// backInRight,
// rubberBand,
// fadeInUp,
// fadeInRight,
// fadeInLeft,
fadeIn];
var vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
items = document.querySelectorAll(".container");
window.addEventListener("scroll", function () {
  var contentPosition = skillsList[0].getBoundingClientRect().bottom;
  var contentPositionTop = skillsList[0].getBoundingClientRect().top;

  for (i = 0; i < skillsList.length; i = i + 1) {
    var screenPosition = window.innerHeight; // console.log('vh',vh,j,i)
    // console.log('contentPosition',contentPosition)
    // console.log('screenPosition',screenPosition)

    if (contentPositionTop < screenPosition && contentPositionTop + vh > screenPosition) {
      skillsList[i].classList.add("skill-per");
      skillsList[i].classList.add("scroll-effect");
    } else {
      skillsList[i].classList.remove("skill-per");
      skillsList[i].classList.remove("scroll-effect");
    }
  }

  for (j = 0; j < list.length; j = j + 1) {
    for (i = 0; i < list[j].length; i = i + 1) {
      var _contentPosition = list[j][i].getBoundingClientRect().bottom;
      var _screenPosition = window.innerHeight; // console.log('vh',vh,j,i)
      // console.log('contentPosition',contentPosition)
      // console.log('screenPosition',screenPosition)

      if (_contentPosition < _screenPosition && _contentPosition + vh > _screenPosition) {
        // list[j][i].classList.add("animate__animated");
        // list[j][i].classList.add(`animate__${listOfEffects[j]}`);
        list[j][i].classList.add("scroll-effect");
      } else {
        // list[j][i].classList.add("animate__animated");
        // list[j][i].classList.remove(`animate__${listOfEffects[j]}`);
        list[j][i].classList.remove("scroll-effect");
      }
    } //end of 'i' for loop

  } //end of 'j' for loop

} //end of arrow function
); //end of window.addEventListener
// [end]for adding animation effects on scroll------------------------------------------
// [start] for active navigation ---------------------------------------------

var li = document.querySelectorAll(".links");
var hove = document.querySelectorAll("a");
var sec = document.querySelectorAll("section");
var navBg = document.querySelectorAll(".nav-bg");

function activeMenu() {
  var len = sec.length;
  var navLen = navBg.length;

  while (--len && window.scrollY + 97 < sec[len].offsetTop) {}

  li.forEach(function (ltx) {
    return ltx.classList.remove("active");
  });
  li[len].classList.add("active");
  hove.forEach(function (i) {
    return i.classList.remove("hovered");
  });
  hove[len].classList.add("hovered");
  navBg.forEach(function (i) {
    return i.classList.remove("nav-clr");
  });
  navBg[len].classList.add("nav-clr");
}

activeMenu();
window.addEventListener("scroll", activeMenu); // [end] for active navigation -----------------------------------------------
// document.addEventListener('keydown', function(e) {
//     switch (e.keyCode) {
//         case 37:
//             console.log('leftbtn');
//             console.log(e.keyCode);
//             break;
//         case 38:
//             console.log('upbtn');
//             console.log(e.keyCode);
//             break;
//         case 39:
//             console.log('rightbtn');
//             console.log(e.keyCode);
//             break;
//         case 40:
//             console.log('downbtn');
//             console.log(e.keyCode);
//             break;
//     }
// });
// var lastScrollTop = 0;
// $(window).scroll(function(event){
//    var st = $(this).scrollTop();
//    if (st > lastScrollTop){
//     console.log("down");
//    } else {
//     console.log("up");
//    }
//    lastScrollTop = st;
// });
// let ggwp = window.getComputedStyle(a, '::before');
// console.log(ggwp);
// style.addEventListener('mouseover', function() {
//   console.log('Event triggered');
// });
// var sasa = new MouseEvent('mouseover', {
//   'view': window,
//   'bubbles': true,
//   'cancelable': true
// });
// ggwp.dispatchEvent(sasa);

/**
 * Skills animation
 */
// let skilsContent = select(".skills-content");
// if (skilsContent) {
//   new Waypoint({
//     element: skilsContent,
//     offset: "80%",
//     handler: function (direction) {
//       let progress = select(".progress .progress-bar", true);
//       progress.forEach((el) => {
//         el.style.width = el.getAttribute("aria-valuenow") + "%";
//       });
//     },
//   });
// }
// var swiper = new Swiper(".slide-content", {
//   slidesPerView: 3,
//   spaceBetween: 25,
//   loop: true,
//   centerSlide: "true",
//   fade: "true",
//   grabCursor: "true",
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//     dynamicBullets: true,
//   },
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
//   breakpoints: {
//     0: {
//       slidesPerView: 1,
//     },
//     520: {
//       slidesPerView: 2,
//     },
//     950: {
//       slidesPerView: 3,
//     },
//   },
// });
// const next_btn = document.getElementsByClassName("swiper-button-next");
// next_btn.addEventListener("click", mediumZoom('.zoom',{
//   margin:50,
//   background:'#ffffff00'
// }));

mediumZoom('.zoom', {
  margin: 50,
  background: '#000000'
});