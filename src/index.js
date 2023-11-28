/* 
1. fetch json info, display image for each ramen in #ramen-menu
2. add click event listener to image, display all info in #ramen-detail
3. new ramen afer forms submission
*/

let currentRamen;
let ramenMenu;

document.addEventListener("DOMContentLoaded", (event) => {
  fetch("http://localhost:3000/ramens")
    .then(res => res.json())
    .then(data => {
      loadImages(data);
      addClickListen(data);
 });
});

function loadImages(ramens) {
    ramenMenu = document.querySelector("#ramen-menu");
    ramens.forEach(ramen => {
    const ramenImg = document.createElement("img");
    ramenImg.src = ramen.image;
    ramenImg.addEventListener("click", () => displayDetails(ramen));
    ramenMenu.appendChild(ramenImg);
  });
}

function displayDetails(ramen) {
  const detailImage = document.querySelector(".detail-image");
  const name = document.querySelector(".name");
  const restaurant = document.querySelector(".restaurant");

  detailImage.src = ramen.image;
  name.innerText = ramen.name;
  restaurant.innerText = ramen.restaurant;
}

function addClickListen(ramens) {
  const ramenImages = document.querySelectorAll("#ramen-menu img");
  ramenImages.forEach((image, index) => {
    image.addEventListener("click", () => displayDetails(ramens[index]));
  });
}
function newRamen() {
    const ramenForm = document.querySelector("#new-ramen");
    ramenForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const nameInput = document.querySelector("#new-name");
      const restaurantInput = document.querySelector("#new-restaurant");
      const imageInput = document.querySelector("#new-image");
      const ratingInput = document.querySelector("#new-rating");
      const commentInput = document.querySelector("#new-comment");
  
      const newRamen = {
        name: nameInput.value,
        restaurant: restaurantInput.value,
        image: imageInput.value,
        rating: ratingInput.value,
        comment: commentInput.value,
      };
      
      ramenMenu.appendChild(newRamen);
      console.log(newRamen);
     
    });
  }


