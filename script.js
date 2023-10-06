const rightArrow = document.querySelector(".fa-arrow-right");

rightArrow.addEventListener("click", function (country) {
  fetch("https://restcountries.com/v3.1/name/${country}")
    .then((resp) => resp.json())
    .then((data) => console.log(data));
});
