// FETCHING ELEMENTS
const rightArrow = document.querySelector(".arrow-right");
const inputCountry = document.querySelector("input");
const backArrow = document.querySelector(".back");
const container = document.querySelector(".container");
const countryCardContainer = document.querySelector(".country-card__container");
const countryCard = document.querySelector(".country-card");
const fetchDataContainer = document.querySelector(".container-fetch");
const borderContainer = document.querySelector(".right-side__border");
const allBorder = document.querySelector(".all-borders");

// FUNCTION WHICH GET NAME FROM GetCountry AND CREATE CARD BASED ON IT
const createCard = function (country) {
  const languageData = Object.keys(country.languages)[0];
  const firstLanguage = country.languages[languageData];

  const html = `<div class="country-card">
  <div class="card__left-side">
    <img
      src="${country.flags.png}"
      alt="zdjęcie flagi kraju"
    />
    <div class="left-side__maps">
      <div class="maps-title">Area: ${country.area} km<sup>2</sup></div>
      <a href="${country.maps.googleMaps}" target="_blank" class="maps-link"
        ><i class="fas fa-arrow-right"></i>Check ${
          country.name.common
        } on Google
        map<i class="fas fa-arrow-left"></i
      ></a>
    </div>
  </div>
  <div class="card__right-side">
    <div class="card__title">${country.name.common}</div>
    <div class="right-side__three-box">
      <div class="right-side__box">
        <div class="right-side__circle">1</div>
        <h3 class="population-title">Population</h3>
        <p class="population">${Math.trunc(
          country.population / 1000000
        )} mln</p>
      </div>
      <div class="right-side__box">
        <div class="right-side__circle">2</div>
        <h3 class="population-title">Language</h3>
        <p class="population">${firstLanguage}</p>
      </div>
      <div class="right-side__box">
        <div class="right-side__circle">3</div>
        <h3 class="population-title">Region</h3>
        <p class="population">${country.region}</p>
      </div>
    </div>

    <div class="right-side__borders-container">
      <h3 class="borders-title">Borders</h3>
      
    </div>
  </div>
</div>`;

  countryCardContainer.insertAdjacentHTML("beforeend", html);
};

const createBorder = function (neighbour) {
  const html = `<div class="all-borders">
  <div class="right-side__border">
    <img src="${neighbour}" alt="zdjecie flagi kraju" />
    <h4 class="border-subtitle">Test</h4>
  </div>
  <div class="right-side__border">
    <img src="${neighbour}" alt="zdjecie flagi kraju" />
    <h4 class="border-subtitle">TEst</h4>
  </div>
  <div class="right-side__border">
    <img src="${neighbour}" alt="zdjecie flagi kraju" />
    <h4 class="border-subtitle">Test</h4>
  </div>
  </div>`;

  console.log(neighbour);

  allBorder.insertAdjacentHTML("beforeend", html);
};

// FUNCTION WHICH CREATE API AND SEND IT TO ceateCard FUNCTION
const getCountry = function (country) {
  // COUNTRY 1
  fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then((resp) => resp.json())
    .then((data) => createCard(data[0]))
    .catch((err) => console.error(err));
};

const getBorders = function (neighbour) {
  // BORDERS
  return fetch(`https://restcountries.com/v3.1/name/${neighbour}`)
    .then((resp) => resp.json())
    .then(function (data) {
      const onlyThreeBorders = data[0].borders.slice(0, 3);
      console.log(onlyThreeBorders);
    })
    .catch((err) => console.error(err));
};

const backToStart = function () {
  countryCardContainer.textContent = "";

  countryCardContainer.style.opacity = 0;
  countryCardContainer.style.visibility = "hidden";

  fetchDataContainer.style.opacity = 1;
  fetchDataContainer.style.visibility = "visible";
};

const showCard = function () {
  countryCardContainer.style.opacity = 1;
  countryCardContainer.style.visibility = "visible";

  fetchDataContainer.style.opacity = 0;
  fetchDataContainer.style.visibility = "hidden";
};

// LISTENERS
backArrow.addEventListener("click", function () {
  backToStart();
});

rightArrow.addEventListener("click", function () {
  const fetchInput = inputCountry.value;
  getCountry(fetchInput);
  getBorders(fetchInput);
  showCard();
});
