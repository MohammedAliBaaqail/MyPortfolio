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
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    520: {
      slidesPerView: 2,
    },
    950: {
      slidesPerView: 3,
    },
  },
});

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

// [start] for adding animation effects on scroll-----------------------------------------

// backInLeft = document.querySelectorAll(".backInLeft");
// backInRight = document.querySelectorAll(".backInRight");
// rubberBand = document.querySelectorAll(".rubberBand");
// fadeInUp = document.querySelectorAll(".fadeInUp");
// fadeInDown = document.querySelectorAll(".fadeInDown");
// fadeInRight = document.querySelectorAll(".fadeInRight");
// fadeInLeft = document.querySelectorAll(".fadeInLeft");
// fadeIn = document.querySelectorAll(".fadeIn");
// bounceIn = document.querySelectorAll(".bounceIn");
zoomIn = document.querySelectorAll(".zoomIn");

skillsList = document.querySelectorAll(".skill-per");
skillsList1 = document.querySelectorAll(".skills");

listOfEffects = [
  // "backInLeft",
  // "backInRight",
  // "rubberBand",
  // "fadeInUp",
  // "fadeInDown",
  // "fadeInRight",
  // "fadeInLeft",
  // "fadeIn",
  // "bounceIn",
  "zoomIn",
];
list = [
  // backInLeft,
  // backInRight,
  // rubberBand,
  // fadeInUp,
  // fadeInDown,
  // fadeInRight,
  // fadeInLeft,
  // fadeIn,
  // bounceIn,
  zoomIn,
];

const vh = Math.max(
  document.documentElement.clientHeight || 0,
  window.innerHeight || 0
);

items = document.querySelectorAll(".container");

window.addEventListener(
  "scroll",
  () => {
    // let contentPosition = skillsList[0].getBoundingClientRect().bottom;
    // let contentPositionTop = skillsList[0].getBoundingClientRect().top;

    // for (i = 0; i < skillsList.length; i = i + 1) {
    //   let screenPosition = window.innerHeight;
    //   // console.log('vh',vh,j,i)
    //   // console.log('contentPosition',contentPosition)
    //   // console.log('screenPosition',screenPosition)

    //   if (
    //     contentPositionTop < screenPosition &&
    //     contentPositionTop + vh > screenPosition
    //   ) {
    //     skillsList[i].classList.add("skill-per");

    //     // skillsList[i].classList.add("scroll-effect");
    //   } else {
    //     skillsList[i].classList.remove("skill-per");

    //     // skillsList[i].classList.remove("scroll-effect");
    //   }
    // }

    for (j = 0; j < list.length; j = j + 1) {
      for (i = 0; i < list[j].length; i = i + 1) {
        let contentPosition = list[j][i].getBoundingClientRect().bottom;
        let screenPosition = window.innerHeight;
        // console.log('vh',vh,j,i)
        // console.log('contentPosition',contentPosition)
        // console.log('screenPosition',screenPosition)

        if (
          contentPosition < screenPosition &&
          contentPosition + vh > screenPosition
        ) {
          list[j][i].classList.add("animate__animated");
          list[j][i].classList.add(`animate__${listOfEffects[j]}`);
          list[j][i].classList.add("scroll-effect");
        } else {
          list[j][i].classList.add("animate__animated");
          list[j][i].classList.remove(`animate__${listOfEffects[j]}`);
          list[j][i].classList.remove("scroll-effect");
        }
      } //end of 'i' for loop
    } //end of 'j' for loop
  } //end of arrow function
); //end of window.addEventListener
// [end]for adding animation effects on scroll------------------------------------------

// [start] for active navigation ---------------------------------------------
const li = document.querySelectorAll(".links");
const hove = document.querySelectorAll("a");
const sec = document.querySelectorAll("section");
const navBg = document.querySelectorAll(".nav-bg");

function activeMenu() {
  let len = sec.length;
  let navLen = navBg.length;
  while (--len && window.scrollY + 97 < sec[len].offsetTop) {}
  li.forEach((ltx) => ltx.classList.remove("active"));
  li[len].classList.add("active");
  hove.forEach((i) => i.classList.remove("hovered"));
  hove[len].classList.add("hovered");
  navBg.forEach((i) => i.classList.remove("nav-clr"));
  navBg[len].classList.add("nav-clr");
}

activeMenu();
window.addEventListener("scroll", activeMenu);
// [end] for active navigation -----------------------------------------------

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

mediumZoom(".zoom", {
  margin: 50,
  background: "#000000",
});

// [start] for changing page colors ---------------------------------------------
let aboutMecolorInput = document.querySelector("#about-me-clr");
localStorage.getItem("color1") == null
  ? (aboutMecolorInput.value = "#ffbf00")
  : (aboutMecolorInput.value = localStorage.getItem("color1"));
document.documentElement.style.setProperty(
  "--about-me-clr",
  aboutMecolorInput.value
);

let skillColorInput = document.querySelector("#skills-clr");
// console.log(localStorage.getItem("color2"));
localStorage.getItem("color2") == null
  ? (skillColorInput.value = "#ff0000")
  : (skillColorInput.value = localStorage.getItem("color2"));
document.documentElement.style.setProperty(
  "--skills-clr",
  skillColorInput.value
);

let workColorInput = document.querySelector("#work-clr");
// console.log(localStorage.getItem("color3"));
localStorage.getItem("color3") == null
  ? (workColorInput.value = "#009dff")
  : (workColorInput.value = localStorage.getItem("color3"));
document.documentElement.style.setProperty("--work-clr", workColorInput.value);

// workColorInput.value = '#009dff';
// console.log(workColorInput.value);

aboutMecolorInput.addEventListener("input", () => {
  let aboutMecolor = aboutMecolorInput.value;
  localStorage.setItem("color1", aboutMecolor);
  document.documentElement.style.setProperty("--about-me-clr", aboutMecolor);
});
skillColorInput.addEventListener("input", () => {
  let skillColor = skillColorInput.value;
  localStorage.setItem("color2", skillColor);

  document.documentElement.style.setProperty("--skills-clr", skillColor);
});
workColorInput.addEventListener("input", () => {
  let workColor = workColorInput.value;
  localStorage.setItem("color3", workColor);

  document.documentElement.style.setProperty("--work-clr", workColor);
});

let colorButton = document.querySelector(".color-button");
let colorPickers = document.querySelector(".color-pickers");
colorButton.addEventListener("click", () => {
  colorPickers.classList.toggle("open");
  colorButton.classList.toggle("open");
});
let resetButton = document.querySelector(".reset-button");
resetButton.addEventListener("click", () => {
  localStorage.removeItem("color1");
  localStorage.removeItem("color2");
  localStorage.removeItem("color3");
  window.location.reload(false);
});
// [end] for changing page colors ---------------------------------------------
