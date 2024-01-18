const navbar = document.getElementsByTagName("nav")[0];
window.addEventListener("scroll", function () {
  console.log(window.scrollY);
  if (window.scrollY > 1) {
    navbar.classList.replace("bg-transparent", "nav-color");
  } else if (this.window.scrollY <= 0) {
    navbar.classList.replace("nav-color", "bg-transparent");
  }
});

const carouselContainer = document.querySelector(".carousel-container");
const carouselItems = document.querySelectorAll(".carousel-item");

let currentItem = 0;

function showCurrentItem() {
  carouselItems.forEach((item, index) => {
    if (index === currentItem) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
}

function nextItem() {
  currentItem++;
  if (currentItem >= carouselItems.length) {
    currentItem = 0;
  }
  return showCurrentItem();
}

function prevItem() {
  currentItem--;
  if (currentItem < 0) {
    currentItem = carouselItems.length - 1;
  }
  return showCurrentItem();
}

document.querySelector(".next-button").addEventListener("click", nextItem);
document.querySelector(".prev-button").addEventListener("click", prevItem);

// Set up a timer to automatically advance the carousel
setInterval(nextItem, 3000);
