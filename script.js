function searchProducts() {
  let input = document.getElementById("searchInput").value.toLowerCase();
  let cards = document.getElementsByClassName("card");

  for (let i = 0; i < cards.length; i++) {
    let title = cards[i].getElementsByTagName("h3")[0].innerText.toLowerCase();

    if (title.includes(input)) {
      cards[i].style.display = "";
    } else {
      cards[i].style.display = "none";
    }
  }
}
let slideIndex = 0;
showSlides();

function showSlides() {

let slides = document.getElementsByClassName("slides");

for(let i=0;i<slides.length;i++){

slides[i].style.display="none";

}

slideIndex++;

if(slideIndex>slides.length){

slideIndex=1;

}

slides[slideIndex-1].style.display="block";

setTimeout(showSlides,3000);

}
const banners = [
  "images/banner1.jpg",
  "images/banner2.jpg",
  "images/banner3.jpg"
];

let currentBanner = 0;

setInterval(() => {
  currentBanner++;
  if (currentBanner >= banners.length) {
    currentBanner = 0;
  }
  document.getElementById("banner").src = banners[currentBanner];
}, 3000);
function searchProduct() {
  let input = document.getElementById("search").value.toLowerCase();
  let cards = document.querySelectorAll(".card");

  cards.forEach(card => {
    let name = card.querySelector("h3").innerText.toLowerCase();

    if (name.includes(input)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
}