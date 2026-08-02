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
let cartCount = 0;

function addToCart(productName) {
  cartCount++;
  document.getElementById("cart-count").innerText = cartCount;

  alert(productName + " added to cart!");
}
let cart = [];

function addToCart(productName, price = 0) {

cart.push({
name: productName,
price: price
});
<button onclick="removeItem(${index})">🗑 Remove</button>

cartCount++;

document.getElementById("cart-count").innerText = cartCount;

localStorage.setItem("cart", JSON.stringify(cart));

alert(productName + " Added Successfully!");

}
function placeOrder(window.location.href = "success.html";)let payment = document.querySelector('input[name="payment"]:checked').value;

order += "%0A💳 Payment: " + payment + "%0A";{

let name=document.getElementById("name").value;

let phone=document.getElementById("phone").value;

let address=document.getElementById("address").value;

let cart=JSON.parse(localStorage.getItem("cart"))||[];

let order="🛒 *New Order*%0A%0A";

order+="👤 Name: "+name+"%0A";

order+="📞 Phone: "+phone+"%0A";

order+="📍 Address: "+address+"%0A%0A";

order+="📦 Products:%0A";

cart.forEach(item=>{

order+="• "+item.name+" - ₹"+item.price+"%0A";

})

window.open("https://wa.me/917820041833?text="+order,"_blank");

}
function removeItem(index){

cart.splice(index,1);

localStorage.setItem("cart",JSON.stringify(cart));

loadCart();

}
let adminProducts = JSON.parse(localStorage.getItem("adminProducts")) || [];

function addProduct(){

let name = document.getElementById("productName").value;

let price = document.getElementById("productPrice").value;

adminProducts.push({
name:name,
price:price
});

localStorage.setItem("adminProducts",JSON.stringify(adminProducts));

alert("Product Added Successfully!");

}