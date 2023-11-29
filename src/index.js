document.addEventListener("DOMContentLoaded", (event) => {
    fetch("db.json")
      .then(res => res.json())
      .then(data => {
        ramenInfo(data.ramens);
      });
  });
  
  function ramenInfo(ramens) {
    const ramenMenu = document.querySelector("#ramen-menu");
    ramens.forEach(ramen => {
      const img = document.createElement("img");
      img.src = ramen.image;
      img.addEventListener('click', () => {
        displayRamenDetails(ramen);
      });
      ramenMenu.appendChild(img);
    });
  }
  
  function displayRamenDetails(ramen) {
    const ramenDetailDiv = document.querySelector("#ramen-detail");
    const ramenImage = ramenDetailDiv.querySelector(".detail-image");
    const ramenName = ramenDetailDiv.querySelector(".name");
    const ramenRestaurant = ramenDetailDiv.querySelector(".restaurant");
    const ramenRating = document.querySelector("#rating-display");
    const ramenComment = document.querySelector("#comment-display");
  
    ramenImage.src = ramen.image;
    ramenName.textContent = ramen.name;
    ramenRestaurant.textContent = ramen.restaurant;
    ramenRating.textContent = ramen.rating;
    ramenComment.textContent = ramen.comment;
  }
  
  const newRamenForm = document.querySelector("#new-ramen");
  
  newRamenForm.addEventListener("submit", event => {
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
      rating: parseInt(ratingInput.value),
      comment: commentInput.value,
    };
  
    const ramens = []; 
  
    ramens.push(newRamen);
    ramenInfo(ramens);
    newRamenForm.reset();
  });