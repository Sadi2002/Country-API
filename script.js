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
const errorMsg = document.querySelector(".error-text");

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

// ALL COUNTRY NAME
const countryList = [
  "Afghanistan",
  "Albania",
  "Algeria",
  "Andorra",
  "Angola",
  "Anguilla",
  "Antigua &amp; Barbuda",
  "Argentina",
  "Armenia",
  "Aruba",
  "Australia",
  "Austria",
  "Azerbaijan",
  "Bahamas",
  "Bahrain",
  "Bangladesh",
  "Barbados",
  "Belarus",
  "Belgium",
  "Belize",
  "Benin",
  "Bermuda",
  "Bhutan",
  "Bolivia",
  "Bosnia &amp; Herzegovina",
  "Botswana",
  "Brazil",
  "British Virgin Islands",
  "Brunei",
  "Bulgaria",
  "Burkina Faso",
  "Burundi",
  "Cambodia",
  "Cameroon",
  "Cape Verde",
  "Cayman Islands",
  "Chad",
  "Chile",
  "China",
  "Colombia",
  "Congo",
  "Cook Islands",
  "Costa Rica",
  "Cote D Ivoire",
  "Croatia",
  "Cruise Ship",
  "Cuba",
  "Cyprus",
  "Czech Republic",
  "Denmark",
  "Djibouti",
  "Dominica",
  "Dominican Republic",
  "Ecuador",
  "Egypt",
  "El Salvador",
  "Equatorial Guinea",
  "Estonia",
  "Ethiopia",
  "Falkland Islands",
  "Faroe Islands",
  "Fiji",
  "Finland",
  "France",
  "French Polynesia",
  "French West Indies",
  "Gabon",
  "Gambia",
  "Georgia",
  "Germany",
  "Ghana",
  "Gibraltar",
  "Greece",
  "Greenland",
  "Grenada",
  "Guam",
  "Guatemala",
  "Guernsey",
  "Guinea",
  "Guinea Bissau",
  "Guyana",
  "Haiti",
  "Honduras",
  "Hong Kong",
  "Hungary",
  "Iceland",
  "India",
  "Indonesia",
  "Iran",
  "Iraq",
  "Ireland",
  "Isle of Man",
  "Israel",
  "Italy",
  "Jamaica",
  "Japan",
  "Jersey",
  "Jordan",
  "Kazakhstan",
  "Kenya",
  "Kuwait",
  "Kyrgyz Republic",
  "Laos",
  "Latvia",
  "Lebanon",
  "Lesotho",
  "Liberia",
  "Libya",
  "Liechtenstein",
  "Lithuania",
  "Luxembourg",
  "Macau",
  "Macedonia",
  "Madagascar",
  "Malawi",
  "Malaysia",
  "Maldives",
  "Mali",
  "Malta",
  "Mauritania",
  "Mauritius",
  "Mexico",
  "Moldova",
  "Monaco",
  "Mongolia",
  "Montenegro",
  "Montserrat",
  "Morocco",
  "Mozambique",
  "Namibia",
  "Nepal",
  "Netherlands",
  "Netherlands Antilles",
  "New Caledonia",
  "New Zealand",
  "Nicaragua",
  "Niger",
  "Nigeria",
  "Norway",
  "Oman",
  "Pakistan",
  "Palestine",
  "Panama",
  "Papua New Guinea",
  "Paraguay",
  "Peru",
  "Philippines",
  "Poland",
  "Portugal",
  "Puerto Rico",
  "Qatar",
  "Reunion",
  "Romania",
  "Russia",
  "Rwanda",
  "Saint Pierre &amp; Miquelon",
  "Samoa",
  "San Marino",
  "Satellite",
  "Saudi Arabia",
  "Senegal",
  "Serbia",
  "Seychelles",
  "Sierra Leone",
  "Singapore",
  "Slovakia",
  "Slovenia",
  "South Africa",
  "South Korea",
  "Spain",
  "Sri Lanka",
  "St Kitts &amp; Nevis",
  "St Lucia",
  "St Vincent",
  "St. Lucia",
  "Sudan",
  "Suriname",
  "Swaziland",
  "Sweden",
  "Switzerland",
  "Syria",
  "Taiwan",
  "Tajikistan",
  "Tanzania",
  "Thailand",
  "Timor L'Este",
  "Togo",
  "Tonga",
  "Trinidad &amp; Tobago",
  "Tunisia",
  "Turkey",
  "Turkmenistan",
  "Turks &amp; Caicos",
  "Uganda",
  "Ukraine",
  "United Arab Emirates",
  "United Kingdom",
  "Uruguay",
  "Uzbekistan",
  "Venezuela",
  "Vietnam",
  "Virgin Islands (US)",
  "Yemen",
  "Zambia",
  "Zimbabwe",
];

// FUNCTION WHICH CREATE API AND SEND IT TO ceateCard FUNCTION
const getCountry = function (country) {
  // COUNTRY 1
  fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then((resp) => resp.json())
    .then((data) => createCard(data[0], console.log(data[0])))
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

  backArrow.style.opacity = 1;
};

// LISTENERS
backArrow.addEventListener("click", function () {
  backToStart();
  location.reload();
});

rightArrow.addEventListener("click", function () {
  const fetchInput = inputCountry.value;
  getCountry(fetchInput);
  getBorders(fetchInput);
  showCard();
});
