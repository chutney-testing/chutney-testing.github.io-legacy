// toggle the menu in responsive mode
document.getElementById('nav-toggle').onclick = function () {
  document.getElementById("nav-content").classList.toggle("hidden");
}

mybutton = document.getElementById("myBtn");

// when scrolling a bit(> 20), allows the user to see the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// when the user clicks on the button, scroll back to the top
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// for the accordion on the left menu (components) && (width to display r => l || height h => l)
const accordionHeader = document.querySelectorAll(".accordion-header");
accordionHeader.forEach((header) => {
  header.addEventListener("click", function () {
    const accordionContent = header.parentElement.querySelector(".accordion-content");
    let accordionMaxHeight = accordionContent.style.maxHeight;

    if (accordionMaxHeight == "0px" || accordionMaxHeight.length == 0) {
      accordionContent.style.maxHeight = `${accordionContent.scrollHeight + 0}px`;
    } else {
      accordionContent.style.maxHeight = `0px`;
    }
  });
});

// toggle the right menu in responsive
document.getElementById('nav-togglemenu').onclick = function () {
  document.getElementById("nav-contentmenu").classList.toggle("hidden");
}