const accordian = document.querySelectorAll(".accordian-flex-head");
const hamburger = document.getElementsByClassName("hamburger");
const mobile_nav = document.getElementsByClassName("mobile-nav");
console.log(window.innerWidth);
window.addEventListener("resize", function () {
  if (this.window.innerWidth > 1270) {
    mobile-nav[0].classList.remove("mobile-nav-active");
  }
});

hamburger[0].addEventListener("click", function () {
  const mobile_nav_bar = mobile_nav[0];
  if (mobile_nav_bar.classList.contains("mobile-nav-active")) {
    mobile_nav_bar.classList.remove("mobile-nav-active");
  } else {
    mobile_nav_bar.classList.add("mobile-nav-active");
  }
});

for (let i = 0; i < accordian.length; i++) {
  accordian[i].addEventListener("click", function (e) {
    const nextSibCurr = this.nextElementSibling;
    const firstChlid = this.firstElementChild;
    console.log(nextSibCurr.classList.contains("active"));

   
    for (let j = 0; j < accordian.length; j++) {
      if (i === j) continue;
      let nextSibHere = accordian[j].nextElementSibling;
      let firstChlidHere = accordian[j].firstElementChild;
      firstChlidHere.classList.remove("activeContent");
      nextSibHere.classList.remove("active");
    }

   
    nextSibCurr.classList.toggle("active");
    firstChlid.classList.toggle("activeContent");
  });
}






