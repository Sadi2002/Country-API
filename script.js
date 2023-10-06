// FETCHING ELEMENTS
const rightArrow = document.querySelector(".arrow-right");

// FUNCTION WHICH GET NAME FROM GetCountry AND CREATE CARD BASED ON IT
const createCard = function (country) {
  console.log(country);
};

// FUNCTION WHICH CREATE API AND SEND IT TO ceateCard FUNCTION
const getCountry = function (country) {
  fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then((resp) => resp.json())
    .then((data) => createCard(data[0]));
};

// CALLING
getCountry("usa");
